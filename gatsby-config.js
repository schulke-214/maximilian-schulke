require('dotenv').config();
const path = require('path');

const CONTENT_DIR = path.join(__dirname, 'content');


const dev = [
	{
		resolve: 'gatsby-plugin-alias-imports',
		options: {
			alias: {
				components: './src/components',
				fonts: './src/fonts',
				lib: './src/lib',
				utils: './src/utils',
				hooks: './src/hooks',
				layouts: './src/layouts',
				pages: './src/pages',
				templates: './src/templates',
			},
		},
	},
	'gatsby-plugin-styled-components',
	'gatsby-plugin-typescript',
];

const images = [
	{
		resolve: 'gatsby-remark-images',
		options: {
			maxWidth: 960,
			quality: 90,
			linkImagesToOriginal: false,
		}
	}
];

const sources = [
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'static',
			path: path.join(__dirname, 'static'),
		},
	},
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'articles',
			path: path.join(CONTENT_DIR, 'articles'),
		},
	},
	{
		resolve: 'gatsby-source-filesystem',
		options: {
			name: 'pages',
			path: path.join(CONTENT_DIR, 'pages'),
		},
	},
	'gatsby-transformer-sharp',
	'gatsby-plugin-sharp',
	...images,
	{
		resolve: 'gatsby-plugin-mdx',
		options: {
			extensions: ['.mdx', '.md'],
			gatsbyRemarkPlugins: [...images],
		},
	},
];

const seo = [
	{
		resolve: 'gatsby-plugin-manifest',
		options: {
			name: 'Maximilian Schulke',
			short_name: 'Maximilian Schulke',
			start_url: '/',
			background_color: '#000000',
			theme_color: '#ffffff',
			display: 'standalone',
			icon: 'static/assets/favicon.png',
		},
	},
	{
		resolve: `gatsby-plugin-feed`,
		options: {
			query: `
				{
					site {
						siteMetadata {
							locale
							categories {
								name
								slug
							}
							seo {
								author
								title
								description
								url
							}
						}
					}
				}
			`,
			setup: ({query, ...rest}) => {
				const {seo, locale, categories} = query.site.siteMetadata;

				return {
					...seo,
					...rest,
					site_url: seo.url,
					copyright: seo.author,
					generator: seo.author,
					categories: categories.map(c => c.name),
					language: locale,
				}
			},
			feeds: [
				{
					serialize: ({ query: { site, articles } }) => {
						const seo = site.siteMetadata.seo;
						return articles.edges.map(({ node }) => ({
							author: seo.author,
							title: node.title,
							description: node.excerpt,
							date: node.published,
							url: seo.url + node.slug,
							link: seo.url + node.slug,
							guid: seo.url + node.slug,
							custom_elements: [{ 'content:encoded': node.html }],
						}));
					},
					query: `
						{
							articles: allMdxArticle(sort: {fields: published, order: DESC}) {
								edges {
									node {
										slug
										html
										excerpt
										published
										title
									}
								}
							}
						}
					`,
					output: '/rss.xml',
					title: 'Maximilian Schulke',
					link: 'https://blog.maximilianschulke.com',
				},
			],
		},
	},
	'gatsby-plugin-offline',
	'gatsby-plugin-react-helmet'
];

module.exports = {
	siteMetadata: {
		locale: 'en_US',
		seo: {
			title: 'Maximilian Schulke',
			description: 'Hi! This is a place where i share ideas, concepts and thoughts about software related topcis! I write mostly about compiler / language design, linux or frontend topics.',
			author: 'Maximilian Schulke',
			twitter: '@schulke-214',
			url: 'https://blog.maximilianschulke.com',
			previewImage: '/static/seo-banner.png',
			keywords: ['Linux', 'Rust', 'Developer Blog', 'Computer Scienece', 'Web Development', 'Math']
		},
		categories: [
			{
				name: 'Frontend',
				slug: '/category/frontend',
				color: '#62d0dd',
			},
			{
				name: 'Theory',
				slug: '/category/theory',
				color: '#ff8e21',
			},
			{
				name: 'Compiler',
				slug: '/category/compiler',
				color: '#a2d39b',
			},
			{
				name: 'Infrastructure',
				slug: '/category/infrastructure',
				color: '#ceb4ff',
			},
			{
				name: 'Security',
				slug: '/category/security',
				color: '#a0b7ff',
			},
			{
				name: 'Linux',
				slug: '/category/linux',
				color: '#ff708b',
			},
		],
		support: {
			headline: 'Do you enjoy reading this article?',
			cta: 'Support me on Patreon!',
			url: 'https://www.patreon.com/maximilianschulke',
			description: 'To get access to alot of patron only content, choose the next topics i write about and much more.'
		},
		footer: {
			legal: [
				{
					slug: '/legal-notice',
					title: 'Legal Notice'
				},
				{
					slug: '/data-privacy',
					title: 'Data Privacy'
				}
			],
			social: [
				{
					href: 'https://github.com/schulke-214',
					title: 'GitHub'
				},
				{
					href: 'https://reddit.com/u/schulke-214',
					title: 'Reddit'
				},
				{
					href: 'mailto:hello@maximilianschulke.com',
					title: 'Mail'
				}
			],
		},
	},
	plugins: [
		...dev,
		...sources,
		...seo
	],
};

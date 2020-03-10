const DOCUMENT_META_FRAGMENT = `
	uid
	type
	tags
`;

const PAGE_QUERY = `{
	prismic {
		pages: allPages(lang: "en-us") {
	  		edges {
				node {
					_meta {
						uid
						type
						tags
					}
					title
				}
			}
		}
	}
}`;

const POST_QUERY = `{
	prismic {
		posts: allBlogPosts(lang: "en-us") {
	  		edges {
				node {
					_meta {
						${DOCUMENT_META_FRAGMENT}
					}
					title
					description
				}
			}
		}
	}
}`;

const SERIES_QUERY = `{
	prismic {
		series: allSeriess(lang: "en-us") {
	  		edges {
				node {
					_meta {
						${DOCUMENT_META_FRAGMENT}
					}
					title
					description
				}
			}
		}
	}
}`;

const flatten = arr =>
	arr.map(({ node: { _meta, ...rest } }) => ({
		..._meta,
		...rest,
		// use the raw title
		title: rest.title[0].text
	}));

const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
	{
		query: PAGE_QUERY,
		transformer: ({ data }) => flatten(data.prismic.pages.edges),
		indexName: `pages`,
		settings
	},
	{
		query: POST_QUERY,
		transformer: ({ data }) => flatten(data.prismic.posts.edges),
		indexName: `posts`,
		settings
	},
	{
		query: SERIES_QUERY,
		transformer: ({ data }) => flatten(data.prismic.series.edges),
		indexName: `series`,
		settings
	}
];

module.exports = queries;

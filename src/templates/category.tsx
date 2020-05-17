import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from 'layouts/default';
import SEO from 'components/layout/SEO';
import ArticleList from 'components/core/ArticleList';

interface CategoryProps {
	data: any;
	pageContext: any;
}

const Category: FunctionComponent<CategoryProps> = ({ data, pageContext }) => {
	const { categories } = data.site.siteMetadata;

	const category: any = categories.find(({ slug }: any) => slug === pageContext.slug);
	
	console.log(categories, category);

	return (
		<Layout readMode={false}>
			<h1 css={`color: ${category.color};`} >{category.name}</h1>
			{/* <SEO title={data.page.title} description={data.page.excerpt} /> */}
			{/* <MDXRenderer>{data.page.body}</MDXRenderer> */}
			<ArticleList filter={article => article.category.slug === category.slug} />
		</Layout>
	);};

export const query = graphql`
	query CategoryQuery {
		site {
			siteMetadata {
				categories {
					name
					slug
					color
				}
			}
		}
	}
`;

export default Category;

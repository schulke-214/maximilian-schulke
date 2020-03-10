import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';
import algoliasearch from 'algoliasearch/lite';
import { graphql } from 'gatsby';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch-dom';

import { rem } from 'lib/polished';

import Layout from 'layouts/default';
import Form from 'components/ui/form';
import PageTitle from 'components/core/PageTitle';

const SearchResultCount = styled.span`
	display: block;
	width: 100%;
	text-align: center;
	font-size: ${rem(12)};
	margin-bottom: ${props => rem(props.theme.spacings.large)};
`;

const SearchResults = styled.div`
	display: flex;
	flex-direction: column;
`;

interface SearchProps {
	data: any;
	location: any;
}

const Search: FunctionComponent<SearchProps> = ({ data, location }) => {
	const document = data.prismic.content.edges[0].node;

	const AlgoliaClient = algoliasearch(
		process.env.GATSBY_ALGOLIA_APP_ID as string,
		process.env.GATSBY_ALGOLIA_SEARCH_KEY as string
	);

	return (
		<Layout location={location}>
			<PageTitle title={document.title} />

			<Form.Group>
				<Form.Input placeholder='Search an article' />
				<Form.Input placeholder='Tags Multiselect' />
				<Form.Input placeholder='Type Multiselect' />
			</Form.Group>
			<SearchResultCount>Found {0} Results</SearchResultCount>

			{/* <SearchResults></SearchResults> */}

			<InstantSearch indexName='pages' searchClient={AlgoliaClient}>
				<SearchBox />
				<Hits />
			</InstantSearch>

			<InstantSearch indexName='posts' searchClient={AlgoliaClient}>
				<SearchBox />
				<Hits />
			</InstantSearch>

			<InstantSearch indexName='series' searchClient={AlgoliaClient}>
				<SearchBox />
				<Hits />
			</InstantSearch>
		</Layout>
	);
};

export const query = graphql`
	{
		prismic {
			content: allSearchs(lang: "en-us") {
				edges {
					node {
						_meta {
							...DocumentMeta
						}
						title
					}
				}
			}
		}
	}
`;

export default Search;

import React from 'react';
import styled from 'styled-components';
import { rem } from 'lib/polished';

import { mobile, landscape } from 'lib/media';

export const Unaligned = styled.div`
	position: relative;
	z-index: ${props => props.theme.layers.default.content};
	width: 100vw;
	margin-left: -${props => rem(props.theme.spacings.large)};

	@media screen and (min-width: ${props => rem(props.theme.layout.maxWidth)}) {
		margin-left: calc((100vw - ${props => rem(props.theme.layout.maxWidth - (2 * props.theme.spacings.large)) }) * -0.5);
	}

	${mobile} {
		margin-left: -${props => rem(props.theme.spacings.medium)};
	}
`;

interface ContainerProps {
	slim?: boolean;
	flex?: boolean;
}

export default styled.div<ContainerProps>`
	display: ${props => (props.flex ? 'flex' : 'block')};
	width: 100%;
	margin: 0 auto;
	max-width: ${props => rem(props.theme.layout.maxWidth)};
	padding: ${props => (props.slim ? `0 ${rem(props.theme.spacings.large)}` : rem(props.theme.spacings.large))};

	> h1:first-child {
		margin-top: 0;
	}

	.gatsby-resp-image-wrapper {
		display: block;
		margin: ${props => rem(props.theme.spacings.large)} auto;
	
		img {
			display: block;
			width: 100%;
		}

		${landscape} {
			margin-left: ${props => rem(-props.theme.spacings.large)} !important;
			margin-right: ${props => rem(-props.theme.spacings.large)} !important;
		}

		${mobile} {
			margin: ${props => rem(props.theme.spacings.medium)} auto;
			margin-left: ${props => rem(-props.theme.spacings.medium)} !important;
			margin-right: ${props => rem(-props.theme.spacings.medium)} !important;
			width: 100vw;

		}
	}

	${mobile} {
		padding: ${props => (props.slim ? `0 ${rem(props.theme.spacings.medium)}` : rem(props.theme.spacings.medium))};
	}

	& > *:last-child {
		margin-bottom: 0;
	}
`;

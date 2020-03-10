import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.span`
	display: block;
	color: ${props => props.theme.colors.state.error};
`;

const Error: FunctionComponent<{}> = ({ children }) => <ErrorContainer>{children}</ErrorContainer>;

export default Error;

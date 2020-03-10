import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { rem } from 'lib/polished';

const GroupContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: ${props => rem(props.theme.spacings.large)};
`;

const Group: FunctionComponent<{}> = ({ children }) => <GroupContainer>{children}</GroupContainer>;

export default Group;

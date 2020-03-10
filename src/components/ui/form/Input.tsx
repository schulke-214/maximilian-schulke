import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import FormError from 'components/ui/form/Error';
import { rem } from 'lib/polished';

const InputContainer = styled.div`
	display: block;
	min-width: 0;
	max-width: 100%;
	width: 100%;
	margin-bottom: ${props => rem(props.theme.spacings.small)};
`;

const StyledInput = styled.input<{}>`
	display: block;
	min-width: 0;
	max-width: 100%;
	width: 100%;
	padding: ${props => rem(props.theme.spacings.xsmall)} ${props => rem(props.theme.spacings.small)};
	border: ${rem(1)} solid ${props => props.theme.colors.state.muted};
	border-radius: ${props => rem(props.theme.border.radius.rounded)};
`;

export interface InputProps {
	value?: string | number;
	placeholder?: string;
	error?: string;
}

const Input: FunctionComponent<InputProps> = ({ error, ...props }) => {
	return (
		<InputContainer>
			<StyledInput {...props} />
			{error && <FormError>{error}</FormError>}
		</InputContainer>
	);
};

export default Input;

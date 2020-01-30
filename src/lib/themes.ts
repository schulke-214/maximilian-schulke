import { DefaultTheme } from 'styled-components';

import { colors } from 'lib/colors';
import { lighten, darken, transparentize } from 'lib/polished';

const shared = {
	layout: {
		maxWidth: 880
	},
	spacings: {
		xlarge: 60,
		large: 40,
		medium: 20,
		small: 10,
		xsmall: 5
	},
	border: {
		radius: {
			rounded: 3
		}
	},
	animation: {
		duration: {
			instant: 0.1,
			fast: 0.25
		}
	},
	typography: {}
};

export const light: DefaultTheme = {
	...shared,
	colors: {
		foreground: colors.black,
		background: colors.white,
		highlight: colors.violet,
        highlightForeground: colors.white,
		highlightDark: darken(0.075, colors.violet),
		highlightLight: transparentize(0.75, colors.violet),
        highlightGradient: {
			colorStops: [colors.violet, colors.blue],
			toDirection: "-213deg"
		},
		muted: darken(0.05, colors.white)
	},
	_id: 'light'
};

export const dark: DefaultTheme = {
	...shared,
	colors: {
		foreground: colors.white,
		background: colors.black,
		highlight: colors.violet,
		highlightForeground: colors.white,
		highlightDark: darken(0.075, colors.violet),
		highlightLight: transparentize(0.75, colors.violet),
		highlightGradient: {
			colorStops: [colors.violet, colors.blue],
			toDirection: "-213deg"
		},
		muted: lighten(0.05, colors.black)
	},
	_id: 'dark'
};

export enum ThemeType {
	Light = 'light',
	Dark = 'dark'
}
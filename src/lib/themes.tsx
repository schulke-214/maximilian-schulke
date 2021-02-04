import React from 'react';
import { DefaultTheme } from 'styled-components';
import { Dark as DarkTheme } from 'lib/syntax';
import { Light as LightTheme } from 'lib/syntax';

import { colors } from 'lib/colors';
import { lighten, darken, transparentize } from 'lib/polished';

DarkTheme.plain.backgroundColor = 'rgb(20, 20, 20)';
LightTheme.plain.backgroundColor = 'rgb(248, 249, 250)';

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
			fast: 0.25,
			smooth: 0.5
		}
	},
	layers: {
		overlay: {
			foreground: 105,
			content: 100,
			background: 95
		},
		popup: {
			foreground: 55,
			content: 50,
			background: 45
		},
		default: {
			foreground: 5,
			content: 0,
			background: -5
		}
	},
	boxShadow: {
		default: 'rgba(0, 0, 0, 0.15) 0px 5px 40px'
	},
	hr: {
		color: darken(0.5, colors.white)
	},
	particles: {
		colors: [
			'#62d0dd',
			'#ff8e21',
			'#a2d39b',
			'#ceb4ff',
			'#a0b7ff',
			'#ff708b',
		],
		paths: [
			<>&int;</>,
			<>&Delta;</>,
			<>&alpha;</>,
			<>&beta;</>,
			<>&gt;</>,
			<>&lt;</>,
			<>≠</>,
			<>=</>,
			<>!</>,
			<>+</>,
			<>-</>,
			<>*</>,
			<>/</>,
			<>;</>,
			<>0</>,
			<>1</>,
		].map(char => <text><tspan x="12" y="42">{char}</tspan></text> )
	},
	latex: {
		border: '#a0b7ff',
		background: transparentize(0.75, '#a0b7ff'),
	}
};

const BLACK: string = colors.black;
const WHITE: string = colors.white;

const HIGHLIGHT: string = colors.orange;

// states
const SUCCESS: string = colors.green;
const INFO: string = colors.blue;
const ERROR: string = colors.red;

export const light: DefaultTheme = {
	...shared,
	colors: {
		foreground: BLACK,
		background: WHITE,
		navigationForeground: WHITE,
		navigationBackground: BLACK,
		highlight: HIGHLIGHT,
		highlightForeground: WHITE,
		highlightDark: darken(0.075, HIGHLIGHT),
		highlightLight: transparentize(0.75, HIGHLIGHT),
		state: {
			success: SUCCESS,
			info: INFO,
			error: ERROR,
			muted: darken(0.075, WHITE)
		}
	},
	code: {
		syntax: LightTheme,
		highlight: {
			border: HIGHLIGHT,
			background: transparentize(0.75, HIGHLIGHT)
		}
	},
	_id: 'light'
};

export const dark: DefaultTheme = {
	...shared,
	colors: {
		foreground: WHITE,
		background: BLACK,
		navigationForeground: WHITE,
		navigationBackground: BLACK,
		highlight: HIGHLIGHT,
		highlightForeground: WHITE,
		highlightDark: darken(0.075, HIGHLIGHT),
		highlightLight: transparentize(0.75, HIGHLIGHT),
		state: {
			success: SUCCESS,
			info: INFO,
			error: ERROR,
			muted: lighten(0.075, BLACK)
		}
	},
	code: {
		syntax: DarkTheme,
		highlight: {
			border: HIGHLIGHT,
			background: transparentize(0.75, HIGHLIGHT)
		}
	},
	_id: 'dark'
};

export enum ThemeType {
	Light = 'light',
	Dark = 'dark'
}

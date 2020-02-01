import React, { FunctionComponent, useContext } from 'react';
import { ThemeContext } from "styled-components";

import { ThemeType } from "lib/themes";

import NavigationItemIcon from "components/layout/navigation/NavigationItemIcon";

import {Invertible, Openable} from "components/layout/Header";

const Sun: FunctionComponent<Invertible> = ({ inverted }) => (
    <NavigationItemIcon strokeWidth={2} inverted={inverted}>
        <circle cx='12' cy='12' r='5' />
        <line x1='12' y1='1' x2='12' y2='3' />
        <line x1='12' y1='21' x2='12' y2='23' />
        <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
        <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
        <line x1='1' y1='12' x2='3' y2='12' />
        <line x1='21' y1='12' x2='23' y2='12' />
        <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
        <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
    </NavigationItemIcon>
);

const Moon: FunctionComponent<Invertible> = ({ inverted }) => (
    <NavigationItemIcon strokeWidth={2} inverted={inverted}>
        <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z' />
    </NavigationItemIcon>
);

interface NavigationThemeToggleIconProps extends Invertible, Openable {}

const NavigationThemeToggleIcon: FunctionComponent<NavigationThemeToggleIconProps> = ({ inverted, open }) => {
    const theme = useContext(ThemeContext);
    return theme._id === ThemeType.Light ? <Moon inverted={inverted || open} /> : <Sun inverted={inverted || open} />;
};

export default NavigationThemeToggleIcon;
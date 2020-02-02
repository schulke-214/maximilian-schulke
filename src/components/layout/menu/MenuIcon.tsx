import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';

import { rem } from "lib/polished";

import { Invertible, Openable } from "components/layout/Header";

interface MenuIconProps extends Invertible, Openable {
    onClick(): void;
    className?: string;
}

const MenuIconContainer = styled.button<MenuIconProps>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    position: relative;
    width: ${props => rem((props.theme.spacings.small * 2) + 24)};
    height: ${props => rem((props.theme.spacings.small * 2) + 16)};
    padding: ${props => rem(props.theme.spacings.small)};
    right: -${props => rem(props.theme.spacings.small)};

    span {
        opacity: 1;
        display: block;
        width: 1.5rem;
        height: ${rem(2)};
        background-color: ${props => props.theme.colors.foreground};
        transition: all ${props => props.theme.animation.duration.instant}s;
        
        ${props => (props.inverted || props.open) && css`
            background-color: ${props.theme.colors.highlightForeground};
        `}
    }
    
    ${props => props.open && css`
        z-index: 99;
    
        span:first-child {
            transform: rotate(45deg) translate(5px, 5px);
        }
        
        span:nth-child(2) {
            opacity: 0;
        }
        
        span:last-child {
            transform: rotate(-45deg) translate(5px, -5px);
        }
    `}
`;

const MenuIcon: FunctionComponent<MenuIconProps> = ({ className, inverted, open, onClick }) => (
    <MenuIconContainer open={open} onClick={onClick} className={className} inverted={inverted}>
        <span/>
        <span/>
        <span/>
    </MenuIconContainer>
);

export default MenuIcon;

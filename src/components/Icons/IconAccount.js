import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
    width: 100%;
    display: flex;
    align-items: inherit;
    justify-content: inherit;
`;

const StyledSVG = styled.svg`
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 28px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
`

const styles = {
    cls1: {
        fill: 'transparent',
        stroke: '#8d8d8d',
    },
    cls2: {
        stroke: '#8d8d8d',
        fill: 'transparent',
    },
    cls3: {
        stroke: null,
    },
    cls4: {
        fill: null,
    }
}

const IconAccount = () => 
    <Wrapper>
        <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 33.03 33.03">
            <g id="Group_39" data-name="Group 39" transform="translate(-755 -22)">
            <g id="Ellipse_2" data-name="Ellipse 2" style={styles.cls1} transform="translate(755 22)">
                <circle style={styles.cls3} cx="16.515" cy="16.515" r="16.515"/>
                <circle style={styles.cls4} cx="16.515" cy="16.515" r="16.015"/>
            </g>
            <g id="Ellipse_3" data-name="Ellipse 3" style={styles.cls2} transform="translate(765.118 28.071)">
                <circle style={styles.cls3} cx="6.267" cy="6.267" r="6.267"/>
                <circle style={styles.cls4} cx="6.267" cy="6.267" r="5.767"/>
            </g>
            <path id="Path_40" data-name="Path 40" style={styles.cls1} d="M-686.191,1778.367s2.268-8.816,11.85-8.8a12.6,12.6,0,0,1,12.137,8.454" transform="translate(1445.918 -1729.13)"/>
            </g>
        </StyledSVG>
    </Wrapper>

export default IconAccount;

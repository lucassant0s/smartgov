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
    font-size: 24px;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    user-select: none;
    flex-shrink: 0;
`

const styles = {
    cls1: {
        fill: '#8d8d8d',
    },
}

const IconAlert = () => 
    <Wrapper>
        <StyledSVG xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.542 20.218">
        <svg xmlns="http://www.w3.org/2000/svg" >
            <g id="alarm" transform="translate(-7.091)">
                <g id="Group_11" data-name="Group 11" transform="translate(7.091)">
                <path id="Path_21" data-name="Path 21" style={styles.cls1} d="M23.041,14.568c-.177-.264-.687-1.242-.687-1.242a12.714,12.714,0,0,1-.559-3.677V8.271a6.442,6.442,0,0,0-4.6-6.162V1.838a1.838,1.838,0,1,0-3.676,0v.271a6.442,6.442,0,0,0-4.6,6.162V9.65c0,3.059-.72,4.134-1.246,4.919a2.6,2.6,0,0,0-.592,1.514c0,1.5,3.123,2.024,5.655,2.2a2.738,2.738,0,0,0,5.232,0c2.532-.181,5.655-.707,5.655-2.2A2.6,2.6,0,0,0,23.041,14.568Zm-8.6-12.73a.919.919,0,0,1,1.838,0v.073a5.789,5.789,0,0,0-1.838,0V1.838ZM15.362,19.3a1.822,1.822,0,0,1-1.6-.954c.651.027,1.217.035,1.6.035s.952-.008,1.6-.035A1.822,1.822,0,0,1,15.362,19.3Zm0-1.838c-4.208,0-7.352-.728-7.352-1.379a1.749,1.749,0,0,1,.437-1c.557-.833,1.4-2.092,1.4-5.43V8.271a5.514,5.514,0,1,1,11.028,0V9.65c0,3.339.844,4.6,1.4,5.43a1.749,1.749,0,0,1,.437,1C22.714,16.733,19.57,17.461,15.362,17.461Z" transform="translate(-7.091)"/>
                </g>
            </g>
        </svg>
        </StyledSVG>
    </Wrapper>

export default IconAlert;

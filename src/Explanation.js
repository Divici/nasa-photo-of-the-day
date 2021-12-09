import React from 'react';
import styled from 'styled-components';

const StyledExplanation = styled.div`
    width: 80%;
    display: flex;
    margin: 0 auto 5%;
    background-color: lightgrey;
    p {
        padding: 2% 10%;
    }
`;

const Explanation = props =>{

    const {explanation} = props;

    return (
        <StyledExplanation>
            <p>{explanation}</p>
        </StyledExplanation>
    )
}


export default Explanation;
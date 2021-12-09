import React from 'react';
import styled, {keyframes} from 'styled-components';

const StyledDiv = styled.div`
    justify-content: center;
`;

const StyledImg = styled.img`
    width: 60%;
    margin: 0 auto;
`

const Photo = props =>{
    const {imageURL, title} = props;

    return (
        <StyledDiv>
            <h2>{title}</h2>
            <StyledImg src={imageURL} alt='nasa'></StyledImg>
        </StyledDiv>
    )
}


export default Photo;
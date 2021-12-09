import React from 'react';
import styled, {keyframes} from 'styled-components';

const StyledInfo = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`;

const Info = props =>{

    const {date, copyright} = props;

    return (
        <StyledInfo>
            <p>Copyright: {copyright}</p>
            <h3>{date}</h3>
        </StyledInfo>
    )
}


export default Info;
import styled from 'styled-components';

export const Theme = styled.div`
    //props background
    background: ${props => props.background || "white"};
    width: 100%;
`;
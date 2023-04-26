import styled from '@emotion/styled';

export const Board = styled.div`
    width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, auto));
    gap: 25px; 
    padding-left: 16px;
    padding-right: 16px;
    background-color: ${props => props.theme.colors.lightGreen};
`;

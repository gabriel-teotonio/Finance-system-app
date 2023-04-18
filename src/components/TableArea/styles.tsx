import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 1.2rem;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    margin-top: 1.2rem;
`;

export const TableHeaderColumn = styled.th<{width?:number}>`
    width: ${props => props.width ? `${props.width}px` : 'auto'};
    padding:10px 0;
    text-align:left;
`;
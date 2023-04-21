import styled from "styled-components";


export const Container = styled.div`
    text-align: center;
`;
export const Title = styled.h4`
    color: #767676;
    margin-bottom: .5rem;
`;
export const Value = styled.div<{color?:string}>`
    font-weight: 700;
    color: ${props => props.color ?? "initial"};
`;
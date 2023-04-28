import styled from "styled-components";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.background};
    height: 100vh;
`

export const Header = styled.header`
    background-color: ${props => props.theme.colors.primary};
    height: 150px;
    text-align: center;
    color: white;
`
export const HeaderTitle = styled.h1`
    padding-top: 1.5rem;
`
export const Body = styled.main`
    max-width: 980px;
    margin: auto;
    margin-bottom: 2rem;
    transform: translateY(-4rem);
`
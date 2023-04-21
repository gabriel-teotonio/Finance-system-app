import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 1.2rem;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    margin-top: 1.2rem;

    display: flex;
    justify-content: space-between;
`;
export const MonthArea = styled.div`
    display: flex;
    align-items: center;
    gap: .6rem;
`;
export const MonthArrow = styled.button`
    border: 0;
    background: none;
    cursor: pointer;
    font-size: 1.5rem;
`;
export const MonthTitle = styled.h4`
`;
export const ResumeArea = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
`;
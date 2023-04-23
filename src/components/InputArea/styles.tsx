import styled from "styled-components";

const InputStyle = `  
    padding: .5rem;
    border: #00145540 1px solid;
    border-radius: 4px;
    outline: none;
    width:100%;
    
    &:focus{
        border: #001455b6 1px solid;
    }
`

export const Container = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 1.2rem;
    box-shadow: 0 0 5px #ccc;
    border-radius: 10px;
    margin-top: 1.2rem;
`

export const Form = styled.form`
    display: flex;
    align-items: end;
`
export const Label = styled.label`
    flex: 1;
    margin: 0 8px;
`
export const InputTitle = styled.p`
    margin-bottom: 6px;
`
export const Input = styled.input`
    ${InputStyle}
`
export const Select = styled.select`
    ${InputStyle}
`
export const ButtonSubmit = styled.button`
    padding: .5rem .8rem;
    border-radius: 4px;
    outline: none;
    border: 0;
    background-color: #0e52ff;
    color: white;
    cursor: pointer;
`

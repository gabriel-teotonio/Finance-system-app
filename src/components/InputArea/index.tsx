import React, { useState } from 'react';
import { categories } from '../../data/categories';
import * as C from './styles';
import { Item } from '../../types/Item';
import { newDateAjusted } from '../../utils/dateFilter';
import { useAppContext } from '../../Contexts/AppContext';


export const InputArea = () => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputDate, setInputDate] = useState("");
    const [inputCategory, setInputCategory] = useState("");  
    const [inputValue, setInputValue] = useState(0);

    const { onAddItem, theme } = useAppContext();

    const categoryKeys: string[] = Object.keys(categories)

    const handleAddEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let errors:string[] = [];

        if(inputTitle === ""){
            errors.push("O campo título está vazio");
        }
        if(isNaN(new Date(inputDate).getTime())){
            errors.push("Data inválida");
        }
        if(!categoryKeys.includes(inputCategory)){
            errors.push("Categoria inválida");
        }
        if(inputValue <= 0){
            errors.push("Valor inválido");
        }

        if(errors.length > 0){
            alert(errors.join("\n"))
            return
        }

        onAddItem({
            date: newDateAjusted(inputDate),
            category: inputCategory,
            title: inputTitle,
            value: inputValue,
        })
        clearInputs()
    }

    const clearInputs = () => {
        setInputTitle("");
        setInputCategory("");
        setInputDate("");
        setInputValue(0)
    }

    return(
        <C.Container theme={theme}>
            <C.Form>
                <C.Label>
                    <C.InputTitle>Título</C.InputTitle>
                    <C.Input
                    type="text" 
                    value={inputTitle}
                    onChange={e => setInputTitle(e.target.value)}
                    />
                </C.Label>
                <C.Label>
                    <C.InputTitle>Data</C.InputTitle>
                    <C.Input 
                    type="date" 
                    value={inputDate}
                    onChange={e => setInputDate(e.target.value)}
                    />
                </C.Label>
                <C.Label>
                    <C.InputTitle>Categoria</C.InputTitle>
                    <C.Select value={inputCategory} onChange={e => setInputCategory(e.target.value)}>
                        <>
                        <option></option>
                         {
                            categoryKeys.map((key,index) => (
                                <option key={index} value={key}>{categories[key].title}</option>
                            ))
                         }
                        </>
                    </C.Select>
                </C.Label>
                <C.Label>
                    <C.InputTitle>Valor</C.InputTitle>
                    <C.Input 
                    type="number"
                    value={inputValue}
                    onChange={e => setInputValue(parseFloat(e.target.value))}
                    />
                </C.Label>
                
                <C.ButtonSubmit onClick={handleAddEvent}>Adicionar</C.ButtonSubmit>
            </C.Form>
        </C.Container>
    );
}
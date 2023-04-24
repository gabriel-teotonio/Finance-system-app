import React, { useState } from 'react';
import { categories } from '../../data/categories';
import * as C from './styles';
import { Item } from '../../types/Item';
import { newDateAjusted } from '../../utils/dateFilter';

type IProps = {
    onAdd: (item:Item) => void;
}

export const InputArea = ({onAdd}: IProps) => {
    const [inputTitle, setInputTitle] = useState("");
    const [inputDate, setInputDate] = useState("");
    const [inputCategory, setInputCategory] = useState("");  
    const [inputValue, setInputValue] = useState(0);

    const categoryKeys: string[] = Object.keys(categories)

    const handleAddEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if(inputTitle === ""){
            console.log("preencha o campo")
        }
        else if(inputCategory === ""){
            console.log("preencha o campo")
        }
        else if(inputDate === ""){
            console.log("preencha o campo")
        }
        else if(inputValue === 0){
            console.log("preencha o campo")
        }
        onAdd({
            date: newDateAjusted(inputDate),
            category: inputCategory,
            title: inputTitle,
            value: inputValue,
        })
    }

    return(
        <C.Container>
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
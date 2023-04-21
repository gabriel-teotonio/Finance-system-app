import { Item } from "../types/Item";

export const getCurrentMonth = () => {
    const now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

export const filterListByMonth = (list:Item[], date: string) => {
    let newList:Item[] = [];
    let [year, month] = date.split('-');

    list.map((item) => {
        if(
            item.date.getFullYear() === parseInt(year) &&
            item.date.getMonth() === parseInt(month)
        ){
            newList.push(item)
        }
    })
    return newList;
}

export const formatDate = (date: Date):string => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`
}

export const formatCurrentMonth = (currentMonth: string):string => {
    let [year, month] = currentMonth.split('-');
    let date = new Date(parseInt(year),parseInt(month));
    const MonthFormated = date.toLocaleDateString("pt-BR", {
        month:'long',
        year: "numeric"
    });
    
    return `${MonthFormated}`
}

const addZeroToDate = (num:number) => num < 10 ? `0${num}` : num;
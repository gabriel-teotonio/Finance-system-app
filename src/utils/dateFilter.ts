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
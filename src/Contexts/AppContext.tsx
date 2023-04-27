import React, { createContext, useContext, useEffect, useState } from "react";
import { Item } from "../types/Item";
import { filterListByMonth, getCurrentMonth } from "../utils/dateFilter";
import { Items } from "../data/items";
import { categories } from "../data/categories";

type IAppcontext = {
   income: number;
   expense: number;
   currentMonth: string;
   filteredList: Item[];
   handleMonthChange: (newMonth: string) => void;
   onAddItem: (item: Item) => void;
}


export const AppContext = createContext<IAppcontext>({
    income: 0,
    expense: 0,
    currentMonth: "",
    filteredList: [],
    handleMonthChange: (newMonth: string) => {},
    onAddItem: (item:Item) => {},
});

type IChildren = {
    children: React.ReactNode;
}

export const AppContextProvider = ({children}: IChildren) => {
    const [list, setList] = useState(Items)
    const [expense, setExpense] = useState(0);
    const [income, setIncome] = useState(0);
    const [filteredList, setFilteredList] = useState<Item[]>([])
    const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

    useEffect(() => {
        setFilteredList(filterListByMonth(list, currentMonth))
      },[list, currentMonth])

    useEffect(() => {
        let incomeCount = 0;
        let expenseCount = 0;
    
        filteredList.map(item => {
          if(categories[item.category].expense){
            expenseCount += item.value;
          }
          else{
            incomeCount += item.value;
          }
        })
    
        setIncome(incomeCount);
        setExpense(expenseCount);
      },[filteredList])
    
      const handleMonthChange = (newMonth:string) => {
        setCurrentMonth(newMonth);
      }

      const onAddItem = (item: Item) => {
        let newList = [...list];
        newList.push(item)
        setList(newList);
        console.log(newList)
      }

    return (
        <AppContext.Provider value={{
            income, 
            expense, 
            filteredList, 
            handleMonthChange, 
            currentMonth,
            onAddItem
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext);
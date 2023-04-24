import { useEffect, useState } from 'react'
import * as C from './AppStyles';
import './App.css';
import { Items } from './data/items';
import { TableArea } from './components/TableArea';
import { getCurrentMonth, filterListByMonth } from './utils/dateFilter';
import { Item } from './types/Item';
import { InfoArea } from './components/InfoArea';
import { categories } from './data/categories';
import { InputArea } from './components/InputArea';

function App() {
  const [list, setList] = useState(Items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);

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

  const handleAddItem = (item: Item) => {
    let newList = [...list];
    newList.push(item)
    setList(newList);
    console.log(newList)
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Sistema Financeiro</C.HeaderTitle>
      </C.Header> 
      <C.Body>
        <InfoArea
        income={income}
        expense={expense}
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        />
        <InputArea onAdd={handleAddItem}/>
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  )
}

export default App;

import { useEffect, useState } from 'react'
import * as C from './AppStyles';
import './App.css';
import { Items } from './data/items';
import { TableArea } from './components/TableArea';
import { getCurrentMonth, filterListByMonth } from './utils/dateFilter';
import { Item } from './types/Item';
import { InfoArea } from './components/InfoArea';

function App() {
  const [list, setList] = useState(Items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  },[list, currentMonth])

  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>Sistema Financeiro</C.HeaderTitle>
      </C.Header> 
      <C.Body>
        <InfoArea />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  )
}

export default App;

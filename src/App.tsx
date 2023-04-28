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
import { useAppContext } from './Contexts/AppContext';

function App() {
  const { theme } = useAppContext();

  return (
    <C.Container theme={theme}>
      <C.Header theme={theme}>
        <C.HeaderTitle>Controle financeiro</C.HeaderTitle>
      </C.Header> 
      <C.Body>
        <InfoArea/>
        <InputArea/>
        <TableArea/>
      </C.Body>
    </C.Container>
  )
}

export default App;

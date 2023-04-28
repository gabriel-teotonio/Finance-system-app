import { useAppContext } from "../../Contexts/AppContext";
import { Item } from "../../types/Item"
import { TableItem } from "../TableItem";
import * as C from './styles';

export const TableArea = () => {
  const { filteredList, theme } = useAppContext();

  return (
    <C.Table theme={theme}> 
        <thead>
            <tr>
                <C.TableHeaderColumn width={100}>Data</C.TableHeaderColumn>
                <C.TableHeaderColumn width={130}>Categoria</C.TableHeaderColumn>
                <C.TableHeaderColumn>Título</C.TableHeaderColumn>
                <C.TableHeaderColumn width={150}>Valor</C.TableHeaderColumn>
            </tr>
        </thead>
        <tbody>
          {
            filteredList.map((item,index) => (
              <TableItem
                key={index}
                item={item} 
              />
            ))
          }
        </tbody>
    </C.Table>
  )
}

import { Item } from "../../types/Item"
import * as C from './styles';

type IProps = {
    list: Item[];
}

export const TableArea = ({list}: IProps) => {
  return (
    <C.Table> 
        <thead>
            <tr>
                <C.TableHeaderColumn width={100}>Data</C.TableHeaderColumn>
                <C.TableHeaderColumn width={130}>Categoria</C.TableHeaderColumn>
                <C.TableHeaderColumn>Título</C.TableHeaderColumn>
                <C.TableHeaderColumn width={150}>Valor</C.TableHeaderColumn>
            </tr>
        </thead>
        <tbody>
            
        </tbody>
    </C.Table>
  )
}

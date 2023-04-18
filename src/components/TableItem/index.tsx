import { Item } from '../../types/Item';
import { formatDate } from '../../utils/dateFilter';
import * as C from './styles';

type IProps = {
    item: Item;
}

export const TableItem = ({item}: IProps) => {
    return (
        <C.TableLine>
            <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>R$ {item.value.toFixed(2)}</C.TableColumn>
        </C.TableLine>
    )
}
import { Item } from '../../types/Item';
import * as C from './styles';

type IProps = {
    item: Item;
}

export const TableItem = ({item}: IProps) => {
    return (
        <C.TableLine>
            <C.TableColumn>{}</C.TableColumn>
            <C.TableColumn>{item.category}</C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>{item.value}</C.TableColumn>
        </C.TableLine>
    )
}
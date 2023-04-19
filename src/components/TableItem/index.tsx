import { categories } from '../../data/categories';
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
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red': '#00EE5F'}>
                    R$ {item.value.toFixed(2)}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
}
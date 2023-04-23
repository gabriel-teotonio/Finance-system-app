import { categories } from '../../data/categories';
import * as C from './styles';

export const InputArea = () => {

    const categoryKeys: string[] = Object.keys(categories)

    return(
        <C.Container>
            <C.Form>
                <C.Label>
                    <C.InputTitle>Título</C.InputTitle>
                    <C.Input type="text" />
                </C.Label>
                <C.Label>
                    <C.InputTitle>Data</C.InputTitle>
                    <C.Input type="date" />
                </C.Label>
                <C.Label>
                    <C.InputTitle>Categoria</C.InputTitle>
                    <C.Select >
                        <>
                        <option></option>
                         {
                            categoryKeys.map((key,index) => (
                                <option key={index} value={key}>{categories[key].title}</option>
                            ))
                         }
                        </>
                    </C.Select>
                </C.Label>
                <C.Label>
                    <C.InputTitle>Valor</C.InputTitle>
                    <C.Input type="number" />
                </C.Label>
                
                <C.ButtonSubmit>Adicionar</C.ButtonSubmit>
            </C.Form>
        </C.Container>
    );
}
import { ResumeItem } from '../ResumeItem';
import * as C from './styles';

export const InfoArea = ({}) => {


  return (
   <C.Container>
        <C.MonthArea>
            <C.MonthArrow>⬅️</C.MonthArrow>
            <C.MonthTitle>Janeiro</C.MonthTitle>
            <C.MonthArrow>➡️</C.MonthArrow>
        </C.MonthArea>     
        <C.ResumeArea>
            <ResumeItem title='Receita' value={70}/>
            <ResumeItem title='Despesas' value={70}/>
            <ResumeItem title='Balanço' value={70}/>
        </C.ResumeArea> 
   </C.Container> 
  )
}

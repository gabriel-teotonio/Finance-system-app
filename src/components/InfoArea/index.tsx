import { formatCurrentMonth } from '../../utils/dateFilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styles';

type IProps = {
    income: number;
    expense: number;
    currentMonth: string;
    onMonthChange: (newMonth:string) => void;
}

export const InfoArea = ({income, expense, currentMonth, onMonthChange}: IProps) => {


  return (
   <C.Container>
        <C.MonthArea>
            <C.MonthArrow>⬅️</C.MonthArrow>
            <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
            <C.MonthArrow>➡️</C.MonthArrow>
        </C.MonthArea>     
        <C.ResumeArea>
            <ResumeItem title='Receita' value={income}/>
            <ResumeItem title='Despesas' value={expense}/>
            <ResumeItem 
            color={income-expense < 0 ? "red": "#00EE5F"} 
            title='Balanço' 
            value={income - expense}
            />
        </C.ResumeArea> 
   </C.Container> 
  )
}

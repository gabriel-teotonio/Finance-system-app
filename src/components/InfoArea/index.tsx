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

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year),parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year),parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);

        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

  return (
   <C.Container>
        <C.MonthArea>
            <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
            <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
            <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
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

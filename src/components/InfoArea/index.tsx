import { useAppContext } from '../../Contexts/AppContext';
import { formatCurrentMonth } from '../../utils/dateFilter';
import { ResumeItem } from '../ResumeItem';
import * as C from './styles';

export const InfoArea = () => {
    const { income,expense,currentMonth, handleMonthChange, theme } = useAppContext();

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year),parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() + 1);

        handleMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-');
        const currentDate = new Date(parseInt(year),parseInt(month) - 1, 1);
        currentDate.setMonth(currentDate.getMonth() - 1);

        handleMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
    }

  return (
   <C.Container theme={theme}>
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

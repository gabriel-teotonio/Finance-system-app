import * as C from './styles';

type IProps = {
    title:string;
    value:number;
    color?:string;
}

export const ResumeItem = ({title,value,color}: IProps) => {

    return(
    <C.Container>
        <C.Title>{title}</C.Title>
        <C.Value color={color}>{value}</C.Value>
    </C.Container>
    )
}
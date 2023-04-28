
export interface ITheme {
    colors: {
        primary: string;
        secundary:string;
        text:string;
        background: string;
        
        bg_overview: string
    };
}

export const theme: ITheme = {
    colors: {
        primary: '#071438',
        secundary: '#2663FF',
        text: '#EFF4FF',
        background: '#EFF4FF',

        bg_overview:'#fff'
    }
}

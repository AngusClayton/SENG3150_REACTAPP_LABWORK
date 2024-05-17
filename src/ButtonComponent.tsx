import React, {MouseEvent, ReactNode} from 'react';

type Props = 
{
    onClick(e: MouseEvent<HTMLElement>): void,
    children: ReactNode,
    color: string
}

const Button: React.FC<Props> = ({onClick, children, color}) =>
    {
        return(
            <button onClick={onClick} style={{backgroundColor:color}} > {children}</button>        
        )
    };
export default Button;
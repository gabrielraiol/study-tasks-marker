import React from 'react';
import style from './Button.module.scss';

// New versions of react no longer infer the 'children' type alone. To solve it, I used React.ReactNode
interface Props {
    type?: "button" | "submit" | "reset" | undefined,
    children?: React.ReactNode,
    onClick?: () => void
}

function Button ({type, children, onClick}: Props) {
    return(
        <button onClick={onClick} type={type} className={style.button}>
            {children}
        </button>
    )
}

export default Button;
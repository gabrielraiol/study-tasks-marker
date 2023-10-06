import React from 'react';
import style from './Button.module.scss';

// New versions of react no longer infer the 'children' type alone. To solve it, I used React.ReactNode
class Button extends React.Component <{type?: "button" | "submit" | "reset" | undefined, children?: React.ReactNode}> {
    render() {
        const {type = "button"} = this.props;
        return(
            <button type={type} className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;
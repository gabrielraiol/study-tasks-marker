import React from 'react';
import style from './Button.module.scss';

// New versions of react no longer infer the 'children' type alone. To solve it, I used <React.PropsWithChildren>
class Button extends React.Component <React.PropsWithChildren> {
    render() {
        return(
            <button className={style.button}>
                {this.props.children}
            </button>
        )
    }
}

export default Button;
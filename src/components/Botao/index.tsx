import React from 'react';
import { getParseTreeNode } from 'typescript';
import style from './Botao.module.scss'

class Botao extends React.Component {
    render() {
        return (
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;
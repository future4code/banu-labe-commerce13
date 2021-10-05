import React from "react";
import styled from "styled-components";
import Carrinho from "./Carrinho";
import App from "../App";

const ItemContainer = styled.div `
    display: grid;
    grid-auto-flow: column;
    padding-top: 10px;
    gap: 6px;`

export class ItemCarrinho extends React.Component {
    render () {
        return <div>
            <ItemContainer>
            <p>ITEM:</p>
            {this.props.listaCompras.name}
            <p>QUANTIDADE:</p>
            {this.props.listaCompras.order}
            <button onClick ={() => this.props.OnRemoveProductFromCart()}> Remover </button>
            </ItemContainer>
        </div>
    }
}

export default ItemCarrinho









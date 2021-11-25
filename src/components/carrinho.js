import React from "react";
import styled from 'styled-components';
import ProdutoCar from "./ProdutoCar";

const AddCart = styled.div`
    border: 1px solid black;
`;

const Align = styled.div`
    display: flex;
    align-items: center;
    p {
        margin-right: 10px;
    }
`;

const CarrinhoTitulo = styled.h3`
padding: 20px;

`

const produtosCarrinho = ''

const ValorProduto = ''
const ProdutoCarrinho = ''



export class Carrinho extends React.Component{


 render() {
     return <AddCart>
        <CarrinhoTitulo> 
            Carrinho de compras
        </CarrinhoTitulo>
         <Align>
            <ProdutoCar>

            </ProdutoCar>
            <button onClick={this.removeItem}>Remover item</button>
         </Align>
         <p>Valor total:</p>
            
     </AddCart>
 }

} 

export default Carrinho;
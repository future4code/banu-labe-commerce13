import React from "react";
import styled from 'styled-components';
import ItemCarrinho from "./ItemCarrinho";
import ProdutoCar from "./ProdutoCar";

const ContainerCarrinho = styled.div`
    border: 1px solid black;
    padding: 20px;
`;

const ListaCarrinho = styled.div`
    display: grid;
    gap: 4px;
`;




export class Carrinho extends React.Component{

    valorTotal = () => {
        let valorTotal = 0
    
        for (let product of this.props.produtosNoCarrinho)
            valorTotal += product.value * product.quantity 

            return valorTotal
    }


 render() {
     return <ContainerCarrinho>
         <h3>CARRINHO</h3>
         <ListaCarrinho>
             {this.props.produtosNoCarrinho.map((product) =>{
                 return <ItemCarrinho
                  listaCompras={product}
                  OnRemoveProductFromCart={this.props.OnRemoveProductFromCart}/>

             })}
        </ListaCarrinho>
         <p>Valor total:{this.valorTotal()}</p>
     </ContainerCarrinho>
 }

} 

export default Carrinho;
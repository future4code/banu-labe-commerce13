import React from "react";
import styled from "styled-components";
import App from "../App";
import Carrinho from "./Carrinho";

const CarProduto = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
`;
const ImageProduto = styled.img`
  width: 100%;
`;
const CarConteiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;

  p {
    margin: 4px 0;
  }
`;


export class ProdutoCar extends React.Component{

     addNoCarrinho = (produto) => {

    
    const lista = this.state.listaDeCompras
    this.setState({...this.state, listaDeCompras: {...lista, produto}})
  }

    render() {
        const produto = this.props.produto
        return  <CarConteiner>
            <ImageProduto src={produto.imageUrl} alt='imagem' />
            <CarProduto>
            <p>{produto.name}</p>
            <p>{produto.author}</p>
            <p>R$ {produto.value}</p>
            <button>Adicionar ao carrinho</button>
            
            </CarProduto>
            </CarConteiner>
        

    }
}
export default ProdutoCar;

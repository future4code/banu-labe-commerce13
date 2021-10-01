import React from "react";
import styled from "styled-components";

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
    render() {
        const produto = this.props.produto
        return <CarProduto>
            <ImageProduto src={produto?.imageUrl} alt='imagem' />
            <CarConteiner>
            <p>{produto?.name}</p>
            <p>{produto?.author}</p>
            <p>R$ {produto?.value}</p>
            {this.props.addNoCarrinho}
            </CarConteiner>
        </CarProduto>

    }
}
export default ProdutoCar;

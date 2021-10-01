/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import ProdutoCar from './components/ProdutoCar';
import Up from './components/Up'
import Carrinho from './components/Carrinho'

const ProdutoApp = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 16px;
  gap: 8px;
  `;
const AddCartButton = styled.button`
  align-self: center;
  margin-top: 4px;
`;

const produto = [
  {
    id: 1,
	  name: "Trono de Vidro: Reino de Cinzas",
    author: "Autor: Sarah J. Maas",
	  value: Number(46.89),
	  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51-ucM+lQuL._SX335_BO1,204,203,200_.jpg",
  },
  {
    id: 2,
	  name: "A Menina que Roubava Livros",
    author: "Autor: Markus Zusak",
	  value: Number(38.99),
	  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/514GbfM-F4L._SX347_BO1,204,203,200_.jpg",
  },
  {
    id: 3,
	  name: "A garota do lago",
    author: "Autor: Charlie Donlea",
	  value: Number(8.48),
	  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/516VOgxwg2L._SX339_BO1,204,203,200_.jpg",
  },
  {
    id: 4,
	  name: "A rainha vermelha",
    author: "Autor: Victoria Aveyard",
	  value: Number(23.99),
	  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41rK-7HUAML._SX346_BO1,204,203,200_.jpg",
  },
  {
    id: 5,
	  name: "Trono destruído",
    author: "Autor: Victoria Aveyard",
	  value: Number(26.98),
	  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41d3EwKB63L._SX339_BO1,204,203,200_.jpg",
  },
  {
    id: 6,
	  name: "As Crônicas de Nárnia",
    author: "Autor: C. S. Lewis",
	  value: Number(29.99),
	  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51+2QAB7I+L._SX329_BO1,204,203,200_.jpg",
  },
  {
    id: 7,
	  name: "Trono de Vidro: Herdeira do fogo",
    author: "Autor: Sarah J. Maas",
	  value: Number(27.98),
	  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/51nj67GhHkL._SX335_BO1,204,203,200_.jpg",
  },
  {
    id: 8,
	  name: "Trono de vidro: Rainha das sombras",
    author: "Autor: Sarah J. Maas",
	  value: Number(42.19),
	  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/41MSwpp8z3L._SX335_BO1,204,203,200_.jpg",
  },
]

const CenterContainer = styled.div`
  display: flex;
`;

export class App extends React.Component {
  state = {
    listaDeCompras: [],
    order: 1,
    produto: produto
  }
 
  updateOrder = (ev) => {
    this.setState({order: Number(ev.target.value)})
  }

  addNoCarrinho = (produto) => {
    const lista = this.state.listaDeCompras
    this.setState({...this.state, listaDeCompras: {...lista, produto}})
  }

  ordenaDecrescente = (array) => {
    return array.sort((a,b)=>{
        return b.value - a.value
    })
  }

  ordenaCrescente = (array) => {
    return array.sort((a,b)=>{
        return a.value - b.value
    })
  } 

  render() {

    const ordenaArray = () => {
      if(this.state.order === 1) {
        return this.ordenaDecrescente(produto)
      } else {
        return this.ordenaCrescente(produto)
      }
    }
    
    return (
      <CenterContainer>
      <div>
        <Up updateOrder={this.updateOrder} />
        <ProdutoApp>
          {ordenaArray().map((item) => 
            <ProdutoCar produto={item} addNoCarrinho={<AddCartButton onClick={() => this.addNoCarrinho(item)}>Adcionar ao carrinho</AddCartButton>}  />
          )}
        </ProdutoApp>
      </div>
      <Carrinho />
      </CenterContainer>
    )
  }
}

export default App;

import React from 'react';
import styled from 'styled-components';

import Home from './components/home';
import Filtros from './components/filtros';
import Carrinho from './components/carrinho';

const Geral = styled.div`
  display: flex;
`

class App extends React.Component {
  state = {

  }

  render() {
    return (
      <Geral>

        <Filtros />
        <Home />
        <Carrinho />
        
      </Geral>
    )
  }
}

export default App;

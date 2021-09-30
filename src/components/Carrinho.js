import React from "react";
import styled from 'styled-components';

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



export class Carrinho extends React.Component{
 render() {
     return <AddCart>
         <h3>Carrinho:</h3>
         <Align>
            <p>Produto 1</p>
            <button>Remover</button>
         </Align>
         <p>Valor total:</p>
     </AddCart>
 }

} 

export default Carrinho;
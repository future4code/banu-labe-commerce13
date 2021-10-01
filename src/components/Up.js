import React from "react";
import styled from "styled-components";
// import styled from "styled-components";

const SubUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Align = styled.div`
    display: flex;
    align-items: center;
    p {
        margin-right: 10px;
    }
`;

export class Up extends React.Component {
    render() {
        return <SubUp>
        <p>Quantidade de produtos: 8</p>
        <Align>
            <p>Ordenação:</p>
            <select
                nome= "order"
                onChange={this.props.updateOrder}
            >                           
            <option value={1}>Descrescente</option>
            <option value={0}>Crecente</option>
            </select>
        </Align>
        </SubUp>
    }
}

export default Up;
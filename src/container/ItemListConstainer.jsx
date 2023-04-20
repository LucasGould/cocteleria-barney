import React from "react";
import Container from 'react-bootstrap/Container';

import './assets/ItemListContainer.css'

export const ItemListContainer = ({greeting}) => {
    return (
        <Container><div id="item_container">{greeting}</div></Container>
    )
}
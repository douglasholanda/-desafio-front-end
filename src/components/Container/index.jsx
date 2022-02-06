import React from 'react';
import { ContainerApp } from './styles';

//UM CONTAINER SIMPLES QUE ARMAZENA O BACKGROUND
const Container = (props) => {
    return <ContainerApp>{props.children}</ContainerApp>;
};

export default Container;

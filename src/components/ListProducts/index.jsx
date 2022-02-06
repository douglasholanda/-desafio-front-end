import React, { useContext, useEffect } from 'react';
import { Row } from 'antd';
import Container from '../Container';
import { ButtonRegister } from './styles';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../../providers/ProductsContext';
import Product from '../Product';

const ListProducts = (props) => {
    const context = useContext(ProductsContext);

    //VERIFICA SE O LOCAL STORAGE POSSUI PRODUTOS ARMAZENADOS
    //E POPULA OS PRODUCTS DO STATE
    useEffect(() => {
        let list_products = JSON.parse(localStorage.getItem('list-products'));
        console.log(list_products);
        if (list_products == null) {
            return;
        } else {
            if (context.products.length === 0) {
                context.saveProducts(list_products);
            }
        }
    }, []);

    //RENDERIZANDO A LISTA E O BOTÃO DE IR Á PAGINA DE PRODUTOS
    return (
        <>
            <div>
                <Container>
                    <Product />

                    <Row>
                        <Link to="/register">
                            <ButtonRegister>Register Product</ButtonRegister>
                        </Link>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ListProducts;

/*
TORNANDO OS PRODUTOS E SUAS FUNÇÕES ACESSÍVEIS GLOBALMENTE
*/

import { Modal } from 'antd';
import React, { useState, createContext } from 'react';

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    //FUNÇÃO QUE SALVA OS PRODUTOS NO STATE E NO LOCAL
    //STORAGE
    const saveProducts = (productParam) => {
        const newProducts = productParam.map((productParam_) => {
            const newProduct = {
                key: productParam_.key,
                code: productParam_.code,
                category: productParam_.category,
                product: productParam_.product,
                provider: productParam_.provider,
                price: productParam_.price,
            };
            return newProduct;
        });

        let list_products = [...products];
        Array.prototype.push.apply(list_products, newProducts);

        setProducts(list_products);
        localStorage.setItem('list-products', JSON.stringify(list_products));
    };

    //FUNÇÃO QUE ADICIONA UM PRODUTO AOS PRODUTOS JA EXISTENTES
    //CRIA UMA NOVA LISTA DE PRODUTOS COMPLETA E ATUALIZA O
    //LOCAL STORAGE
    const saveProduct = (productParam) => {
        let num = products.length;
        const newProduct = {
            key: num,
            code: productParam.code,
            category: productParam.category,
            product: productParam.product,
            provider: productParam.provider,
            price: productParam.price,
        };

        let list_products = [...products, newProduct];

        setProducts(list_products);
        localStorage.setItem('list-products', JSON.stringify(list_products));
        Modal.success({
            content: 'Saved Product!',
        });
    };

    //FUNÇÃO QUE SALVA UM PRODUTO APÓS SER EDITADO
    const saveEditProduct = (products_) => {
        setProducts(products_);
        localStorage.setItem('list-products', JSON.stringify(products_));
    };

    //FUNÇÃO QUE REMOVE UM PRODUTO DA LISTA
    const removeProduct = (key) => {
        const newProducts = products.filter((product_) => {
            return product_.key !== key;
        });
        setProducts(newProducts);
        localStorage.setItem('list-products', JSON.stringify(newProducts));
    };

    return (
        <ProductsContext.Provider
            value={{
                products,
                saveProducts,
                saveProduct,
                removeProduct,
                saveEditProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsProvider;

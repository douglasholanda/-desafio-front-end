import React, { useContext, useState } from 'react';
import { Input, Modal, Table } from 'antd';
import { ProductsContext } from '../../providers/ProductsContext';
import { ButtonEdit, ButtonRemove, Title } from './styles';
import {
    FormOutlined,
    NumberOutlined,
    SolutionOutlined,
    DollarCircleOutlined,
    OrderedListOutlined,
} from '@ant-design/icons';
const Product = () => {
    const { Column } = Table;
    const context = useContext(ProductsContext);
    const products = context.products;
    const [pagination, setPagination] = useState({
        pageSize: 5,
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);

    //CHAMA A FUNÇÃO QUE DELETA O PRODUTO
    const handleButtonDelete = (key) => {
        Modal.confirm({
            title: 'Are you sure, you want to delete this product?',
            onOk: () => {
                context.removeProduct(key);
            },
        });
    };

    //RESETANDO AS VARIÁVEIS DE EDIÇÃO APÓS EDITAR UM PRODUTO
    const resetEditing = () => {
        setIsEditing(false);
        setEditingProduct(null);
    };

    //TROCA A VARIAVEIS DE EDIÇÃO
    const onEditProduct = (product_) => {
        setIsEditing(true);
        setEditingProduct({ ...product_ });
    };

    //FUNÇÃO QUE ALTERA UM PRODUTO
    const changeProduct = (products) => {
        const newProducts = products.map((product_) => {
            if (product_.key !== editingProduct.key) {
                return product_;
            } else {
                return editingProduct;
            }
        });
        return newProducts;
    };

    //RENDERIZANDO A TABELA E AS COLUNAS
    return (
        <>
            <Title>List Product</Title>
            <Table
                dataSource={products}
                bordered={false}
                size="middle"
                pagination={pagination}
            >
                <Column
                    title="Code"
                    dataIndex="code"
                    key="code"
                    span={2}
                    align={'center'}
                />
                <Column
                    title="Category"
                    dataIndex="category"
                    key="category"
                    align={'center'}
                    span={4}
                />
                <Column
                    title="Product's Name"
                    dataIndex="product"
                    key="product"
                    span={6}
                    align={'center'}
                />
                <Column
                    title="Price"
                    dataIndex="price"
                    key="price"
                    span={4}
                    align={'center'}
                />
                <Column
                    title="Provider"
                    dataIndex="provider"
                    key="provider"
                    span={6}
                    align={'center'}
                />
                <Column
                    key="operation"
                    span={2}
                    width={230}
                    align={'center'}
                    render={(product) => (
                        <>
                            <ButtonEdit onClick={() => onEditProduct(product)}>
                                Edit
                            </ButtonEdit>
                            <ButtonRemove
                                onClick={() => handleButtonDelete(product.key)}
                            >
                                Delete
                            </ButtonRemove>
                        </>
                    )}
                />
            </Table>
            {/*MODAL QUE É ABERTO PARA EDIÇÃO DE UM PRODUTO */}
            <Modal
                title="Edit Product"
                visible={isEditing}
                okText="Save"
                onCancel={() => resetEditing()}
                onOk={() => {
                    const products_ = changeProduct(products);
                    context.saveEditProduct(products_);
                    resetEditing();
                }}
            >
                <Input
                    prefix={<NumberOutlined />}
                    value={editingProduct?.code}
                    onChange={(e) => {
                        setEditingProduct((product_) => {
                            return { ...product_, code: e.target.value };
                        });
                    }}
                />
                <Input
                    prefix={<OrderedListOutlined />}
                    value={editingProduct?.category}
                    onChange={(e) => {
                        setEditingProduct((product_) => {
                            return { ...product_, category: e.target.value };
                        });
                    }}
                />
                <Input
                    prefix={<FormOutlined />}
                    value={editingProduct?.product}
                    onChange={(e) => {
                        setEditingProduct((product_) => {
                            return { ...product_, product: e.target.value };
                        });
                    }}
                />
                <Input
                    prefix={<SolutionOutlined />}
                    value={editingProduct?.provider}
                    onChange={(e) => {
                        setEditingProduct((product_) => {
                            return { ...product_, provider: e.target.value };
                        });
                    }}
                />
                <Input
                    prefix={<DollarCircleOutlined />}
                    value={editingProduct?.price}
                    onChange={(e) => {
                        setEditingProduct((product_) => {
                            return { ...product_, price: e.target.value };
                        });
                    }}
                />
            </Modal>
        </>
    );
};

export default Product;

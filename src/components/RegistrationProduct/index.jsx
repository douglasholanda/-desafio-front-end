import React, { useContext, useState } from 'react';
import { Col, Form, Image, Input, Row } from 'antd';
import {
    FormOutlined,
    NumberOutlined,
    SolutionOutlined,
    DollarCircleOutlined,
    OrderedListOutlined,
} from '@ant-design/icons';
import Container from '../Container';
import { ProductsContext } from '../../providers/ProductsContext';
import { Title, ButtonRegister, ButtonCancel } from './styles';
import form from '../../assets/form.png';
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

const RegistrationProduct = () => {
    const context = useContext(ProductsContext);

    const [code, setCode] = useState('');
    const [category, setCategory] = useState('');
    const [product, setProduct] = useState('');
    const [provider, setProvider] = useState('');
    const [price, setPrice] = useState('');

    //FUNÇÃO QUE CRIA UM OBJETO PRODUTO E
    //CHAMA A FUNÇÃO QUE ARMAZENA
    const handleRegisterButton = (props) => {
        let addProduct = {
            key: uuid(),
            code: code,
            category: category,
            product: product,
            provider: provider,
            price: price,
        };
        context.saveProduct(addProduct);
    };

    //RENDERIZANDO FORMULÁRIO
    return (
        <>
            <Container>
                <Row gutter={50}>
                    <Col span={8}>
                        <Image src={form} preview={false} width={'100%'} />
                    </Col>
                    <Col span={14}>
                        <Title>Product Registration</Title>
                        <Form>
                            <Row gutter={30}>
                                <Col span={8}>
                                    <Form.Item
                                        name="code"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input product code!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Code"
                                            minLength={1}
                                            prefix={<NumberOutlined />}
                                            value={code}
                                            onChange={(e) =>
                                                setCode(e.target.value)
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={16}>
                                    <Form.Item
                                        name="category"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input product category!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            minLength={2}
                                            placeholder="Category"
                                            required
                                            prefix={<OrderedListOutlined />}
                                            value={category}
                                            onChange={(e) =>
                                                setCategory(e.target.value)
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Form.Item
                                name="product"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input product name!',
                                    },
                                ]}
                            >
                                <Input
                                    placeholder="Product's Name"
                                    minLength={2}
                                    required
                                    prefix={<FormOutlined />}
                                    value={product}
                                    onChange={(e) => setProduct(e.target.value)}
                                />
                            </Form.Item>
                            <Row gutter={30}>
                                <Col span={16}>
                                    <Form.Item
                                        name="provider"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input product provider!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Provider"
                                            prefix={<SolutionOutlined />}
                                            minLength={2}
                                            required
                                            value={provider}
                                            onChange={(e) =>
                                                setProvider(e.target.value)
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item
                                        name="price"
                                        rules={[
                                            {
                                                required: true,
                                                message:
                                                    'Please input product price!',
                                            },
                                        ]}
                                    >
                                        <Input
                                            placeholder="Price"
                                            prefix={<DollarCircleOutlined />}
                                            required
                                            minLength={1}
                                            value={price}
                                            onChange={(e) =>
                                                setPrice(e.target.value)
                                            }
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={20}>
                                <Col>
                                    <ButtonRegister
                                        type="primary"
                                        htmlType="submit"
                                        shape="round"
                                        onClick={handleRegisterButton}
                                    >
                                        Register
                                    </ButtonRegister>
                                </Col>
                                <Col>
                                    <Link to="/">
                                        <ButtonCancel
                                            type="primary"
                                            htmlType="submit"
                                            shape="round"
                                        >
                                            Cancel
                                        </ButtonCancel>
                                    </Link>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default RegistrationProduct;

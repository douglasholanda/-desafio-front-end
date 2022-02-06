import styled from 'styled-components';
import { Button } from 'antd';

export const Title = styled.h1`
    font-size: 35px;
    text-align: center;
    color: #fafafa;
    text-transform: uppercase;
`;

export const ButtonEdit = styled(Button)`
    background: green;
    border: 1px solid #098809;
    font-weight: bold;
    margin-right: 10px;
    color: #fafafa;
    width: 80px;
    border-radius: 30px;

    &:hover {
        background: #0e4e0e;
        color: #fafafa;
        border: 1px solid #098809;
    }
`;

export const ButtonRemove = styled(Button)`
    background: #ff0000;
    border: 1px solid #ee0f0f;
    font-weight: bold;
    color: #fafafa;
    width: 80px;
    border-radius: 30px;

    &:hover,
    &:visited {
        background: #a70f0f;
        color: #fafafa;
        border: 1px solid #ee0f0f;
    }
`;

export const ButtonRegister = styled(Button)`
    background: #000;
    border: 1px solid #000000;
    font-weight: bold;
    margin-right: 10px;
    color: #fafafa;
    width: 150px;
    border-radius: 30px;
    display: flex;
    margin-top: 5px;

    &:hover {
        background: #000;
        border: 1px solid #000000;
        color: #fafafa;
        transform: scale(1.1);
    }
`;

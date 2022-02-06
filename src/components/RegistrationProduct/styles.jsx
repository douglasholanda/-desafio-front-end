import { Button } from 'antd';
import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 35px;
    text-align: center;
    color: #fafafa;
    text-transform: uppercase;
    margin: 50px 0;
`;

export const ButtonRegister = styled(Button)`
    background: green;
    border: 1px solid #098809;
    font-weight: bold;
    width: 120px;

    &:hover {
        background: #0e4e0e;
        border: none;
        transform: scale(1.1);
    }
`;

export const ButtonCancel = styled(Button)`
    background: #ff0000;
    border: 1px solid #ee0f0f;
    font-weight: bold;
    width: 120px;

    &:hover {
        background: #a70f0f;
        border: none;
        transform: scale(1.1);
    }
`;

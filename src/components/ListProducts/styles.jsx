import styled from 'styled-components';
import { Button } from 'antd';

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

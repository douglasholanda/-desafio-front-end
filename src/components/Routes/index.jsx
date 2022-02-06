import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListProducts from '../ListProducts';
import RegistrationProduct from '../RegistrationProduct';

//ARQUIVO QUE ENGLOBA AS ROTAS DA APLICAÇÃO
const RoutesApp = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<ListProducts />} />
            <Route path="/register" element={<RegistrationProduct />} />
        </Routes>
    </BrowserRouter>
);

export default RoutesApp;

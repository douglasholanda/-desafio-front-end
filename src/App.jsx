import React from 'react';
import RoutesApp from './components/Routes';
import ProductsProvider from './providers/ProductsContext';

const App = () => {
    //RENDERIZANDO AS ROTAS DA APLICAÇÃO
    //EM VOLTA DO PROVIDER
    return (
        <div>
            <ProductsProvider>
                <RoutesApp />
            </ProductsProvider>
        </div>
    );
};

export default App;

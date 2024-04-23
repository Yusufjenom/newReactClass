import {createBrowserRouter} from 'react-router-dom';
import Products from './modules/products';


export const router = createBrowserRouter([
    {
        path:"/",
        element:<Products/>
    }
]);

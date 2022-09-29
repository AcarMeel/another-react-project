import { Lazy1, Lazy2, Lazy3 } from '../lazyexample/pages';
import { IRoute } from "../interface/route.interface";

export const routes: Array<IRoute> = [
    {
        to: 'home',
        path: 'home',
        Component: Lazy1,
        name: 'Lazy-1',
    },
    {
        to: 'about',
        path: 'about',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: 'users',
        path: 'users',
        Component: Lazy3,
        name: 'Lazy-3'
    }
    
];
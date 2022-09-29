import { NoLazy } from './../lazyexample/pages/NoLazy';
import { lazy } from "react";
import { IRoute } from '../interface/route.interface';


const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout" */ '../lazyexample/layout/LazyLayout'));


export const routes: Array<IRoute> = [
    {
        path: '/layout/*',
        to: '/layout/',
        Component: LazyLayout,
        name: 'Lazy-Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No-Lazy'
    }
];
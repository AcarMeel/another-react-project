import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

export interface IRoute {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const Lazy1 = lazy(() => import(/* webpackChunkName: "LazyPage1" */ '../lazyexample/pages/Lazy1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "LazyPage2" */ '../lazyexample/pages/Lazy2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "LazyPage3" */ '../lazyexample/pages/Lazy3'));


export const routes: Array<IRoute> = [
    {
        to: '/home',
        path: 'home',
        Component: Lazy1,
        name: 'Lazy-1',
    },
    {
        to: '/about',
        path: 'about',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        to: '/users',
        path: 'users',
        Component: Lazy3,
        name: 'Lazy-3'
    }
];
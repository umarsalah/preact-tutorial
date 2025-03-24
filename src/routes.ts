import { lazy } from "preact/compat";

const routes = [
    { path: '/', component: lazy(() => import(`@/pages/home`)) },
    { path: '/todos', component: lazy(() => import(`@/pages/todos`)) },
    { path: '/profile/:userId', component: lazy(() => import(`@/pages/profile`)) },
];

export default routes;
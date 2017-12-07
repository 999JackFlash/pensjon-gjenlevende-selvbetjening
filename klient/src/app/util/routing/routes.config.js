import EngangsstonadIndex from './../../components/engangsstonad/Engangsstonad.index';
import engangsstonadSteps from './../../components/engangsstonad/steps';

const routeConfig = [
    {
        path: '/',
        component: EngangsstonadIndex,
        exact: true
    },
    {
        path: '/gjenlevende',
        component: EngangsstonadIndex,
        routes: engangsstonadSteps.map((step) => ({
            path: `/gjenlevende/${step.name.toLowerCase()}`,
            component: step
        }))
    }
];

export default routeConfig;

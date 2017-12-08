import GjenlevendeIndex from './../../components/gjenlevende/Gjenlevende.index';
import gjenlevendeSteps from './../../components/gjenlevende/steps';

const routeConfig = [
    {
        path: '/',
        component: GjenlevendeIndex,
        exact: true
    },
    {
        path: '/gjenlevende',
        component: GjenlevendeIndex,
        routes: gjenlevendeSteps.map((step) => ({
            path: `/gjenlevende/${step.name.toLowerCase()}`,
            component: step
        }))
    }
];

export default routeConfig;

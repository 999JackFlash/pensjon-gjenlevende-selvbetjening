import getModulesFromContext from './../../../util/modules/getModulesFromContext';

const steps = require.context('./', false, /Gjenlevende\.step[0-9]+\.js/);
export default getModulesFromContext(steps);

import { createContext, useReducer } from 'react';
import { initDataAll, reducerDataAll } from './reducerAll';
const ProviderAll = createContext();
function Provider({ children }) {
    const [dataAll, patchDataAll] = useReducer(initDataAll, reducerDataAll);
    return <ProviderAll.Provider value={[dataAll, patchDataAll]}>{children}</ProviderAll.Provider>;
}
export { ProviderAll };
export default Provider;

import { useContext } from "react";
import { ProviderAll } from "../Core/provider";
const useDataAll = () => {
    const [dataAll, patchDataAll] = useContext(ProviderAll)
    return [dataAll, patchDataAll];
}
export {
    useDataAll
}
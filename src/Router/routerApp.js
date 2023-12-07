import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {paths} from'./path';
function RouterApp () {
return(
    <Router>
            {paths.map((value,index)=> {
                const Page = value.page
                return(<Routes key={index}>
                    <Route path={value.path} element={<Page/>}/>
                </Routes>)
                
            })}
    </Router>
)
}
export default RouterApp;
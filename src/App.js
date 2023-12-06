import {RouterProvider} from 'react-router-dom';
import {Router} from "./router/Router";
import { Provider } from 'react-redux';
import { store } from './redux/store';
export const App = () =>{
  return(
    <Provider store={store}>
      <RouterProvider router={Router}></RouterProvider>
    </Provider>
    
  )
   
}
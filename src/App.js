import React,{Component} from 'react';
import { Provider } from 'react-redux';
import reducers from './Reducers';
import { createStore,applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import MainAppRoutes from './Routes/MainAppRoutes';

class App extends Component{
    render(){
        const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
        return <Provider store={store}><MainAppRoutes/></Provider>;
    }
}

export default App;
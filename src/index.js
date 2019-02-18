import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom';
import blogStore from './store/blogStore'
import App from './App'
import BlogForm from './components/blogForm'
import Navbar from './components/navbar'
import Loader from './components/loader'
//some basic styles
import './css/bootstrap.min.css';
import './css/index.css';
import './css/test.css';



const render = () => {
    ReactDOM.render(
        <Provider store={blogStore}>
            <BrowserRouter>
                <div class="container">
                     <Loader/>
                    <Navbar/>
                    <div class="row">
                        <div class="col-12">                    
                            <Route path="/" exact={true} component={App}/>
                            <Route path="/add" exact={true} component={BlogForm}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );
}

render();

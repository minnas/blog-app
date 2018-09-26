import React from 'react';
import BlogList from './components/blogList';
import { connect } from 'react-redux';
import { fetchBlogs } from './reducers/blogReducer';

class App extends React.Component {
    componentWillMount() {
        this.props.fetchBlogs()
    }    
    render() {
        return (
            <div class="py-3">
                <BlogList />
            </div>
        );
    }
}

export default connect(
    null,
    { fetchBlogs }
)(App)
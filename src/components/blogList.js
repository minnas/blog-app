import React from 'react';
import { connect } from 'react-redux';
import Blog from './blog';
import { removeBlog } from '../reducers/blogReducer';

//blog list
class BlogList extends React.Component {
  confirmRemove = (id) => {
    let remove = window.confirm('do you really want to remove this blog?');

    if(remove) {
      return this.props.removeBlog(id);
    }
    return;
  }

  render() {
    return ( 
      <div className='py-2'>
        <h2 className='mb-4'>Blog Posts</h2>  
        <ul className='list-group'>
          {this.props.blogs.map(blog =>
            <Blog
              key={blog.id}
              blog={blog}
              remove={() => {this.confirmRemove(blog.id)}}            
              />
          )}
        </ul>
      </div>     
    );
  }
}

const mapStateToProps = (state) => {
  return {
    blogs: state.blogs
  }
}

export default connect(
  mapStateToProps,
  { removeBlog }
)(BlogList)
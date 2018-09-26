import React from 'react';
import { connect } from 'react-redux';
import { createBlog } from '../reducers/blogReducer';

//Blog form
class BlogForm extends React.Component {
    addBlog = async (event) => {
        event.preventDefault();

        let title = event.target.title.value;
        let description =  event.target.description.value;
        this.props.createBlog(title, description);
        //reset fields
        event.target.title.value = '';
        event.target.description.value = '';
        //go back to homepage
        this.props.history.push("/");
    }   
    cancel = () => {
        //go back to homepage
        this.props.history.push("/");
    }
    render() {
        return (
            <div className='py-4'>
                <h2 className="mb-4">Add new blog</h2>
                <form onSubmit={this.addBlog}>
                    <div className="form-group">
                        <input className="form-control" name="title" placeholder="title"/>
                    </div>
                    <div className="form-group">
                        <textarea className="form-control" name="description" rows="5"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mx-2 my-2">Save</button>
                        <button type="reset" className="btn btn-primary mx-2 my-2" onClick={() => {this.cancel()}}>Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
      blogs: state.blogs
    }
}
export default connect(
    mapStateToProps,
    { createBlog }
)(BlogForm)


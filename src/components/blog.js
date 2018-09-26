import React from 'react';

//blog post TODO: VIEW BLOG DETAILS NEEDS IMPLEMENT
class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.setState({showDescription: false, buttonText:'view'});
    }
    view = (event) => { 
        event.preventDefault();       
        if(this.state && this.state.showDescription) {
            this.setState({
                        showDescription: false, 
                        buttonText:'view'
                    });
        } else {
            this.setState({
                        showDescription: true, 
                        buttonText:'hide'});
        }
    }
    showDescription = () => {
        const { blog } = this.props; 
        if(this.state && this.state.showDescription) {
            return (<p>{blog.description}</p>);
        }
        return;
    }
    render() {
        const { blog, id, remove } = this.props; 
        const buttonText = (this.state && this.state.buttonText) ? this.state.buttonText : 'view';
        
        return (<li key={`blog-`+ id} className="py-1">
            <div className='list-group-item'>
                <span onClick={remove} className="remove-blog">X</span>
                <h4>{blog.title}</h4>
                {this.showDescription()}
                <span>{blog.created}</span>
                <button onClick={this.view} className="btn btn-primary ml-2">{buttonText}</button>
            </div>
        </li>)
    }
}
export default Blog;
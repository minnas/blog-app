import Feed from '../rest/feed'
const uniqid = require('uniqid');
const date = require('date-and-time');

const generateDate = () => {
    return date.format(new Date(), 'YYYY/MM/DD HH:mm:ss');
}
//sort by created date
const sort = (a, b) => {
  try {
      let date1 = date.parse(a.created, 'YYYY/MM/DD HH:mm:ss').getTime();
      let date2 = date.parse(b.created, 'YYYY/MM/DD HH:mm:ss').getTime();
      if (date1 > date2) return -1;
      if (date1 < date2) return 1;
      return 0;
  } catch(e) {
    return 0;
  }
}

export const blogReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_BLOG':
        return [...state, action.data].sort(sort);
      case 'REMOVE_BLOG':
        return state.filter(blog => blog.id !== action.data.id).sort(sort);
      case 'INIT_BLOGS':
        return action.data.sort(sort);
      default:
        return state;
    }
}
//initialize blogs (fetch all blogs)
export const fetchBlogs = () => {
  return (dispatch) => {
    const blogs = Feed.getAll().then(blogs => 
      dispatch({
        type: 'INIT_BLOGS',
        data: blogs
      })
    )
  }
}
//add new blog blog
export const createBlog = (title, description) => {
  //generate id and date for new blog (these two can be created in backed instead)
  const data = {
        id: uniqid(),
        title: title,
        description: description,
        created: generateDate()        
  }

  return async (dispatch) => {
    Feed.create(data).then(blog => 
      dispatch({
          type: 'ADD_BLOG',
          data: blog
        })
      )
    }
}
//remove blog
export const removeBlog = (id) => {
  return async (dispatch) => {
    Feed.remove(id).then(blogs => 
      dispatch({
        type: 'REMOVE_BLOG',
        data: {id}
      })
    )
  }
}

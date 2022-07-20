import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    default:
      return state;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    // response.data === [{}, {}, {}]
    dispatch({ type: 'get_blogposts', payload: response.data });
  };
};

const addBlogPost = () => {
  return async (title, content, callback) => {
    await jsonServer.post('/blogposts', { title, content });
    if (callback) {
      callback();
    }
  };
};

const editBlogPost = () => {
  return async (id, title, content, callback) => {
    await jsonServer.put(`/blogposts/${id}`, { title, content });
    if (callback) {
      callback();
    }
  };
};

const deleteBlogPost = () => {
  return async (id, callback) => {
    await jsonServer.delete(`/blogposts/${id}`);
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);

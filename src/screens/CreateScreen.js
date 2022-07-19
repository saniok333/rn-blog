import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

import React from 'react';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  const onAddPostHandler = (title, content) => {
    addBlogPost(title, content, () => {
      navigation.navigate('Index');
    });
  };

  return (
    <BlogPostForm
      titleLabel="Enter Title:"
      contentLabel="Enter Content:"
      buttonLabel="Add Blog Post"
      onPressHandler={onAddPostHandler}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;

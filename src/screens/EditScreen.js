import { useContext, useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

import React from 'react';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  const { state, editBlogPost } = useContext(Context);

  const { title: initialTitle, content: initialContent } = state.find(
    (post) => post.id === id
  );

  const onEditPostHandler = (title, content) => {
    editBlogPost(id, title, content, () => {
      navigation.pop();
    });
  };
  return (
    <BlogPostForm
      titleLabel="Enter New Title:"
      contentLabel="Enter New Content:"
      initialValues={{ initialTitle, initialContent }}
      buttonLabel="Save Changes"
      onPressHandler={onEditPostHandler}
    />
  );
};

const styles = StyleSheet.create({});

export default EditScreen;

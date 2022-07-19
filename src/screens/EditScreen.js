import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

import React from 'react';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(Context);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const { title: prevTitle, content: prevContent } = state.find(
      (post) => post.id === id
    );
    setTitle(prevTitle);
    setContent(prevContent);
  }, []);

  const onEditPostHandler = () => {
    editBlogPost(id, title, content, () => {
      navigation.navigate('Index');
    });
  };

  return (
    <View>
      <Text style={styles.label}>Enter New Title:</Text>
      <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      <Text style={styles.label}>Enter New Content:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setContent}
        value={content}
      />
      <Button title="Save" onPress={onEditPostHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
    marginBottom: 5,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    margin: 5,
    marginBottom: 15,
    padding: 5,
  },
});

export default EditScreen;

import { useContext, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

import React from 'react';

const CreateScreen = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  return (
    <View>
      <Text style={styles.label}>Enter Title:</Text>
      <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      <Text style={styles.label}>Enter Content:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setContent}
        value={content}
      />
      <Button title="Add Blog Post" />
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

export default CreateScreen;

import { useState } from 'react';

import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const BlogPostForm = ({
  titleLabel,
  initialValues,
  contentLabel,
  buttonLabel,
  onPressHandler,
}) => {
  const { initialTitle, initialContent } = initialValues;
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);
  return (
    <View>
      <Text style={styles.label}>{titleLabel}</Text>
      <TextInput style={styles.input} onChangeText={setTitle} value={title} />
      <Text style={styles.label}>{contentLabel}</Text>
      <TextInput
        style={styles.input}
        onChangeText={setContent}
        value={content}
      />
      <Button
        title={buttonLabel}
        onPress={() => onPressHandler(title, content)}
      />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: { initialTitle: '', initialContent: '' },
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

export default BlogPostForm;

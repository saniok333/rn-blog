import { useContext, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, getBlogPosts } = useContext(Context);
  const { title, content } = state.find((post) => post.id === id);
  useEffect(() => {
    getBlogPosts();

    const listener = navigation.addListener('didFocus', () => {
      getBlogPosts();
      return () => {
        listener.remove();
      };
    });
  }, []);
  return (
    <View>
      <Text>{title}</Text>
      <Text>{content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
        <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({});

export default ShowScreen;

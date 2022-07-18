import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Context } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);
  const { title } = state.find((post) => post.id === id);
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ShowScreen;

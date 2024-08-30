import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define props for the Home component
type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};

const styles = StyleSheet.create({
  signouthomecontainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  signouthome: {
    backgroundColor: '#90EE90',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: '60%',
  },
  signouthometext: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});

const Home: React.FC<HomeProps> = ({ navigation }) => {
  return (
    <View style={styles.signouthomecontainer}>
      <TouchableOpacity style={styles.signouthome}>
        <Text style={styles.signouthometext}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

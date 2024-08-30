import React, { useState } from 'react';
import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
  route: LoginScreenRouteProp;
};

const Login: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleRegisterPage = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.containerlogsign}>
      <Image
        source={require('./images/sliderimg3.jpg')}
        style={styles.imagelogsign}
      />
      <Text style={styles.titlelogsign}>Welcome to Camera Kaaval</Text>
      <Text style={styles.subtitlelogsign}>
        Please login to your account to continue to the application. Proceed to Register if you are a new User.
      </Text>
      <View style={styles.inputContainerlogsign}>
        <AntDesign name="mail" color="#00716F" size={24} />
        <TextInput
          style={styles.inputlogsign}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.inputContainerlogsign}>
        <AntDesign name="lock" color="#00716F" size={24} />
        <TextInput
          style={styles.inputlogsign}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      {
        loading ? (
          <ActivityIndicator size="small" style={{ margin: 28 }} />
        ) : (
          <TouchableOpacity style={styles.buttonlogsign}>
            <Text style={styles.buttonTextlogsign}>Sign In</Text>
          </TouchableOpacity>
        )
      }

      <TouchableOpacity onPress={handleRegisterPage}>
        <Text style={styles.registerlogsign}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containerlogsign: {
    backgroundColor: "#FFF",
    height: "100%",
    paddingHorizontal: 20,
  },
  imagelogsign: {
    width: "100%",
    height: "43%",
  },
  titlelogsign: {
    fontSize: 30,
    alignSelf: "center",
    textAlign: "center",
    marginVertical: 20,
    fontFamily: 'custom-bold', // Apply custom font
    fontWeight: "bold",
  },
  subtitlelogsign: {
    marginHorizontal: 20,
    textAlign: 'center',
    marginTop: 5,
    opacity: 0.4,
    fontFamily: 'custom-regular', // Apply custom font
  },
  inputContainerlogsign: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    marginTop: 15,
    paddingHorizontal: 10,
    borderColor: "#00716F",
    borderRadius: 23,
    paddingVertical: 2,
  },
  inputlogsign: {
    flex: 1,
    paddingHorizontal: 10,
  },
  buttonlogsign: {
    marginHorizontal: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    backgroundColor: "#90EE90",
    paddingVertical: 10,
    borderRadius: 23,
  },
  buttonTextlogsign: {
    color: "black",
    fontFamily: 'custom-bold', // Apply custom font
  },
  registerlogsign: {
    alignSelf: "center",
    color: "black",
    paddingVertical: 30,
    fontFamily: 'custom-regular', // Apply custom font
    textDecorationLine: 'underline',
  },
});

export default Login;

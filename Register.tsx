import React, { useState } from 'react';
import { StyleSheet, Dimensions, Text, TextInput, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { NavigationProp } from '@react-navigation/native';

const { width: w } = Dimensions.get('window');

const styles = StyleSheet.create({
  pageregistercontainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    marginTop: 30,
  },
  titlescaleregister: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    marginBottom: 20,
  },
  titleregister: {
    flex: 1,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  backregister: {
    position: 'absolute',
    left: 10,
    zIndex: 10,
  },
  registerusername: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00716F',
    borderRadius: 23,
    paddingHorizontal: 10,
    paddingVertical: 2,
    width: '100%',
    marginVertical: 10,
  },
  titleuserreg: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  firstnametitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  lastnametitle: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  registernamescontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  registerfirstname: {
    flex: 1,
    marginRight: 10,
    marginTop: 20,
  },
  registerlastname: {
    flex: 1,
    marginLeft: 10,
    marginTop: 20,
  },
  registertextuser: {
    flex: 1,
    paddingHorizontal: 10,
  },
  buttoncontregContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  buttoncontinuereg: {
    backgroundColor: '#90EE90',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: '60%',
  },
  buttonRegisterText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

interface RegisterProps {
  navigation: NavigationProp<any>;
}

const Register: React.FC<RegisterProps> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [loading, setLoading] = useState(false);

  const handlegobacklog = () => {
    navigation.navigate('Login'); // Navigate to the Login screen
  };

  const handlehomeregister = () => {
    navigation.navigate('Home');
  };

  

  return (
    <View style={styles.pageregistercontainer}>
      <View style={styles.titlescaleregister}>
        <TouchableOpacity style={styles.backregister} onPress={handlegobacklog}>
          <AntDesign name="arrowleft" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.titleregister}>Register</Text>
      </View>

      <Text style={styles.titleuserreg}>Username</Text>
      <View style={styles.registerusername}>
        <AntDesign name="user" color="#00716F" size={24} />
        <TextInput
          style={styles.registertextuser}
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
      </View>

      <View style={styles.registernamescontainer}>
        <View style={styles.registerfirstname}>
          <Text style={styles.firstnametitle}>First Name</Text>
          <View style={styles.registerusername}>
            <AntDesign name="user" color="#00716F" size={24} />
            <TextInput
              style={styles.registertextuser}
              placeholder="First Name"
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
        </View>

        <View style={styles.registerlastname}>
          <Text style={styles.lastnametitle}>Last Name</Text>
          <View style={styles.registerusername}>
            <AntDesign name="user" color="#00716F" size={24} />
            <TextInput
              style={styles.registertextuser}
              placeholder="Last Name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>
      </View>

      <Text style={styles.titleuserreg}>Create Password</Text>
      <View style={styles.registerusername}>
        <AntDesign name="lock" color="#00716F" size={24} />
        <TextInput
          style={styles.registertextuser}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <Text style={styles.titleuserreg}>Email Address</Text>
      <View style={styles.registerusername}>
        <AntDesign name="mail" color="#00716F" size={24} />
        <TextInput
          style={styles.registertextuser}
          placeholder="Enter your email ID"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <Text style={styles.titleuserreg}>Phone Number</Text>
      <View style={styles.registerusername}>
        <AntDesign name="phone" color="#00716F" size={24} />
        <TextInput
          style={styles.registertextuser}
          placeholder="Enter your phone number"
          value={phone}
          onChangeText={setPhone}
        />
      </View>

      
        <View style={styles.buttoncontregContainer}>
          <TouchableOpacity style={styles.buttoncontinuereg} onPress={handlehomeregister}>
            <Text style={styles.buttonRegisterText}>Register</Text>
          </TouchableOpacity>
        </View>
      
    </View>
  );
};

export default Register;

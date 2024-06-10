import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  const myEmail = "222310054@student.ibik.ac.id";
  const myPassword = "222310054"

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState (true);
  const [isPassValid, setIsPassValid] = useState (true);
  const [validEmail, setValidEmail] = useState ("");
  const [validPass, setValidPass] = useState ("");

  // const handlerSubmit = () => {
  //   if (!email) {
  //     return alert("Email harus diisi!");
  //   }
  //   if(email !== myEmail) {
  //     return alert("Email yang anda masukan salah!");
  //   }
  //   if (!password) {
  //     return alert("password harus diisi!");
  //   }
  //   if(password !== myPassword) {
  //     return alert("password yang anda masukan salah!");
  //   }
  //   if (!FormData.email.trim()){
  //     validationError.email = 'email harus diisi';
  //   }
  //   if (!FormData.password.trim()){
  //     validationError.password = 'password harus diisi';
  //   }


  //   alert(Selamat Datang, ${email}!);
  // };

  const handlerEmail =() =>{
    setIsEmailValid(false);
    setValidEmail("form email perlu diisi!")
  }
  const handlerPass =() =>{
    setIsPassValid(false);
    setValidPass("form password perlu diisi!")
  }

  const handlerSubmit = () =>{
    if (!email) {
      handlerEmail();
    }else if (!password){
      setIsEmailValid(true);
      handlerPass();
    }else {
      setIsPassValid(true);
      setValidPass("");
      if (email !== myEmail || password !== myPassword){
        return alert ("email dan password yang anda masukan salah!");
      }

      alert (`selamat datang, ${email}!`);

    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Login</Text>
        <Text>Masukan Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          defaultValue={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text style={{color: "red"}}>{validEmail}</Text>

        <Text>Masukan Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          defaultValue={password}
          onChangeText={(text) => setPassword(text)}
          keyboardType="password-address"
          autoCapitalize="none"
        />
        <Text style={{color: "red"}}>{validPass}</Text>
        <TouchableOpacity style={styles.button} onPress={handlerSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#800080',  
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
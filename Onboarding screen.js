import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>CASE TRACKER</Text>
      <Image source={require('./assets/center-image.png')} style={styles.centerImage} />
      <Image source={require('./assets/logo.png')} style={styles.logo} />
       <Text style={styles.title}>Welcome to Our App</Text>
      <Text style={styles.description}>Track your cases USCIS & EOIR - All in one App </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
     
<TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
  <Text style={styles.loginButtonText}>Login</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
  <Text style={styles.signupButtonText}>Sign Up</Text>
</TouchableOpacity>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Or continue without logging</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: 412,
    height: 917,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#007BFF',
  },
  centerImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#007BFF',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#007BFF',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    position: 'absolute',
    bottom: 60,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  continueButton: {
    position: 'absolute',
    bottom: 20,
  },
  continueButtonText: {
    color: '#007BFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default OnboardingScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet } from 'react-native';

const VerifyAccountScreen = () => {
  const [timer, setTimer] = useState(30);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Verify Your Account</Text>
      <Image source={require('./assets/verify-image.png')} style={styles.verifyImage} />
      <Text style={styles.verificationText}>Verification Code Sent</Text>
      <Text style={styles.subtitle}>A verification code has been sent to your number for verifying your account</Text>
      <TextInput style={styles.input} placeholder="Enter verification code" keyboardType="number-pad" />
      <TouchableOpacity style={styles.resendButton} disabled={timer > 0}>
        <Text style={[styles.resendText, timer > 0 && styles.disabledText]}>
          Resend Code {timer > 0 ? `in ${timer}s` : ''}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.goBackButton}>
        <Text style={styles.goBackText}>Go back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#007BFF',
  },
  verifyImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  verificationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#007BFF',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#FFF',
  },
  resendButton: {
    marginBottom: 20,
  },
  resendText: {
    color: '#007BFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  disabledText: {
    color: 'grey',
  },
  goBackButton: {
    marginTop: 10,
  },
  goBackText: {
    color: '#007BFF',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});

export default VerifyAccountScreen;

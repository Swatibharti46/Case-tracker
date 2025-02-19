import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const SuccessScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Success Image */}
      <Image source={require('../assets/success.png')} style={styles.successImage} />
      {/* Success Message */}
      <Text style={styles.successText}>Your case has been successfully added!</Text>
      <Text style={styles.subtitle}>Now you can track your cases in My Cases section.</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.viewCaseButton} onPress={() => navigation.navigate('MyCases')}>
        <Text style={styles.viewCaseText}>View My Case</Text>
      

      </TouchableOpacity>
       

      <TouchableOpacity style={styles.addAnotherButton} onPress={() => navigation.navigate('AddCase')} >
        <Text style={styles.addAnotherText}>Add Another Case</Text>
      

      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  successImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  successText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
  },
  viewCaseButton: {
    backgroundColor: '#003366',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  viewCaseText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addAnotherButton: {
    borderColor: '#003366',
    borderWidth: 2,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  addAnotherText: {
    color: '#003366',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SuccessScreen;

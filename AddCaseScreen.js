import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const MyCasesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Bar with Sort and Add New Case Button */}
      <View style={styles.topBar}>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.sortButton}>
            <Ionicons name="funnel-outline" size={20} color="#FFF" />
            <Text style={styles.sortButtonText}>A-Z</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddCase')}>
            <Ionicons name="add" size={24} color="#FFF" />
            <Text style={styles.addButtonText}>Add New Case</Text>
          </TouchableOpacity>
        </View>
      </View>
      
      {/* My Cases Title */}
      <Text style={styles.header}>My Cases</Text>
      
      {/* Message and Image */}
      <Text style={styles.subtext}>Save your cases to check them easily!</Text>
      <Image source={require('../assets/no-cases.png')} style={styles.noCasesImage} />
      <Text style={styles.noCasesText}>No cases have been saved</Text>
      
      {/* Case Number Input */}
      <Text style={styles.inputLabel}>Case Number</Text>
      <TextInput style={styles.inputBox} placeholder="Enter Case Number" placeholderTextColor="#A9A9A9" />
      
      {/* USCIS and FOIA Information */}
      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>USCIS and FOIA</Text>
        <Text style={styles.infoText}>Use the case number for your application. Here are some examples:</Text>
        <Text style={styles.exampleText}>- MSC2490165261{"\n"}- IOE7262518482{"\n"}- NRC2024057502REQ</Text>
        <Text style={styles.infoTitle}>EOIR (Immigration Court)</Text>
        <Text style={styles.infoText}>Use the alien number you were given upon arrival, without the letter 'A'. Here are some examples:</Text>
        <Text style={styles.exampleText}>- 123456789{"\n"}- 234567890</Text>
      </View>
      
      {/* Add New Case Button */}
      <TouchableOpacity style={styles.addNewCaseButton} onPress={() => navigation.navigate('AddCase')}>
        <MaterialCommunityIcons name="file-plus" size={24} color="#FFF" style={styles.addNewCaseIcon} />
        <Text style={styles.addNewCaseButtonText}>Add New Case</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    padding: 20,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sortButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  sortButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  subtext: {
    fontSize: 16,
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  noCasesImage: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  noCasesText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 5,
  },
  inputBox: {
    width: '90%',
    height: 50,
    borderColor: '#003366',
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  infoBox: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 8,
    width: '90%',
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 5,
  },
  infoText: {
    fontSize: 14,
    color: '#333',
  },
  exampleText: {
    fontSize: 14,
    color: '#555',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  addNewCaseButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#003366', // Dark Blue
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '80%',
  },
  addNewCaseIcon: {
    marginRight: 10,
  },
  addNewCaseButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyCasesScreen;

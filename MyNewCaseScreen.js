import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
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
      <Image source={require('./assets/no-cases.png')} style={styles.noCasesImage} />
      <Text style={styles.noCasesText}>No cases have been saved</Text>
      
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

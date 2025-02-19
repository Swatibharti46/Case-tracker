import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function MyCaseScreen() {
  const cases = [
    {
      id: "36682231",
      title: "My Immigration Court",
      status: "Hearing: 13/03/2025",
      date: "Jan 01, 2025",
    },
    {
      id: "MSC1274861",
      title: "My USCIS case",
      status: "Card Mailed To Me",
      date: "Jan 01, 2025",
    },
    {
      id: "NRC47415REQ",
      title: "My FOIA request",
      status: "Completed",
      date: "Jan 01, 2025",
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.sortButton}>
          <FontAwesome name="sort" size={16} color="white" style={styles.icon} />
          <Text style={styles.sortButtonText}>Sort</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>+ Add New Case</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>MY CASE</Text>
      <Text style={styles.subtitle}>Save your cases to check them easily</Text>
      {cases.map((c) => (
        <View key={c.id} style={styles.card}>
          <View style={styles.blueBar} />
          <View style={styles.cardContent}>
            <Text style={styles.caseId}>{c.id}</Text>
            <Text style={styles.caseTitle}>{c.title}</Text>
            <Text style={styles.caseStatus}>{c.status}</Text>
            <Text style={styles.caseDate}>{c.date}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  sortButton: { flexDirection: "row", alignItems: "center", padding: 8, borderWidth: 1, borderColor: "darkblue", backgroundColor: "darkblue" },
  sortButtonText: { color: "white" },
  icon: { marginRight: 8 },
  addButton: { backgroundColor: "darkblue", paddingVertical: 8, paddingHorizontal: 16 },
  addButtonText: { color: "white" },
  title: { fontSize: 20, fontWeight: "bold", color: "darkblue" },
  subtitle: { color: "gray", marginBottom: 16 },
  card: { flexDirection: "row", borderWidth: 1, borderColor: "#ccc", borderRadius: 8, overflow: "hidden", marginBottom: 16 },
  blueBar: { width: 8, backgroundColor: "darkblue" },
  cardContent: { padding: 16 },
  caseId: { fontSize: 16, fontWeight: "bold" },
  caseTitle: { color: "black" },
  caseStatus: { color: "gray" },
  caseDate: { color: "lightgray", fontSize: 12 },
});

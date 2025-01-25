import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";

const PurchaseHistory = () => {
  const [activeTab, setActiveTab] = useState("diamondsUsed"); // Default tab
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <FontAwesome5
            onPress={() => navigation.navigate("PurchaseHistory")}
            name="arrow-left"
            size={16}
            color="#fff"
          />
          <Text style={styles.backText}>History</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "diamondsUsed" && styles.activeTab]}
          onPress={() => setActiveTab("diamondsUsed")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "diamondsUsed" && styles.activeTabText,
            ]}
          >
            Diamonds Used
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === "diamondsAdded" && styles.activeTab,
          ]}
          onPress={() => setActiveTab("diamondsAdded")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "diamondsAdded" && styles.activeTabText,
            ]}
          >
            Diamonds Added
          </Text>
        </TouchableOpacity>
      </View>

      {/* Tab Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {activeTab === "diamondsUsed" ? (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No diamonds used yet</Text>
            <Text style={styles.description}>
              Once you use diamonds, you'll see all the details here
            </Text>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Back to Store</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>No diamonds added yet</Text>
            <Text style={styles.description}>
              Once you add diamonds, you'll see all the details here
            </Text>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Back to Store</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  backButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    flexDirection: "row",
    gap: 10,
    alignItems: "baseline",
  },
  backText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  activeTab: {
    borderBottomColor: "#fff",
  },
  tabText: {
    color: "#888",
    fontSize: 16,
  },
  activeTabText: {
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  emptyState: {
    alignItems: "center",
  },
  emptyText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    color: "#888",
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#ff006e",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    shadowColor: "#ff006e",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default PurchaseHistory;

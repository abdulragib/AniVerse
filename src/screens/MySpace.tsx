import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MySpace = () => {
  const [isDataSaverEnabled, setDataSaverEnabled] = useState(false);
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{paddingHorizontal:15}} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>My Space</Text>
        </View>

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: "https://shorturl.at/V7Hz3" }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Benjamin</Text>
          <Text style={styles.profileHandle}>@KUKU FM</Text>
          <TouchableOpacity>
            <Text style={styles.editProfileText}>Tap to edit profile</Text>
          </TouchableOpacity>
          <View style={styles.profileStats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>200</Text>
              <Text style={styles.statLabel}>Diamond</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>130</Text>
              <Text style={styles.statLabel}>Plays</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>40</Text>
              <Text style={styles.statLabel}>Listens</Text>
            </View>
          </View>
        </View>

        {/* Settings Options */}
        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="language" size={20} color="#fff" />
            <Text style={styles.settingText}>Audio Language</Text>
            <Text style={styles.settingValue}>English +1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="musical-notes" size={20} color="#fff" />
            <Text style={styles.settingText}>Audio Quality</Text>
            <Text style={styles.settingValue}>HD Audio</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.settingItem}>
          <Ionicons name="refresh" size={20} color="#fff" />
          <Text style={styles.settingText}>Restore Purchase (Subscription)</Text>
        </TouchableOpacity> */}

          <View style={styles.settingItem}>
            <Ionicons name="cloud" size={20} color="#fff" />
            <Text style={styles.settingText}>Data Saver Mode</Text>
            <Switch
              value={isDataSaverEnabled}
              onValueChange={(value) => setDataSaverEnabled(value)}
              thumbColor={isDataSaverEnabled ? "white" : "#fff"}
            />
          </View>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="star" size={20} color="#fff" />
            <Text style={styles.settingText}>Review Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="call" size={20} color="#fff" />
            <Text style={styles.settingText}>Contact Us</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="document" size={20} color="#fff" />
            <Text style={styles.settingText}>Terms and Conditions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.settingItem}>
            <Ionicons name="lock-closed" size={20} color="#fff" />
            <Text style={styles.settingText}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>

        {/* Additional Options */}
        <View style={styles.additionalOptionsSection}>
          <TouchableOpacity style={styles.additionalItem}>
            <Ionicons name="people" size={20} color="#fff" />
            <Text style={styles.settingText}>Invite Friends</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.additionalItem}>
            <Ionicons name="settings" size={20} color="#fff" />
            <Text style={styles.settingText}>Account Settings</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.additionalItem}>
            <Ionicons name="gift" size={20} color="#fff" />
            <Text style={styles.settingText}>Get Reward</Text>
          </TouchableOpacity>

          {/* <TouchableOpacity style={styles.additionalItem}>
          <Ionicons name="diamond" size={20} color="#fff" />
          <Text style={styles.settingText}>Premium Settings</Text>
        </TouchableOpacity> */}
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>

        {/* Footer */}
        <Text style={styles.footerText}>v2.3.0 | User ID: 2893258</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 20,
    marginTop:15
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  profileHandle: {
    color: "gray",
    fontSize: 14,
    marginBottom: 10,
  },
  editProfileText: {
    color: "orange",
    fontSize: 14,
    marginBottom: 20,
  },
  profileStats: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statNumber: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  statLabel: {
    color: "gray",
    fontSize: 12,
  },
  validityText: {
    color: "orange",
    fontSize: 12,
  },
  settingsSection: {
    marginBottom: 20,
  },
  settingItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  settingText: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
  },
  settingValue: {
    color: "gray",
    fontSize: 14,
  },
  additionalOptionsSection: {
    marginBottom: 20,
  },
  additionalItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  logoutButton: {
    backgroundColor: "orange",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 8,
    marginBottom: 20,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerText: {
    color: "gray",
    fontSize: 12,
    textAlign: "center",
  },
});

export default MySpace;

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import { SafeAreaView } from "react-native";

// Custom Header Component
export default function HomeHeader() {
  return (
    <SafeAreaView style={styles.safeHeader}>
      {/* Profile Picture */}
      <View style={styles.header}>
      <TouchableOpacity>
        <Image
          source={{
            uri: "https://shorturl.at/V7Hz3", // Replace with actual profile image URL
          }}
          style={styles.profilePic}
        />
      </TouchableOpacity>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={20}
          color="gray"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search your Book"
          placeholderTextColor="gray"
        />
      </View>

      {/* Notification Icon */}
      <TouchableOpacity>
        <Ionicons name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

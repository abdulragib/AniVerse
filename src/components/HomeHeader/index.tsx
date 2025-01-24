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
import { useNavigation } from "@react-navigation/native";

// Custom Header Component
export default function HomeHeader() {
  const navigation=useNavigation<any>();
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

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 15,
            justifyContent: "baseline",
          }}
        >
          {/* Search Icon */}
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Ionicons
              name="search"
              size={24}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>

          {/* Language Selector */}
          <TouchableOpacity>
            <FontAwesome
              name="globe"
              size={24}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>

          {/* Notification Icon */}
          <TouchableOpacity>
            <Ionicons
              name="diamond"
              size={22}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

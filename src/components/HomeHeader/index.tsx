import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";
import { styles } from "./style";

export default function HomeHeader() {
  const navigation = useNavigation<any>();
  const [isModalVisible, setModalVisible] = useState(false);

  const languages = [
    { id: "1", name: "English" },
    { id: "2", name: "Spanish" },
    { id: "3", name: "French" },
    { id: "4", name: "German" },
    { id: "5", name: "Hindi" },
    { id: "6", name: "Chinese" },
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleLanguageSelect = (language: string) => {
    console.log("Selected Language:", language);
    toggleModal();
  };

  return (
    <SafeAreaView style={styles.safeHeader}>
      <View style={styles.header}>
        {/* Profile Picture */}
        <TouchableOpacity>
          <Image
            source={{
              uri: "https://shorturl.at/V7Hz3", // Replace with actual profile image URL
            }}
            style={styles.profilePic}
          />
        </TouchableOpacity>

        {/* Icons */}
        <View style={styles.iconsContainer}>
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
          <TouchableOpacity onPress={toggleModal}>
            <FontAwesome
              name="globe"
              size={24}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>

          {/* Notification Icon */}
          <TouchableOpacity onPress={() => navigation.navigate("Store")}>
            <Ionicons
              name="diamond"
              size={22}
              color="white"
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Sheet Modal */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={toggleModal}
        style={styles.modalContainer}
      >
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Select Language</Text>
          <FlatList
            data={languages}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.languageOption}
                onPress={() => handleLanguageSelect(item.name)}
              >
                <Text style={styles.languageText}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

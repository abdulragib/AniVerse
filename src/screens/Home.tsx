import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  // Dummy data for books
  const popularBooks = [
    { id: "1", title: "Rich Dad Poor Dad", image: "https://shorturl.at/V7Hz3" },
    {
      id: "2",
      title: "The Power of Your Subconscious Mind",
      image: "https://shorturl.at/V7Hz3",
    },
    { id: "3", title: "Ambedkar's India", image: "https://shorturl.at/V7Hz3" },
  ];

  const recommendedBooks = [
    { id: "1", title: "Nehru", image: "https://shorturl.at/V7Hz3" },
    { id: "2", title: "Sachin Tendulkar", image: "https://shorturl.at/V7Hz3" },
    { id: "3", title: "Gandhi", image: "https://shorturl.at/V7Hz3" },
  ];

  // Render book item
  const renderBook = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image source={{ uri: item.image }} style={styles.bookImage} />
      <Text style={styles.bookTitle} numberOfLines={2}>
        {item.title}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Popular Books Section */}
      <View style={styles.innerContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Popular Story</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={popularBooks}
          horizontal
          renderItem={renderBook}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 20 }}
        />

        {/* Recommended Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={recommendedBooks}
          horizontal
          renderItem={renderBook}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 20 }}
        />
      </View>

      {/* Bottom Audio Player */}
      <View style={styles.audioPlayer}>
        <Image
          source={{ uri: "https://shorturl.at/V7Hz3" }}
          style={styles.audioImage}
        />
        <View style={styles.audioInfo}>
          <Text style={styles.audioTitle} numberOfLines={1}>
            Rich Dad And Poor Dad
          </Text>
          <Text style={styles.audioSubtitle} numberOfLines={1}>
            Episode 1 | 11 min left
          </Text>
        </View>
        <Ionicons name="play-circle" size={40} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  innerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    flex: 1,
    padding: 10,
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginTop: 20,
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAll: {
    color: "#FF5733",
    fontSize: 14,
  },
  bookContainer: {
    marginHorizontal: 10,
    alignItems: "center",
    width: 100,
  },
  bookImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  bookTitle: {
    color: "white",
    fontSize: 12,
    marginTop: 5,
    textAlign: "center",
  },
  audioPlayer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#333",
    padding: 10,
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
  },
  audioImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  audioInfo: {
    flex: 1,
    marginHorizontal: 10,
  },
  audioTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  audioSubtitle: {
    color: "gray",
    fontSize: 12,
  },
  playButton: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

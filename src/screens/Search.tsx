import React from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    title: "Mr. Amirzaada",
    subtitle: "RJ Abhi",
    plays: "79.8M",
    rating: "4.2",
    image: "https://shorturl.at/V7Hz3",
  },
  {
    id: "2",
    title: "Aaj Ka Hero",
    subtitle: "Shubh Arts",
    plays: "33.4M",
    rating: "4.5",
    image: "https://shorturl.at/V7Hz3",
  },
  {
    id: "3",
    title: "Shoorveer",
    subtitle: "Pocket Studios",
    plays: "360.0M",
    rating: "4.4",
    image: "https://shorturl.at/V7Hz3",
  },
  {
    id: "4",
    title: "Super Yoddha",
    subtitle: "Rivansh",
    plays: "380.5M",
    rating: "4.4",
    image: "https://shorturl.at/V7Hz3",
  },
  {
    id: "5",
    title: "Insta Empire",
    subtitle: "Abhishek Mishra",
    plays: "347.9M",
    rating: "4.3",
    image: "https://shorturl.at/V7Hz3",
  },
];

const SearchPage = () => {
  const navigation = useNavigation<any>();
  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
        <Text style={styles.cardDetails}>
          {item.plays} PLAYS • ★ {item.rating}
        </Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons
          onPress={() => navigation.goBack()}
          name="arrow-back-circle-outline"
          size={27}
          color="gray"
        />
        <TextInput
          placeholder="Search series, episodes, and artists"
          placeholderTextColor="gray"
          style={styles.searchInput}
        />
      </View>

      {/* Trending List */}
      <Text style={styles.sectionTitle}>Trending now</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",

    paddingTop: 40,
    paddingHorizontal:20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1C1C1C",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 40,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: "white",
  },
  sectionTitle: {
    color: "white",
    fontSize: 18,
    marginVertical: 26,
    paddingTop:5,
  },
  listContainer: {
    paddingBottom: 80,
  },
  card: {
    flexDirection: "row",
    marginBottom: 16,
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: "gray",
  },
  cardContent: {
    marginLeft: 12,
    flex: 1,
  },
  cardTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  cardSubtitle: {
    color: "gray",
    fontSize: 14,
  },
  cardDetails: {
    color: "gray",
    fontSize: 12,
    marginTop: 4,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1C1C1C",
    height: 70,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  navText: {
    color: "gray",
    fontSize: 12,
    marginTop: 4,
  },
});

export default SearchPage;

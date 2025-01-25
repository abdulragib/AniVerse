import React from "react";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SeriesOverview = () => {
  const navigation = useNavigation<any>();
  const episodes = [
    { id: 1, title: "Shankhnaad", duration: "11:50" },
    { id: 2, title: "Ghar Wapsi", duration: "09:31" },
    { id: 3, title: "Purana Ajnabi", duration: "09:23" },
    { id: 4, title: "Ye Sheher Nahi Mehfil Hai", duration: "10:10" },
    { id: 5, title: "Ek Teer Do Nishane", duration: "11:09" },
    { id: 6, title: "Tumhari Koi Girlfriend Hai?", duration: "11:43" },
    { id: 7, title: "Competition", duration: "15:25" },
    { id: 8, title: "Mukkebaazi", duration: "08:52" },
    { id: 9, title: "Stay Away From Beautiful Ladies", duration: "09:41" },
    { id: 10, title: "Fight", duration: "09:57" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image
            source={{ uri: "https://shorturl.at/V7Hz3" }}
            style={styles.headerImage}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <FontAwesome5 name="arrow-left" size={16} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton}>
            <Ionicons name="share-social" size={20} color="#ffffff" />
          </TouchableOpacity>
        </View>

        <View style={{ padding: 10 }}>
          {/* Title Section */}
          <View style={styles.titleSection}>
            <Text style={styles.title}>Zero to Hero | जीरो टू हीरो</Text>
            <Text style={styles.status}>COMPLETED SERIES</Text>
          </View>

          {/* Stats */}
          <View style={styles.stats}>
            <Text style={styles.statsText}>47.7M PLAYS</Text>
            <Text style={styles.statsText}>⭐ 4.4 | 14.3K</Text>
            <Text style={styles.statsText}>DRAMA | U/A 16+</Text>
          </View>

          {/* Description */}
          <Text style={styles.description}>
            Kartik’s poverty earns him ridicule from friends and insults from
            his girlfriend as they are unaware that Kartik is heir to a rich
            inheritance. What will happen to Kartik’s life when he sudd...
          </Text>

          {/* Metadata */}
          <View style={styles.metadata}>
            <Text style={styles.metadataText}>
              ORIGINAL AUTHOR: Stella Smith
            </Text>
            <Text style={styles.metadataText}>
              SHOW WRITERS & CAST: Manisha Nalpuriya & 2 more
            </Text>
          </View>

          {/* Episode List */}
          <View style={styles.episodesSection}>
            <Text style={styles.sectionTitle}>Episodes</Text>
            {episodes.map((episode) => (
              <View key={episode.id} style={styles.episode}>
                <Ionicons
                  name="play-circle"
                  size={24}
                  color="#ffffff"
                  style={styles.playIcon}
                />
                <Text
                  style={styles.episodeTitle}
                >{`E${episode.id}. ${episode.title}`}</Text>
                <Text style={styles.episodeDuration}>{episode.duration}</Text>
                <TouchableOpacity style={styles.saveButton}>
                  <MaterialIcons
                    name="bookmark-border"
                    size={20}
                    color="#ffffff"
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.downloadButton}>
                  <Text style={styles.downloadText}>Download</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
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
    position: "relative",
    marginBottom: 20,
    width: "100%",
  },
  headerImage: {
    width: "100%",
    height: 300,
    borderRadius: 12,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 8,
    borderRadius: 8,
  },
  backText: {
    fontSize: 18,
    color: "#ffffff",
  },
  shareButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 8,
    borderRadius: 8,
  },
  titleSection: {
    alignItems: "center",
    paddingVertical: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
  },
  status: {
    fontSize: 14,
    color: "#00ff00",
    marginTop: 4,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#1e1e1e",
    paddingVertical: 12,
    borderRadius: 10,
  },
  statsText: {
    fontSize: 14,
    color: "#cccccc",
  },
  description: {
    fontSize: 14,
    color: "#aaaaaa",
    margin: 16,
    textAlign: "left",
    lineHeight: 20,
  },
  metadata: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  metadataText: {
    fontSize: 12,
    color: "#888888",
    marginBottom: 5,
  },
  episodesSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  episode: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  playIcon: {
    marginRight: 10,
  },
  episodeTitle: {
    fontSize: 16,
    color: "#ffffff",
    flex: 1,
  },
  episodeDuration: {
    fontSize: 14,
    color: "#cccccc",
    marginHorizontal: 10,
  },
  saveButton: {
    marginHorizontal: 10,
  },
  downloadButton: {
    backgroundColor: "#333333",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  downloadText: {
    fontSize: 12,
    color: "#ffffff",
  },
});

export default SeriesOverview;

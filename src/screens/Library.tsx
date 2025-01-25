import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const Library = () => {
  // Sample data for sections
  const recentlyPlayed = [
    { id: '1', title: 'Rich Dad And Poor Dad', episodes: 'Ep: 1/17', image: "https://shorturl.at/V7Hz3" },
    { id: '2', title: 'Sunil Chhetri', episodes: 'Ep: 1/30', image: "https://shorturl.at/V7Hz3" },
    { id: '3', title: 'Periyar Ambedkar', episodes: 'Ep: 1/10', image: "https://shorturl.at/V7Hz3" },
  ];

  const savedForLater = [
    { id: '4', title: "Ambedkar's India", episodes: 'Ep: 1/7', image: "https://shorturl.at/V7Hz3" },
    { id: '5', title: 'The Bhagat Singh Reader', episodes: '', image: "https://shorturl.at/V7Hz3" },
    { id: '6', title: 'Rich Dad And Poor Dad', episodes: '', image: "https://shorturl.at/V7Hz3" },
  ];

  const downloads = [
    { id: '7', title: 'Ramanujan', episodes: '', image: "https://shorturl.at/V7Hz3" },
    { id: '8', title: 'Rich Dad And Poor Dad', episodes: '', image: "https://shorturl.at/V7Hz3" },
    { id: '9', title: 'Psychology Basics', episodes: '', image: "https://shorturl.at/V7Hz3" },
  ];

  const renderSection = (title, data) => (
    <View style={styles.sectionContainer}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.itemImage} />
            {/* <Text style={styles.itemTitle} numberOfLines={1}>{item.title}</Text> */}
            {item.episodes && <Text style={styles.itemSubtitle}>{item.episodes}</Text>}
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.header}>My Library</Text>
      <View style={{paddingTop:30}}>
      {renderSection('Recently Played', recentlyPlayed)}
      {renderSection('Saved for later', savedForLater)}
      {renderSection('Downloads', downloads)}
      </View>
      {/* Add a bottom player or other components if needed */}
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  sectionContainer: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'orange',
    fontSize: 14,
  },
  itemContainer: {
    marginRight: 10,
    alignItems: 'center',
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemTitle: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
  },
  itemSubtitle: {
    color: 'gray',
    fontSize: 12,
  },
});

export default Library;

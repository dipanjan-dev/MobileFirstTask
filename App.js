import * as React from 'react';
import { View, StyleSheet ,ScrollView ,RefreshControl,Button} from 'react-native';
import Constants from 'expo-constants';
import SearchBar from "react-native-dynamic-search-bar";

// You can import from local files
import MovieCard from './components/MovieCard';

// or any pure javascript modules available in npm
import { Card, Text} from 'react-native-paper';



export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.header}>  
        <Text style={styles.headerText}>TMDB</Text>
        <SearchBar
          placeholder="Search here"
          onPress={() => alert("onPress")}
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <ScrollView >
        <MovieCard />
      </ScrollView> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 0,
    margin : 0,
    backgroundColor : "#f0f0f0",
    
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  header:{
    backgroundColor : "#fff",
    padding : 20
  },
  headerText:{
    fontSize : 20,
    fontWeight : 'bold',
    textAlign : "center",
    marginBottom : 20
  }
});

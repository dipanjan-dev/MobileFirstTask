import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';

export default function MovieCard() {

  return (
    <View style={styles.cardList}>
    
     <Card style={styles.card}>
      <Image style={styles.logo}  source={{
          uri: 'https://images.indianexpress.com/2021/08/free-guy-1200.jpg',
        }} />
        <Text style={styles.paragraph}>Free Guy</Text>
     </Card>
      <Card style={styles.card}>
      <Image style={styles.logo}  source={{
          uri: 'https://www.exberliner.com/wp-content/uploads/2022/01/the-kings-man-1.jpg',
        }} />
        <Text style={styles.paragraph}>The Kings Man</Text>
     </Card>
     <Card style={styles.card}>
      <Image style={styles.logo}  source={{
          uri: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/zeg4vozoybahqjqn_1596454312.jpeg',
        }} />
        <Text style={styles.paragraph}>Jojo Rabbit</Text>
     </Card>
       <Card style={styles.card}>
      <Image style={styles.logo}  source={{
          uri: 'https://i.ytimg.com/vi/zSYZJGAGvww/maxresdefault.jpg',
        }} />
        <Text style={styles.paragraph}>Time Less</Text>
     </Card>
         <Card style={styles.card}>
      <Image style={styles.logo}  source={{
          uri: 'https://i.ytimg.com/vi/zSYZJGAGvww/maxresdefault.jpg',
        }} />
        <Text style={styles.paragraph}>Time Less</Text>
     </Card>
         <Card style={styles.card}>
      <Image style={styles.logo}  source={{
          uri: 'https://i.ytimg.com/vi/zSYZJGAGvww/maxresdefault.jpg',
        }} />
        <Text style={styles.paragraph}>Time Less</Text>
     </Card>
         <Card style={styles.card}>
      <Image style={styles.logo}  source={{
          uri: 'https://i.ytimg.com/vi/zSYZJGAGvww/maxresdefault.jpg',
        }} />
        <Text style={styles.paragraph}>Time Less</Text>
     </Card>
    </View>
    
  );
}

const styles = StyleSheet.create({
  card:{
    marginTop : 10,
    elevation: 10,
    shadowColor: '#000000',
    borderRadius : 5
  },
  cardList: {
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight : 'Bold',
    textAlign: 'left',
  },
  logo: {
    height: 128,
    width: '100%',
    borderRadius : 5
  }
});

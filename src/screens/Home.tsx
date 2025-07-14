import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f0e5e6ff' }}
      showsVerticalScrollIndicator={false}
    >
      <CustomCarousel />
      <View style={{marginLeft:20}}>
        <Text style={styles.heading}>Why Junoon Capital? </Text>
      </View>

      <Icon name="caret-forward-outline" size={25} />

  
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'navy',
  },
});

import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import Icon from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f0e5e6ff' }}
      showsVerticalScrollIndicator={false}
    >
      
      <View style={styles.heroContainer}>
        <CustomCarousel />

        <View style={styles.overlayTextContainer}>
          <Text style={styles.titleText}>BEST <Text style={{color:'#aa0849d3'}}>INNOVATION IN</Text></Text>
          <Text style={styles.titleText}>FINANCIAL INCLUSION</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#aa0849d3'}]}>
              <Text style={styles.buttonText}>Our Products</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      {/* Below content */}
      <View style={{ marginLeft: 20, marginTop: 20 }}>
        <Text style={styles.heading}>Why Junoon Capital?</Text>
      </View>

      <Icon name="caret-forward-outline" size={25} style={{ marginLeft: 20 }} />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  heroContainer: {
    position: 'relative',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    elevation:5,
    shadowOpacity:5
  },
  overlayTextContainer: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 10,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'navy',
  },
});

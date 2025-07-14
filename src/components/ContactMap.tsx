import React, { useRef, useState } from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text, Linking } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const INITIAL_REGION = {
  latitude: 28.580001,
  longitude: 77.329999,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const ContactMap = () => {
  const mapRef = useRef<MapView>(null);
  const [region, setRegion] = useState(INITIAL_REGION);

  const zoomIn = () => {
    mapRef.current?.animateToRegion({
      ...region,
      latitudeDelta: region.latitudeDelta / 2,
      longitudeDelta: region.longitudeDelta / 2,
    }, 300);
    setRegion((prev) => ({
      ...prev,
      latitudeDelta: prev.latitudeDelta / 2,
      longitudeDelta: prev.longitudeDelta / 2,
    }));
  };

  const zoomOut = () => {
    mapRef.current?.animateToRegion({
      ...region,
      latitudeDelta: region.latitudeDelta * 2,
      longitudeDelta: region.longitudeDelta * 2,
    }, 300);
    setRegion((prev) => ({
      ...prev,
      latitudeDelta: prev.latitudeDelta * 2,
      longitudeDelta: prev.longitudeDelta * 2,
    }));
  };

  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${region.latitude},${region.longitude}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        region={region}
        onRegionChangeComplete={(r) => setRegion(r)}
        loadingBackgroundColor='rgba(0,0,0,0.2)'
      >
        <Marker
          coordinate={{ latitude: 28.580001, longitude: 77.329999 }}
          title="Junoon Capital"
          description="Sector 16, Noida, India"
        />
      </MapView>

      <View style={styles.zoomControls}>
        <TouchableOpacity style={styles.zoomBtn} onPress={zoomIn}>
          <Icon name="add" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.zoomBtn} onPress={zoomOut}>
          <Icon name="remove" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.googleMapBtn} onPress={openInGoogleMaps}>
        <Text style={styles.googleMapBtnText}>Open in Google Maps</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ContactMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e5e6',
    width: width * 0.8,
    height: height*0.5,
  },
  map: {
    width:'100%',
    height:'100%'
  },
  zoomControls: {
    position: 'absolute',
    right: 20,
    top: 100,
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 8,
    padding: 4,
  },
  zoomBtn: {
    padding: 10,
    alignItems: 'center',
  },
  googleMapBtn: {
    position: 'absolute',
    bottom: 50,
    alignSelf: 'center',
    backgroundColor: '#7E1900',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    elevation: 3,
  },
  googleMapBtnText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});

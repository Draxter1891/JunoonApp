import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Partners = () => {
  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.heading}>Our Lending Partner</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Icon name="checkmark-circle-outline" size={20} color="#7E1900" />
          <Text style={styles.description}>
            Junoon Capital Services Private Limited is associated with notable institutional investors and lenders.
            They assist in smooth operations by offering tailored products. Our partners help bring underserved
            communities into formal banking by reducing dependency on unorganized lenders.
          </Text>
        </View>

        <Image
          source={{ uri: 'https://www.arthmate.com/storage/company/logo.png' }}
          style={styles.img}
        />
      </View>

      <Text style={styles.subHeading}>Our Technical Partners</Text>

      <View style={styles.card}>
        <Image source={{ uri: 'https://www.junooncapital.com/img/cibil.png' }} style={styles.img} />
        <Image source={{ uri: 'https://www.crifhighmark.com/media/1674/crif-high-mark-logo.png' }} style={styles.img} />
        <Image source={{ uri: 'https://www.junooncapital.com/img/equifax.png' }} style={styles.img} />
        <Image source={{ uri: 'https://www.junooncapital.com/img/experian.png' }} style={styles.img} />
        <Image source={{ uri: 'https://www.junooncapital.com/img/accredit_tech.jpeg' }} style={styles.img} />
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Junoon Capital Services Pvt Ltd. All Rights Reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Partners;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0e5e6',
    padding: 20,
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '700',
    color: '#7E1900',
    marginBottom: 20,
    alignSelf:'flex-start'
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: 'navy',
    marginVertical: 20,
    alignSelf: 'flex-start',
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  description: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginLeft: 8,
  },
  img: {
    width: '80%',
    height: 100,
    marginBottom: 12,
    resizeMode: 'contain',
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  footer: {
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});

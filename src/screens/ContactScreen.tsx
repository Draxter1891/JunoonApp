import React, { Suspense, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const LazyMap = React.lazy(() => import('../components/ContactMap'));
const openEmail = (email: string) => Linking.openURL(`mailto:${email}`);
const openPhone = (phone: string) => Linking.openURL(`tel:${phone}`);

const ContactScreen = () => {
  const [showMap, setshowMap] = useState(false);
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.heading}>Contact us</Text>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Get in Touch</Text>
        <View style={styles.row}>
          <Icon name="call-outline" size={20} color="#7E1900" />
          <TouchableOpacity onPress={() => openPhone('+919311343335')}>
            <Text style={styles.contactText}>+91‑9311343335</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Icon name="mail-outline" size={20} color="#7E1900" />
          <TouchableOpacity onPress={() => openEmail('info@junooncapital.com')}>
            <Text style={styles.contactText}>info@junooncapital.com</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Icon name="location-outline" size={20} color="#7E1900" />
          <Text style={styles.contactText}>
            Unit No.683, Business Park, Vegas Mall,{'\n'}
            Plot No. 06, Sector‑14, Dwarka,{'\n'}
            New Delhi – 110078
          </Text>
        </View>
        <Text style={styles.smallText}>
          CIN: U74899DL1996PTC080511{'\n'}RBI Regd. No.: B‑14.01812
        </Text>
      </View>

      <Text style={styles.subHeading}>Grievance Redressal officer</Text>
      <View style={styles.card}>
        <Text style={styles.sectionSubtitle}>Mr. Sachin Kumar Srivastava</Text>
        <View style={styles.row}>
          <Icon name="mail-outline" size={20} color="#7E1900" />
          <TouchableOpacity onPress={() => openEmail('info@junooncapital.com')}>
            <Text style={styles.contactText}>info@junooncapital.com</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Icon name="call-outline" size={20} color="#7E1900" />
          <TouchableOpacity onPress={() => openPhone('+919311343335')}>
            <Text style={styles.contactText}>+91‑9311343335</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.subHeading}>Arthmate Grievance contact</Text>
      <View style={styles.card}>
        <Text style={styles.sectionSubtitle}>Ms. Deepika Rawat</Text>
        <View style={styles.row}>
          <Icon name="mail-outline" size={20} color="#7E1900" />
          <TouchableOpacity
            onPress={() => openEmail('statutory.compliance@arthmate.com')}
          >
            <Text style={styles.contactText}>
              statutory.compliance@arthmate.com
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <Icon name="call-outline" size={20} color="#7E1900" />
          <TouchableOpacity onPress={() => openPhone('+917835009643')}>
            <Text style={styles.contactText}>+91‑7835009643</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.contactText}>
          Arthmate Financing India Pvt Ltd,{'\n'}
          The Circle Work, 3rd Floor,{'\n'}
          Huda City Center, Sector – 29,{'\n'}
          Gurugram, Haryana – 122002
        </Text>
      </View>
      {showMap && (
        <Suspense fallback={<Text>Loading Map...</Text>}>
          <View style={styles.card}>
            <LazyMap />
          </View>
        </Suspense>
      )}
      <TouchableOpacity
        style={styles.mapBtn}
        onPress={() => setshowMap(prevState => !prevState)}
      >
        <Icon name="compass" size={25} color={'#037ffc'} />
        <Text style={{ fontWeight: 'bold', color: '#6a6c6e' }}>
          {showMap ? 'Hide Map' : 'Show Map'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ContactScreen;

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
    textTransform:'uppercase'
  },
  subHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#946060ff',
    marginTop: 20,
    alignSelf: 'center',
    textTransform:'uppercase'
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'navy',
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'navy',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  contactText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
    lineHeight: 20,
  },
  smallText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 18,
    marginTop: 8,
  },
  mapBtn: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom:50,
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: '#8c8d8f',
  },
});

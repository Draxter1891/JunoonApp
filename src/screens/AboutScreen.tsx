import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PolicyButton from '../components/PolicyBtn';

const AboutScreen = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      showsVerticalScrollIndicator={false}
    >
      {' '}
      <View style={styles.card}>
        <Image
          source={{
            uri: 'https://drive.google.com/uc?export=view&id=1xEYKVGCyg2ayL0rcr0cLadoMO5POwF6V',
          }}
          style={styles.img}
          resizeMode="cover"
        />
        <Text style={styles.sectionTitle}>Why Junoon Capital?</Text>

        <View style={styles.pointRow}>
          <Icon name="checkmark-circle-outline" size={20} color="#7E1900" />
          <Text style={styles.pointText}>
            Junoon Capital Services Pvt. Ltd is an RBI Registered NBFC in SME
            lending. We deliver finance to small business owners to drive
            growth.
            {'\n\n'}CIN: U74899DL1996PTC080511
            {'\n'}RBI Regd. No.: B-14.01812
          </Text>
        </View>

        <View style={styles.pointRow}>
          <Icon name="checkmark-circle-outline" size={20} color="#7E1900" />
          <Text style={styles.pointText}>
            Our hassle-free loans are driven by technology revolutions and
            enhance the digital payments ecosystem.
          </Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.heading}>Board of Directors</Text>

        <Text style={styles.directorName}>Mr. Ashish Kumar Dwivedi</Text>
        <Text style={styles.pointText}>
          18+ years in IT industry. B.Sc.(IT), MCA, Post-Graduate in AI & Data
          Science (IIIT Delhi). Microsoft Certified (MCSA, MCSD). Worked on
          projects with Bank of America, DLF, Asian Paints, and Nestle. Expert
          in blending technical and marketing leadership.
        </Text>

        <Text style={styles.directorName}>Mr. Prabhat Dwivedi</Text>
        <Text style={styles.pointText}>
          11+ years experience in Business Operations, Strategy, and Training.
          Previously worked with NGOs, Satin Credit Care, and Axis Bank in Rural
          Retail Lending. MBA in Rural Development. Passionate about rural
          finance and development.
        </Text>
      </View>

      <View style={styles.card}>

        <Text style={[styles.heading, { marginBottom: 20,color:'#946060ff',alignSelf:'center' }]}>
          Legal & Policies
        </Text>

        <PolicyButton
          title="Privacy Policy"
          url="https://drive.google.com/file/d/1B3BlKlnJM1rIqYjjwNX-mMx2egCE1V11/view?usp=sharing"
        />
        <PolicyButton
          title="Refund Policy"
          url="https://drive.google.com/file/d/1UXTs-NfJZx8O0b3HELDvB2YzAIBRH7Wj/view?usp=sharing"
        />
        <PolicyButton
          title="Terms & Conditions"
          url="https://drive.google.com/file/d/1XCKWLd1KleCxozCsbVKt-IQqC1GVHQr-/view?usp=sharing"
        />
        <PolicyButton
          title="Account Aggregator Terms"
          url="https://drive.google.com/file/d/194fwEKh-YHWXypTCWimcH9z8IhG5K8w8/view?usp=sharing"
        />
        <PolicyButton
          title="Account Aggregator Policy"
          url="https://drive.google.com/file/d/18UKDKIpCgu_Mxg4jdiq1Wwvc1FXdmoch/view?usp=sharing"
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Junoon Capital Services Pvt Ltd. All Rights Reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0e5e6',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 200,
    marginBottom: 12,
    borderRadius: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'navy',
    marginVertical: 20,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#7E1900',
    marginVertical: 20,
    width: '100%',
    alignSelf: 'center',
    textTransform:'uppercase'
  },
  pointRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 16,
    width: '100%',
  },
  pointText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: '#333',
  },
  directorName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'navy',
    alignSelf: 'flex-start',
    marginTop: 16,
    marginBottom: 4,
  },

  footer: {
    marginTop: 20,
    width: '100%',
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    paddingVertical: 12,
    alignItems: 'center',
  },
  footerText: { fontSize: 12, color: '#999', textAlign: 'center' },
  card: {
    width: '95%',
    alignSelf: 'center',
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
});

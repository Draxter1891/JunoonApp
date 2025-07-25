import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomCarousel from '../components/CustomCarousel';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}:any) => {
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: '#f0e5e6ff' }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.heroContainer}>
        <CustomCarousel />

        <View style={styles.overlayTextContainer}>
          <Text style={styles.titleText}>
            BEST <Text style={{ color: '#aa0849d3' }}>INNOVATION IN</Text>
          </Text>
          <Text style={styles.titleText}>FINANCIAL INCLUSION</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.Bannerbutton}>
              <Text style={styles.BannerbuttonText}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.Bannerbutton, { backgroundColor: '#aa0849d3' }]}
            >
              <Text style={styles.BannerbuttonText}>Our Products</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Why Junoon Capital?</Text>
        <Text style={styles.text}>
          • Junoon Capital Services Pvt. Ltd is a Non‑Deposit taking
          RBI‑Registered NBFC in SME lending based on the underwriting of
          digital payments data. • We deliver finance to small business owners
          to drive business growth that matches their determinations. • Our
          hassle‑free loans are driven by technology revolutions and influence
          the digital payments ecosystem. Our financing helps clients grow and
          creates positive impact.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Vision</Text>
        <Text style={styles.text}>
          To be a substance in as long as economic support to the underserved in
          realizing larger monetary and community well being. Our effort is to
          figure a justifiable monetary organization that not only carries high
          standards of facility and worth to our clients nevertheless is also
          gratifying to all our stakeholders.”
        </Text>

        <Text style={[styles.sectionTitle, { marginTop: 16 }]}>Mission</Text>
        <Text style={styles.text}>
          To advance the financial health of underserved micro & small
          entrepreneurs, by supporting them in income‑generation activities.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Values</Text>
        {[
          'Empowerment',
          'Innovation',
          'Integrity',
          'Mentoring',
          'Community Service',
        ].map(v => (
          <Text key={v} style={styles.listItem}>
            • {v}
          </Text>
        ))}
      </View>

      <View style={styles.card}>
        <TouchableOpacity onPress={()=>navigation.navigate('Products')} style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-start'}}>
          <Icon name='account-balance' size={40} color={'#e64067'}/>
          <Text style={{fontSize:20,fontWeight:'bold',marginLeft:20,color:'#7E1900'}}>Go to Our Products</Text>
        </TouchableOpacity>
      </View>
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
    elevation: 5,
    shadowOpacity: 5,
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
  Bannerbutton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  BannerbuttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'navy',
  },
  container: {
    flexGrow: 1,
    backgroundColor: '#f0e5e6',
    padding: 20,
    alignItems: 'center',
  },
  card: {
    width: '95%',
    alignSelf:'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#7E1900',
    textAlign: 'center',
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#333',
    marginTop: 8,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: 'navy',
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  listItem: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    lineHeight: 20,
  },
  button: {
    backgroundColor: '#7E1900',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignSelf: 'stretch',
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
});

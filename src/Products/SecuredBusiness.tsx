import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SecuredBusiness = () => {
  const useCases = [
    'Fund business expansion or diversification',
    'Improve existing business setup',
    'Boost working capital reserves',
    'Purchase and stock inventory',
    'Buy new machinery, equipment, stock',
    'Capitalize on business opportunities',
  ];

  const benefits = [
    'Secures your business assets',
    'Faster turnaround and disbursal',
    'Loan amount up to ₹5 lakh',
    'Competitive interest rates',
    'Minimal documentation',
    'Convenient offline & online process',
    'Hassle-free experience',
  ];

  const renderList = (data: string[]) =>
    data.map((item, index) => (
      <View style={styles.row} key={index}>
        <Icon name="checkmark-circle-outline" size={20} color="#7E1900" />
        <Text style={styles.text}>{item}</Text>
      </View>
    ));

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <Text style={styles.title}>Secured Business Loan</Text>
        <Text style={styles.text}>
          Upgrade your business with a capital infusion from Junoon Capital. Our
          Secured Business Loan is designed for micro enterprises seeking fast,
          collateral-backed finance — available both offline and online.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Use Cases</Text>
        {renderList(useCases)}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Benefits & Features</Text>
        {renderList(benefits)}
      </View>

      <View style={[styles.card, styles.callCard]}>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => Linking.openURL('tel:+919311343335')}
        >
          <Icon name="call-outline" size={24} color="#fff" />
          <Text style={styles.callText}>Enquire Now</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Junoon Capital Services Pvt Ltd. All Rights Reserved.
        </Text>
      </View>
    </ScrollView>
  );
};

export default SecuredBusiness;



const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f0e5e6',
    flexGrow: 1,
    alignItems: 'center',
  },
  card: {
    width: '100%',
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#7E1900',
    textAlign: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'navy',
    marginBottom: 12,
  },
  text: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginLeft: 8,
    marginBottom: 8,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  callCard: {
    alignItems: 'center',
  },
  callButton: {
    flexDirection: 'row',
    backgroundColor: '#037ffc',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  callText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
    marginLeft: 8,
  },
  footer: {
    width: '100%',
    marginTop: 20,
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    paddingVertical: 12,
    alignItems: 'center',
  },
  footerText: {
    color: '#999',
    fontSize: 12,
    textAlign: 'center',
  },
});

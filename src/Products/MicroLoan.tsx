import React from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const MicroLoanScreen = () => {
  const features = [
    'Typically for semi‑urban/rural entrepreneurs—hawkers, petty traders, farmers, food processors.',
    'Loan amount: up to ₹75,000 with minimal documentation.',
    'Flexible tenures up to 36 months; EMI repayment convenience.',
    'Weekly, bi‑monthly & monthly EMI options.',
  ];

  const steps = [
    'Visit a branch—our representatives will guide you through the process.',
    'Or simply call us at 📞 +91‑9311343335.',
  ];

  const details = [
    {
      title: 'JLG Model',
      desc: 'Minimum 5 women members per Joint Liability Group.',
    },
    {
      title: 'Fees & Interest',
      desc: 'Processing fee 10% + GST; Interest up to 34% p.a.; Delay penalty ₹50/day up to ₹1,500.',
    },
    {
      title: 'Insurance',
      desc: 'Loan insurance available.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.card}>
        <Text style={styles.title}>Microfinance Loan</Text>
        {features.map((item, index) => (
          <View key={index} style={styles.row}>
            <Icon name="checkmark-circle-outline" size={20} color="#7E1900" />
            <Text style={styles.text}>{item}</Text>
          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Empowering Women Entrepreneurs</Text>
        <Text style={styles.text}>
          Micro loans help women access seeds, fertilizers & tools to boost productivity and income. They’re impactful for farming & urban micro-businesses.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>How To Apply</Text>
        {steps.map((step, index) => (
          <Text key={index} style={styles.text}>• {step}</Text>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Loan Details</Text>
        {details.map((item, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={styles.detailTitle}>{item.title}:</Text>
            <Text style={styles.text}>{item.desc}</Text>
          </View>
        ))}
      </View>

      <View style={[styles.card, { alignItems: 'center' }]}>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => Linking.openURL('tel:+919311343335')}
        >
          <Icon name="call-outline" size={24} color="#fff" />
          <Text style={styles.callText}>Request a Call Back</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Junoon Capital Services Pvt Ltd. All Rights Reserved.</Text>
      </View>
    </ScrollView>
  );
};

export default MicroLoanScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f0e5e6',
    padding: 20,
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
    marginBottom: 12,
    textAlign: 'center',
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
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  detailTitle: {
    fontWeight: '600',
    color: '#7E1900',
    marginBottom: 4,
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
    borderTopWidth: 0.5,
    borderColor: '#ddd',
    paddingVertical: 12,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    marginTop: 20,
  },
});

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

const benefits = [
  'No collateral required—your business assets stay protected',
  'Faster turnaround times—ideal for urgent funding',
  'Loan amounts up to ₹5 lakh',
  'Competitive interest rates',
  'Minimal documentation',
  'Flexible repayment tenure up to 36 months',
  'Quick, hassle-free disbursal',
  'Simple application both offline & online',
];

const useCases = [
  'Fund business expansion/diversification',
  'Improve operations or setup',
  'Boost working capital',
  'Purchase inventory, machinery, or equipment',
  'Seize business opportunities swiftly',
];

const applySteps = [
  'Step 1: Enquire via app/website “Enquiry Now” button',
  'Step 2: Select category & submit basic details',
  'Step 3: Customer-care connects you to Credit Team',
  'Step 4: Credit Team reviews & processes your application',
  'Step 5: Get approval and funds disbursed',
];

export default function UnsecuredBusiness() {
  const renderList = (items: string[]) =>
    items.map((item, index) => (
      <View style={styles.row} key={index}>
        <Icon name="checkmark-circle-outline" size={20} color="#7E1900" />
        <Text style={styles.text}>{item}</Text>
      </View>
    ));

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Card title="Unsecured Business Loan">
        <Text style={styles.text}>
          Upgrade your business with a fast, unsecured business loan—no
          collateral needed. Available both online & offline for MSME
          entrepreneurs. Get funding up to ₹5 lakh quickly with minimal paperwork.
        </Text>
      </Card>

      <Card title="Use Cases">{renderList(useCases)}</Card>

      <Card title="Benefits & Features">{renderList(benefits)}</Card>

      <Card title="How To Apply">
        {applySteps.map((step, index) => (
          <Text style={styles.text} key={index}>
            • {step}
          </Text>
        ))}
      </Card>

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
}

const Card = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => (
  <View style={styles.card}>
    {title && <Text style={styles.sectionTitle}>{title}</Text>}
    {children}
  </View>
);

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
  callCard: {
    alignItems: 'center',
  },
  callButton: {
    flexDirection: 'row',
    backgroundColor: '#7E1900',
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

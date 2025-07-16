import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { imageData } from '../constants/imageData';
import Icon from 'react-native-vector-icons/Ionicons';

const FeatureItem = ({ title }: { title: string }) => (
  <View style={styles.featuresCard}>
    <Icon name="checkmark-circle-outline" size={20} color="#7E1900" />
    <Text style={{ marginLeft: 10 }}>{title}</Text>
  </View>
);

const DigitalLoan = () => {
  const loanHighlights = [
    'Collateral-free and hassle-free processing',
    'Fast approval & disbursal',
    'Flexible tenures & repayment options',
  ];

  const topFeatures = [
    'Collateral-free',
    'Multi-purpose usage',
    'Competitive interest rate & charges',
    'Quick approval',
    'Instant disbursal',
    'No hidden charges',
    'No penalty for prepayment',
    'Flexible repayment plans',
    'Simple 5-step online application',
    'Easy-to-use EMI calculator',
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Digital Loan</Text>
        <Image source={{ uri: imageData[3].imgUri }} style={styles.image} />
        <Text style={styles.text}>
          In today’s modern financial market, borrowers expect convenience and
          speed. At Junoon Capital Services Pvt. Ltd. we understand this need
          and offer a Digital Loan that flawlessly caters to our customers'
          expectations.
          {'\n\n'}
          This loan is packed with beneficial features, digital provisions, and
          perks that save you time and money while reducing your efforts.
        </Text>

        <Image source={{ uri: imageData[4].imgUri }} style={styles.image} />
        <Text style={styles.text}>
          In just a few clicks, you can apply for a high-value, multi-purpose
          loan. Approvals are fast and digital disbursal is immediate. As an
          NBFC, we optimize the journey from loan planning to EMI calculation,
          application, disbursal, and repayment.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>
          Collateral-Free | Quick Approval | Flexible Tenure
        </Text>
        <Text style={styles.text}>
          The features & benefits of our Personal Loan make it a great choice
          for those seeking instant loans online with quick processing and
          minimal documentation.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Top Features</Text>
        <Image source={{ uri: imageData[4].imgUri }} style={styles.image} />
        {topFeatures.map((item, idx) => (
          <FeatureItem key={idx} title={item} />
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Get Instant Personal Loan</Text>
        <FeatureItem title="Amount: Up to ₹50,000 for salaried employees" />
        {loanHighlights.map((item, idx) => (
          <FeatureItem key={idx} title={item} />
        ))}
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => Linking.openURL('https://www.earlywages.in/')}
        >
          <Image
            source={{ uri: imageData[7].imgUri }}
            style={styles.buttonLogo}
          />
          <Text style={styles.buttonText}>Apply here at EarlyWages</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Advance Salary Loan</Text>
        <FeatureItem title="InstaPaise offers immediate loans of up to ₹1,00,000/- for salaried professionals with zero prepayment charges." />
        <TouchableOpacity
          style={styles.applyButton}
          onPress={() => Linking.openURL('https://instapaise.com/')}
        >
          <Image
            source={{ uri: imageData[6].imgUri }}
            style={[styles.buttonLogo, { width: 80 }]}
          />
          <Text style={styles.buttonText}>Apply here at InstaPaise</Text>
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

export default DigitalLoan;

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
    marginBottom: 12,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 12,
  },
  applyButton: {
    backgroundColor: '#037ffc',
    padding: 10,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  buttonLogo: {
    height: 50,
    width: 50,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    marginTop: 20,
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
  },
  featuresCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
    width: '100%',
  },
});

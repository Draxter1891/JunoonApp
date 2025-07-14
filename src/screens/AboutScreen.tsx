import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  ScrollView,
} from 'react-native';

const openLink = (url: string) => {
  Linking.openURL(url);
};

const  AboutScreen = ()=> {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        <Text style={styles.heading}>Legal & Policies</Text>

        <PolicyButton title="Privacy Policy (PDF)" url="https://drive.google.com/file/d/1B3BlKlnJM1rIqYjjwNX-mMx2egCE1V11/view?usp=sharing" />
        <PolicyButton title="Refund Policy (PDF)" url="https://drive.google.com/file/d/1UXTs-NfJZx8O0b3HELDvB2YzAIBRH7Wj/view?usp=sharing" />
        <PolicyButton title="Terms & Conditions (PDF)" url="https://drive.google.com/file/d/1XCKWLd1KleCxozCsbVKt-IQqC1GVHQr-/view?usp=sharing" />
        <PolicyButton title="Account Aggregator Terms (PDF)" url="https://drive.google.com/file/d/194fwEKh-YHWXypTCWimcH9z8IhG5K8w8/view?usp=sharing" />
        <PolicyButton title="Account Aggregator Policy (PDF)" url="https://drive.google.com/file/d/18UKDKIpCgu_Mxg4jdiq1Wwvc1FXdmoch/view?usp=sharing" />
      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2025 Junoon Capital Services Pvt Ltd. {'\n'}
          All Rights Reserved.
        </Text>
      </View>
    </View>
  );
}

const PolicyButton = ({ title, url }: { title: string; url: string }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => openLink(url)}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE4EC',
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#7E1900', 
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    marginBottom: 16,
    backgroundColor: '#7E1900',
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
  footer: {
    paddingVertical: 16,
    alignItems: 'center',
    borderTopWidth: 0.5,
    borderColor: '#E0E0E0',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});

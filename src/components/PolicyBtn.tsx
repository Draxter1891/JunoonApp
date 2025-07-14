import { Linking, StyleSheet, Text, TouchableOpacity } from 'react-native';

const openLink = (url: string) => {
  Linking.openURL(url);
};

const PolicyButton = ({ title, url }: { title: string; url: string }) => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => openLink(url)}
    activeOpacity={0.7}
  >
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

export default PolicyButton;

const styles = StyleSheet.create({
  button: {
    width: '90%',
    marginBottom: 16,
    backgroundColor: '#c7a5a6',
    paddingVertical: 14,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  buttonText: {
    color: '#7E1900',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
    letterSpacing: 0.5,
  },
});

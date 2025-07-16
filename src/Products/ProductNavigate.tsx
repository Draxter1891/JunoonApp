import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DigitalLoan from './DigitalLoan';
import MicroLoan from './MicroLoan';
import UnsecuredBusiness from './UnsecuredBusiness';
import SecuredBusiness from './SecuredBusiness';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

const Index = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heroTitle}>Our products</Text>
      <View style={styles.row}>
        <Card icon="payments" title="Digital Loan" link="DigitalL" navigation={navigation}/>
        <Card icon="account-balance-wallet" title="Microfinance Loan" link="MicroL" navigation={navigation}/>
      </View>

      
      <View style={styles.row}>
        <Card icon="business-center" title="Unsecured Business Loan" 
       link='UnsecuredBL' navigation={navigation}/>
        <Card icon="security" title="Secured Business Loan" link='SecuredBL' navigation={navigation}/>
      </View>
    </View>
  );
};

const Card = ({ icon, title,link,navigation }: { icon: string; title: string; link:string; navigation:any }) => (
  <TouchableOpacity style={styles.card} activeOpacity={0.7} onPress={()=>navigation.navigate(link)}>
    <Icon name={icon} size={50} color="#e64067" />
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
);

const ProductNavigate = () => {
  return (
    <Stack.Navigator
      initialRouteName="Index"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Index" component={Index} />
      <Stack.Screen name="DigitalL" component={DigitalLoan} />
      <Stack.Screen name="MicroL" component={MicroLoan} />
      <Stack.Screen name="UnsecuredBL" component={UnsecuredBusiness} />
      <Stack.Screen name="SecuredBL" component={SecuredBusiness} />
    </Stack.Navigator>
  );
};

export default ProductNavigate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginVertical: 20,
  },
  card: {
    width: 140,
    height: 140,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 5,
  },
  heroTitle: {
    fontSize: 25,
    fontWeight: '700',
    color: '#946060ff',
    textAlign: 'center',
    textTransform:'uppercase'
  },
  title: {
    marginTop: 12,
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
});

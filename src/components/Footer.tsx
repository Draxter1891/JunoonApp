import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View
      style={{
        backgroundColor: '#fce4ec',
        justifyContent: 'space-evenly',
        flexDirection: 'column',
        alignItems:'center'
      }}
    >
      <View style={{flexDirection:'row'}}>
        <Text>Privacy Policy |</Text>
        <Text>Refund Policy |</Text>
        <Text>Terms & Conditions |</Text>
        <Text>Account Aggregator Term|</Text>
        <Text>Account Aggregator Policy</Text>
      </View>

      <Text>
        © Copyright Junoon Capital Services Pvt Ltd. All Rights Reserved.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});

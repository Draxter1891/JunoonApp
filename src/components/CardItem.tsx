import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { width } from '../constants/Sizes';

type Props = {
  index: number;
};

const CardItem = ({ index }: Props) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>Item {index + 1}</Text>
    </View>
  );
};

export default CardItem;
const styles = StyleSheet.create({
  item: {
    width: width,
    height:'100%',
    backgroundColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

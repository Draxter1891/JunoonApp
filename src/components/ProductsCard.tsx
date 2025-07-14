import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  heading: string;
  content: string;
};

const ProductsCard: FC<Props> = ({ name, heading, content }) => {
  return (
    <View style={styles.container}>
      <Icon name={name} size={100} />
      <View>
        <Text style={styles.heading}>{heading}</Text>
        <Text style={styles.content}>{content}</Text>
      </View>
    </View>
  );
};

export default ProductsCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  heading: {
    fontWeight: 'bold',
  },
  content: {
    color: '#606263',
  },
});

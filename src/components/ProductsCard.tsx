import {
  Linking,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { FC } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  name: string;
  heading: string;
  content: string;
  link: string;
};

const ProductsCard: FC<Props> = ({ name, heading, content, link }) => {
  const handlePress = (link: string) => {
    Linking.openURL(link);
  };
  return (
    <TouchableHighlight onPress={() => handlePress(link)}>
      <View style={styles.container}>
        <Icon name={name} size={100} />
        <View>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={styles.content}>{content}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ProductsCard;

const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center' },
  heading: {
    fontWeight: 'bold',
  },
  content: {
    color: '#606263',
  },
});

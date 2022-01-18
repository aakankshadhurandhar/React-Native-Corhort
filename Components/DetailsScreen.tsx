import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
export default DetailsScreen;

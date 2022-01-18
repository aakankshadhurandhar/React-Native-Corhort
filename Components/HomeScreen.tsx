import {Button, StyleSheet, View} from 'react-native';
import React from 'react';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Details Page"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default HomeScreen;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

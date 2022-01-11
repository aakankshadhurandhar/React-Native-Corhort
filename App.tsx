/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
const CHARACTER_LIMIT = 280;

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [Char, setCharRemaining] = React.useState(CHARACTER_LIMIT);
  const handleChange = (Text: string) => {
    let charlength = Text.length;
    setCharRemaining(CHARACTER_LIMIT - charlength);
  };
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const getInputStyles = () => {
    if (Char < 10 && Char > -1) {
      return {borderColor: '#eedb0c', backgroundColor: '#f8f4cd'};
    } else if (Char < 0) {
      return {borderColor: '#dd1010', backgroundColor: '#f7cccc'};
    }
    return {};
  };

  const getTextStyles = () => {
    if (Char < 10 && Char > -1) {
      return {color: '#eedb0c'};
    } else if (Char < 0) {
      return {color: '#dd1010'};
    }
    return {};
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TextInput
            style={{...styles.input, ...getInputStyles()}}
            onChangeText={handleChange}
            multiline={true}
          />
          <Text style={{...styles.charText, ...getTextStyles()}}>
            {Char} characters remaining
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    fontSize: 20,

    margin: 12,
  },
  charText: {
    fontSize: 20,
    marginTop: 10,
  },
});

export default App;

import React from 'react';
import {View, Text, StyleSheet, useColorScheme} from 'react-native';

function AppPro() {
  const isDrakMode = useColorScheme() === 'dark';
  return (
    <view style={styles.container}>
      <Text style={isDrakMode ? styles.whiteText : styles.darkText}>
        Hello World!
      </Text>
    </view>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: '#ffffff',
  },
  darkText: {
    color: '#000000',
  },
});

export default AppPro;

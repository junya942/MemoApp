import React from 'react';
import {
  View, StyleSheet, TextInput,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CirleButon';
import KeyboardSafeView from '../components/KeyboadSafeView';

export default function MemoEditScreen() {
  return (
    <KeyboardSafeView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.itConpuntainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itConpuntainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },
});

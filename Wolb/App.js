import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const Cat = (props) => {
  const [isHappy, setIsHappy] = useState(true);

  return (
    <View>
        <Text>Hello {props.name} you are {isHappy ? "happy" : "Sad"}</Text>
        <Button onPress={() => {
            setIsHappy(!isHappy);
        }}
        title={isHappy ? "be Sad" : "be Happy"}
        />
    </View>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Cat name="you" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

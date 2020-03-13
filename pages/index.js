import * as React from 'react'
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Button, Text, Image } from 'react-native-elements';
import normalize from 'react-native-normalize';

export default function App(props) {
  return (
    <View style={styles.container}>
      <View style={{
        justifyContent: 'center',
        flex: 1
      }}>
        <Image style={{
          width:1000,
          height:500,
        }} 
        PlaceholderContent={<ActivityIndicator />}
        source={{ uri: 'https://images2.alphacoders.com/809/809390.png'}} />
      </View>
      <Text accessibilityRole="header" style={styles.text}>
        React Native for Web & Next.js & React Native Elements
      </Text>

      <Text style={styles.link} accessibilityRole="link" href={`/alternate`}>
        A universal link
      </Text>

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Subheader
        </Text>
      </View>
      <Button title="click me" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
})

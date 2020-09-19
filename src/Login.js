import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";

export default function Login() {
  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.screen}>
      {loading ? (
        <View style={styles.container}>
          <Image
            style={styles.loader}
            source={{
              uri:
                "https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif",
            }}
          />
          <Text>Coming Soon....</Text>
        </View>
      ) : null}
      <View>
        <Text>Email:</Text>
        <TextInput placeholder="Enter your email id" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#fff",
  },
  loader: {
    height: 500,
    width: 500,
  },
  screen:{
    padding:10
  }
});

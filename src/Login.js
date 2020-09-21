import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import {
  TextInput,
  TouchableNativeFeedback,
} from "react-native-gesture-handler";
import * as Animatable from "react-native-animatable";

export default function Login() {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.screen}>
      {loading ? (
        <Animatable.View
          animation="pulse"
          duration={4}
          style={styles.container}
        >
          <Image
            style={styles.loader}
            source={{
              uri:
                "https://i.pinimg.com/originals/f9/41/ae/f941ae9d16fd7d2957eea6e5b1100d1e.gif",
            }}
          />
          <Text>Coming Soon....</Text>
        </Animatable.View>
      ) : null}
      <View style={styles.form}>
        <Image
          source={{
            uri:
              "https://4.bp.blogspot.com/-rtNRVM3aIvI/XJX_U07Z-II/AAAAAAAAJXY/YpdOo490FTgdKOxM4qDG-2-EzcNFAWkKACK4BGAYYCw/s1600/logo%2Bfirebase%2Bicon.png",
          }}
          style={{ height: 150, width: 150, marginBottom: 20 }}
          resizeMethod="resize"
          resizeMode="contain"
        />
        <View style={styles.row}>
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} keyboardType="email-address" />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Password:</Text>
          <TextInput secureTextEntry style={styles.input} />
        </View>
        <View style={{ marginVertical: 10, marginTop: 50 }}>
          <TouchableNativeFeedback>
            <View style={styles.btn}>
              <Text
                style={{ color: "#512DF8", fontSize: 18, letterSpacing: 6 }}
              >
                LOGIN
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
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
  screen: {
    padding: 10,
  },
  form: {
    backgroundColor: "#512df8",
    padding: 20,
    marginTop: 25,
    elevation: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: "100%",
    marginVertical: 5,
  },
  label: {
    fontSize: 16,
    color: "#fff",
    letterSpacing: 2,
    marginRight: 5,
  },
  input: {
    fontSize: 20,
    color: "yellow",
    letterSpacing: 2,
    padding: 5,
    borderBottomColor: "gold",
    borderBottomWidth: 1,
    width: "60%",
  },
  btn: {
    backgroundColor: "#FFF",
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderRadius: 4,
  },
});

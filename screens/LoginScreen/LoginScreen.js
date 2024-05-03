import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import styles from "./LoginScreenStyles";
import LottieView from "lottie-react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default function LoginScreen() {
  const [nameUser, setNameUser] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const verifyFormulary = () => {
    if (nameUser.trim() === "") {
      Alert.alert("Need User Name", "Add a name.");
    } else if (password.trim() === "") {
      Alert.alert("Need Password", "Add a password.");
    } else {
      setNameUser("");
      setPassword("");
      navigation.navigate("HomeScreen");
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.animationContainer}>
        <Text style={styles.headerText}>SnapNote</Text>
        <LottieView
          style={styles.lottieArchive}
          autoPlay
          source={require("./LoginScreenImages/Wallpaper.json")}
        />
      </View>

      <View style={styles.formularyContainer}>
        <Text style={styles.info}>Account Login</Text>
        <Text style={styles.textForm}>User Name:</Text>

        <View style={styles.userNameContainer}>
          <AntDesign name="user" size={24} color="gray" />
          <TextInput
            style={styles.inputEmail}
            value={nameUser}
            onChangeText={setNameUser}
            inputMode="email"
            placeholder="Type something..."
          />
        </View>

        <Text style={styles.textForm}>Password:</Text>

        <View style={styles.passwordContainer}>
          <Feather name="lock" size={24} color="gray" />
          <TextInput
            style={styles.inputPassword}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            inputMode="text"
            placeholder="Type something..."
          />
        </View>

        <TouchableOpacity style={styles.bottomLogin} onPress={verifyFormulary}>
          <Text style={styles.bottomText}>Login</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

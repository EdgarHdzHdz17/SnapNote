import { Alert } from "react-native";

const Formulary = (nameUser, password, setNameUser, setPassword, navigateToAnotherScreen) => {
  if (nameUser.trim() === "") {
    Alert.alert("Missing email");
  } else if (password.trim() === "") {
    Alert.alert("Missing Password");
  } else {
    setNameUser("");
    setPassword("");
    if (navigateToAnotherScreen) {
      navigateToAnotherScreen();
    }
    console.log("Data User... name:", nameUser, ", password:", password);
  }
};

export { Formulary };

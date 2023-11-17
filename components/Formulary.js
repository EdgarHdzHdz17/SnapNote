import { Alert } from "react-native";

const Formulary = (name, password, setName, setPassword, navigateToAnotherScreen) => {

  if (name.trim() === "") {
    Alert.alert("Missing email");
  } else if (password.trim() === "") {
    Alert.alert("Missing Password");
  } else {
    setName("");
    setPassword("");
    if (navigateToAnotherScreen) {
      navigateToAnotherScreen();
    }
    console.log("Data User... name:", name, ", password:", password);
  }
};

export { Formulary };

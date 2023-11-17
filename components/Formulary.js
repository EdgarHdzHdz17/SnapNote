import { Alert } from "react-native";

const Formulary = (email, password, setEmail, setPassword, navigateToAnotherScreen) => {
  if (email.trim() === "") {
    Alert.alert("Missing email");
  } else if (password.trim() === "") {
    Alert.alert("Missing Password");
  } else {
    setEmail("");
    setPassword("");

    if (navigateToAnotherScreen) {
      navigateToAnotherScreen();
    }
    
    console.log("Datas... email:", email, ", contraseña:", password);
  }
};

export { Formulary };

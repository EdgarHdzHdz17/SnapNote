import { Alert } from "react-native";

const Formulary = (nameUser, password, setNameUser, setPassword, navigateToAnotherScreen) => {
  if (nameUser.trim() === "") {
    Alert.alert('Need User Name',"Add a name.");
  } else if (password.trim() === "") {
    Alert.alert('Need Password',"Add a password.");
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

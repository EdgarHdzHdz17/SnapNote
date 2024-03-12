import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BC7AF9",
    alignItems: "center",
  },

  //animationContainer
  animationContainer: {
    width: "99%",
    height: "40%",
    alignItems: "center",
  },

  headerText: {
    color: "white",
    fontSize: 50,
    marginTop: 30,
    alignSelf: "center",
  },

  lottieArchive: {
    width: 300,
    height: 200,
  },

  info: {
    color: "white",
    fontSize: 25,
  },

  //formularyContainer
  formularyContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    marginTop: 5,
  },

  textForm: {
    color: "white",
    fontSize: 20,
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 5,
  },

  userNameContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    height: "15%",
    marginTop: 10,
  },

  passwordContainer: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    height: "15%",
    marginTop: 10,
  },

  inputEmail: {
    height: "90%",
    width: "80%",
    padding: 10,
  },

  inputPassword: {
    height: "90%",
    width: "80%",
    padding: 10,
  },

  bottomLogin: {
    backgroundColor: "#9400d3",
    width: "60%",
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },

  bottomText: {
    color: "white",
    textAlign: "center",
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BC7AF9",
    alignItems: "center",
  },

  //headerContainer
  headerContainer:{
    height:'20%',
    width:'95%',
    flexDirection:'row',
    alignItems:'center'
  },

  headerText:{
    height:'100%',
    width:'80%',
    justifyContent:'center'
  },

  text: {
    color: "white",
    fontSize: 50,
  },

  iconUser:{
    flex:1,
    height:'100%',
    marginRight:2,
    justifyContent:'center',
    alignItems:'center'
  },

  //noteContainer
  noteContainer:{
    flex: 0.95,
    width:'95%',
    alignItems:'center',
  },

  inputTextName: {
    height: 50,
    width: "95%",
    borderColor: "gray",
    backgroundColor: "#ffe4b5",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize:20,
  },

  inputTextNote: {
    height: "70%",
    width: "95%",
    borderColor: "gray",
    backgroundColor: "#ffe4b5",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize:20,
    marginTop:5,
    textAlign: 'left',
  },

  //buttonContainer
  buttonContainer: {
    flexDirection: 'row',
    width:'90%',
    height:60,
    alignItems:'center',
    justifyContent:'center',
    marginTop:10
  },

  buttonSaveNote:{
    backgroundColor: '#9400d3',
    width:'50%',
    height:'90%',
    padding: 10, 
    borderRadius: 6, 
    justifyContent:'center',
    alignItems:'center',
  },

  buttonClearNote:{
    backgroundColor: '#9400d3',
    width:'50%',
    height:'90%',
    padding: 10, 
    borderRadius: 6,
    justifyContent:'center',
    alignItems:'center',
    marginLeft:'5%'
  },

  textButton:{
    color:'white'
  }
});

export default styles;

import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      backgroundColor: "#dda0dd",
      padding: 20,
      borderRadius: 10,
      alignItems: "center",
      justifyContent:'center'
    },

    headerText:{
      color:'white',
      fontSize:30,
    },
    
    noteWallpaper:{
      marginTop:10,
      width:200,
      height:200,
      opacity:0.3,
      position:'relative',
      marginLeft:30
    },

    iconClose: {
      marginTop: 10,
    },
  });


export default styles;
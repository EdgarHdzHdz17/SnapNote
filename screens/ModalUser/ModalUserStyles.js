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
      color:'#BC7AF9',
      fontSize:30,
    },
    
    noteListContainer:{
      justifyContent:"center",
      alignContent:'center'
    },

    noteListText:{
      marginTop:5,
      fontSize:25,
      color:'white'
    },

    iconClose: {
      marginTop: 10,
    },

    listNotes:{
      backgroundColor:'red'
    }

  });


export default styles;
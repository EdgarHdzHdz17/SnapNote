import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9370db',
    alignItems:'center',
  },

  //headerContainer
  headerContainer: {
    height:'15%',
    width:'99%',
  },

  headerText: {
    color: 'white',
    fontSize: 50,
    marginTop: 30,
    alignSelf: 'center',
  },

  //animationContainer
  animationContainer:{
    width:'99%',
    height:'30%',
    justifyContent:'center',
    alignItems: 'center',
  },

  info: {
    color: 'white',
    fontSize: 25,
  },

  //formularyContainer
  formularyContainer:{
    width:'100%',
    flex:1,
    alignItems:'center',
  },

  textForm:{
    color:'white',
    fontSize:20,
    textAlign:'left',
    alignSelf: 'flex-start',
    marginLeft:20,
    marginTop:5,
  },

  inputEmail:{
    height: '15%',
    width:'80%',
    borderColor: 'gray', 
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10, 
    padding: 10, 
    marginTop:10,
  },

  inputPassword:{
    height: '15%',
    width:'80%', 
    borderColor: 'gray', 
    backgroundColor:'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10, 
    padding: 10, 
    marginTop:10,
  },

  bottomLogin:{
    backgroundColor: '#9400d3',
    width:'60%', 
    padding: 10, 
    borderRadius: 6, 
    marginTop:5,
  },

  bottomText:{
    color: 'white', 
    textAlign: 'center',
  },
  
  

});

export default styles;

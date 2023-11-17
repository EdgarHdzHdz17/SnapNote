import {Alert} from 'react-native';

const SaveNote = (textName, setTextName,textNote,setTextNote) => {
    if (textName.trim() === "") {
      Alert.alert("Missing Name Note");
    } else if (textNote.trim() === "") {
      Alert.alert("Missing Text in Note");
    } else {
      setTextName("");
      setTextNote("");
      console.log("Save Note... \n name:",textName,"\n text:",textNote)
    }
  };
  
  export { SaveNote };
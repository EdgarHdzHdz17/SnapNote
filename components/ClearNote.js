import {Alert} from 'react-native';

const ClearNote = (textName, setTextName,textNote,setTextNote) => {
    if (textName.trim() === "") {
      Alert.alert("Missing Name Note");
    } else if (textNote.trim() === "") {
      Alert.alert("Missing Text in Note");
    } else {
      setTextName("");
      setTextNote("");
      Alert.alert("The note was cleaned.");
      console.log("Clear Note...")
    }
  };
  
  export { ClearNote };
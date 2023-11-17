import {Alert} from 'react-native';

const SaveNote = (textName, setTextName,textNote,setTextNote,notes,setNotes) => {

    if (textName.trim() === "") {
      Alert.alert("Missing Name Note");
    } else if (textNote.trim() === "") {
      Alert.alert("Missing Text in Note");
    } else {
      setTextName("");
      setTextNote("");
      const newNote = {name: textName, text: textNote};
      console.log("New Note: ",newNote);
      setNotes((prevNotes) => [...prevNotes, newNote]);
    }
  };
  
  export { SaveNote };
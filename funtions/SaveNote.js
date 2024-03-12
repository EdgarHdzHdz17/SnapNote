import {Alert} from 'react-native';

const SaveNote = (textName, setTextName,textNote,setTextNote,notes,setNotes) => {

    if (textName.trim() === "") {
      Alert.alert('Need Name Note',"Add a name.");
    } else if (textNote.trim() === "") {
      Alert.alert('Need Text Note',"Add a text.");
    } else {
      setTextName("");
      setTextNote("");
      const newNote = {name: textName, text: textNote};
      console.log("New Note: ",newNote);
      setNotes((prevNotes) => [...prevNotes, newNote]);
    }
  };
  
  export { SaveNote };
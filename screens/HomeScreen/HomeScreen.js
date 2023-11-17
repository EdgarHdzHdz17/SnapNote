import { Text, View, TouchableOpacity, TextInput, Modal,Image,} from "react-native";
import styles from "../HomeScreen/HomeScreenStyles";
import React, { useState } from "react";
import MyModal from "../ModalUser/ModalUserScreen";
import { SaveNote } from '../../components/SaveNote';
import { ClearNote } from "../../components/ClearNote";
import { LoadNote } from "../../components/LoadNote";

export default function HomeScreen() {
  const [textName, setTextName] = useState("");
  const [textNote, setTextNote] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const saveNote = () => {
    SaveNote(textName, setTextName, textNote, setTextNote, notes, setNotes);
  };

  const clearNote = () => {
    ClearNote(textName, setTextName, textNote, setTextNote);
  };

  const handleNameSelected = (name) => {
    const selectedNote = notes.find((note) => note.name === name);
    if (selectedNote) {
      setSelectedNote(selectedNote);
      setTextName(selectedNote.name);
      setTextNote(selectedNote.text);
    }
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerText}>
          <Text style={styles.text}>Welcome: </Text>
        </View>

        <View style={styles.iconUser}>
          <TouchableOpacity onPress={openModal}>
            <Image style={styles.imageIcon} source={require('../HomeScreen/HomeScreenImages/SnapNoteIcon.png')} />
          </TouchableOpacity>
          
        </View>
        
      </View>

      <View style={styles.noteContainer}>
        <TextInput
          style={styles.inputTextName}
          placeholder="Name Note"
          value={textName}
          onChangeText={setTextName}
        />
        <TextInput
          style={styles.inputTextNote}
          placeholder="Text Note"
          value={textNote}
          onChangeText={setTextNote}
          multiline
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.buttonSaveNote} onPress={saveNote}>
            <Text style={styles.textButton}>Save Note</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonClearNote} onPress={clearNote}>
            <Text style={styles.textButton}>Clear Note</Text>
          </TouchableOpacity>
        </View>
      </View>

      <MyModal modalVisible={modalVisible} closeModal={closeModal} notes={notes} onNameSelected={handleNameSelected}/>

    </View>
  );
}

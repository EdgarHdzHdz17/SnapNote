import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert,
} from "react-native";
import styles from "../HomeScreen/HomeScreenStyles";
import React, { useState } from "react";
import MyModal from "../ModalUser/ModalUserScreen";

export default function HomeScreen() {
  const [textName, setTextName] = useState("");
  const [textNote, setTextNote] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const saveNote = () => {
    if (textName.trim() === "") {
      Alert.alert("Need Name Note", "Add a name.");
    } else if (textNote.trim() === "") {
      Alert.alert("Need Text Note", "Add a text.");
    } else {
      setTextName("");
      setTextNote("");
      const newNote = { name: textName, text: textNote };
      console.log("New Note: ", newNote);
      setNotes((prevNotes) => [...prevNotes, newNote]);
    }
  };

  const clearNote = () => {
    setTextName("");
    setTextNote("");
    Alert.alert("The note was cleaned.");
    console.log("Clear Note...");
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
          <Text style={styles.text}>Welcome</Text>
        </View>

        <View style={styles.iconUser}>
          <TouchableOpacity onPress={openModal}>
            <Image
              style={styles.imageIcon}
              source={require("../HomeScreen/HomeScreenImages/SnapNoteIcon.png")}
            />
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

      <MyModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        notes={notes}
        onNameSelected={handleNameSelected}
      />
    </View>
  );
}

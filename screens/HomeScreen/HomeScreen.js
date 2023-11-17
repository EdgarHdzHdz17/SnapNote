import { Text, View, TouchableOpacity, TextInput, Modal} from "react-native";
import styles from "../HomeScreen/HomeScreenStyles";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FontAwesome } from '@expo/vector-icons'; 
import MyModal from "../ModalUser/ModalUserScreen";
import { SaveNote } from '../../components/SaveNote';
import { ClearNote } from "../../components/ClearNote";

export default function HomeScreen() {
  const [textName, setTextName] = useState("");
  const [textNote, setTextNote] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const saveNote = () => {
    SaveNote(textName, setTextName, textNote, setTextNote);
  };

  const clearNote = () => {
    ClearNote(textName, setTextName, textNote, setTextNote);
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
          <FontAwesome name="user-circle" size={55} color="black" onPress={openModal} />
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

      <MyModal modalVisible={modalVisible} closeModal={closeModal} />

    </View>
  );
}

import React from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import styles from "./ModalUserStyles";
import { AntDesign } from "@expo/vector-icons";

const MyModal = ({ modalVisible, closeModal,notes,onNameSelected }) => {

  const handleNameSelection = (name) => {
    onNameSelected(name);
    closeModal();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={closeModal}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.headerText}>MY NOTES:</Text>
          <View style={styles.noteListContainer}>
            {notes.map((note, index) => (
               <TouchableOpacity
               key={index}
               style={styles.noteItem}
               onPress={() => handleNameSelection(note.name)}
             >
               <Text style={styles.noteListText}>{note.name}</Text>
             </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity onPress={closeModal}>
            <AntDesign
              style={styles.iconClose}
              name="closecircle"
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MyModal;

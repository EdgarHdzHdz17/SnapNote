// MyModal.js
import React from "react";
import { View, Text, Image, TouchableOpacity, Modal } from "react-native";
import styles from "./ModalUserStyles";
import { AntDesign } from '@expo/vector-icons';

const MyModal = ({ modalVisible, closeModal }) => {
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
          <Image
            style={styles.noteWallpaper}
            source={require("./ModalUserScreenImages/noteWallpaper.png")}
          />
          <TouchableOpacity onPress={closeModal}>
            <AntDesign style={styles.iconClose} name="closecircle" size={24} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default MyModal;

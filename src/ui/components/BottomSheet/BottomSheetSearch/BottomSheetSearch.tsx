import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import Modal from "react-native-modal";
const { width, height } = Dimensions.get("window");

const BottomSheetSearch = ({ isVisible, onClose, content }) => {
  const [modalHeight, setModalHeight] = useState(Dimensions.get("window").height * 0.9);

  useEffect(() => {
    const updateModalHeight = () => {
      const screenHeight = Dimensions.get("window").height;
      setModalHeight(screenHeight * 0.9);
    };

    const dimensionsHandler = Dimensions.addEventListener("change", updateModalHeight);

    return () => dimensionsHandler.remove();
  }, []);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      style={[styles.modal, { height: modalHeight }]}
      backdropOpacity={0.5}
    >
      <View       style={[styles.container, { height: modalHeight }]}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>Cerrar</Text>
        </TouchableOpacity>
        {content}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  container: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
  },
  closeButton: {
    alignSelf: "flex-start",
    padding: 10,
  },
  closeButtonText: {
    color: "#000",
    fontSize: 16,
  },
});

export default BottomSheetSearch;

import React, { useState } from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import Modal from "react-native-modal";
import { CommonText } from "../Text";
import Icon from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");

const ErrorModal = ({
  isVisible,
  errorMessage,
  onClose,
  errorCode,
  handleReload,
}) => {
  const [retryCount, setRetryCount] = useState(0);
  const [showMaxRetryMessage, setShowMaxRetryMessage] = useState(false);
  const maxRetries = 4;

  const handleRetry = () => {
    if (retryCount < maxRetries) {
      setRetryCount(retryCount + 1);
      handleReload();
    } else {
      setShowMaxRetryMessage(true);
    }
  };

  return (
    <Modal isVisible={isVisible}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            padding: 20,
            borderRadius: 10,
            alignItems: "center",
          }}
        >
          {showMaxRetryMessage && (
            <TouchableOpacity style={{alignSelf: "flex-end"}} onPress={onClose}>
            <Icon name="close" size={25} color="#000000" />
            </TouchableOpacity>
          )}
          {!showMaxRetryMessage && (
            <>
              <CommonText
                fontSize={18}
                color={"#000000"}
                alignSelf={"center"}
                fontWeight={"500"}
                marginTop={16}
              >
                {errorCode}
              </CommonText>
              <CommonText
                fontSize={18}
                color={"#000000"}
                alignSelf={"center"}
                fontWeight={"500"}
                marginTop={16}
              >
                {errorMessage}
              </CommonText>
              <TouchableOpacity
                onPress={handleRetry}
                style={{
                  marginTop: 20,
                  backgroundColor: "#FFEB3B",
                  padding: 10,
                  borderRadius: 10,
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  width: width * 0.4,
                }}
              >
                <Text
                  style={{ fontSize: 18, color: "#000000", fontWeight: "500" }}
                >
                  Volver a intentar
                </Text>
              </TouchableOpacity>
            </>
          )}

          {showMaxRetryMessage && (
            <>
              <Text
                style={{ fontSize: 18, color: "#000000", fontWeight: "500" }}
              >
                El sistema no se encuentra disponible, intenta de nuevo mas
                tarde
              </Text>

            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ErrorModal;

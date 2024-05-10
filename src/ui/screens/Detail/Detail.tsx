import React, { useState } from "react";
import { Dimensions, View, Image, StyleSheet, ScrollView } from "react-native";
import {
  CommonText,
  LayoutSafeArea,
  Margin,
  Separator,
} from "../../components";
import { Total } from "../../components/Total";
import Icon from "react-native-vector-icons/FontAwesome";
const { width, height } = Dimensions.get("window");

export const DetailScreen = ({ route }) => {
  const {
    idProduct,
    title,
    price,
    thumbnail,
    seller,
    attributes,
    condition,
    available_quantity,
  } = route.params;

  const formatPrice = (price) =>
    price.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  const findAttributeByName = (name) => {
    return attributes.find((attr) => attr.id === name);
  };

  const mainAttributes = ["BRAND", "COLOR", "LINE", "LENGTH", "MODEL", "POWER"];

  const dimensionAttributes = [
    "PACKAGE_LENGTH",
    "NET_VOLUME",
    "NET_WEIGHT",
    "PACKAGE_WEIGHT",
    "UNIT_VOLUME",
    "UNIT_WEIGHT",
  ];

  const packFormatAttributes = [
    "SALE_FORMAT",
    "UNITS_PER_PACK",
    "UNITS_PER_PACKAGE",
  ];

  return (
    <LayoutSafeArea
      header={null}
      content={
        <ScrollView showsVerticalScrollIndicator={false}>
             <Margin marginTop={height * 0.05}>
          <Image
            style={{ alignSelf: "center", width: 250, height: 250 }}
            source={{ uri: thumbnail }}
          />
               </Margin>
          <Margin marginTop={height * 0.03}>
            <CommonText
              fontSize={20}
              color={"#000000"}
              alignSelf={"center"}
              fontWeight={"600"}
              width={350}
              alignText={"center"}
            >
              {title}
            </CommonText>
          </Margin>

          <Margin marginTop={height * 0.01}>
            <CommonText
              fontSize={20}
              color={"#555"}
              alignSelf={"center"}
              fontWeight={"300"}
              width={350}
              alignText={"center"}
            >
              ${formatPrice(price)}
            </CommonText>
          </Margin>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: height * 0.02,
            }}
          >
            <View>
              <CommonText
                fontSize={12}
                color={"#000000"}
                alignSelf={"center"}
                fontWeight={"700"}
                width={150}
                alignText={"center"}
              >
                {"Stock disponible"}
              </CommonText>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: height * 0.02,
                  marginLeft: width * 0.05,
                  alignItems: "center",
                }}
              >
                <Icon name="check-circle-o" size={20} color="#34C759" />
                <Margin marginLeft={width * 0.02}>
                  <CommonText
                    fontSize={12}
                    color={"#757575"}
                    alignSelf={"center"}
                    fontWeight={"700"}
                    width={150}
                    alignText={"center"}
                  >
                    {available_quantity}
                  </CommonText>
                </Margin>
              </View>
            </View>

            <View>
              <CommonText
                fontSize={12}
                color={"#000000"}
                alignSelf={"center"}
                fontWeight={"700"}
                width={150}
                alignText={"center"}
              >
                {"Condición"}
              </CommonText>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: height * 0.02,
                  marginLeft: width * 0.05,
                  alignItems: "center",
                }}
              >
                <Icon name="check-circle-o" size={20} color="#34C759" />
                <Margin marginLeft={width * 0.02}>
                  <CommonText
                    fontSize={12}
                    color={"#757575"}
                    alignSelf={"center"}
                    fontWeight={"700"}
                    width={150}
                    alignText={"center"}
                  >
                    {condition === "new"
                      ? "Nuevo"
                      : condition === "used"
                      ? "Usado"
                      : ""}
                  </CommonText>
                </Margin>
              </View>
            </View>
          </View>

          <Margin marginTop={height * 0.02}>
            <CommonText
              fontSize={18}
              color={"#000000"}
              alignSelf={"center"}
              fontWeight={"700"}
              width={350}
              alignText={"center"}
            >
              {"Vendido por"}
            </CommonText>
          </Margin>

          <Margin marginTop={height * 0.01}>
            <CommonText
              fontSize={20}
              color={"#00B2FF"}
              alignSelf={"center"}
              fontWeight={"300"}
              width={350}
              alignText={"center"}
            >
              {seller}
            </CommonText>
          </Margin>

          {mainAttributes.some((attributeName) =>
            findAttributeByName(attributeName)
          ) && (
            <>
              <Margin marginTop={height * 0.02}>
                <CommonText
                  fontSize={18}
                  color={"#000000"}
                  alignSelf={"center"}
                  fontWeight={"700"}
                  width={350}
                  alignText={"center"}
                >
                  {"Caracteristicas del producto"}
                </CommonText>
              </Margin>
              <View style={styles.rowContainer}>
                {mainAttributes.map((attributeName) => {
                  const attribute = findAttributeByName(attributeName);
                  if (attribute) {
                    return (
                      <Total
                        key={attribute.id}
                        label={attribute.name}
                        subtitle={attribute.value_name}
                      />
                    );
                  }
                  return null;
                })}
              </View>
              <Separator />
            </>
          )}

          {packFormatAttributes.some((attributeName) =>
            findAttributeByName(attributeName)
          ) && (
            <>
              <Margin marginTop={height * 0.02}>
                <CommonText
                  fontSize={18}
                  color={"#000000"}
                  alignSelf={"center"}
                  fontWeight={"700"}
                  width={350}
                  alignText={"center"}
                >
                  {"Formato de venta"}
                </CommonText>
              </Margin>
              <View style={styles.rowContainer}>
                {packFormatAttributes.map((attributeName) => {
                  const attribute = findAttributeByName(attributeName);
                  if (attribute) {
                    return (
                      <Total
                        key={attribute.id}
                        label={attribute.name}
                        subtitle={attribute.value_name}
                      />
                    );
                  }
                  return null;
                })}
              </View>
              <Separator />
            </>
          )}

          {dimensionAttributes.some((attributeName) =>
            findAttributeByName(attributeName)
          ) && (
            <>
              <Margin marginTop={height * 0.02}>
                <CommonText
                  fontSize={18}
                  color={"#000000"}
                  alignSelf={"center"}
                  fontWeight={"700"}
                  width={350}
                  alignText={"center"}
                >
                  {"Dimensiones"}
                </CommonText>
              </Margin>
              <View style={styles.rowContainer}>
                {dimensionAttributes.map((attributeName) => {
                  const attribute = findAttributeByName(attributeName);
                  if (attribute) {
                    return (
                      <Total
                        key={attribute.id}
                        label={attribute.name}
                        subtitle={attribute.value_name}
                      />
                    );
                  }
                  return null;
                })}
              </View>
            </>
          )}
        </ScrollView>
      }
      footer={null}
    />
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  subInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    marginTop: height * 0.02,
  },
});

export default DetailScreen;

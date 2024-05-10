import React from "react";
import { Dimensions, ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { CommonText, Margin, Separator } from "../../../components";
import { Search } from "../../../components/SearchBar";
import Spinner from "react-native-loading-spinner-overlay";
import { ProductSearchCard } from "../../../components/ProductCard";
import { generateSuggestions } from "../../../../domain/consts/Suggestions/Suggestions";


const BottomSheetSearchContent = ({
  loading,
  searchResults,
  navigateToDetail,
  formatPrice,
  emptyResults,
  handleSearch,
}) => {
  const { height, width } = Dimensions.get("window");
  const suggestions = generateSuggestions();

  const handleSuggestionClick = (suggestion) => {
    handleSearch(suggestion);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <Margin marginTop={height * 0.02}>
      <Search onSearch={handleSearch} />
    </Margin>
  
    <Spinner
      visible={loading}
      textStyle={{ color: "#FFF" }}
      animation={"fade"}
    />
  
    <Margin marginTop={height * 0.02} marginLeft={width * 0.04}>
      <CommonText
        fontSize={20}
        color={"#212121"}
        alignSelf={"flex-start"}
        fontWeight={"700"}
        width={200}
      >
        {searchResults && searchResults.length > 0
          ? "Resultados de búsqueda"
          : "Explorar"}
      </CommonText>
    </Margin>
  
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        {searchResults &&
          searchResults.length > 0 &&
          searchResults.map((searchResult, index) => (
            <View key={searchResult?.id} style={styles.cardContainer}>
              <ProductSearchCard
                onPress={() =>
                  navigateToDetail(
                    searchResult?.id,
                    searchResult?.title,
                    searchResult?.price,
                    searchResult.thumbnail,
                    searchResult?.seller.nickname,
                    searchResult?.attributes,
                    searchResult?.condition,
                    searchResult?.available_quantity
                  )
                }
                imageSource={searchResult?.thumbnail}
                subtitle={searchResult?.title}
                title={`$${formatPrice(searchResult?.price)}`}
              />
            </View>
          ))}
        {!loading && emptyResults && (
          <CommonText
            fontSize={20}
            color={"#212121"}
            alignSelf={"flex-start"}
            fontWeight={"700"}
            width={200}
          >
            {"No hay productos relacionados a tu búsqueda"}
          </CommonText>
        )}
      </View>
    </View>
  
    {/* Render suggestions when searchResults is empty */}
    {!loading && searchResults && searchResults.length === 0 && (
      <View>
    
        <View >
          {/* Render your suggestions here */}
          {suggestions.map((suggestion, index) => (
            <TouchableOpacity style={{paddingLeft: width * 0.03}} key={index} onPress={() => handleSuggestionClick(suggestion)}>
              <CommonText
                fontSize={18}
                color={"#000000"}
                alignSelf={"flex-start"}
                fontWeight={"400"}
                width={200}
              >
                {suggestion}
              </CommonText>

              <Separator />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )}
  </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  rowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  cardContainer: {
    width: "48%",
    marginBottom: 10,
  },
});

export default BottomSheetSearchContent;

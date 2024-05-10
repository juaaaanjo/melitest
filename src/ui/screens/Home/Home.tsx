import React, { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  View,
  ScrollView,
  StyleSheet,
  Animated,
} from "react-native";
import {
  CommonText,
  LayoutSafeArea,
  Margin,
  ProductSearchCardSkeleton,
  TextSkeleton,
} from "../../components";
import { ProductSearchCard } from "../../components/ProductCard";
import { SearchBarDummy } from "../../components/SearchBar";
import { BottomSheetSearch } from "../../components/BottomSheet";
import useCategoryModel from "../../../domain/models/CategoriesModel";
import useProductModel from "../../../domain/models/ProductsModel";
import { Result } from "../../../domain/interfaces/result-interface";
import { Category } from "../../../domain/interfaces/Categories";
import useSearchModel from "../../../domain/models/SearchModel";
import BottomSheetSearchContent from "./components/BottomSheetSearchContainer";
import ErrorModal from "@/ui/components/ErrorModal/ErrorModal";
import Spinner from "react-native-loading-spinner-overlay";

const { height } = Dimensions.get("window");

const HomeScreen = ({ navigation}) => {
  const [isSearchSheetVisible, setSearchSheetVisible] = useState(false);
  const [products, setProducts] = useState<Result[]>([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorCode, setErrorCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingSkeleton, setLoadingSkeleton] = useState(false);
  const [emptyResults, setEmptyResults] = useState(false);
  const [searchResults, setSearchResults] = useState<Result[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const { GetCategoriesModel } = useCategoryModel();
  const { GetProductsModel } = useProductModel();
  const { GetBySearchModel } = useSearchModel();
  const [scrollY] = useState(new Animated.Value(0));
  const headerHeight = 100;
  const searchBarHeight = 56;

  const handleCloseModal = () => {
    setErrorMessage(null);
    setErrorCode(null);
  };

  const headerTranslateY = scrollY.interpolate({
    inputRange: [0, headerHeight],
    outputRange: [0, -headerHeight],
    extrapolate: "clamp",
  });

  const searchBarTranslateY = scrollY.interpolate({
    inputRange: [0, headerHeight + searchBarHeight],
    outputRange: [0, -headerHeight - searchBarHeight],
    extrapolate: "clamp",
  });

  useEffect(() => {
    handleGetCategory();
  }, []);

  const handleGetCategory = useCallback(async () => {
    try {
      setLoadingSkeleton(true);
      const categoriesData = await GetCategoriesModel();
      setCategories(categoriesData);

      const promises = categoriesData?.map(async (category) => {
        const productsData = await GetProductsModel(category?.id);

        const productsWithMainCategoryId = productsData.results.map(
          (product) => ({
            ...product,
            main_category_id: category?.id,
          })
        );
        return productsWithMainCategoryId;
      });

      const productsArray = await Promise.all(promises);
      const allProducts = productsArray.flat();
      setProducts(allProducts);
      setLoadingSkeleton(false);
    } catch (error) {
      setErrorMessage('Ocurrio un error al obtener la informacion');
      setErrorCode(error.response.status)
    }
  }, [GetCategoriesModel, GetProductsModel]);

  const toggleSearchSheet = useCallback(() => {
    setSearchSheetVisible((prevState) => !prevState);
  }, []);

  const closeSearchSheet = useCallback(() => {
    setLoading(true);
    setSearchSheetVisible(false);
    setSearchResults([]);
    setLoading(false);
  }, []);

  const navigateToDetail = useCallback(
    (
      idProduct,
      title,
      price,
      thumbnail,
      seller,
      attributes,
      condition,
      available_quantity
    ) => {
      navigation.navigate("DetailScreen", {
        idProduct,
        title,
        price,
        thumbnail,
        seller,
        attributes,
        condition,
        available_quantity,
      });
      setSearchSheetVisible(false);
    },
    [navigation]
  );

  const handleReload = () => {
    handleGetCategory();
  };

  const handleSearch = useCallback(
    async (searchText) => {
      setLoading(true);

      try {
        const searchResult = await GetBySearchModel(searchText);

        if (searchResult.paging.total === 0) {
          setEmptyResults(true);
        }

        setSearchResults(searchResult.results);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    },
    [GetBySearchModel]
  );

  const formatPrice = (price) =>
    price?.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

  return (
    <LayoutSafeArea
      header={null}
      content={
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
          scrollEventThrottle={10}
        >
          <View style={{ paddingTop: searchBarHeight }}>
            <CommonText
              fontSize={32}
              color={"#000000"}
              alignSelf={"flex-start"}
              fontWeight={"700"}
              marginTop={16}
              translateY={headerTranslateY}
            >
              {"Hola de nuevo"}
            </CommonText>
            <Margin marginTop={8}>
              <CommonText
                fontSize={24}
                color={"#666666"}
                alignSelf={"flex-start"}
                fontWeight={"500"}
                translateY={headerTranslateY}
              >
                {"¿Que deseas ordenar?"}
              </CommonText>
            </Margin>

            <Margin marginTop={height * 0.02}>
              <SearchBarDummy
                onPress={toggleSearchSheet}
                animatedStyle={{
                  transform: [{ translateY: searchBarTranslateY }],
                }}
              />
            </Margin>

            <Margin marginTop={height * 0.01}>
              {Array.isArray(categories) && categories.length > 0 &&
                categories?.map((category) => (
                  <React.Fragment key={category.id}>
                    {loadingSkeleton ? ( 
                      <Margin marginTop={height * 0.02}>
                        <TextSkeleton />
                      </Margin>
                    ) : (
                      <Margin marginTop={height * 0.02}>
                        <CommonText
                          fontSize={20}
                          color={"#000000"}
                          alignSelf={"flex-start"}
                          fontWeight={"500"}
                        >
                          {category?.name}
                        </CommonText>
                      </Margin>
                    )}
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      {Array.isArray(products) && products.length > 0 ? (
                        products
                          .filter(
                            (product) =>
                              product?.main_category_id === category?.id
                          )
                          .map((product) => (
                            <ProductSearchCard
                              key={product?.id}
                              onPress={() =>
                                navigateToDetail(
                                  product.id,
                                  product.title,
                                  product?.price,
                                  product?.thumbnail,
                                  product?.seller.nickname,
                                  product?.attributes,
                                  product?.condition,
                                  product?.available_quantity
                                )
                              }
                              imageSource={product?.thumbnail}
                              subtitle={`$${formatPrice(product?.price)}`}
                              title={product?.title}
                            />
                          ))
                      ) : (
                        <ProductSearchCardSkeleton />
                      )}
                    </ScrollView>
                  </React.Fragment>
                ))}
            </Margin>
          </View>
          <Spinner
      visible={loading}
      textStyle={{ color: "#FFF" }}
      animation={"fade"}
    />
  
          <ErrorModal handleReload={handleReload} isVisible={errorCode !== null} errorMessage={errorMessage} errorCode={errorCode} onClose={handleCloseModal} />
          <BottomSheetSearch
            isVisible={isSearchSheetVisible}
            onClose={closeSearchSheet}
            content={
              <BottomSheetSearchContent
                loading={loading}
                searchResults={searchResults}
                navigateToDetail={navigateToDetail}
                formatPrice={formatPrice}
                emptyResults={emptyResults}
                handleSearch={handleSearch}
              />
            }
          />
        </Animated.ScrollView>
      }
    />
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

export default HomeScreen;

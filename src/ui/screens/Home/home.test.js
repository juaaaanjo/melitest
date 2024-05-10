import React from "react";
import { render, waitFor, renderHook } from "@testing-library/react-native";
import HomeScreen from "./Home";
import useCategoryModel from "../../../domain/models/CategoriesModel";
import useProductModel from "../../../domain/models/ProductsModel";

jest.useFakeTimers();

jest.mock("../../../domain/models/CategoriesModel");
jest.mock("../../../domain/models/ProductsModel");
jest.mock('@react-navigation/native');

describe("HomeScreen", () => {
  it("fetches categories and products successfully", async () => {
    const mockCategories = [
      { id: "MLA5725", name: "Accesorios para Vehículos" },
      { id: "MLA1512", name: "Agro" },
    ];
    const mockProducts = [
      {
        id: "MLA1409955367",
        title:
          "Alimento Dog Selection Criadores Criadores Para Raza Mediana Y Grande Sabor Carne Y Pollo En Bolsa De 21 kg",
      },
      {
        id: "MLA1143780347",
        name:
          "Alimento Maintenance Criadores  Para Perro Adulto Todos Los Tamaños Sabor Carne Y Pollo En Bolsa De 22 kg",
      },
    ];

    useCategoryModel.mockReturnValue({
      GetCategoriesModel: jest.fn().mockResolvedValue(mockCategories),
    });

    useProductModel.mockReturnValue({
      GetProductsModel: jest.fn().mockImplementation((categoryId) => {
        return Promise.resolve({ results: mockProducts });
      }),
    });

    const { getByText } = render(<HomeScreen />);

    await waitFor(() => {
      expect(getByText("Accesorios para Vehículos")).toBeTruthy();
      expect(getByText("Accesorios para Vehículos")).toBeTruthy();
    });
  });

});
// postProducts function to make a POST request to the API to create a new product
import axios from "axios";

export const postProducts = async (productData) => {
  try {
    // Make a POST request to the API to create a new product
    const response = await axios.post("/api/product", productData);

    // Get the created product from the response data
    const createdProduct = response.data;
    return createdProduct;
  } catch (error) {
    console.error(error);
    // Throw an error if something goes wrong
    throw new Error("An error occurred while creating the product.");
  }
};

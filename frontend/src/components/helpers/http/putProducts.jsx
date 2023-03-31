// putProducts function to make a PUT request to the API to update the product
import axios from "axios";

export const putProducts = async (productId, productData) => {
  try {
    // Make a PUT request to the API to update the product
    const response = await axios.put(`/api/product/${productId}`, productData);

    // Get the updated product from the response data
    const updatedProduct = response.data;
    return updatedProduct;
  } catch (error) {
    console.error(error);
    // Throw an error if something goes wrong
    throw new Error("An error occurred while updating the product.");
  }
};

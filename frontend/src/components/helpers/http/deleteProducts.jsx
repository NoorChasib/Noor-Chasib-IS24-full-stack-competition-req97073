// Import the axios library
import axios from "axios";

// Define a function called deleteProduct that takes a productId as an argument and returns a deleted product
export const deleteProduct = async (productId) => {
  try {
    // Use axios to send a DELETE request to the API endpoint for the specified product ID and await the response
    const response = await axios.delete(`/api/product/${productId}`);
    // Extract the deleted product data from the response
    const deletedProduct = response.data;
    // Return the deleted product
    return deletedProduct;
  } catch (error) {
    // If an error occurs, log the error to the console and re-throw the error to be handled by the caller
    console.error(error);
    throw error;
  }
};

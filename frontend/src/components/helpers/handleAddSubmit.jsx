import { checkFieldsFilled } from "./checkFieldsFilled";
import { postProducts } from "./http/postProducts";

// Function to format the date to a string in the format "YYYY-MM-DD"
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// handleAddSubmit function to add a new product
export const handleAddSubmit = async (
  productName,
  productOwner,
  scrumMaster,
  startDate,
  methodology,
  developers,
  developerCount,
  onClose,
  setAllFieldsFilled,
  onProductCreated,
  resetForm,
  showNotification,
) => {
  // Get the visible developers based on the developer count
  const visibleDevelopers = developers.slice(0, developerCount);

  // Array of fields to check if they are filled
  const fields = [
    productName,
    productOwner,
    scrumMaster,
    startDate,
    methodology,
  ];

  // Check if all the fields are filled
  const fieldsFilled = checkFieldsFilled(fields, visibleDevelopers);

  if (fieldsFilled) {
    // Create an object with the product data
    const productData = {
      productName,
      productOwnerName: productOwner,
      Developers: visibleDevelopers.filter((dev) => dev.trim() !== ""),
      scrumMasterName: scrumMaster,
      startDate: formatDate(startDate),
      methodology,
    };

    try {
      // Call the postProducts function to create the product
      const createdProduct = await postProducts(productData);

      // Call the onProductCreated function to update the product list
      onProductCreated(createdProduct);

      // Reset the form
      resetForm();

      // Close the modal
      onClose();

      // Show a notification indicating that the product was successfully created
      showNotification();
    } catch (error) {
      console.error(error);
    }
  } else {
    // If all the fields are not filled, set the allFieldsFilled to false
    setAllFieldsFilled(false);
  }
};

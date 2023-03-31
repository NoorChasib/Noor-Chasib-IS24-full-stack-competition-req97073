import { putProducts } from "./http/putProducts";

// Function to format the date to a string in the format "YYYY-MM-DD"
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

// handleEditSubmit function to edit an existing product
export const handleEditSubmit = async (
  productId,
  productName,
  productOwner,
  scrumMaster,
  startDate,
  methodology,
  developers,
  developerCount,
  onClose,
  editNotification,
  onProductEdited,
) => {
  // Get the visible developers based on the developer count
  const visibleDevelopers = developers.slice(0, developerCount);

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
    // Call the putProducts function to update the product
    const editedProduct = await putProducts(productId, productData);
    onClose();
    editNotification();
    onProductEdited(editedProduct);
  } catch (error) {
    console.error(error);
  }
};

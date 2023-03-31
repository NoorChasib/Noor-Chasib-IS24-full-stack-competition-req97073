import React from "react";
import { modals } from "@mantine/modals";
import EditProductModalContent from "./EditProductModalContent";

// This component is a helper function that creates and opens an edit product modal
export const EditProductModal = ({ initialProduct, onProductEdited }) => {
  // This function is called when the modal is closed
  const onClose = () => {
    modals.closeAll();
  };

  modals.open({
    title: "Edit Product",
    children: (
      <EditProductModalContent // The content of the modal
        onProductEdited={onProductEdited} // A function to call when a product is edited
        initialProduct={initialProduct} // The initial product data to display in the modal
        onClose={onClose} // The function to call when the modal is closed
      />
    ),
  });
};

export default EditProductModal;

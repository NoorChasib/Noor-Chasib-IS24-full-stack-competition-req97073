import { notifications } from "@mantine/notifications";
import { modals } from "@mantine/modals";
import { Text } from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import { deleteProduct } from "../helpers/http/deleteProducts";

export const DeleteProductModal = ({ productId, onDeleteProduct }) => {
  // Function that displays a notification indicating that a product has been deleted
  const deleteNotification = () => {
    notifications.show({
      icon: <IconX />,
      color: "red",
      message: "Product Successfully Deleted.",
    });
  };

  // Open a confirm modal to ensure the user wants to delete the product
  modals.openConfirmModal({
    title: "Delete this product?",
    centered: true,
    children: (
      <Text size="sm">
        Are you sure you want to delete this product? This action is destructive
        and cannot be undone.
      </Text>
    ),
    labels: { confirm: "Delete Product", cancel: "Cancel" },
    confirmProps: { color: "red", variant: "outline" },
    onConfirm: async () => {
      await deleteProduct(productId); // Delete product using HTTP DELETE request
      deleteNotification(); // Display notification
      onDeleteProduct(productId); // Remove product from UI
    },
  });
};

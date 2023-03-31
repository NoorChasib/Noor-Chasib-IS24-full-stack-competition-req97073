import { IconEdit, IconTrash } from "@tabler/icons-react";
import { DeleteProductModal } from "../modals/DeleteProductModal";
import { EditProductModal } from "../modals/EditProductModal";

// Define the rowContextMenuConfig function
export const rowContextMenuConfig = (onDeleteProduct, onProductEdited) => {
  // Return an object with properties that configure the row context menu
  return {
    shadow: "xl",
    borderRadius: "sm",
    items: (row) => [
      {
        // Configure the "Edit" menu item
        key: "edit",
        color: "blue",
        icon: <IconEdit size={16} />,
        title: `Edit ${row.productName}`,
        onClick: () =>
          EditProductModal({ initialProduct: row, onProductEdited }),
      },
      {
        // Configure the "Delete" menu item
        key: "delete",
        color: "red",
        icon: <IconTrash size={16} />,
        onClick: () =>
          DeleteProductModal({ productId: row.productId, onDeleteProduct }),
      },
    ],
  };
};

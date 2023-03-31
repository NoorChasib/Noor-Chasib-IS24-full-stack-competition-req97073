import React, { useState, useEffect } from "react";
import { DataTable } from "mantine-datatable";
import { Box } from "@mantine/core";
import {
  useDebouncedValue,
  useDisclosure,
  useViewportSize,
} from "@mantine/hooks";
import AddProductModal from "../modals/AddProductModal";
import { columns } from "../utils/columns";
import { getProducts } from "../helpers/http/getProducts";
import ProductTableHeader from "./ProductTableHeader";
import ProductTableFooter from "./ProductTableFooter";
import { rowContextMenuConfig } from "../utils/rowContextMenuConfig";

const ProductTable = () => {
  // Declare necessary state variables
  const [records, setRecords] = useState([]);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebouncedValue(query, 200);
  const [selectedColumn, setSelectedColumn] = useState("productName");
  const [fetching, setFetching] = useState(true);
  const [addNewOpened, { open: openAddNew, close: closeAddNew }] =
    useDisclosure(false);
  const [sortStatus, setSortStatus] = useState({
    columnAccessor: "productId",
    direction: "asc",
  });

  // Get the viewport height to set the table container height
  const { height: height } = useViewportSize();
  const containerHeight = height * 0.65;

  // Define callback functions for the modals
  const onProductCreated = (newProduct) => {
    setRecords((prevRecords) => [...prevRecords, newProduct]);
  };

  const onDeleteProduct = (deletedProductId) => {
    setRecords((prevRecords) =>
      prevRecords.filter((product) => product.productId !== deletedProductId),
    );
  };

  const onProductEdited = (editedProduct) => {
    setRecords((prevRecords) =>
      prevRecords.map((product) =>
        product.productId === editedProduct.productId ? editedProduct : product,
      ),
    );
  };

  // Fetch data on component mount and on dependency changes
  useEffect(() => {
    getProducts(
      debouncedQuery,
      selectedColumn,
      sortStatus,
      setRecords,
      setFetching,
    );
  }, [debouncedQuery, selectedColumn, sortStatus]);

  // Render the component
  return (
    <>
      {/* Render the AddProductModal component */}
      <AddProductModal
        opened={addNewOpened}
        onClose={closeAddNew}
        onProductCreated={onProductCreated}
      />
      {/* Render the ProductTableHeader component */}
      <ProductTableHeader
        query={query}
        setQuery={setQuery}
        selectedColumn={selectedColumn}
        setSelectedColumn={setSelectedColumn}
        openAddNew={openAddNew}
      />
      <Box sx={{ height: containerHeight }}>
        {/* Render the DataTable component */}
        <DataTable
          withBorder
          borderRadius="md"
          withColumnBorders
          striped
          highlightOnHover
          verticalSpacing="xs"
          columns={columns}
          records={records}
          idAccessor="productId"
          minHeight={150}
          noRecordsText="No records to show"
          sortStatus={sortStatus}
          onSortStatusChange={setSortStatus}
          fetching={fetching}
          loaderVariant="oval"
          loaderSize="lg"
          loaderColor="blue"
          loaderBackgroundBlur={1}
          rowContextMenu={rowContextMenuConfig(
            onDeleteProduct,
            onProductEdited,
          )}
        />
        {/* Render the ProductTableFooter component */}
        <ProductTableFooter records={records} />
      </Box>
    </>
  );
};

export default ProductTable;

import React from "react";
import { Grid, TextInput, Select, Button } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import { columns } from "../utils/columns";

const ProductTableHeader = ({
  query,
  setQuery,
  selectedColumn,
  setSelectedColumn,
  openAddNew,
}) => {
  return (
    // Use a Grid component to lay out the header elements
    <Grid align="center" mb="md">
      <Grid.Col xs={8}>
        {/* Define a TextInput for searching the table */}
        <TextInput
          label="Search"
          placeholder="Search..."
          icon={<IconSearch size={16} />}
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
      </Grid.Col>
      <Grid.Col xs={2}>
        {/* Define a Select component for selecting a column to sort by */}
        <Select
          label="Sort by"
          value={selectedColumn}
          onChange={(value) => setSelectedColumn(value)}
          data={columns
            .filter((col) => col.accessor !== "actions")
            .map((col) => ({ value: col.accessor, label: col.title }))}
        />
      </Grid.Col>
      <Grid.Col xs={2} mt="xl">
        {/* Define a Button component for opening the add new product modal */}
        <Button
          fullWidth={true}
          color="blue"
          variant="outline"
          onClick={openAddNew}
        >
          Add New
        </Button>
      </Grid.Col>
    </Grid>
  );
};

export default ProductTableHeader;

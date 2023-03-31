import React from "react";
import { Group, Text } from "@mantine/core";

const ProductTableFooter = ({ records }) => {
  // Render a Group component to group the Text component
  // Use the `position` prop to spread the elements apart
  return (
    <Group mt="sm" mx="xs" position="apart">
      {/* Render a Text component showing the number of records */}
      {/* Use a ternary operator to check if records length is singular or plural */}
      {/* Change the string "record" or "records" based on the number of records */}
      <Text size="sm">
        Showing {records.length} {records.length === 1 ? "record" : "records"}
      </Text>
    </Group>
  );
};

export default ProductTableFooter;

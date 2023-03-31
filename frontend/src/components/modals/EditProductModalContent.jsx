import React, { useState } from "react";
import { Button, Group, Select, TextInput } from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";
import { DatePickerInput } from "@mantine/dates";
import { useCounter } from "@mantine/hooks";
import { handleDeveloperNameChange } from "../helpers/handleDeveloperNameChange";
import { handleInputChange } from "../helpers/handleInputChange";
import { handleEditSubmit } from "../helpers/handleEditSubmit";

const EditProductModalContent = ({
  initialProduct, // the initial product object being edited
  onClose, // function to close the modal
  onProductEdited, // function to call after product edited
}) => {
  // state variables for form inputs and developer count
  const [startDate, setStartDate] = useState(null);
  const [productName, setProductName] = useState(initialProduct.productName);
  const [productOwnerName, setProductOwnerName] = useState(
    initialProduct.productOwnerName,
  );
  const [scrumMasterName, setScrumMasterName] = useState(
    initialProduct.scrumMasterName,
  );
  const [methodology, setMethodology] = useState(initialProduct.methodology);
  const [developers, setDevelopers] = useState([
    ...initialProduct.Developers.slice(0, 5),
    ...Array(5 - initialProduct.Developers.length).fill(""),
  ]);

  // separate out year, month and day from start date string
  const [year, month, day] = initialProduct.startDate.split("-");

  // hook for developer count with min and max value of 1 and 5 respectively
  const [
    developerCount,
    { increment: addDeveloper, decrement: removeDeveloper },
  ] = useCounter(initialProduct.Developers.length, { min: 1, max: 5 });

  // notification for successful product edit
  const editNotification = () => {
    notifications.show({
      icon: <IconCheck />,
      message: "Product Successfully Edited!",
    });
  };

  return (
    <>
      {/* form inputs for editing product details */}
      <DatePickerInput
        valueFormat="YYYY-MM-DD"
        label="Start Date"
        placeholder="Start Date"
        allowDeselect
        defaultValue={new Date(year, month - 1, day)}
        onChange={setStartDate}
      />
      <TextInput
        placeholder="Product Name"
        label="Product Name"
        value={productName}
        onChange={(e) => handleInputChange(e, setProductName)}
      />
      <TextInput
        placeholder="Full Name"
        label="Product Owner"
        value={productOwnerName}
        onChange={(e) => handleInputChange(e, setProductOwnerName)}
      />
      <TextInput
        placeholder="Full Name"
        label="Scrum Master"
        value={scrumMasterName}
        onChange={(e) => handleInputChange(e, setScrumMasterName)}
      />
      <Select
        label="Methodology"
        placeholder="Pick one"
        data={[
          { value: "Agile", label: "Agile" },
          { value: "Waterfall", label: "Waterfall" },
        ]}
        value={methodology}
        onChange={setMethodology}
      />
      {/* Render a TextInput component for each developer */}
      {Array(developerCount)
        .fill(0)
        .map((_, index) => (
          <TextInput
            key={index}
            placeholder="Full Name"
            label={`Developer Name ${index + 1}`}
            value={developers[index]}
            onChange={(e) => handleDeveloperNameChange(e, index, setDevelopers)}
          />
        ))}
      <Group mt="xl">
        {developerCount < 5 && (
          <Button compact={true} variant="subtle" onClick={addDeveloper}>
            Add Developer
          </Button>
        )}
        {developerCount > 1 && (
          <Button compact={true} variant="subtle" onClick={removeDeveloper}>
            Remove Developer
          </Button>
        )}
      </Group>
      <Button
        mt="xl"
        fullWidth={true}
        variant="outline"
        type="submit"
        onClick={() => {
          handleEditSubmit(
            initialProduct.productId,
            productName,
            productOwnerName,
            scrumMasterName,
            startDate || new Date(year, month - 1, day),
            methodology,
            developers,
            developerCount,
            onClose,
            editNotification,
            onProductEdited,
          );
        }}
      >
        Save Changes
      </Button>
    </>
  );
};

export default EditProductModalContent;

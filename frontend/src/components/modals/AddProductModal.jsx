import React, { useState } from "react";
import { Button, Group, Modal, Select, TextInput } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useCounter } from "@mantine/hooks";
import { handleDeveloperNameChange } from "../helpers/handleDeveloperNameChange";
import { handleInputChange } from "../helpers/handleInputChange";
import { handleAddSubmit } from "../helpers/handleAddSubmit";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";

const AddProductModal = ({ opened, onClose, onProductCreated }) => {
  // State variables for the form inputs
  const [productName, setProductName] = useState("");
  const [productOwner, setProductOwner] = useState("");
  const [scrumMaster, setScrumMaster] = useState("");
  const [developers, setDevelopers] = useState(Array(5).fill(""));
  const [allFieldsFilled, setAllFieldsFilled] = useState(true);
  const [startDate, setStartDate] = useState(null);
  const [methodology, setMethodology] = useState("");
  const [
    developerCount,
    {
      increment: addDeveloper,
      decrement: removeDeveloper,
      reset: resetDeveloperCount,
    },
  ] = useCounter(1, { min: 1, max: 5 });

  // Function to reset the form inputs
  const resetForm = () => {
    setProductName("");
    setProductOwner("");
    setScrumMaster("");
    setDevelopers(Array(5).fill(""));
    setStartDate(null);
    setMethodology("");
    resetDeveloperCount();
  };

  // Function to show a notification after product is added
  const showNotification = () => {
    notifications.show({
      icon: <IconCheck />,
      color: "green",
      message: "Product Successfully Added!",
    });
  };

  return (
    // Modal component to display the form
    <Modal
      opened={opened}
      onClose={onClose}
      withCloseButton={true}
      title="Create New Product"
      size="md"
      padding="md"
    >
      {/* Start Date Input */}
      <DatePickerInput
        valueFormat="YYYY-MM-DD"
        withAsterisk
        required
        label="Start Date"
        placeholder="Start Date"
        allowDeselect
        value={startDate}
        onChange={setStartDate}
        error={!allFieldsFilled && startDate === null}
      />
      {/* Product Name Input */}
      <TextInput
        placeholder="Product Name"
        label="Product Name"
        withAsterisk
        required
        value={productName}
        onChange={(e) => handleInputChange(e, setProductName)}
        error={!allFieldsFilled && productName.trim() === ""}
      />
      {/* Product Owner Input */}
      <TextInput
        placeholder="Full Name"
        label="Product Owner"
        withAsterisk
        required
        value={productOwner}
        onChange={(e) => handleInputChange(e, setProductOwner)}
        error={!allFieldsFilled && productOwner.trim() === ""}
      />
      {/* Scrum Master Input */}
      <TextInput
        placeholder="Full Name"
        label="Scrum Master"
        withAsterisk
        required
        value={scrumMaster}
        onChange={(e) => handleInputChange(e, setScrumMaster)}
        error={!allFieldsFilled && scrumMaster.trim() === ""}
      />
      {/* Methodology Select Input */}
      <Select
        label="Methodology"
        placeholder="Pick one"
        withAsterisk
        required
        data={[
          { value: "Agile", label: "Agile" },
          { value: "Waterfall", label: "Waterfall" },
        ]}
        value={methodology}
        onChange={setMethodology}
        error={!allFieldsFilled && methodology === ""}
      />
      {/* Developer Names Input */}
      {Array(developerCount)
        .fill(0)
        .map((_, index) => (
          <TextInput
            key={index}
            placeholder="Full Name"
            label={`Developer Name ${index + 1}`}
            withAsterisk
            required
            value={developers[index]}
            onChange={(e) => handleDeveloperNameChange(e, index, setDevelopers)}
            error={!allFieldsFilled && developers[index].trim() === ""}
          />
        ))}
      {/* Add/Remove Developer Buttons */}
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
      {/* Submit Button */}
      <Button
        mt="xl"
        fullWidth={true}
        variant="outline"
        type="submit"
        onClick={async () =>
          await handleAddSubmit(
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
          )
        }
      >
        Create
      </Button>
    </Modal>
  );
};

export default AddProductModal;

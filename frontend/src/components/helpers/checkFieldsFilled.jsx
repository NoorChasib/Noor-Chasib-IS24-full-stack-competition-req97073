// checkFieldsFilled function to check if all the required fields are filled
export const checkFieldsFilled = (fields, visibleDevelopers) => {
  // Loop through the fields array
  for (const field of fields) {
    // If the field is a string and its value is an empty string, return false
    if (typeof field === "string" && field.trim() === "") {
      return false;
    }
    // If the field is null or undefined, return false
    else if (field === null || field === undefined) {
      return false;
    }
  }

  // Loop through the visible developers array
  for (const developer of visibleDevelopers) {
    // If the developer name is an empty string, return false
    if (developer.trim() === "") {
      return false;
    }
  }

  // If all the fields are filled, return true
  return true;
};

export const handleInputChange = (event, setState) => {
  const inputValue = event.target.value;
  // Split input value into words
  const words = inputValue.split(" ");

  // Capitalize the first letter of each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );

  // Join the capitalized words back together with spaces
  const capitalizedValue = capitalizedWords.join(" ");

  // Update state with the capitalized value
  setState(capitalizedValue);
};

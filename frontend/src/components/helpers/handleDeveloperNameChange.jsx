export const handleDeveloperNameChange = (event, index, setDevelopers) => {
  // Get the value from the event
  const value = event.target.value;

  // Split the value into words
  const words = value.split(" ");

  // Capitalize each word
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );

  // Join the words back together with a space in between
  const capitalizedValue = capitalizedWords.join(" ");

  // Set the developers array with the capitalized value
  setDevelopers((prevDevelopers) =>
    prevDevelopers.map((developer, i) =>
      i === index ? capitalizedValue : developer,
    ),
  );
};

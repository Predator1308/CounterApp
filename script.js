// Get the element with ID "counter" and store it in countValue
const countValue = document.querySelector("#counter");

// Function to increment the counter
const increment = () => {
  // Get the current value from the UI
  let value = parseInt(countValue.innerText);
  // Increment the value
  value = value + 1;
  // Set the updated value back to the UI
  countValue.innerText = value;
};

// Function to decrement the counter
const decrement = () => {
  // Get the current value from the UI
  let value = parseInt(countValue.innerText);
  // Decrement the value
  value = value - 1;
  // Set the updated value back to the UI
  countValue.innerText = value;
};

export default function convertDateIST(dateString) {
  // Create a Date object from the string representation
  const date = new Date(dateString);

  // Get the year, month (0-indexed), and day components
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  // Format the date in YYYY-MM-DD
  return `${day}-${month}-${year}`;
}

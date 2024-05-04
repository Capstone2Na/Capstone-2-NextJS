export function calculateAverage(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    console.error("Error: Invalid input", arr);
    return 0;
  }

  const sum = arr.reduce((total, num) => total + num, 0);
  const average = sum / arr.length;

  return average.toFixed(2);
}

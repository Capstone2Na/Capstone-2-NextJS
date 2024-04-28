function filterTotalWaterTimestamp(waterValues, timestamps) {
  var filteredValues = [];
  var filteredTimestamps = [];
  var prevValue = 0;

  waterValues.forEach((value, index) => {
    if (index === 0) {
      filteredValues.push(prevValue);
      filteredTimestamps.push(timestamps[index]);
      prevValue = value;
    } else {
      if (prevValue <= value) {
        prevValue = value;
      } else {
        filteredValues.push(prevValue);
        filteredTimestamps.push(timestamps[index]);
        prevValue = 0;
      }
    }
  });

  if (prevValue !== 0) {
    filteredValues.push(prevValue);
    filteredTimestamps.push(timestamps[waterValues.length - 1]);
  }

  var total = filteredValues.reduce((sum, value) => sum + value, 0);

  return { filteredValues, filteredTimestamps, total };
}

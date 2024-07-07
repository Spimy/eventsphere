const isValidDate = (date) => {
  return date instanceof Date && !isNaN(date);
};

const validStartDate = (startDateInput, startDateFail) => {
  const date = new Date(startDateInput.value);

  if (!isValidDate(date)) {
    startDateFail.innerHTML = 'Invalid date provided';
    return false;
  }

  if (new Date(startDateInput.value) < new Date()) {
    startDateFail.innerHTML = 'Date cannot be earlier than today';
    return false;
  }

  startDateFail.innerHTML = '';
  return true;
};

const validEndDate = (startDateInput, endDateInput, endDateFail) => {
  const startDate = new Date(startDateInput.value);
  if (!isValidDate(startDate)) {
    endDateFail.innerHTML = 'Start date is not a valid date';
    return false;
  }

  const endDate = new Date(endDateInput.value);
  if (!isValidDate(endDate)) {
    endDateFail.innerHTML = 'Invalid date provided';
    return false;
  }

  if (endDate < startDate) {
    endDateFail.innerHTML = 'End date cannot be less before start date';
    return false;
  }

  endDateFail.innerHTML = '';
  return true;
};

const validEndTime = (
  startDateInput,
  endDateInput,
  startTimeInput,
  endTimeInput,
  endTimeFail
) => {
  const startDate = new Date(startDateInput.value);
  if (!isValidDate(startDate)) {
    endTimeFail.innerHTML = 'Start date is not a valid date';
    return false;
  }

  const endDate = new Date(endDateInput.value);
  if (!isValidDate(endDate)) {
    endTimeFail.innerHTML = 'End date is not a valid date';
    return false;
  }

  if (
    startDate.getTime() === endDate.getTime() &&
    endTimeInput.value <= startTimeInput.value
  ) {
    endTimeFail.innerHTML = 'End time cannot be same or before start time';
    return false;
  }

  endTimeFail.innerHTML = '';
  return true;
};

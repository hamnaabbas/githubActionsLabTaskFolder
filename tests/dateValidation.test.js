function isValidEvent(event) {
  if (!event.name || !event.date || !event.category) {
    return { valid: false, message: "Missing required event fields" };
  }

  let eventDate;

  // Accept Date object or string
  if (event.date instanceof Date) {
    eventDate = event.date;
  } else {
    eventDate = new Date(event.date);
  }

  if (isNaN(eventDate.getTime())) {
    return { valid: false, message: "Invalid date format" };
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  eventDate = new Date(eventDate.getTime());
  eventDate.setHours(0, 0, 0, 0);

  if (eventDate < today) {
    return { valid: false, message: "Event date cannot be in the past" };
  }

  return { valid: true, message: "Event is valid" };
}

module.exports = { isValidEvent };

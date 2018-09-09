/**
 * Handles errors with array format
 * @param {object} error - Object with `message` key and value as an array of objects with `field` and `message` properties.
 * @returns {string}
 */
const formatNotification = error => {
  const field = error.message[0].field;
  const message = error.message[0].message;

  switch (true) {
    case field === 'mobileNumber':
      return `Mobile number field: ${message}`;
    default:
      return `${field.toUpper()} field: ${message}`;
  }
};

/**
 * Handles errors with different formats and extract error messages for notifications.
 * @param {object or string} error - Error which will be shown in notification.
 */
export const formatError = error => {
  switch (true) {
    case typeof error === 'string':
      return error;
    case error.hasOwnProperty('message') && typeof error.message === 'string':
      return error.message;
      break;
    case typeof error.message === 'object' && error.message.length > 0:
      return formatNotification(error);
      break;
    default:
      return 'Sorry, something went wrong...';
  }
};

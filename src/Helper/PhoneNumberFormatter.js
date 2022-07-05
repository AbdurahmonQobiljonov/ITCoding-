const PhoneNumberFormatter = (value) => {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]|/g, "");

  if (phoneNumber.length < 3) return phoneNumber;
  if (phoneNumber.length < 7) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  }
  return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
    2,
    5
  )}-${phoneNumber.slice(5, 7)}-${phoneNumber.slice(7, 9)}`;
};

export default PhoneNumberFormatter;

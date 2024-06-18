export const checkValidData = (email, password, isSignIn, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid = /^(?=.*\d)(?=.*[a-zA-Z]).{5,}$/.test(password);
  const emailCriteria = "Email should be in the format 'example@example.com'.";
  const passwordCriteria =
    'Password must be at least 5 characters long and include at least one digit.';
  const nameCriteria =
    'Name should be 2 to 30 characters long and contain only letters and spaces.';

  if (!isEmailValid) {
    return `Email is not valid. ${emailCriteria}`;
  }
  if (!isSignIn && !isPasswordValid) {
    return `Password is not valid. ${passwordCriteria}`;
  }
  if (!isSignIn) {
    if (!name) {
      return `Name is required. ${nameCriteria}`;
    }
    const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);
    if (!isNameValid) {
      return `Name is not valid. ${nameCriteria}`;
    }
  }
  return null; // No errors
};

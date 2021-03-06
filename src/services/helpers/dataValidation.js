import validator from 'validator';
import {
  PhoneNumberFormat as PNF,
  PhoneNumberUtil
} from 'google-libphonenumber';
const phoneUtil = PhoneNumberUtil.getInstance();
export const required = value => (value ? undefined : 'Required');

export const isMinLength = minLength => value =>
  value && value.length >= minLength
    ? undefined
    : `Must contain minimum ${minLength} characters`;

export const isMaxLength = maxLength => value =>
  value && value.length <= maxLength
    ? undefined
    : `Must contain maximum ${maxLength} characters`;

export const isExactLength = exactLength => value =>
  value && value.length === exactLength
    ? undefined
    : `Must be ${exactLength} characters long`;

export const isNumber = value =>
  validator.isNumber(value) ? 'Must be a number' : undefined;

export const isValidName = value =>
  value && /^[a-zA-Z'.-\s]*$/.test(value)
    ? undefined
    : 'Please enter a valid name';

export const isValidEmail = value =>
  value && validator.isEmail(value) ? undefined : 'Invalid email address';

export const isPasswordSafe = value =>
  value && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(value)
    ? undefined
    : 'This password isn\'t safe. It should contain [a-z, A-Z, 0-9, and one of !,@,#,$,%,^,&,*]';

export const isValidSalary = value =>
  value && value > 0 ? undefined : 'Salary must be greater than 0';

export const isMobileNumber = value => {
  try {
    const phone = phoneUtil.parseAndKeepRawInput(value, 'UA');
    if (
      !/^\+\d{1,3}\d{8,9}$/.test(value) ||
      !(phoneUtil.isValidNumber(phone) && phoneUtil.isPossibleNumber(phone))
    ) {
      return 'Is not a valid phone number';
    }
  } catch (err) {
    return 'Is not a valid phone number';
  }
};
export const fullnameValidation = [
  required,
  isValidName,
  isMinLength(2),
  isMaxLength(20)
];
export const positionValidation = [required, isMinLength(2), isMaxLength(40)];
export const emailValidation = [required, isValidEmail];

export const passwordValidation = [
  required,
  isMinLength(8),
  isMaxLength(20),
  isPasswordSafe
];

export const signinPasswordValidation = [
  required,
  isMinLength(8),
  isMaxLength(20)
];
export const salaryValidation = [required, isValidSalary];

export const mobileNumberValidation = [required, isMobileNumber];

export const genderValidation = [required];

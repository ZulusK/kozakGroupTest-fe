export const required = value => value ? undefined : 'Required'

export const isMinLength = minLength => value =>
  value && value.length >= minLength
    ? undefined
    : `Must contain minimum ${minLength} characters`

export const isMaxLength = maxLength => value =>
  value && value.length <= maxLength
    ? undefined
    : `Must contain maximum ${maxLength} characters`

export const isExactLength = exactLength => value =>
  value && value.length === exactLength
    ? undefined
    : `Must be ${exactLength} characters long`

export const isNumber = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const isValidName = value => value && /^[a-zA-Z'.-\s]*$/.test(value) ? undefined : 'Please enter a valid name'

export const isValidEmail = value =>
  value && !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
    ? 'Invalid email address'
    : undefined

export const isPasswordSafe = value =>
  value && /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(value)
    ? undefined
    : 'This password isn\'t safe. It should contain [a-z, A-Z, 0-9, and one of !,@,#,$,%,^,&,*]'

export const isValidDiscount = value =>
  value && value < 100 && value >= 0
    ? undefined
    : !value
      ? undefined
      : 'Please enter a valid discount'

export const mobileNumberValidation = [
  required,
  isNumber,
  isExactLength(10),
]

export const fullnameValidation = [
  isValidName,
  isMinLength(2),
  isMaxLength(20),
]

export const emailValidation = [
  required,
  isValidEmail,
]

export const passwordValidation = [
  required,
  isMinLength(8),
  isMaxLength(20),
  isPasswordSafe,
]

export const signinPasswordValidation = [
  required,
  isMinLength(8),
  isMaxLength(20),
]

export const cardValidation = [
  required,
  isNumber,
  isMinLength(16),
  isMaxLength(16),
]

export const cardDateValidation = [
  required,
  isNumber,
  isMaxLength(4),
  isMinLength(4),
]

export const cvvValidation = [
  required,
  isNumber,
  isMaxLength(3),
  isMinLength(3),
]

export const priceValidation = [
  required,
  isNumber,
]

export const discountValidation = [
  isNumber,
  isValidDiscount,
]

export default {
  mobileNumberValidation,
  fullnameValidation,
  emailValidation,
  passwordValidation,
  cardValidation,
  cardDateValidation,
  cvvValidation,
}

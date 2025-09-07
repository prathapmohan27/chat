export const ERROR_MESSAGES: Record<string, (error?: any) => string> = {
  required: () => 'This field is required',
  email: () => 'Enter a valid email address',
  minlength: (error) => `Minimum length is ${error.requiredLength}`,
  maxlength: (error) => `Maximum length is ${error.requiredLength}`,
  pattern: () => 'Invalid format',

  // Strong password custom
  minLowercase: () => 'Must contain at least 1 lowercase letter',
  minUppercase: () => 'Must contain at least 1 uppercase letter',
  minNumbers: () => 'Must contain at least 1 number',
  minSymbols: () => 'Must contain at least 1 special character',
  mismatch: () => 'Values do not match',
};

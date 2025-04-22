export const lowerCaseRegex = /(?=.*[a-z])\w+/;
export const upperCaseRegex = /(?=.*[A-Z])\w+/;
export const numberRegex = /\d/;
export const specialCharcterRegex = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

export const checkRegex = (str: string, regex: RegExp) => {
  return regex.test(str);
};

export const phoneNumberWoPlus = (countryCode: string, phoneNumber: string) => {
  return `${countryCode.replace("+", "")}${phoneNumber}`;
};

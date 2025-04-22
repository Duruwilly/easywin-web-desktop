import { z } from "zod";
import {
  lowerCaseRegex,
  upperCaseRegex,
  specialCharcterRegex,
  numberRegex,
} from "../../utils/index";

export const phone_number = z
  .string({ required_error: "Please enter your mobile number" })
  .trim()
  .min(9, { message: "Phone number can not be less than 9 digits." })
  .max(15, { message: "Phone number can not be more than 15 digits." })
  .superRefine((val, ctx) => {
    if (upperCaseRegex.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Phone Number can not contain uppercase letters.",
      });
    }
    if (lowerCaseRegex.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Phone Number can not contain lowercase letters.",
      });
    }
    if (specialCharcterRegex.test(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Phone Number can not contain special letters.",
      });
    }
  });

export const password = z
  .string({ required_error: "Password is required." })
  .min(5, { message: "Password must be at least 5 characters long." });

export const LoginSchema = z.object({
  phone_number,
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters long." })
    .or(z.literal(""))
    .optional(),
  otp: z.string().optional(),
});

export const RegisterOneSchema = z.object({
  phone_number,
  password,
});

export const RegisterSchema = z.object({
  first_name: z
    .string({ required_error: "First name is required" })
    .trim()
    .min(3, { message: "Last name is required." })
    .refine(
      (value) => numberRegex.test(value) === false,
      "Numbers not allowed."
    ),
  last_name: z
    .string({ required_error: "First name is required" })
    .trim()
    .min(3, { message: "Last name is required." })
    .refine(
      (value) => numberRegex.test(value) === false,
      "Numbers not allowed."
    ),
  email: z.string().trim().optional(),
  invitation_code: z.string().trim().optional(),
});

export type TLogin = z.infer<typeof LoginSchema>;
export type TRegister = z.infer<typeof RegisterSchema>;
export type TRegisterOne = z.infer<typeof RegisterOneSchema>;

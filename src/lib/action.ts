"use server";
import z from "zod";

let partnerWithUs = z.object({
  name: z.string().min(3, "Name is too short").max(32, "Name is too long"),
  phone: z
    .string()
    .min(10, "Please enter a valid number")
    .max(10, "Please enter a valid number")
    .regex(/^[0-9]+$/, "Please enter a valid number"),
  email: z.string().email("Please provide a valid email"),
  pincode: z
    .string()
    .min(6, "Please enter a valid pincode")
    .max(6, "Please enter a valid pincode"),
  comments: z.string(),
});

export const partnerWithUsForm = async (prevState: any, formData: any) => {
  const credentials = Object.fromEntries(formData);
  console.log("credentials", credentials);

  const validateData = partnerWithUs.safeParse(credentials);
  console.log("validated", validateData.data);

  if (!validateData.success) {
    return {
      errors: validateData.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to create employee.",
    };
  }
};

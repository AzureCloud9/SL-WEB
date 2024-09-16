import { z } from "zod";

// Define your schema and add subject to the schema
export const formSchema = z.object({
  first_name: z.string().nonempty("Voornaam is verplicht"),
  last_name: z.string().optional(),
  email: z.string().email("Ongeldig e-mailadres"),
  subject: z.string().nonempty("Onderwerp is verplicht"), // Add subject here
  message: z.string().min(10, "Bericht moet minimaal 10 tekens lang zijn"), // Add message here
  country: z.string().optional(),
  street_address: z.string().optional(),
  postal_code: z.string().optional(),
  city: z.string().optional(),
  sender_first_name: z.string().optional(),
  sender_last_name: z.string().optional(),
});

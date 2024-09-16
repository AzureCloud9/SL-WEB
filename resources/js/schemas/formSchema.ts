import { z } from "zod";

export const formSchema = z.object({
  first_name: z.string().nonempty("Voornaam is verplicht"),
  last_name: z.string().nonempty("Achternaam is verplicht"),
  street_address: z.string().nonempty("Adres is verplicht"),
  postal_code: z.string().nonempty("Postcode is verplicht"),
  city: z.string().nonempty("Stad is verplicht"),
  country: z.string().nonempty("Land is verplicht"),
  sender_first_name: z.string().optional(),
  sender_last_name: z.string().optional(),
  email: z.string().email("Email is verplicht").optional(),
});

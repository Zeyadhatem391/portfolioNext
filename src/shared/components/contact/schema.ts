import z from "zod";

export const Contact = (t: (key: string) => string) =>
    z.object({
        name: z
            .string()
            .optional(),

        email: z
            .email(t("validation.email"))
            .trim()
            .toLowerCase(),

        message: z
            .string()
            .trim()
            .min(10, t("validation.message")),
    });

export type ContactInput = z.infer<ReturnType<typeof Contact>>;
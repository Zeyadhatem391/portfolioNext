"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Contact, ContactInput } from "./schema";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const t = useTranslations("Contact");

  const formSchema = Contact(t);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(formSchema),
    mode: "all",
  });

  const onSubmit = async (data: ContactInput) => {
    console.log("data:", data);

    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: data.name,
        email: data.email,
        message: data.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
    );

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label className="cursor-pointer" htmlFor="name">
          {t("input_1.label")}
          <span className="ml-1 text-xs text-muted-foreground">
            ({t("optional")})
          </span>
        </Label>

        <Input
          id="name"
          type="text"
          placeholder={t("input_1.placeholder")}
          aria-invalid={!!errors.name}
          {...register("name")}
        />

        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          className={cn("cursor-pointer", errors.email && "text-red-500")}
          htmlFor="email"
        >
          {t("input_2.label")}
          <span className="ml-1 text-red-500">*</span>
        </Label>

        <Input
          id="email"
          type="email"
          placeholder={t("input_2.placeholder")}
          aria-invalid={!!errors.email}
          {...register("email")}
        />

        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label
          className={cn("cursor-pointer", errors.message && "text-red-500")}
          htmlFor="message"
        >
          {t("input_3.label")}
          <span className="ml-1 text-red-500">*</span>
        </Label>

        <Textarea
          id="message"
          placeholder={t("input_3.placeholder")}
          className="min-h-[140px] resize-none"
          aria-invalid={!!errors.message}
          {...register("message")}
        />

        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="h-9 w-full cursor-pointer"
      >
        {isSubmitting ? "Sending..." : t("btn")}
      </Button>
    </form>
  );
}

export default ContactForm;

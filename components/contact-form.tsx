"use client";

import type React from "react";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { CheckCircle2, SendIcon } from "lucide-react";
import Image from "next/image";
import emailJs from "@emailjs/browser";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requestType: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!formData.email || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.requestType) {
      newErrors.requestType = "Please select a request type.";
    }

    if (!formData.message || formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, requestType: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const res = await emailJs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          request_type: formData.requestType,
          message: formData.message,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        }
      );
      if (res.status === 200) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        toast({
          title: "Request Submitted",
          description: "Thank you for your request. I'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          requestType: "",
          message: "",
        });
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "An error occurred while sending your request.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border bg-card p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle2 className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">Request Submitted</h3>
        <p className="mt-2 text-muted-foreground">
          Thank you for your request. I'll get back to you as soon as possible.
        </p>
        <Button className="mt-6" onClick={() => setIsSubmitted(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <section id="contact" className="container mb-16 px-3 md:px-0">
      <div className="mx-auto md:max-w-4xl">
        <div className="text-center mb-8 flex flex-col items-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question or want to connect? Send me a message.
          </p>
          <Image
            src="/jeff.jpg"
            className="rounded-full mt-4"
            alt="Jeff"
            width={200}
            height={200}
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-sm font-medium text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Your email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-sm font-medium text-destructive">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="requestType">Request Type</Label>
            <Select
              onValueChange={handleSelectChange}
              value={formData.requestType}
            >
              <SelectTrigger id="requestType">
                <SelectValue placeholder="Select a request type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="consulting">Consulting</SelectItem>
                <SelectItem value="hiring">Hiring</SelectItem>
                <SelectItem value="collaboration">Collaboration</SelectItem>

                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.requestType && (
              <p className="text-sm font-medium text-destructive">
                {errors.requestType}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              placeholder="Please provide details about your request"
              className="min-h-32"
              value={formData.message}
              onChange={handleChange}
            />
            {errors.message && (
              <p className="text-sm font-medium text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          <Button type="submit" className="w-fit" disabled={isSubmitting}>
            {isSubmitting ? (
              "Submitting..."
            ) : (
              <>
                <span>Submit Request</span>
                <SendIcon className="rotate-45 h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  );
}

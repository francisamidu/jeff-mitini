"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { subscribeToNewsletter } from "@/lib/api";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function Newsletter() {
  const [user, setUser] = useState({
    email: "",
    fullName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await subscribeToNewsletter(user.email, user.fullName);
      setIsSuccess(true);
      setUser({ email: "", fullName: "" });
      toast(
        "You have been added to the newsletter. Check your email for confirmation."
      );
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-purple-100 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-2">Newsletter</h3>
      <p className="text-gray-600 text-sm mb-4">
        Subscribe to my newsletter and I'll keep you posted with the latest
        updates!
      </p>

      {isSuccess ? (
        <div className="bg-green-50 text-green-800 p-3 rounded-md text-sm">
          Thank you for subscribing to my newsletter!
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div>
            <Label htmlFor="name" className="font-medium">
              Full name <span className="text-red-500">*</span>
            </Label>
            <Input
              type="text"
              placeholder="Enter your full name"
              value={user.fullName}
              onChange={(e) => setUser({ ...user, fullName: e.target.value })}
              required
              className="flex-1 mt-2"
            />
          </div>
          <div>
            <Label htmlFor="name" className="font-medium">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              required
              className="flex-1 mt-2"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="group bg-secondary hover:bg-secondary/90 mt-2"
          >
            {isSubmitting ? "..." : "Subscribe"}
          </Button>
        </form>
      )}

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
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
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            className="group bg-secondary hover:bg-secondary/90"
          >
            {isSubmitting ? "..." : "Subscribe"}
          </Button>
        </form>
      )}

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </div>
  );
}

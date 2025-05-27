"use client"

import type React from "react"
import { useState } from "react"
import { submitComment } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function CommentForm({ articleId }: { articleId: number }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await submitComment(articleId, formData)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        website: "",
        comment: "",
      })
    } catch (err) {
      setError("Failed to submit comment. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="mb-8">
      {submitSuccess && (
        <div className="bg-green-50 text-green-800 p-4 mb-4 rounded">
          Your comment has been submitted and is awaiting moderation.
        </div>
      )}

      {error && <div className="bg-red-50 text-red-800 p-4 mb-4 rounded">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name *
            </label>
            <Input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email *
            </label>
            <Input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>
        </div>
        <div>
          <label htmlFor="website" className="block text-sm font-medium mb-1">
            Website
          </label>
          <Input type="url" id="website" name="website" value={formData.website} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium mb-1">
            Comment *
          </label>
          <Textarea id="comment" name="comment" required rows={5} value={formData.comment} onChange={handleChange} />
        </div>
        <Button type="submit" disabled={isSubmitting} className="bg-purple-600 hover:bg-purple-700">
          {isSubmitting ? "Submitting..." : "Submit Comment"}
        </Button>
      </form>
    </div>
  )
}

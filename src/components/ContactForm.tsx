
"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { companyInfo } from "@/lib/constants";

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formsubmit.co/ajax/0b05023fb5a6e6c48ebb78fb94e8cc45', {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
            title: "Message Sent!",
            description: "Thank you for reaching out. We'll get back to you soon.",
        });
        (event.target as HTMLFormElement).reset();
      } else {
        const result = await response.json();
        toast({
            title: "Submission Error",
            description: result.message || "Something went wrong. Please try again.",
            variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Could not submit the form. Please check your connection.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        {/* FormSubmit Hidden Fields */}
        <input type="hidden" name="_subject" value="New Contact Form Submission!" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="text" name="_honey" style={{ display: 'none' }} />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_cc" value={companyInfo.email} />


        <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" placeholder="Your Name" required disabled={loading} />
        </div>
        <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="your@email.com" required disabled={loading} />
            {/* This tells FormSubmit to use the user's email as the Reply-To address */}
            <input type="hidden" name="_replyto" />
        </div>
        <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" placeholder="How can we help you?" className="min-h-[120px]" required disabled={loading} />
        </div>
        <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {loading ? "Sending..." : "Send Message"}
        </Button>
    </form>
  );
}

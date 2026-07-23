"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "SaaS Dashboard",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const projectOptions = [
    "SaaS Dashboard",
    "Education & LMS",
    "Waitlist & Landing",
    "Booking & Portal",
    "Other Tech Build",
  ];

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = "Please tell me a bit more about your project (min. 10 chars)";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // MOCK EMAIL DELIVERY
    // To plug in a real email backend:
    // 1. Install resend: `npm install resend`
    // 2. Create a Next.js Server Action in `src/app/actions.ts`
    // 3. Import and call the action here: `await sendEmail(formData)`
    // Example SMTP integration:
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate API roundtrip
      setSuccess(true);
      setFormData({ name: "", email: "", projectType: "SaaS Dashboard", message: "" });
    } catch (err) {
      console.error("Failed to send message:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Contact Details (Left Column) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="text-xs font-bold text-accent uppercase tracking-widest bg-accent-glow px-3 py-1 rounded border border-accent/20">
                Get In Touch
              </span>
              <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl leading-tight">
                Let's build <br />
                something serious.
              </h1>
              <p className="mt-4 text-base text-foreground-muted leading-relaxed">
                Whether you need a high-end SaaS dashboard, an interactive educational LMS, or a razor-sharp landing page, I can translate your vision into clean, production-ready code.
              </p>
            </div>

            {/* Direct contact alternatives */}
            <div className="border-t border-zinc-900 pt-8 flex flex-col gap-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-2">
                  Direct Inquiries
                </h3>
                <a
                  href="mailto:ishmaelharrydeckor@gmail.com"
                  className="text-lg font-medium text-foreground hover:text-accent transition-colors duration-200"
                >
                  ishmaelharrydeckor@gmail.com
                </a>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-2">
                  Location & Timeline
                </h3>
                <p className="text-sm text-foreground-muted">
                  Accra, Ghana & Remote (GMT). Active project capacity available. Typical response time is under 12 hours.
                </p>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-foreground-muted mb-2">
                  Networks
                </h3>
                <div className="flex gap-4 text-sm font-semibold">
                  <a href="https://github.com/ishmaelharrydeckor" target="_blank" rel="noreferrer" className="text-foreground hover:text-accent transition-colors">GitHub</a>
                  <span className="text-zinc-800">/</span>
                  <a href="https://www.linkedin.com/in/ishmaelharrydeckor" target="_blank" rel="noreferrer" className="text-foreground hover:text-accent transition-colors">LinkedIn</a>
                  <span className="text-zinc-800">/</span>
                  <a href="https://x.com/DeckorHarry" target="_blank" rel="noreferrer" className="text-foreground hover:text-accent transition-colors">Twitter</a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form (Right Column) */}
          <div className="lg:col-span-7 rounded-2xl border border-zinc-800/80 bg-[#0d0d0e] p-8 md:p-10 relative overflow-hidden">
            {success ? (
              <div className="flex flex-col items-center text-center py-12">
                <div className="rounded-full bg-accent-glow p-3 border border-accent/20 text-accent mb-6">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Message Sent Successfully
                </h3>
                <p className="mt-3 text-sm text-foreground-muted max-w-sm">
                  Thanks for reaching out! I have received your request and will get back to you shortly to discuss your project details.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-8 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-accent/40 text-foreground px-6 py-2.5 text-xs font-bold tracking-wider hover:text-accent transition-all duration-300"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full rounded-lg bg-zinc-950 border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors ${
                      errors.name ? "border-red-500/60" : "border-zinc-850"
                    }`}
                    placeholder="Enter your name"
                  />
                  {errors.name && (
                    <span className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full rounded-lg bg-zinc-950 border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors ${
                      errors.email ? "border-red-500/60" : "border-zinc-850"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Project Type */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                    Project Focus
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full rounded-lg bg-zinc-950 border border-zinc-850 px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors"
                  >
                    {projectOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-zinc-950">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-foreground-muted">
                    Project Brief
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full rounded-lg bg-zinc-950 border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-accent transition-colors resize-none ${
                      errors.message ? "border-red-500/60" : "border-zinc-850"
                    }`}
                    placeholder="Describe your design objectives, target launch date, and features..."
                  />
                  {errors.message && (
                    <span className="text-xs text-red-400 flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3.5 w-3.5" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-4 rounded-lg bg-accent text-zinc-950 px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-accent/90 disabled:opacity-50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(212,165,39,0.25)] cursor-pointer"
                >
                  {isSubmitting ? (
                    "SENDING..."
                  ) : (
                    <>
                      SUBMIT BRIEF
                      <Send className="h-3.5 w-3.5" />
                    </>
                  )}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, UploadCloud, Loader2, ArrowRight } from "lucide-react";

export default function InquiryForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Failed to submit inquiry.");
      }

      setStatus("success");
      form.reset();
      setFileName("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again or email us directly."
      );
    }
  };

  if (status === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
        className="bg-white/90 backdrop-blur-md p-8 sm:p-12 rounded-3xl border border-stone-200/80 shadow-xl shadow-stone-900/5 text-center"
      >
        <div className="w-16 h-16 bg-[#2CB6C4]/10 text-[#2CB6C4] rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-serif text-[#16393C] tracking-tight mb-3">
          Enquiry Submitted
        </h3>
        <p className="text-[#16393C]/80 max-w-md mx-auto text-sm sm:text-base leading-relaxed mb-8">
          Thank you for contacting Rawmin Skinology. Our team will review your enquiry and get back to you shortly.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="apple-press rounded-full bg-[#2CB6C4] hover:bg-[#239DAA] text-white px-7 py-3 text-xs uppercase tracking-widest font-semibold transition-colors shadow-md"
        >
          Submit Another Enquiry
        </button>
      </motion.div>
    );
  }

  const inputClass =
    "w-full min-h-[48px] rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-base sm:text-sm text-[#16393C] placeholder:text-stone-400 focus:bg-white focus:border-[#2CB6C4] focus:ring-4 focus:ring-[#2CB6C4]/15 focus:outline-none transition-all duration-200";
  const selectClass =
    "w-full min-h-[48px] rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-base sm:text-sm text-[#16393C] focus:bg-white focus:border-[#2CB6C4] focus:ring-4 focus:ring-[#2CB6C4]/15 focus:outline-none transition-all duration-200";

  return (
    <div className="bg-white/95 backdrop-blur-md p-6 sm:p-10 rounded-3xl border border-[#8DE3E8]/70 shadow-xl">
      <div className="mb-8">
        <h3 className="text-2xl sm:text-3xl font-serif text-[#16393C] tracking-tight">
          Share Your Product Requirements
        </h3>
        <p className="text-xs sm:text-sm text-stone-500 mt-1.5 leading-relaxed">
          Whether you are launching a new beauty brand, developing a new product or looking for a reliable manufacturing partner, share your requirements with us.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Honeypot field for bot spam prevention */}
        <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="e.g. Maya Sharma"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Company / Brand Name *
            </label>
            <input
              type="text"
              name="company"
              required
              placeholder="e.g. Aura Botanics"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="name@brand.com"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 99103 93383"
              className={inputClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Country
            </label>
            <input
              type="text"
              name="country"
              defaultValue="India"
              placeholder="e.g. India, UAE, UK, USA"
              className={inputClass}
            />
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Product Category *
            </label>
            <select name="category" required defaultValue="Skin Care" className={selectClass}>
              <option value="Skin Care">Skin Care</option>
              <option value="Hair Care">Hair Care</option>
              <option value="Body Care">Body Care</option>
              <option value="Bath & Shower">Bath &amp; Shower</option>
              <option value="Lip Care">Lip Care</option>
              <option value="Men's Grooming">Men’s Grooming</option>
              <option value="Baby Care">Baby Care</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              What are you looking for? *
            </label>
            <select name="lookingFor" required defaultValue="Custom Formulation" className={selectClass}>
              <option value="Custom Formulation">Custom Formulation</option>
              <option value="Private Label">Private Label</option>
              <option value="Product Manufacturing">Product Manufacturing</option>
              <option value="Product Development">Product Development</option>
              <option value="Packaging Support">Packaging Support</option>
              <option value="Regulatory Support">Regulatory Support</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
              Estimated Quantity / MOQ
            </label>
            <input
              type="text"
              name="quantity"
              placeholder="e.g. 1,000 units / 5,000 units"
              className={inputClass}
            />
          </div>
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
            Message / Requirements *
          </label>
          <textarea
            name="message"
            required
            rows={4}
            placeholder="Tell us about your product idea, category, positioning, ingredients, packaging preferences, or target launch deadline..."
            className={`${inputClass} resize-y min-h-[110px]`}
          />
        </div>

        <div>
          <label className="block text-[11px] font-semibold text-stone-700 uppercase tracking-wider mb-1.5">
            Upload Reference <span className="text-stone-400 font-normal lowercase">(optional .pdf, .doc, image)</span>
          </label>
          <div className="flex items-center gap-3">
            <label className="apple-press cursor-pointer inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-dashed border-stone-300 hover:border-[#2CB6C4] bg-stone-50/70 hover:bg-stone-50 text-xs text-stone-700 transition-colors">
              <UploadCloud className="w-4 h-4 text-[#2CB6C4]" />
              <span className="font-medium">{fileName || "Attach reference brief or artwork"}</span>
              <input
                type="file"
                name="reference"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setFileName(e.target.files[0].name);
                  }
                }}
              />
            </label>
            {fileName && (
              <button
                type="button"
                onClick={() => setFileName("")}
                className="text-xs text-red-600 hover:text-red-700 font-medium underline"
              >
                Remove
              </button>
            )}
          </div>
        </div>

        <AnimatePresence>
          {status === "error" && (
            <motion.div 
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="p-3.5 bg-red-50/90 border border-red-200 text-red-800 text-xs rounded-xl flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pt-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="apple-press w-full min-h-[48px] rounded-xl bg-[#2CB6C4] hover:bg-[#239DAA] text-white text-xs font-semibold uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#2CB6C4]/25 disabled:opacity-60 cursor-pointer"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Enquiry →</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

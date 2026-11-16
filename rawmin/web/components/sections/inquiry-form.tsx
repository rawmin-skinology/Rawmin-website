"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle, Loader2 } from "lucide-react";
import { SITE } from "@/lib/constants";

function InquiryFormContent() {
  const searchParams = useSearchParams();

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "India",
    category: "Skin Care & Skin Protection",
    lookingFor: "Custom Formulation",
    moq: "1,000 units",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Auto-prefill from URL search parameters if arriving from a Product detail page or Category CTA
  useEffect(() => {
    if (!searchParams) return;
    const cat = searchParams.get("category");
    const prod = searchParams.get("product");
    const req = searchParams.get("req");

    if (cat || prod || req) {
      setFormData((prev) => {
        let matchedCategory = prev.category;
        if (cat) {
          if (cat.toLowerCase().includes("skin")) matchedCategory = "Skin Care & Skin Protection";
          else if (cat.toLowerCase().includes("hair")) matchedCategory = "Hair Care & Hair Protection";
          else if (cat.toLowerCase().includes("body")) matchedCategory = "Body Care";
          else if (cat.toLowerCase().includes("lip")) matchedCategory = "Lip Care";
          else if (cat.toLowerCase().includes("bath") || cat.toLowerCase().includes("shower")) matchedCategory = "Bath & Shower";
          else if (cat.toLowerCase().includes("men")) matchedCategory = "Men's Grooming";
          else if (cat.toLowerCase().includes("baby")) matchedCategory = "Baby Care";
          else matchedCategory = cat;
        }

        let prefilledMessage = prev.message;
        if (prod && !prev.message) {
          prefilledMessage = `Enquiry regarding formulation, testing and contract manufacturing for ${prod} (${cat || "Beauty & Personal Care"}). Please share formulation specifications, sample availability, and production lead times.`;
        } else if (req && !prev.message) {
          prefilledMessage = `Enquiry regarding ${req}.`;
        }

        return {
          ...prev,
          category: matchedCategory,
          message: prefilledMessage,
        };
      });
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.fullName.trim() || !formData.companyName.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError("Please fill in all required fields marked with an asterisk (*).");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          company: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          country: formData.country,
          category: formData.category,
          lookingFor: formData.lookingFor,
          quantity: formData.moq,
          message: formData.message,
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error || "Failed to submit inquiry.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again or email us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      phone: "",
      country: "India",
      category: "Skin Care & Skin Protection",
      lookingFor: "Custom Formulation",
      moq: "1,000 units",
      message: "",
    });
  };

  return (
    <section id="inquiry-section" className="py-20 sm:py-24 bg-[#EDF8F9] text-[#16393C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#144246] leading-tight">
                Share Your Product Requirements
              </h2>
              <p className="mt-4 text-base text-[#2C5256] leading-relaxed font-normal">
                Whether you are launching a new beauty brand, developing a new product or looking for a reliable manufacturing partner, share your requirements with us.
              </p>
            </div>

            <div className="bg-white border border-[#B2E8EB] rounded-3xl p-6 sm:p-8 space-y-5 shadow-xs">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#2CB6C4]/10 flex items-center justify-center shrink-0 text-[#2CB6C4]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#136B75] font-semibold">
                    Email
                  </span>
                  <a
                    href="mailto:info@rawminskinology.com"
                    className="text-sm font-semibold text-[#144246] hover:text-[#2CB6C4] transition block"
                  >
                    info@rawminskinology.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#2CB6C4]/10 flex items-center justify-center shrink-0 text-[#2CB6C4]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#136B75] font-semibold">
                    Phone
                  </span>
                  <div className="text-sm font-semibold text-[#144246] flex flex-wrap gap-2">
                    <a href="tel:+919910393383" className="hover:text-[#2CB6C4] transition">+91 99103 93383</a>
                    <span>,</span>
                    <a href="tel:+919311422855" className="hover:text-[#2CB6C4] transition">+91 93114 22855</a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#2CB6C4]/10 flex items-center justify-center shrink-0 text-[#2CB6C4]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#136B75] font-semibold">
                    WhatsApp
                  </span>
                  <a
                    href="https://wa.me/919910393383"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-[#144246] hover:text-[#2CB6C4] transition block"
                  >
                    +91 99103 93383
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-full bg-[#2CB6C4]/10 flex items-center justify-center shrink-0 text-[#2CB6C4]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono uppercase tracking-wider text-[#136B75] font-semibold">
                    Location
                  </span>
                  <p className="text-xs text-[#2C5256] leading-relaxed mt-0.5">
                    2, Site No. 2, Plot No. NH-19, Block A, DLF Industrial Area, Sector 32, Faridabad, Haryana 121003
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Start Your Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-[#B2E8EB] rounded-3xl p-6 sm:p-10 shadow-xs">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-[#144246]">
                  Share Your Product Requirements
                </h3>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 bg-[#2CB6C4]/15 text-[#2CB6C4] rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#144246]">
                    Enquiry Submitted
                  </h4>
                  <p className="text-sm text-[#2C5256] max-w-md mx-auto leading-relaxed">
                    Thank you for contacting Rawmin Skinology. Our team will review your enquiry and get back to you shortly.
                  </p>
                  <button
                    onClick={handleReset}
                    className="mt-4 px-6 py-2.5 rounded-full bg-[#2CB6C4] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#239DAA] transition cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {error && (
                    <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#144246] font-semibold mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Maya Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#144246] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#144246] font-semibold mb-1">
                        Company / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Aura Botanics"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#144246] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#144246] font-semibold mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@brand.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#144246] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#144246] font-semibold mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 99103 93383"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#144246] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#144246] font-semibold mb-1">
                        Country
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. India"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#144246] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#144246] font-semibold mb-1">
                        Product Category *
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#144246] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4]"
                      >
                        <option value="Skin Care & Skin Protection">Skin Care &amp; Skin Protection</option>
                        <option value="Hair Care & Hair Protection">Hair Care &amp; Hair Protection</option>
                        <option value="Body Care">Body Care</option>
                        <option value="Lip Care">Lip Care</option>
                        <option value="Bath & Shower">Bath &amp; Shower</option>
                        <option value="Men's Grooming">Men’s Grooming</option>
                        <option value="Baby Care">Baby Care</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#144246] font-semibold mb-1">
                        What are you looking for? *
                      </label>
                      <select
                        value={formData.lookingFor}
                        onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#144246] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4]"
                      >
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
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#144246] font-semibold mb-1">
                        Estimated Quantity / MOQ
                      </label>
                      <input
                        type="text"
                        value={formData.moq}
                        onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                        placeholder="e.g. 1,000 units"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#144246] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#144246] font-semibold mb-1">
                      Message / Requirements *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details on your product vision, ingredients, or target timelines..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#144246] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 rounded-xl bg-[#2CB6C4] hover:bg-[#239DAA] text-white text-xs font-semibold uppercase tracking-wider transition shadow-md flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Enquiry →</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function InquiryForm() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm font-mono text-[#2C5256]">Loading inquiry form...</div>}>
      <InquiryFormContent />
    </Suspense>
  );
}

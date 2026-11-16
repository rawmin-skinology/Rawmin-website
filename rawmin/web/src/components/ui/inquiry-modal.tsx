"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, AlertCircle, Phone, Mail, MessageSquare, Loader2 } from "lucide-react";
import { useInquiryModal } from "./inquiry-modal-context";
import { SITE } from "@/lib/constants";

export default function InquiryModal() {
  const { isOpen, closeInquiryModal, modalOptions } = useInquiryModal();

  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    country: "India",
    category: modalOptions.category || "Skin Care & Protection",
    lookingFor: modalOptions.lookingFor || "Custom Formulation",
    moq: "1,000 - 2,500 units",
    message: modalOptions.message || "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sync modal options if updated
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setError(null);
      setFormData((prev) => ({
        ...prev,
        category: modalOptions.category || prev.category || "Skin Care & Protection",
        lookingFor: modalOptions.lookingFor || prev.lookingFor || "Custom Formulation",
        message: modalOptions.message || prev.message || "",
      }));
    }
  }, [isOpen, modalOptions]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeInquiryModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeInquiryModal]);

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
        throw new Error(json.error || "Failed to submit inquiry. Please try again.");
      }

      setSubmitted(true);
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again or reach out to us directly."
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
      category: "Skin Care & Protection",
      lookingFor: "Custom Formulation",
      moq: "1,000 - 2,500 units",
      message: "",
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5 md:p-8 overflow-y-auto">
          {/* Backdrop with smooth blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={closeInquiryModal}
            className="fixed inset-0 bg-[#0c2022]/70 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-modal-title"
            className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#B2E8EB] overflow-hidden my-auto z-10 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-[#DEF2F4] via-[#E8F8F9] to-[#E0F5F7] px-6 sm:px-8 pt-6 pb-5 border-b border-[#B2E8EB] flex items-start justify-between relative">
              <div className="space-y-1 pr-8">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#2CB6C4]/15 border border-[#2CB6C4]/30 text-[#136B75] text-[11px] font-mono uppercase tracking-wider font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2CB6C4] animate-pulse" />
                  <span>Manufacturing &amp; Formulation Desk</span>
                </div>
                <h2
                  id="inquiry-modal-title"
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-[#144246] mt-1"
                >
                  Discuss Your Project
                </h2>
                <p className="text-xs sm:text-sm text-[#2C5256] leading-relaxed">
                  Tell us about your formulation, private label or manufacturing requirements. Our R&amp;D team will reply within 24 hours.
                </p>
              </div>

              {/* Close Button */}
              <button
                type="button"
                onClick={closeInquiryModal}
                aria-label="Close inquiry form"
                className="w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#16393C] hover:text-[#2CB6C4] flex items-center justify-center border border-[#B2E8EB] shadow-sm transition-all active:scale-95 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body / Scrollable Area */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1">
              {submitted ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in-50 duration-300">
                  <div className="w-16 h-16 bg-[#2CB6C4]/15 rounded-full flex items-center justify-center mx-auto text-[#2CB6C4]">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#144246]">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-sm text-[#2C5256] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting <strong>RAWMIN Skinology</strong>. Our technical development and formulation team has received your brief and will review your specifications promptly.
                    </p>
                  </div>

                  <div className="bg-[#EDF8F9] border border-[#B2E8EB] rounded-2xl p-4 max-w-md mx-auto text-left space-y-2 text-xs text-[#16393C]">
                    <p className="font-semibold text-[#136B75] uppercase tracking-wider text-[11px]">
                      Immediate Assistance Available:
                    </p>
                    <div className="flex flex-wrap gap-4 pt-1">
                      <a
                        href={`tel:${SITE.phone.replace(/[^0-9+]/g, "")}`}
                        className="inline-flex items-center gap-1.5 text-[#187580] font-semibold hover:underline"
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>{SITE.phone}</span>
                      </a>
                      <a
                        href={`https://wa.me/${SITE.whatsappNumber}`}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#187580] font-semibold hover:underline"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp Chat</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-3 flex items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={closeInquiryModal}
                      className="bg-[#2CB6C4] hover:bg-[#239DAA] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all shadow"
                    >
                      Done
                    </button>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="bg-transparent text-[#187580] hover:text-[#135A62] px-4 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  {/* Row 1: Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#16393C]/80 mb-1.5 font-semibold">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Maya Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#16393C] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#16393C]/80 mb-1.5 font-semibold">
                        Company / Brand Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Aura Botanics"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#16393C] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] transition"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#16393C]/80 mb-1.5 font-semibold">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. maya@brand.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#16393C] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#16393C]/80 mb-1.5 font-semibold">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#16393C] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] transition"
                      />
                    </div>
                  </div>

                  {/* Row 3: Category & Service Looking For */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#16393C]/80 mb-1.5 font-semibold">
                        Product Category
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#16393C] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] transition"
                      >
                        <option value="Skin Care & Protection">Skin Care &amp; Protection</option>
                        <option value="Skin Cleansers">Skin Cleansers</option>
                        <option value="Hair Care & Protection">Hair Care &amp; Protection</option>
                        <option value="Hair Cleansers">Hair Cleansers</option>
                        <option value="Body Care">Body Care</option>
                        <option value="Lip Care">Lip Care</option>
                        <option value="Bath & Shower">Bath &amp; Shower</option>
                        <option value="Custom Formulation">Custom Formulation / Multi-category</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#16393C]/80 mb-1.5 font-semibold">
                        Service Requirement
                      </label>
                      <select
                        value={formData.lookingFor}
                        onChange={(e) => setFormData({ ...formData, lookingFor: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#16393C] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] transition"
                      >
                        <option value="Custom Formulation">Custom Formulation R&amp;D</option>
                        <option value="Private Label">Private Label Quick Launch</option>
                        <option value="Contract Manufacturing">Contract Manufacturing (Cleanroom)</option>
                        <option value="Packaging Solutions">Packaging &amp; Bottle Assembly</option>
                        <option value="Lab Sampling">Lab Sampling &amp; Prototype Testing</option>
                      </select>
                    </div>
                  </div>

                  {/* Row 4: Estimated MOQ */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#16393C]/80 mb-1.5 font-semibold">
                      Estimated Production Quantity (MOQ)
                    </label>
                    <select
                      value={formData.moq}
                      onChange={(e) => setFormData({ ...formData, moq: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#16393C] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] transition"
                    >
                      <option value="1,000 - 2,500 units">1,000 - 2,500 units (Pilot Batch)</option>
                      <option value="2,500 - 5,000 units">2,500 - 5,000 units (Growth Batch)</option>
                      <option value="5,000 - 10,000 units">5,000 - 10,000 units (Established Brand)</option>
                      <option value="10,000+ units">10,000+ units (Commercial Production)</option>
                    </select>
                  </div>

                  {/* Row 5: Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-[#16393C]/80 mb-1.5 font-semibold">
                      Project Details &amp; Brief *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your product concept, target active ingredients, skin feel, desired packaging type, or timeline..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#B2E8EB] bg-[#FBF9F5] text-sm text-[#16393C] focus:outline-none focus:ring-2 focus:ring-[#2CB6C4] transition resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#2CB6C4] hover:bg-[#239DAA] text-white py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all shadow-md active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin text-white" />
                          <span>Submitting Your Project Brief...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Project Inquiry</span>
                          <Send className="w-4 h-4 text-[#FFE494]" />
                        </>
                      )}
                    </button>
                  </div>

                  {/* Trust indicator */}
                  <div className="flex items-center justify-between text-[11px] text-[#2C5256]/80 pt-1 border-t border-[#B2E8EB]/50">
                    <span>🔒 Confidential NDA protected formulations</span>
                    <span>Direct plant response &lt; 24h</span>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

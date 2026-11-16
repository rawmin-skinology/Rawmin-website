"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

interface InquiryModalOptions {
  category?: string;
  lookingFor?: string;
  message?: string;
}

interface InquiryModalContextType {
  isOpen: boolean;
  openInquiryModal: (options?: InquiryModalOptions) => void;
  closeInquiryModal: () => void;
  modalOptions: InquiryModalOptions;
}

const InquiryModalContext = createContext<InquiryModalContextType | undefined>(undefined);

export function InquiryModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState<InquiryModalOptions>({});

  const openInquiryModal = useCallback((options?: InquiryModalOptions) => {
    if (options) {
      setModalOptions(options);
    } else {
      setModalOptions({});
    }
    setIsOpen(true);
  }, []);

  const closeInquiryModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Universal event listener for data-open-inquiry, href="#inquiry", and clicks on "Discuss Your Project"
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const triggerElement = target.closest<HTMLElement>(
        '[data-open-inquiry], a[href="#inquiry"], a[href="/contact#inquiry-section"], button[data-action="discuss-project"]'
      );

      if (triggerElement) {
        e.preventDefault();
        e.stopPropagation();
        const category = triggerElement.getAttribute("data-category") || undefined;
        const lookingFor = triggerElement.getAttribute("data-looking-for") || undefined;
        openInquiryModal({ category, lookingFor });
        return;
      }

      // If any button or link text includes "Discuss Your Project" (case-insensitive) and wasn't already handled
      const clickable = target.closest<HTMLElement>("a, button");
      if (clickable) {
        const text = clickable.textContent?.trim().toLowerCase() || "";
        if (text.includes("discuss your project")) {
          e.preventDefault();
          e.stopPropagation();
          openInquiryModal();
        }
      }
    };

    const handleCustomOpen = (e: Event) => {
      const customEvent = e as CustomEvent<InquiryModalOptions>;
      openInquiryModal(customEvent.detail);
    };

    document.addEventListener("click", handleGlobalClick, true);
    window.addEventListener("rawmin:open-inquiry", handleCustomOpen as EventListener);

    return () => {
      document.removeEventListener("click", handleGlobalClick, true);
      window.removeEventListener("rawmin:open-inquiry", handleCustomOpen as EventListener);
    };
  }, [openInquiryModal]);

  // Lock body scroll when modal is active
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "scroll"; // Prevent layout shift from scrollbar disappearing
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
  }, [isOpen]);

  return (
    <InquiryModalContext.Provider
      value={{
        isOpen,
        openInquiryModal,
        closeInquiryModal,
        modalOptions,
      }}
    >
      {children}
    </InquiryModalContext.Provider>
  );
}

export function useInquiryModal() {
  const context = useContext(InquiryModalContext);
  if (!context) {
    throw new Error("useInquiryModal must be used within an InquiryModalProvider");
  }
  return context;
}


"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { BookingModal } from "@/components/modals/BookingModal";

interface BookingModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const BookingModalContext = createContext<BookingModalContextType | null>(null);

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) throw new Error("useBookingModal must be used within BookingModalProvider");
  return ctx;
}

export function BookingModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = useCallback(() => setIsOpen(true), []);
  const closeModal = useCallback(() => setIsOpen(false), []);

  return (
    <BookingModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeModal} />
    </BookingModalContext.Provider>
  );
}

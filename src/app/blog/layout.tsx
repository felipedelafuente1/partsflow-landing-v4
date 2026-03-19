import { BookingModalProvider } from "@/context/BookingModalContext";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <BookingModalProvider>{children}</BookingModalProvider>;
}

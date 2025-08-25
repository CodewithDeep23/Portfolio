"use client";
import { useEffect } from "react";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {

      // window.scrollTo(0, 0);
[]
      if (window.location.hash) {

        history.pushState(null, "", window.location.pathname);

        history.replaceState(null, "", window.location.pathname);
      }
    }
  }, []);

  return <>{children}</>;
}
/** @format */

"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function page() {
  const router = useRouter();
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("geethmani") === "true";

    if (!isAuthenticated) {
      router.push("/");
    }
  }, [router]);

  return <div>geethmani</div>;
}

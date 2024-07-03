"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PrivacyPolicyPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      router.push("/");
    }, 1000);
    return () => clearTimeout(timeoutId);
  });
  return <div>PrivacyPolicyPage</div>;
};

export default PrivacyPolicyPage;

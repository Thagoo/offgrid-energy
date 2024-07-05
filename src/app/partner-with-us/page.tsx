import PartnerWithUsForm from "@/components/partner-with-us";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { partnerWithUsForm } from "@/lib/action";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";

export const metadata: Metadata = {
  title: "Offgird Energy",
  description: "Offgrid installs solar in an all new way.",
  metadataBase: new URL("https://offgrid-website.vercel.app/"),
  openGraph: {
    images: "/assets/lander/offgrid-favicon.png",
  },
  icons: {
    icon: "/assets/lander/offgrid-favicon.png",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function PartnerWithUs() {
  return <PartnerWithUsForm />;
}

import { Metadata } from "next";
import Link from "next/link";
import React from "react";

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

export default function PrivacyPolicy() {
  return (
    <div className="flex justify-center pt-4 ">
      <div className="flex flex-col py-16 md:py-28 md:px-28 px-5">
        <p className="md:hidden text-xs md:text-base ml-auto mb-4">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
          / <span className="text-[#636363]">Privacy Policy</span>
        </p>
        <div className="flex justify-center items-center w-full">
          <h1 className="flex-1 text-center text-2xl md:text-4xl">
            Privacy Policy
          </h1>
          <p className="md:block hidden text-xs md:text-base">
            <Link href={"/"} className="hover:underline">
              Home
            </Link>
            / <span className="text-[#636363]">Privacy Policy</span>
          </p>
        </div>

        <article className="py-10 md:py-20">
          <p className="">
            Offgrid Energy (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
            respects the privacy of our website visitors and users
            (&quot;you&quot; or &quot;your&quot;). This Privacy Policy describes
            how we collect, use, and disclose your personal information when you
            visit our website (the &quot;Website&quot;) or use our services.
          </p>
          <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
          <h1>1. Information We Collect</h1>
          <p className=" md:mt-6 mt-3">
            We may collect the following types of information from you:
          </p>
          <ul className="list-disc px-4 py-4">
            <li>
              Personal Information: This includes information that can be used
              to identify you, such as your name, contact details (including
              phone number and email address), and property information. We
              collect this information when you request a quote, schedule a
              consultation, or contact us through the website.
            </li>
            <li>
              Non-Personal Information: This includes information that does not
              identify you personally, such as your browser type, operating
              system, IP address, and browsing activity on our website. This
              information is collected automatically when you visit the Website.
            </li>
          </ul>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>2. How We Use Your Information</h1>
          <p className=" md:mt-6 mt-3">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc px-4 py-4">
            <li>To respond to your inquiries and requests.</li>
            <li>
              To provide you with quotes and schedule consultations for solar
              panel installations.
            </li>
            <li>To improve the functionality and content of the Website.</li>
            <li>
              To send you marketing communications, but only with your consent
              (you can opt-out at any time).
            </li>
            <li>To comply with legal and regulatory requirements.</li>
          </ul>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>3. Sharing Your Information</h1>
          <p className=" md:mt-6 mt-3">
            We may share your information with third-party service providers who
            help us operate the Website and provide our services. These service
            providers are contractually obligated to keep your information
            confidential and secure. We will not share your personal information
            with any third-party for marketing purposes without your consent. We
            may disclose your information if required by law or to protect the
            rights and safety of ourselves or others.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article className="">
          <h1>4. Data Security</h1>
          <p className=" md:mt-6 mt-3 ">
            We take reasonable steps to protect your information from
            unauthorized access, disclosure, alteration, or destruction.
            However, no website or internet transmission is completely secure.
            We cannot guarantee the security of your information.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>5. Your Choices</h1>
          <p className=" md:mt-6 mt-3">
            You have choices regarding your information:
          </p>
          <ul className="list-disc px-4 py-4">
            <li>
              Access and Correction: You have the right to access and correct
              your personal information that we hold.
            </li>
            <li>
              Opt-Out of Marketing: You can opt-out of receiving marketing
              communications from us at any time.
            </li>
            <li>
              TContact Us: If you have any questions about this Privacy Policy
              or your choices, please contact us at{" "}
              <Link href={"mailto:support@getoffgrid.energy"}>
                support@getoffgrid.energy
              </Link>
            </li>
          </ul>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>6. Children&apos;s Privacy</h1>
          <p className=" md:mt-6 mt-3">
            Our website is not directed to children under the age of 18. We do
            not knowingly collect personal information from children under 18.
            If you are a parent or guardian and you believe your child has
            provided us with personal information, please contact us. We will
            take steps to delete the information from our records.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>7. Changes to this Privacy Policy</h1>
          <p className=" md:mt-6 mt-3">
            We may update this Privacy Policy from time to time. We will post
            any changes on the Website.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>8. Contact Us</h1>
          <p className=" md:mt-6 mt-3">
            If you have any questions about this Privacy Policy, please contact
            us at: support@getoffgrid.energy
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>9. Compliance with Indian Laws</h1>
          <p className=" md:mt-6 mt-3">
            This Privacy Policy is intended to comply with the Information
            Technology Act, 2000 and other applicable data privacy laws in
            India. By using our website, you consent to the collection, use, and
            disclosure of your information as described in this Privacy Policy.
          </p>
        </article>
      </div>
    </div>
  );
}

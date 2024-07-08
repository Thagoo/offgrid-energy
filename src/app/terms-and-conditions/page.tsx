import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function TermsAndConditions() {
  return (
    <div className="flex justify-center pt-4">
      <div className="flex flex-col py-16 md:py-28 md:px-28 px-5">
        <p className="md:hidden text-xs md:text-base ml-auto mb-4">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
          / <span className="text-[#636363]">Terms and Conditions</span>
        </p>
        <div className="flex justify-center items-center w-full">
          <h1 className="flex-1 text-center text-2xl md:text-4xl">
            Terms and Conditions
          </h1>
          <p className="md:block hidden text-xs md:text-base">
            <Link href={"/"} className="hover:underline">
              Home
            </Link>
            / <span className="text-[#636363]">Terms and Conditions</span>
          </p>
        </div>

        <article className="py-10 md:py-20">
          <p className="">
            These Terms and Conditions (&quot;Terms&quot;) govern your access to
            and use of the website operated by Offgrid Energy (&quot;us,&quot;
            &quot;we,&quot; or &quot;our&quot;). By accessing or using the
            website, you agree to be bound by these Terms. If you disagree with
            any part of the Terms, then you may not access or use the Website.
          </p>
          <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
          <h1>1. User Agreement</h1>
          <p className=" md:mt-6 mt-3">
            Your use of the Offgrid Energy website constitutes your agreement to
            these Terms. These Terms apply to all users of the website,
            regardless of whether they create an account.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>2. Information Collection and Use</h1>

          <ul className="list-disc px-4 py-4">
            <li>
              We may collect personal information from you, such as your name,
              contact details, and property information, when you request a
              quote or schedule a consultation.
            </li>
            <li>
              We will use this information to respond to your inquiries, provide
              quotes, and schedule appointments.
            </li>
            <li>
              We will comply with all applicable Indian laws and regulations
              regarding data privacy, including the Information Technology Act,
              2000.
            </li>
            <li>
              You can review our Privacy Policy for more information on how we
              collect, use, and disclose your personal information.
            </li>
          </ul>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>3. Intellectual Property</h1>
          <ul className="list-disc px-4 py-4">
            <li>
              The website and its original content, features, and functionality
              are and will remain the exclusive property of Offgrid Energy and
              its licensors. This includes, but is not limited to, trademarks,
              logos, copyrights, and patents.
            </li>
            <li>
              You may not reproduce, modify, distribute, transmit, display,
              sell, license, or create derivative works from the content on the
              website without our express written permission.
            </li>
          </ul>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article className="">
          <h1>4. Use of Website</h1>
          <p className=" md:mt-6 mt-3 ">
            You may use our website for personal, non-commercial purposes only.
            You agree not to:
          </p>
          <ul className="list-disc px-4 py-4">
            <li>
              Violate any Laws: This includes any laws or regulations applicable
              to solar panel installations, data privacy, or online conduct.
            </li>
            <li>
              Harm the Website: You will not use any device, software, or
              routine to interfere or attempt to interfere with the proper
              working of the website.
            </li>
            <li>
              Spread Malware: You will not upload or transmit any viruses,
              Trojan horses, or other malicious code.
            </li>
            <li>
              Impersonate Us: You will not impersonate Offgrid Energy or any of
              its employees or representatives.
            </li>
          </ul>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>5. Links to Third-Party Sites</h1>
          <p className=" md:mt-6 mt-3">
            Our website may contain links to third-party websites or services
            that are not owned or controlled by Offgrid Energy. We have no
            control over, and assume no responsibility for, the content, privacy
            policies, or practices of any third-party websites or services.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>6. Disclaimer</h1>
          <ul className="list-disc px-4 py-4">
            <li>
              Information Accuracy: The information on our website, including
              pricing and product specifications, is for informational purposes
              only and is subject to change without notice. We make no
              warranties, express or implied, about the accuracy, completeness,
              or reliability of the information on the website.
            </li>
            <li>
              Professional Advice: The information on the website is not a
              substitute for professional advice. We recommend consulting with a
              qualified solar energy professional before making any decisions
              about your solar panel installation, especially considering
              government subsidies and regulations applicable to your location
              in India.
            </li>
            <li>
              Suitability: We make no guarantees that our solar panel systems
              will be suitable for your specific needs or property.
            </li>
          </ul>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>7. Limitation of Liability</h1>
          <p className=" md:mt-6 mt-3">
            Offgrid Energy will not be liable for any damages arising out of or
            related to your use of the website, including but not limited to:
          </p>
          <ul className="list-disc px-4 py-4">
            <li>
              Direct, Indirect, or Consequential Damages: This includes any lost
              profits, lost data, or business interruption.
            </li>
            <li>
              Product Warranties: Warranties for Offgrid Energy products and
              services are provided separately and are not covered under these
              Terms.
            </li>
            <li>
              Third-Party Content: We are not liable for any damages arising
              from your use of any linked third-party websites or services.
            </li>
          </ul>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>8. Warranties and Disclaimers</h1>
          <ul className="list-disc px-4 py-4">
            <li>
              Offgrid Energy products and services are subject to separate
              warranties provided by the manufacturer or service provider. We
              make no warranties, express or implied, regarding the products or
              services offered on our website.
            </li>
            <li>
              We disclaim any warranties of merchantability or fitness for a
              particular purpose.
            </li>
          </ul>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>9. Termination</h1>
          <p className=" md:mt-6 mt-3">
            We may terminate or suspend your access to the website immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach these Terms.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>9. Termination</h1>
          <p className=" md:mt-6 mt-3">
            We may terminate or suspend your access to the website immediately,
            without prior notice or liability, for any reason whatsoever,
            including without limitation if you breach these Terms.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>10. Governing Law</h1>
          <p className=" md:mt-6 mt-3">
            These Terms will be governed by and construed in accordance with the
            laws of India. Any disputes arising out of or relating to these
            Terms will be subject to the exclusive jurisdiction of the courts in
            Karnataka.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>11. Changes to Terms</h1>
          <p className=" md:mt-6 mt-3">
            We may revise these Terms at any time by posting the revised Terms
            on the website. The revised Terms will be effective immediately upon
            posting. Your continued use of the website after the posting of the
            revised Terms constitutes your acceptance of the revised Terms.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>12. Entire Agreement</h1>
          <p className=" md:mt-6 mt-3">
            These Terms constitute the entire agreement between you and us
            regarding your use of the website.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>13. Sever-ability</h1>
          <p className=" md:mt-6 mt-3">
            If any provision of these Terms is held to be invalid or
            unenforceable, such provision shall be struck and the remaining
            provisions shall remain in full force and effect.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>14. Waiver</h1>
          <p className=" md:mt-6 mt-3">
            Our failure to enforce any right or provision of these Terms will
            not be considered a waiver of such right or provision.
          </p>
        </article>
        <div className="md:my-20 my-10 border-t-2 border-[#F6EBBB] w-full"></div>
        <article>
          <h1>15. Contact Us</h1>
          <p className=" md:mt-6 mt-3">
            If you have any questions about these Terms, please contact us at{" "}
            <Link href={"mailto:support@getoffgrid.energy"}>
              support@getoffgrid.energy
            </Link>
          </p>
        </article>
      </div>
    </div>
  );
}

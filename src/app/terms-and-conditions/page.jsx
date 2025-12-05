import Header1 from "@/components/header/Header1";
import Footer1 from "@/components/Footer/Footer1";

export const metadata = {
  title: "Terms & Conditions | Apex Surfaces Solution",
  description:
    "Official Terms & Conditions for Apex Surfaces Solution, defining website usage, product policies, liability, and data rights.",
};

export default function TermsAndConditions() {
  return (
    <>
    <Header1 />
    <div className="terms-page py-120">
      <div className="container">
        <h1 className="mb-4">Terms & Conditions</h1>
        <p>
          Welcome to <strong>Apex Surfaces Solution</strong>. By accessing or
          using our website, you agree to comply with the following Terms and
          Conditions. Please read them carefully before browsing, placing an
          order, or using any services on our site.
        </p>

        {/* SECTION 1 */}
        <h2 className="mt-5 mb-3">1. General Terms & Conditions</h2>

        <h4>Acceptable Use</h4>
        <p>
          Users agree not to use this website for any activity that may cause
          criminal or civil liability. This includes uploading harmful software,
          attempting to disrupt site operations, or engaging in unauthorized
          data access or interference.
        </p>

        <h4>Liability & Risk</h4>
        <p>
          All users access this website at their own risk. Apex Surfaces
          Solution is not responsible for losses or damages arising from use of
          the website, technical issues, or reliance on information provided.
        </p>

        <h4>Intellectual Property</h4>
        <p>
          All website content—including design, images, graphics, and branding—
          is owned by Apex Surfaces Solution or its licensors. No content may be
          reproduced, copied, or distributed without written permission.
        </p>

        <h4>Right to Modify Terms</h4>
        <p>
          We reserve the right to update or modify these Terms & Conditions at
          any time without notice. Access may be limited for users who violate
          these terms.
        </p>

        <h4>External Links</h4>
        <p>
          Third-party links on our site are provided for convenience only and do
          not imply endorsement. Apex Surfaces Solution is not responsible for
          the content or security of these external websites.
        </p>

        {/* SECTION 2 */}
        <h2 className="mt-5 mb-3">2. Product-Specific Conditions</h2>

        <h4>Color & Shade Variation</h4>
        <p>
          Natural marble, minerals, and engineered stones may vary in shade,
          pattern, and texture. Website images are for reference only and may
          not precisely match the final delivered product.
        </p>

        <h4>Ordering Samples</h4>
        <p>
          Customers are strongly advised to order samples before placing bulk
          orders. Apex Surfaces Solution does not accept claims based on color
          variation when samples were not reviewed beforehand.
        </p>

        <h4>Installation</h4>
        <p>
          Customers must hire experienced installers for proper stone handling.
          Installation of the product constitutes acceptance of the delivered
          material.
        </p>

        <h4>Delivery Requirements</h4>
        <p>
          Customers must ensure their delivery location is accessible for large
          carriers. Any damage must be reported immediately upon inspection, as
          per our delivery policy.
        </p>

        {/* SECTION 3 */}
        <h2 className="mt-5 mb-3">3. Data & Account Conditions</h2>

        <h4>Data Privacy</h4>
        <p>
          Users should refer to our Privacy Policy for information on data
          collection, cookies, IP addresses, and data usage practices.
        </p>

        <h4>Account Security</h4>
        <p>
          Users are responsible for maintaining the confidentiality of their
          account credentials and must report unauthorized access immediately.
        </p>

        <h4>Data Rights</h4>
        <p>
          Depending on applicable laws, users may request access, export, or
          deletion of their personal data. Requests can be made through our
          support team.
        </p>

        {/* CONTACT */}
        <h2 className="mt-5 mb-3">Contact Information</h2>
        <p>
          For questions regarding these Terms & Conditions, contact us at:
        </p>
        <ul>
          <li>
            <strong>Email:</strong> info@apexsurfacessolution.com
          </li>
          <li>
            <strong>Phone:</strong> +92-21-32424292
          </li>
        </ul>

        <p className="mt-4">
          &copy; {new Date().getFullYear()} Apex Surfaces Solution. All Rights
          Reserved.
        </p>
      </div>
    </div>
    <Footer1/>
    </>
  );
}

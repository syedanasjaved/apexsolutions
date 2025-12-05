import Header1 from "@/components/header/Header1";
import Footer1 from "@/components/Footer/Footer1";

export const metadata = {
  title: "Privacy Policy | Apex Surfaces Solution",
  description:
    "Privacy Policy outlining how Apex Surfaces Solution collects, uses, stores, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <>
    <Header1 />
    <div className="privacy-page py-120">
      <div className="container">
        <h1 className="mb-4">Privacy Policy</h1>

        <p>
          At <strong>Apex Surfaces Solution</strong>, we are committed to
          protecting your personal information and ensuring a safe browsing
          experience. This Privacy Policy explains what information we collect,
          how we use it, and the rights you have regarding your data.
        </p>

        {/* SECTION 1 */}
        <h2 className="mt-5 mb-3">1. Personal Information We Collect</h2>

        <h4>Personal Information</h4>
        <p>
          We may collect personal details such as your name, email address,
          phone number, company name, job title, or other contact information
          when you:
        </p>
        <ul>
          <li>Fill out a contact form</li>
          <li>Request a quote or inquiry</li>
          <li>Subscribe to newsletters or updates</li>
          <li>Interact with us through email or phone</li>
        </ul>

        <h4>Usage Data</h4>
        <p>
          We automatically collect non-personally identifiable information such
          as:
        </p>
        <ul>
          <li>Your IP address</li>
          <li>Browser type and version</li>
          <li>Device type</li>
          <li>Pages you visit and time spent</li>
          <li>Referring website or search query</li>
        </ul>
        <p>
          This data helps us analyze site performance, enhance user experience,
          and improve website functionality.
        </p>

        <h4>Cookies</h4>
        <p>
          Our website uses cookies to store preferences, track website activity,
          and personalize your browsing experience. You may decline cookies in
          your browser settings, but doing so may limit certain site features.
        </p>

        {/* SECTION 2 */}
        <h2 className="mt-5 mb-3">2. How We Use Your Information</h2>

        <p>Your information may be used to:</p>
        <ul>
          <li>Respond to inquiries or provide requested services</li>
          <li>Improve website performance and user experience</li>
          <li>Send updates, promotions, or notifications (with consent)</li>
          <li>Analyze website traffic and customer behavior</li>
          <li>Ensure security and prevent fraudulent activity</li>
        </ul>

        {/* SECTION 3 */}
        <h2 className="mt-5 mb-3">3. Data Sharing & Disclosure</h2>

        <h4>Third-Party Service Providers</h4>
        <p>
          We may share certain information with trusted third parties such as:
        </p>
        <ul>
          <li>Digital and e-commerce partners</li>
          <li>Marketing and advertising agencies</li>
          <li>Delivery and logistics companies</li>
          <li>Payment processors</li>
        </ul>
        <p>
          These partners are authorized to use your data only as needed to
          perform their services.
        </p>

        <h4>Legal Requirements</h4>
        <p>
          We may disclose information if required by law or upon request from
          government authorities or legal bodies.
        </p>

        <h4>Business Transactions</h4>
        <p>
          In the event of a merger, acquisition, asset sale, or business
          restructuring, user data may be transferred as part of the transaction
          while maintaining confidentiality.
        </p>

        {/* SECTION 4 */}
        <h2 className="mt-5 mb-3">4. User Rights & Controls</h2>

        <h4>Access & Correction</h4>
        <p>
          You may request access to the personal information we hold about you
          and can request corrections if any data is inaccurate or incomplete.
        </p>

        <h4>Opt-Out & Preferences</h4>
        <p>
          You may opt out of marketing communications at any time by contacting
          us or using the unsubscribe link in emails.
        </p>

        <h4>Data Deletion</h4>
        <p>
          Depending on applicable laws, you may have the right to request the
          deletion of your personal data.
        </p>

        <h4>Policy Updates</h4>
        <p>
          We may update this Privacy Policy periodically. Changes will be posted
          on this page, and in some cases, users may be notified via email.
        </p>

        {/* CONTACT INFORMATION */}
        <h2 className="mt-5 mb-3">5. Contact Information</h2>
        <p>If you have questions or wish to update your personal information, contact us:</p>

        <ul>
          <li>
            <strong>Email:</strong> info@apexsurfacessolution.com
          </li>
          <li>
            <strong>Phone:</strong> +92-21-32424292
          </li>
          <li>
            <strong>Address:</strong> Suite 702, Trade Avenue, Hasrat Mohani,
            Karachi, Pakistan
          </li>
        </ul>

        <p className="mt-4">&copy; {new Date().getFullYear()} Apex Surfaces Solution. All Rights Reserved.</p>
      </div>
    </div>
    <Footer1/>
    </>
  );
}

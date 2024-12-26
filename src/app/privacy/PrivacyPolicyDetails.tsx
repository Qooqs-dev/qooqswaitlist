import React from "react";

const PrivacyPolicyDetails = () => {
  return (
    <div className="w-11/12 max-w-screen-xl mx-auto border-t border-[#EAEAEA] pt-[40px] pb-[70px]">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <p className="text-lg">
            Qooqs Operating Company Ltd (&quot;we,&quot; &quot;us,&quot; or "&quot;our&quot;) is committed to
            protecting your personal data and respecting your privacy. This
            Privacy Policy explains how we collect, use, store, and protect your
            information when you participate in our waitlist campaign. It also
            outlines your rights under the UK General Data Protection Regulation
            (UK GDPR).
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* 1. Information We Collect */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              1. Information We Collect
            </h5>
            <p className="text-lg">
              We collect and process the following personal data:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Contact Information:</strong> Your email address
                provided during registration.
              </li>
              <li>
                <strong>Referral Data:</strong> Email addresses of individuals
                you refer to our campaign.
              </li>
              <li>
                <strong>Technical Data:</strong> IP addresses, browser type, and
                device information collected for security and fraud prevention.
              </li>
            </ul>
          </div>

          {/* 2. How We Use Your Information */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              2. How We Use Your Information
            </h5>
            <ul className="list-disc list-inside text-lg">
              <li>
                To manage and track participation in the waitlist campaign.
              </li>
              <li>
                To communicate updates, rewards, and changes to the campaign.
              </li>
              <li>
                To prevent fraud and ensure compliance with campaign terms.
              </li>
              <li>To improve our website and services.</li>
            </ul>
          </div>

          {/* 3. Legal Basis for Processing */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              3. Legal Basis for Processing
            </h5>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Consent:</strong> By signing up for the waitlist, you
                consent to the processing of your personal data for the purposes
                outlined in this policy.
              </li>
              <li>
                <strong>Contractual Necessity:</strong> Processing is necessary
                to administer the campaign and fulfill rewards.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> For fraud prevention,
                security, and service improvement.
              </li>
            </ul>
          </div>

          {/* 4. Sharing Your Information */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              4. Sharing Your Information
            </h5>
            <p className="text-lg">
              We do not sell or share your personal data with third parties for
              marketing purposes. However, we may share your data with:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Service Providers:</strong> Third-party vendors who
                assist with website hosting, email communications, and data
                storage.
              </li>
              <li>
                <strong>Legal Authorities:</strong> When required by law or to
                protect our legal rights.
              </li>
            </ul>
          </div>

          {/* 5. Data Retention */}
          <div>
            <h5 className="font-bold text-lg mb-2">5. Data Retention</h5>
            <p className="text-lg">
              We retain your personal data only for as long as necessary to:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>Administer the waitlist campaign.</li>
              <li>Fulfill legal, accounting, or reporting obligations.</li>
            </ul>
            <p className="text-lg">
              After this period, your data will be securely deleted or
              anonymized.
            </p>
          </div>

          {/* 6. Your Rights Under UK GDPR */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              6. Your Rights Under UK GDPR
            </h5>
            <p className="text-lg">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Access:</strong> Request a copy of your personal data.
              </li>
              <li>
                <strong>Correction:</strong> Update or correct inaccurate or
                incomplete data.
              </li>
              <li>
                <strong>Deletion:</strong> Request the deletion of your personal
                data.
              </li>
              <li>
                <strong>Restriction:</strong> Limit the processing of your
                personal data.
              </li>
              <li>
                <strong>Data Portability:</strong> Receive your data in a
                structured, commonly used format.
              </li>
              <li>
                <strong>Objection:</strong> Object to the processing of your
                data based on legitimate interests.
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw your consent at any
                time.
              </li>
            </ul>
            <p className="text-lg">
              To exercise your rights, contact us at{" "}
              <a
                href="mailto:DPO@qooqs.co.uk"
                className="text-blue-500 underline"
              >
                DPO@qooqs.co.uk
              </a>
              .
            </p>
          </div>

          {/* 7. Data Security */}
          <div>
            <h5 className="font-bold text-lg mb-2">7. Data Security</h5>
            <p className="text-lg">
              We implement appropriate technical and organizational measures to
              protect your data from unauthorized access, disclosure,
              alteration, or destruction. This includes encryption, secure
              storage, and access controls.
            </p>
          </div>

          {/* 8. International Data Transfers */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              8. International Data Transfers
            </h5>
            <p className="text-lg">
              If your data is transferred outside the UK, we ensure it is
              protected under agreements that comply with UK GDPR, such as
              Standard Contractual Clauses (SCCs).
            </p>
          </div>

          {/* 9. Cookies and Tracking */}
          <div>
            <h5 className="font-bold text-lg mb-2">9. Cookies and Tracking</h5>
            <p className="text-lg">
              Our website uses cookies to improve user experience and track
              campaign performance. For more details, see our{" "}
              <a href="[Insert Link]" className="text-blue-500 underline">
                Cookie Policy
              </a>
              .
            </p>
          </div>

          {/* 10. Changes to This Privacy Policy */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              10. Changes to This Privacy Policy
            </h5>
            <p className="text-lg">
              We may update this policy to reflect changes in our practices or
              legal requirements. Significant updates will be communicated to
              you via email or our website.
            </p>
          </div>

          {/* 11. Contact Us */}
          <div>
            <h5 className="font-bold text-lg mb-2">11. Contact Us</h5>
            <p className="text-lg">
              For questions or concerns about this Privacy Policy or how we
              handle your data, contact us at:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                Email:{" "}
                <a
                  href="mailto:DPO@qooqs.co.uk"
                  className="text-blue-500 underline"
                >
                  DPO@qooqs.co.uk
                </a>
              </li>
              <li>
                Address: 4th Floor, Silverstream House, 45 Fitzroy Street,
                Fitzrovia, London, W1T 6EB
              </li>
              <li>Phone: 07771000631</li>
            </ul>
          </div>

          {/* ]Acceptance of Privacy Policy */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              ]Acceptance of Privacy Policy
            </h5>
            <p className="text-lg">
              By participating in our waitlist campaign, you acknowledge that
              you have read and understood this Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyDetails;

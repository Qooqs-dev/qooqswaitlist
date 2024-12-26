import React from "react";

const CookiesPolicyDetails = () => {
  return (
    <div className="w-11/12 max-w-screen-xl mx-auto border-t border-[#EAEAEA] pt-[40px] pb-[70px]">
      <div className="space-y-8">
        {/* Header */}
        <div>
          <p className="text-lg">
            Qooqs Operating Company Ltd (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and
            similar technologies to enhance user experience, provide
            functionality, and collect analytics. This Cookies Policy explains
            what cookies are, how we use them, and your choices regarding their
            use.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* 1. What Are Cookies? */}
          <div>
            <h5 className="font-bold text-lg mb-2">1. What Are Cookies?</h5>
            <p className="text-lg">
              Cookies are small text files that are stored on your device
              (computer, tablet, or mobile) when you visit a website. They allow
              the website to recognize your device and store certain information
              about your preferences or actions.
            </p>
          </div>

          {/* 2. Types of Cookies We Use */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              2. Types of Cookies We Use
            </h5>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Essential Cookies:</strong> Necessary for the operation
                of our website. Enable core functions such as security,
                accessibility, and network management.
                <br />
                <span>
                  Example: Session cookies that maintain your login status.
                </span>
              </li>
              <li>
                <strong>Performance and Analytics Cookies:</strong> Help us
                understand how users interact with our website. Collect
                anonymized data for website performance and user experience
                improvement.
                <br />
                <span>
                  Example: Google Analytics cookies for traffic analysis.
                </span>
              </li>
              <li>
                <strong>Functional Cookies:</strong> Enhance website
                functionality by remembering your preferences.
                <br />
                <span>Example: Language preference cookies.</span>
              </li>
              <li>
                <strong>Targeting and Advertising Cookies:</strong> Track user
                behavior to deliver personalized ads. Measure the effectiveness
                of advertising campaigns.
                <br />
                <span>Example: Facebook Pixel or Google Ads cookies.</span>
              </li>
            </ul>
          </div>

          {/* 3. Legal Basis for Using Cookies */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              3. Legal Basis for Using Cookies
            </h5>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Consent:</strong> Non-essential cookies (e.g.,
                analytics, advertising) are used only with your explicit
                consent.
              </li>
              <li>
                <strong>Legitimate Interests:</strong> Essential cookies are
                used to ensure the proper functioning of our website.
              </li>
            </ul>
          </div>

          {/* 4. Managing Cookies */}
          <div>
            <h5 className="font-bold text-lg mb-2">4. Managing Cookies</h5>
            <p className="text-lg">
              When you visit our website for the first time, you will see a
              cookie banner requesting your consent for non-essential cookies.
              You can choose to:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>Accept all cookies.</li>
              <li>Reject non-essential cookies.</li>
              <li>Customize your preferences.</li>
            </ul>
            <p className="text-lg">
              You can manage or disable cookies through your browser settings at
              any time:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>Google Chrome: Cookie Management in Chrome</li>
              <li>Mozilla Firefox: Cookie Management in Firefox</li>
              <li>Safari: Cookie Management in Safari</li>
            </ul>
            <p className="text-lg">
              Please note that disabling cookies may impact website
              functionality.
            </p>
          </div>

          {/* 5. Third-Party Cookies */}
          <div>
            <h5 className="font-bold text-lg mb-2">5. Third-Party Cookies</h5>
            <p className="text-lg">
              We use third-party services that may set cookies on your device.
              These include:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Google Analytics:</strong> Collects anonymized traffic
                data.
              </li>
              <li>
                <strong>Facebook Pixel:</strong> Tracks conversions from
                Facebook ads.
              </li>
              {/* <li>[Other third-party services relevant to your project]</li> */}
            </ul>
            <p className="text-lg">
              Each third party has its own privacy and cookie policies, which
              you can review.
            </p>
          </div>

          {/* 6. Retention of Cookies */}
          <div>
            <h5 className="font-bold text-lg mb-2">6. Retention of Cookies</h5>
            <p className="text-lg">
              Cookies are stored on your device for varying durations:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                <strong>Session Cookies:</strong> Deleted when you close your
                browser.
              </li>
              <li>
                <strong>Persistent Cookies:</strong> Remain on your device until
                they expire or are manually deleted.
              </li>
            </ul>
          </div>

          {/* 7. Your Rights */}
          <div>
            <h5 className="font-bold text-lg mb-2">7. Your Rights</h5>
            <p className="text-lg">Under UK GDPR, you have the right to:</p>
            <ul className="list-disc list-inside text-lg">
              <li>Withdraw consent for non-essential cookies at any time.</li>
              <li>Request information about the cookies we use.</li>
              <li>
                Object to profiling or targeted advertising based on cookies.
              </li>
            </ul>
            <p className="text-lg">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:DPO@qooqs.co.uk"
                className="text-blue-500 underline"
              >
                DPO@qooqs.co.uk
              </a>
              .
            </p>
          </div>

          {/* 8. Changes to This Cookies Policy */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              8. Changes to This Cookies Policy
            </h5>
            <p className="text-lg">
              We may update this policy periodically to reflect changes in our
              practices or legal requirements. Significant updates will be
              communicated on our website or via email.
            </p>
          </div>

          {/* 9. Contact Us */}
          <div>
            <h5 className="font-bold text-lg mb-2">9. Contact Us</h5>
            <p className="text-lg">
              For questions about this Cookies Policy or how we use cookies,
              contact us at:
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

          {/* Acceptance of Cookies Policy */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              Acceptance of Cookies Policy
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

export default CookiesPolicyDetails;

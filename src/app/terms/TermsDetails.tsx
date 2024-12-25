import React from "react";

const TermsDetails = () => {
  return (
    <div className="w-11/12 max-w-screen-xl mx-auto border-t border-[#EAEAEA] pt-[40px] pb-[70px]">
      <div className="space-y-8">
        {/* Heading */}
        <div>
          <h4 className="font-bold text-lg mb-4">
            Terms and Conditions for the Waitlist Campaign
          </h4>
          <p className="text-lg">
            Welcome to the Qooqs Operating Company Ltd waitlist campaign! By
            signing up and participating in this campaign, you agree to the
            following terms and conditions. Please read them carefully. If you
            do not agree with these terms, you must not participate in the
            campaign.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-6">
          {/* 1. Purpose of the Campaign */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              1. Purpose of the Campaign
            </h5>
            <p className="text-lg">
              This campaign allows participants to join a waitlist, invite
              others to join, and potentially earn rewards based on the
              activities of their referrals. It is governed by these Terms and
              Conditions and is compliant with UK GDPR regulations to protect
              your data and privacy.
            </p>
          </div>

          {/* 2. Eligibility */}
          <div>
            <h5 className="font-bold text-lg mb-2">2. Eligibility</h5>
            <ul className="list-disc list-inside text-lg">
              <li>
                Participants must be aged 18 or older and reside in the United
                Kingdom.
              </li>
              <li>
                Each participant is required to provide a valid email address
                upon registration.
              </li>
              <li>
                To qualify for the rewards, participants must invite at least 20
                people within 90 days of the campaign start date.
              </li>
            </ul>
          </div>

          {/* 3. Referral Program Details */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              3. Referral Program Details
            </h5>
            <ul className="list-disc list-inside text-lg">
              <li>
                Each eligible participant who successfully invites 20
                individuals to sign up via their unique referral link within the
                campaign period will earn rewards based on the activities of
                their referred individuals for life.
              </li>
              <li>
                Invited individuals must sign up with valid email addresses and
                comply with the terms of this campaign.
              </li>
              <li>
                Participants found to engage in fraudulent activities (e.g.,
                creating fake accounts) will be disqualified and removed from
                the campaign.
              </li>
            </ul>
          </div>

          {/* 4. Data Collection and Usage */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              4. Data Collection and Usage
            </h5>
            <p className="text-lg font-semibold">Personal Data Collected:</p>
            <ul className="list-disc list-inside text-lg">
              <li>Email addresses of participants and their referrals.</li>
              <li>IP addresses and device data for fraud prevention.</li>
            </ul>
            <p className="text-lg font-semibold mt-4">
              Purpose of Data Collection:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                To manage and monitor the campaign, including tracking referrals
                and rewards.
              </li>
              <li>
                To communicate with participants regarding the campaign and
                provide updates.
              </li>
              <li>To comply with legal obligations.</li>
            </ul>
          </div>

          {/* 5. Data Protection and GDPR Compliance */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              5. Data Protection and GDPR Compliance
            </h5>
            <p className="text-lg">
              We are committed to complying with the UK GDPR. By participating
              in this campaign:
            </p>
            <ul className="list-disc list-inside text-lg">
              <li>
                You consent to the collection, use, and storage of your personal
                data as described in these terms.
              </li>
              <li>
                You have the right to access, correct, or delete your personal
                data at any time.
              </li>
              <li>
                You can withdraw your consent by contacting{" "}
                <a
                  href="mailto:DPO@qooqs.co.uk"
                  className="text-blue-500 underline"
                >
                  DPO@qooqs.co.uk
                </a>
                . However, withdrawing consent may affect your ability to
                participate in the campaign.
              </li>
              <li>
                For further details, refer to our Privacy Policy at [Insert
                Link].
              </li>
            </ul>
          </div>

          {/* 6. Reward Distribution */}
          <div>
            <h5 className="font-bold text-lg mb-2">6. Reward Distribution</h5>
            <ul className="list-disc list-inside text-lg">
              <li>
                Rewards are non-transferable and cannot be exchanged for cash.
              </li>
              <li>
                Qooqs Operating Company Ltd reserves the right to change the
                reward structure or terminate the campaign at any time without
                prior notice.
              </li>
              <li>
                Participants will be notified via email of any changes to the
                campaign.
              </li>
            </ul>
          </div>

          {/* 7. Participant Responsibilities */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              7. Participant Responsibilities
            </h5>
            <p className="text-lg">
              You are responsible for ensuring the accuracy of the information
              provided during registration and referrals. It is your
              responsibility to comply with these terms and applicable laws when
              participating in the campaign.
            </p>
          </div>

          {/* 8. Liability */}
          <div>
            <h5 className="font-bold text-lg mb-2">8. Liability</h5>
            <ul className="list-disc list-inside text-lg">
              <li>Any technical issues that may affect participation.</li>
              <li>Any unauthorized access or use of your account.</li>
            </ul>
          </div>

          {/* 9. Amendments to the Terms */}
          <div>
            <h5 className="font-bold text-lg mb-2">
              9. Amendments to the Terms
            </h5>
            <p className="text-lg">
              We may update these terms from time to time to reflect changes in
              the campaign or legal requirements. Participants will be notified
              of any significant updates.
            </p>
          </div>

          {/* 10. Contact Information */}
          <div>
            <h5 className="font-bold text-lg mb-2">10. Contact Information</h5>
            <p className="text-lg">
              For questions or concerns regarding this campaign or your data,
              please contact us:
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
            </ul>
          </div>

          {/* Acceptance of Terms */}
          <div>
            <h5 className="font-bold text-lg mb-2">Acceptance of Terms</h5>
            <p className="text-lg">
              By signing up for the waitlist and participating in the campaign,
              you confirm that you have read, understood, and agreed to these
              Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsDetails;

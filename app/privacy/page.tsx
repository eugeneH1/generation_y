import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="space-y-8">
        <Section
          title="Information Collection"
          content="This website (the &quot;Website&quot;) is operated by Generation Y Solutions Pty Ltd. (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;). By using and visiting our Website and using our service you agree to this privacy policy. We respect the privacy of visitors to our Website and who use our services. We recognise that when you choose to provide us with information about yourself, you trust us to act in a responsible manner. That&apos;s why we have put a policy in place to protect your personal information. Please read on for more details about our privacy practices."
        />
        <Section
          title="What information do we collect? How do we use it?"
          content="We use the collected information to provide and improve our services, personalize your experience, and communicate with you about our offerings. We may also use the information for analytics and marketing purposes."
        />
        <Section
          title="Sharing of Information"
          content="We may share your information with trusted third-party service providers who assist us in operating our website, conducting business, or servicing you. We may also share your information as required by law or to protect our rights and interests."
        />
        <Section
          title="Security"
          content="We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no system can be completely secure, and we cannot guarantee the absolute security of your information."
        />
        <Section
          title="User Rights"
          content="You have the right to access, update, or delete your personal information. You may also have the right to object to or restrict certain processing activities. Please contact us if you wish to exercise any of these rights."
        />
      </div>
    </div>
  );
};

const Section = ({ title, content }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <p className="text-gray-600 leading-relaxed">{content}</p>
  </div>
);

export default PrivacyPolicy;
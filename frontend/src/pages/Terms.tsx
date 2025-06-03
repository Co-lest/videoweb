import React from 'react';
import Container from '../components/ui/Container';

const TermsOfService: React.FC = () => {
  const websiteName = "Elkay Cinematics";
  const contactEmail = "contact@creativestudio.com";
  const governingJurisdiction = "Kenya"; 

  return (
    <div className="pt-20 pb-16 bg-white text-gray-800">
      <Container>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
          Terms of Service
        </h1>

        <p className="mb-6 text-lg">
          Welcome to <strong className="text-blue-600">{websiteName}</strong>! These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our website, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you may not use our website.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          1. Acceptance of Terms
        </h2>
        <p className="mb-6">
          By using this website, you confirm that you are at least 18 years old or are accessing the website under the supervision of a parent or guardian. You agree to comply with all applicable laws and regulations regarding your use of the website.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          2. Services
        </h2>
        <p className="mb-6">
          <strong className="text-blue-600">{websiteName}</strong> provides information about our portfolio, services (e.g., video production, photography, article writing), and contact details. We strive to ensure the information on this website is accurate and up-to-date, but we do not guarantee its completeness or accuracy.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          3. Intellectual Property
        </h2>
        <p className="mb-6">
          All content on this website, including text, graphics, logos, images, and the portfolio items displayed, is the property of <strong className="text-blue-600">{websiteName}</strong> or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from any content without our prior written consent.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          4. User Conduct
        </h2>
        <p className="mb-6">
          You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment of the website. Prohibited conduct includes, but is not limited to:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Engaging in any activity that is unlawful or fraudulent.</li>
          <li>Transmitting any material that is offensive, defamatory, or harmful.</li>
          <li>Attempting to gain unauthorized access to our website or its related systems.</li>
          <li>Interfering with the website's operation or security.</li>
        </ul>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          5. Privacy Policy
        </h2>
        <p className="mb-6">
          Your use of our website is also governed by our <a href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</a>, which is incorporated into these Terms by reference. Please review our Privacy Policy to understand our practices regarding the collection, use, and disclosure of your personal information.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          6. Links to Third-Party Websites
        </h2>
        <p className="mb-6">
          Our website may contain links to third-party websites or services that are not owned or controlled by <strong className="text-blue-600">{websiteName}</strong>. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that <strong className="text-blue-600">{websiteName}</strong> shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          7. Disclaimer of Warranties
        </h2>
        <p className="mb-6">
          Our website and its content are provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. <strong className="text-blue-600">{websiteName}</strong> does not warrant that the website will be uninterrupted, error-free, secure, or free from viruses or other harmful components.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          8. Limitation of Liability
        </h2>
        <p className="mb-6">
          To the fullest extent permitted by law, <strong className="text-blue-600">{websiteName}</strong> shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, arising from your use of the website or any content obtained from it.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          9. Indemnification
        </h2>
        <p className="mb-6">
          You agree to defend, indemnify, and hold harmless <strong className="text-blue-600">{websiteName}</strong> and its affiliates, officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from your use of and access to the website, or your violation of these Terms.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          10. Changes to Terms
        </h2>
        <p className="mb-6">
          We reserve the right to modify or replace these Terms at any time. We will provide reasonable notice of any significant changes by posting the new Terms on this page. Your continued use of the website after such changes constitutes your acceptance of the new Terms.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          11. Governing Law
        </h2>
        <p className="mb-6">
          These Terms shall be governed and construed in accordance with the laws of <strong className="text-blue-600">{governingJurisdiction}</strong>, without regard to its conflict of law provisions.
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
          12. Contact Us
        </h2>
        <p className="mb-6">
          If you have any questions about these Terms, please contact us at <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">{contactEmail}</a>.
        </p>
      </Container>
    </div>
  );
};

export default TermsOfService;
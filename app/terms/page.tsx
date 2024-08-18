import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="container max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-8">Terms Of Use</h1>
      <div className="space-y-8">
        <Section
          title="General Purpose"
          content={
            <ul>
              <li>The Site is a medium for providing information and access to products and services of third parties related to cars, including new and used car loans. The Site also advertises vehicles for sale by third party sellers on our web application referred to in these Terms as "Generation Y Solutions Pty Ltd".</li>
              <li>By accessing and using the Site you agree to be bound by and to act in accordance with these terms and conditions.</li>
              <li>We have a number of policies referred to in these terms and conditions, including our Privacy Policy and Cookie Policy (together the "Terms"). These all form part of our agreement with you and apply to your use of the Site so please take the time to read them. We recommend that you print or save a copy of these Terms for future reference.</li>
              <li>Nothing in these Terms will affect the duties and responsibilities that we have to you in respect of our Regulated Business. In particular, information provided to you on parts of the Site which concern your application for finance will be accurate at all times and this includes our being responsible for checking any content provided to us by third parties.</li>
              <li>When you use Generation Y Solutions Pty Ltd and/or any connected services via the Site, the additional terms and conditions set out at Part 2 of these Terms shall also apply and shall be deemed to be incorporated into the Terms by reference.</li>
              <li>These Terms were most recently updated on the date of posting that appears at the top of this page.</li>
              <li>If you have any queries or concerns regarding these Terms, please contact us at info@generationy.co.za</li>
              <li>Your Privacy and our Use of Cookies
                <ul>
                  <li>We take protection of your privacy seriously and process information about you in accordance with our Privacy Policy.</li>
                  <li>Like many online services, we use a feature called a 'cookie'. By agreeing to these Terms, you are providing your consent for us to use cookies in the ways described in our Cookie Policy, however, you may delete any of these cookies at any time if you wish. Please see our Cookie Policy for detailed information on the types of cookies we use on the Site, the purposes for which we use each cookie, how you can disable and enable the use of certain cookies and the consequences of doing so.</li>
                </ul>
              </li>
            </ul>
          }
        />
        <Section
          title="Links and Third Party Material"
          content={
            <ul>
              <li>You acknowledge that parts of the Site may contain material provided by third party product or service providers, advertisers or sponsoring organisations, who are responsible for ensuring that all material submitted for inclusion on the Site complies with all applicable laws. We may (but are under no obligation to) verify the accuracy of such information but we will not be responsible if any such material is untrue, inaccurate, incomplete and/or contains errors and we disclaim all liability and responsibility arising from any reliance you place on such material.</li>
              <li>Any material on the Site may be out of date at any given time and, whilst we endeavour to keep material up to date, we are under no obligation to do so. Material on the Site may be subject to change at any time.</li>
              <li>You acknowledge that the Site contains links to other websites. We do not review these third party websites nor have any control over them and we are not responsible for the websites or their content or availability. When you activate any of these links, you will leave the Site and we accept no responsibility for the availability or content of any linked websites or for any loss or damage that may arise from your use of them. The links are provided for your convenience and any such link does not imply endorsement by us of a website or any association with the operators of a website. If you decide to access any of these sites you do so entirely at your own risk.</li>
              <li>If you use a linked site, any personal information you give to that site will be dealt with in line with that site's privacy policy, not ours, so please ensure that you have read that site's terms and conditions and privacy policy before you use the websites and provide any personal information.</li>
            </ul>
          }
        />
        <Section
          title="Intellectual Property Rights"
          content={
            <ul>
              <li>All intellectual property rights in the Site and its content (including copyright and database rights and (whether registered or unregistered) trademarks, trade names and designs and other intellectual property rights in that content), shall at all times remain vested in, or licensed by, Generation Y Solutions Pty Ltd.</li>
              <li>You are permitted to print or download extracts from material on the Site for your personal use only provided you keep intact all or any copyright and proprietary notices.</li>
              <li>Our content includes any information or other material found on or via the Site, including text, databases, graphics, videos, software and all other features found on or via the Site.</li>
              <li>No part of the Site or any material appearing on the Site may be modified, copied, distributed, reproduced, stored in or transmitted on any other website for commercial purposes without prior written permission of Generation Y Solutions Pty Ltd.</li>
              <li>We make the Site and our content available through the Site for your personal, non-commercial use only. You may view the Site's pages and content online and to be clear you are not in any circumstances permitted to (i) make commercial use of any such content; (ii) edit any such content; or (iii) remove, obscure or otherwise tamper with any copyright or proprietary notices that relate to, or are contained within, the content.</li>
              <li>No licence is granted to you in these Terms to use any trade mark of Generation Y Solutions Pty Ltd.</li>
            </ul>
          }
        />
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

const Section = ({ title, content }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">{title}</h2>
    <div className="text-gray-600 leading-relaxed">{content}</div>
  </div>
);

export default TermsOfUse;
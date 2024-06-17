import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Section from "../Components/Section";
import ItemList from "../Components/ItemList";
import Paragraphs from "../Components/ParagraphList";
import styles from "../Components/CSS/PrivacyText.module.css";

const PrivacyText = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <div className={styles.c}>
      <h1>PRIVACY POLICY</h1>
      <h5>Last updated&nbsp;June 15, 2024</h5>
      <Paragraphs
        items={[
          <>
            This privacy notice for&nbsp;Tom-Elbin Bendheim&nbsp;(" we ," " us
            ," or " our "), describes how and why we might collect, store, use,
            and/or share (" process ") your information when you use our
            services (" Services "), such as when you:
          </>,
          <>
            <ItemList
              items={[
                <>
                  Visit our website&nbsp;at{" "}
                  <Link to="http://www.tomandveronika.com">
                    http://www.tomandveronika.com
                  </Link>
                  , or any website of ours that links to this privacy notice
                </>,
                "Engage with us in other related ways, including any sales, marketing, or events ",
              ]}
            />
            ,
            <>
              Questions or concerns? Reading this privacy notice will help you
              understand your privacy rights and choices. If you do not agree
              with our policies and practices, please do not use our
              Services.&nbsp;If you still have any questions or concerns, please
              contact us at&nbsp;tomelbin.bendheim@gmail.com.
            </>
          </>,
        ]}
      />
      <h2>SUMMARY OF KEY POINTS</h2>
      <Paragraphs
        items={[
          <h6>
            This summary provides key points from our privacy notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our
            <Link to="#toc">table of contents</Link>
            below to find the section you are looking for.
          </h6>,
          <h6>
            What personal information do we process? When you visit, use, or
            navigate our Services, we may process personal information depending
            on how you interact with us and the Services, the choices you make,
            and the products and features you use. Learn more about
            <Link to="#personalinfo">
              personal information you disclose to us
            </Link>
            .{" "}
          </h6>,
          <h6>
            Do we process any sensitive personal information? We do not process
            sensitive personal information.
          </h6>,
          <h6>
            Do we collect any information from third parties? We do not collect
            any information from third parties.
          </h6>,
          <h6>
            {" "}
            How do we process your information? We process your information to
            provide, improve, and administer our Services, communicate with you,
            for security and fraud prevention, and to comply with law. We may
            also process your information for other purposes with your consent.
            We process your information only when we have a valid legal reason
            to do so. Learn more about
            <Link to="#infouse">how we process your information</Link>.{" "}
          </h6>,
          <h6>
            {" "}
            In what situations and with which&nbsp;types of&nbsp;parties do we
            share personal information? We may share information in specific
            situations and with specific&nbsp;categories of&nbsp;third parties.
            Learn more about
            <Link to="#whoshare">
              when and with whom we share your personal information
            </Link>
          </h6>,
          <h6>
            How do we keep your information safe? We
            have&nbsp;organizational&nbsp;and technical processes and procedures
            in place to protect your personal information. However, no
            electronic transmission over the internet or information storage
            technology can be guaranteed to be 100% secure, so we cannot promise
            or guarantee that hackers, cybercriminals, or
            other&nbsp;unauthorized&nbsp;third parties will not be able to
            defeat our security and improperly collect, access, steal, or modify
            your information. Learn more about
            <Link to="#infosafe">how we keep your information safe</Link>.{" "}
          </h6>,
          <h6>
            What are your rights? Depending on where you are located
            geographically, the applicable privacy law may mean you have certain
            rights regarding your personal information. Learn more about
            <Link to="#privacyrights">your privacy rights</Link>.
          </h6>,
          <h6>
            How do you exercise your rights? The easiest way to exercise your
            rights is by sending an email to tomelbin.bendheim@gmail.com. We
            will consider and act upon any request in accordance with applicable
            data protection laws.
          </h6>,
          <h6>
            {" "}
            Want to learn more about what we do with any information we collect?
            <Link to="#toc">Review the privacy notice in full</Link>.{" "}
          </h6>,
        ]}
      />
      <h2 id="toc">TABLE OF CONTENTS</h2>
      <ItemList
        items={[
          <Link to="#infocollect">WHAT INFORMATION DO WE COLLECT?</Link>,
          <Link to="#infouse">HOW DO WE PROCESS YOUR INFORMATION?</Link>,
          <Link to="#legalbases">
            WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
          </Link>,
          <Link to="#whoshare">
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </Link>,
          <Link to="#3pwebsites">
            WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?
          </Link>,
          <Link to="#cookies">
            DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </Link>,
          <Link to="#sociallogins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</Link>,
          <Link to="#intltransfers">
            IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
          </Link>,
          <Link to="#inforetain">HOW LONG DO WE KEEP YOUR INFORMATION?</Link>,
          <Link to="#infosafe">HOW DO WE KEEP YOUR INFORMATION SAFE?</Link>,
          <Link to="#infominors">DO WE COLLECT INFORMATION FROM MINORS?</Link>,
          <Link to="#privacyrights">WHAT ARE YOUR PRIVACY RIGHTS?</Link>,
          <Link to="#DNT">CONTROLS FOR DO-NOT-TRACK FEATURES</Link>,
          <Link to="#policyupdates">DO WE MAKE UPDATES TO THIS NOTICE?</Link>,
          <Link to="#contact">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</Link>,
          <Link to="#request">
            HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </Link>,
        ]}
      />
      <Section
        id="infocollect"
        title="1. WHAT INFORMATION DO WE COLLECT?"
        subtitle="In Short: We collect personal information that you provide to us."
      >
        <Paragraphs
          items={[
            <>
              {" "}
              We collect personal information that you voluntarily provide to us
              when you&nbsp;register on the Services,&nbsp;express an interest
              in obtaining information about us or our products and Services,
              when you participate in activities on the Services, or otherwise
              when you contact us.
            </>,
            <>
              Personal Information Provided by You. The personal information
              that we collect depends on the context of your interactions with
              us and the Services, the choices you make, and the products and
              features you use. The personal information we collect may include
              the following:
            </>,
            <>
              {" "}
              <ItemList
                items={[
                  "Names",
                  "phone numbers",
                  "email addresses",
                  "mailing addresses",
                  "usernames",
                  "passwords",
                  "contact preferences",
                  "contact or authentication data",
                ]}
              />
            </>,
            <>
              Sensitive Information. We do not process sensitive information.
            </>,
            <>
              Payment Data. We may collect data necessary to process your
              payment if you choose to make purchases, such as your payment
              instrument number, and the security code associated with your
              payment instrument. All payment data is handled and stored
              by&nbsp;Stripe. You may find their privacy notice link(s) here:
              <Link to="https://stripe.com/en-no/privacy">
                https://stripe.com/en-no/privacy.
              </Link>
            </>,
            <>
              Social Media Login Data. We may provide you with the option to
              register with us using your existing social media account details,
              like your Facebook, X, or other social media account. If you
              choose to register in this way, we will collect certain profile
              information about you from the social media provider, as described
              in the section called&nbsp;"
              <Link to="#sociallogins">
                HOW DO WE HANDLE YOUR SOCIAL LOGINS?
              </Link>
              "&nbsp;below.
            </>,
            <>
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </>,
          ]}
        />
        <h3>Information automatically collected</h3>
        <h4>
          In Short: Some information &mdash; such as your Internet Protocol (IP)
          address and/or browser and device characteristics &mdash; is collected
          automatically when you visit our Services.
        </h4>
        <Paragraphs
          items={[
            <>
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </>,
            <>
              Like many businesses, we also collect information through cookies
              and similar technologies.&nbsp;You can find out more about this in
              our Cookie Notice:
              <Link to="http://www.tomandveronika.com/legal/cookiepolicy">
                http://www.tomandveronika.com/legal/cookiepolicy
              </Link>
              .
            </>,
            <>The information we collect includes:</>,
            <>
              <ItemList
                items={[
                  <>
                    Log and Usage Data. Log and usage data is service-related,
                    diagnostic, usage, and performance information our servers
                    automatically collect when you access or use our Services
                    and which we record in log files. Depending on how you
                    interact with us, this log data may include your IP address,
                    device information, browser type, and settings and
                    information about your activity in the Services&nbsp;(such
                    as the date/time stamps associated with your usage, pages
                    and files viewed, searches, and other actions you take such
                    as which features you use), device event information (such
                    as system activity, error reports (sometimes
                    called&nbsp;"crash dumps"), and hardware settings).
                  </>,
                  <>
                    Device Data. We collect device data such as information
                    about your computer, phone, tablet, or other device you use
                    to access the Services. Depending on the device used, this
                    device data may include information such as your IP address
                    (or proxy server), device and application identification
                    numbers, location, browser type, hardware model, Internet
                    service provider and/or mobile carrier, operating system,
                    and system configuration information.
                  </>,
                  <>
                    Location Data. We collect location data such as information
                    about your device's location, which can be either precise or
                    imprecise. How much information we collect depends on the
                    type and settings of the device you use to access the
                    Services. For example, we may use GPS and other technologies
                    to collect geolocation data that tells us your current
                    location (based on your IP address). You can opt out of
                    allowing us to collect this information either by refusing
                    access to the information or by disabling your Location
                    setting on your device. However, if you choose to opt out,
                    you may not be able to use certain aspects of the Services.
                  </>,
                ]}
              />
            </>,
          ]}
        />
      </Section>
      <Section
        id="infouse"
        title="2. HOW DO WE PROCESS YOUR INFORMATION?"
        subtitle="In Short: We process your information to provide, improve, and
        administer our Services, communicate with you, for security and fraud
        prevention, and to comply with law. We may also process your information
        for other purposes with your consent."
      >
        <Paragraphs
          items={[
            <>
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </>,
            <>
              {" "}
              <ItemList
                items={[
                  <>
                    To facilitate account creation and authentication and
                    otherwise manage user accounts. We may process your
                    information so you can create and log in to your account, as
                    well as keep your account in working order.
                  </>,
                  <>
                    To respond to user inquiries/offer support to users. We may
                    process your information to respond to your inquiries and
                    solve any potential issues you might have with the requested
                    service.
                  </>,
                  <>
                    To send administrative information to you. We may process
                    your information to send you details about our products and
                    services, changes to our terms and policies, and other
                    similar information.
                  </>,
                  <>
                    {" "}
                    To request feedback. We may process your information when
                    necessary to request feedback and to contact you about your
                    use of our Services.
                  </>,
                  <>
                    {" "}
                    To send you marketing and promotional communications. We may
                    process the personal information you send to us for our
                    marketing purposes, if this is in accordance with your
                    marketing preferences. You can opt out of our marketing
                    emails at any time. For more information, see&nbsp;"
                    <Link to="#privacyrights">
                      WHAT ARE YOUR PRIVACY RIGHTS?
                    </Link>
                    "&nbsp;below.
                  </>,
                  <>
                    {" "}
                    To deliver targeted advertising to you. We may process your
                    information to develop and
                    display&nbsp;personalized&nbsp;content and advertising
                    tailored to your interests, location, and more.&nbsp;For
                    more information see our Cookie Notice:
                    <Link to="http://www.tomandveronika.com/legal/cookiepolicy">
                      http://www.tomandveronika.com/legal/cookiepolicy.
                    </Link>{" "}
                  </>,
                  <>
                    {" "}
                    To protect our Services. We may process your information as
                    part of our efforts to keep our Services safe and secure,
                    including fraud monitoring and prevention.
                  </>,
                  <>
                    To identify usage trends. We may process information about
                    how you use our Services to better understand how they are
                    being used so we can improve them.
                  </>,
                  <>
                    To determine the effectiveness of our marketing and
                    promotional campaigns. We may process your information to
                    better understand how to provide marketing and promotional
                    campaigns that are most relevant to you.
                  </>,
                  <>
                    To save or protect an individual's vital interest. We may
                    process your information when necessary to save or protect
                    an individual&rsquo;s vital interest, such as to prevent
                    harm.
                  </>,
                ]}
              />
            </>,
          ]}
        />
      </Section>
      <Section
        id="legalbases"
        title={"3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?"}
        subtitle={`In Short: We only process your personal information when we believe it
        is necessary and we have a valid legal reason (i.e.,&nbsp;legal basis)
        to do so under applicable law, like with your consent, to comply with
        laws, to provide you with services to enter into
        or&nbsp;fulfill&nbsp;our contractual obligations, to protect your
        rights, or to&nbsp;fulfill&nbsp;our legitimate business interests.`}
      >
        <Paragraphs items={[]} />
      </Section>
      <p>
        The General Data Protection Regulation (GDPR) and UK GDPR require us to
        explain the valid legal bases we rely on in order to process your
        personal information. As such, we may rely on the following legal bases
        to process your personal information:
      </p>
      <ul>
        <li>
          Consent. We may process your information if you have given us
          permission (i.e.,&nbsp;consent) to use your personal information for a
          specific purpose. You can withdraw your consent at any time. Learn
          more about
          <Link to="#withdrawconsent">withdrawing your consent</Link>.
        </li>
        <li>
          Performance of a Contract. We may process your personal information
          when we believe it is necessary to&nbsp;fulfill&nbsp;our contractual
          obligations to you, including providing our Services or at your
          request prior to entering into a contract with you.
        </li>
        <li>
          Legitimate Interests. We may process your information when we believe
          it is reasonably necessary to achieve our legitimate business
          interests and those interests do not outweigh your interests and
          fundamental rights and freedoms. For example, we may process your
          personal information for some of the purposes described in order to:
        </li>
        <li>
          Send users information about special offers and discounts on our
          products and services
        </li>
        <li>
          Develop and display&nbsp;personalized&nbsp;and relevant advertising
          content for our users
        </li>
        <li>
          Analyze&nbsp;how our Services are used so we can improve them to
          engage and retain users
        </li>
        <li>Support our marketing activities</li>
        <li>Diagnose problems and/or prevent fraudulent activities</li>
        <li>
          Understand how our users use our products and services so we can
          improve user experience
        </li>
        <li>
          Legal Obligations. We may process your information where we believe it
          is necessary for compliance with our legal obligations, such as to
          cooperate with a law enforcement body or regulatory agency, exercise
          or defend our legal rights, or disclose your information as evidence
          in litigation in which we are involved.
        </li>
        <li>
          Vital Interests. We may process your information where we believe it
          is necessary to protect your vital interests or the vital interests of
          a third party, such as situations involving potential threats to the
          safety of any person.
        </li>
      </ul>
      <Section
        id="whoshare"
        title={"4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"}
        subtitle={`In Short: We may share information in specific situations described in
        this section and/or with the following&nbsp;categories of&nbsp;third
        parties.`}
      >
        <Paragraphs items={[]} />
      </Section>
      <h2 id=""></h2>
      <h4></h4>
      <p>
        Vendors, Consultants, and Other Third-Party Service Providers. We may
        share your data with third-party vendors, service providers,
        contractors, or agents (" third parties ") who perform services for us
        or on our behalf and require access to such information to do that
        work.&nbsp;We have contracts in place with our third parties, which are
        designed to help safeguard your personal information. This means that
        they cannot do anything with your personal information unless we have
        instructed them to do it. They will also not share your personal
        information with any&nbsp;organization&nbsp;apart from us. They also
        commit to protect the data they hold on our behalf and to retain it for
        the period we instruct.
      </p>
      <p>
        The&nbsp;categories of&nbsp;third parties we may share personal
        information with are as follows:
      </p>
      <ul>
        <li>Data Analytics Services</li>
        <li>Cloud Computing Services</li>
        <li>Communication &amp; Collaboration Tools</li>
        <li>Data Storage Service Providers</li>
        <li>Payment Processors</li>
        <li>Performance Monitoring Tools</li>
        <li>Testing Tools</li>
        <li>Product Engineering &amp; Design Tools</li>
        <li>Website Hosting Service Providers</li>
        <li>User Account Registration &amp; Authentication Services</li>
        <li>Social Networks</li>
        <li>Order&nbsp;Fulfillment&nbsp;Service Providers</li>
        <li>Finance &amp; Accounting Tools</li>
      </ul>
      <p>
        We&nbsp;also&nbsp;may need to share your personal information in the
        following situations:
      </p>
      <ul>
        <li>
          Business Transfers. We may share or transfer your information in
          connection with, or during negotiations of, any merger, sale of
          company assets, financing, or acquisition of all or a portion of our
          business to another company.
        </li>
        <li>
          <p>
            Affiliates. We may share your information with our affiliates, in
            which case we will require those affiliates to&nbsp;honor&nbsp;this
            privacy notice. Affiliates include our parent company and any
            subsidiaries, joint venture partners, or other companies that we
            control or that are under common control with us.
          </p>
        </li>
        <li>
          <p>
            Business Partners. We may share your information with our business
            partners to offer you certain products, services, or promotions.
          </p>
        </li>
      </ul>
      <Section
        id="3pwebsites"
        title={"5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?"}
        subtitle={`In Short: We are not responsible for the safety of any information
          that you share with third parties that we may link to or who advertise
          on our Services, but are not affiliated with, our Services.`}
      >
        <Paragraphs items={[]} />
      </Section>
      <h2 id=""></h2>
      <h4></h4>
      The Services&nbsp;may link to third-party websites, online services, or
      mobile applications and/or contain advertisements from third parties that
      are not affiliated with us and which may link to other websites, services,
      or applications. Accordingly, we do not make any guarantee regarding any
      such third parties, and we will not be liable for any loss or damage
      caused by the use of such third-party websites, services, or applications.
      The inclusion of a link towards a third-party website, service, or
      application does not imply an endorsement by us. We cannot guarantee the
      safety and privacy of data you provide to any third parties. Any data
      collected by third parties is not covered by this privacy notice. We are
      not responsible for the content or privacy and security practices and
      policies of any third parties, including other websites, services, or
      applications that may be linked to or from the Services. You should review
      the policies of such third parties and contact them directly to respond to
      your questions.
      <Section
        id="cookies"
        title={"6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?"}
        subtitle={`In Short: We may use cookies and other tracking technologies to collect
        and store your information.`}
      >
        <Paragraphs
          items={[
            <>
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to gather information when you interact with
              our Services. Some online tracking technologies help us maintain
              the security of our Services&nbsp;and your account, prevent
              crashes, fix bugs, save your preferences, and assist with basic
              site functions.We also permit third parties and service providers
              to use online tracking technologies on our Services for analytics
              and advertising, including to help manage and display
              advertisements, to tailor advertisements to your interests, or to
              send abandoned shopping cart reminders (depending on your
              communication preferences). The third parties and service
              providers use their technology to provide advertising about
              products and services tailored to your interests which may appear
              either on our Services or on other websites.Specific information
              about how we use such technologies and how you can refuse certain
              cookies is set out in our Cookie Notice:
              <Link to="http://www.tomandveronika.com/legal/cookiepolicy">
                http://www.tomandveronika.com/legal/cookiepolicy
              </Link>
            </>,
          ]}
        />
      </Section>
      <Section id="googleanalytics" extraTitle="Google Analytics">
        <Paragraphs
          items={[
            <>
              We may share your information with Google Analytics to track
              and&nbsp;analyze&nbsp;the use of the Services.&nbsp;The Google
              Analytics Advertising Features that we may use
              include:&nbsp;Google Analytics Demographics and Interests
              Reporting,&nbsp;Google Display Network Impressions
              Reporting&nbsp;and&nbsp;Remarketing with Google Analytics.&nbsp;To
              opt out of being tracked by Google Analytics across the Services,
              visit{" "}
              <Link to="https://tools.google.com/dlpage/gaoptout">
                https://tools.google.com/dlpage/gaoptout
              </Link>
              .&nbsp;You can opt out of Google Analytics Advertising Features
              through
              <Link to="https://adssettings.google.com/"> Ads Settings </Link>
              and Ad Settings for mobile apps. Other opt out means include
              <Link to="http://optout.networkadvertising.org/">
                {" "}
                http://optout.networkadvertising.org/{" "}
              </Link>
              and
              <Link to="http://www.networkadvertising.org/mobile-choice">
                {" "}
                http://www.networkadvertising.org/mobile-choice
              </Link>
              .&nbsp;For more information on the privacy practices of Google,
              please visit the{" "}
              <Link to="https://policies.google.com/privacy">
                Google Privacy &amp; Terms page
              </Link>
            </>,
          ]}
        />
      </Section>
      <h2 id=""></h2>
      <h4></h4>.<h4></h4>
      <Section
        id="sociallogins"
        title={"7. HOW DO WE HANDLE YOUR SOCIAL LOGINS?"}
        subtitle={`In Short: If you choose to register or log in to our Services using a
        social media account, we may have access to certain information about
        you.`}
      >
        <Paragraphs
          items={[
            <>
              Our Services offer you the ability to register and log in using
              your third-party social media account details (like your Facebook
              or X logins). Where you choose to do this, we will receive certain
              profile information about you from your social media provider. The
              profile information we receive may vary depending on the social
              media provider concerned, but will often include your name, email
              address, friends list, and profile picture, as well as other
              information you choose to make public on such a social media
              platform.
            </>,
            <>
              We will use the information we receive only for the purposes that
              are described in this privacy notice or that are otherwise made
              clear to you on the relevant Services. Please note that we do not
              control, and are not responsible for, other uses of your personal
              information by your third-party social media provider. We
              recommend that you review their privacy notice to understand how
              they collect, use, and share your personal information, and how
              you can set your privacy preferences on their sites and apps.
            </>,
          ]}
        />
      </Section>
      <Section
        id="intltransfers"
        title={"8. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?"}
        subtitle={`In Short: We may transfer, store, and process your information in
        countries other than your own.`}
      >
        <Paragraphs
          items={[
            <>
              Our servers are located in&nbsp;the&nbsp;United
              States&nbsp;and&nbsp;Norway. If you are accessing our Services
              from outside&nbsp;the&nbsp;United States&nbsp;and&nbsp;Norway,
              please be aware that your information may be transferred to,
              stored, and processed by us in our facilities and by those third
              parties with whom we may share your personal information
              (see&nbsp;"
              <Link to="#whoshare">
                WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
              </Link>
              "&nbsp;above), in&nbsp;the&nbsp;United
              States,&nbsp;Norway,&nbsp;and other countries.
            </>,
            <>
              If you are a resident in the European Economic Area (EEA), United
              Kingdom (UK), or Switzerland, then these countries may not
              necessarily have data protection laws or other similar laws as
              comprehensive as those in your country. However, we will take all
              necessary measures to protect your personal information in
              accordance with this privacy notice and applicable law.
            </>,
            <u>European Commission's Standard Contractual Clauses:</u>,
            <>
              {" "}
              We have implemented measures to protect your personal information,
              including by using the European Commission's Standard Contractual
              Clauses for transfers of personal information between our group
              companies and between us and our third-party providers. These
              clauses require all recipients to protect all personal information
              that they process originating from the EEA or UK in accordance
              with European data protection laws and regulations.&nbsp;Our
              Standard Contractual Clauses can be provided upon request.&nbsp;We
              have implemented similar appropriate safeguards with our
              third-party service providers and partners and further details can
              be provided upon request.
            </>,
          ]}
        />
      </Section>
      <Section
        id="inforetain"
        title={"9. HOW LONG DO WE KEEP YOUR INFORMATION?"}
        subtitle={`In Short: We keep your information for as long as necessary
        to fulfill the purposes outlined in this privacy notice unless
        otherwise required by law.`}
      >
        <Paragraphs
          items={[
            <>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements).&nbsp;No purpose in
              this notice will require us keeping your personal information for
              longer than&nbsp;three (3)&nbsp;months past the termination of the
              user's account&nbsp;.
            </>,
            <>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete
              or&nbsp;anonymize&nbsp;such information, or, if this is not
              possible (for example, because your personal information has been
              stored in backup archives), then we will securely store your
              personal information and isolate it from any further processing
              until deletion is possible.
            </>,
          ]}
        />
      </Section>
      <Section
        id="infosafe"
        title={"10. HOW DO WE KEEP YOUR INFORMATION SAFE?"}
        subtitle={`In Short: We aim to protect your personal information through a system
        of organizational and technical security measures.`}
      >
        <Paragraphs
          items={[
            <>
              We have implemented appropriate and reasonable technical
              and&nbsp;organizational&nbsp;security measures designed to protect
              the security of any personal information we process. However,
              despite our safeguards and efforts to secure your information, no
              electronic transmission over the Internet or information storage
              technology can be guaranteed to be 100% secure, so we cannot
              promise or guarantee that hackers, cybercriminals, or
              other&nbsp;unauthorized&nbsp;third parties will not be able to
              defeat our security and improperly collect, access, steal, or
              modify your information. Although we will do our best to protect
              your personal information, transmission of personal information to
              and from our Services is at your own risk. You should only access
              the Services within a secure environment.
            </>,
          ]}
        />
      </Section>
      <Section
        id="infominors"
        title={"11. DO WE COLLECT INFORMATION FROM MINORS?"}
        subtitle={`In Short: We do not knowingly collect data from or market
        to children under 18 years of age.`}
      >
        <Paragraphs
          items={[
            <>
              {" "}
              We do not knowingly collect, solicit data from, or market to
              children under 18 years of age, nor do we knowingly sell such
              personal information. By using the Services, you represent that
              you are at least 18 or that you are the parent or guardian of such
              a minor and consent to such minor dependent&rsquo;s use of the
              Services. If we learn that personal information from users less
              than 18 years of age has been collected, we will deactivate the
              account and take reasonable measures to promptly delete such data
              from our records. If you become aware of any data we may have
              collected from children under age 18, please contact us
              at&nbsp;tomelbin.bendheim@gmail.com.
            </>,
          ]}
        />
      </Section>
      <Section
        id="privacyrights"
        title={"12. WHAT ARE YOUR PRIVACY RIGHTS?"}
        subtitle={`In Short: In some regions, such as the European Economic
          Area (EEA), United Kingdom (UK), and Switzerland, you have rights that
          allow you greater access to and control over your personal
          information. You may review, change, or terminate your account at
          any time, depending on your country, province, or state of residence.`}
      >
        <Paragraphs
          items={[
            <>
              In some regions (like&nbsp;the EEA, UK, and Switzerland), you have
              certain rights under applicable data protection laws. These may
              include the right (i) to request access and obtain a copy of your
              personal information, (ii) to request rectification or erasure;
              (iii) to restrict the processing of your personal information;
              (iv) if applicable, to data portability; and (v) not to be subject
              to automated decision-making. In certain circumstances, you may
              also have the right to object to the processing of your personal
              information. You can make such a request by contacting us by using
              the contact details provided in the section&nbsp;"
              <Link to="#contact">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </Link>
              "&nbsp;below.{" "}
            </>,
            <>
              We will consider and act upon any request in accordance with
              applicable data protection laws.
            </>,
            <>
              {" "}
              If you are located in the EEA or UK and you believe we are
              unlawfully processing your personal information, you also have the
              right to complain to your
              <Link to="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
                Member State data protection authority
              </Link>
              or
              <Link to="https://ico.org.uk/make-a-complaint/data-protection-complaints/data-protection-complaints/">
                UK data protection authority
              </Link>
              .
            </>,
            <>
              {" "}
              If you are located in Switzerland, you may contact the
              <Link to="https://www.edoeb.admin.ch/edoeb/en/home.html">
                Federal Data Protection and Information Commissioner.
              </Link>
            </>,
            <u>Withdrawing your consent:</u>,
            <>
              {" "}
              If we are relying on your consent to process your personal
              information,&nbsp;you have the right to withdraw your consent at
              any time. You can withdraw your consent at any time by contacting
              us by using the contact details provided in the section&nbsp;"
              <Link to="#contact">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </Link>
              "&nbsp;below.
            </>,
            <>
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal nor,&nbsp;will it affect the
              processing of your personal information conducted in reliance on
              lawful processing grounds other than consent.
            </>,
            <u>Opting out of marketing and promotional communications:</u>,
            <>
              You can unsubscribe from our marketing and promotional
              communications at any time by&nbsp;clicking on the unsubscribe
              link in the emails that we send,&nbsp;or by contacting us using
              the details provided in the section&nbsp;"
              <Link to="#contact">
                HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
              </Link>
              "&nbsp;below. You will then be removed from the marketing lists.
              However, we may still communicate with you &mdash; for example, to
              send you service-related messages that are necessary for the
              administration and use of your account, to respond to service
              requests, or for other non-marketing purposes.
            </>,
            <u>Account Information</u>,
            <>
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
              <ItemList
                items={[
                  <>Contact us using the contact information provided.</>,
                ]}
              />
            </>,
            <>
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our legal terms and/or comply with applicable legal
              requirements.
            </>,
            <>
              {" "}
              <u>Cookies and similar technologies:</u> Most Web browsers are set
              to accept cookies by default. If you prefer, you can usually
              choose to set your browser to remove cookies and to reject
              cookies. If you choose to remove cookies or reject cookies, this
              could affect certain features or services of our
              Services.&nbsp;You may also
              <Link to="http://www.aboutads.info/choices/">
                opt out of interest-based advertising by advertisers
              </Link>
              on our Services.&nbsp;For further information, please see our
              Cookie Notice:
              <Link to="http://www.tomandveronika.com/legal/cookiepolicy">
                http://www.tomandveronika.com/legal/cookiepolicy
              </Link>
              .
            </>,
            <>
              If you have questions or comments about your privacy rights, you
              may email us at&nbsp;tomelbin.bendheim@gmail.com.
            </>,
          ]}
        />
      </Section>
      <Section id="DNT" title={"13. CONTROLS FOR DO-NOT-TRACK FEATURES"}>
        <Paragraphs
          items={[
            <>
              {" "}
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this stage, no uniform technology standard
              for&nbsp;recognizing&nbsp;and implementing DNT signals has
              been&nbsp;finalized. As such, we do not currently respond to DNT
              browser signals or any other mechanism that automatically
              communicates your choice not to be tracked online. If a standard
              for online tracking is adopted that we must follow in the future,
              we will inform you about that practice in a revised version of
              this privacy notice.
            </>,
          ]}
        />
      </Section>
      <h2 id=""></h2>
      <p></p>
      <Section
        id="policyupdates"
        title={"14. DO WE MAKE UPDATES TO THIS NOTICE?"}
        subtitle={`In Short: Yes, we will update this notice as necessary to stay compliant
        with relevant laws.`}
      >
        <Paragraphs
          items={[
            <>
              {" "}
              We may update this privacy notice from time to time. The updated
              version will be indicated by an updated&nbsp;"Revised"&nbsp;date
              at the top of this privacy notice. If we make material changes to
              this privacy notice, we may notify you either by prominently
              posting a notice of such changes or by directly sending you a
              notification. We encourage you to review this privacy notice
              frequently to be informed of how we are protecting your
              information.
            </>,
          ]}
        />
      </Section>
      <Section
        id="contact"
        title={"15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"}
      >
        <Paragraphs
          items={[
            <>
              If you have questions or comments about this notice, you
              may&nbsp;contact our Data Protection Officer (DPO)&nbsp;by email
              at&nbsp;tomelbin.bendheim@gmail.com
            </>,
          ]}
        />
      </Section>
      <Section
        id="request"
        title={
          "16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?"
        }
      >
        <Paragraphs
          items={[
            <>
              {" "}
              Based on the applicable laws of your country, you may&nbsp;have
              the right to request access to the personal information we collect
              from you, details about how we have processed it, correct
              inaccuracies, or delete your personal information. You may also
              have the right to withdraw your consent to our processing of your
              personal information. These rights may be limited in some
              circumstances by applicable law. To request to review, update, or
              delete your personal information,
              please&nbsp;visit:&nbsp;tomelbin.bendheim@gmail.com.
            </>,
          ]}
        />
      </Section>
    </div>
  );
};

export default PrivacyText;

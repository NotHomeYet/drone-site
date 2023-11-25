<script setup>
//example components
import DefaultNavbar from "../../../components/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../components/footers/FooterDefault.vue";
</script>
<template>
  <DefaultNavbar :action="{
    route: 'javascript:;',
    label: 'Buy Now',
    color: 'btn-white',
  }" transparent />

  <div class="mx-auto body-container">
    <div class="page-header min-height-400" :style="{ backgroundImage: `url(${image})` }" loading="lazy">
      <span class="mask bg-gradient-dark opacity-8">
        <div class="col-lg-8 text-center mx-auto my-auto mt-8">
          <h1 class="text-white">
            Privacy Policy
          </h1>
        </div>
      </span>
    </div>
    <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
      <div class="row mx-2">
        <div class="col-lg-12">
          <p>
            Last updated November 19, 2023
          </p>
          <p>
            This privacy notice for Altitude Droneworks ("we," "us," or "our"), describes how and why we might collect,
            store, use, and/or share ("process") your information when you use our services ("Services"), such as when
            you:
            Visit our website at altitudedroneworks.com, or any website of ours that links to this privacy notice
            Engage with us in other related ways, including any sales, marketing, or events
            Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices.
            If
            you do not agree with our policies and practices, please do not use our Services. If you still have any
            questions or concerns, please contact us at altitudedroneworks@gmail.com.

          </p>
          <p>
            SUMMARY OF KEY POINTS
          </p>
          <p>
            This summary provides key points from our privacy notice, but you can find out more details about any of these
            topics by clicking the link following each key point or by using our table of contents below to find the
            section
            you are looking for.
          </p>
          <p>
            What personal information do we process? When you visit, use, or navigate our Services, we may process
            personal
            information depending on how you interact with us and the Services, the choices you make, and the products and
            features you use. Learn more about personal information you disclose to us.
          </p>
          <p>
            Do we process any sensitive personal information? We do not process sensitive personal information.
          </p>
          <p>
            Do we receive any information from third parties? We do not receive any information from third parties.
          </p>
          <p>
            How do we process your information? We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process
            your information for other purposes with your consent. We process your information only when we have a valid
            legal reason to do so. Learn more about how we process your information.
          </p>
          <p>
            In what situations and with which parties do we share personal information? We may share information in
            specific
            situations and with specific third parties. Learn more about when and with whom we share your personal
            information.
          </p>
          <p>
            How do we keep your information safe? We have organizational and technical processes and procedures in place
            to
            protect your personal information. However, no electronic transmission over the internet or information
            storage
            technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers,
            cybercriminals,
            or other unauthorized third parties will not be able to defeat our security and improperly collect, access,
            steal, or modify your information. Learn more about how we keep your information safe.
          </p>
          <p>
            What are your rights? Depending on where you are located geographically, the applicable privacy law may mean
            you
            have certain rights regarding your personal information. Learn more about your privacy rights.
          </p>
          <p>
            How do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject
            access
            request, or by contacting us. We will consider and act upon any request in accordance with applicable data
            protection laws.
          </p>
          <p>
            Want to learn more about what we do with any information we collect? Review the privacy notice in full.
          </p>
          <p>

            TABLE OF CONTENTS
          </p>
          <p>
            1. WHAT INFORMATION DO WE COLLECT?<br />
            2. HOW DO WE PROCESS YOUR INFORMATION?<br />
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?<br />
            4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?<br />
            5. HOW LONG DO WE KEEP YOUR INFORMATION?<br />
            6. HOW DO WE KEEP YOUR INFORMATION SAFE?<br />
            7. DO WE COLLECT INFORMATION FROM MINORS?<br />
            8. WHAT ARE YOUR PRIVACY RIGHTS?<br />
            9. CONTROLS FOR DO-NOT-TRACK FEATURES<br />
            10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?<br />
            11. DO WE MAKE UPDATES TO THIS NOTICE?<br />
            12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?<br />
            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?<br />
          </p>
          <p>

            1. WHAT INFORMATION DO WE COLLECT?
          </p>
          <p>
            Personal information you disclose to us
          </p>
          <p>
            In Short: We collect personal information that you provide to us.
          </p>
          <p>
            We collect personal information that you voluntarily provide to us when you express an interest in obtaining
            information about us or our products and Services, when you participate in activities on the Services, or
            otherwise when you contact us.
          </p>
          <p>
            Personal Information Provided by You. The personal information that we collect depends on the context of your
            interactions with us and the Services, the choices you make, and the products and features you use. The
            personal
            information we collect may include the following:
            names
            phone numbers
            email addresses
            Sensitive Information. We do not process sensitive information.
          </p>
          <p>
            Payment Data. We may collect data necessary to process your payment if you make purchases, such as your
            payment
            instrument number, and the security code associated with your payment instrument. All payment data is stored
            by
            Square. You may find their privacy notice link(s) here:
            https://squareup.com/us/en/legal/general/privacy-no-account.
          </p>
          <p>
            All personal information that you provide to us must be true, complete, and accurate, and you must notify us
            of
            any changes to such personal information.
          </p>
          <p>
            Information automatically collected
          </p>
          <p>
            In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device
            characteristics — is collected automatically when you visit our Services.
          </p>
          <p>
            We automatically collect certain information when you visit, use, or navigate the Services. This information
            does not reveal your specific identity (like your name or contact information) but may include device and
            usage
            information, such as your IP address, browser and device characteristics, operating system, language
            preferences, referring URLs, device name, country, location, information about how and when you use our
            Services, and other technical information. This information is primarily needed to maintain the security and
            operation of our Services, and for our internal analytics and reporting purposes.
          </p>
          <p>
            Like many businesses, we also collect information through cookies and similar technologies.
          </p>
          <p>
            The information we collect includes:
            Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our
            servers automatically collect when you access or use our Services and which we record in log files. Depending
            on
            how you interact with us, this log data may include your IP address, device information, browser type, and
            settings and information about your activity in the Services (such as the date/time stamps associated with
            your
            usage, pages and files viewed, searches, and other actions you take such as which features you use), device
            event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware
            settings).
          </p>
          <p>
            2. HOW DO WE PROCESS YOUR INFORMATION?
          </p>
          <p>
            In Short: We process your information to provide, improve, and administer our Services, communicate with you,
            for security and fraud prevention, and to comply with law. We may also process your information for other
            purposes with your consent.
          </p>
          <p>
            We process your personal information for a variety of reasons, depending on how you interact with our
            Services,
            including:
            To deliver and facilitate delivery of services to the user. We may process your information to provide you
            with
            the requested service.
            To respond to user inquiries/offer support to users. We may process your information to respond to your
            inquiries and solve any potential issues you might have with the requested service.
            To send administrative information to you. We may process your information to send you details about our
            products and services, changes to our terms and policies, and other similar information.
          </p>
          <p>


            To request feedback. We may process your information when necessary to request feedback and to contact you
            about
            your use of our Services.
          </p>
          <p>
            To post testimonials. We post testimonials on our Services that may contain personal information.
            To identify usage trends. We may process information about how you use our Services to better understand how
            they are being used so we can improve them.
            To comply with our legal obligations. We may process your information to comply with our legal obligations,
            respond to legal requests, and exercise, establish, or defend our legal rights.
          </p>
          <p>
            3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </p>
          <p>
            In Short: We may share information in specific situations described in this section and/or with the following
            third parties.
          </p>
          <p>
            We may need to share your personal information in the following situations:
            Business Transfers. We may share or transfer your information in connection with, or during negotiations of,
            any
            merger, sale of company assets, financing, or acquisition of all or a portion of our business to another
            company.
            Business Partners. We may share your information with our business partners to offer you certain products,
            services, or promotions.
          </p>
          <p>
            4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
          </p>
          <p>
            In Short: We may use cookies and other tracking technologies to collect and store your information.
          </p>
          <p>
            We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store
            information. Specific information about how we use such technologies and how you can refuse certain cookies is
            set out in our Cookie Notice.
          </p>
          <p>
            5. HOW LONG DO WE KEEP YOUR INFORMATION?
          </p>
          <p>
            In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy
            notice unless otherwise required by law.
          </p>
          <p>
            We will only keep your personal information for as long as it is necessary for the purposes set out in this
            privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or
            other legal requirements).
          </p>
          <p>
            When we have no ongoing legitimate business need to process your personal information, we will either delete
            or
            anonymize such information, or, if this is not possible (for example, because your personal information has
            been
            stored in backup archives), then we will securely store your personal information and isolate it from any
            further processing until deletion is possible.
          </p>
          <p>
            6. HOW DO WE KEEP YOUR INFORMATION SAFE?
          </p>
          <p>
            In Short: We aim to protect your personal information through a system of organizational and technical
            security
            measures.
          </p>
          <p>
            We have implemented appropriate and reasonable technical and organizational security measures designed to
            protect the security of any personal information we process. However, despite our safeguards and efforts to
            secure your information, no electronic transmission over the Internet or information storage technology can be
            guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other
            unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or
            modify your information. Although we will do our best to protect your personal information, transmission of
            personal information to and from our Services is at your own risk. You should only access the Services within
            a
            secure environment.
          </p>
          <p>
            7. DO WE COLLECT INFORMATION FROM MINORS?
          </p>
          <p>
            In Short: We do not knowingly collect data from or market to children under 18 years of age.
          </p>
          <p>
            We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you
            represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such
            minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of
            age has been collected, we will deactivate the account and take reasonable measures to promptly delete such
            data
            from our records. If you become aware of any data we may have collected from children under age 18, please
            contact us at altitudedroneworks@gmail.com.
          </p>
          <p>
            8. WHAT ARE YOUR PRIVACY RIGHTS?
          </p>
          <p>
            In Short: You may review, change, or terminate your account at any time.
          </p>
          <p>
            Withdrawing your consent: If we are relying on your consent to process your personal information, which may be
            express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at
            any time. You can withdraw your consent at any time by contacting us by using the contact details provided in
            the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below.
          </p>
          <p>
            However, please note that this will not affect the lawfulness of the processing before its withdrawal nor,
            when
            applicable law allows, will it affect the processing of your personal information conducted in reliance on
            lawful processing grounds other than consent.
          </p>
          <p>
            Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional
            communications at any time by clicking on the unsubscribe link in the emails that we send, replying "STOP" or
            "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us using the details provided in the section
            "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You will then be removed from the marketing lists. However,
            we may still communicate with you — for example, to send you service-related messages that are necessary for
            the
            administration and use of your account, to respond to service requests, or for other non-marketing purposes.
          </p>
          <p>
            Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you
            can
            usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or
            reject cookies, this could affect certain features or services of our Services.
          </p>
          <p>
            If you have questions or comments about your privacy rights, you may email us at altitudedroneworks@gmail.com.
          </p>
          <p>
            9. CONTROLS FOR DO-NOT-TRACK FEATURES
          </p>
          <p>
            Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT")
            feature or setting you can activate to signal your privacy preference not to have data about your online
            browsing activities monitored and collected. At this stage no uniform technology standard for recognizing and
            implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or
            any
            other mechanism that automatically communicates your choice not to be tracked online. If a standard for online
            tracking is adopted that we must follow in the future, we will inform you about that practice in a revised
            version of this privacy notice.
          </p>
          <p>
            10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
          </p>
          <p>
            In Short: If you are a resident of Colorado, you are granted specific rights regarding access to your personal
            information.
          </p>
          <p>
            What categories of personal information do we collect?
          </p>
          <p>
            We have collected the following categories of personal information in the past twelve (12) months:
          </p>
          <p>
            Category Examples Collected
            A. Identifiers
            Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal
            identifier, online identifier, Internet Protocol address, email address, and account name
          </p>
          <p>
            YES
          </p>
          <p>
            B. Protected classification characteristics under state or federal law
            Gender and date of birth
          </p>
          <p>
            NO
          </p>
          <p>
            C. Commercial information
            Transaction information, purchase history, financial details, and payment information
          </p>
          <p>
            NO
          </p>
          <p>
            D. Biometric information
            Fingerprints and voiceprints
          </p>
          <p>
            NO
          </p>
          <p>
            E. Internet or other similar network activity
            Browsing history, search history, online behavior, interest data, and interactions with our and other
            websites,
            applications, systems, and advertisements
          </p>
          <p>
            NO
          </p>
          <p>
            F. Geolocation data
            Device location
          </p>
          <p>
            NO
          </p>
          <p>
            G. Audio, electronic, visual, thermal, olfactory, or similar information
            Images and audio, video or call recordings created in connection with our business activities
          </p>
          <p>
            NO
          </p>
          <p>
            H. Professional or employment-related information
            Business contact details in order to provide you our Services at a business level or job title, work history,
            and professional qualifications if you apply for a job with us
          </p>
          <p>
            NO
          </p>
          <p>
            I. Education Information
            Student records and directory information
          </p>
          <p>
            NO
          </p>
          <p>
            J. Inferences drawn from collected personal information
            Inferences drawn from any of the collected personal information listed above to create a profile or summary
            about, for example, an individual’s preferences and characteristics
          </p>
          <p>
            NO
          </p>
          <p>
            K. Sensitive personal Information
          </p>
          <p>
            NO

          </p>
          <p>
            We will use and retain the collected personal information as needed to provide the Services or for:
            Category A - As long as the user has an account with us
            We may also collect other personal information outside of these categories through instances where you
            interact
            with us in person, online, or by phone or mail in the context of:
            Receiving help through our customer support channels;
            Participation in customer surveys or contests; and
            Facilitation in the delivery of our Services and to respond to your inquiries.
            How do we use and share your personal information?
          </p>
          <p>
            Learn about how we use your personal information in the section, "HOW DO WE PROCESS YOUR INFORMATION?"
          </p>
          <p>
            Will your information be shared with anyone else?
          </p>
          <p>
            We may disclose your personal information with our service providers pursuant to a written contract between us
            and each service provider. Learn more about how we disclose personal information to in the section, "WHEN AND
            WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"
          </p>
          <p>
            We may use your personal information for our own business purposes, such as for undertaking internal research
            for technological development and demonstration. This is not considered to be "selling" of your personal
            information.
          </p>
          <p>
            We have not disclosed, sold, or shared any personal information to third parties for a business or commercial
            purpose in the preceding twelve (12) months. We will not sell or share personal information in the future
            belonging to website visitors, users, and other consumers.
          </p>
          <p>
            Colorado Residents
          </p>
          <p>
            This section applies only to Colorado residents. Under the Colorado Privacy Act (CPA), you have the rights
            listed below. However, these rights are not absolute, and in certain cases, we may decline your request as
            permitted by law.
            Right to be informed whether or not we are processing your personal data
            Right to access your personal data
            Right to correct inaccuracies in your personal data
            Right to request deletion of your personal data
            Right to obtain a copy of the personal data you previously shared with us
            Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of
            personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects
            ("profiling")
            To submit a request to exercise these rights described above, please email altitudedroneworks@gmail.com or
            submit a data subject access request.
          </p>
          <p>
            If we decline to take action regarding your request and you wish to appeal our decision, please email us at
            altitudedroneworks@gmail.com. Within forty-five (45) days of receipt of an appeal, we will inform you in
            writing
            of any action taken or not taken in response to the appeal, including a written explanation of the reasons for
            the decisions.
          </p>
          <p>
            11. DO WE MAKE UPDATES TO THIS NOTICE?
          </p>
          <p>
            In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
          </p>
          <p>
            We may update this privacy notice from time to time. The updated version will be indicated by an updated
            "Revised" date and the updated version will be effective as soon as it is accessible. If we make material
            changes to this privacy notice, we may notify you either by prominently posting a notice of such changes or by
            directly sending you a notification. We encourage you to review this privacy notice frequently to be informed
            of
            how we are protecting your information.
          </p>
          <p>
            12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </p>
          <p>
            If you have questions or comments about this notice, you may email us at altitudedroneworks@gmail.com </p>
          <p>

            13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
          </p>
          <p>
            Based on the applicable laws of your country, you may have the right to request access to the personal
            information we collect from you, change that information, or delete it. To request to review, update, or
            delete
            your personal information, please fill out and submit a data subject access request.
          </p>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>

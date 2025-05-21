import React from 'react'
import Footer from '@/component/footer'
import Image from 'next/image'
import Link from 'next/link'

const TermsAndConditions = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className='flex justify-center items-center mb-10'>
          <Image src="/images/cdg-logo.png" alt="Combat Door Gym Logo" width={100} height={100} />
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy for COMBAT DOOR GYM</h1>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <p>
              <strong>Effective Date: May 9, 2025</strong>
            </p>
            <p>
              At COMBAT DOOR GYM, we are committed to protecting
              your privacy. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit
              our website combatdoorgym.com, use our services, or
              interact with us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Information We Collect</h2>
            <p>
              We may collect personal information that you provide
              directly to us, such as your name, email address, phone
              number, and shipping address when you purchase our
              products or contact us for inquiries.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">How We Use Your Information</h2>
            <p>
              We may use the information we collect in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To process and fulfill your orders and requests</li>
              <li>To communicate with you, including providing customer
                service and support</li>
              <li>To improve our products and services</li>
              <li>To send you promotional emails about new products,
                special offers, or other information we think you may find
                interesting</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Sharing Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties
              your personally identifiable information. This does not
              include trusted third parties who assist us in operating our
              website, conducting our business, or servicing you, so long
              as those parties agree to keep this information confidential.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Data Security</h2>
            <p>
              We implement security measures designed to protect your
              personal information from unauthorized access, disclosure,
              use, and modification. However, no data transmission over
              the internet or method of electronic storage is 100% secure.
              Therefore, while we strive to use commercially acceptable
              means to protect your personal information, we cannot
              guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Your Choices</h2>
            <p>
              You can choose not to provide certain personal information,
              although this may limit your ability to use our services or
              certain features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time in order
              to reflect changes to our practices or for other operational,
              legal, or regulatory reasons.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at info@combatdoorgym.com
            </p>
          </section>
        </div>
      </div>
      <div id="footer">
        <Footer />
      </div>
    </>
  )
}

export default TermsAndConditions
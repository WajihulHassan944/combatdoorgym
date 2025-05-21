import React from 'react'
import Footer from '@/component/footer'
import Link from 'next/link'
import Image from 'next/image'

const PrivacyPolicy = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className='flex justify-center items-center mb-10'>
          <Image src="/images/cdg-logo.png" alt="Combat Door Gym Logo" width={100} height={100} />
        </Link>
        <h1 className="text-4xl font-bold mb-8 text-center">Terms and Conditions</h1>
        <div className="space-y-8 text-gray-700 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-2">1. Scope of Application</h2>
            <p>
              1.1 These General Terms and Conditions (GTC) apply to all
              agreements between COMBAT DOOR GYM &quot;Seller&quot; and
              any consumer or business &quot;Client&quot; through our online
              shop or affiliated platforms.
            </p>
            <p>
              1.2 These terms govern both physical products (e.g.,
              workout equipment) and digital content (e.g., training
              programs).
            </p>
            <p>
              1.3 By completing a purchase, you agree to these conditions
              in full.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">2. Conclusion of the Contract</h2>
            <p>
              2.1 Product listings on our website are not legally binding
              offers.
            </p>
            <p>
              2.2 Clients place a binding order by completing checkout.
            </p>
            <p>
              2.3 Acceptance of the order is confirmed by email, shipment,
              or receipt of payment.
            </p>
            <p>
              2.4 Orders through integrated payment processors (e.g.,
              Stripe, PayPal) are confirmed once payment is successfully
              processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">3. Right to Cancel</h2>
            <p>
              3.1 Consumers (not businesses) have a right to cancel within
              14 days of delivery without giving a reason.
            </p>
            <p>
              3.2 Instructions and a cancellation form are available upon
              request or through the designated cancellation page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">4. Prices and Payment Conditions</h2>
            <p>
              4.1 All prices include applicable taxes. Shipping costs are
              listed separately.
            </p>
            <p>
              4.2 Payment methods accepted include major credit/debit
              cards and trusted third-party payment platforms.
            </p>
            <p>
              4.3 Non-U.S. customers may be responsible for customs
              duties or bank processing fees.
            </p>
            <p>
              4.4 Orders must be paid in full at the time of placement
              unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">5. Shipment and Delivery Conditions</h2>
            <p>
              5.1 Orders are delivered to the shipping address provided by
              the Client.
            </p>
            <p>
              5.2 In case of non-delivery due to incorrect information,
              reshipping fees may apply.
            </p>
            <p>
              5.3 Digital content is delivered electronically (e.g., email,
              download link).
            </p>
            <p>
              5.4 COMBAT DOOR GYM is not liable for delays caused by
              shipping carriers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">6. Granting Rights of Use for Digital Content</h2>
            <p>
              6.1 Upon full payment, the Client receives a non-exclusive,
              non-transferable right to use the digital product for personal
              or internal business use.
            </p>
            <p>
              6.2 Redistribution, resale, or public sharing without written
              permission is prohibited.
            </p>
            <p>
              6.3 Access may be revoked if terms are violated or payment
              is reversed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">7. Reservation of Proprietary Rights</h2>
            <p>
              Ownership of goods remains with COMBAT DOOR GYM until
              full payment is received.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">8. Warranty</h2>
            <p>
              8.1 Products come with a limited warranty in accordance
              with U.S. consumer protection laws.
            </p>
            <p>
              8.2 Used items may come with a reduced or excluded
              warranty.
            </p>
            <p>
              8.3 Clients must notify us immediately if a product arrives
              damaged or defective.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">9. Redemption of Campaign Vouchers</h2>
            <p>
              9.1 Promotional vouchers are valid for a limited time and may
              only be used once per order.
            </p>
            <p>
              9.2 Vouchers cannot be redeemed for cash or combined
              with other offers.
            </p>
            <p>
              9.3 If a product purchased with a voucher is returned, no
              replacement voucher will be issued.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">10. Applicable Law</h2>
            <p>
              These terms are governed by the laws of the State of
              Georgia, United States.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">11. Place of Jurisdiction</h2>
            <p>
              Any disputes will be resolved exclusively in the courts
              located in Atlanta, Georgia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-2">12. Alternative Dispute Resolution</h2>
            <p>
              For any concerns, clients are encouraged to reach out to
              info@combatdoorgym.com. If necessary, mediation may
              be pursued via a recognized online dispute resolution
              service.
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

export default PrivacyPolicy
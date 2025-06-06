import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <div>
           <div className="bg-[#14532D] text-white py-4 mt-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">
          {/* Logo */}
          <Link href="/" className="flex items-center">
                <Image
              src="/images/cdg-logo.png"
              alt="Combat Door Gym Logo"
              width={80}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Footer Links */}
       

          {/* Copyright Text */}
          <div className="text-white/70 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Combat Door Gym. All Rights Reserved.
            <div>
            <div className="flex gap-6 mb-2 md:mb-0 mt-3">
            <Link href="/terms-and-conditions" className="text-white/70 text-sm hover:underline">
              Terms &amp; Conditions
            </Link>
            <Link href="/privacy-policy" className="text-white/70 text-sm hover:underline">
              Privacy Policy
            </Link>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
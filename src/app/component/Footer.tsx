'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LocationMap from "./LocationMap";
import { SOCIAL_LINKS } from "./socialLinks";

const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = () => {
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 3000); // Hide message after 3 seconds
  };

  return (
    <footer className="py-10 bg-gray-900 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
            <div className="flex justify-center gap-6 mb-4">
              <motion.a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CurePlus Blood Center on Facebook"
                className="text-2xl hover:text-blue-600 transition"
                whileHover={{ scale: 1.1 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CurePlus Blood Center on Instagram"
                className="text-2xl hover:text-pink-500 transition"
                whileHover={{ scale: 1.1 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CurePlus Blood Center on YouTube"
                className="text-2xl hover:text-red-600 transition"
                whileHover={{ scale: 1.1 }}
              >
                <FaYoutube />
              </motion.a>
            </div>
          </div>

          {/* Make spacing mobile friendly */}
          <div className="grid md:grid-cols-3 gap-8 mb-6">
            <div className="flex flex-col items-center md:-mt-20 -mt-0">
              <Image
                className="h-28 w-80 rounded-md p-1 mb-4"
                src="/finallogo.png"
                alt="Blood Bank"
                width={320} // or the actual width of your image
                height={112} // or the actual height of your image
                priority // optional: use if it's a top-of-page logo or above-the-fold image
              />
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
                <p className="text-gray-400">Phone: 0821 450 6445</p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
              <ul className="text-gray-400">
                <li><Link href="/" className="hover:text-red-600 transition">Home</Link></li>
                <li><Link href="#how-it-works" className="hover:text-red-600 transition">How It Works</Link></li>
                <li><Link href="/about-cureplus-blood-bank" className="hover:text-red-600 transition">About</Link></li>
                <li><Link href="/blood-donor-registration" className="hover:text-red-600 transition">Join Us</Link></li>
                <li><Link href="/faq" className="hover:text-red-600 transition">FAQs</Link></li>
              </ul>
            </div>

            <div className="md:-mt-16 -mt-0">
              <h3 className="text-xl font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 rounded-md text-black mb-4"
              />
              <motion.button
                className="bg-gradient-to-r from-red-600 to-red-900 hover:bg-red-900 text-white py-2 px-4 rounded-lg"
                whileHover={{ scale: 1.1 }}
                onClick={handleSubscribe}
              >
                Subscribe
              </motion.button>
              {subscribed && (
                <div className="mt-2 text-yellow-500">
                  <p>This feature is under development. Stay tuned!</p>
                </div>
              )}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-6">
            <h3 className="text-xl font-semibold mb-4">Our Location</h3>
            <LocationMap className="h-64 md:h-72" />
          </div>
        </div>
        <div className="py-4 bg-gray-800">
          <p className="text-gray-400">&copy;2025 CurePlus Blood Center - All Rights Reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

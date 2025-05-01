import Link from "next/link";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Carolinian Events</span>
            </Link>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Connecting students with campus events and activities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/events" className="text-sm hover:underline">
                  Browse Events
                </Link>
              </li>
              <li>
                <Link href="/create" className="text-sm hover:underline">
                  Create Event
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:underline">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="font-semibold">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm">events@carolinian.edu</li>
              <li className="text-sm">(123) 456-7890</li>
              <li className="text-sm">University Main Campus</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-2">
            <h3 className="font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="https://github.com" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </Link>
              <Link href="https://twitter.com" aria-label="Twitter">
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link href="https://instagram.com" aria-label="Instagram">
                <FaInstagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Carolinian Events. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
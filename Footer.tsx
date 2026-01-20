import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-slate-300 mb-4">EthFinser</h3>
            <p className="text-gray-400">
              Leading financial consulting services providing expert guidance for businesses worldwide.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-slate-400" />
                <span className="text-gray-400">contact@ethfinser.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-slate-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-slate-400" />
                <span className="text-gray-400">123 Finance St, New York, NY</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-slate-300 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/what-we-do" className="text-gray-400 hover:text-slate-300 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-slate-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EthFinser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
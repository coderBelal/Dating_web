import {
  Facebook,
  Instagram,
  Linkedin,
  Mail
} from "lucide-react";

const Footer = () => {
  return (
    <footer className=" bg-[#522b79]  text-white pt-10 pb-6 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Help & Support */}
        <div>
          <h4 className="font-bold text-lg mb-3">Help & Support</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Get Free Registration</a></li>
            <li><a href="#">Membership Plans</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Sitemap</a></li>
          </ul>
        </div>

        {/* Corporate */}
        <div>
          <h4 className="font-bold text-lg mb-3">Corporate</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Mission & Vision</a></li>
            <li><a href="#">Affiliates/B2B</a></li>
            <li><a href="#">VIP Service</a></li>
            <li><a href="#">Life Style Blogs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-bold text-lg mb-3">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms and Condition</a></li>
            <li><a href="#">Fraud Alert</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="font-bold text-lg mb-3">Social</h4>
          <p className="text-sm mb-3">Engage to our social media to get updates</p>
          <div className="flex gap-3">
            <a href="#"><Facebook className="text-blue-600 hover:scale-110 transition" /></a>
            <a href="#"><Instagram className="text-pink-500 hover:scale-110 transition" /></a>
            <a href="#"><Linkedin className="text-blue-800 hover:scale-110 transition" /></a>
            <a href="#"><Mail className="text-red-500 hover:scale-110 transition" /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-sm text-white">
        &copy; 2025  Dating| All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
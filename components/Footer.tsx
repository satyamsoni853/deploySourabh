import { Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm font-bold bg-clip-text text-transparent bg-linear-to-r from-green-400 via-blue-500 to-[#368ACA]">
          &copy; 2026 CloudFire IIT Service. All rights reserved.
        </p>
        <div className="flex space-x-6 items-center">
          <a
            href="https://www.linkedin.com/company/cloudfire-it-services/posts/?feedView=all&viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0A66C2] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

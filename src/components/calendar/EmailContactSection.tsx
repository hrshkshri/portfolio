import React from "react";
import { Mail, ExternalLink } from "lucide-react";

const EmailContactSection: React.FC = () => {
  return (
    <div className="mb-8 bg-gradient-to-br from-amber-500/10 to-blue-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6">
      <div className="flex items-center gap-4">
        <div className="p-4 bg-amber-500/20 rounded-xl">
          <Mail className="w-8 h-8 text-amber-400" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-white text-lg mb-2">
            Or drop me an email directly
          </h3>
          <p className="text-neutral-400 text-sm mb-3">
            If scheduling doesn't work for you, feel free to reach out via
            email. I typically respond within 24 hours! 📧
          </p>
          <a
            href="mailto:harshkeshari100@gmail.com"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors group"
          >
            <span>harshkeshari100@gmail.com</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmailContactSection;

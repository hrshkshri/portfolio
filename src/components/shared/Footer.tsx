import Link from 'next/link';
import React, { memo } from 'react';
import { socialLinks } from '../shared/constant';

const Footer: React.FC = () => {
    return (
        <footer className="flex items-center justify-center space-x-5 p-4 text-white bg-black">
            {socialLinks.map((link, index) => (
                <Link key={index} href={link.href} aria-label={link.label}>
                    <link.icon
                        className="w-6 h-6 hover:text-amber-300 transition-transform transform hover:scale-110"
                        aria-hidden="true"
                    />
                </Link>
            ))}
        </footer>
    );
};

export default memo(Footer);

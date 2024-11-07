import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full text-center py-4 pt-2  font-semibold text-neutral-300">
             &copy; {currentYear} Crafter Code. All rights reserved.
        </footer>
    );
};

export default Footer;

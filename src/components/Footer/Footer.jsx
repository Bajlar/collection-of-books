import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-6 text-center text-sm text-gray-400">
      <p>© {currentYear} nextPage Inc. All rights reserved.</p>
    </div>
  );
};

export default Footer;
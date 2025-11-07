import React from "react";

/**
 * Reusable section header component with gradient title and optional subtitle
 * Used across multiple sections for consistency
 */
const SectionHeader = ({ title, subtitle, className = "" }) => (
  <div className={`text-center mb-10 ${className}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

export default SectionHeader;

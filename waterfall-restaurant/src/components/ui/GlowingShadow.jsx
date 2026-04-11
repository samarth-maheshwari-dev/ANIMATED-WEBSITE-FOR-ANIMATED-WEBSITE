import React from 'react';
import '../../styles/glow.css';

/**
 * GlowingShadow Component
 * A premium UI card with animated radial gradients and orbit glows.
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} props.className
 */
export function GlowingShadow({ children, className = "" }) {
  return (
    <div className={`glow-container ${className}`} role="button">
      <span className="glow-dot"></span>
      <div className="glow-content">
        {children}
      </div>
    </div>
  );
}

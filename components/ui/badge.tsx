// components/ui/badge.tsx

import React from "react";

interface BadgeProps {
  text: string;
  color?: string;
}

const Badge: React.FC<BadgeProps> = ({ text, color = "blue" }) => {
  return (
    <span
      style={{
        backgroundColor: color,
        color: "white",
        padding: "5px 10px",
        borderRadius: "12px",
      }}
    >
      {text}
    </span>
  );
};

export default Badge;

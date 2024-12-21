import React from 'react';

interface OrganicShapeProps {
  className?: string;
}

export const OrganicShape: React.FC<OrganicShapeProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill="currentColor"
        d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-1.0C87.0,14.3,81.4,28.5,73.4,41.1C65.4,53.7,55.1,64.6,42.2,74.3C29.3,84.1,14.7,92.7,-0.9,94.1C-16.5,95.5,-32.9,89.7,-45.8,80.1C-58.6,70.5,-67.9,57.1,-74.7,42.8C-81.5,28.4,-85.9,14.2,-86.3,-0.2C-86.7,-14.7,-83.1,-29.3,-75.6,-41.9C-68.1,-54.5,-56.7,-65,-43.7,-72.5C-30.7,-80,-15.4,-84.5,0.2,-84.8C15.7,-85.1,31.5,-81.3,44.7,-76.4Z"
        transform="translate(100 100)"
      />
    </svg>
  );
};
import React from 'react'

interface CurvedDashedSeparatorProps {
  className?: string
}

const CurvedDashedSeparator: React.FC<CurvedDashedSeparatorProps> = ({ className = '' }) => {
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <svg
        className="w-full h-auto"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,0 C150,90 450,30 600,60 C750,90 1050,30 1200,0"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8,8"
          className="text-gray-300"
        ></path>
        <path
          d="M0,30 C300,120 900,60 1200,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="12,12"
          className="text-gray-400"
        ></path>
        <path
          d="M0,60 C450,0 750,120 1200,60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="16,16"
          className="text-gray-500"
        ></path>
      </svg>
    </div>
  )
}

export default CurvedDashedSeparator


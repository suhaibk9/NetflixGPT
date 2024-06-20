import React from 'react';

const ShimmerCard = () => {
  return (
    <div className="w-64 h-72 m-5 bg-gray-200 relative overflow-hidden rounded-lg">
      <div
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"
        style={{
          animation: 'shimmer 1.5s infinite',
          transform: 'translateX(-100%)',
        }}
      ></div>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ShimmerCard;

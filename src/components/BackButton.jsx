'use client';

import React from 'react';

import { useRouter } from 'next/navigation';

function BackButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/#footer');
    router.replace('/');
  };

  return (
    <div className="min-[1160px]:absolute top-4 left-4 mb-6 max-[1160px]:mt-4 max-[1160px]:ml-4 active:translate-x-px active:translate-y-0.5">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex items-center px-4 py-2 bg-[#e83e8c] hover:bg-[#e83e8dbb] text-white text-sm font-medium rounded-md cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
          />
        </svg>
        Retour
      </button>
    </div>
  );
}

export default BackButton;

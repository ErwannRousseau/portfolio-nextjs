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
    <div className="left-4 top-4 mb-6 active:translate-x-px active:translate-y-0.5 max-[1160px]:ml-4 max-[1160px]:mt-4 min-[1160px]:absolute">
      <button
        type="button"
        onClick={handleClick}
        className="inline-flex cursor-pointer items-center rounded-md bg-[#e83e8c] px-4 py-2 text-sm font-medium text-white hover:bg-[#e83e8dbb]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 h-5 w-5"
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

// src/components/Home.js
import React from "react";

function Page({ children }) {
  return (
    <div className=" mx-auto p-6 mb-4 max-w-7xl px-6 py-8 md:mx-auto md:w-full md:py-10 md:px-14">
      {children}
    </div>
  );
}

export default Page;

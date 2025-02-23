import React, { useState } from "react";

import NavBar from "../components/navbar";
import AsidesSection from "../components/aside";
import ComingSoon from "../components/comingSoon";

const Wallet = () => {
  return (
    <>
      <AsidesSection />
      <main className="min-h-dvh ml-12 w-full bg-dark-1 overflow-hidden">
        <NavBar />
        <div className="body p-8 grid gap-8">
          <ComingSoon />
        </div>
      </main>
    </>
  );
};

export default Wallet;

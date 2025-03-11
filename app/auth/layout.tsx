import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center items-center h-full bg-sky-900 text-white">
      {children}
    </div>
  );
};

export default AuthLayout;

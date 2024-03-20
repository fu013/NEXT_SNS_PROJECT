import React, { ReactNode } from "react";

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h3>홈 레이아웃</h3>
      {children}
    </div>
  );
}

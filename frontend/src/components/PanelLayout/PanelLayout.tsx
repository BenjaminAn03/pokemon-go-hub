import React from "react";

interface PanelLayoutProps {
  children: React.ReactNode;
}

const PanelLayout = ({ children }: PanelLayoutProps) => {
  return React.Children.count(children) === 1 ? (
    <div className="w-full px-3 pb-3 lg:max-w-3xl">{children}</div>
  ) : (
    <div className="grid w-full max-w-7xl grid-cols-1 gap-3 px-3 pb-3 lg:grid-cols-2">
      {children}
    </div>
  );
}

export default PanelLayout;
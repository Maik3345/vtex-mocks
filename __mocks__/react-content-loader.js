import React from "react";

export const ContentLoad = ({ children, "data-testid": testId }) => (
  <svg
    className="content-loader-mock"
    {...(testId ? { "data-testid": testId } : {})}
  >
    {children}
  </svg>
);

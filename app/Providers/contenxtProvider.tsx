"use client";

import React from "react";
import { GlobalProvider } from "../Context/globalProvider";

interface Props {
  children: React.ReactNode;
}

function ContextProvider({ children }: Props) {
  const [useReady, setUseReady] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setUseReady(true);
    }, 200);
  }, []);

  if (!useReady) {
    return null;
  }

  return <GlobalProvider>{children}</GlobalProvider>;
}

export default ContextProvider;

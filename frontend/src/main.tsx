import React from "react";
import ReactDOM from "react-dom/client";

import { Router } from "@/components";
import { UserProvider } from "@/contexts/user";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
      <Router />
    </UserProvider>
  </React.StrictMode>
);

import React, { useState } from "react";
import "./App.css";

import { SessionContext } from "./provider/sessionContext";
import { AppRouter } from "./routes/AppRouter";

function App() {
  const [session, setSession] = useState({});
  return (
    <SessionContext.Provider value={{ session, setSession }}>
      <AppRouter />
    </SessionContext.Provider>
  );
}

export default App;

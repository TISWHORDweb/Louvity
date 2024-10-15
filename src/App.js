import React, { Suspense, useEffect } from "react"
import { Routes, Route } from 'react-router-dom'
import IndexThree from "./pages/IndexThree"
import Error404Modern from "./pages/error/404-modern"

function App() {
  useEffect(() => {
    document.body.className = "nk-body bg-white npc-landing no-touch nk-nio-theme";
  }, []);

  return (
    <Suspense fallback={<div />}>
      <div className="nk-app-root">
      <Routes>
          <Route path={`/`} element={<IndexThree />} />
          <Route path="*" element={<Error404Modern />}></Route>
        </Routes>
    </div>
    </Suspense >
  );
}

export default App;
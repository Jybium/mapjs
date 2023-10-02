import "./App.css";
import React, { lazy, Suspense } from "react";

const Mapper = lazy(() => import("./components/Map"));

function App() {
  return (
    <main className="App">
      <h1>MAP VIEW</h1>
      <div className="flex-1">
        <Suspense fallback={<h1>Loading ....</h1>}>
          <Mapper />
        </Suspense>
      </div>
    </main>
  );
}

export default App;

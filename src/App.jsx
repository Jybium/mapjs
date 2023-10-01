import "./App.css";
import React, { lazy, Suspense } from "react";

const Map = lazy(() => import("./components/Map"));

function App() {
  return (
    <main className="App">
      <h1>MAP VIEW</h1>
      <Suspense fallback={<h1>Loading ....</h1>}>
        <Map />
      </Suspense>
    </main>
  );
}

export default App;

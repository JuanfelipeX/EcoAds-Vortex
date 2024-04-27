// App.jsx
import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Upload } from "./upload";
import { Content } from "./content";

export default function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Upload />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/content" element={<Content />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </HashRouter>
  );
}


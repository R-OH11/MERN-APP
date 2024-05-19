import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Company from "./pages/Company";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Company />} />
              <Route path="/review/:companyId" element={<Reviews />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-right"
          gutter={12}
          containerStyle={{
            margin: "8px",
            zIndex: "10000",
          }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#fff",
              color: "var(--color-grey-700)",
              zIndex: "10000",
            },
          }}
        />
      </>
    </>
  );
}

export default App;

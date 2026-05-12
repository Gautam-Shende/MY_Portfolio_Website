import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./components/ThemeProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Toaster
        position="bottom-center"
        reverseOrder={false}
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "18px",
            padding: "20px 32px",
            borderRadius: "16px",
            minWidth: "420px",
            maxWidth: "580px",
            fontWeight: "600",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            color: "white",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          },
          success: {
            style: {
              background: "linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)",
              color: "white",
              fontSize: "18px",
              padding: "20px 32px",
              borderRadius: "16px",
              fontWeight: "600",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3)",
            },
            iconTheme: {
              primary: "white",
              secondary: "#8b5cf6",
            },
          },
          error: {
            style: {
              background: "linear-gradient(135deg, #f43f5e 0%, #e11d48 100%)",
              color: "white",
              fontSize: "18px",
              padding: "20px 32px",
              borderRadius: "16px",
              fontWeight: "600",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 20px 25px -5px rgba(244, 63, 94, 0.3)",
            },
            iconTheme: {
              primary: "white",
              secondary: "#f43f5e",
            },
          },
        }}
      />
      <App />
    </ThemeProvider>
  </StrictMode>,
);

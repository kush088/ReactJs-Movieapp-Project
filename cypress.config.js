import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "abc123xyz",   // 👈 paste your projectId here
  e2e: {
    baseUrl: "http://localhost:5173",
  },
});
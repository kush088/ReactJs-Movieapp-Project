import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "eia7yr",   // 👈 paste your projectId here
  e2e: {
    baseUrl: "http://localhost:5173",
  },
});
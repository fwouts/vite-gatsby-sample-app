import reactRefresh from "@vitejs/plugin-react-refresh"

export default {
  plugins: [reactRefresh()],
  define: {
    "process.env": {},
  },
}

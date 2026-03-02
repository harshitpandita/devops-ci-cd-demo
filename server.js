const http = require("http");

const VERSION = "v1.0.1"; // change this to trigger GitHub Actions (ex: v1.0.2)

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Hello from CI/CD demo! ✅\nVersion: ${VERSION}\n`);
  })
  .listen(3000, () => console.log("Server running on port 3000"));
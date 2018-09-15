/* eslint-disable no-console */
import server from "./serverConfig";

const PORT = process.env.PORT || 8000;
const IP = process.env.IP || "localhost";
server.listen(PORT, IP, () => {
  console.log(`Production Express server running at ${IP}:${PORT}`);
});

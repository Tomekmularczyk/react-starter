/* eslint-disable no-console */

import server from './serverConfig';

const PORT = process.env.PORT || 8080;
const IP = process.env.IP || '0.0.0.0';
server.listen(PORT, IP, () => {
  console.log(`Production Express server running at ${IP}:${PORT}`);
});

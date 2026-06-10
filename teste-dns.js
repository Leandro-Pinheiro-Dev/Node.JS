const dns = require("dns");

dns.resolveSrv(
  "_mongodb._tcp.cursonodejs.p7ndo14.mongodb.net",
  (err, records) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(records);
  },
);

module.exports = {
  networks: {
    development: {
      host: "localhost",
      //port: 8545,
      //network_id: "*" // Match any network id
      network_id: 3,
      port:  8545,
      gas:   4604624
    },
     ropsten:  {
     network_id: 3,
     host: "localhost",
     port:  8545,
     gas:   4604624
}
  },
   rpc: {
 host: 'localhost',
 post:8545
   }
};
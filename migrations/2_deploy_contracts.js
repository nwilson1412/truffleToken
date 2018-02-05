var NathToken = artifacts.require("./NathToken");

module.exports = function(deployer) {
  deployer.deploy(NathToken);
};
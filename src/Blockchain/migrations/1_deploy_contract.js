const Migrations = artifacts.require("Migrations_Hack_JMI");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};

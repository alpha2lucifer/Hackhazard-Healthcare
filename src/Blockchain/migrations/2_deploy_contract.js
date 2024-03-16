const Hospital = artifacts.require("Hospital_Contract_Hack_JMI");

module.exports = function(deployer){
    deployer.deploy(Hospital);
}
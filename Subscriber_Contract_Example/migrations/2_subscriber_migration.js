const subscriber = artifacts.require('Subscriber');
const COORDINATOR = '0xb007eca49763f31edff95623ed6c23c8c1924a16';
const OracleAddress = '0x6b9b36f9d2B6ae6C32717FD03c8d141b76dd286F';
const OracleEndpoint = '0x6b9b36f9d2B6ae6C32717FD03c8d141b76dd286F';
module.exports = function(deployer) {
	deployer.deploy(subscriber, COORDINATOR, OracleAddress, OracleEndpoint);
};

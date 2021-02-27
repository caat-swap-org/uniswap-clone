const UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = async function (deployer) {
  await deployer.deploy(UniswapV2Factory);
};


// const GameItem = artifacts.require("GameItem");

// module.exports = async function (deployer) {
//   // await deployer.deploy(Box);
//   await deployer.deploy(GameItem)
// };
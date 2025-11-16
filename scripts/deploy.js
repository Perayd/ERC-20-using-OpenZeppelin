
const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying from:", deployer.address);

  const Token = await hre.ethers.getContractFactory("MyToken");

  // params: name, symbol, initialSupply (in wei)
  const name = "MyToken";
  const symbol = "MTK";
  const initialSupply = hre.ethers.utils.parseUnits("1000000", 18); // 1,000,000 tokens

  const token = await Token.deploy(name, symbol, initialSupply);
  await token.deployed();

  console.log("Token deployed to:", token.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
npx hardhat run --network baseSepolia scripts/deploy.js

const hre = require("hardhat");

async function main(){
    const todo = await hre.ethers.deployContract("Todo");
    await todo.waitForDeployment();

    console.log(
        `todo with ${todo.target}`
    )
}
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
const { getNamedAccounts, ethers } = require("hardhat")
async function main() {
    const { deployer } = await getNamedAccounts()
    const fundMe = await ethers.getContract("FundMe", deployer)
    console.log("Funding....")
    const transcationResponse = await fundMe.withdraw()
    await transcationResponse.wait(1)

    console.log("Got it Back")
}
main()
    .then(() => process.exit(0))
    .then((error) => {
        console.error(error)
        process.exit(1)
    })

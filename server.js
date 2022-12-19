
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    const owner = process.env.OWNER;
    console.log(`${owner}'s Microservices rock!`);
    await sleep(5000);
  }
}

main();

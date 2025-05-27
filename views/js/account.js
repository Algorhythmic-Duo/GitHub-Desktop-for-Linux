const { exec } = require("child_process");

async function findAccountOwner() {
  return new Promise((resolve, reject) => {
    exec("gh api user --jq '.login'", (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.error(`Command stderr: ${stderr}`);
        reject(new Error(stderr));
        return;
      }
      resolve(stdout.trim());
    });
  });
}

async function getUsername() {
  try {
    const username = await findAccountOwner();
    const response = await fetch(`https://api.github.com/users/${username}`);
    const userData = await response.json();
    return userData;
  } catch (err) {
    console.error(`Error finding account owner: ${err}`);
    throw err; // Re-throw the error to handle it further up the chain if needed
  }
}

export { getUsername, findAccountOwner };

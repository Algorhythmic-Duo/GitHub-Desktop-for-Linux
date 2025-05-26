const { exec } = require('child_process');

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

      // Resolve the promise with the command output

      resolve(stdout.trim());
      
    });
  });
};
findAccountOwner();
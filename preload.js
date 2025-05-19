const { exec } = require('child_process');

const { ipcRenderer } = require('electron');

window.ipcRenderer = ipcRenderer;


exec("gh repo list --json 'name','description','visibility','primaryLanguage' ", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
//   console.log(`stdout: ${stdout}`);
  newew = stdout;
  console.error(`stderr: ${stderr}`);
//   console.log(`dawdadad,${newew}`);
outpit = processrepo(newew);
replaceNullWithEmptyString(outpit)
outpit.forEach(obj => {
  console.log(outpit)
  obj.forEach(final => {
  displayItems(final)
  });
});


});

function processrepo(output){
    // const lines = output.split('\n')
    // outputs = output.split(/(?<=})(?={)/);
    const parsedObjects = output.split(/(?<=})(?={)/).map(jsonString => {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return null;
  }
});
return parsedObjects.filter(obj => obj !== null);
}



function replaceNullWithEmptyString(obj) {
    for (let key in obj) {
        if (obj[key] === null) {
            obj[key] = "";
        } else if (typeof obj[key] === 'object') {
            // Recursively handle nested objects
            replaceNullWithEmptyString(obj[key]);
        }
    }
}




function displayItems(output) {
  
  const itemList = document.getElementById("tools");
  const itemHTML = `
    <div class="project-item">
      <div class="icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="2" />
          <line x1="8" y1="3" x2="8" y2="7" stroke="currentColor" stroke-width="2" />
          <line x1="16" y1="3" x2="16" y2="7" stroke="currentColor" stroke-width="2" />
          <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" stroke-width="1" />
        </svg>
      </div>
      <div class="project-details">
        <div class="project-name">${output.name}</div>
        <div class="project-description">
          ${output.description || 'No Description'}
        </div>
      </div>
      <div class="project-tags">
        <div class="tag c">${output.primaryLanguage.name || `NO data`}</div>
        <div class="chevron">❯</div>
      </div>
    </div>
  `;
  itemList.innerHTML += itemHTML;
}


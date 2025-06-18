const { spawn } = require('child_process');
const path = require('path');

// Initialize Ghost if not already done
const ghost = spawn('ghost', ['install', 'local', '--no-setup'], {
  stdio: 'inherit',
  cwd: process.cwd()
});

ghost.on('close', (code) => {
  console.log(`Ghost install finished with code ${code}`);
  
  // Start Ghost
  const start = spawn('ghost', ['start'], {
    stdio: 'inherit',
    cwd: process.cwd()
  });
});
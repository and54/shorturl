const { readdirSync, existsSync } = require('fs');
const { resolve, join } = require('path');
const { spawn } = require('child_process');
const { platform } = require('os');

const lib = resolve(__dirname, './');
const npmCmd = platform().startsWith('win') ? 'npm.cmd' : 'npm';
const comm = ['i', '--force', '--ignore-scripts'];

spawn(npmCmd, comm, { env: process.env, cwd: lib })

readdirSync(lib).forEach(mod => {
  const modPath = join(lib, mod);
  if (!existsSync(join(modPath, 'package.json'))) return;
  spawn(npmCmd, comm, { env: process.env, cwd: modPath, stdio: 'inherit' });
})
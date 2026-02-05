#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
if (!fs.existsSync(publicDir)) {
  console.log('No public/ directory — skipping debug checks');
  process.exit(0);
}

const files = fs.readdirSync(publicDir);
const matches = files.filter((f) => /(^|\/)debug[-_].*\.js$|^debug-hero\.js$/i.test(f));
if (matches.length) {
  console.error('Forbidden debug files found in public/:', matches.join(', '));
  console.error('Please move debug tooling to `scripts/` or delete before merging to main.');
  process.exit(1);
}

console.log('No debug files found in public/.');
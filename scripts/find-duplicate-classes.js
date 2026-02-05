const fs = require('fs');
const path = require('path');
const glob = require('glob');

function findFiles() {
  return glob.sync('src/**/*.{tsx,ts,jsx,js}', { nodir: true });
}

function extractClassStrings(content) {
  // Match patterns like: className="..." or className='...' or className={"..."}
  const regex = /className\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*["'`]([^"'`]+)["'`]\s*\})/g;
  const results = [];
  let m;
  while ((m = regex.exec(content)) !== null) {
    // one of the capture groups will be populated
    results.push(m[1] || m[2] || m[3]);
  }
  return results;
}

function findDuplicates(tokens) {
  const seen = new Set();
  const dupes = new Set();
  tokens.forEach(t => {
    if (seen.has(t)) dupes.add(t);
    else seen.add(t);
  });
  return Array.from(dupes);
}

const files = findFiles();
let total = 0;
files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  const classStrings = extractClassStrings(content);
  const fileDupes = [];
  classStrings.forEach(cs => {
    const tokens = cs.split(/\s+/).filter(Boolean);
    const d = findDuplicates(tokens);
    if (d.length) fileDupes.push({ classString: cs, duplicates: d, tokensBefore: tokens });
  });
  if (fileDupes.length) {
    console.log('FILE:', f);
    fileDupes.forEach(p => {
      console.log('  class="' + p.classString + '"');
      console.log('    duplicates:', p.duplicates.join(', '));
      total += p.duplicates.length;
    });
    console.log('');
  }
});
console.log('Total duplicate tokens found:', total);

if (total === 0) process.exit(0);
process.exit(1);

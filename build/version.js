const replace = require('replace-in-file');
const gitCommitInfo = require('git-commit-info');

const commitInfo = gitCommitInfo();
const dateString = new Date(commitInfo.date).toLocaleDateString("fr");

const options = {
  files: 'dist/index.html',
  from: /{{version}}/g,
  to: `${commitInfo.shortHash} - ${dateString}`,
};
replace(options);
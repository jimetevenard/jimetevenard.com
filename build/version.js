const replace = require('replace-in-file');
const gitCommitInfo = require('git-commit-info');

const commitInfo = gitCommitInfo();

const dateFormatOptions = {year: 'numeric', month: 'long', day: 'numeric' };
const dateString = new Date(commitInfo.date).toLocaleDateString('fr-FR', dateFormatOptions);

const options = {
  files: 'dist/index.html',
  from: /{{version}}/g,
  to: `${commitInfo.shortHash} - ${dateString}`,
};
replace(options);

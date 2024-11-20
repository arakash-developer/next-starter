#!/usr/bin/env node
const {exeSync} = require('child_process');
const runCommand = command =>{
    try{
        exeSync(`${command}`,{stdio: 'inherit'});
    }catch(e){
        console.error(`Failed to execute ${command}`,e);
        return false;
    }
    return true;
}
const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --dept 1 https://github.com/arakash-developer/next-starter.git ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install`;
console.log(`Cloning the repository with name ${repoName}`);
const checkedOut =  runCommand(gitCheckoutCommand);
if(!checkedOut) process.exit(-1);
console.log(`Installing dependencies for ${repoName}`);
const installedDeps = runCommand(installDepsCommand);
if(!installedDeps) process.exit(-1); 
console.log(`Congratulation!! You are Ready`);


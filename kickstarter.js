const inquirer = require('inquirer');
const ui = new inquirer.ui.BottomBar();
const fs = require('fs');
const rimraf = require('rimraf');

const packageJson = require('./package.json');

async function kickstart() {

    const questions = await inquirer.prompt([
        {
            type: 'input',
            name: 'projectName',
            message: `What's the name of your project? (kebab-cased)`,
            default: 'awesome-project'
        },
        {
            type: 'input',
            name: 'projectAuthor',
            message: `Who's the author?`,
            default: 'John Doe'
        }
    ]);

    const {projectName, projectAuthor} = questions;

    ui.log.write('Removing /docs directory');
    rimraf.sync('./docs');

    ui.log.write('Updating package.json name');
    packageJson.name = projectName;
    ui.log.write('Updating package.json author');
    packageJson.author = projectAuthor;

    packageJson.description = '';

    ui.log.write('Removing package.json git repository');
    packageJson.keywords = [];
    packageJson.repository.url = '';

    ui.log.write('Removing .git directory');
    rimraf.sync('.git');

    ui.log.write('Removing package.json kickstart dependencies');
    packageJson.kickstartDependencies.forEach((kickstartDependency) => {
        delete packageJson.devDependencies[kickstartDependency];
        rimraf.sync(`./node-modules/${kickstartDependency}`);
    });

    delete packageJson.kickstartDependencies;

    packageJson.homepage = '';
    packageJson.bugs.url = '';

    ui.log.write('Removing package.json kickstart script');
    delete packageJson.scripts.kickstart;

    ui.log.write('Writing new package.json');
    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 4));

    ui.log.write('Removing package-lock.json');
    fs.unlinkSync('./package-lock.json');

    ui.log.write('Removing kickstarter script');
    fs.unlinkSync('./kickstarter.js');

    ui.log.write('All done!');
}

kickstart();



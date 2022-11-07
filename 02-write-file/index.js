const fs = require('fs');
const path = require('path');
const { stdin, stdout, exit } = require('process');

const output = fs.createWriteStream(path.join(__dirname, 'new.txt'));

// output.on('data', data => stdin.write(data));
stdout.write('Привет! Введите свое имя...\n');
// stdout.write('Как ваши дела?...\n');

stdin.on('data', data => {
    if (data.toString().trim() === 'exit') {
        sayBye();
    }
    output.write(data);
});

process.on('SIGINT', sayBye);

function sayBye() {
    stdout.write('\nХорошего дня! Пока!');
    exit();
}

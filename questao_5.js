const readLine = require("readline");

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function stringChanger (string) {
    let reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i]
    }
    return reversedString;
}


rl.question('Escreve ai pra testar: ', (input) => {
    const reversed = stringChanger(input);
    console.log('String invertida: ', reversed);

    rl.close();
});
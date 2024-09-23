const fs = require('fs');

fs.readFile('dados.json', (err, data) => {
    if(err) {
        console.error('ERRO: ', err);
        return;
    }

    const revenue = JSON.parse(data);
    let minValue = Infinity;
    let maxValue = -Infinity;
    let averageCount = 0;
    let average;
    let total = 0;
    let counter = 0;
    const values = [];

    revenue.forEach(element => {
        const value = element.valor;
        if(value > 0) {
            values.push(value);
            total += value;
            counter++;
            if (value > maxValue){
                maxValue = value;
            }
            if (value < minValue){
                minValue = value;
            }
        }
        
    });

    average = total / counter;

    values.forEach(element => {
        if (element > average) {
            averageCount ++;
        }
    });

    console.log("Faturamento mínimo: " + minValue);
    console.log("Faturamento máximo: " + maxValue);
    console.log("Dias de faturamento acima da média: " + averageCount);

})
const fs = require('fs');
const os = require('os');

module.exports =  function parseCsv(path){
    const herois = fs.readFileSync('herois.csv', 'utf-8')
    .split('osEOL')
    .map(_ => _.split(','))
    .map(_ => ({name: _[0], atributo:_[1]}))
    .sort((a, b) => a.name < b.name ? -1 : 1)
    .reduce((acc, current) => {
        acc[current.heroi] = current.afiliacao;
        return acc;
    }, {});
    console.log(herois);
}

const sql = require ('mssql');
let connSQLServer = function(){
    const sqlConfig = {
        user: 'bd2313018', //7 últimos dígitos do seu RA
        password: 'Teste1234',
        database: 'BD', 
        server: 'APOLO',
        options: {
            encrypt: false,
            trustServerCertificate: true,
        }
    }
    return sql.connect(sqlConfig);
} 
module.exports = function(){
    console.log('O autoload carregou o modulo de conexão com bd');
    return connSQLServer;
}
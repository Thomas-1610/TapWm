module.exports = function(app){
    //let dbConnection = require('../config/dbConnection');
    app.get('/informacao/professores', function(req,res){
        async function getProfessores() {
            try {
                let connection = app.config.dbConnection;
                const pool = await connection();

                 let professoresModel = app.models.professormodel;// variável que recupera a função exporta
                    //executar a função
                    // tem passar a conexao e o callback
                    professoresModel.getProfessores(pool, function(error, results){
                    res.render('informacao/professores', { profs : results.recordset });
                    }); 
            } catch (err) {
                console.log(err)
            }
        }
        getProfessores();
   });
}
 
module.exports = function(app){
    //let dbConnection = require('../config/dbConnection');
    app.get('/informacao/professores', function(req,res){
        async function getProfessores() {
            try {
                let connection = app.config.dbConnection;
                const pool = await connection();
                const results = await pool.request().query('SELECT * from PROFESSORES')
            
                //res.json(results.recordset);
    
                res.render('informacao/professores',{profs: results.recordset})
        
            } catch (err) {
                console.log(err)
            }
        }
        getProfessores();
   });
}
 
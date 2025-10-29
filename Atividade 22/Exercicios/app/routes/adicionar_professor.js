module.exports = function(application) {
 
  // Rota GET
  application.get('/admin/adicionar_professor', function(req, res) {
    res.render('admin/adicionar_professor');
  });
 
  // Rota POST
  application.post('/professor/salvar', async function(req, res) {
    try {
      const professor = req.body;
 
      const connection = application.config.dbConnection;
      const pool = await connection();
 
      const professoresModel = application.models.professormodel;
 
      professoresModel.salvarProfessor(professor, pool, (error, results) => {
        if (error) {
          console.error('Erro ao inserir no banco:', error);
          return res.status(500).send(error);
        }
 
        console.log('Professor criado com sucesso!');
        res.redirect('/informacao/professores');
      });
    } catch (error) {
      console.error('Erro inesperado:', error);
      res.status(500).send('Erro interno do servidor');
    }
  });
};
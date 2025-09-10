let express = require('express');
let app = express();

app.get('/', function(req,res){
     res.send("<html><body>site da fatec</body></html>");
});
app.get('/historia', function(req,res){
    res.send("<html><body>Historia da Fatec Sorocaba</body></html>");

});
app.get('/cursos', function(req,res){
    res.send("<html><body>Cursos da fatec Sorocaba</body></html>");
});
app.get('/professores', function(req,res){
     res.send("<html><body>professores da fatec Sorocaba</body></html>");
});

app.listen(3000, function(){
    console.log("servidor com express foi criado");
});
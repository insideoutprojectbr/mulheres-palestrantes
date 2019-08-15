const app = require('./config/server');
const port = 80;

const server = app.listen(port, function(){
	console.log(`Servidor online na porta ${port}`);
});

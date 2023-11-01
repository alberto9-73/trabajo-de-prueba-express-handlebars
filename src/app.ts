import express from 'express';
import { engine } from 'express-handlebars';
import path from 'path';

const app = express();
const port=3000

app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'views'));

app.get('/', (req, res) => {
    const tareas=['jugar','Estudiar','Cosinar','Dormir','manejar','reparar']
    res.render('home',{
        tareas, 
        isAdmin:true});
});
app.get('/lista', (req, res) => {
    
    res.render('lista', {
        nombre:'Alberto',
        apellido:'Gonzalez',
        profecion:'laburante',
        isAdmin:false,
        layout:false
       });
});



app.listen(port,()=>{
    console.log(`Servidor funcionando en el puerto:${port}`)
})


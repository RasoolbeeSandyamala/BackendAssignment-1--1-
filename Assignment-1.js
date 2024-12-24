
const ex = require ('express')
const app = ex();

const p = require('path');

const pagepath = p.join( __dirname , "html pages")

// console.log(pagepath)

app.use(ex.json())

app.get('/',(req,res)=>{
    res.send('hello express')
})

app.get('/home',(req,res)=>{

    res.sendFile(`${pagepath}/homepage.html`)
})

app.get('/about',(req,res)=>{
    
    res.sendFile(`${pagepath}/about.html`)


})
 


app.get('/*',(req,res)=>{
    res.send('page not found')
})
app.listen(4000,()=>{console.log('server started at 4000')})
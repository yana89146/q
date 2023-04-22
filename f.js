const e=require('express');
const a=e();

a.set('view engine', 'ejs')
a.use(e.static('public'))
a.use(e.urlencoded({extended:false}))

a.get('/',(req,res)=>{
    res.render('main')
})

a.get('/about',(req,res)=>{
    res.render('about')
})
a.get('/contact',(req,res)=>{
    res.render('contact')
})
a.get('/user/:name',(req,res)=>{
    res.render('user',{name:req.params.name})
})
a.post('/check',(req,res)=>{
    let usern=req.body.usern
    if(usern==""){
        return res.redirect('/')
        }
    else{
        return res.redirect('/user/'+usern)

    }
})

a.listen(3000,()=>{
    console.log("server")
})
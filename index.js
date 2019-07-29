const {app} = require('./bin/routers')

app.listen( 5000, ()=>{
    console.log("servidor on!")
})
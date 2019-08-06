const {app} = require('./bin/routers')

app.listen( 3000, ()=>{
    console.clear()
    console.log("servidor on!")
})
require('dotenv').config();
const expess=require('express');
const cors = require('cors');
const connectDb = require('./config/database');
const router = require('./routes/route');
const PORT=process.env.PORT

const app=expess();

// Middleware
app.use(expess.json());
app.use(cors())

connectDb()

app.use('/api',router)

app.listen(PORT,()=>{
  console.log(`server is running on port ${PORT}`)

});


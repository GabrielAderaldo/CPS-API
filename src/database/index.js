const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://usuarioDB:tomate98@cluster0.nz9yi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
{useNewUrlParser:true,
useUnifiedTopology:true,
useFindAndModify:false,
useCreateIndex:true})
mongoose.Promise = global.Promise



module.exports = mongoose
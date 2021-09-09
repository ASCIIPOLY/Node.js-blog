const mongoose = require('mongoose')

const Post = require('./models/Post') 

mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})

/*Post.find({
}, (error, post)=>{
    console.log(error, post)
})*/

/* Post.findByIdAndUpdate('60e60f2f45acc81e5447bd68',{
    title: 'Update 1. post'},
(error,post)=>{
    console.log(error,post)
}) */

Post.findByIdAndDelete('60e60f2f45acc81e5447bd68',
(error,post)=>{
    console.log(error,post)
})


/*Post.findById('60e60f2f45acc81e5447bd68', (error,post)=>{
    console.log(error,post)
})*/

/*Post.create({
    title:'ikinci Post Başlığım',
    content: 'İkinci Post içeriği Lorem İpsum'
}, (error, post) => {
    console.log(error, post)
})*/


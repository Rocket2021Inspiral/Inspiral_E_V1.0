const express = require('express')
const app = express()
const sendgrid = require('@sendgrid/mail')
sendgrid.setApiKey(process.env.SENDGRIDAPIKEY)

const config = require('./config/config')
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const textAnalyser = require('./util/textAnalysis/general')

mongoose.connect(config.CONFIG.mongodb.dev.address, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.listen(config.CONFIG.server.port, () => {
    console.log(`App listening at http://127.0.0.1:${config.CONFIG.server.port}`)
})

const Product = require('./model/product')
const ProductCollect = require('./model/productCollect')
const Solution = require('./model/solution')

//解决跨域问题 app.use
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials", "true"); 
 　 res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:8080');
 　 res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
 　 res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
 　 if (req.method == 'OPTIONS') {
 　　　res.send(200); /*让options请求快速返回*/
 　 } else {
 　　　next();
 　 }
 })

app.post('/search', jsonParser, async function (req, res) {
    let {
        text
    } = req.body
    text = text.toLowerCase()
    let keywordAzure = await textAnalyser.getKeyWordByAzure(text)
    let keywords = textAnalyser.getKeyWord(text)
    let result = await Solution.find({
        tags: {
            $in: [keywordAzure[0]]
        }
    }).populate({
        path: 'productCollects',
        populate: "products"
    })
    console.log(result)
    res.send({
        keywordAzure,
        keywords,
        result
    })

})


app.post('/product', jsonParser, async function (req, res) {
    const {
        name,
        description,
        docs,
        demos
    } = req.body
    const product = new Product({
        name,
        description,
        docs,
        demos
    })
    const result = await product.save()
    res.send({
        result
    })
})


app.get('/product', async function (req, res) {
    const result = await Product.find({})
    res.send({
        result
    })
})


app.post('/productCollect', jsonParser, async function (req, res) {
    const {
        name,
        description,
        products
    } = req.body
    const productCollect = new ProductCollect({
        name,
        description,
        products
    })
    const result = await productCollect.save()
    res.send({
        result
    })
})


app.get('/productCollect', async function (req, res) {
    const result = await ProductCollect.find({}).populate('products')
    res.send({
        result
    })
})


app.post('/solution', jsonParser, async function (req, res) {
    const {
        name,
        tags,
        productCollects
    } = req.body
    const solution = new Solution({
        name,
        tags,
        productCollects
    })
    const result = await solution.save()
    res.send({
        result
    })
})


app.get('/solution', async function (req, res) {
    const result = await Solution.find({}).populate({
        path: 'productCollects',
        populate: "products"
    })
    res.send({
        result
    })
})
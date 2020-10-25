// let kriteria = {
//     penghasilan : 3 * umr,
//     agama: 'islam',
//     pendidikan: 'S1', 
//     status: 'single',
//     merokok: false,
//     hobby: 'memancing'
//     } 

const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const route = require('./routes')

app.set('view engine', 'ejs')

app.use(route)

app.listen(port, () => {
    console.log(`Jalan`);
})
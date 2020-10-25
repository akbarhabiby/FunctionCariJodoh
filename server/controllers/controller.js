const {User} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


class Controller {
    static home(req, res) {
        // let kriteria = {
//     penghasilan : 3 * umr,
//     agama: 'islam',
//     pendidikan: 'S1', 
//     status: 'single',
//     merokok: false,
//     hobby: 'memancing'
//     } 
        let umurKaFiqi = 40
        let umurLitha = 23
        let umr = 4000000
        let {umur, penghasilan, agama, pendidikan, status, merokok, hobby} = req.body
        if (Number(umur) > umurLitha && umur < (umurKaFiqi - 10)) {
            if (Number(penghasilan) > (3 * umr)) {
                if (pendidikan != "SD" || pendidikan != 'SMP' || pendidikan != 'SMA') {
                    if (status.toLowerCase() == 'single') {
                        if (merokok.toLowerCase() == 'tidak') {
                            if (hobby.toLowerCase() == 'memancing') {
                                if (agama == 'Islam') {
                                    res.status(200).json({msg : 'selamat, kamu jodoh!'})   
                                }
                                else res.status(400).json({msg : 'yah, kamu tidak jodoh!'})
                            }
                            else res.status(400).json({msg : 'yah, kamu tidak jodoh!'})
                        }
                        else res.status(400).json({msg : 'yah, kamu tidak jodoh!'})
                    }
                    else res.status(400).json({msg : 'yah, kamu tidak jodoh!'})
                }
                else res.status(400).json({msg : 'yah, kamu tidak jodoh!'})
            }
            else res.status(400).json({msg : 'yah, kamu tidak jodoh!'})
        }
        else res.status(400).json({msg : 'yah, kamu tidak jodoh!'})
    }
}

module.exports = Controller
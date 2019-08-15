module.exports = app => {

    const index = (req, res) => {
        res.render('womans/index')
    }

    const register = (req, res) => {
        res.render('womans/new')
    }

    const create = (req, res) => {

        if (!req.body.name || !req.body.email) {
            res.send({
                status: false,
                message: 'Nome e e-mail são obrigatórios!'
            })
        } else {
            const fs = require('fs')
            const jsonPath = '././public/mulheres.json'

            fs.exists(jsonPath, function (exists) {
                fs.readFile(jsonPath, function readFileCallback(err, data) {
                    let array = JSON.parse(data);
                    array.mulheres.push({
                        "name": req.body.name,
                        "interests": req.body.qualitys,
                        "location": req.body.location,
                        "photo": req.body.name,
                        "email": req.body.email,
                        "linkedin": req.body.linkeDin,
                        "github": req.body.gitHub,
                        "twitter": req.body.twitter,
                        "fb": req.body.faceBook,
                        "behance": req.body.behance,
                        "site": req.body.site
                    })
                    let json = JSON.stringify(array);
                    fs.writeFile(jsonPath, json);
                });
            });

            res.send({
                status: true
            })
        }
    }

    return {
        index,
        register,
        create
    }
}

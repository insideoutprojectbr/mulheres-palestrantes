module.exports = app => {
    app.get('/', app.app.controllers.womans.index)

    app.get('/cadastrar', app.app.controllers.womans.register)

    app.post('/woman', app.app.controllers.womans.create)
}
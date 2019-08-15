module.exports = app => {
    app.get('/', app.app.controllers.womans.index)

    app.get('/cadastrar', app.app.controllers.womans.register)
}
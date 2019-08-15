module.exports = app => {
    app.get('/', app.app.controllers.womans.index)
}
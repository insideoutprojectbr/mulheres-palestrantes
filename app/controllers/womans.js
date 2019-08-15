module.exports = app => {

    const index = (req, res) => {
    	res.render('womans/index')
    }

    const register = (req, res) => {
        res.render('womans/new')
    }

    return { index, register }
}
module.exports = app => {

    const index = (req, res) => {
    	res.render('womans/index')
    }

    return { index }
}
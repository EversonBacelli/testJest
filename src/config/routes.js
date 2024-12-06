const router_user = require('../routes/users')

module.exports = (app) => {
    app.use('/', router_user)
}
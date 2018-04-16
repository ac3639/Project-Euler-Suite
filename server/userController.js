const userController = {};

userController.input = (req, res, next) => {
  user.save(function(error, user) {
    if(error) return res.render('/signup', {error: error});
    res.locals.userId = user._id;
    next();
  })
}

userConstroller.render = (req, res, next) => {

}





module.exports = userController;

const checkUserCreaction = (req, res, next) => {
    if (!req.body.first_name || !req.body.first_name.trim()){
        return res.status(400).json({
            error : "Your first name is required"
        })
    }

    if (!req.body.last_name || !req.body.last_name.trim()){
        return res.status(400).json({
            error : "Your last name is required"
        })
    }

    if (!req.body.username || !req.body.username.trim()){
        return res.status(400).json({
            error : "Your username is required"
        })
    }

    if (!req.body.gender || !req.body.gender.trim()){
        return res.status(400).json({
            error : "Your gender is required"
        })
    }

    if (!req.body.email || !req.body.email.trim()){
        return res.status(400).json({
            error : "Your email is required"
        })
    }

    if (!req.body.password || !req.body.password.trim()){
        return res.status(400).json({
            error : "Your password is required"
        })
    }
    next()
}

module.exports = {
    checkUserCreaction
}
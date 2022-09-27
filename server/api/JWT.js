const { sign, verify } = require('jsonwebtoken');

const createTokens = (user) => {
    //Whatever you want to store in the TOKEN should be labeled here. Grabbing variable user from our routes page!
    const accessToken = sign({ username: user.username, id: user.id }, "jwtsecretmsg");
    return accessToken;
};

const validateToken = (req, res, next) => {
    //This "accessToken" is coming from the user route for /login
    const accessToken = req.cookies["accessToken"]

    if (!accessToken) return res.status(400).json({ error: "User not Authenticated!" });

    try {
        const validToken = verify(accessToken, "jwtsecretmsg")
        if (validToken) {
            //CREATING A NEW VARIABLE TO CHECK IF THE TOKEN IS VALID OR NOT WITH BOOLEAN
            req.authenticated = true
            return next();
        }
    } catch(err) {
        return res.status(400).json({error: err})
    }
}

module.exports = { createTokens, validateToken };
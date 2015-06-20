var passport, steamStrategy;
passport = require("passport");
steamStrategy = require("passport-steam").Strategy;

module.exports = {
    make : make
};


function make (given) {
    setupSession(given);
    setupRouting(given);
    setupAuthentication(given);
}

function setupAuthentication (given) {
    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(user, done) {
      done(null, user);
    });

    passport.use(
        new steamStrategy(
            {
                returnURL: given.realm+given.returnUrl,
                realm: given.realm,
                apiKey: given.apiKey
            },
            function(identifier, profile, done) {
                console.log("identifier", identifier);
                console.log("profile", profile);
                console.log("done", done);
                return done(null, profile);
            }
        )
    );
}

function setupSession () {
    given.app.use(passport.initialize());
    given.app.use(passport.session());
}

function setupRouting (given) {

    given.app.get(
        given.authUrl,
        passport.authenticate('steam')
    );

    given.app.get(
        given.returnUrl,
        passport.authenticate('steam', { failureRedirect: '/login' }),
        function(req, res) {
            res.redirect('/');
        }
    );
}
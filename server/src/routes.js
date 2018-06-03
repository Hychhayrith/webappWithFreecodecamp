const AuthenticationController = require('./controllers/AuthenticationController');
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
module.exports =   (app )=> {
    app.post('/register', AuthenticationControllerPolicy.register, AuthenticationController.register),
    app.get('/songs', SongsController.index);
    app.post('/songs', SongsController.post);
    app.get('/songs/:songId', SongsController.show);

    app.get('/histories', isAuthenticate, HistoryController.index)
    app.post('/hostories', isAuthenticate, HistoryController.post)

    app.get('/bookmarks', isAuthenticate, BookmarksController.index);
    app.post('/bookmarks', isAuthenticate, BookmarksController.post);
    app.delete('/bookmarks/:bookmarkid', isAuthenticate, BookmarksController.remove);
}

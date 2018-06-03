const {Song} = require('../models')

module.exports = {
    async index (req, res){
        try{
            let songs = null;
            const search = req.query.search;
            if(search){
                songs = await Song.findAll({
                    where: {
                        $or: [
                            'title', 'artist', 'genre', 'album'
                        ].map(key => ({
                            [key] : {
                                $like: `%${search}%`
                            }
                        }))
                    }
                })
            }else{
                songs = await Song.findAll({
                    limit: 10
                })
            }
            res.send(songs);
        } catch(err){
            res.status(500).send({
                error: 'an error has occured try to fetch the songs'
            })
        }
    },
    async post (req, res){
        try{
            const song = req.body;
            const createdSong = await Song.create(song);
            res.send(createdSong);
        }catch(err){
            res.status(500).send({
                error: 'an error has occured trying to create the song'                       
            })
        }
    },
    async show (req, res){
        try{
            const songId = req.params.songId;
            const showSong = Song.findById(songId);
            res.send(showSong);
        }catch(err){
            res.status(500).send({
                error: 'an error occured while trying to show the song'
            })
        }
        
    }
}
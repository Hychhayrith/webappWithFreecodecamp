const {
    Bookmark,
    Song
} = require('../models');
const _ = require('lodash')

module.exports = {
    async index (req, res){
        try {
            const userId = req.user.id;
            const {songId} = req.query;
            const where = {UserId : userId};
            if(songId){
                where.SongId = songId;
            }
            const bookmarks = await Bookmark.findAll({
                where: where,
                include: [{
                    model: Song
                }]
            })
                .map((bookmark) => {
                    return bookmark.toJSON();
                })
                .map(bookmark => _.extend(
                    {},
                    bookmark.Song,
                    bookmark
                ))
            res.send(bookmarks)
        }catch(err){
            res.status(500).send({
                error: 'an error has occured trying to fetch the bookmark'
            })
        }
    },
    async post (req, res){
        try{
            const {songId} = req.body;
            const userId = req.user.id;
            const bookmark = await Bookmark.findOne({
                where:{
                    SongId: songId,
                    UserId: userId
                }
            });
            if(bookmark){
                res.status(400).send({
                    error: 'you are already bookmarked this one'
                });
            }
            const newBookmark = await Bookmark.create({
                SongId: songId,
                UserId: userId
            })
            res.send(newBookmark);
        }catch(err){
            res.status(500).send({
                error: 'There is an error occured while trying to create bookmark'
            })
        }
    },
    async remove(req, res){
        try{
            const bookmarkId = req.params.bookmarkId;
            const userId = req.user.id;
            const bookmark = await Bookmark.findOne({
                where:{
                    UserId : userId,
                    id: bookmarkId
                }
            })
            if(!bookmark){
                return res.status(403).send({
                    error: `you don't have access to this bookmark`
                })
            }
            await bookmark.destroy();
            res.send(bookmark)
        }catch(err){
            res.status(500).send({
                error: `an error has occur while trying to remove bookmark`
            })
        }
    }
}
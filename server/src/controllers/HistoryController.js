const {
    History,
    Song
} = require('../models');
const _ = require('lodash');
module.exports ={
    async index(req, res){
        try{
            const userId = req.user.id;
            const histories = await History.findAll({
                where: {
                    Userid: userId
                },
                include: [
                    {
                        model: Song
                    }
                ],
                order: [
                    ['createdAt', 'DESC']
                ]
            })
                .map(history => history.toJSON())
                .map(history => _.extend(
                    {},
                    history.Song,
                    history
                ))
            res.send(_.uniqBy(histories, history => history.SongId))
        } catch (err){
            res.status(500).send({
                error: 'an error has occured trying to fetch the history'
            })
        }
    },
    async post(req, res){
        try{
            const userId = req.user.id;
            const {songId} = req.body;
            const history = await History.create({
                UserId : userid,
                SongId: sondId
            })
            res.send(history);
        }catch(err){
            res.status(500).send({
                error: 'an error has occured trying to create the history object'
            })
        }
        
    }
}
import Api from './Api'

export default {
    index(params){
        return Api().get('hostories', {
            params: params
        })
    },
    post(songId){
        return Api().post('hostories', songId)
    }
}
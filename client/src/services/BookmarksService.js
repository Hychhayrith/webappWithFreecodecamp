import Api from './Api'

export default {
    index(bookmark){
        return Api().get('bookmarks', {
            params: bookmark
        });
    },
    post(songId){
        return Api().post('bookmarks', songId)
    },
    delete(bookmarkId){
        return Api().delete(`bookmarks/${bookmarkId}`);
    }
    
}
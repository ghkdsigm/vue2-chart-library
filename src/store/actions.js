import { fetchUserList } from '../api/index.js'

export default{
    FETCH_USER(context){
        return fetchUserList()
        .then(res=>{
            context.commit('SET_USER', res)
        })
        .catch(err=>{
            console.log(err)
        })
    }, 
}
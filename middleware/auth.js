export default function({store, redirect}){
    if(!store.getters.hasToken){
        redirect('/login?massage=login')
    }
}
import Api from '@/services/Api'

export default {
    testpost(credentials) {
        return Api().post('testpost', credentials)
    }
};
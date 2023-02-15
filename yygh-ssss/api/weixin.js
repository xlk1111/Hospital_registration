
import request from '@/utils/request'

const api_name = `/api/ucenter/wx`

export default {

    queryPayStatus(orderId) {
        return request({
            url: `/api/order/weixin/queryPayStatus/${orderId}`,
            method: 'get'
        })
    },



    createNative(orderId) {
        return request({
            url: `/api/order/weixin/createNative/${orderId}`,
            method: 'get'
        })
    },

}

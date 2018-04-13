import axios from 'axios'

import {
  baseUrl
} from '../config/env'

console.log(baseUrl)

export const getdata = () => (axios.get('http://gc.ditu.aliyun.com/regeocoding?l=39.938133,116.395739&type=001'))

export const jq_getdata = () => (
   $.when($.ajax({
    type: 'GET',
    url: "https://api.douban.com/v2/book/1220562",
    dataType: 'jsonp',
    success: function (data) {
      // console.log(data)          
    },
    error: function (xhr, type) {
      return xhr;
    }
  }))
)


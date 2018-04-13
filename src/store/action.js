import { jq_getdata } from '../server/getData'
import { GET_USERINFO } from './mutation-types.js'

export default {

	async getUserInfo({
		commit
	}) {
		commit(GET_USERINFO, await jq_getdata())
	}
	
}
import {
	RECORD_PINFOR,
	ADD_CART,
	REDUCE_CART,
	INIT_BUYCART,
	CLEAR_CART,
	RECORD_USERINFO,
	GET_USERINFO
} from './mutation-types'

import {setStore, getStore} from '../config/mUtils'


export default {
	// 记录当前个人用户信息
	[RECORD_PINFOR](state, {
		address,
		telphone
	}) {
		state.address = address;
		state.telphone = telphone;
	},
	// 加入购物车
	[ADD_CART](state, {
		author,
		shopid,
		name,
		price
	}) {
		let cart = state.cartList;
		let shop = cart[shopid] = (cart[shopid] || {});
		let translator = shop[author] = (shop[author] || {});
		if (translator[name]){
			translator[name]['num']++;
		}else {
			translator[name] = {
				num:1,
				"price": price,
			};	
		}
		state.cartList = {...cart};
		//存入localStorage
		setStore('buyCart', state.cartList);
	},
	// 移出购物车
	[REDUCE_CART](state, {
		shopid,
		author,
		name
	}) {
		let cart = state.cartList;
		let shop = cart[shopid] = (cart[shopid] || {});
		let translator = shop[author] = (shop[author] || {});
		if (translator && translator[name]) {
			if (translator[name]['num'] > 0) {
				translator[name]['num']--;
				state.cartList = {...cart};
				//存入localStorage
				setStore('buyCart', state.cartList);
			} else {
				//商品数量为0，则清空当前商品的信息
				translator[name] = null;
			}
		}
	},
	//网页初始化时从本地缓存获取购物车数据
	[INIT_BUYCART](state) {
		let initCart = getStore('buyCart');
		if (initCart) {
			state.cartList = JSON.parse(initCart);
		}
	},
	//清空当前商品的购物车信息
	[CLEAR_CART](state, shopid) {
		state.cartList[shopid] = null;
		state.cartList = {...state.cartList};
		setStore('buyCart', state.cartList);
	},
	// 记录用户信息
	[RECORD_USERINFO](state, info) {
		console.log('info',info)
		state.userInfo = info;
		state.login = true;
		// setStore('user_id', info.user_id);
	},
	//获取用户信息存入vuex
	[GET_USERINFO](state, info) {
		console.log(info)
		state.userInfo = { ...info };
		// if (state.userInfo && (state.userInfo.username !== info.username)) {
		// 	return;
		// };
		// if (!state.login) {
		// 	return;
		// }
		// if (!info.message) {
		// 	state.userInfo = { ...info };
		// } else {
		// 	state.userInfo = null;
		// }
	}
}

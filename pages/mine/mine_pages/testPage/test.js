// pages/mine/mine_pages/test/test.js

import {
	getInittestlistData,
} from "../../../../utils/user";

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		testList: []
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		getInittestlistData().then((res) => {
			this.setData({
				testList: res.data,
			})
			console.log(this.data.testList);
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	},

	handleClick:function(e) {
		console.log(e);
		wx.navigateTo({
			url: '../../../usertest/usertest?url=' + e.currentTarget.dataset.url,
		})
	}
})
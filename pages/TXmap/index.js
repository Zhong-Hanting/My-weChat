var QQMapWX = require('../../lib/qqmap-wx-jssdk');//如：..­/..­/libs/amap-wx.js

// pages/TXmap/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TXmap:null,
    centerPie:{},
    iconPathList:[
      {label:'地铁公交',path:'../image/bus.png'},
      {label:'实时公交',path:'../image/timeBus.png'},
      {label:'步行',path:'../image/walk.png'},
      {label:'打车',path:'../image/bycar.png'},
      {label:'订酒店',path:'../image/hotel.png'},
      {label:'周边游',path:'../image/visit.png'},
      {label:'景点门票',path:'../image/menpiao.png'},
      {label:'代驾',path:'../image/drycar.png'},
      {label:'乘车码',path:'../image/bybuscode.png'},
      {label:'地铁图',path:'../image/ditie.png'},
    ]
  },

  getAddress(lat,lng){
    let that=this;
    this.TXmap.reverseGeocoder({
      location:{
        latitude: lat,
        longitude:lng
      },success(res){
        let data={
          lat:lat,
          lng:lng
        }
          that.setData({
            centerPie:data
          })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    let that=this;
    this.TXmap=new QQMapWX({key:'GQ2BZ-SU46P-KFUD3-V34BE-Q5RVS-CPBZP'});
    wx.getLocation({
      type: 'gcj02',   //gcj102精准一点  wgs84要偏一点
      // isHighAccuracy:true,
      success(res){
        console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        that.getAddress(latitude,longitude)
      }
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

  }
})
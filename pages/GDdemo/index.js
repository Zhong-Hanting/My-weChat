
var QQMapWX = require('../../lib/qqmap-wx-jssdk');//如：..­/..­/libs/amap-wx.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    location:{ //当前定位的地址
      lat:'',
      lng:'',
      markers:[],
      address:'',
    },  
    compare:true, 
    trigType:'car',
    destination:null,
    TXmap:null,
  },
  getAddress(lat,lng){
    let that=this;
    this.TXmap.reverseGeocoder({
      location:{
        latitude: lat,
        longitude:lng
      },success(res){
        let location={
          lat:Number(lat),
          lng:Number(lng),
          address:res.result.address,
          markers:[
            {
              id:1,
              width: 40,   // 使用图标的宽度
              height: 40,
              latitude: lat,			// 每一个被标点的纬度
              longitude: lng,	// 每一个被标点的经度
              iconPath: '../image/location.png',
              callout: {
                content: '当前位置',
                color: '#ff0000',
                fontSize: 14,
                borderWidth: 2,
                borderRadius: 10,
                borderColor: '#000000',
                bgColor: '#fff',
                padding: 5,
                display: 'ALWAYS',
                textAlign: 'center'
              },
            }
          ]
        };
        that.setData({
          location:location
        })
      console.log(res)
      }
    })
  },
  clcickMap(val){
    console.log(val)
  },
  editCompare(){
    this.setData({
      compare:!this.data.compare
    })
    console.log(this.data.compare)
  },
  editType(val){
    this.setData({
      trigType:val.target.dataset.type
    })
  },
  seachLine(){
   switch (this.data.trigType){
      case "walk":
       break;
      case "bike":
       break;
      case "bus":
        break;
      case "car":
          break;
   }
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
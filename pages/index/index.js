// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:[
      {title:'腾讯地图',path:'../GDdemo/index',id:1},
      // {title:'高德地图2',path:'123',id:2},
      // {title:'高德地图3',path:'123',id:3},
      // {title:'高德地图4',path:'123',id:4},
    ]
  },
  jump:(val)=>{
    wx.navigateTo({
      url: val,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:(options)=>{
      console.log(options)
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(()=>{
      wx.hideLoading()  //关闭
    },1000)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: ()=>{

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow:()=>{

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide:()=> {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload:()=>{

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh:()=>{

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom:()=>{

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage:()=>{

  }
})
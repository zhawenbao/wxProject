// pages/welcome/welcome.js

Page({
  /**
   * 点击跳转页面
   */
  clickLogo:function()
  {
    wx.reLaunch({
      url: "../index/index",
    });
  }
})
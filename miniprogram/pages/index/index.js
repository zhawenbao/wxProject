//index.js
const app = getApp()

Page({
  /**
   * 点击banner跳转链接
   */
  clickBanner:function(){
    wx.reLaunch({
      url: "../welcome/welcome",
    });
  },
  java:function(){
    wx.reLaunch({
      url: '../welcome/welcome',
    });
  },
  php: function () {
    wx.reLaunch({
      url: '../welcome/welcome',
    });
  },
  pyhon: function () {
    wx.reLaunch({
      url: '../welcome/welcome',
    });
  },
  c: function () {
    wx.reLaunch({
      url: '../welcome/welcome',
    });
  }


})

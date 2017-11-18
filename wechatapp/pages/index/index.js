//index.js
//获取应用实例
var util = require('../../utils/util.js')


Page({
  data: {
  },
  //事件处理函数


  onLoad: function () {

    var time = util.formatTime(new Date());
    //调用应用实例的方法获取全局数据
    var bus=util.busTime(new Date());
    var suggection;
    var bus2={};
    switch(bus)
    {
      case 1:
        bus = "休息时间，暂无校车";
        bus2={};
       
        break;
      case 2:
        bus ="9：30：清水河->沙河";
        bus2="9：40：沙河->清水河";
        break;
      case 3:
        bus ="12:30 :清水河->沙河";
        bus2="12:40 :沙河->清水河";
        break;
      case 4:
        bus="15:00 :清水河->沙河";
        bus2= "15:00 :沙河->清水河";
        break;
      case 5:
        bus ="18:00 :清水河->沙河";
        bus2="18:00 :沙河->清水河";
        break;
      case 6:
        bus="21:00 ：清水河->沙河";
        bus2="21:20 :沙河->清水河";
        break;
      case 0:
        bus ="抱歉，该时间段暂无校车";
        bus ="抱歉，该时间段暂无校车";
        suggection="您还可以乘坐地铁";
        break;
    }
    this.setData({
      time:time,
      bus:bus,
      bus2:bus2
  });
  }
})

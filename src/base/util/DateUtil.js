/**
 * 时间工具类
 * @author xwang1024 <xwang1024@126.com>
 * @author mezzi
 */
const DateUtil = {

    /**
     * 格式化日期
     * @param {(String|Number|Date)} date Date或可被new Date()初始化为Date的字符串或毫秒数
     * @param {String} fmt 时间格式，例如：yyyy-MM-dd HH:mm:ss
     * 
     * @return {String} 时间字符串
     */
    formatDate: function(date, fmt) {
        date = new Date(date);
        var hours = date.getHours();
        var o = {
            "M+" : date.getMonth()+1,
            "d+" : date.getDate(),
            "h+" : hours>12?hours%12:hours,
            "H+" : hours,
            "m+" : date.getMinutes(),
            "s+" : date.getSeconds(),
            "q+" : Math.floor((date.getMonth()+3)/3),
            "S"  : date.getMilliseconds()
        };
        if(/(y+)/.test(fmt)) fmt=fmt.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length));
        for(var k in o)
            if(new RegExp("("+ k +")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        return fmt;
    },

    /**
     * 平滑日期，可将 2010-01-01 05:56:45 平滑为 2010-01-01 00:00:00（格林尼治零点），常用于时间比较
     * @param {(String|Number|Date)} date Date或可被new Date()初始化为Date的字符串或毫秒数
     * @param {String} fmt 平滑的时间精度格式，例如：yyyy-MM-dd为平滑到日，yyyy为平滑到年
     * 
     * @return {Date} 平滑得到的Date对象
     */
    smoothDate: function(date, fmt) {
        return new Date(DateUtil.formatDate(date, fmt));
    }
    
}

export default DateUtil
/**
 * formatDate：转换为相应格式的日期字符串
 * @param dateinit 13位的时间戳或是日期格式的字符串。必填。
 * @param format 日期格式。默认'yyyy-mm-dd hh:ii:ss'
 * @returns {string} 返回format格式的字符串
 */
export function formatDate(dateinit, format = "yyyy-mm-dd hh:ii:ss") {
  let format_str = format;
  if ( dateinit === null || dateinit === 0 || dateinit === "" || dateinit === undefined ) {
    return "";
  }
  let date = new Date(dateinit);
  //若改为let date = new Date(dateinit / 1000);则dateinit参数仅支持10位的时间戳
  let date_str = {
    "y+": date.getFullYear(),//年
    "m+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "i+": date.getMinutes(), //分
    "s+": date.getSeconds() //秒
  };
  for ( let item in date_str ) {
    if ( new RegExp("(" + item + ")", "i").test(format_str) ) {
      format_str = format_str.replace(
        RegExp.$1,
        date_str[item].toString().length < 2 ? "0" + date_str[item] : date_str[item]
      );
    }
  }
  return format_str;
};
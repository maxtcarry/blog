module.exports = (options, app) => {
  return async function getdate(ctx, next) {

    var date = new Date();
    var seperator1 = "-";
    var seperator2 = ":";
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    var getHours = date.getHours();
    var getMinutes = date.getMinutes();
    var getSeconds = date.getSeconds();
    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if(getHours >= 0 && getHours <= 9){
      getHours = '0'+getHours;
    }
    if(getMinutes >= 0 && getMinutes <= 9){
      getMinutes = '0'+getMinutes;
    }
    if(getSeconds >= 0 && getSeconds <= 9){
      getSeconds = '0'+getSeconds;
    }
    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
      " " + getHours + seperator2 + getMinutes +
      seperator2 + getSeconds;
    await next();
  
    return currentdate;

  }
}

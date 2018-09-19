var dateformat = require('dateformat');
var MbedCloudSDK = require("mbed-cloud-sdk");
var cfg = require("./config");
var connect = new MbedCloudSDK.ConnectApi(cfg.config);

/** Need to change accordingly ************************************* */
var resourceURI = "/3200/0/5501";  // Button Count
var period = 5000; // ms
/******************************************************************* */

var callCount = 0;
var retCount = 0;
function getDeviceResource(){
    callCount += 1;
    console.log(dateformat(new Date(), 'isoTime') + ", Call, Num=" + callCount);
    connect.getResourceValue(cfg.deviceId, resourceURI)
    .then(data =>{
        retCount += 1;
        console.log(dateformat(new Date(), 'isoTime') + ",  Ret, Num=" + retCount + ", btnCnt=" + JSON.stringify(data));
    })
    .catch(error =>{
        console.log(error);
    });
}
console.log(cfg);
setInterval(function(){getDeviceResource()}, period);

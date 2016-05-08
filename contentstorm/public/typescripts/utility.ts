
/// <reference path="../../definitions/jquery.d.ts" />

var webApplicationId = 1;

var postAjaj = function(protocol, objectToSend, cb) {

    var ajaxSettings = {
        type: "POST",
        url: protocol,
        data: JSON.stringify(objectToSend),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        timeout: 500000,
        success: function(data){
            cb(data)
        },
        failure: function(errMsg) {
            alert(errMsg);
        }
    };

    $.ajax(ajaxSettings);
};

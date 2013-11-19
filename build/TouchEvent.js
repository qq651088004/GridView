/**
 * Created by Tivon
 * 模拟touch事件
 */
(function(){
    var isIE = /MSIE/gi.test(navigator.appVersion);
    if(isIE)return;
    if("ontouchstart" in window)return;

    document.addEventListener("mousedown",onMouseDown);

    function onMouseDown(e){
        document.addEventListener("mousemove",onMouseMove);
        document.addEventListener("mouseup",onMouseEnd);
        var evt = creatEvent("touchstart");
        evt.touches = [e];
        e.target.dispatchEvent(evt);
    }
    function onMouseMove(e){
        var evt = creatEvent("touchmove");
        evt.touches = [e];
        e.target.dispatchEvent(evt);
    }
    function onMouseEnd(e){
        document.removeEventListener("mousemove",onMouseMove);
        document.removeEventListener("mouseup",onMouseEnd);
        var evt = creatEvent("touchend");
        evt.touches = [e];
        e.target.dispatchEvent(evt);
    }

    function creatEvent(type){
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent(type,true,true);
        return evt;
    }
})();
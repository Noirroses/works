(function(){
    function $(id){
        return document.getElementById(id)
    }
    var traversalBtn = $('traversal');
    var inputSearch = $('searchInput');
    var searchBtn = $('search');
    var root = $('root');
    var queue = [];
    var timer = null;
    var onAnimate = false;
    var clickSearch = false;

    //事件兼容函数
    function addEvent(element,type,handler){
        if(element.addEventListener){
            element.addEventListener(type,handler,false);
        }else if(element.attachEvent){
            element.attachEvent("on" + type,handler);
        }else{
            element["on" + type] = handler;
        }
    }
    //清空所有背景颜色
    function clearBgColor(){
        root.style.background = '#fff';
        var elements = root.getElementsByTagName('div');
        for(var i = 0,len = elements.length;i<len;i++){
            elements[i].style.background = '#fff';
        }
    }
    //遍历函数
    function traversal(node){
        var childes = node.children;
        if(childes.length !== 0){
            for(var i = 0,len = childes.length;i<len;i++){
                queue.push(childes[i]);
                traversal(childes[i]);
            }
        }
    }
    //遍历动画
    function traversalAnimate(){
        if(onAnimate){
            alert('根本停不下来');
            return;
        }
        if(clickSearch){
            var inputSearchText = inputSearch.value;
        }
        clearBgColor();//清空颜色
        onAnimate = true;//表示在运动中
        queue = [root];
        traversal(root);//初始化queue
        clearInterval(timer);

        root.style.background = 'blue';
        var i = 0;
        var len = queue.length;
        var found = 0;

        timer = setInterval(function(){
            if(i<len-1){
                if(!(queue[i].style.background ==="red")){
                    queue[i].style.background = "#fff";
                }
                queue[++i].style.background = "blue";
                if(inputSearchText === queue[i].firstChild.nodeValue.trim()){
                    queue[i].style.background = 'red';
                    found = i;
                }
            }else{
                queue[i].style.background = "#fff";
                clearInterval(timer);
                onAnimate = false;
                clickSearch = false;

                if(found == 0){
                    alert('没有找到？！');
                }
            }
        },200);
        ////setInterval()会按照指定的时间间隔[重复]执行代码，直至间歇调用被取消或者页面被卸载。



    }

    //绑定事件
    addEvent(traversalBtn,"click",traversalAnimate);
    addEvent(searchBtn,"click",function(){
        clickSearch = true;
        traversalAnimate();
    })


})();
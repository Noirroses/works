function luck(){

    var queue =[];
    var textarea = document.getElementById('textarea');
    //queue = textarea.value.split(/[\n\r\t\s,，、;；]+/g);
    var divList = document.getElementsByClassName('divList');
    var searchText = document.getElementById('searchText');

    function textCheck(){
        var dataSource = textarea.value;
        dataSource = dataSource.replace(/(,|，|、|\s|\r\n)/g, " "); //将所有内容分割格式转换为空格。
        dataSource = dataSource.replace(/^\s*/, ""); //将最左边所有空格消除
        dataSource = dataSource.replace(/\s*$/, ""); //将最右边所有空格消除
        dataSource = dataSource.replace(/\s{2,}/g, " "); //将中间出现两次以上空格换成一次空格。
        dataSource = dataSource.split(" "); //将处理好的字符串以空格分割成数组。
        return dataSource; //返回处理好的数组

    }


    document.getElementById('leftIn').addEventListener("click",function(){
        var textareaData = textCheck();
        queue = textareaData.concat(queue);
        //queue.unshift(textarea.value);
        magic();
        textarea.value = "";
        //console.log(queue);

    });
    document.getElementById('rightIn').addEventListener("click",function(){
        var textareaData = textCheck();
        queue = queue.concat(textareaData);
        //queue.push(textarea.value);
        magic();
        textarea.value = "";

    });
    document.getElementById('leftOut').addEventListener("click",function(){
        if(queue.length!=0){
            var yeah = queue.shift();
            alert(yeah);
            //console.log(queue);
            magic();//删除之后把数组队列中的元素显示出来
        }else{
            alert("队列没有内容了");
        }
    });
    document.getElementById('rightOut').addEventListener("click",function(){
        if(queue.length!=0){
            var yeah = queue.pop();
            alert(yeah);
            magic();
        }else{
            alert("队列没有内容了");
        }
    });
    document.getElementById('result').addEventListener("click",function(event){
        var start = event.target.getAttribute('id');//获取id即数组中的索引
        var yeah = queue.splice(start,1);//从数组索引数开始分离，分离一个数组单元
        alert(yeah);
        magic();
    });


    function magic(){
        var str = "";
        queue.forEach(function(a,i){
            str +="<div class='divList' id='" + i + "'>"+ a +"</div>";
        });
        //forEach方法中的function回调支持3个参数
        // 第1个(a)是遍历的数组内容；第2个(i)是对应的数组索引，第3个是数组本身。
        document.getElementById('result').innerHTML = str;
    };



    /**
     * 查询
     */
    document.getElementById('search').addEventListener("click",function(){
        var searchValue = searchText.value;
        for(var i =0;i<divList.length;i++){
            var RE = divList[i].innerHTML.toLowerCase();
            var ST = searchValue.toLowerCase();
            if(RE.search(ST)!= -1){
                divList[i].style.background="red";
            }else{
                divList[i].style.color="";
                divList[i].style.background="";
            }
        }

    });



}

window.onload = function(){
    luck();
}
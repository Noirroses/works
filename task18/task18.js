function luck(){

    var queue =[];
    var input = document.getElementById('input');
    document.getElementById('leftIn').addEventListener("click",function(){
        queue.unshift(input.value);
        magic();
        //console.log(queue);

    });
    document.getElementById('rightIn').addEventListener("click",function(){
        queue.push(input.value);
        magic();

    });
    document.getElementById('leftOut').addEventListener("click",function(){
        if(queue.length!=0){
            var yeah = queue.shift();
            alert(yeah);
            //console.log(queue);
            magic();
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
        queue.splice(start,1);//从数组索引数开始分离，分离一个数组单元
        magic();
    });


    function magic(){
        var str = "";
        queue.forEach(function(a,i){
            str +="<div id='" + i + "'>"+ a +"</div>";
        });
        //forEach方法中的function回调支持3个参数
        // 第1个(a)是遍历的数组内容；第2个(i)是对应的数组索引，第3个是数组本身。
        document.getElementById('result').innerHTML = str;
    };

}

window.onload = function(){
    luck();
}
function luck(){


    var queue =[];
    var input = document.getElementById('input');

    function inputCheck(){
        if(queue.length>=60){
            alert("数据满了");
            return 0;
        }
        if(input.value<10||input.value>100){
            alert("请输入10-100之内的数字");
            return 0;
        }
    }



    document.getElementById('leftIn').addEventListener("click",function(){
        if(inputCheck()==0){
            return;
        }
        queue.unshift(input.value);
        magic();
        //console.log(queue);

    });

    document.getElementById('rightIn').addEventListener("click",function(){
        if(inputCheck()==0){
            return;
        }
        queue.push(input.value);
        magic();

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
    document.getElementById('list').addEventListener("click",function(event){
        var start = event.target.getAttribute('id');//获取id即数组中的索引
        queue.splice(start,1);//从数组索引数开始分离，分离一个数组单元
        magic();
    });

    function randomColor(){
        var colors = ['#7cb567','#13ab32','#5e5e5e','#2c2c2c','#fff000','red','green','#456abc','#33bcc4','#346fc4'];
        var randomC = Math.floor(Math.random()*10);
        return colors[randomC];
    }

    function magic(){
        var str = "";
        queue.forEach(function(a,i){
            str +="<li id='" + i + "' style='height:"+ a*1.6 +"px;background:"+randomColor()+"'>"+ a +"</li>";
        });
        //forEach方法中的function回调支持3个参数
        // 第1个(a)是遍历的数组内容；第2个(i)是对应的数组索引，第3个是数组本身。
        document.getElementById('list').innerHTML = str;
    };

    //随机生成数据
   document.getElementById('random').onclick = function () {
       for(i=0;i<=50;i++){
           queue[i] = Math.floor(Math.random()*91+10);//10-100
       }
       console.log(queue);
       magic();
   };

    //排序

    document.getElementById('sort').onclick = function(){
            //for(var i=queue.length-1;i>1;i--){
            //    for(var j = 0;j<i;j++){
            //
            //        if(parseInt(queue[j])>parseInt(queue[j+1])){
            //            var x = queue[j];
            //            queue[j] = queue[j+1];
            //            queue[j+1] = x;
            //        }
            //    }
            //
            //}
            ////queue.sort();
            //console.log(queue);
            //magic();

        var i=0,j=1,temp;
        var timer = setInterval(run,5);
        function run(){
            if(i<queue.length){
                if(j<queue.length){
                    if(queue[i]>queue[j]){
                        temp = queue[i];
                        queue[i]=queue[j];
                        queue[j]=temp;
                        magic();
                    }
                    j++;//j从1-100分别与i=0进行比较
                }else{
                    i++;
                    j=i+1;
                }
            }else{
                clearInterval(timer);
                return;
            }
        }
    }


}

window.onload = function(){
    luck();
}

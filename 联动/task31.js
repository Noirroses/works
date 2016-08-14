function $(id){
    return document.getElementById(id)
}
var check = $('yes');
var nocheck = $('no');
var sc = $('sc');
var work = $('work');
var citySelect = $('city-select');
var schoolSelect = $('school-select');


/**
 *数组容器，存放城市，以及学校
 */
var list = [

    {text:'北京',
        val:[
            '北京大学',
            '清华大学',
            '北京理工大学',
            '北京联合大学'
        ]
    },
    {text:'上海',
        val:[
            '复旦大学',
            '上海大学',
            '上海理工大学',
            '上海财经大学'
        ]
    },
    {text:'青岛',
        val:[
            '中国海洋大学',
            '中国石油大学',
            '山东科技大学',
            '青岛科技大学'
        ]
    }
]

 /**
 * 单选框
 */
check.onclick = function(){
    if(check.checked){
        work.style.display = 'none';
        sc.style.display = "block";
    }
}

nocheck.onclick = function(){
    if(nocheck.checked){
        sc.style.display="none";
        work.style.display = "block";
    }
}

/**
 * 联动菜单
 */
function firstSelected(){ //第一级联动菜单
    for(var i = 0;i<list.length;i++){//遍历list数组，创建出城市
        var option = document.createElement('option');
        option.innerHTML = list[i].text; //设置option的值
        option.value = list[i].text;
        citySelect.appendChild(option);
    }
}
//firstSelected();

function secondSelected(){ //第二级联动菜单
    schoolSelect.innerHTML = ""; //清空html
    for(var i = 1;i<=list.length;i++){//遍历一级联动菜单
        if(citySelect.childNodes[i].selected){
        //判断：如果某一个元素被选中，那么：遍历这个list的val值
        //（i-1 是因为chlidNodes中的option是从1开始的,索引为0的节点是文本节点）
            for(var j = 0;j<list[i-1].val.length;j++){
                var option = document.createElement("option");		//创建option
                option.innerHTML = list[i-1].val[j];				//设置option的值  （i-1 是因为chlidNodes是从1开始的）
                option.value = list[i-1].val[j];
                schoolSelect.appendChild(option);
            }
        }
    }
}
console.log(citySelect.childNodes[0]);
/**
 #text
 childNodes: NodeList[0]
 data: "↵            "
 firstChild: null
 lastChild: null
 length: 13
 nextElementSibling: option
 nextSibling: option
 nodeName: "#text"
 nodeType: 3  //文本节点
 .
 .
 .
 */



firstSelected()//运行一级菜单
secondSelected()//运行一次二级联动菜单
citySelect.onclick = function(){ //点击再运行二级联动菜单
    secondSelected();
}










































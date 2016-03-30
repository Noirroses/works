/* 数据格式演示
 var aqiSourceData = {
 "北京": {
 "2016-01-01": 10,
 "2016-01-02": 10,
 "2016-01-03": 10,
 "2016-01-04": 10
 }
 };
 */

// 以下两个函数用于随机模拟生成测试数据
function getDateStr(dat) {
    var y = dat.getFullYear();
    var m = dat.getMonth() + 1;
    m = m < 10 ? '0' + m : m;
    var d = dat.getDate();
    d = d < 10 ? '0' + d : d;
    return y + '-' + m + '-' + d;
}
function randomBuildData(seed) {
    var returnData = {};
    var dat = new Date("2016-01-01");
    var datStr = '';
    for (var i = 1; i < 92; i++) {
        datStr = getDateStr(dat);
        returnData[datStr] = Math.ceil(Math.random() * seed);
        dat.setDate(dat.getDate() + 1);
    }
    return returnData;
}
//console.log(randomBuildData(500));

var aqiSourceData = {
    "北京": randomBuildData(500),
    "上海": randomBuildData(300),
    "广州": randomBuildData(200),
    "深圳": randomBuildData(100),
    "成都": randomBuildData(300),
    "西安": randomBuildData(500),
    "福州": randomBuildData(100),
    "厦门": randomBuildData(100),
    "沈阳": randomBuildData(500)
};

// 用于渲染图表的数据
var chartData = {};

// 记录当前页面的表单选项
var pageState = {
    nowSelectCity:"",
    nowGraTime: "day"
}

var colors = ['#16324a', '#24385e', '#393f65', '#4e4a67', '#5a4563', '#b38e95',
    '#edae9e', '#c1b9c2', '#bec3cb', '#9ea7bb', '#99b4ce', '#d7f0f8'];

//var formGraTime = document.getElementById('form-gra-time');
//var citySelect = document.getElementById('city-select');



/**
 * 渲染图表
 */
function renderChart() {
    var str = "";
    for(var v in chartData){
        str += "<div class='box "+pageState['nowGraTime']+"'>";
        str += "<div class = 'histogram' style='height:"+ chartData[v] +"px;background-color:"+ colors[Math.floor(Math.random() * 11)] +"' title='"+v+":"+chartData[v]+"'></div>";
        str += "</div>";

    };
    document.getElementsByClassName('aqi-chart-wrap')[0].innerHTML = str;

}

/**
 * 日、周、月的radio事件点击时的处理函数
 */
function graTimeChange() {
    // 确定是否选项发生了变化
    var typeNow=getTimeNow();
    if(typeNow==pageState["nowGraTime"]){
        return;
    }else{
        // 设置对应数据
        initAqiChartData();
        // 调用图表渲染函数
        renderChart();
    }

}
/*
 获取当前时间类型
 */

function getTimeNow(){
    var types = document.getElementsByName("gra-time");
    var typeNow = "";
    [].forEach.call(types,function(v){
        if(v.checked){
            typeNow= v.value;
        }
    });
    //[]就是个数组，而且是用不到的空数组。用来就是为了访问它的数组相关方法，
    // 比如.forEach。这是一种简写，完整的写法应该是这样：Array.prototype.forEach.call(...);
    //.call是一个prototype，JavaScript函数内置的。.call使用它的第一个参数替换掉[]的内容，
    // 也就是你要传入的数组，其它的参数就跟forEach方法的参数一样了。
    //[].forEach.call()是一种快速的方法访问forEach，并将空数组的this换成想要遍历的list。
    return typeNow;
}


/**
 * select发生变化时的处理函数
 */
function citySelectChange() {
    // 确定是否选项发生了变化
    var cityNow = document.getElementById("city-select").value;
    if(cityNow==pageState["nowSelectCity"]){
        return;
    }else{
        // 设置对应数据
        initAqiChartData();
        // 调用图表渲染函数
        renderChart();
    }
}

/**
 * 初始化日、周、月的radio事件，当点击时，调用函数graTimeChange
 */
function initGraTimeForm() {
    var types = document.getElementsByName("gra-time");
    [].forEach.call(types,function(value){
        value.addEventListener("click",graTimeChange);
    });
}

/**
 * 初始化城市Select下拉选择框中的选项
 */
function initCitySelector() {
    // 读取aqiSourceData中的城市，然后设置id为city-select的下拉列表中的选项
    var select = document.getElementById("city-select");
    var str = "";
    for(var city in aqiSourceData){
        str+="<option value='"+city +"'>"+city+"</option>";
    }
    select.innerHTML = str;
    // 给select设置事件，当选项发生变化时调用函数citySelectChange
    select.addEventListener("change",citySelectChange);

}

/**
 * 初始化图表需要的数据格式
 */
function initAqiChartData() {
    // 将原始的源数据处理成图表需要的数据格式
    // 处理好的数据存到 chartData 中
    var type = getTimeNow();
    var city = document.getElementById("city-select").value;
    pageState["nowGraTime"] = type;
    pageState["nowSelectCity"] = city;

    switch (type){
        case "day":
            chartData = aqiSourceData[city];
            break;
        case "week":
            chartData = {};
            var count = 0,total = 0,week = 1,date,weekDay;
            for(var v in aqiSourceData[city]){
                date = new Date(v);
                weekDay = date.getDay();
                if(weekDay==6){
                    count++;
                    total+=aqiSourceData[city][v];
                    chartData["week"+week]=Math.round(total/count);
                    count = 0;
                    total = 0;
                    week++;
                }else{
                    count++;
                    total+=aqiSourceData[city][v];

                }
            }
            chartData["week"+week]=Math.round(total/count);
            break;
        case "month":
            chartData={};
            var count = 0,total = 0,month = -1,date;
            for(var v in aqiSourceData[city]){
                date = new Date(v);
                if(month==-1){
                    month=date.getMonth()+1;
                }else if(date.getMonth()+1!=month){
                    chartData[month+"月"]=Math.round(total/count);
                    month = date.getMonth()+1;
                    count=0;
                    total=0;
                }
                count++;
                total+=aqiSourceData[city][v];

            }
            chartData[month+"月"] =Math.round(total/count);
            break;

    }
    console.log(JSON.stringify(chartData));
    renderChart();

}
//        /**
//         * 获取随机颜色
//         */
//        function getRandomColor(){
//            return '#' + (function(h){
//                        return new Array(7 - h.length).join("0") + h
//                    }
//                    )((Math.random() * 0x1000000 << 0).toString(16))
//        }
/**
 * 初始化函数

 /**
 * 初始化函数
 */
function init() {
    initGraTimeForm()
    initCitySelector();
    initAqiChartData();
}
window.onload = function(){
    init();
}


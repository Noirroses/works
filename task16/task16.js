
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
*    "北京": 90,
*    "上海": 40
* };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city = document.getElementById('aqi-city-input').value.trim();
    var aqi = document.getElementById('aqi-value-input').value.trim();
    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
        alert("城市名必须为中英文字符");
        return;
    }
    if(!aqi.match(/^\d+$/)){
        alert("空气质量指数必须为整数");
        return;
    }
    aqiData[city] = aqi;
    //console.log(aqiData);
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var table = document.getElementById('aqi-table');
    var str = "<tr>><th>城市</th><th>空气质量</th><th>删除当前</th></tr>";
    for (var c in aqiData){
        str += "<tr><td>" + c +"</td><td>"+aqiData[c]+"</td><td><button onclick=\"delBtnHandle(\'" + c + "\')\">删除</button></td></tr>";
    }
    table.innerHTML = str;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
// do sth.
    delete aqiData[city];
    renderAqiList();
}

function init(){

// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
    var btn = document.getElementById('add-btn');
    btn.addEventListener('click',addBtnHandle);

}

window.onload = function(){
    init();
}

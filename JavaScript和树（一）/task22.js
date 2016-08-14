var queue = [];//存储队列
var timer = null;//计时器
/*
*先序遍历
*/
function preOrder(node){
    queue.push(node);
    node.firstElementChild?preOrder(node.firstElementChild):0;
    node.lastElementChild?preOrder(node.lastElementChild):0;
}
/**
 * 中序遍历
 */
function inOrder(node){
    node.firstElementChild?inOrder(node.firstElementChild):0;
    queue.push(node);
    node.lastElementChild?inOrder(node.lastElementChild):0;
}
/**
 * 后序遍历
 */
function postOrder(node){
    node.firstElementChild?postOrder(node.firstElementChild):0;
    node.lastElementChild?postOrder(node.lastElementChild):0;
    queue.push(node);
}
/**
 * 动画
 */
function animate(){
    //初始化状态
    clearInterval(timer);
    var branch = document.getElementsByClassName('branch');
    for(var i = 0;i<branch.length;i++){
        branch[i].style.background = '#fff';
    }
    //执行动画
    i = 0;
    queue[0].style.background = 'red';
    timer = setInterval(function () {
        i++;
        if(i>=queue.length){
            queue[i-1].style.background = '#fff';//将遍历的最后一个回归白色状态
            clearInterval(timer);
        }else{
            queue[i].style.background = 'red';
            queue[i-1].style.background = '#fff';//将正在遍历的上一个回归白色状态
        }
    },400);

}

window.onload = function () {
    var root = document.getElementsByClassName('tree-0')[0];
    document.getElementById('btn1').onclick = function(){
        queue = [];
        preOrder(root);//从最外层节点开始
        animate();
    }
    document.getElementById('btn2').onclick = function(){
        queue = [];
        inOrder(root);
        animate();
    }
    document.getElementById('btn3').onclick = function(){
        queue = [];
        postOrder(root);
        animate();
    }
}















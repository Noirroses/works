var	nameInfo = document.getElementById('name_info'),
    passwordInfo = document.getElementById('password_info'),
    confirmInfo = document.getElementById('confirm_info'),
    emailInfo = document.getElementById('email_info'),
    phoneInfo = document.getElementById('phone_info');



function nameCheck(){
    var nameInput = nameInfo.getElementsByTagName('input')[0];
    var nameSpan = document.getElementById('nameSpan');

    nameInput.onfocus = function () {
        nameSpan.innerHTML = '请输入长度为4~16位字符';
    }
    nameInput.onblur = function () {
        if(countLength(nameInput.value)==0){
            nameSpan.innerHTML = '姓名不能为空';
            nameSpan.style.color = 'red';
            nameInput.style.border = '1px solid red';
        }else if(countLength(nameInput.value)>=4&&countLength(nameInput.value)<=16){
            nameSpan.innerHTML = '格式正确';
            nameSpan.style.color = '#50a4e9';
            nameInput.style.border = '1px solid #50a4e9';
        }else{
            nameSpan.innerHTML = '格式不正确';
            nameSpan.style.color = 'red';
            nameInput.style.border = '1px solid red';
        }
    }
}

function countLength(str){
    var inputLength = 0;
    for(var i=0;i<str.length;i++){
        var countCode = str.charCodeAt(i);
        if(countCode>=0&&countCode<=128){
            inputLength +=1;
        }else{
            inputLength +=2
        }
    }
    return inputLength;
}

function passwordCheck(){
    var passwordInput = passwordInfo.getElementsByTagName('input')[0];
    var passwordSpan = document.getElementById('passwordSpan');

    passwordInput.onfocus = function () {
        passwordSpan.innerHTML = '请输入长度为4~16位密码';
    }
    passwordInput.onblur = function(){
        if(passwordInput.value.length>=4&&passwordInput.value.length<=16){
            passwordSpan.innerHTML = '格式正确';
            passwordSpan.style.color = '#50a4e9';
            passwordInput.style.border = '1px solid #50a4e9';
        }else{
            passwordSpan.innerHTML = '格式不正确';
            passwordSpan.style.color = 'red';
            passwordInput.style.border = '1px solid red';
        }
    }
}

function confirmCheck(){
    var confirmInput = confirmInfo.getElementsByTagName('input')[0];
    var confirmSpan = document.getElementById('confirmSpan');
    var passwordInput = passwordInfo.getElementsByTagName('input')[0];

    confirmInput.onfocus = function(){
        confirmSpan.innerHTML = '请再次输入密码';
    }
    confirmInput.onblur = function(){
        if(confirmInput.value == passwordInput.value && confirmInput.value!=0){
            confirmSpan.innerHTML = '密码一致';
            confirmSpan.style.color = '#50a4e9';
            confirmInput.style.border = '1px solid #50a4e9';
        }else{
            confirmSpan.innerHTML = '输入密码不一致';
            confirmSpan.style.color = 'red';
            confirmInput.style.border = '1px solid red';
        }
    }
}

function emailCheck(){
    var emailInput = emailInfo.getElementsByTagName('input')[0];
    var emailSpan = document.getElementById('emailSpan');
    var regExp  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    emailInput.onfocus = function () {
        emailSpan.innerHTML = '请输入邮箱地址';
    }
    emailInput.onblur = function () {
        if(regExp.test(emailInput.value)){
            //test() 方法用于检测一个字符串是否匹配某个模式.
            emailSpan.innerHTML = '格式正确';
            emailSpan.style.color = '#50a4e9';
            emailInput.style.border = '1px solid #50a4e9';
        }else{
            emailSpan.innerHTML = '格式不正确';
            emailSpan.style.color = 'red';
            emailInput.style.border = '1px solid red';
        }
    }
}

function phoneCheck(){
    var phoneInput = phoneInfo.getElementsByTagName('input')[0];
    var phoneSpan = document.getElementById('phoneSpan');
    var regExp = /^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/;

    phoneInput.onfocus = function () {
        phoneSpan.innerHTML = '请输入手机号码';
    }
    phoneInput.onblur = function () {
        if(regExp.test(phoneInput.value)){
            phoneSpan.innerHTML = '格式正确';
            phoneSpan.style.color = '#50a4e9';
            phoneInput.style.border = '1px solid #50a4e9';
        }else{
            phoneSpan.innerHTML = '格式不正确';
            phoneSpan.style.color = 'red';
            phoneInput.style.border = '1px solid red';
        }
    }
}

function btnHandler(){
    var btnCheck = document.getElementById('btnRight');
    btnCheck.onclick=function(){
        var spanList = document.getElementsByTagName('input');
        for(var i = 0;i<spanList.length;i++){
            if(spanList[i].style.border == '1px solid red'){
                alert('输入有误');
                console.log(spanList)
                return;
            }

        }


    }
}

window.onload = function () {
    nameCheck();
    passwordCheck();
    confirmCheck();
    emailCheck();
    phoneCheck();
    btnHandler();
}
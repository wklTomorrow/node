console.log('hello world')

function onClickThis() {
    let dom = document.getElementsByClassName('body')[0]
    dom.style.color = 'black'
}

function onGetDate() {
    let dom = document.getElementsByClassName('con')[0]
    let xmlhttp
    if (window.XMLHttpRequest)
    {
        // IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
        xmlhttp=new XMLHttpRequest();
    }
    else
    {
        // IE6, IE5 浏览器执行代码
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            let data = xmlhttp.responseText
            dom.innerHTML = JSON.parse(data).msg
        }
    }
    xmlhttp.open("GET","http://localhost:3000/hello",true);
    xmlhttp.send();
}
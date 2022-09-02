// ==UserScript==
// @name         空城里链接助手
// @namespace    https://www.ilzya.com/archives/4/
// @version      2.1.3
// @description  免等待下载文件，超酷的哎~
// @author       空城里
// @icon         data:image/jpeg;base64,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
// @license AGPL


// @include        *://www.feimaoyun.com/*
// @include        *://*.lanzou*.com/*
// @include        *://*.77file.com/*
// @include        *://*.xunniupan.com/*
// @include        *://*.567yunpan.com/*
// @include        *://dufile.com/*
// @include        *://*.expfile.com/*
// @include        *://*.xueqiupan.com/*
// @include        *://*.xfpan.cc/*
// @include        *://ownfile.net/*
// @include        *://*.dudujb.com/*
// @include        *://*.yifile.com/*
// @include        *://*.1988wp.com/*
// @include        *://rosefile.net/*
// @include        *://*.xingyaopan.com/*
// @include        *://*.kufile.net/*
// @include        *://*jingfile.com/*


// @grant        unsafeWindow
// @grant        GM_xmlhttpRequest
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @grant        GM_listValues
// @grant        GM_openInTab
// @grant        GM_notification
// @connect      localhost
// @connect      127.0.0.1
// @connect      api.ilzya.com
// @connect      *




// ==/UserScript==

(function () {

    'use strict';

    if(!GM_getValue("act2_click")){ GM_setValue("act2_click",0) }
    let feimao_actBox



    let _global = {
        _wd: {
            display: 'none'
        },
        _durl: null,
        _filename: '',
        _aria_url: 'http://localhost:6800/jsonrpc', //这里是Aria推送地址，本地默认不需要更改
        _aria_token: '',  //这里是Aria推送token，默认不需要设置
        _idm_url: 'http://localhost:7178/select',  //这是IDM推送地址，禁止更改
    }

    const _func = {
        _obj: {
            resolve(val) {
                _global._durl = null;
                let aly_data = GM_getValue('aliyun_data');
                let param = '';
                if (aly_data == null || undefined || '') {
                    param = 'url=' + val;
                } else {
                    param = 'url=' + val + '&sig=' + aly_data.sig + '&sid=' + aly_data.sessionId + '&to=' + aly_data.token;
                }
                GM_xmlhttpRequest({
                    method: "post",
                    url: 'http://api.ilzya.com:1306/resolve',
                    data: param,
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    onload: function (res) {
                        let result = JSON.parse(res.response);
                        if (result.code === 0) {
                            _global._durl = result.durl;
                            _global._filename = result.filename;
                            if(feimao_actBox){
                                let act4 = result.message
                                let act1 = "点击下载"
                                if(GM_getValue("act2_click")==1||GM_getValue("act2_click")==3){//自动下载
                                    act1 = "自动开始下载，若未下载点此下载 或刷新"
                                    _func._obj.chrome_down(_global._durl);
                                }
                                feimao_actBox(act4,act1,"","", function(){ _func._obj.chrome_down(_global._durl) } )
                            }else{
                                alert(result.message);
                            }
                        } else if (result.code == undefined) {
                            alert('后端服务器未返回数据，请重试！')
                        } else if (result.code === -1) {
                            if(feimao_actBox){
                                let act4 = "若解析提示重新验证刷新页面重新解析即可！"
                                let act1 = "<font color=red>"+result.message+"！<U>请刷新页面</U>！</font>"
                                feimao_actBox(act4,act1,"","", function(){ window.location.reload() } )
                            }else{
                                alert(result.message);
                            }
                        }
                        btn_get_durl.innerHTML = '获取下载地址';
                    },
                    onerror: function (err) {
                        alert('访问后端服务错误，请重试！');
                        btn_get_durl.innerHTML = '获取下载地址';

                    }
                });
            },
            chrome_down(val) {
                if (val == null || val == '') {
                    alert('请先获取下载地址！');
                    return;
                } else {
                    let fileName = document.getElementsByClassName("fileName")
                    if(fileName && fileName[0] && fileName[0].outerText && fileName[0].outerText.match(/\.rar|\.zip|\.txt|\.7z|\.psd|\.jpg/i)){
                        downloadFile(val,fileName[0].outerText)
                    }else{
                        window.open(val);
                    }
                }
            },
            idm_down(val1, val2, val3) {
                if (val1 == null || val1 == '') {
                    alert('请先获取下载地址！');
                    btn_get_idm_down.innerHTML = 'IDM下载';
                    return;
                }
                GM_xmlhttpRequest({
                    method: "post",
                    url: _global._idm_url,
                    data: JSON.stringify({ url: val1, ref: val3, name: val2 }),
                    onload: function (res) {
                        if (res.response == '1') {
                            alert('发送IDM任务成功~');
                        } else if (res.response == '0') {
                            alert('发送IDM任务失败，请重试！')
                        } else {
                            alert('未知错误');
                        }
                        btn_get_idm_down.innerHTML = 'IDM下载';
                    },
                    onerror: function (err) {
                        alert('请检查是否启动IDMSERVER，若未启动，请先启动。');
                        btn_get_idm_down.innerHTML = 'IDM下载';

                    }
                });

            },
            aria_down(val1, val2, val3) {
                if (val1 == null || val1 == '') {
                    alert('请先获取下载地址！');
                    btn_get_aria_down.innerHTML = 'Aria下载';
                    return;
                }
                GM_xmlhttpRequest({
                    method: "post",
                    url: _global._aria_url,
                    data: JSON.stringify({ "jsonrpc": "2.0", "method": "aria2.addUri", "id": "QXJpYU5nXzE2NjEwNzQzNTBfMC44OTUwMDYzNDAzOTE3MDE3", "params": [[val1], { "out": val2, "referer": val3 }] }),
                    headers: { "Content-Type": "application/json" },
                    onload: function (res) {
                        if (res.status === 200) {
                            alert('Aria已经开始下载了~');
                        } else if (res.error.code != undefined) {
                            alert('错误，请重试！')
                        } else {
                            alert(res.error.message);
                        }
                        btn_get_aria_down.innerHTML = 'Aria下载';
                    },
                    onerror: function (err) {
                        alert('请检查Aria是否启动！');
                        btn_get_aria_down.innerHTML = 'Aria下载';
                    }
                });

            },
            pass_xingyao_open() {
                if (document.domain == 'www.xingyaopan.com') {
                        __csppp.open = function () {
                            console.log('空城里-<星耀盘>:已屏蔽星耀盘自动跳转购买VIP界面');
                            return 'https://www.ilzya.com';
                        }
                }
            },

        }
    }





    let switch_wd = document.createElement('div');
    switch_wd.style.width = '140px';
    switch_wd.style.height = '40px';
    switch_wd.style.position = 'fixed';
    switch_wd.style.right = '0';
    switch_wd.style.top = '150px';
    switch_wd.style.borderRadius = '3%';
    switch_wd.style.backgroundColor = 'red';
    switch_wd.style.cursor = 'pointer';
    switch_wd.onclick = function () {
        wd.style.display = wd.style.display == 'none' ? 'block' : 'none';
    }


    let ico = document.createElement('img');
    ico.style.width = '40px';
    ico.style.height = '100%';
    ico.style.borderRadius = '3%';
    ico.src = 'https://www.ilzya.com/favicon.ico';


    let u = document.createElement('img');
    u.style.float = 'right';
    u.style.width = '100px';
    u.style.height = '100%';
    u.src = 'https://s1.ax1x.com/2022/08/21/vyBHxI.png';


    let wd = document.createElement('div');
    wd.style.width = '500px';
    wd.style.height = '235px';
    wd.style.position = 'fixed';
    wd.style.right = '25%';
    wd.style.top = '150px';
    wd.style.borderRadius = '1%';
    wd.style.backgroundColor = '#f1f2f6';
    wd.style.boxShadow = '0px 0px 10px 5px #aaa';
    wd.style.display = _global._wd.display;



    let title = document.createElement('div');
    title.style.width = '500px';
    title.style.height = '25px';
    title.style.borderRadius = '1%';
    title.style.backgroundColor = '#466bff';
    title.style.textAlign = 'center';
    title.style.color = 'red';
    title.innerHTML = '空城里链接助手';


    let btn_get_durl = document.createElement('span');
    btn_get_durl.innerHTML = '获取下载地址';
    btn_get_durl.id = 'btn_get';
    btn_get_durl.style.top = '35px';
    btn_get_durl.onclick = function () {
        btn_get_durl.innerHTML = '获取中....';
        _func._obj.resolve(document.location.href)
    }

    let btn_get_chrome_down = document.createElement('span');
    btn_get_chrome_down.innerHTML = '浏览器下载';
    btn_get_chrome_down.id = 'btn_get';
    btn_get_chrome_down.style.top = '80px';
    btn_get_chrome_down.onclick = function () {
        _func._obj.chrome_down(_global._durl)
    }

    let btn_get_aria_down = document.createElement('span');
    btn_get_aria_down.innerHTML = 'Aria下载';
    btn_get_aria_down.id = 'btn_get';
    btn_get_aria_down.style.top = '125px';
    btn_get_aria_down.onclick = function () {
        btn_get_aria_down.innerHTML = '发送Aria任务中';
        _func._obj.aria_down(_global._durl, _global._filename, document.location.href)
    }


    let btn_get_idm_down = document.createElement('span');
    btn_get_idm_down.innerHTML = 'IDM下载';
    btn_get_idm_down.id = 'btn_get';
    btn_get_idm_down.style.top = '170px';
    btn_get_idm_down.onclick = function () {
        btn_get_idm_down.innerHTML = '发送IDM任务中';
        _func._obj.idm_down(_global._durl, _global._filename, document.location.href)
    }


    let right_div = document.createElement('div');
    right_div.style.width = '340px';
    right_div.style.height = '210px';
    right_div.style.borderLeft = '1px solid #000';
    right_div.style.float = 'right';

    let FAQ = document.createElement('p');
    FAQ.style.width = '320px';
    FAQ.style.position = 'relative';
    FAQ.style.paddingLeft = '20px';
    FAQ.innerHTML = 'FAQ  -  微信搜索 <a href="https://s1.ax1x.com/2022/05/21/OXHkPf.jpg" target="_blank">IT空城里</a> 关注不迷路！';
    FAQ.style.borderBottom = '1px solid #000';

    let Q1 = document.createElement('span');
    Q1.style.width = '320px';
    Q1.style.position = 'relative';
    Q1.style.paddingLeft = '20px';
    Q1.innerHTML = 'Q:如何使用？<br>';

    let A1 = document.createElement('span');
    A1.style.width = '320px';
    A1.style.position = 'relative';
    A1.style.paddingLeft = '20px';
    A1.style.color = 'red';
    A1.innerHTML = 'A:首先点击获取下载地址，等待获取成功后，选择下载方式然后下载即可！<a href="https://www.ilzya.com/archives/430/" target="_blank" style="color:blue">戳我保姆级食用教程</a><br>';

    let Q2 = document.createElement('span');
    Q2.style.width = '320px';
    Q2.style.position = 'relative';
    Q2.style.paddingLeft = '20px';
    Q2.innerHTML = 'Q:Aria怎么使用？<br>';

    let A2 = document.createElement('span');
    A2.style.width = '320px';
    A2.style.position = 'relative';
    A2.style.paddingLeft = '20px';
    A2.style.color = 'red';
    A2.innerHTML = 'A:<a href="https://www.aliyundrive.com/s/K5WH3yeXJDf" target="_blank">点我下载Aria</a>,下载完解压运行Aria2_Web.exe即可！<br>';



    let Q3 = document.createElement('span');
    Q3.style.width = '320px';
    Q3.style.position = 'relative';
    Q3.style.paddingLeft = '20px';
    Q3.innerHTML = 'Q:IDM怎么使用？<br>';


    let A3 = document.createElement('span');
    A3.style.width = '320px';
    A3.style.position = 'relative';
    A3.style.paddingLeft = '20px';
    A3.style.color = 'red';
    A3.innerHTML = 'A:<a href="https://www.aliyundrive.com/s/KCNBJKReH1t" target="_blank">点我下载IDMSERVER</a>,下载完解压运行IDMSERVE.exe即可！<br>';


    GM_addStyle(`
        #btn_get {
            color:white;
            width:147px;
            height:39px;
            border:1px solid #ed7246;
            align-items:center;
            font-size:16px;
            font-weight:450;
            border-radius:20px;
            justify-content:center;
            background-color:#ed7246;
            position:absolute;
            left:5px;
            display:flex;
            cursor: pointer;
        }


    `);



    let nc = document.createElement('div');
    nc.id = "nc_kcl"

    nc.style.position = 'fixed';
    nc.style.top = '310px';
    nc.style.left = '50%';
    // nc.style.display = 'none'

    document.body.append(nc)




    document.body.append(switch_wd);
    document.body.append(wd);
    wd.append(title);
    wd.append(btn_get_durl);
    wd.append(btn_get_chrome_down);
    wd.append(btn_get_aria_down);
    wd.append(btn_get_idm_down);
    wd.append(right_div);
    right_div.append(FAQ);
    right_div.append(Q1);
    right_div.append(A1);
    right_div.append(Q2);
    right_div.append(A2);
    right_div.append(Q3);
    //right_div.append(A3);
    switch_wd.append(ico);
    switch_wd.append(u);

    _func._obj.pass_xingyao_open();


    if (window.location.host == 'www.feimaoyun.com'&& window.location.pathname.split("/")[1] == "s") {

        GM_deleteValue('aliyun_data');

        feimao_actBox = feimao_actBox_fn;//飞猫下载按钮替换


        // alert('等待提示成功后，即可解析，若10秒内不提示，请刷新页面！')



        AWSC.use("nc", function (state, module) {
            window.nc = module.init({
                appkey: "FFFF00000000017782BC",
                scene: "nc_other",
                renderTo: "nc_kcl",
                success: function (data) {
                    if(feimao_actBox){
                        let act4 = "滑块成功，若解析提示重新验证刷新页面重新解析即可！"
                        let act1 = "自动开始自动解析"
                        feimao_actBox(act4,act1)
                        setTimeout(function () {
                            nc.style.display = 'none'
                            _func._obj.resolve(document.location.href)
                        },300);
                    }
                    // alert('成功，若解析提示重新验证刷新页面重新解析即可！')
                    console.log('滑动成功！ BY 空城里@www.ilzya.com')
                    GM_setValue('aliyun_data', data);
                },
                fail: function (failCode) {
                    window.console && console.log(failCode)
                },
                error: function (errorCode) {
                    window.console && console.log(errorCode)
                }
            });
        })//AWSC.use



        window.onload = function () {

            let nc_lang_cnt = document.getElementsByClassName('nc-lang-cnt')
            let nc_lang_cnt_loop = setInterval(function () {
                if(nc_lang_cnt&&nc_lang_cnt[0]&&nc_lang_cnt[0].outerText&&nc_lang_cnt[0].outerText=='请按住滑块，拖动到最右边'){
                    if(GM_getValue("act2_click")==0||GM_getValue("act2_click")==1){nc_lang_cnt_fn()}//运行自动滑块
                    clearInterval(nc_lang_cnt_loop);
                }
            }, 100);

            let nc_lang_cnt_fn = function () {
                let btn = document.querySelector("#nc_1_n1z");

                let mousedown = document.createEvent("MouseEvents");
                let rect = btn.getBoundingClientRect();
                let x = rect.x || rect.left;
                let y = rect.y || rect.top;
                let w = document.querySelector("#nc_1_n1t").getBoundingClientRect().width;
                //点击滑块
                mousedown.initMouseEvent("mousedown", true, true, document.defaultView, 0, x, y, x, y, false, false, false, false, 0, null);
                btn.dispatchEvent(mousedown);
                let dx = 0;
                let dy = 0;

                //滑动滑块
                let intervaltimer = setInterval(function () {
                    var mousemove = document.createEvent("MouseEvents");
                    var _x = x + dx;
                    var _y = y + dy;
                    mousemove.initMouseEvent("mousemove", true, true, document.defaultView, 0, _x, _y, _x, _y, false, false, false, false, 0, null);
                    btn.dispatchEvent(mousemove);
                    btn.dispatchEvent(mousemove);
                    if (_x - x >= w) {
                        clearInterval(intervaltimer);
                        var mouseup = document.createEvent("MouseEvents");
                        mouseup.initMouseEvent("mouseup", true, true, document.defaultView, 0,
                                               _x, _y, _x, _y, false, false, false, false, 0, null);
                        btn.dispatchEvent(mouseup);
                        setTimeout(function () {
                            console.log('拖动结束执行逻辑');
                        }, 1000);
                    }
                    else {
                        dx += parseInt(Math.random() * (209 - 199) + 199) / 33;
                    }
                }, 20);
            }//nc_lang_cnt_fn

            feimao_actBox()

        }//window.onload

        class_clear()//页面元素清理


    }//feimaoyun

    /**
     *act4左按钮文字，act1中按钮文字，act2右按钮文件，act4_fn左按钮点击函数，act1_fn中按钮点击，act2_fn右按钮点击
     */
    function feimao_actBox_fn (act4,act1,act2,act4_fn,act1_fn,act2_fn) {
        let actBox = document.getElementsByClassName('actBox')
        if(actBox&&actBox[0]){
            if(GM_getValue("act2_click")==0||GM_getValue("act2_click")==1){ act1 = act1 || "正在自动滑块，请稍等" }else{ act1 = act1 || "滑动滑块后自动解析" }
            act4 = "<div class='act act4'style='user-select:none'>"+(act4 || "微信搜索 IT空城里 关注不迷路！")+"</div>"
            act1 = "<div class='act act1'style='color:#466bff;user-select:none'>"+act1+"</div>"
            act2 = "<div class='actCodeBox act act2'style='color:#28c0bc;text-align:center;user-select:none'>"+(act2 || "by 空城里@www.ilzya.com")+act2_clickfn()+"</div>"
            actBox[0].innerHTML = act4+act1+act2

            document.getElementsByClassName('act act4')[0].onclick =act4_fn||function () { wd.style.display = wd.style.display == 'none' ? 'block' : 'none'; }
            document.getElementsByClassName('act act1')[0].onclick =act1_fn||""
            document.getElementsByClassName('act act2')[0].onclick =act2_fn||function () { document.getElementsByClassName('act act2')[0].innerHTML = "by 空城里@www.ilzya.com"+act2_clickfn(true) }
        }
    }
    function act2_clickfn (click_) {
        let list = {
            0:"<br>自动滑块",
            1:"<br>自动滑块后自动下载",
            2:"<br>手动滑块",
            3:"<br>手动滑块后自动下载",
        }
        let ac = GM_getValue("act2_click") || 0
        if(click_){
            ac = ac + 1 > 3 ? 0 : ac + 1
            GM_setValue("act2_click",ac)
        }
        return list[ac]
    }




})();
//************************************************************************

/**
 *页面元素清理
 *classlist[i]写要删除的class
 */
function class_clear() {
    const classlist=[
        "noVipDownBox",//非VIP下载按钮
        "welfareMod",
        "equityBanner",
        "vipPurchase",
        "vipTitle",
        "videoItem",
        "rightBox",
        "openVipCom youthVipCom",
        "openProCom jmloading",
        "mian-nav-list",
        "search el-input el-input--prefix el-input--suffix btn2",
    ]
    let class_remove_time = 0
    let class_remove = setInterval(function () {
        class_remove_time = class_remove_time + 1
        for (let i in classlist) {
            let c = document.getElementsByClassName(classlist[i])
            if(c && c[0]){
                c[0].remove();
            }else if(class_remove_time>1000){
                clearInterval(class_remove)
                // console.log('停止清理界面');
            }
        }
    },200);
}

/**
 * 飞猫云下载显示提示
 */
function DownTipModel() {
    if (window.location.host == 'www.feimaoyun.com'&& window.location.pathname.split("/")[1] == "s") {
        let titleDesc = document.getElementsByClassName('titleDesc')
        for (let i in titleDesc) {
            titleDesc[i].innerHTML = `<span class="title">司马飞猫云，</span> <span class="desc">飞猫云早日倒闭，开始下载文件！</span>`
        }
        let DownTip = document.getElementsByClassName('VIPDownTipModel')
        for (let i in DownTip) {
            DownTip[i].onclick = function () {
                DownTip[i].style.display = 'none'
            }
        }
        DownTip[0].style.display = ''

    }
}

/**
 * 获取 blob
 * @param  {String} url 目标文件地址
 * @return {cb}
 */
function getBlob(url,cb) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
    xhr.onload = function() {
        if (xhr.status === 200) {
            cb(xhr.response);
            DownTipModel()
        }
    };
    xhr.send();
}

/**
 * 保存
 * @param  {Blob} blob
 * @param  {String} filename 想要保存的文件名称
 */
function saveAs(blob, filename) {
    if (window.navigator.msSaveOrOpenBlob) {
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement('a');
        var body = document.querySelector('body');

        link.href = window.URL.createObjectURL(blob);
        link.download = filename;

        // fix Firefox
        link.style.display = 'none';
        body.appendChild(link);

        link.click();
        body.removeChild(link);

        window.URL.revokeObjectURL(link.href);
    };
}

/**
 * 下载
 * @param  {String} url 目标文件地址
 * @param  {String} filename 想要保存的文件名称
 */
function downloadFile(url, filename) {
    getBlob(url, function(blob) {
        saveAs(blob, filename);
    });
};

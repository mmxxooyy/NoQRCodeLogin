// ==UserScript==
// @name         拒绝二维码登录
// @namespace    NoQRCodeLogin
// @version      2.2.5
// @description  新版12306、QQ、支付宝、淘宝、京东、百度云盘等网站默认使用账号密码登录，不出现二维码登录界面,可自定义设置在指定网站开启和关闭，有需求或问题请反馈。
// @author       Eva
// @match        *://kyfw.12306.cn/*
// @match        *://login.taobao.com/*
// @match        *://passport.jd.com/*
// @match        *://*.baidu.com/*
// @match        *://*.douban.com/*
// @match        *://passport.suning.com/*
// @match        *://*.zhihu.com/*
// @match        *://*.alipay.com/*
// @match        *://account.aliyun.com/*
// @match        *://*.qq.com/*
// @match        *://*.weiyun.com/*
// @match        *://exmail.qq.com/*
// @match        *://*.cloud.tencent.com/*
// @match        *://*.pay.weixin.qq.com/*
// @match        *://*.qcloud.com/*
// @match        *://mail.163.com/*
// @match        *://mail.126.com/*
// @match        *://www.iqiyi.com/*
// @match        *://www.acfun.cn/*
// @match        *://music.163.com/*
// @match        *://*.xiami.com/*
// @match        *://*.douyu.com/*
// @match        *://*.huya.com/*
// @match        *://*.smzdm.com/*
// @match        *://passport.58.com/*
// @match        *://passport.csdn.net/*
// @match        *://account.dianping.com/*
// @match        *://*.115.com/*
// @match        *://*.tianya.cn/*
// @match        *://*.dnspod.cn/*
// @match        *://www.qcc.com/*
// @match        *://mms.pinduoduo.com/*
// @match        *://*.tyrz.gd.gov.cn/*
// @match        *://*.baixing.com/*
// @match        *://*.sl56.com/*
// @match        *://*.passport.sangon.com/*
// @match        *://*.passport.21cnjy.com/*
// @grant        unsafeWindow
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM.deleteValue
// @grant        GM_registerMenuCommand
// @require      https://cdn.jsdelivr.net/npm/jquery@3.5.0/dist/jquery.min.js
// @run-at 		 document-end
// ==/UserScript==

(function () {
    'use strict';

    // 注册菜单
    GM_registerMenuCommand("拒绝二维码登录开关设置", startSettings);

    var settingData = [
        { 'name': '12306', 'url': 'kyfw.12306.cn', 'enabled': true },
        { 'name': '淘宝', 'url': 'login.taobao.com', 'enabled': true },
        { 'name': '京东', 'url': 'passport.jd.com', 'enabled': true },
        { 'name': '百度', 'url': 'baidu.com', 'enabled': true },
        { 'name': '豆瓣', 'url': 'douban.com', 'enabled': true },
        { 'name': '苏宁易购', 'url': 'passport.suning.com', 'enabled': true },
        { 'name': '知乎', 'url': 'zhihu.com', 'enabled': true },
        { 'name': '支付宝', 'url': 'alipay.com', 'enabled': true },
        { 'name': '阿里云', 'url': 'account.aliyun.com', 'enabled': true },
        {
            'name': '腾讯QQ',
            'url': ['xui.ptlogin2.qq.com', 'ssl.xui.ptlogin2.qq.com', 'ui.ptlogin2.qq.com'],
            'enabled': true
        },
        {
            'name': '网易邮箱',
            'url': ['mail.163.com', 'mail.126.com'],
            'enabled': true
        },
        { 'name': '微云', 'url': 'weiyun.com', 'enabled': true },
        { 'name': '腾讯云', 'url': ['cloud.tencent.com', 'qcloud.com'], 'enabled': true },
        { 'name': '腾讯企业邮箱', 'url': 'exmail.qq.com', 'enabled': true },
        { 'name': '微信支付', 'url': 'pay.weixin.qq.com', 'enabled': true },
        { 'name': '爱奇艺', 'url': 'iqiyi.com', 'enabled': true },
        { 'name': 'AcFun', 'url': 'www.acfun.cn', 'enabled': true },
        { 'name': '网易云音乐', 'url': 'music.163.com', 'enabled': true },
        { 'name': '虾米音乐', 'url': 'xiami.com', 'enabled': true },
        { 'name': '斗鱼', 'url': 'douyu.com', 'enabled': true },
        { 'name': '虎牙直播', 'url': 'huya.com', 'enabled': true },
        { 'name': '什么值得买', 'url': 'smzdm.com', 'enabled': true },
        { 'name': '58同城', 'url': 'passport.58.com', 'enabled': true },
        { 'name': 'CSDN', 'url': 'passport.csdn.net', 'enabled': true },
        { 'name': '大众点评', 'url': 'account.dianping.com', 'enabled': true },
        { 'name': '115云', 'url': '115.com', 'enabled': true },
        { 'name': '天涯社区', 'url': 'tianya.cn', 'enabled': true },
        { 'name': 'DNSPod', 'url': 'dnspod.cn', 'enabled': true },
        { 'name': '企查查', 'url': 'www.qcc.com', 'enabled': true },
        { 'name': '拼多多商家', 'url': 'mms.pinduoduo.com', 'enabled': true },
        { 'name': '广东省统一身份认证平台', 'url': 'tyrz.gd.gov.cn', 'enabled': true },
        { 'name': '百姓网', 'url': 'baixing.com', 'enabled': true },
        { 'name': '升蓝物流', 'url': 'sl56.com', 'enabled': true },
        { 'name': '生工', 'url': 'passport.sangon.com', 'enabled': true },
        { 'name': '21世纪教育', 'url': 'passport.21cnjy.com', 'enabled': true }
    ];

    // 更新设置
    var storageData = getStorageData();
    if (storageData) {
        // 同步最新支持列表到本地存储的设置数据
        var needUpate = false;
        var missingData = [];
        $.each(settingData, function (i, item) {
            var matchCount = 0;
            $.each(storageData, function (r, data) {
                if (item.name == data.name) {
                    matchCount++;
                    if (item.url.toString() != data.url.toString()) {
                        console.log("变更数据", data.url, "为", item.url);
                        data.url = item.url;
                        needUpate = true;
                    }
                }
            });
            if (matchCount == 0) missingData.push(item)
        });
        if (missingData.length > 0) {
            console.log("更新数据", missingData);
            $.merge(storageData, missingData);
            needUpate = true;
        }
    } else {
        // 初始化浏览器本地存储的设置数据
        storageData = settingData;
        console.log("初始化数据", storageData);
        needUpate = true;
    }
    if (needUpate) setStorageData(storageData);

    function Settings() {
        this.mask = $('<div></div>');
        this.ele = $('<div></div>');
        this.init();
    }

    Settings.prototype = {
        init: function () {
            var self = this;
            self.mask.attr('id', 'settingLayerMask');
            self.ele.attr('id', 'settingLayer');
            self.addContent();
            self.addGlobalStyle();
            self.mask.append(self.ele);
            $('body').append(self.mask);
            self.mask.on('click', function () {
                self.hide();
            });
            self.ele.on('click', function (e) {
                self.bindClick(e);
                e.stopPropagation();
            });
            $(document).keyup(function (e) {
                if (e.key === "Escape") {
                    self.hide();
                }
            });
        },
        addContent: function () {
            // 各网站开关
            var itemList = $('<div id="itemlist"></div>');
            $.each(storageData, function (i, item) {
                var itemDiv = $('<section class="switch"></section>');
                var checkDiv = $('<div class="checkbox"></div>');
                if (item.enabled) checkDiv.addClass('on')
                itemDiv.append($('<span></span>').text(item.name)).append(checkDiv.append($('<input type="checkbox" />').attr('name', item.name)).append($('<label class="switchLabel"></label>')));
                itemList.append(itemDiv);
            });
            // 按钮（反馈、保存等）
            var btnEle = $('<div id="btnEle"></div>');
            // Greasyfork 反馈按钮
            var feedbackGreasyforkEle = $('<span class="feedback"></span>').append($('<a target="_blank" href="https://greasyfork.org/zh-CN/scripts/37988-%E6%8B%92%E7%BB%9D%E4%BA%8C%E7%BB%B4%E7%A0%81%E7%99%BB%E5%BD%95">反馈greasyfork</a>'));
            // GitHub 反馈按钮
            var feedbackGitHubEle = $('<span class="feedback"></span>').append($('<a target="_blank" href="https://github.com/mmxxooyy/NoQRCodeLogin">反馈 GitHub</a>'));
            // 保存按钮
            var saveEle = $('<span id="noqrlogin-save" title="save &amp; close">保存并关闭</span>');
            // 关闭按钮
            var closeEle = $('<span id="noqrlogin-close" title="close 关闭"></span>');
            this.ele.append(itemList).append(btnEle.append($('<div class="btnEleLayer"></div>').append(feedbackGreasyforkEle).append(feedbackGitHubEle).append(saveEle))).append(closeEle);
        },
        show: function () {
            var self = this;
            setTimeout(function () {
                self.mask.css('display', 'flex');
            }, 30);
        },
        hide: function () {
            var self = this;
            setTimeout(function () {
                self.mask.css('display', 'none');
            }, 100);
        },
        addGlobalStyle: function () {
            var globalStyle = ' /* 开关按钮 */\n' +
                '        #itemlist {\n' +
                '            display: flex;\n' +
                '            display: -webkit-flex;\n' +
                '            align-content: center;\n' +
                '            align-items: center;\n' +
                '            justify-content: center;\n' +
                '            flex-flow: row wrap;\n' +
                '        }\n' +
                '\n' +
                '        section {\n' +
                '            float: left;\n' +
                '            width: 200px;\n' +
                '            padding: 6px 20px;\n' +
                '        }\n' +
                '\n' +
                '        .switch span {\n' +
                '            height: 30px;\n' +
                '            line-height: 30px;\n' +
                '            font-size: 20px;\n' +
                '            vertical-align: top;\n' +
                '        }\n' +
                '\n' +
                '        .switch .checkbox {\n' +
                '            float: right;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox {\n' +
                '            position: relative;\n' +
                '            display: inline-block;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox:after,\n' +
                '        .checkbox:before {\n' +
                '            -webkit-font-feature-settings: normal;\n' +
                '            -moz-font-feature-settings: normal;\n' +
                '            font-feature-settings: normal;\n' +
                '            -webkit-font-kerning: auto;\n' +
                '            font-kerning: auto;\n' +
                '            -moz-font-language-override: normal;\n' +
                '            font-language-override: normal;\n' +
                '            font-stretch: normal;\n' +
                '            font-style: normal;\n' +
                '            font-synthesis: weight style;\n' +
                '            font-variant: normal;\n' +
                '            font-weight: normal;\n' +
                '            text-rendering: auto;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox label {\n' +
                '            width: 80px;\n' +
                '            height: 30px;\n' +
                '            background: #ccc;\n' +
                '            position: relative;\n' +
                '            display: inline-block;\n' +
                '            border-radius: 46px;\n' +
                '            -webkit-transition: 0.4s;\n' +
                '            transition: 0.4s;\n' +
                '            cursor: pointer;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox label:after {\n' +
                '            content: \'\';\n' +
                '            position: absolute;\n' +
                '            width: 50px;\n' +
                '            height: 50px;\n' +
                '            border-radius: 100%;\n' +
                '            left: 0;\n' +
                '            top: -5px;\n' +
                '            z-index: 2;\n' +
                '            background: #fff;\n' +
                '            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n' +
                '            -webkit-transition: 0.4s;\n' +
                '            transition: 0.4s;\n' +
                '            cursor: pointer;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox input {\n' +
                '            display: none;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox.on label:after {\n' +
                '            left: 40px;\n' +
                '        }\n' +
                '\n' +
                '        .checkbox.on label {\n' +
                '            background: #4BD865;\n' +
                '        }\n' +
                '\n' +
                '        .switch .checkbox label {\n' +
                '            width: 70px;\n' +
                '        }\n' +
                '\n' +
                '        .switch .checkbox label:after {\n' +
                '            top: 0;\n' +
                '            width: 30px;\n' +
                '            height: 30px;\n' +
                '        }\n' +
                '\n' +
                '        /* 弹出层 */\n' +
                '        #settingLayerMask {\n' +
                '            display: none;\n' +
                '            justify-content: center;\n' +
                '            align-items: center;\n' +
                '            position: fixed;\n' +
                '            top: 0;\n' +
                '            right: 0;\n' +
                '            bottom: 0;\n' +
                '            left: 0;\n' +
                '            background-color: rgba(0, 0, 0, .5);\n' +
                '            z-index: 200000000;\n' +
                '            overflow: auto;\n' +
                '            font-family: arial, sans-serif;\n' +
                '            min-height: 100%;\n' +
                '            font-size: 16px;\n' +
                '            transition: 0.5s;\n' +
                '            opacity: 1;\n' +
                '            user-select: none;\n' +
                '            -moz-user-select: none;\n' +
                '            padding-bottom: 80px;\n' +
                '            box-sizing: border-box;\n' +
                '        }\n' +
                '\n' +
                '        #settingLayer {\n' +
                '            display: flex;\n' +
                '            flex-wrap: wrap;\n' +
                '            padding: 20px;\n' +
                '            margin: 0px 25px 50px 5px;\n' +
                '            background-color: #fff;\n' +
                '            border-radius: 4px;\n' +
                '            position: absolute;\n' +
                '            width: 60%;\n' +
                '            transition: 0.5s;\n' +
                '        }\n' +
                '\n' +
                '\n' +
                '        #btnEle {\n' +
                '            position: absolute;\n' +
                '            width: 100%;\n' +
                '            bottom: 4px;\n' +
                '            right: 0;\n' +
                '            background: #fff;\n' +
                '            border-radius: 4px;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle span {\n' +
                '            display: inline-block;\n' +
                '            background: #EFF4F8;\n' +
                '            border: 1px solid #3abdc1;\n' +
                '            margin: 12px auto 10px;\n' +
                '            color: #3abdc1;\n' +
                '            padding: 5px 10px;\n' +
                '            border-radius: 4px;\n' +
                '            cursor: pointer;\n' +
                '            outline: none;\n' +
                '            transition: 0.3s;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle a {\n' +
                '            color: #999;\n' +
                '            text-decoration: none;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle a:hover {\n' +
                '            text-decoration: underline;\n' +
                '            color: #ef8957;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle span.feedback:hover {\n' +
                '            border-color: #ef8957;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle span:not(.feedback):hover {\n' +
                '            background: #3ACBDD;\n' +
                '            color: #fff;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle .feedback {\n' +
                '            border-color: #aaa;\n' +
                '        }\n' +
                '\n' +
                '        #btnEle>div {\n' +
                '            width: 100%;\n' +
                '            margin-bottom: -100%;\n' +
                '            display: flex;\n' +
                '            justify-content: space-around;\n' +
                '            background: #EFF4F8;\n' +
                '            border-radius: 4px;\n' +
                '        }\n' +
                '\n' +
                '        /*close button*/\n' +
                '        #noqrlogin-close {\n' +
                '            background: white;\n' +
                '            color: #3ABDC1;\n' +
                '            line-height: 20px;\n' +
                '            text-align: center;\n' +
                '            height: 20px;\n' +
                '            width: 20px;\n' +
                '            font-size: 20px;\n' +
                '            padding: 10px;\n' +
                '            border: 3px solid #3ABDC1;\n' +
                '            border-radius: 50%;\n' +
                '            transition: .5s;\n' +
                '            top: -20px;\n' +
                '            right: -20px;\n' +
                '            position: absolute;\n' +
                '            cursor: pointer;\n' +
                '        }\n' +
                '\n' +
                '        #noqrlogin-close::before {\n' +
                '            content: \'\\2716\';\n' +
                '        }\n' +
                '\n' +
                '        #noqrlogin-close:hover {\n' +
                '            background: indianred;\n' +
                '            border-color: indianred;\n' +
                '            color: #fff;\n' +
                '        }';
            $("<style></style>").text(globalStyle).appendTo($("head"));
        },
        bindClick: function (e) {
            var self = this;
            var targetClass = e.target.className;
            var targetid = e.target.id;

            // 关闭按钮
            if (targetid == 'noqrlogin-close') {
                self.hide();
            }

            // 保存设置
            if (targetid == 'noqrlogin-save') {
                $('section.switch input').each(function (i, o) {
                    $.each(storageData, function (j, d) {
                        if (d.name == o.name) d.enabled = $(o.closest('.checkbox')).hasClass('on')
                    })
                });
                //console.log(storageData);
                setStorageData(storageData);
                self.hide();
            }

            // 切换开关
            if (targetClass == 'switchLabel') {
                var switchEle = $(e.target).closest('.checkbox');
                if (switchEle.hasClass('on')) {
                    switchEle.removeClass('on');
                } else {
                    switchEle.addClass('on');
                }
            }
        }
    };

    function startSettings() {
        var settings = new Settings();
        settings.show();
    }


    // 处理业务
    $.each(storageData, function (r, data) {
        if ($.isArray(data.url)) {
            $.each(data.url, function (i, u) {
                check(u, data.enabled)
            });
        } else {
            check(data.url, data.enabled)
        }
    });

    function check(url, enabled) {
        if (matchURL(url) && enabled) {
            process(url);
            return false;
        }
    }

    function process(url) {
        console.log("网址匹配,可切换二维码登录：", url);
        switch (url) {
            // 12306
            case 'kyfw.12306.cn':
                var auto = setInterval(function () {
                    if ($('#J-login-code-loading').css('display') === 'none' && $('.login-hd-code').hasClass('active')) {
                        $('.login-hd-account a')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 淘宝
            case 'login.taobao.com':
                var auto = setInterval(function () {
                    if ($('#J_StaticForm').css('display') === 'none') {
                        $('#J_Quick2Static').click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 京东
            case 'passport.jd.com':
                var auto = setInterval(function () {
                    if ($('.login-box').css('display') === 'none') {
                        $('.login-tab-r').click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 百度
            case 'baidu.com':
                $('body').bind('DOMNodeInserted', function (e) {
                    var e_chilren = $(e.target).find('[id^=TANGRAM__PSP_][id$=__footerULoginBtn]');
                    if (e_chilren.length > 0) {
                        setTimeout(function () {
                            e_chilren.trigger("click");
                        }, 100);
                    }
                });
                break;
            // 豆瓣
            case 'douban.com':
                var auto = setInterval(function () {
                    if ($('.account-tab-phone').hasClass('on')) {
                        $('.account-tab-account')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 苏宁易购
            case 'passport.suning.com':
                var auto = setInterval(function () {
                    if ($('.pc-login').css('display') === 'none') {
                        $('.tab-item')[1].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 知乎
            case 'zhihu.com':
                $('body').bind('DOMNodeInserted', function (e) {
                    if ($(e.target).find('.Login-content').length > 0) {
                        var auto = setInterval(function () {
                            if ($('.SignFlow-tabs .SignFlow-tab').length > 1 && !$('.SignFlow-tabs .SignFlow-tab').filter(function () { return $(this).text() == "密码登录"; }).hasClass('SignFlow-tab--active')) {
                                $('.SignFlow-tabs .SignFlow-tab').filter(function () { return $(this).text() == "密码登录"; })[0].click();
                                clearInterval(auto);
                            }
                        }, 50);
                    }
                });
                break;
            // 支付宝
            case 'alipay.com':
                if (matchURL('excashier.alipay.com')) {
                    var auto = setInterval(function () {
                        if ($('#J_tip_qr').css('display') === 'block') {
                            setTimeout(function () {
                                $('a[seed="J_tip_qr-switchTipBtn"]')[0].click();
                            }, 100);
                            clearInterval(auto);
                        }
                    }, 50);
                } else {
                    var auto = setInterval(function () {
                        var changeTabs = $('#J-loginMethod-tabs li');
                        var qrCode = $('#J-qrcode');
                        var ssoLogin = $('#J-ssoLogin');
                        var loginForm = $('#J-login');
                        var loginFormMethod = $('#J-loginFormMethod');
                        var popbox = $('#J_popbox');
                        if (popbox.hasClass('stat-login')) {
                            var iframe = $('#J_loginIframe');
                            if (iframe) {
                                var contentWindow = iframe[0].contentWindow;
                                if (contentWindow) {
                                    var loginMethod = contentWindow.document.getElementById('J-loginFormMethod');
                                    if (loginMethod) {
                                        contentWindow.document.getElementById('J-qrcode-target').click();
                                        clearInterval(auto);
                                    }
                                }
                            }
                        }
                        if (changeTabs.length >= 2) {
                            changeTabs.each(function (index, element) {
                                var self = $(this);
                                if ((self.attr('data-status') === 'show_login') && (!self.hasClass("active"))) {
                                    loginFormMethod.val('');
                                    qrCode.addClass('fn-hide');
                                    if (window.light && window.light.page && window.light.page.products && window.light.page.products.barcode) {
                                        window.light.page.products.barcode.onready(function () {
                                            this.stop();
                                        });
                                    }
                                    if (ssoLogin.attr('data-hide') === 'false' && ssoLogin.attr('data-state') === 'finished') {
                                        ssoLogin.removeClass('fn-hide');
                                    } else {
                                        loginForm.removeClass('fn-hide');
                                    }
                                    self.addClass("active");
                                    self.siblings().removeClass('active');
                                    clearInterval(auto);
                                }
                            });
                        }
                    }, 50);
                }
                break;
            // 阿里云
            case 'account.aliyun.com':
                var auto = setInterval(function () {
                    if ($('.ability-tabs-item[data-spm-click$="locaid=qrcode"]').hasClass('active')) {
                        $('.ability-tabs-item[data-spm-click$="locaid=login"]')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                if ($('#alibaba-login-iframe').length > 0) {
                    var config = miniLoginEmbedder.config;
                    config.iframeUrl = config.iframeUrl.replace('passport.aliyun.com', 'passport.alibaba.com');
                    config.notLoadSsoView = '';
                    miniLoginEmbedder.init(config);
                    var timer = setInterval(function () {
                        if ($('#alibaba-login-iframe iframe').length > 1) {
                            $($('#alibaba-login-iframe iframe')[0]).width(0).height(0);
                            clearInterval(timer);
                        }
                    }, 50);
                }
                break;
            // 腾讯QQ
            case 'xui.ptlogin2.qq.com':
            case 'ssl.xui.ptlogin2.qq.com':
            case 'ui.ptlogin2.qq.com':
                var auto = setInterval(function () {
                    if ($('#qrlogin_img').attr('src')) {
                        $('#switcher_plogin')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 微云
            case 'weiyun.com':
                var auto = setInterval(function () {
                    if ($('.face').length == 1 && $('#bottom_qlogin').css('display') === 'block') {
                        $('#switcher_plogin')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 腾讯云
            case 'cloud.tencent.com':
            case 'qcloud.com':
                var timer = function () {
                    var auto = setInterval(function () {
                        if ($('.J-qcloginBox').css('display') === 'none') {
                            $('.J-btnSwitchLoginType[data-type="email"]')[0].click();
                            clearInterval(auto);
                        }
                    }, 50);
                }
                timer();
                $('body').bind('DOMNodeInserted', function (e) {
                    if ($(e.target).hasClass('J-commonLoginContent')) {
                        timer();
                    }
                });
                break;
            // 腾讯企业邮箱
            case 'exmail.qq.com':
                var auto = setInterval(function () {
                    if ($('.login_account_pwd_panel').css('display') === 'none') {
                        $('.js_show_pwd_panel')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 微信支付
            case 'pay.weixin.qq.com':
                var auto = setInterval(function () {
                    if ($('#IDSwitchWechatLogin').attr('class').includes('selected')) {
                        $('#IDSwitchAccountLogin')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 网易邮箱
            case 'mail.163.com':
            case 'mail.126.com':
                var auto = setInterval(function () {
                    if ($('#normalLoginTab').css('display') === 'none') {
                        $('#lbNormal')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 爱奇艺
            case 'iqiyi.com':
                $('body').bind('DOMNodeInserted', function (e) {
                    if ($(e.target).hasClass('login-frame-bottom')) {
                        var auto = setInterval(function () {
                            var loginFrame = $('.login-frame[data-loginele="codeLogin"]');
                            if (!loginFrame.hasClass('dn')) {
                                loginFrame.find('a[rseat="cmm_lgn"]')[0].click();
                                clearInterval(auto);
                            }
                        }, 50);
                    }
                });
                break;
            // AcFun
            case 'www.acfun.cn':
                var auto = setInterval(function () {
                    if (!$('#login').hasClass('login-account')) {
                        $('#login-switch').click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 网易云音乐
            case 'music.163.com':
                var process = function () {
                    var switchBtn = $('#otherbtn').find('a[data-action="switch"]');
                    if (switchBtn.length > 0) {
                        switchBtn[0].click();
                        $('#j-official-terms').prop("checked", true);
                    }
                }

                if ($('#login-qrcode').length > 0) {
                    var auto = setInterval(function () {
                        if ($('#otherbtn').length > 0) {
                            process();
                            clearInterval(auto);
                        }
                    }, 50);
                }

                $('body').bind('DOMNodeInserted', function (e) {
                    if ($(e.target).find('#login-qrcode').length > 0) {
                        if (!$('#login-qrcode').hasClass('f-hide')) {
                            process();
                        }
                    }
                });
                break;
            // 虾米音乐
            case 'xiami.com':
                $('.modal-wrapper').bind('DOMNodeInserted', function (e) {
                    var auto = setInterval(function () {
                        if ($('.modal').hasClass('opened') && !$('.login').hasClass('current')) {
                            $('.login')[0].click();
                            clearInterval(auto);
                        }
                    }, 50);
                });
                break;
            // 斗鱼
            case 'douyu.com':
                if ($('.scancode-login').length > 0 && $('.scancode-login').hasClass('status-scan')) {
                    setTimeout(function () {
                        console.log('switch qrcode click');
                        $(".scanicon-toLogin")[0].click();
                    }, 100);
                    $(".inputLoginBtn").on('click', function () {
                        var nickname = $('.loginbox-login-subtype').find('[data-subtype="login-by-nickname"]');
                        if (nickname && !nickname.hasClass('active')) {
                            setTimeout(function () {
                                console.log('switch nickname click');
                                nickname[0].click();
                            }, 100);
                        }
                    })
                }
                break;
            // 虎牙直播
            case 'huya.com':
                var auto = setInterval(function () {
                    if ($('.account').hasClass('UDBSdkLgn-none')) {
                        $("img[src$='qrweb.png']").click();
                        $("img[src$='webqr.png']").on('click', function () {
                            clearInterval(auto);
                        })
                    }
                }, 50);
                break;
            // 58 同城
            case 'passport.58.com':
                var auto = setInterval(function () {
                    if ($('.change_qrcode').attr('type_attr') === 'pclogin') {
                        $('.change_qrcode span')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 什么值得买
            case 'smzdm.com':
                var auto = setInterval(function () {
                    if ($('.login').css('display') === 'none') {
                        $('.qrcode-change')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // CSDN
            case 'passport.csdn.net':
                var auto = setInterval(function () {
                    if ($('.main-code').length > 0) {
                        $('.main-code').each(function () {
                            if (!$(this).hasClass('hide')) {
                                $('a:contains(账号密码登录)')[0].click();
                                clearInterval(auto);
                            }
                        })
                    }
                }, 50);
                break;
            // 大众点评
            case 'account.dianping.com':
                var auto = setInterval(function () {
                    if ($('.login-page').length > 0 && $('.qrcode-page').length > 0 && $('.login-page').css('display') === 'none') {
                        $('.qrcode-page').find('.icon-pc')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 115 云
            case '115.com':
                var auto = setInterval(function () {
                    if ($('.login-scene[lg_rel="login"]').css('display') === 'none') {
                        $('.login-scene').css('display', "none");
                        $('.login-scene[lg_rel="login"]').css('display', "block");
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 天涯社区
            case 'tianya.cn':
                var process = function () {
                    var auto = setInterval(function () {
                        if ($('#loginWin_content_wrapper').hasClass('loginWin-qrcode-login-wrapper')) {
                            $('.loginWin-tab .normal-login-tab')[0].click();
                            clearInterval(auto);
                        }
                    }, 50);
                }
                if ($('#loginWin_content_wrapper').length == 1) {
                    process();
                }
                $('#js_login').on('click', function () {
                    process();
                })
                break;
            // DNSPod
            case 'dnspod.cn':
                var auto = setInterval(function () {
                    if ($('a[href^="/login/email"]').length > 0 && !$('a[href^="/login/email"]').parent('.dp-login__tabitem').hasClass('is-active')) {
                        $('a[href^="/login/email"]')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
                break;
            // 企查查
            case 'www.qcc.com':
                var auto = setInterval(function () {
                    if ($('#normalLogin').length > 0 && !$('#normalLogin').hasClass('active')) {
                        $('#normalLogin')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 拼多多商家
            case 'mms.pinduoduo.com':
                var auto = setInterval(function () {
                    if ($('.password-section').length > 0 && $('.password-section').css('display') === 'none') {
                        $('.login-tab').find('.tab-item.last-item')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 广东省统一身份认证平台
            case 'tyrz.gd.gov.cn':
                var auto = setInterval(function () {
                    if ($('.qrcode').length > 0) {
                        $('a:contains(账号密码)')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 百姓网
            case 'baixing.com':
                var auto = setInterval(function () {
                    if ($('.login-window a[href="#appLogin"]').closest('li').hasClass('active')) {
                        $('.login-window a[href="#mobile"]')[0].click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 升蓝物流
            case 'sl56.com':
                var auto = setInterval(function () {
                    if ($('#password').css('display') === 'none') {
                        $('#btnPassword').click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 生工
            case 'passport.sangon.com':
                var auto = setInterval(function () {
                    if ($('.ant-tabs-nav-list .ant-tabs-tab').length > 1 && !$($('.ant-tabs-nav-list .ant-tabs-tab')[1]).hasClass('ant-tabs-tab-active')) {
                        $($('.ant-tabs-nav-list .ant-tabs-tab')[1]).click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
            // 21 世纪教育
            case 'passport.21cnjy.com':
                var auto = setInterval(function () {
                    if ($('.login-method__tab--wx').css('display') === 'none') {
                        $($('.login-method__tab--ac')[0]).click();
                        clearInterval(auto);
                    }
                }, 50);
                break;
        }
    }

    function getStorageData() {
        return GM_getValue('NoQRCodeLoginData');
    }

    function setStorageData(value) {
        return GM_setValue('NoQRCodeLoginData', value);
    }

    function deleteStorageData() {
        GM.deleteValue("NoQRCodeLoginData");
    }

    //判断网址
    function matchURL(x) {
        return window.location.href.indexOf(x) != -1;
    }
})();

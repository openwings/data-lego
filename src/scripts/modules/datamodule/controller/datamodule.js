!function () {
    var rapPath = 'http://rap.alibaba-inc.com/mock/52';
    var apiMap = [
        {
            pageTitle: '流量概况',
            children: [
                {
                    title: '淘宝店铺',
                    apis: [
                        {
                            path: '/=/view/shopflow/type/daily',
                            title: '按天、按小时折线图',
                            configs: {
                                // Here is a list for this data API supports how many types in UI
                                types: [
                                    {'bar': '柱状'},
                                    {'line': '线图'},
                                    {'table': '表格'}
                                ]
                            },
                            param: {
                                days: '2013-12-12..2013-12-12'
                            }
                        },
                        {
                            path: '/=/view/summarydata/~/~',
                            title: '日均表格对比',
                            configs: {
                                // Here is a list for this data API supports how many types in UI
                                types: [
                                    {'bar': '柱状'},
                                    {'line': '线图'},
                                    {'table': '表格'}
                                ]
                            },
                            param: {}
                        },
                        {
                            path: '/=/view/itemflow/type/top',
                            title: '最近7天被访问宝贝TOP10',
                            configs: {
                                // Here is a list for this data API supports how many types in UI
                                types: [
                                    {'bar': '柱状'},
                                    {'line': '线图'},
                                    {'table': '表格'}
                                ]
                            },
                            param: {
                                days: '2013-12-12..2013-12-12',
                                sort: 'uv'
                            }
                        },
                        {
                            path: '/=/view/visitorsrc/type/top',
                            title: '最近7天访客来源TOP10',
                            configs: {
                                // Here is a list for this data API supports how many types in UI
                                types: [
                                    {'bar': '柱状'},
                                    {'line': '线图'},
                                    {'table': '表格'}
                                ]
                            },
                            param: {
                                days: '2013-12-12..2013-12-12'
                            }
                        },
                        {
                            path: '/=/view/locflow/type/top',
                            title: '最近7天访客地区TOP10',
                            configs: {
                                // Here is a list for this data API supports how many types in UI
                                types: [
                                    {'bar': '柱状'},
                                    {'line': '线图'},
                                    {'table': '表格'}
                                ]
                            },
                            param: {
                                days: '2013-12-12..2013-12-12',
                                country: 4,
                                province: 0,
                                overview: 1
                            }
                        }
                    ]
                },
                {
                    title: '手机淘宝店铺',
                    apis: [
                        {
                            path: '/=/view/mobile/summarydata/~',
                            title: '今日、昨日、上周同期、前七日日均数据对比',
                            configs: {
                                // Here is a list for this data API supports how many types in UI
                                types: [
                                    {'bar': '柱状'},
                                    {'line': '线图'},
                                    {'table': '表格'}
                                ]
                            },
                            param: {}
                        },
                        {
                            path: '/=/view/mobile/shopflow/daily',
                            title: '按天、按小时折线图',
                            configs: {
                                // Here is a list for this data API supports how many types in UI
                                types: [
                                    {'bar': '柱状'},
                                    {'line': '线图'},
                                    {'table': '表格'}
                                ]
                            },
                            param: {
                                days: '2013-12-12..2013-12-12'
                            }
                        }
                    ]
                },
                {
                    title: '店铺基本信息',
                    apis: [
                        {
                            path: '/=/view/basicinfo/~/~',
                            title: '店铺基本信息',
                            configs: {
                                // Here is a list for this data API supports how many types in UI
                                types: [
                                    {'bar': '柱状'},
                                    {'line': '线图'},
                                    {'table': '表格'}
                                ]
                            },
                            param: {}
                        }
                    ]
                }
            ]
        }];
        /*
        $.each(apiMap, function (i, n) {
            console.warn(i, n);
            $.each(n.children, function (i2, n2) {
                $.each(n2.apis, function (i3, n3) {
                    //console.warn(n3.path);
                    $.getJSON(rapPath + n3.path + '?callback=?', $.param(n3.param), function (data) {
                        //console.warn(data, '   data in n3 with path:', n3.path);
                        n3.data = JSON.stringify(data.res);
                    });
                });
            })
        });
        */
        //setTimeout(function () {
            $('#JDataList').setTemplateURL('src/scripts/modules/datamodule/view/datalist.tpl', null, {runnable_functions: true, disallow_functions: false}).processTemplate({
                dataMap: apiMap
            });
            $('div.preview').tipsy({
                gravity: 'nw'
            })
        //}, 3000);
}();

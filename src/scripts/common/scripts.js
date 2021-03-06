APP.use(['jquery-2.0.3', 'jquery-1.8.2', 'jtemplates' ,'jquery.ui', 'jquery.ui.touch.punch', 'jquery.htmlClean', 'highcharts', 'Tipsy'], function () {
    $.getScript('src/plugins/bootstrap.min.js');
    var templatePath = 'src/scripts/modules/',
        rapPath = 'http://rap.alibaba-inc.com/mock/52';
    $( function () {
        $('div[data-modulename]').each( function (i, n) {
            console.warn(n, i);
            var m = $(n),
                name = m.data('modulename');
            m.setTemplateURL([templatePath, '/', name, '/view/', name, '.tpl'].join(''), null, {runnable_functions: true, disallow_functions: false}).processTemplate({});
        });
    })
    function supportstorage() {
        if (typeof window.localStorage=='object')
            return true;
        else
            return false;		
    }

    function handleSaveLayout() {
        var e = $(".demo").html();
        if (!stopsave && e != window.demoHtml) {
            stopsave++;
            window.demoHtml = e;
            saveLayout();
            stopsave--;
        }
    }

    var layouthistory; 
    function saveLayout(){
        var data = layouthistory;
        if (!data) {
            data={};
            data.count = 0;
            data.list = [];
        }
        if (data.list.length>data.count) {
            for (i=data.count;i<data.list.length;i++)
                data.list[i]=null;
        }
        data.list[data.count] = window.demoHtml;
        data.count++;
        if (supportstorage()) {
            try {
                localStorage.setItem("layoutdata",JSON.stringify(data));
            } catch (e) {
                console.warn('localstorage maybe full or throw a error of ', e);
            }
        }
        layouthistory = data;
        //console.log(data);
        /*$.ajax({  
            type: "POST",  
            url: "/build/saveLayout",  
            data: { layout: $('.demo').html() },  
            success: function(data) {
                //updateButtonsVisibility();
            }
        });*/
    }

    function downloadLayout(){
        
        $.ajax({  
            type: "POST",  
            url: "/build/downloadLayout",  
            data: { layout: $('#download-layout').html() },  
            success: function(data) { window.location.href = '/build/download'; }
        });
    }

    function downloadHtmlLayout(){
        $.ajax({  
            type: "POST",  
            url: "/build/downloadLayout",  
            data: { layout: $('#download-layout').html() },  
            success: function(data) { window.location.href = '/build/downloadHtml'; }
        });
    }

    function undoLayout() {
        var data = layouthistory;
        //console.log(data);
        if (data) {
            if (data.count<2) return false;
            window.demoHtml = data.list[data.count-2];
            data.count--;
            $('.demo').html(window.demoHtml);
            if (supportstorage()) {
                localStorage.setItem("layoutdata",JSON.stringify(data));
            }
            return true;
        }
        return false;
        /*$.ajax({  
            type: "POST",  
            url: "/build/getPreviousLayout",  
            data: { },  
            success: function(data) {
                undoOperation(data);
            }
        });*/
    }

    function redoLayout() {
        var data = layouthistory;
        if (data) {
            if (data.list[data.count]) {
                window.demoHtml = data.list[data.count];
                data.count++;
                $('.demo').html(window.demoHtml);
                if (supportstorage()) {
                    localStorage.setItem("layoutdata",JSON.stringify(data));
                }
                return true;
            }
        }
        return false;
        /*
        $.ajax({  
            type: "POST",  
            url: "/build/getPreviousLayout",  
            data: { },  
            success: function(data) {
                redoOperation(data);
            }
        });*/
    }

    function handleJsIds() {
        handleModalIds();
        handleAccordionIds();
        handleCarouselIds();
        handleTabsIds()
        //console.warn($('.demo'));
    }
    function handleAccordionIds() {
        var e = $(".demo #myAccordion");
        var t = randomNumber();
        var n = "accordion-" + t;
        var r;
        e.attr("id", n);
        e.find(".accordion-group").each(function(e, t) {
            r = "accordion-element-" + randomNumber();
            $(t).find(".accordion-toggle").each(function(e, t) {
                $(t).attr("data-parent", "#" + n);
                $(t).attr("href", "#" + r)
            });
            $(t).find(".accordion-body").each(function(e, t) {
                $(t).attr("id", r)
            })
        })
    }
    function handleCarouselIds() {
        var e = $(".demo #myCarousel");
        var t = randomNumber();
        var n = "carousel-" + t;
        e.attr("id", n);
        e.find(".carousel-indicators li").each(function(e, t) {
            $(t).attr("data-target", "#" + n)
        });
        e.find(".left").attr("href", "#" + n);
        e.find(".right").attr("href", "#" + n)
    }
    function handleModalIds() {
        var e = $(".demo #myModalLink");
        var t = randomNumber();
        var n = "modal-container-" + t;
        var r = "modal-" + t;
        e.attr("id", r);
        e.attr("href", "#" + n);
        e.next().attr("id", n)
    }
    function handleTabsIds() {
        var e = $(".demo #myTabs");
        var t = randomNumber();
        var n = "tabs-" + t;
        e.attr("id", n);
        e.find(".tab-pane").each(function(e, t) {
            var n = $(t).attr("id");
            var r = "panel-" + randomNumber();
            $(t).attr("id", r);
            $(t).parent().parent().find("a[href=#" + n + "]").attr("href", "#" + r)
        })
    }
    function randomNumber() {
        return randomFromInterval(1, 1e6)
    }
    function randomFromInterval(e, t) {
        return Math.floor(Math.random() * (t - e + 1) + e)
    }
    function gridSystemGenerator() {
        $(".lyrow .preview input").bind("keyup", function() {
            var e = 0;
            var t = "";
            var n = $(this).val().split(" ", 12);
            $.each(n, function(n, r) {
                e = e + parseInt(r);
                t += '<div class="span' + r + ' column"></div>'
            });
            if (e == 12) {
                $(this).parent().next().children().html(t);
                $(this).parent().prev().show()
            } else {
                $(this).parent().prev().hide()
            }
        })
    }
    function configurationElm() {
        $(".demo").delegate(".configuration > a", "click", function(e) {
            e.preventDefault();
            var t = $(this).parent().next().next().children();
            $(this).toggleClass("active");
            t.toggleClass($(this).attr("rel"))
        });
        $(".demo").delegate(".configuration .dropdown-menu a", "click", function(e) {
            e.preventDefault();
            var t = $(this).parent().parent(); //ul DOM
            var n = t.parent().parent().next().next().children(); //div.view DOM
            t.find("li").removeClass("active");
            $(this).parent().addClass("active");
            var r = "";
            t.find("a").each(function() {
                r += $(this).attr("rel") + " "
            });
            t.parent().removeClass("open");
            n.removeClass(r);
            n.addClass($(this).attr("rel"))
        })
        $(".demo").delegate(".configuration .render-list a", "click", function(e) {
            var me = $(this),
                renderType = me.attr('rel');
                viewContent = me.parents('div.box').find('div.view');
            console.warn(me, renderType, viewContent, '  clicked in render-list a');
            loadRenderor(renderType, viewContent);
        });
    }
    function removeElm() {
        $(".demo").delegate(".remove", "click", function(e) {
            e.preventDefault();
            $(this).parent().remove();
            if (!$(".demo .lyrow").length > 0) {
                clearDemo()
            }
        })
    }
   /**
    * @description load the basic renderor like line/column/pie/table and so on
    * @param {string} t type of renderor
    * @param {string} target render target
    * @param {Object} settings of renderor type
    * @returns {NULL}
    **/
    function loadRenderor (t, target, settings) {
        var settings = settings || {};
        var fullPath = templatePath + '/charts/modules/basic' + t + '.json';
        $.ajax({
            url: fullPath,
            async: false,
            //dataType: 'JSON',
            success: function (data) {
                target.highcharts($.extend(true, data, settings));
            }
        });
        $.get(fullPath, {}, function (d) {
            console.warn(d, '  in basicline.json');
        });
    }
    function clearDemo() {
        $(".demo").empty();
        layouthistory = null;
        if (supportstorage())
            localStorage.removeItem("layoutdata");
    }
    function removeMenuClasses() {
        $("#menu-layoutit li button").removeClass("active")
    }
    function changeStructure(e, t) {
        $("#download-layout ." + e).removeClass(e).addClass(t)
    }
    function cleanHtml(e) {
        $(e).parent().append($(e).children().html())
    }
    function downloadLayoutSrc() {
        var e = "";
        $("#download-layout").children().html($(".demo").html());
        var t = $("#download-layout").children();
        t.find(".preview, .configuration, .drag, .remove").remove();
        t.find(".lyrow").addClass("removeClean");
        t.find(".box-element").addClass("removeClean");
        t.find(".lyrow .lyrow .lyrow .lyrow .lyrow .removeClean").each(function() {
            cleanHtml(this)
        });
        t.find(".lyrow .lyrow .lyrow .lyrow .removeClean").each(function() {
            cleanHtml(this)
        });
        t.find(".lyrow .lyrow .lyrow .removeClean").each(function() {
            cleanHtml(this)
        });
        t.find(".lyrow .lyrow .removeClean").each(function() {
            cleanHtml(this)
        });
        t.find(".lyrow .removeClean").each(function() {
            cleanHtml(this)
        });
        t.find(".removeClean").each(function() {
            cleanHtml(this)
        });
        t.find(".removeClean").remove();
        $("#download-layout .column").removeClass("ui-sortable");
        $("#download-layout .row-fluid").removeClass("clearfix").children().removeClass("column");
        if ($("#download-layout .container").length > 0) {
            changeStructure("row-fluid", "row")
        }
        formatSrc = $.htmlClean($("#download-layout").html(), {
            format: true,
            allowedAttributes: [
                ["id"],
                ["class"],
                ["data-toggle"],
                ["data-target"],
                ["data-parent"],
                ["role"],
                ["data-dismiss"],
                ["aria-labelledby"],
                ["aria-hidden"],
                ["data-slide-to"],
                ["data-slide"]
            ]
        });
        $("#download-layout").html(formatSrc);
        $("#downloadModal textarea").empty();
        $("#downloadModal textarea").val(formatSrc)
    }

    var currentDocument = null;
    var timerSave = 1000;
    var stopsave = 0;
    var startdrag = 0;
    var demoHtml = $(".demo").html();
    var currenteditor = null;
    $(window).resize(function() {
        $("body").css("min-height", $(window).height() - 90);
        $(".demo").css("min-height", $(window).height() - 160)
    });

    function restoreData(){
        if (supportstorage()) {
            layouthistory = JSON.parse(localStorage.getItem("layoutdata"));
            if (!layouthistory) return false;
            window.demoHtml = layouthistory.list[layouthistory.count-1];
            if (window.demoHtml) $(".demo").html(window.demoHtml);
        }
    }

    function initContainer(){
        $(".demo, .demo .column").sortable({
            connectWith: ".column",
            opacity: .35,
            handle: ".drag",
            start: function(e,t) {
                console.warn(e, t, this);
                console.warn(t.item.find('div.view[data-apipath]').data('apipath'), t.item.find('div.view[data-apipath]').data('param'));
                // data api AJAX JSONP get data to stringify and insert to div.view
                if(t.item.find('div.view[data-apipath]').length == 1) {
                    var item = t.item.find('div.view[data-apipath]');
                    $.getJSON(rapPath + item.data('apipath') + '?callback=?', item.data('param'), function (data) {
                        console.warn(item.data('param'), '    param in property');
                        item.html(JSON.stringify(data));
                    });
                }
                // chart preview content wrapper
                if(t.item.find('div.view[data-chart]').length == 1) {
                    var chartItem = t.item.find('div.view[data-chart]');
                    /*
                    $.getScript(templatePath + 'charts/modules/' + chartItem.data('chart') + '.js?x=1', function () {
                        console.warn('    get script done: ',  chartItem);
                    });
                    */
                    console.warn(chartItem);
                    $.ajax({
                        url: templatePath + 'charts/modules/' + chartItem.data('chart') + '.json',
                        async: false,
                        //dataType: 'JSON',
                        success: function (data) {
                            var settings;
                            console.warn(data, ' async get json done: ',  chartItem);
                            // @TODO: validate data
                            // render charts to div.view
                            try {
                                settings = chartItem.data('settings');
                            }   catch (e) {
                                settings = {};
                            }
                            console.warn(settings, '   in drag');
                            chartItem.highcharts($.extend(true, data, settings));
                        }
                    });
                }
                if (!startdrag) stopsave++;
                startdrag = 1;
            },
            stop: function(e,t) {
                if(stopsave>0) stopsave--;
                startdrag = 0;
            }
        });
        configurationElm();
    }
    $(document).ready(function() {
        CKEDITOR.disableAutoInline = true;
        restoreData();
        var contenthandle = CKEDITOR.replace( 'contenteditor' ,{
            language: 'zh-cn',
            //contentsCss: ['src/css/bootstrap-combined.min.css'],
            allowedContent: true
        });
        $("body").css("min-height", $(window).height() - 90);
        $(".demo").css("min-height", $(window).height() - 160);
        $(".sidebar-nav .lyrow").draggable({
            connectToSortable: ".demo",
            helper: "clone",
            handle: ".drag",
            start: function(e,t) {
                if (!startdrag) stopsave++;
                startdrag = 1;
            },
            drag: function(e, t) {
                t.helper.width(400)
            },
            stop: function(e, t) {
                $(".demo .column").sortable({
                    opacity: .35,
                    connectWith: ".column",
                    start: function(e,t) {
                        if (!startdrag) stopsave++;
                        startdrag = 1;
                    },
                    stop: function(e,t) {
                        if(stopsave>0) stopsave--;
                        startdrag = 0;
                    }
                });
                if(stopsave>0) stopsave--;
                startdrag = 0;
            }
        });
        $(".sidebar-nav .box").draggable({
            connectToSortable: ".column",
            helper: "clone",
            handle: ".drag",
            start: function(e,t) {
                if (!startdrag) stopsave++;
                startdrag = 1;
            },
            drag: function(e, t) {
                t.helper.width(400)
            },
            stop: function() {
                handleJsIds();
                if(stopsave>0) stopsave--;
                startdrag = 0;
            }
        });
        initContainer();
        $('body.edit .demo').on("click","[data-target=#editorModal]",function(e) {
            e.preventDefault();
            currenteditor = $(this).parent().parent().find('.view');
            var eText = currenteditor.html();
            contenthandle.setData(eText);
        });
        $("#savecontent").click(function(e) {
            e.preventDefault();
            currenteditor.html(contenthandle.getData());
        });
        $("[data-target=#downloadModal]").click(function(e) {
            e.preventDefault();
            downloadLayoutSrc();
        });
        $("[data-target=#shareModal]").click(function(e) {
            e.preventDefault();
            handleSaveLayout();
        });
        $("#download").click(function() {
            downloadLayout();
            return false
        });
        $("#downloadhtml").click(function() {
            downloadHtmlLayout();
            return false
        });
        $("#edit").click(function() {
            $("body").removeClass("devpreview sourcepreview");
            $("body").addClass("edit");
            removeMenuClasses();
            $(this).addClass("active");
            return false
        });
        $("#clear").click(function(e) {
            e.preventDefault();
            clearDemo()
        });
        $("#devpreview").click(function() {
            $("body").removeClass("edit sourcepreview");
            $("body").addClass("devpreview");
            removeMenuClasses();
            $(this).addClass("active");
            return false
        });
        $("#sourcepreview").click(function() {
            $("body").removeClass("edit");
            $("body").addClass("devpreview sourcepreview");
            removeMenuClasses();
            $(this).addClass("active");
            return false
        });
        $("#fluidPage").click(function(e) {
            e.preventDefault();
            changeStructure("container", "container-fluid");
            $("#fixedPage").removeClass("active");
            $(this).addClass("active");
            downloadLayoutSrc()
        });
        $("#fixedPage").click(function(e) {
            e.preventDefault();
            changeStructure("container-fluid", "container");
            $("#fluidPage").removeClass("active");
            $(this).addClass("active");
            downloadLayoutSrc()
        });
        $(".nav-header").click(function() {
            $(".sidebar-nav .boxes, .sidebar-nav .rows").hide();
            $(this).next().slideDown()
        });
        $('#undo').click(function(){
            stopsave++;
            if (undoLayout()) initContainer();
            stopsave--;
        });
        $('#redo').click(function(){
            stopsave++;
            if (redoLayout()) initContainer();
            stopsave--;
        });
        removeElm();
        gridSystemGenerator();
        setInterval(function() {
            handleSaveLayout()
        }, timerSave)
    })
});




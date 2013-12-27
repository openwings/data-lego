!function () {
    var chartsList = [
        {"name": "Line charts",
        "list": [
            {"name": "Basic line",
            "settings": ""},
            {"name": "Ajax loaded data, clickable points",
            "settings": ""},
            {"name": "With data labels",
            "settings": ""},
            {"name": "Time series, zoomable",
            "settings": ""},
            {"name": "Spline with inverted axes",
            "settings": ""},
            {"name": "Spline with symbols",
            "settings": ""},
            {"name": "Spline with plot bands",
            "settings": ""},
            {"name": "Time data with irregular intervals",
            "settings": ""},
            {"name": "Logarithmic axis",
            "settings": ""}
        ]},
        {
            "name": "Area charts",
            "list": [
                {"name": "Basic area",
                "settings": ""},
                {"name": "Area with negative values",
                "settings": ""},
                {"name": "Stacked area",
                "settings": ""},
                {"name": "Percentage area",
                "settings": ""},
                {"name": "Area with missing points",
                "settings": ""},
                {"name": "Inverted axes",
                "settings": ""},
                {"name": "Area-spline",
                "settings": ""},
                {"name": "Area range",
                "settings": ""},
                {"name": "Area range and line",
                "settings": ""}
            ]
        },
        {
            "name": "Column and bar charts",
            "list": [
                {"name": "Basic bar",
                "settings": ""},
                {"name": "Stacked bar",
                "settings": ""},
                {"name": "Bar with negative stack",
                "settings": ""},
                {"name": "Basic column",
                "settings": ""},
                {"name": "Column with negative values",
                "settings": ""},
                {"name": "Stacked column",
                "settings": ""},
                {"name": "Stacked and grouped column",
                "settings": ""},
                {"name": "Stacked percentage column",
                "settings": ""},
                {"name": "Column with rotated labels",
                "settings": ""},
                {"name": "Column with drilldown",
                "settings": ""},
                {"name": "Data defined in a HTML table",
                "settings": ""},
                {"name": "Column range",
                "settings": ""}
            ]
        },
        {
            "name": "Pie charts",
            "list": [
                {"name": "Pie chart",
                "settings": ""},
                {"name": "Pie with gradient fill",
                "settings": ""},
                {"name": "Pie with legend",
                "settings": ""},
                {"name": "Donut chart",
                "settings": ""},
                {"name": "Semi circle donut",
                "settings": ""},
                {"name": "Pie with drilldown",
                "settings": ""}
            ]
        },
        {
            "name": "Scatter and bubble charts",
            "list": [
                {"name": "Scatter plot",
                "settings": ""},
                {"name": "Bubble chart",
                "settings": ""},
                {"name": "3D bubbles",
                "settings": ""}
            ]
        },
        {
            "name": "Dynamic charts",
            "list": [
                {"name": "Spline updating each second",
                "settings": ""},
                {"name": "Click to add a point",
                "settings": ""},
                {"name": "Master-detail chart",
                "settings": ""}
            ]
        },
        {
            "name": "Combinations",
            "list": [
                {"name": "Column, line and pie",
                "settings": ""},
                {"name": "Dual axes, line and column",
                "settings": ""},
                {"name": "Multiple axes",
                "settings": ""},
                {"name": "Scatter with regression line",
                "settings": ""}
            ]
        },
        {
            "name": "More chart types",
            "list": [
                {"name": "Angular gauge",
                "settings": ""},
                {"name": "Clock",
                "settings": ""},
                {"name": "Gauge with dual axes",
                "settings": ""},
                {"name": "VU meter",
                "settings": ""},
                {"name": "Polar chart",
                "settings": ""},
                {"name": "Spiderweb",
                "settings": ""},
                {"name": "Wind rose",
                "settings": ""},
                {"name": "Box plot",
                "settings": ""},
                {"name": "Error bar",
                "settings": ""},
                {"name": "Waterfall",
                "settings": ""},
                {"name": "Funnel chart",
                "settings": ""},
                {"name": "General drawing",
                "settings": ""}
            ]
        }
    ];
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
    //$.get('src/scripts/modules/charts/model/list.json', function (data) {
        $('#JChartsList').setTemplateURL('src/scripts/modules/charts/view/chartslist.tpl', null, {runnable_functions: true, disallow_functions: false}).processTemplate({
            chartsMap: chartsList
        });
        $('div.preview').tipsy({
            gravity: 'nw'
        })
    //});
}();

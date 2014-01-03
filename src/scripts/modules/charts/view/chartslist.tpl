{#foreach $T.chartsMap as chart}
<div class="nav-header"><i class="icon-ok-circle icon-gray"></i> {$T.chart.name}</div>
{#foreach $T.chart.list as list}
<div class="box box-element ui-draggable"> <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>删除</a> <span class="drag label"><i class="icon-move"></i>拖动</span>
    <span class="configuration">
        <button type="button" class="btn btn-mini" data-target="#editorModal" role="button" data-toggle="modal">编辑</button>
        <span class="btn-group"> <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#">对齐 <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li class="active"><a href="#" rel="">默认</a></li>
                <li class=""><a href="#" rel="text-left">靠左</a></li>
                <li class=""><a href="#" rel="text-center">居中</a></li>
                <li class=""><a href="#" rel="text-right">靠右</a></li>
            </ul>
        </span>
        <span class="btn-group"> <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#">标记 <span class="caret"></span></a>
            <ul class="dropdown-menu">
                <li class="active"><a href="#" rel="">默认</a></li>
                <li class=""><a href="#" rel="muted">禁用</a></li>
                <li class=""><a href="#" rel="text-warning">警告</a></li>
                <li class=""><a href="#" rel="text-error">错误</a></li>
                <li class=""><a href="#" rel="text-info">提示</a></li>
                <li class=""><a href="#" rel="text-success">成功</a></li>
            </ul>
        </span>
    </span>
    <div class="preview" style="width: 110px; height: 20px; overflow: hidden;" original-title="{$T.list.name}">{$T.list.name}</div>
    <div class="view {$T.list.pathName}" data-chart="{$T.list.pathName}" data-settings={JSON.stringify($T.list.settings).replace(/\s/g, '&nbsp;')}></div>
</div>
{#/for}
{#/for}

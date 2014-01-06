{#foreach $T.dataMap as page}
<div class="nav-header"><i class="icon-ok-circle icon-gray"></i> {$T.page.pageTitle}</div>
{#foreach $T.page.children as mod}
<div class="nav-header"><i class="icon-ok-circle icon-gray"></i> {$T.mod.title}</div>
{#foreach $T.mod.apis as api}
<div class="box box-element ui-draggable"> <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>删除</a> <span class="drag label"><i class="icon-move"></i>拖动</span>
    <span class="configuration">
        <button type="button" class="btn btn-mini" data-target="#editorModal" role="button" data-toggle="modal">编辑</button>
        <span class="btn-group"> <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#">类型 <span class="caret"></span></a>
            <ul class="dropdown-menu render-list">
                {#foreach $T.api.configs.types as conf}
                    {#foreach $T.conf as row}
                    <li class="{#if ($T.conf$key == 0)}active{#/if}"><a href="#" rel="{$T.row$key}">{$T.row}</a></li>
                    {#/for}
                {#/for}
            </ul>
        </span>
    </span>
    <div class="preview" style="width: 110px; height: 20px; overflow: hidden;" original-title="{$T.api.title}">{$T.api.title}</div>
    <div class="view" data-apipath="{$T.api.path}" data-param="{$.param($T.api.param)}">
    </div>
</div>
{#/for}
{#/for}
{#/for}

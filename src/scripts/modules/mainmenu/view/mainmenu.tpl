<div class="navbar navbar-inverse navbar-fixed-top">
    <div class="navbar-inner">
        <div class="container-fluid">
            <button data-target=".nav-collapse" data-toggle="collapse" class="btn btn-navbar" type="button"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
            <a class="brand" href="/"><img src="src/img/favicon.png">Transformer<span class="label">BETA</span></a>
            <div class="nav-collapse collapse">
                <ul class="nav" id="menu-layoutit">
                    <li class="divider-vertical"></li>
                    <li>
                        <div class="btn-group">
                            <a class="btn btn-primary" href="http://justjavac.com" target="_blank"><i class="icon-home icon-white"></i>首页</a>
                        </div>
                        <div class="btn-group" data-toggle="buttons-radio">
                            <button type="button" id="edit" class="btn btn-primary active"><i class="icon-edit icon-white"></i> 编辑</button>
                            <button type="button" class="btn btn-primary" id="devpreview"><i class="icon-eye-close icon-white"></i> 布局编辑</button>
                            <button type="button" class="btn btn-primary" id="sourcepreview"><i class="icon-eye-open icon-white"></i> 预览</button>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="btn btn-primary" data-target="#downloadModal" rel="/build/downloadModal" role="button" data-toggle="modal"><i class="icon-chevron-down icon-white"></i>下载</button>
                            <button class="btn btn-primary" href="/share/index" role="button" data-toggle="modal" data-target="#shareModal"><i class="icon-share icon-white"></i>保存</button>
                            <button class="btn btn-primary" href="#clear" id="clear"><i class="icon-trash icon-white"></i>清空</button>
                        </div>
                        <div class="btn-group">
                            <button class="btn btn-primary" href="#undo" id="undo" ><i class="icon-arrow-left icon-white"></i>撤销</button>
                            <button class="btn btn-primary" href="#redo" id="redo" ><i class="icon-arrow-right icon-white"></i>重做</button>
                        </div>
                    </li>
                </ul>
                <ul class="nav pull-right">
                    <li>
                        <div class="btn-group"></div>
                    </li>
                </ul>
            </div>
        <!--/.nav-collapse -->
        </div>
    </div>
</div>

<ul class="nav nav-list accordion-group">
    <li class="nav-header"><i class="icon-plus icon-white"></i> 交互组件 <span class="label label-important">NEW!</span>
        <div class="pull-right popover-info"><i class="icon-question-sign "></i>
        <div class="popover fade right">
            <div class="arrow"></div>
            <h3 class="popover-title">帮助</h3>
            <div class="popover-content">拖放组件到布局容器. 拖入后, 你可以配置显示样式. 如果有任何疑问可访问 <a target="_blank" href="http://twitter.github.io/bootstrap/javascript.html">JavaScript.</a></div>
        </div>
        </div>
    </li>
    <li style="display: none;" class="boxes mute" id="elmJS">
        <div class="box box-element ui-draggable"> <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>删除</a> <span class="drag label"><i class="icon-move"></i>拖动</span>
        <div class="preview">遮罩窗体</div>
        <div class="view"> 
            <!-- Button to trigger modal --> 
            <a id="myModalLink" href="#myModalContainer" role="button" class="btn" data-toggle="modal" contenteditable="true">触发遮罩窗体</a> 
            
            <!-- Modal -->
            <div id="myModalContainer" class="modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h3 id="myModalLabel" contenteditable="true">标题栏</h3>
            </div>
            <div class="modal-body">
                <p contenteditable="true">显示信息</p>
            </div>
            <div class="modal-footer">
                <button class="btn" data-dismiss="modal" aria-hidden="true" contenteditable="true">关闭</button>
                <button class="btn btn-primary" contenteditable="true">保存设置</button>
            </div>
            </div>
        </div>
        </div>
        <div class="box box-element ui-draggable"> <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>删除</a> <span class="drag label"><i class="icon-move"></i>拖动</span> <span class="configuration"><button type="button" class="btn btn-mini" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <a class="btn btn-mini" href="#" rel="navbar-inverse">Inverse</a> 
        <!--a class="btn btn-mini" href="#" rel="navbar-fixed-top">Navbar fixed top</a--> 
        </span>
        <div class="preview">导航栏</div>
        <div class="view">
            <div class="navbar">
            <div class="navbar-inner">
                <div class="container-fluid"> <a data-target=".navbar-responsive-collapse" data-toggle="collapse" class="btn btn-navbar"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </a> <a href="#" class="brand" contenteditable="true">网站名</a>
                <div class="nav-collapse collapse navbar-responsive-collapse">
                    <ul class="nav" contenteditable="true">
                    <li class="active"><a href="#">主页</a></li>
                    <li><a href="#">链接</a></li>
                    <li><a href="#">链接</a></li>
                    <li class="dropdown"> <a data-toggle="dropdown" class="dropdown-toggle" href="#">下拉菜单 <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                        <li><a href="#">下拉导航1</a></li>
                        <li><a href="#">下拉导航2</a></li>
                        <li><a href="#">其他</a></li>
                        <li class="divider"></li>
                        <li class="nav-header">标签</li>
                        <li><a href="#">链接1</a></li>
                        <li><a href="#">链接2</a></li>
                        </ul>
                    </li>
                    </ul>
                    <ul class="nav pull-right" contenteditable="true">
                    <li><a href="#">右边链接</a></li>
                    <li class="divider-vertical"></li>
                    <li class="dropdown"> <a data-toggle="dropdown" class="dropdown-toggle" href="#">下拉菜单 <b class="caret"></b></a>
                        <ul class="dropdown-menu">
                        <li><a href="#">下拉导航1</a></li>
                        <li><a href="#">下拉导航2</a></li>
                        <li><a href="#">其他</a></li>
                        <li class="divider"></li>
                        <li><a href="#">链接3</a></li>
                        </ul>
                    </li>
                    </ul>
                </div>
                <!-- /.nav-collapse --> 
                </div>
            </div>
            <!-- /navbar-inner --> 
            </div>
        </div>
        </div>
        <div class="box box-element ui-draggable"> <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>删除</a> <span class="drag label"><i class="icon-move"></i>拖动</span> <span class="configuration"><button type="button" class="btn btn-mini" data-target="#editorModal" role="button" data-toggle="modal">编辑</button> <span class="btn-group"> <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#">位置 <span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li class="active"><a href="#" rel="">默认</a></li>
            <li class=""><a href="#" rel="tabs-below">底部</a></li>
            <li class=""><a href="#" rel="tabs-left">靠左</a></li>
            <li class=""><a href="#" rel="tabs-right">靠右</a></li>
        </ul>
        </span> </span>
        <div class="preview">切换卡</div>
        <div class="view">
            <div class="tabbable" id="myTabs"> <!-- Only required for left/right tabs -->
            <ul class="nav nav-tabs">
                <li class="active"><a href="#tab1" data-toggle="tab" contenteditable="true">第一部分</a></li>
                <li><a href="#tab2" data-toggle="tab" contenteditable="true">第二部分</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="tab1" contenteditable="true">
                <p>第一部分内容.</p>
                </div>
                <div class="tab-pane" id="tab2" contenteditable="true">
                <p>第二部分内容.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="box box-element ui-draggable"> <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>删除</a> <span class="drag label"><i class="icon-move"></i>拖动</span> <span class="configuration"> <span class="btn-group"> <a class="btn btn-mini dropdown-toggle" data-toggle="dropdown" href="#">样式 <span class="caret"></span></a>
        <ul class="dropdown-menu">
            <li class="active"><a href="#" rel="">默认</a></li>
            <li class=""><a href="#" rel="alert-info">提示</a></li>
            <li class=""><a href="#" rel="alert-error">错误</a></li>
            <li class=""><a href="#" rel="alert-success">成功</a></li>
        </ul>
        </span> </span>
        <div class="preview">提示框</div>
        <div class="view">
            <div class="alert" contenteditable="true">
            <button type="button" class="close" data-dismiss="alert">×</button>
            <h4>提示!</h4>
            <strong>警告!</strong> 请注意你的个人隐私安全. </div>
        </div>
        </div>
        <div class="box box-element ui-draggable"> <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>删除</a> <span class="drag label"><i class="icon-move"></i>拖动</span>
        <span class="configuration"><button type="button" class="btn btn-mini" data-target="#editorModal" role="button" data-toggle="modal">编辑</button></span>
        <div class="preview">手风琴切换</div>
        <div class="view">
            <div class="accordion" id="myAccordion">
            <div class="accordion-group">
                <div class="accordion-heading"> <a class="accordion-toggle" data-toggle="collapse" data-parent="#myAccordion" href="#collapseOne" contenteditable="true"> 选项卡 #1 </a> </div>
                <div id="collapseOne" class="accordion-body collapse in">
                <div class="accordion-inner" contenteditable="true"> 功能块... </div>
                </div>
            </div>
            <div class="accordion-group">
                <div class="accordion-heading"> <a class="accordion-toggle" data-toggle="collapse" data-parent="#myAccordion" href="#collapseTwo" contenteditable="true"> 选项卡 #2 </a> </div>
                <div id="collapseTwo" class="accordion-body collapse">
                <div class="accordion-inner" contenteditable="true"> 功能块... </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div class="box box-element ui-draggable"> <a href="#close" class="remove label label-important"><i class="icon-remove icon-white"></i>删除</a> <span class="drag label"><i class="icon-move"></i>拖动</span>
        <span class="configuration"><button type="button" class="btn btn-mini" data-target="#editorModal" role="button" data-toggle="modal">编辑</button></span>
        <div class="preview">轮换图</div>
        <div class="view">
            <div class="carousel slide" id="myCarousel">
            <ol class="carousel-indicators">
                <li class="active" data-slide-to="0" data-target="#myCarousel"></li>
                <li data-slide-to="1" data-target="#myCarousel" class=""></li>
                <li data-slide-to="2" data-target="#myCarousel" class=""></li>
            </ol>
            <div class="carousel-inner">
                <div class="item active"> <img alt="" src="src/img/1.jpg">
                <div class="carousel-caption" contenteditable="true">
                    <h4>棒球</h4>
                    <p>棒球运动是一种以棒打球为主要特点，集体性、对抗性很强的球类运动项目，在美国、日本尤为盛行。</p>
                </div>
                </div>
                <div class="item"> <img alt="" src="src/img/2.jpg">
                <div class="carousel-caption" contenteditable="true">
                    <h4>冲浪</h4>
                    <p>冲浪是以海浪为动力，利用自身的高超技巧和平衡能力，搏击海浪的一项运动。运动员站立在冲浪板上，或利用腹板、跪板、充气的橡皮垫、划艇、皮艇等驾驭海浪的一项水上运动。</p>
                </div>
                </div>
                <div class="item"> <img alt="" src="src/img/3.jpg">
                <div class="carousel-caption" contenteditable="true">
                    <h4>自行车</h4>
                    <p>以自行车为工具比赛骑行速度的体育运动。1896年第一届奥林匹克运动会上被列为正式比赛项目。环法赛为最著名的世界自行车锦标赛。</p>
                </div>
                </div>
            </div>
            <a data-slide="prev" href="#myCarousel" class="left carousel-control">‹</a> <a data-slide="next" href="#myCarousel" class="right carousel-control">›</a> </div>
        </div>
        </div>
    </li>
</ul>

data-lego
=========

play data with LEGO style

welcome be my partner
connect yuhao#taobao.com
======================================
change log:
+ `2014-01-03`
* 新的构建方式：将基本数据及设置独立出去为json文件，将数据及部分设置项用data在DOM的节点属性上存储，在拖动图形时使用同步获取json并extend在DOM的settings设置项及数据，最终渲染出div.view的内容。
* `TODO`：解决同步渲染的卡顿（`方案：`异步化，重构底层拖动的绑定代码为delegate事件代理）
* `TODO`：存储为HTML到localStorage之后丢失highcharts原本的事件及渲染内容，（`方案：`暂无）

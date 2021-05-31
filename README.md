# JavaFX-For-Dummies-zh（跟阿呆学 JavaFX）[↗️](https://www.angus-liu.cn/JavaFX-For-Dummies-zh/)

<p>
  <a href="./LICENSE">
    <img src="https://img.shields.io/github/license/Angus-Liu/JavaFX-For-Dummies-zh?style=flat-square"/>
  </a>
  <a href="https://www.angus-liu.cn/JavaFX-For-Dummies-zh/">
    <img src="https://img.shields.io/badge/Page-JavaFX--For--Dummies-informational?style=flat-square"/>
  </a>
  <a href="https://travis-ci.com/github/Angus-Liu/JavaFX-For-Dummies-zh">
    <img src="https://img.shields.io/travis/com/Angus-Liu/JavaFX-For-Dummies-zh/main?style=flat-square"/>
  </a>
</p>


<p>
  <a href="https://www.angus-liu.cn/JavaFX-For-Dummies-zh/">
    <img src="./assets/book-cover.jpg" alt="JavaFX For Dummies" width="290" align="right"/>
  </a>
</p>


## 目录

- [介绍](./docs/Introduction.md)
  - [关于本书](./docs/Introduction.md#关于本书)
  - [鲁莽的假设](./docs/Introduction.md#鲁莽的假设)
  - [本书组织架构](./docs/Introduction.md#本书组织架构)
    - [第一部分：开始使用 JavaFX](./docs/Introduction.md#第一部分开始使用-JavaFX)
    - [第二部分：JavaFX 控件](./docs/Introduction.md#第二部分JavaFX-控件)
    - [第三部分：加强你的场景设计](./docs/Introduction.md#第三部分加强你的场景设计)
    - [第四部分：让你的程序活起来](./docs/Introduction.md#第四部分让你的程序活起来)
    - [第五部分：“十”之部分](./docs/Introduction.md#第五部分十之部分)
  - [本书使用的图标](./docs/Introduction.md#本书使用的图标)
  - [本书之外](./docs/Introduction.md#本书之外)
  - [下一步该去哪儿](./docs/Introduction.md#下一步该去哪儿)
- [第一部分：开始使用 JavaFX](./docs/Part-1.md)
  - [第 1 章：你好，JavaFX！](./docs/Chapter-1.md)
    - [JavaFX 是什么？](./docs/Chapter-1.md#Javafx-是什么)
    - [仔细研究 JavaFX 的可能性](./docs/Chapter-1.md#仔细研究-JavaFX-的可能性)
    - [看看一个简单的 JavaFX 程序](./docs/Chapter-1.md#看看一个简单的-JavaFX-程序)
    - [下载和安装 JavaFX](./docs/Chapter-1.md#下载和安装-JavaFX)
      - [下载 JDK 8](./docs/Chapter-1.md#下载-JDK-8)
      - [安装 JDK 8](./docs/Chapter-1.md#安装-JDK-8)
      - [设置 Path](./docs/Chapter-1.md#设置-Path)
    - [使用记事本开发 Click Me 程序](./docs/Chapter-1.md#使用记事本开发-Click-Me-程序)
    - [使用 TextPad 开发 Click Me 程序](./docs/Chapter-1.md#使用-TextPad-开发-Click-Me-程序)
    - [使用 IDE 创建 Click Me 程序](./docs/Chapter-1.md#使用-IDE-创建-Click-Me-程序)
  - [第 2 章：深入 JavaFX 程序设计](./docs/Chapter-2.md)
    - [再看 Click Me 程序](./docs/Chapter-2.md#再看-Click-Me-程序)
    - [导入 JavaFX 包](./docs/Chapter-2.md#导入-JavaFX-包)
    - [继承 Application 类](./docs/Chapter-2.md#继承-Application-类)
    - [启动应用程序](./docs/Chapter-2.md#启动应用程序)
    - [重写 start 方法](./docs/Chapter-2.md#重写-start-方法)
    - [创建按钮](./docs/Chapter-2.md#创建按钮)
    - [处理活动事件](./docs/Chapter-2.md#处理活动事件)
    - [创建布局面板](./docs/Chapter-2.md#创建布局面板)
    - [场景搭建](./docs/Chapter-2.md#场景搭建)
    - [舞台设置](./docs/Chapter-2.md#舞台设置)
    - [检查 Click Counter 程序](./docs/Chapter-2.md#检查-Click-Counter-程序)
  - [第 3 章：事件处理](./docs/Chapter-3.md)
    - [调查事件](./docs/Chapter-3.md#调查事件)
    - [处理事件](./docs/Chapter-3.md#处理事件)
    - [实现 EventHandler 接口](./docs/Chapter-3.md#实现-EventHandler-接口)
    - [使用内部类处理事件](./docs/Chapter-3.md#使用内部类处理事件)
    - [使用匿名内部类处理事件](./docs/Chapter-3.md#使用匿名内部类处理事件)
    - [使用 Lambda 表达式处理事件](./docs/Chapter-3.md#使用-Lambda-表达式处理事件])
  - [第 4 章：设置窗口和场景布局](./docs/Chapter-4.md)
    - 调查 Stage 类
    - 调查 Scene 类
    - 切换场景
    - 创建对话框
    - 创建确认框
    - 退场，舞台右边
      - 创建关闭按钮
      - 处理 CloseRequest 事件
      - 把它们放在一起
  - [第 5 章：使用布局面板布置场景](./docs/Chapter-5.md)
    - 使用布局面板
      - JavaFX 布局面板介绍
      - 创建布局面板
      - 组合布局面板
    - 使用 HBox 布局
    - 间距问题
    - 通过 Margin 增加空间
    - 通过添加节点增加空间
    - 使用 VBox 布局
    - 在布局面板中对齐节点
    - 使节点宽度保持一致
    - 使用 Flow 布局
    - 使用 Border 布局
  - [第 6 章：获取用户输入](./docs/Chapter-6.md)
    - 使用文本框
    - 验证数值数据
    - 使用多选框
    - 使用单选按钮
    - 查看一个披萨订单应用程序
- [第二部分：JavaFX 控件](./docs/Part-2.md)
  - [第 7 章：JavaFX 节点层级介绍](./docs/Chapter-7.md)
    - JavaFX 包概述
    - Node 类
    - Parent 类
    - Region 类
    - Control 类
  - 第 8 章：从列表中选择
    - 使用选择框
      - 创建选择框
      - 设置默认值
      - 获取选中项
    - 使用 Observable List
    - 监听选择更改
    - 使用组合框
      - 创建组合框
      - 获取选中项
      - 处理组合框事件
    - 使用列表视图
      - 创建列表视图
      - 获取选中项
    - 使用树形视图
      - 构建 Tree
      - 创建一个 TreeView 控件
      - 获取选中的节点
      - 查看一个使用树形视图的完整程序
  - 第 9 章：表格使用
    - 为表格创建数据
    - 创建只读表格
      - 使用 TableColumn 类
      - 使用 TableView 类
    - 创建只读表格的程序
    - 创建一个可编辑的表格
      - 添加行
      - 删除行
      - 编辑单元格
    - 创建可编辑表格的程序
  - [第 10 章：创建菜单](./docs/Chapter-10.md)
    - [介绍用于创建菜单的类](./docs/Chapter-10.md#)
    - [创建基本菜单栏](./docs/Chapter-10.md#介绍用于创建菜单的类)
    - [创建菜单](./docs/Chapter-10.md#创建菜单)
    - [创建菜单项](./docs/Chapter-10.md#创建菜单项)
    - [使用分割线](./docs/Chapter-10.md#使用分割线)
    - [使用操作监听器](./docs/Chapter-10.md#使用操作监听器)
    - [创建可更改的菜单](./docs/Chapter-10.md#创建可更改的菜单)
    - [使用多选和单选菜单项](./docs/Chapter-10.md#使用多选和单选菜单项)
    - [创建子菜单](./docs/Chapter-10.md#创建子菜单)
    - [创建自定义菜单项](./docs/Chapter-10.md#创建自定义菜单项)
- [第三部分：加强你的场景设计](./docs/Part-3.md)
  - [第 11 章：更多与精确场景设计有关的布局面板](./docs/Chapter-11.md)
    - 使用 StackPane 布局
    - 使用 TilePane 布局
    - 使用 ScrollPane 布局
    - 使用 GridPane 布局
      - 为计划做草图 
      - 创建一个网格面板
      - 使用网格面板的约束条件
      - 查看网格面板示例
  - 第 12 章：使用 CSS 为你的程序换肤
    - 使用默认样式表
    - 为场景添加样式表
    - 使用内联样式
    - 创建一个样式表
      - 使用类型选择器
      - 创建自己的样式类名
      - 使用 ID 选择器
      - 使用多个选择器
    - 指定样式属性
      - 指定字体属性
      - 指定背景颜色
      - 指定边框属性
  - 第 13 章：图形绘制
    - Shape 类介绍
      - 创建线条
      - 创建矩形
      - 创建圆和椭圆形
      - 创建圆弧
      - 查看 ShapeMaker 程序
    - 花哨的填充
      - 绘制透明
      - 使用渐变填充
    - 平移，缩放和旋转
    - 绘制文本
    - 图形组合
  - 第 14 章：添加特殊效果
    - 特殊效果介绍
    - 添加阴影
    - 创建反射
    - 使事物模糊
    - Blooming 和 Glowing
    - 获取透视图
    - 效果组合
- 第四部分：让你的程序活起来
  - 第 15 章：使用属性创建动态场景
    - JavaFX 属性介绍
    - Java API 属性
    - JavaFX 属性类
    - 创建一个读/写属性
    - 创建一个只读属性
    - 更高效地创建属性
    - 使用属性事件
    - 属性绑定
  - 第 16 章：使用图像和媒体
    - 使用图像
      - 使用 Image 类
      - 使用 ImageView 类
      - 查看图像示例
    - 播放音频文件
    - 播放视频文件
  - 第 17 章：设置场景动画
    - JavaFX 动画介绍
    - 使用转换类
    - 看看一个转换例子
    - 转换组合
    - 用艰难的方式制作动画
    - 改进 Ball Bouncer
  - 第 18 章：针对触摸设备
    - 手势和触摸事件介绍
    - 手势监听
    - 查看一个示例程序
- 第五部分：“十”之部分
  - 第 19 章：10 个 JavaFX 控件
    - TitledPane
    - Accordion
    - ColorPicker
    - DatePicker
    - Hyperlink
    - ProgressIndicator 和 ProgressBar
    - Slider
    - ScrollBar
    - PasswordField
  - 第 20 章：构建 3D 世界的 10 个步骤
    - 步骤 1：添加透视相机
    - 步骤 2：添加圆柱
    - 步骤 3：创建材质
    - 步骤 4：移动圆柱
    - 步骤 5：添加盒子
    - 步骤 6：旋转盒子
    - 步骤 7：添加球体
    - 步骤 8：添加网格对象
    - 步骤 9：添加动画
    - 步骤 10：添加光源
    - 合体：完整的 3D 世界程序
- 索引
- [关于作者](./docs/About-the-Author.md)


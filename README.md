# ✨ Fixed_SideBar_List ✨

## 🍬 博客

- [Gitee Page](https://yuziikuko.gitee.io/articles/02.html)
- [稀土掘金](https://juejin.cn/post/7195477856024494136)
- [CSDN](https://blog.csdn.net/qq_41728543/article/details/128853209?spm=1001.2014.3001.5502)

## 🍮 简介

- JQuery 实现带粘性侧边栏的列表，滚动时自动切换菜单。（Desktop + Mobile ver.）
- [在线尝试](https://codesandbox.io/s/side-menu-collapsable-list-5d9bjb?file=/index.html)
- 效果预览：
  ![](./AnimateEffect.gif)

## 🍫 实现功能

#### 🍩 顶部导航栏

- 滚动时固定在页面最上方。

#### 🍩 侧边菜单栏

1. 一般状态下和右侧列表构成 flex 左右布局。
2. 点击菜单滚动到右侧列表相应的红色标题上方。
3. 滚动距离进入中间白色内容区时固定在侧边。
4. 滚动距离离开中间白色内容区时恢复一般状态。
5. 滚动距离进入内容区右侧列表红色标题时，自动切换到相应的菜单栏。

#### 🍩 右侧列表区

1. 鼠标经过问题时显示白色背景和阴影，问题展开时无此效果。
2. 点击问题时切换内容展开/折叠状态。
3. 对于同一个菜单下的问题，每次有且仅有一个被展开，即点击其他问题会折叠当前展开的问题。
4. 同一个菜单下最多显示 5 个问题，超出的问题隐藏并显示 “Show more”。
5. 点击 “Show more” 显示当前菜单下所有问题，点击 “Hide” 隐藏当前菜单下超出数量的问题。

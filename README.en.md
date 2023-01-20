# ✨ Fixed_SideBar_List ✨

## 🍮 Introduction

- Use JQuery to implement lists with sticky sidebars that automatically switch menus as you scroll. (Desktop+Mobile ver.)

- [Online Trial](https://codesandbox.io/s/side-menu-collapsable-list-5d9bjb?file=/index.html)

- Effect Preview:

![](./AnimateEffect.gif)

## 🍫 Implemented Function

#### 🍩 The Top Navigation Bar

- Fixed at the top of the page when scrolling.

#### 🍩 The Side Menu Bar

1. In general, form a flex layout with the list on the right.
2. When you click the menu, scroll to the list on the right above the appropriate red heading.
3. The sidebar is fixed to the side when you enter the white content area in the middle.
4. When you leave the white content area in the middle, the sidebar returns to normal.
5. When you enter the red title list on the right of the content area, you will automatically switch to the corresponding menu bar.

#### 🍩 The Right List Area

1. A white background and shadow is displayed when the mouse passes over the question, but not when the question is expanded.
2. Toggle the expand/collapse state of the content when clicking on the question.
3. For questions under the same menu, one and only one is expanded at a time, that is, clicking on other questions will collapse the currently expanded question.
4. A maximum of five questions can be displayed under the same menu. The "Show more" is displayed to hide the redundant questions.
5. Click "Show more" to display all the questions under the current menu, and click "Hide" to hide the extra questions under the current menu.

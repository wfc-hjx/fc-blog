---
outline: deep
---

# Markdown 写作指南

VitePress 内置了丰富的 Markdown 扩展，这篇指南帮你快速上手。

## 语法高亮

代码块支持语法高亮和行号：

```ts{2,4}
export default {
  data() {
    return {
      msg: 'Hello VitePress!'
    }
  }
}
```

## 信息框

::: info 信息
这是一个信息提示框。
:::

::: tip 提示
这是一个实用小技巧。
:::

::: warning 注意
这是一个警告信息。
:::

::: danger 危险
这表示需要特别注意的危险操作。
:::

## 折叠面板

::: details 点击展开
这里是隐藏的详细内容，适合放补充说明。
:::

## 数学公式

VitePress 支持 KaTeX：

$$
E = mc^2
$$

## Emoji :tada:

VitePress 支持 Emoji 短码：

:rocket: :100: :fire: :sparkles:

## 更多

查阅 [VitePress 文档](https://vitepress.dev/guide/markdown) 了解更多。

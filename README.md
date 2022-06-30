# Tinymce-Accordion-Plugin

It includes a simple documentation. First, I explain in English, followed by Japanese one.

## Intro
It is plugin for TinyMCE. It is inspired by [this repository](https://github.com/JacobPrice/tinymce-accordion-plugin).
The difference with above one, 
- It work on TinyMCE ver5
- Generate one accordion at a time
- Easy to edit styles

## Usage
To use, you have to add **accordion.js** and **accordion.min.css** or **accordion_fortiny.min.css**. 

**accordion.js** has a plugin config and a ProcessingManager function for running the accordion. ProcessingManager function should be called on the page you want to show the accordion.

**accordion.min.css** contains styles for the accordion. **accordion_fortiny.min.css** is the styles for display on TinyMCE. You have to set ``` content_css: "accordion_fortiny.min.css"``` in initilazation if you need it.

All style files are written in scss, so edit it directly.

## DEMO
**demo.html** is available for demonstration purposes.

**NOTE: To use, you have to add ./tinymce/tinymce.min.js .**

Click accordion button on TinyMCE, input header name, and press ok. then, it is reflected in the editor.

After that, push the below button to preview. Good to see how it works.

![Screenshot (57)](https://user-images.githubusercontent.com/47590204/176672088-17eea0f0-5845-4b9b-afe0-43b266637cf5.png)
# Tinymce-Accordion-Plugin 日本語

## はじめに
TinyMCEアコーディオンの拡張機能です。[このレポジトリ](https://github.com/JacobPrice/tinymce-accordion-plugin)を参考にしています。
上記のレポジトリとの違いは、
- TinyMCEのversion5でも動くこと
- 一つずつ作成する形式にしたこと
- CSSなどもいじれるようにしたこと
です。

## 使用法
accordion.jsを追加してプラグインの使用ができます。アコーディオンを動かすため、表示するページでProcessingManager関数をコールしてください。

accordion.min.cssがアコーディオンのスタイルを含んでいます。accordion_fortiny.min.cssはTinyMCE上でスタイルを反映させるためのものです。初期化時に呼び出してください。
それぞれソースファイルはscss記法のsassで記入してます。必要があればそちらを変更してください。

## デモ
デモ用のファイルとしてdemo.htmlを用意しています。
**注意:./tinymce/tinymce.min.jsを追加してから使用してください**。

accordionボタンをクリックするとヘッダー名を入力できるので適当に入力してokを押してください。すると、テキストエディタ内に反映されます。
その後下に配置されたボタンを押していただくとプレビューができます。どんな感じか確かめるのにちょうどよいと思います。

![Screenshot (57)](https://user-images.githubusercontent.com/47590204/176672088-17eea0f0-5845-4b9b-afe0-43b266637cf5.png)

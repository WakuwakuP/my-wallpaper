# my-wallpaper

Wallpaper Engine 向けの壁紙です。
Nature Remoのデータを取得して室温の表示をします。

## Installation

`.env.example`をコピーして`.env`を作成する。

`.env`にNature Remo APIのアクセストークンを書く

```sh
yarn
yarn build
```

`/build/index.html`内のpathを書き換える。

例

```git
- <link href="/static/css/main.2a12f36d.chunk.css" rel="stylesheet">
+ <link href="/static/css/main.2a12f36d.chunk.css" rel="stylesheet">

- <script src="/static/js/2.c259ff03.chunk.js"></script>
+ <script src="./static/js/2.c259ff03.chunk.js"></script>
```

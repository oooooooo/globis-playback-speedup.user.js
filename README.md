# GLOBIS Playback Speedup

[GLOBIS 学び放題](https://unlimited.globis.co.jp/) の講義動画を、自動で 3.00 倍速に設定する Usersacript です。

GLOBIS 学び放題は最大 2.0 倍速までしか選べません。また、セクションが変わると等速に戻ります。常に `playbackRate` の速度で再生します。

## インストール

1. Userscript Manager をブラウザに導入
   - [Tampermonkey](https://www.tampermonkey.net/)（Chrome / Edge / Firefox / Safari）
   - [Violentmonkey](https://violentmonkey.github.io/)（Chrome / Edge / Firefox）
2. [`globis-playback-speedup.user.js`](https://github.com/oooooooo/globis-playback-speedup.user.js/raw/refs/heads/main/globis-playback-speedup.user.js) をクリック
3. 内容を確認して「インストール」をクリックします。
4. GLOBIS 学び放題の講義ページを開くと、自動で 3 倍速になります。

## 設定

再生速度を変えたい場合は、スクリプト冒頭の定数を書き換えてください。

```js
const TARGET_RATE = 3.0; // 例: 2.5, 4.0 など
```

## 開発

```sh
npx @biomejs/biome check --write .
```

## ライセンス

[MIT License](LICENSE)

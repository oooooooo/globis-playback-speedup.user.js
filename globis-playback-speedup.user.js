// ==UserScript==
// @name         GLOBIS Playback Speedup
// @namespace    https://unlimited.globis.co.jp/
// @version      1.1
// @description  GLOBIS 学び放題の動画を自動で 3.00 倍速に設定
// @author       oooooooo
// @match        https://unlimited.globis.co.jp/*
// @match        https://player.vimeo.com/*
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function () {
    'use strict';

    const PLAYBACK_RATE = 3.0;

    function applySpeed(video) {
        if (video.playbackRate !== PLAYBACK_RATE) {
            video.playbackRate = PLAYBACK_RATE;
        }
    }

    function applyToAll() {
        document.querySelectorAll('video').forEach(applySpeed);
    }

    // 既存の video 要素に適用
    applyToAll();

    // video 要素が後から挿入された場合に対応
    const observer = new MutationObserver(() => applyToAll());
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });

    // video 要素の速度がリセットされた場合に対応
    document.addEventListener(
        'ratechange',
        (e) => {
            if (
                e.target.tagName === 'VIDEO' &&
                e.target.playbackRate !== PLAYBACK_RATE
            ) {
                e.target.playbackRate = PLAYBACK_RATE;
            }
        },
        true,
    );

    // play / loadedmetadata でも念のため再適用
    for (const type of ['play', 'playing', 'loadedmetadata', 'canplay']) {
        document.addEventListener(
            type,
            (e) => {
                if (e.target.tagName === 'VIDEO') {
                    applySpeed(e.target);
                }
            },
            true,
        );
    }

    // 保険: 1 秒ごとに確認（Vimeo プレイヤーが速度を戻すケース対策）
    setInterval(applyToAll, 1000);
})();

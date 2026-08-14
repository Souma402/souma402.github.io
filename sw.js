// キャッシュの名前
const CACHE_NAME = 'roomie-cache-v1';

// インストール時の処理
self.addEventListener('install', (event) => {
  console.log('[Service Worker] Installed');
  self.skipWaiting();
});

// アクティベート時の処理
self.addEventListener('activate', (event) => {
  console.log('[Service Worker] Activated');
  event.waitUntil(clients.claim());
});

// ネットワークリクエストの処理（基本はそのまま通す）
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request).catch(() => {
    return new Response('オフラインです。インターネット接続を確認してください。');
  }));
});

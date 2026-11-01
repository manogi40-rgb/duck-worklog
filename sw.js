/* 설치 가능 조건을 맞추기 위한 최소 서비스워커: 캐시하지 않고 항상 최신 화면을 받는다 */
self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',function(){});

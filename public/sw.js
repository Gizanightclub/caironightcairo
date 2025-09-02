// Service Worker محسن لأداء Night Club
const CACHE_NAME = 'nightclub-v1.2.0';
const STATIC_CACHE = 'nightclub-static-v1.2.0';
const DYNAMIC_CACHE = 'nightclub-dynamic-v1.2.0';
const IMAGE_CACHE = 'nightclub-images-v1.2.0';

// الملفات الحيوية للتخزين المؤقت
const CRITICAL_ASSETS = [
  '/',
  '/favicon.ico',
  '/logo.png',
  '/site.webmanifest',
  '/_next/static/css/',
  '/_next/static/chunks/pages/',
];

// الملفات التي يتم تخزينها مؤقتاً لفترة طويلة
const LONG_CACHE_ASSETS = [
  '/images/',
  '/videos/',
  '/favicon',
  '/android-chrome',
  '/apple-touch-icon',
  '/web-app-manifest',
];

// تثبيت Service Worker
self.addEventListener('install', (event) => {
  console.log('SW: Installing...');

  event.waitUntil(
    Promise.all([
      // تخزين الملفات الحيوية
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(CRITICAL_ASSETS);
      }),
      // تخزين الصور المحسنة
      caches.open(IMAGE_CACHE).then((cache) => {
        return cache.addAll([
          '/logo.png',
          '/favicon-32x32.png',
          '/favicon-96x96.png'
        ]);
      })
    ]).then(() => {
      console.log('SW: Installation complete');
      // فرض تفعيل Service Worker الجديد
      return self.skipWaiting();
    })
  );
});

// تفعيل Service Worker
self.addEventListener('activate', (event) => {
  console.log('SW: Activating...');

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          // حذف التخزين المؤقت القديم
          if (![CACHE_NAME, STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE].includes(cacheName)) {
            console.log('SW: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('SW: Activation complete');
      // السيطرة على جميع النوافذ فوراً
      return self.clients.claim();
    })
  );
});

// استراتيجية التخزين المؤقت المحسنة
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // تجاهل الطلبات غير HTTP/HTTPS
  if (!url.protocol.startsWith('http')) {
    return;
  }

  // استراتيجية مختلفة حسب نوع الملف
  if (request.destination === 'image') {
    // للصور: Cache First مع fallback
    event.respondWith(handleImageRequest(request));
  } else if (url.pathname.includes('/_next/static/')) {
    // للملفات الثابتة: Cache First (طويل المدى)
    event.respondWith(handleStaticAssets(request));
  } else if (url.pathname.includes('/api/')) {
    // للـ API: Network First مع timeout
    event.respondWith(handleApiRequest(request));
  } else if (request.mode === 'navigate') {
    // للصفحات: Network First مع Cache Fallback
    event.respondWith(handlePageRequest(request));
  } else {
    // باقي الملفات: Stale While Revalidate
    event.respondWith(handleOtherRequests(request));
  }
});

// معالجة طلبات الصور
async function handleImageRequest(request) {
  try {
    const cache = await caches.open(IMAGE_CACHE);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      // إرجاع الصورة من التخزين المؤقت وتحديثها في الخلفية
      updateImageInBackground(request, cache);
      return cachedResponse;
    }

    // جلب الصورة من الشبكة
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      // تخزين الصورة مؤقتاً
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('SW: Image fetch failed:', error);
    // إرجاع صورة احتياطية إذا فشل التحميل
    return new Response('Image not available', {
      status: 404,
      statusText: 'Image Not Found'
    });
  }
}

// معالجة الملفات الثابتة
async function handleStaticAssets(request) {
  try {
    const cache = await caches.open(STATIC_CACHE);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('SW: Static asset fetch failed:', error);
    return caches.match(request);
  }
}

// معالجة طلبات API
async function handleApiRequest(request) {
  try {
    // محاولة الشبكة أولاً مع timeout
    const networkResponse = await Promise.race([
      fetch(request),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('Network timeout')), 5000)
      )
    ]);

    return networkResponse;
  } catch (error) {
    console.error('SW: API request failed:', error);

    // محاولة العثور على استجابة مخزنة مؤقتاً
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // إرجاع استجابة خطأ مهذبة
    return new Response(JSON.stringify({
      error: 'Service unavailable',
      message: 'Please check your internet connection'
    }), {
      status: 503,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}

// معالجة طلبات الصفحات
async function handlePageRequest(request) {
  try {
    // محاولة الشبكة أولاً
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      // تخزين الصفحة مؤقتاً
      const cache = await caches.open(DYNAMIC_CACHE);
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    console.error('SW: Page fetch failed:', error);

    // محاولة العثور على الصفحة في التخزين المؤقت
    const cache = await caches.open(DYNAMIC_CACHE);
    const cachedResponse = await cache.match(request);

    if (cachedResponse) {
      return cachedResponse;
    }

    // إرجاع الصفحة الرئيسية كـ fallback
    return caches.match('/');
  }
}

// معالجة الطلبات الأخرى
async function handleOtherRequests(request) {
  const cache = await caches.open(DYNAMIC_CACHE);

  try {
    // محاولة الشبكة أولاً
    const networkResponse = await fetch(request);

    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  } catch (error) {
    // العودة للتخزين المؤقت إذا فشلت الشبكة
    const cachedResponse = await cache.match(request);
    return cachedResponse || new Response('Content not available', { status: 404 });
  }
}

// تحديث الصور في الخلفية
async function updateImageInBackground(request, cache) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
  } catch (error) {
    console.error('SW: Background image update failed:', error);
  }
}

// تنظيف التخزين المؤقت دورياً
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'CLEAN_CACHE') {
    cleanOldCache();
  }
});

async function cleanOldCache() {
  const cacheNames = await caches.keys();
  const imageCache = await caches.open(IMAGE_CACHE);
  const keys = await imageCache.keys();

  // حذف الملفات القديمة (أكثر من 30 يوم)
  const thirtyDaysAgo = Date.now() - (30 * 24 * 60 * 60 * 1000);

  for (const request of keys) {
    const response = await imageCache.match(request);
    const dateHeader = response.headers.get('date');

    if (dateHeader && new Date(dateHeader).getTime() < thirtyDaysAgo) {
      await imageCache.delete(request);
    }
  }

  console.log('SW: Cache cleanup completed');
}

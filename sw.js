self.addEventListener('install', (event) => {
    console.log('تم تثبيت التطبيق بنجاح');
});

self.addEventListener('fetch', (event) => {
    // الكود ده بيخلي التطبيق يكمل شغل عادي مع طلبات الإنترنت
});

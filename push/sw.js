// 事件监听

self.addEventListener('notificationclick', function (e) {
  console.log(e);
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('http://www.example.com');
    notification.close();
  }
})

self.addEventListener('push', function (e) {
  var options = {
    body: 'This notification was generated from a push!',
    icon: './image.png',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions: [{
        action: 'explore',
        title: 'Explore this new world',
        icon: './image.png'
      },
      {
        action: 'close',
        title: 'Close',
        icon: './image.png'
      },
    ]
  };
  e.waitUntil(
    self.registration.showNotification('Hello world!', options)
  );
});
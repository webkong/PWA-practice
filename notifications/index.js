if ('serviceWorker' in navigator) {
    // 注册sw
    navigator.serviceWorker.register('./sw.js').then(function (registration) {
        console.log('register success')
        initNotification();
    }).catch(function (err) {
        console.log('register error ')
    })
    // 获取权限
    Notification.requestPermission(function (status) {
        console.log('Notification permission status:', status);
    });

    function initNotification() {
        if (Notification.permission == 'granted') {
            navigator.serviceWorker.getRegistration().then(function (reg) {
                var options = {
                    body: 'Here is a notification body!', // 对通知添加描述
                    icon: './image.png', // 添加一个icon图像
                    vibrate: [100, 50, 100], // 指定通知的电话振动模式，手机将振动100ms，暂停50ms，再次振动100ms
                    data: {
                        dateOfArrival: Date.now(),
                        primaryKey: 1
                    }, // 给通知添加自定义数据，当监听到通知的时候，可以捕获到这些数据，方便使用。
                    actions: [{
                            action: 'explore',
                            title: 'Explore this new world',
                            icon: './image.png'
                        },
                        {
                            action: 'close',
                            title: 'Close notification',
                            icon: './image.png'
                        },
                    ]
                };
                reg.showNotification('Hello world!', options);
            });
        }
    }
}
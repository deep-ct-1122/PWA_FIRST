if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js', {scope: '.'})
        .then(function () {
            console.log('ServiceWorker Registered')
        })
        .catch(function (error) {
            console.log('SW Regitration Failed:', error)
        })
} else {
    console.log('SW not present in navigator')
}

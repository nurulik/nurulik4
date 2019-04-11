//proses installasi service worker, pada console akan ditampilkan "Service	worker	installing..."
self.addEventListener('install',	function(event)	{
		console.log('Service	worker	installing...');
		
//untuk melakukan skip waiting otomatis ketika terdapat perubahan pada service worker
self.skipWaiting();
});

//proses aktivasi service worker, pada console akan ditampilkan "Service	worker	activating..."
self.addEventListener('activate',	function(event)	{
		console.log('Service	worker	activating...');
});

//untuk mengambil data dari url tertentu
self.addEventListener('fetch',	function(event)	{
		console.log('Fetching:',	event.request.url);
});
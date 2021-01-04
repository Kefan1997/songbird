window.addEventListener('message', function(event) {
  console.log(`Получено ${event.data} из ${event.origin}`);
  localStorage.setItem('data', event.data);
});
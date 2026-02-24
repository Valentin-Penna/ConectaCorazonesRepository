// Comportamiento simple para arquitectura multipágina

document.addEventListener('DOMContentLoaded', () => {
	// Filtrar ONGs recomendadas según ?help-type=... en ongs-personalizadas.html
	const personalizedContainer = document.getElementById('personalized-list');
	if (personalizedContainer) {
		const params = new URLSearchParams(location.search);
		const personalizedContainer = document.getElementById('personalized-list');
	}

	// Acordeón FAQ
	document.querySelectorAll('.faq-question').forEach(q => {
		q.addEventListener('click', () => {
			const ans = q.nextElementSibling;
			q.classList.toggle('active');
			ans.classList.toggle('active');
		});
	});
});

// Mostrar alerta/contacto al acceder a una ONG
function contactOng(name) {
	alert('Conectando con ' + name + '. Pronto recibirás más información.');
}

// Toggle filtro ONGs/Voluntarios
function toggleFilter(btn, type) {
	btn.classList.toggle('active');
	console.log('Filtro ' + type + ' activado:', btn.classList.contains('active'));
}

// Manejar clic en logo SOS
function handleSOS(event) {
	event.preventDefault();
	window.open('https://salvavidas.com/blog/a-que-numero-llamar-en-caso-de-emergencia-en-espana-guia-completa-actualizada-2025/', '_blank');
}

window.contactOng = contactOng;
window.toggleFilter = toggleFilter;
window.handleSOS = handleSOS;

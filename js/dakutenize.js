const s = document.getElementById('s');
const b = document.getElementById('b');

b.addEventListener('click', () => {
	const org = s.value;
	const arr = [];
	for (const c of org.split(''))
		arr.push(c, '\u3099');
	s.value = arr.join('');
});

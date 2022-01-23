'use strict';

const input = document.getElementById('input');
const topping = document.forms.topping.topping;
const dakutenize = document.getElementById('dakutenize');
const output = document.getElementById('output');
const copy = document.getElementById('copy');

function dakutenizer()
{
	const dakutenchars = {
		'dakuten': '\u3099',	// 合成用の濁点
		'handaku': '\u309A',	// 合成用の半濁点
		'maru':    '\u20DD',	// 合成用の丸
		'shikaku': '\u20DE',	// 合成用の四角
	};
	let dakutenchar = dakutenchars[topping.value] || '\u3099';

	output.value = input.value.replace(/\S/g, '$&' + dakutenchar);
}

function copier()
{
	output.select();
	document.execCommand('copy');
}

dakutenize.addEventListener('click', dakutenizer);
copy.addEventListener('click', copier);

'use strict';

const input = document.getElementById('input');
const topping = document.forms.topping.topping;
const dakutenize = document.getElementById('dakutenize');
const output = document.getElementById('output');
const copy = document.getElementById('copy');
const twitter = document.getElementById('twitter');

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

function twitterer()
{
	const dakutenizeURI = 'https://kusaremkn.github.io/dakutenize/';
	if (output.value.length === 0)
		window.alert('濁゙点゙を゙付゙げ忘゙れ゙でい゙ま゙ぜん゙が？゙');
	window.open('https://twitter.com/intent/tweet/?text='
			+ encodeURIComponent(output.value)
			+ '&url=' + encodeURIComponent(dakutenizeURI));
}

dakutenize.addEventListener('click', dakutenizer);
copy.addEventListener('click', copier);
twitter.addEventListener('click', twitterer);

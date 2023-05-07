import $ from 'jquery';

const $openMessageEl = $('#open-message');
const $greetEl = $('#greet');

$openMessageEl.on('click', function () {
  $greetEl.removeClass('hidden');
});

import $ from 'jquery';

var $openMessageEl = $('#open-message');
var $greetEl = $('#greet');

$openMessageEl.on('click', function () {
  $greetEl.removeClass('hidden');
});

var query_selector_class = document.querySelector('.class')
var button_class = document.querySelector('.button_class')
button_class.addEventListener('click', function(){ 
  query_selector_class.textContent = "Works"
 })

 var query_selector_id_query = document.querySelector('#id_query')
 var button_id_query = document.querySelector('.button_id_query')
 button_id_query.addEventListener('click', function(){
  query_selector_id_query.textContent = "1 Works"
 })

 var query_selector_id = document.getElementById('id')
 var button_selector_id = document.querySelector('.button_id')
 button_selector_id.addEventListener('click', function(){
  query_selector_id.textContent = "2 Works"
 })
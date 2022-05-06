document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);
    console.log($target);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (document.querySelectorAll('.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button') || []).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) { // Escape key
      closeAllModals();
    }
  });
});


function add(one, two, three, four){
  var url = document.getElementById(one).value;
  var name = document.getElementById(two).value;
  var parent = document.getElementById(four);

  var bookmark = document.createElement('div');
  bookmark.classList.add('guest');
  var background = document.getElementById(three).value;
  bookmark.style.background=background;
  var link = document.createElement('a');
  link.href=url;
  parent.appendChild(bookmark);
  var textnode = document.createTextNode(name);
  link.appendChild(textnode);
  link.classList.add('linky');
  bookmark.appendChild(link);

}
function set(){
  var st = document.getElementById("settings");
  st.style.display="block";
  var bar = document.getElementById("bar");
  bar.style.display="none";
}
function back(){
  var st = document.getElementById("settings");
  st.style.display="none";
  var bar = document.getElementById("bar");
  bar.style.display="block";
}
function dark(){
  var bar = document.getElementById("bar");
  bar.style.background="#141C36";
  var wrn = document.getElementById("wrn");
  wrn.style.color="white";
}
function white(){
  var bar = document.getElementById("bar");
  var wrn = document.getElementById("wrn");
  wrn.style.color="black";
  bar.style.background="#EEEEEE";

}

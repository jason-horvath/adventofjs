let keys = document.querySelectorAll('.piano > svg > a');

[...keys].forEach((key, i) => {
  key.addEventListener('click', (e) => {
    e.preventDefault();
    let note = new Audio('./audio/key-' + (i + 1) + '.mp3');
    note.play();
  })
});
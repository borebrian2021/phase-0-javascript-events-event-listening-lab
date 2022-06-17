function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function() {
        clickAlert();
    });
}



function clickAlert() {
    alert('I was clicked!');
  }
  addingEventListener();
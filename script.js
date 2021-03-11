const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');
const memeImage = document.querySelector('#meme-image');
const memeInsert = document.querySelector('#meme-insert');

function setImage(input) {
  let reader;

  if (input.files && input.files[0]) {
    reader = new FileReader();

    reader.onload = (e) => {
      memeImage.setAttribute('src', e.target.result);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

memeInsert.addEventListener('change', () => {
  setImage(memeInsert);
});

function setText() {
  memeText.innerText = inputText.value;
}

function getText() {
  inputText.addEventListener('keyup', setText);
}

getText();

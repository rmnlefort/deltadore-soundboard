const container = document.querySelector('#app')
const buttonTemplate = document.querySelector('#button')
let buttonsContainer = document.createElement('div');

for (let obj of objects ) {
	let buttonContainer = buttonTemplate.content.cloneNode(true).querySelector('.js-button');
  let audio = buttonContainer.querySelector('audio');
  let audioSource = audio.querySelector('source');
  let button = buttonContainer.querySelector('button');
  button.textContent = obj.label;
  button.setAttribute('onclick', 'document.getElementById("'+obj.label.split(' ').join('_')+'").play()');
  audio.setAttribute('id', obj.label.split(' ').join('_'));
  audioSource.setAttribute('src', 'src/sound/'+obj.path);
  audio.append(audioSource);
  buttonContainer.append(audio);
  buttonContainer.append(button);
  buttonsContainer.append(buttonContainer);
}
app.append(buttonsContainer);
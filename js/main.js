// TO DO LIST********
//Function to place new List item with text, everytime I enter into input*****
function toDoList(){
  var toDoInput = document.getElementById('inputForm').value;
  var textInput = document.createTextNode(toDoInput);
  var newListItem = document.createElement('li');
  newListItem.className= 'noteColor';
  //TITLE INPUT*******
  var titleInput = document.getElementById('titleForm').value;
  //Make Text Node for titleInput
  var titleTextNode = document.createTextNode(titleInput);
  //Create h1 element
  var newH1 = document.createElement('h1');
  newH1.className = 'newH1';
  //Append titleTextNode into newH1
  newH1.appendChild(titleTextNode);
  //Append newh1 to newListItem**
  newListItem.appendChild(newH1);
  //WORDS INPUT*******
  newListItem.appendChild(textInput);
  document.getElementById('orderedList').appendChild(newListItem);
  // //PICTURES INPUT********
  // var newPicInput = document.getElementById('picForm').value;
  // var newPicTextNode = document.createTextNode(newPicInput);
  // var newPic = document.createElement('img');
  // newPic.setAttribute('src', 'newPicInput');

  //DELETE button
  var newButton= document.createElement('button');
  newButton.innerHTML= ('<img src="img/delete.png"></img>');
  newButton.setAttribute('id', 'button2');
  newButton.setAttribute('type', 'button');
  newButton.setAttribute('onclick', 'removeFromList()');
  newListItem.appendChild(newButton);

}

  //DELETE BUTTON FUNCTION***
  function removeFromList() {
    var removeList = document.getElementById('newListItem');
    removeList.removeChild(newH1);
  }





  // //Add Image*****
  // //Create Image using createElement***
  // var newImg = document.createElement('img');
  // //Add image/append image to newListItem***
  // newListItem.appendChild(newImg);
  // //Add source to newImg image with .setAttribute**
  // newImg.setAttribute('src', 'https://static4.comicvine.com/uploads/square_small/11112/111122896/5402108-goku_v2_by_saodvd-dac3ion.png')

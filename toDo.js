function addItemToList() {

    let li = document.createElement('li');
  
    let input = document.getElementById('myInput').value;
    let text = document.createTextNode(input);
    li.appendChild(text);
    li.setAttribute("class", "default");
    li.setAttribute("onclick", "javascript: this.classList.toggle('checked')");
  
    if (input === '') {
      alert('Are you sure you have nothing to do??')
    } else {
      document.getElementById('myList').appendChild(li);
    }
    document.getElementById('myInput').value = '';
  
    // let span = document.createElement("listBox");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
  
      }
    }
  
    let listItem = document.getElementsByClassName('default')
    for (let i = 0; i < listItem.length; i++) {
      close[i].onclick = function () {
        li = li.setAttribute("class", "checked");
      }
    }
  }
  
  ////////////////////////////////// CHECKED SYMBOL ///////////////////////////////////////////////////
  
  // let close = document.getElementsByClassName("close");
  // let i;
  // for (i = 0; i < close.length; i++) {
  //   close[i].onclick = function() {
  //     var div = this.parentElement;
  //     div.style.display = "none";
  //   }
  // }
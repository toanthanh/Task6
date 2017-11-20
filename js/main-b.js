'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
 <li>
 <figure>
 <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
 <figcaption>
 <h3>Title</h3>
 </figcaption>
 </figure>
 </li>
 */
// After the loop print the HTML into <ul> element using innerHTML.
const showImages = (fn) => {
  const ul = document.querySelector('ul');

  fetch('images.json').then((response) => {
    return response.json();
  }).then((json) => {
    let html = '';
    json.forEach((image) => {
      html +=
          `<li>
          <figure>
            <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
            <figcaption>
                <h3>${image.mediaTitle}</h3>
            </figcaption>
          </figure>
        </li>`;
    });
   
    html += 
        `<div id="myModal" class="modal">
              <span class="close">&times;</span>
              <img class="modal-content" id="img01">
        </div>`
    
    ul.innerHTML = html;
   
   fn();
  });
};

var addEvent = function() {
    anchors = document.getElementsByClassName('imageAnchor');
    
    console.log(anchors[0]);

    var modal = document.getElementById('myModal')
    var modalImg = document.getElementById('img01');

    for (var i = 0; i < anchors.length; i++) {
        var href = anchors[i].href;
        anchors[i].addEventListener('click', function(event) {
            modal.style.display = 'block';
            modalImg.src = href;
            event.preventDefault();
        });
    }

    var span = Array.prototype.slice.call(document.getElementsByClassName('close'))[0];

    console.log(span);

    span.onclick = function() {
        modal.style.display = 'none';
    }
}

showImages(addEvent);

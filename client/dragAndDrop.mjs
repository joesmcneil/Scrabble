
export function dragStartHandler(e) {
  const data = e.target.id;
  e.dataTransfer.setData('text/plain', data);
}

export function dragOverHandler(e) {
  e.preventDefault();
  console.log(e.relatedTarget);
}

export function dropHandler(e) {
  if ((e.target.classList.contains('dragElem') !== true) || (e.target.classList.contains('occupied'))) {
    const data = e.dataTransfer.getData('text/plain');
    const draggedElem = document.getElementById(data);
    e.target.insertAdjacentElement('afterbegin', draggedElem);
    e.target.classList.add('occupied');
  } else {
    console.log('no-drop');
  }
}

export function addDragDropListeners(tile) {
  const dropZones = document.querySelectorAll(tile);
  for (const dropZone of dropZones) {
    dropZone.addEventListener('dragover', dragOverHandler);
    dropZone.addEventListener('drop', dropHandler);
  }
}

export function addDragStartListener() {
  const divs = document.querySelectorAll('div');
  for (const div of divs) {
    div.addEventListener('dragstart', dragStartHandler);
  }
}

// Boakes, R. (2021). portsoc/ws_drag.
// Retrieved 5 April 2021, from https://github.com/portsoc/ws_drag/blob/master/examples/drag-drop-move/script.js

export function addEventListeners() {
  addDragStartListener();
  addDragDropListeners('.dropZoneTest');
  addDragDropListeners('.dragGrid');
}

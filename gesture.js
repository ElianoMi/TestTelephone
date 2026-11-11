function handleGesture(deltaX, deltaY) {
    let lastGesture = "";
    if (Math.abs(deltaX) > 25) lastGesture = (deltaX < 0) ? 'Left' : 'Right';
    if (Math.abs(deltaY) > 25) lastGesture += (deltaY < 0) ? 'Up' : 'Down';
    if (Math.abs(deltaX) <= 25 && Math.abs(deltaY) <= 25 ) lastGesture = "Tap";

    console.log(lastGesture);
    return lastGesture;
}

export function initGesture(element, callback) {
    let startX = 0;
    let startY = 0;
    let endX = 0;
    let endY = 0;
    
    element.addEventListener('pointerdown', function (event) {
        startX = event.screenX;
        startY = event.screenY;
    }, false);

    element.addEventListener('pointerup', function (event) {
        endX = event.screenX;
        endY = event.screenY;
        const gesture = handleGesture(endX-startX, endY-startY);
        if (callback) callback(gesture);
    }, false);
}
function rotate(angle, elem){
        if (angle >= 0) {
        var rotation = Math.PI * angle / 180;
    } else {
        var rotation = Math.PI * (360+angle) / 180;
    }
        var c = Math.cos(rotation),
        s = Math.sin(rotation);
       elem.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11="+c+",M12="+(-s)+",M21="+s+",M22="+c+",SizingMethod='auto expand')";
}



// $('.rbox').on('mouseup', function() {
	// rotate(45, this);
// })

// $('.rbox').rotateLeft([angle=90]);




$('.rbox').rotateLeft([angle=90]);1
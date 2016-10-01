define(function () {
    var Sprite = function (imgSrc, srcX, srcY, srcW, srcH) {
        this.type = "sprite";
        this.isActive = true;
        this.imgSrc = imgSrc;
        this.srcX = srcX;
        this.srcY = srcY;
        this.srcW = srcW;
        this.srcH = srcH;
    };

    return Sprite;
});

define(function (require) {
    var Axis = require("axis/Axis");
    var positionComponent = require("axis/components/Position");
    var sizeComponent = require("axis/components/Size");
    var spriteComponent = require("axis/components/Sprite");
    var velocityComponent = require("axis/components/Velocity");

    var background = function (game) {
        var entity = new Axis.Entity("background");

        var position = new positionComponent();
        position.x = 0;
        position.y = 0;

        var size = new sizeComponent();
        size.width = game.getActiveCamera().width;
        size.height = game.getActiveCamera().height;

        var sprite = new spriteComponent();
        sprite.imgSrc = "app/img/spritesheet.png";
        sprite.srcX = 0;
        sprite.srcY = 35;
        sprite.srcW = 256;
        sprite.srcH = 224;

        var velocity = new velocityComponent();
        velocity.x = .20;

        entity.loadComponents([position, size, sprite, velocity]);
        return entity;
    };

    return background;
});

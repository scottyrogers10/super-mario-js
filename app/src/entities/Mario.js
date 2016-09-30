define(function (require) {
    var Axis = require("axis/Axis");
    var positionComponent = require("axis/components/Position");
    var sizeComponent = require("axis/components/Size");
    var spriteComponent = require("axis/components/Sprite");
    var rigidBodyComponent = require("axis/components/RigidBody");
    var collidableComponent = require("axis/components/Collidable");
    var stateComponent = require("axis/components/State");

    var mario = function (game) {
        var entity = new Axis.Entity("mario");

        var position = new positionComponent();
        position.x = 130;
        position.y = game.getActiveCamera().height - 120;

        var size = new sizeComponent();
        size.width = 48;
        size.height = 48;

        var rigidBody = new rigidBodyComponent();
        rigidBody.width = 48;
        rigidBody.height = 48;

        var collidable = new collidableComponent();

        var sprite = new spriteComponent();
        sprite.imgSrc = "app/img/spritesheet.png";
        sprite.srcX = 0;
        sprite.srcY = 0;
        sprite.srcW = 16;
        sprite.srcH = 16;

        var state = new stateComponent();
        state.currentState = "standRight";
        state.states = {
            standRight: [position, size, rigidBody, collidable, sprite, state]
        };

        var startingState = state.states[state.currentState];

        entity.loadComponents(startingState);
        return entity;
    };

    return mario;

});

define(function (require) {
    var Axis = require("axis/Axis");
    var positionComponent = require("axis/components/Position");
    var sizeComponent = require("axis/components/Size");
    var spriteComponent = require("axis/components/Sprite");
    var spriteAnimationComponent = require("axis/components/SpriteAnimation");
    var rigidBodyComponent = require("axis/components/RigidBody");
    var collidableComponent = require("axis/components/Collidable");
    var velocityComponent = require("axis/components/Velocity");
    var keyboardInputComponent = require("axis/components/KeyboardInput");
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

        var spriteImgSrc = "app/img/spritesheet.png";

        var sprite = new spriteComponent();
        sprite.imgSrc = spriteImgSrc;
        sprite.srcX = 0;
        sprite.srcY = 0;
        sprite.srcW = 16;
        sprite.srcH = 16;

        var spriteAnimation = new spriteAnimationComponent();
        spriteAnimation.states = {
            standRight: {
                frames: [new spriteComponent(spriteImgSrc, 0, 0, 16, 16)],
                index: 0,
                speed: 5
            },
            walkRight: {
                frames: [new spriteComponent(spriteImgSrc, 16, 0, 16, 16), new spriteComponent(spriteImgSrc, 32, 0, 16, 16),
                         new spriteComponent(spriteImgSrc, 48, 0, 16, 16)],
                index: 0,
                speed: 5
            },
            walkLeft: {
                frames: [new spriteComponent(spriteImgSrc, 34, 18, 16, 16), new spriteComponent(spriteImgSrc, 18, 18, 16, 16),
                         new spriteComponent(spriteImgSrc, 2, 18, 16, 16)],
                index: 0,
                speed: 5
            }
        };

        var velocity = new velocityComponent();
        velocity.x = .35;
        velocity.y = .50;

        var keyboardInput = new keyboardInputComponent();

        var state = new stateComponent();
        state.currentState = "standRight";
        state.states = {
            standRight: [position, size, rigidBody, collidable, sprite, spriteAnimation, velocity, keyboardInput, state],
            walkRight: [position, size, rigidBody, collidable, sprite, spriteAnimation, velocity, keyboardInput, state],
            walkLeft: [position, size, rigidBody, collidable, sprite, spriteAnimation, velocity, keyboardInput, state]
        };

        var startingState = state.states[state.currentState];

        entity.loadComponents(startingState);
        return entity;
    };

    return mario;

});

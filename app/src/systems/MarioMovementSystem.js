define(function () {
    var MarioMovementSystem = function () {
        this.type = "marioMovement";
        this.game = null;
        this.isReady = false;
    };

    MarioMovementSystem.prototype.activate = function (game) {
        this.game = game;
        this.isReady = true;
    };

    MarioMovementSystem.prototype.update = function () {
        var rootEntity = this.game.world.rootEntity;
        var mario = rootEntity.getChildByType("mario");

        if (mario.hasActiveComponentsByTypes(["position", "keyboardInput", "velocity", "state"])) {
            var positionComponent = mario.getActiveComponentByType("position");
            var velocityComponent = mario.getActiveComponentByType("velocity");
            var stateComponent = mario.getActiveComponentByType("state");
            var keyboardInputComponent = mario.getActiveComponentByType("keyboardInput");
            var pressed = keyboardInputComponent.pressed;

            if (pressed[37]) {
                stateComponent.currentState = "walkLeft";
                positionComponent.x -= velocityComponent.x * this.game.dt;
            }

            if (pressed[39]) {
                stateComponent.currentState = "walkRight";
                positionComponent.x += velocityComponent.x * this.game.dt;
            }
        }
    };

    return MarioMovementSystem;
})

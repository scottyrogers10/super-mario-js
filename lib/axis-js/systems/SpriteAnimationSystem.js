define(function () {
    var SpriteAnimationSystem = function () {
        this.type = "spriteAnimation";
        this.game = null;
        this.isReady = false;
    };

    SpriteAnimationSystem.prototype.setSprites = function (entities) {
        for (var i = 0; i < entities.length; i++) {
            var entity = entities[i];
            var spriteComponent = entity.getActiveComponentByType("sprite");
            var spriteAnimationComponent = entity.getActiveComponentByType("spriteAnimation");
            var stateComponent = entity.getActiveComponentByType("state");

            var currentState = stateComponent.currentState;
            var spriteAnimationStates = spriteAnimationComponent.states;
            var animation = spriteAnimationStates[currentState];
            var animationSpeed = animation.speed || 2;

            if (this.game.dt % animationSpeed === 0) {
                var animationFrames = animation.frames;
                var sprite = animationFrames[animation.index];
                spriteComponent.imgSrc = sprite.imgSrc;
                spriteComponent.srcX = sprite.srcX;
                spriteComponent.srcY = sprite.srcY;
                spriteComponent.srcW = sprite.srcW;
                spriteComponent.srcH = sprite.srcH;

                animation.index++;

                if (animation.index > animationFrames.length - 1) {
                    animation.index = 0;
                }
            }
        }
    };

    SpriteAnimationSystem.prototype.activate = function (game) {
        this.game = game;
        this.isReady = true;
    };

    SpriteAnimationSystem.prototype.update = function () {
        var rootEntity = this.game.world.rootEntity;
        var spriteAnimationEntities = rootEntity.getChildrenWithActiveComponentsByTypes(["sprite", "spriteAnimation", "state"]);

        this.setSprites(spriteAnimationEntities);
    };

    return SpriteAnimationSystem;
});

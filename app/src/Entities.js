define(function (require) {
    var mario = require("entities/Mario");
    var background = require("entities/Background");

    var entities = {
        init: function (game) {
            var rootEntity = game.world.rootEntity;

            rootEntity.addChildEntity(background(game));
            rootEntity.addChildEntity(mario(game));
        }
    };

    return entities;
});

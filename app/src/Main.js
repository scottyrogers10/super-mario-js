define(function (require) {
    var Axis = require("axis/Axis");
    var entities = require("Entities");
    var spriteSheetSystem = require("axis/systems/SpriteSheetSystem");
    var keyboardInputSystem = require("axis/systems/KeyboardInputSystem");
    var renderSystem = require("axis/systems/RenderSystem");
    var stateSystem = require("axis/systems/StateSystem");

    var init = function () {
        var superMario = new Axis.Game();

        var mainCamera = new Axis.Camera("main-camera", 768, 672);
        mainCamera.isActive = true;

        superMario.addCamera(mainCamera);
        superMario.addSpriteSheet("app/img/spritesheet.png");
        superMario.addSystems([spriteSheetSystem,
                                 keyboardInputSystem,
                                 stateSystem,
                                 renderSystem]);

        entities.init(superMario);

        var currentGameState = "play";
        var gameState = {
            play: function () {
                superMario.play();
                currentGameState = "pause";
            },
            pause: function () {
                superMario.pause();
                currentGameState = "play";
            }
        };

        window.addEventListener("keydown", function (event) {
            if (event.keyCode === 13) {
                gameState[currentGameState]();
            }
        });

        window.superMario = superMario;
    };

    init();
});

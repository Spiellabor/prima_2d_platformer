
namespace Game {
  import fudge = FudgeCore;

  window.addEventListener("load", test);
  let root: fudge.Node;

  function test(): void {
    let canvas: HTMLCanvasElement = document.querySelector("canvas");
    fudge.RenderManager.initialize(true, false);
    root = new fudge.Node("Root");

    let cmpCamera: fudge.ComponentCamera = new fudge.ComponentCamera();
    cmpCamera.pivot.translateZ(5);
    cmpCamera.pivot.lookAt(fudge.Vector3.ZERO());
    cmpCamera.backgroundColor = fudge.Color.CSS("aliceblue");


    let material = new fudge.Material("test", fudge.ShaderUniColor, new fudge.CoatColored(new fudge.Color(1,0,1,1)));
    let material2 = new fudge.Material("test", fudge.ShaderUniColor, new fudge.CoatColored(new fudge.Color(0,1,1,1)));

    let player: Player = new Player("test");
    let plattform: Platform = new Platform("boden1");

    player.addComponent(new fudge.ComponentMaterial(material));
    plattform.addComponent(new fudge.ComponentMaterial(material2));

    plattform.cmpTransform.local.translateY(-0.8);

    root.appendChild(player);

    fudge.Loop.addEventListener(fudge.EVENT.LOOP_FRAME, update);
    fudge.Loop.start(fudge.LOOP_MODE.TIME_GAME, 10);
    root.appendChild(plattform);


    fudge.Debug.log(player.collideWith(plattform));
   
    
    let viewport: fudge.Viewport = new fudge.Viewport();
    viewport.initialize("Viewport", root, cmpCamera, canvas);
    viewport.draw();

    function update(_event: fudge.Eventƒ): void {
      viewport.draw();
    }
  }
}
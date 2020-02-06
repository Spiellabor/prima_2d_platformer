namespace Game {
  import fudge = FudgeCore;

  let root: fudge.Node;
  window.addEventListener("load", test);
  
  function test(): void {
    let img: HTMLImageElement = document.querySelector("img");
    let canvas: HTMLCanvasElement = document.querySelector("canvas");
    let crc2: CanvasRenderingContext2D = canvas.getContext("2d");
    let txtImage: fudge.TextureImage = new fudge.TextureImage();
    txtImage.image = img;
   
    fudge.RenderManager.initialize(true, false);
    root = new fudge.Node("Root");
  

    let levelGenerator = new LevelGenerator();
    let data = levelGenerator.getDataFromFile();
    levelGenerator.generateLevel();

    //let platform1 = new Platform()


    let cmpCamera: fudge.ComponentCamera = new fudge.ComponentCamera();
    cmpCamera.pivot.translateZ(5);
    cmpCamera.pivot.lookAt(fudge.Vector3.ZERO());
    cmpCamera.backgroundColor = fudge.Color.CSS("aliceblue");

    let viewport: fudge.Viewport = new fudge.Viewport();
    viewport.initialize("Viewport", root, cmpCamera, canvas);
    viewport.draw();

    fudge.Loop.addEventListener(fudge.EVENT.LOOP_FRAME, update);
    fudge.Loop.start(fudge.LOOP_MODE.TIME_GAME, 10);

    function update(_event: fudge.Eventƒ): void {
      // ƒ.Debug.log(frame);
      // root.showFrameNext();
      root.broadcastEvent(new CustomEvent("showNext"));
      viewport.draw();
      crc2.strokeRect(-1, -1, canvas.width / 2, canvas.height + 2);
      crc2.strokeRect(-1, canvas.height / 2, canvas.width + 2, canvas.height);
    }
  }
}
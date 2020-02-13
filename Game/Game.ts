namespace Game {

  import fudge = FudgeCore;

  window.onload = addEventlisteners;

  function addEventlisteners(): void {
    let restart: HTMLElement = document.getElementById("restart");
    let backToMenu: HTMLElement = document.getElementById("backToMenu");

    let safe: HTMLElement = document.getElementById("safe");
    let nextLevel: HTMLElement = document.getElementById("nextLevel");

    restart.addEventListener("click", reload);
    backToMenu.addEventListener("click", goBack);

    safe.addEventListener("click", safeGame);
    nextLevel.addEventListener("click", next);

    function reload(): void {
      location.reload();
    }

    function goBack(): void {
      window.close();
    }

    function safeGame(): void {
      var safeName: string = window.prompt("Enter your safe game name: ");
      alert("Your name is " + safeName);
    }

    function next(): void {

    }

  }
}
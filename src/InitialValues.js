let initialHTML = "<button>Welcome to CodePlay!</button>";
let initialCSS = `/* Animation property */
  button {
    animation: wiggle 2s linear infinite;
  }
  
  /* Keyframes */
  @keyframes wiggle {
    0%, 7% {
      transform: rotateZ(0);
    }
    15% {
      transform: rotateZ(-15deg);
    }
    20% {
      transform: rotateZ(10deg);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    30% {
      transform: rotateZ(6deg);
    }
    35% {
      transform: rotateZ(-4deg);
    }
    40%, 100% {
      transform: rotateZ(0);
    }
  }
  
  body {
    background: #000;
    color : white;
  }
  
  button {
    position: absolute;
    left: calc(50% - 3em);
    top: calc(50% - 2em);
    
    height: 4em;
    width: 15em;
    
    background: #444;
    background: linear-gradient(top, #555, #333);
    border: none;
    border-top: 3px solid white;
    border-radius: 0 0 0.2em 0.2em;
    color: #fff;
    font-family: Helvetica, Arial, Sans-serif;
    font-size: 1em;
    transform-origin: 50% 5em;
  }`;

let initialJS = "/* Welcome to CodePlay*/";

export { initialHTML, initialCSS, initialJS };
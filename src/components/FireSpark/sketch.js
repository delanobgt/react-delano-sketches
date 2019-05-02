export default function sketch(p) {
  let rotation = 0;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    if (props.rotation) {
      rotation = (props.rotation * Math.PI) / 180;
    }
  };

  p.draw = function() {
    p.clear();
    p.background(0, 200, 120);
    p.fill(0);
    p.push();
    p.rotateY(rotation);
    p.box(100);
    p.pop();
  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
}

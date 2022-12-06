import Two from "two.js";
import { useEffect, useRef } from "react";

export default function TwoWrapper() {
  let two = new Two({
    autostart: true,
    fullscreen: false,
  });
  let twoRef = useRef();
  useEffect(() => {
    two.appendTo(twoRef.current);
    two.update();
    let amount = 70;
    for (let j = 0; j < amount; j++) {
      let x = 0,
        y = 0;
      let speed = -100;
      let resolution = 6;
      let points = [];
      let vx = -(Math.random() - 0.5) * speed;
      let vy = -Math.random() * speed;
      for (let i = 0; i < resolution; i++) {
        x += vx;
        y += vy;
        points.push(new Two.Anchor(x, y));

        vy += speed / (resolution * 0.88);
      }
      let colors = ["#e3c04c", "#8a5277", "#FFF4FF", "#676D79"];
      let sparkline = two.makePath(points, true);
      sparkline.noFill();
      sparkline.linewidth = 3 * Math.random();
      sparkline.cap = "round";
      sparkline.stroke = colors[Math.floor(Math.random() * 4) % 4];
      two.add(sparkline);
    }

    two.scene.translation.set(two.width / 2, two.height / 2);
    two.bind("resize", function () {
      two.scene.translation.set(two.width / 2, two.height / 2);
    });

    let mouseX = 0.5;

    two.bind("update", function (frameCount) {
      let frames = 30 + (1 - mouseX) * 240;
      let thickness = 0.2;

      for (let i = 0; i < two.scene.children.length; i++) {
        let child = two.scene.children[i];
        let pct = i / two.scene.children.length;
        let offset = frames * pct;
        let ending = ((offset + frameCount) / frames) % 1;
        child.ending = ending;
        child.beginning = Math.max(ending - thickness * pct + thickness, 0);
        child.opacity = 1 - child.ending;
      }
    });
  }, []);

  return <div ref={twoRef}></div>;
}

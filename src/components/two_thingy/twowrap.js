import * as React from "react";
import Two from "two.js";
import { useEffect } from "react";

export default function TwoWrapper() {
  let two = new Two({
    autostart: true,
    fullscreen: false,
  });
  let twoRef = React.createRef();
  useEffect(() => {
    two.appendTo(twoRef.current);
    two.update();
    var amount = 70;

    for (var j = 0; j < amount; j++) {
      var x = 0,
        y = 0;
      var speed = -100;
      var resolution = 6;
      var points = [];
      var vx = -(Math.random() - 0.5) * speed;
      var vy = -Math.random() * speed;

      for (var i = 0; i < resolution; i++) {
        x += vx;
        y += vy;
        points.push(new Two.Anchor(x, y));

        vy += speed / (resolution * 0.88);
      }
      var colors = ["#e3c04c", "#8a5277", "#FFF4FF", "#676D79"];
      var sparkline = two.makePath(points, true);
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

    var mouseX = 0.5;

    two.bind("update", function (frameCount) {
      var frames = 30 + (1 - mouseX) * 240;
      var thickness = 0.2;

      for (var i = 0; i < two.scene.children.length; i++) {
        var child = two.scene.children[i];
        var pct = i / two.scene.children.length;
        var offset = frames * pct;
        var ending = ((offset + frameCount) / frames) % 1;
        child.ending = ending;
        child.beginning = Math.max(ending - thickness * pct + thickness, 0);
        child.opacity = 1 - child.ending;
      }
    });
  }, []);

  return <div ref={twoRef}></div>;
}

<template>
    <div class="min-h-screen  w-screen bg-gradient-to-tr from-base-100 via-black to-black">
        <div class="z-20 h-full w-full flex pt-20 sm:pt-0 justify-start items-center flex-col sm:flex-row">
            <div class="basis-1/4 sm:basis-1/2 flex flex-col justify-center items-center">
                <div class="h-1/2 w-1/2 flex justify-center items-center sm:items-start flex-col gap-4">
                    <h1 class="text-5xl sm:text-6xl lg:text-7xl tracking-widest font-mono font-bold text-primary ">
                        PROJECT
                    </h1>
                    <h1 class="text-5xl sm:text-6xl lg:text-7xl tracking-widest font-mono font-bold text-accent ">
                        CLOUD4
                    </h1>
                    <button class="btn btn-primary mt-1">Contact</button>
                </div>
            </div>
            <div class="mt-10 sm:mt-0 basis-1/2 w-full h-full flex items-center justify-center relative">

                <img class="h-2/3 z-20" src="/logopc4.png" />

                <div class="absolute z-10" id="yeee">

                </div>

            </div>





        </div>





        <!-- <div class="absolute z-10" id="yeee">

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    </div> -->





    </div>
</template>
<script>

import Two from 'two.js'

export default {

    async mounted() {
        let two = new Two({
            autostart: true,
            fullscreen: false,
            height: innerHeight / 2,
            width: innerWidth / 2
        });
        two.appendTo(document.getElementById("yeee"));
        two.update();
        let amount = 120;
        for (let j = 0; j < amount; j++) {
            let x = 0,
                y = 0;
            let speed = -100;
            let resolution = 10;
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



    }
}
</script>
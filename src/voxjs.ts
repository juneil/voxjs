import * as BABYLON from 'babylonjs';

export const init = function(canvas: HTMLCanvasElement): void {
    const engine = new BABYLON.Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true });
    const scene = new BABYLON.Scene(engine);
    new BABYLON.PointLight("Omni", new BABYLON.Vector3(0, 100, 100), scene);
    const camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    for (let i = 0; i<100; i++) {
        for (let j = 0; j<100; j++) {
            createBox(scene, i, j);
        }
    }

    engine.runRenderLoop(function () {
        if (scene) {
            scene.render();
        }
    });
    window.addEventListener("resize", function () {
        engine.resize();
    });
}

function createBox(scene: BABYLON.Scene, x: number, z: number) {
    const box = BABYLON.Mesh.CreateBox("Box2", 10.0, scene);
    box.position.x = x * 10;
    box.position.z = z * 10
}
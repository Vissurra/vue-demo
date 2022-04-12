<template>
  <div>
    <canvas id="three"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";


export default {
  name: "RotateCube",
  mounted() {
    this.initThree()
  },
  methods: {
    initThree() {
      const scene = new THREE.Scene()
      scene.background = new THREE.Color('#eee')

      const canvas = document.querySelector('#three')
      const renderer = new THREE.WebGLRenderer({canvas, antialias: true})

      const camera = new THREE.PerspectiveCamera(
          50,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
      )
      camera.position.z = 10

      const loader = new GLTFLoader();
      loader.load('/3d/scene.gltf', function (gltf) {
        let model = gltf.scene
        model.scale.set(0.3, 0.3, 0.3)
        scene.add(model);

        function animate() {
          renderer.render(scene, camera)
          requestAnimationFrame(animate)
          // model.rotation.x += 0.01;
          model.rotation.y += 0.01;
        }

        animate()

      }, undefined, function (error) {
        console.error(error);
      });

    },
  }
}
</script>

<style scoped>
#three {
  margin: auto;
  width: 1000px;
  height: 1000px;
}
</style>
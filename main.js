import './style.css'

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)
camera.position.setX(-3)

renderer.render(scene, camera)

// Lights

const pointLight = new THREE.PointLight(0xffffff)
pointLight.position.set(15, 15, 15)

const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

const controls = new OrbitControls(camera, renderer.domElement)

const spaceTexture = new THREE.TextureLoader().load('background.jpg')
scene.background = spaceTexture

// Moon
const moonTexture = new THREE.TextureLoader().load('earth2.jpg')
const normalTexture = new THREE.TextureLoader().load('normal4.jfif')

const earth = new THREE.Mesh(
  new THREE.SphereGeometry(13, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
)

scene.add(earth)

function animate() {
  requestAnimationFrame(animate)

  earth.rotation.y += 0.002

  controls.update()

  renderer.render(scene, camera)
}

animate()

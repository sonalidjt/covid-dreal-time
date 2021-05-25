import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
// imported everything above

//creating instances of required classes
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
const controls = new OrbitControls(camera, renderer.domElement)

//setting rendered properties and camera position
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setSize(window.innerWidth, window.innerHeight)
camera.position.setZ(30)
camera.position.setX(-3)

//finally render into the scene
renderer.render(scene, camera)

//setting a background
scene.background = new THREE.TextureLoader().load('background1.jpg')

//light up the scene
const pointLight = new THREE.PointLight(0xffffff)
//these really light up the scene
pointLight.position.set(15, 15, 15)
const ambientLight = new THREE.AmbientLight(0xffffff)
scene.add(pointLight, ambientLight)

//adding texture to earth
const earthTexture = new THREE.TextureLoader().load('earth2.jpg')
const texture = new THREE.TextureLoader().load('normal4.jfif')
//creating earth
const earth = new THREE.Mesh(
  new THREE.SphereGeometry(13, 32, 32),
  new THREE.MeshStandardMaterial({
    map: earthTexture,
    normalMap: texture,
  })
)

scene.add(earth)

function animate() {
  earth.rotation.y += 0.002
  requestAnimationFrame(animate)
  controls.update()
  //keep updating the scene
  renderer.render(scene, camera)
}

animate()

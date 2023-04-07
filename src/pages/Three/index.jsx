import React from 'react'
import * as THREE from 'three'

export default function Home() {
  // ======== 初始化场景 ========
  const scene = new THREE.Scene()

  // ======== 初始化渲染器 ========
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
  })
  renderer.useLegacyLights = true // 传统光照
  renderer.outputEncoding = THREE.sRGBEncoding // sRGB编码
  renderer.shadowMap.enabled = true // 开启阴影
  renderer.shadowMap.type = THREE.PCFSoftShadowMap // 阴影类型
  renderer.setSize(window.innerWidth, window.innerHeight) // 设置渲染器大小

  // ======== 加载模型 ========

    // ======== 初始化相机 ========
  // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  return (
    <div>Home...</div>
  )
}

import React, { Suspense, useRef } from 'react'
import { container, content, info, canvas, gamesContainer, gamesContent, games, title } from './BlogRoll.module.css'

import { Mesh } from 'three'
import { Canvas, useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import texture from '../../images/icon-texture.png'

import { Controller, Stack } from 'react-bootstrap-icons'

const StatusSlot = () => {
    return (
        <aside className={`${gamesContainer}`}>
            <div className={`${content} ${gamesContent}`}>
                <Scene />
                <h2>Richard's Adventure</h2>
                <div className={games}>
                    <div>
                        <h3 className={title}><Controller size={24}/> Accepted quests:</h3>
                        <p>Dark Souls III, Persona 5, God of War (2018)</p>
                    </div>
                    <div>
                        <h3 className={title}><Stack size={24} /> Upcoming quests:</h3>
                        <p>Metroid Dread, Dragon Quest XI</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default StatusSlot

const Scene = () => {
    return(
        <Canvas className={canvas}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} />
            <Suspense fallback={null}>
                <CardIcon />
            </Suspense>
        </Canvas>
    )
}

const CardIcon = () => {
    const meshMap = useLoader(TextureLoader, texture)

    const meshRef = useRef<Mesh>(null!)
    useFrame(({ clock }) => {
        if (!meshRef.current) return

        meshRef.current.rotation.y = clock.getElapsedTime()
    })

    return(
        <mesh ref={meshRef} scale={2}>
            <boxBufferGeometry attach="geometry" args={[ 0.2, 2.24, 1.4 ]} />
            <meshStandardMaterial attachArray="material" map={meshMap} />
            <meshStandardMaterial attachArray="material" color="#12283D" />
            <meshStandardMaterial attachArray="material" color="#12283D" />
            <meshStandardMaterial attachArray="material" color="#12283D" />
            <meshStandardMaterial attachArray="material" color="#12283D" />
            <meshStandardMaterial attachArray="material" color="#12283D" />
        </mesh>
    )
}
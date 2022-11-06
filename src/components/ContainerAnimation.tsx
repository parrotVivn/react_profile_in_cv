import { Box, IconButton, styled, Tooltip, useTheme } from '@mui/material';
import React, { useRef } from 'react';
import * as THREE from 'three'
import * as X from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
const ContainerAnimation: React.FC<React.HTMLProps<HTMLDivElement>> = ({
    ...others
}) => {

    const theme = useTheme();
    const refContainer = useRef<HTMLCanvasElement>();
    const scene = new THREE.Scene()
    React.useEffect(() => {
        const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, })
        let req: any = null;
        const dogAnimation = require("../animation/dog.glb")
        if (refContainer.current) {
            const loader = new GLTFLoader();
            loader.load(dogAnimation,
                function (gltf) {
                    gltf.scene.name = "animation-glb"; gltf.scene.receiveShadow = true;
                    gltf.scene.castShadow = true; scene.add(gltf.scene)
                },
                (xhr) => { console.log((xhr.loaded / xhr.total) * 100 + '% loaded') },
                (error) => { console.error(error) }
            )
            const rectLight = new THREE.RectAreaLight(0xffffff, 1, refContainer.current.clientWidth, refContainer.current.clientHeight);
            rectLight.position.set(5, 5, 5);
            rectLight.lookAt(1, 1, 1);
            scene.add(rectLight)
            const camera = new THREE.PerspectiveCamera(25, refContainer.current.clientWidth / refContainer.current.clientHeight, 2, 1000)
            const controls = new X.OrbitControls(camera, renderer.domElement)
            const target = new THREE.Vector3(-0.5, 1.2, 0)
            controls.autoRotate = true
            controls.target = target
            controls.enableDamping = true
            camera.position.z = 2;
            scene.add(camera)
            refContainer.current?.appendChild(renderer.domElement);
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(refContainer.current.clientWidth, refContainer.current.clientHeight)
            let frame = 0;
            const animate = () => {
                req = requestAnimationFrame(animate)
                frame = frame <= 100 ? frame + 1 : frame
                if (frame <= 100) {
                    const p = initialCameraPosition
                    const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20
                    camera.position.y = 10
                    camera.position.x =
                        p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
                    camera.position.z =
                        p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
                    camera.lookAt(target)
                }
                controls.update();
                renderer.render(scene, camera)
            }; animate();
        }
        return () => {
            cancelAnimationFrame(req)
            renderer.domElement.remove()
            renderer.dispose()
        }
    }, []);


    return (<React.Fragment>
        <Box sx={{
            position: "relative", width: theme.breakpoints.values.md, height: "50vh", [theme.breakpoints.down('lg')]: {
                width: "100vw", height: "65vh",
            },
        }}>
            <Box sx={{
                position: "absolute", bottom: "10%", right: "30%", zIndex: 999, [theme.breakpoints.down('lg')]: {
                    display: "none"
                },
            }}>
                <Tooltip title="Khi chuyển kích thước màn hình cần tải lại trang để hình 3d có kích thước tương thích!">
                    <IconButton>
                        <WarningAmberIcon />
                    </IconButton>
                </Tooltip>
            </Box>
            <Box ref={refContainer} sx={{
                width: theme.breakpoints.values.md, height: "50vh", [theme.breakpoints.down('lg')]: {
                    width: "100vw", height: "65vh",
                }, position: "absolute"
            }}>

            </Box>
        </Box>

    </React.Fragment >)

}
const initialCameraPosition = new THREE.Vector3(
    20 * Math.sin(0.2 * Math.PI),
    10,
    20 * Math.cos(0.2 * Math.PI)
)
function easeOutCirc(x: any) {
    return Math.sqrt(1 - Math.pow(x - 1, 4))
}
export default ContainerAnimation;

/*
 *  Filename: config.js
 *  Description: Configuration of the cylindrical display preview.
 *
 *  Version: 2024.11
 *  Author: Nico Reski
 *  GitHub: https://github.com/nicoversity
 */

// configuration related to the Three.js scene
const CylindricalDisplaySceneConfig = {
    canvas : {
        width: 1280,
        height: 720
    },
    camera : {
        fov: 45,
        near: 0.2,
        far: 100,
        pos: {
            x: 0,
            y: 1.9,
            z: 2
        },
        lookAt: {
            x: 0,
            y: 1.9,
            z: 0
        }
    },
    background: 0xdeebf7
};

// configuration related to the cylindrical display
const CylindricalDisplayConfig = {
    radius: 3,
    height: 1.851,
    aboveGround: 1,
    geometry: {
        radialSegments: 256,
        heightSegments: 32,
        openEnded: true,
        thetaStart: 0,
        thetaEnd: Math.PI * 2
    },
    model: {
        offset: 0.02,
        width: 0.25,
        radialSegments: 64,
        color: 0xf0f0f0
    }
};

export {
    CylindricalDisplaySceneConfig as CDSceneConfig,
    CylindricalDisplayConfig as CDConfig,
};
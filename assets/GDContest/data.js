/*
 *  Filename: data.js
 *  Description: Data (file references) to texture urls for the cylindrical display preview.
 *
 *  Version: 2024.11
 *  Author: Nico Reski
 *  GitHub: https://github.com/nicoversity
 */

// array containing objects with references to all texture files for preview in the cylindrical display
// note: ideally, texture files are in a resolution and/or aspect ratio that are in line with the cylindrical display configuration (see CylindricalDisplayConfig in config.js)
// how to determine aspect ratio based on radius (r) and height (h) in CylindricalDisplayConfig:
// * step 1. determine cylindrical display circumference (c) = 2 * PI * r
// * step 2. determine aspect ratio (ar:1) = c / h
const CylindricalDisplayData = [
    {
        // test/reference image, dividing the cylindrical 360 space into eight equally sized sections; Nico Reski
        textureUrl: "../../assets/GDContest/public/FINAL.png"
    }
];

export { CylindricalDisplayData as CDData };
/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// This is an example script for v85+ to display blink count

// How to load in modules
const Scene = require('Scene');
const Patches = require('Patches');

Promise.all([
    Scene.root.findFirst('TheText'),
]).then(function (results) {
    
    const theText = results[0];

    // Get the output from the 'score' created in the To Script bridge and updated in the Patch Editor.
    Patches.outputs.getScalar('score').then(score => {

        // assign the .text property of 'theText' to the score. 
        // convert the score scalar signal to a string using the .toString() method.
        theText.text = score.toString();

        // update the blink count in the Debug Console
        Diagnostics.watch("Blink Count: ", score);

    });

});


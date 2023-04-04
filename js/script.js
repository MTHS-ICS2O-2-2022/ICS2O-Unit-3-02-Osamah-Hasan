// Copyright (c) 2023 Osamah Hasan All rights reserved
//
// Created by: Osamah Hasan
// Created on: Mar 2023
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area and perimeter of Triangle.
 */
function calculate () {
  // input
  const L = parseInt(document.getElementById('L of Pyramid').value)
  const H = parseInt(document.getElementById('H of Pyramid').value)
  const W = parseInt(document.getElementById('W of Pyramid').value)

  // process
  const Volume = (L * H * W) / 3

  // output
  document.getElementById('Volume').innerHTML = 'Volume is: ' + Volume + ' cm²'
}

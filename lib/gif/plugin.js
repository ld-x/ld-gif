'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _GifButton = require('./GifButton');

var _GifButton2 = _interopRequireDefault(_GifButton);

var _GifBlock = require('./GifBlock');

var _GifBlock2 = _interopRequireDefault(_GifBlock);

var _GifModal = require('./GifModal');

var _GifModal2 = _interopRequireDefault(_GifModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  type: 'gif',
  button: _GifButton2.default,
  block: _GifBlock2.default,
  modal: _GifModal2.default
}; /*
    * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
    *
    * License: MIT
    */
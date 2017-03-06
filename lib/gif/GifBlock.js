'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n'], ['\n  position: relative;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n'], ['\n  display: flex;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: block;\n'], ['\n  display: block;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  cursor: pointer;\n  color: #ddd;\n  width: 1rem;\n  &:hover {\n    color: #333;\n  }\n'], ['\n  cursor: pointer;\n  color: #ddd;\n  width: 1rem;\n  &:hover {\n    color: #333;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, Globo.com (https://github.com/globocom)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (c) 2016, vace.nz (https://github.com/vacenz)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * License: MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var _default = function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    _classCallCheck(this, _default);

    return _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).apply(this, arguments));
  }

  _createClass(_default, [{
    key: 'itemAction',
    value: function itemAction() {
      this.props.container.remove();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        GifBlockWrapper,
        { className: 'ld-gif-block-wrapper' },
        _react2.default.createElement(
          GifBlock,
          { className: 'ld-gif-block' },
          _react2.default.createElement(Image, {
            src: this.props.data.src,
            className: 'ld-gif-block-image' })
        ),
        _react2.default.createElement(
          BlockAction,
          { className: 'ld-gif-block-action', onClick: this.itemAction.bind(this), key: 'deleteGif' },
          _react2.default.createElement(
            'svg',
            { width: '22', height: '22', viewBox: '0 0 24 24', className: 'ld-button-gif-close' },
            _react2.default.createElement(
              'g',
              { fill: 'currentColor' },
              _react2.default.createElement('path', { d: 'M16.95 5.636l1.414 1.414L7.05 18.364 5.636 16.95z' }),
              _react2.default.createElement('path', { d: 'M16.95 18.364l1.414-1.414L7.05 5.636 5.636 7.05z' })
            )
          )
        )
      );
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;


var GifBlockWrapper = _styledComponents2.default.div(_templateObject);

var GifBlock = _styledComponents2.default.div(_templateObject2);

var Image = _styledComponents2.default.img(_templateObject3);

var BlockAction = _styledComponents2.default.div(_templateObject4);
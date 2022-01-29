/*!
 * vue-diagram-editor v1.2.1 | (c) 2021 Maksim Kutishchev
 * Released under the Apache 2 License.
 * https://vue-diagram-editor.js.org
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("ulid");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("lodash/isEqual");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash/cloneDeep");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("svg-pan-zoom");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash/throttle");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "Diagram", function() { return /* reexport */ Diagram; });
__webpack_require__.d(__webpack_exports__, "Node", function() { return /* reexport */ Node_Node; });
__webpack_require__.d(__webpack_exports__, "Link", function() { return /* reexport */ Link_Link; });
__webpack_require__.d(__webpack_exports__, "Size", function() { return /* reexport */ Size; });
__webpack_require__.d(__webpack_exports__, "Coordinates", function() { return /* reexport */ Coordinates; });

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Diagram.vue?vue&type=template&id=250e0153&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "diagram-editor__wrapper" },
    [
      _c("DiagramRoot", {
        ref: "diagram",
        attrs: {
          width: _vm.width,
          height: _vm.height,
          "grid-snap": _vm.gridSnap,
          "zoom-enabled": _vm.zoomEnabled,
          "node-color": _vm.nodeColor,
          "node-pulsable": _vm.nodePulsable,
          "node-deletable": _vm.nodeDeletable,
          "node-pulse-color": _vm.nodePulseColor,
          "before-delete-node": _vm.beforeDeleteNode,
          "before-delete-link": _vm.beforeDeleteLink,
          "port-disabled": _vm.portDisabled,
          "port-available": _vm.portAvailable,
          pan: _vm.pan,
          "prevent-mouse-events-default": _vm.preventMouseEventsDefault
        },
        on: {
          "select-node": function($event) {
            return _vm.$emit("select-node", $event)
          },
          "deleted-node": function($event) {
            return _vm.$emit("deleted-node", $event)
          },
          "deleted-link": function($event) {
            return _vm.$emit("deleted-link", $event)
          },
          "updated-node": function($event) {
            return _vm.$emit("updated-node", $event)
          },
          "click-port": function($event) {
            return _vm.$emit("click-port", $event)
          },
          "created-link": function($event) {
            return _vm.$emit("created-link", $event)
          }
        },
        scopedSlots: _vm._u(
          [
            {
              key: "default",
              fn: function(scopedParams) {
                return [_vm._t("node", null, null, scopedParams)]
              }
            }
          ],
          null,
          true
        )
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/Diagram.vue?vue&type=template&id=250e0153&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiagramRoot.vue?vue&type=template&id=20c2cfd5&
var DiagramRootvue_type_template_id_20c2cfd5_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      ref: "diagramRoot",
      staticClass: "diagram-editor__svg-content",
      attrs: {
        id: "diagram-root-" + _vm.uniqId,
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 " + _vm.width / 1.2 + " " + _vm.height / 1.2,
        width: _vm.width,
        height: _vm.height,
        preserveAspectRatio: "xMinYMin meet"
      }
    },
    [
      _c(
        "g",
        {
          ref: "viewPort",
          staticClass: "svg-pan-zoom_viewport",
          attrs: { x: "50", y: "50" }
        },
        [
          _c("defs", [
            _c(
              "pattern",
              {
                attrs: {
                  id: "diagram-small-grid-" + _vm.uniqId,
                  width: "16",
                  height: "16",
                  patternUnits: "userSpaceOnUse"
                }
              },
              [
                _c("path", {
                  attrs: {
                    d: "M 16 0 L 0 0 0 16",
                    fill: "none",
                    stroke: "#ccc",
                    "stroke-width": "0.5"
                  }
                })
              ]
            ),
            _c(
              "pattern",
              {
                attrs: {
                  id: "diagram-grid-" + _vm.uniqId,
                  width: "80",
                  height: "80",
                  patternUnits: "userSpaceOnUse"
                }
              },
              [
                _c("rect", {
                  attrs: {
                    width: "80",
                    height: "80",
                    fill: "url(#diagram-small-grid-" + _vm.uniqId + ")"
                  }
                }),
                _c("path", {
                  attrs: {
                    d: "M 80 0 L 0 0 0 80",
                    fill: "none",
                    stroke: "#ccc",
                    "stroke-width": "1"
                  }
                })
              ]
            )
          ]),
          _c("rect", {
            ref: "grid",
            attrs: {
              x: "-5000px",
              y: "-5000px",
              width: "10000px",
              height: "10000px",
              fill: "url(#diagram-grid-" + _vm.uniqId + ")"
            },
            on: { mousedown: _vm.clearSelection }
          }),
          _vm._l(_vm.links, function(link) {
            return _c("DiagramLink", {
              key: link.id,
              attrs: {
                id: link.id,
                link: link,
                "node-start": _vm.nodes[link.start_id],
                "node-end": _vm.nodes[link.end_id],
                selected: _vm.selectedLink === link.id
              },
              on: {
                mousedown: function($event) {
                  return _vm.selectLink(link.id)
                }
              }
            })
          }),
          _vm._l(_vm.nodes, function(node) {
            return _c("DiagramNode", {
              key: node.id,
              attrs: {
                node: node,
                color: _vm.nodeColor,
                "pulse-color": _vm.nodePulseColor,
                pulsable: _vm.nodePulsable,
                deletable: _vm.nodeDeletable,
                dragging: _vm.draggedNode === node.id,
                selected: _vm.selectedNode === node.id,
                "port-disabled": _vm.portDisabled,
                "port-available": _vm.portAvailable,
                "active-port": _vm.activePort,
                "hovered-port": _vm.hoveredPort
              },
              on: {
                delete: _vm.deleteNode,
                "drag-start": _vm.onNodeDragStart,
                "resize-start": _vm.onNodeResizeStart,
                "hovered-port": _vm.setHoveredPort,
                "active-port": _vm.setActivePort
              },
              scopedSlots: _vm._u(
                [
                  {
                    key: "default",
                    fn: function(scopedParams) {
                      return [
                        _vm._t("default", null, { node: node }, scopedParams)
                      ]
                    }
                  }
                ],
                null,
                true
              )
            })
          }),
          _vm.newLink
            ? _c("line", {
                staticStyle: { stroke: "rgb(255,0,0)", "stroke-width": "2" },
                attrs: {
                  x1: _vm.newLink.x1,
                  y1: _vm.newLink.y1,
                  x2: _vm.newLink.x2,
                  y2: _vm.newLink.y2,
                  "pointer-events": "none"
                }
              })
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var DiagramRootvue_type_template_id_20c2cfd5_staticRenderFns = []
DiagramRootvue_type_template_id_20c2cfd5_render._withStripped = true


// CONCATENATED MODULE: ./src/components/DiagramRoot.vue?vue&type=template&id=20c2cfd5&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiagramNode.vue?vue&type=template&id=6da56cf5&
var DiagramNodevue_type_template_id_6da56cf5_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    { attrs: { id: _vm.node.id } },
    [
      _vm.pulsable(_vm.node)
        ? _c("rect", {
            staticClass: "diagram--editor__pulse",
            attrs: {
              fill: _vm.pulseColor(_vm.node),
              stroke: _vm.pulseColor(_vm.node),
              x: _vm.node.x,
              y: _vm.node.y,
              rx: "3",
              ry: "3",
              width: _vm.node.width,
              height: _vm.node.height
            }
          })
        : _vm._e(),
      _c("rect", {
        attrs: {
          fill: _vm.color(_vm.node),
          stroke: "#000000",
          "stroke-width": _vm.selected ? 1 : 0,
          x: _vm.node.x,
          y: _vm.node.y,
          rx: "3",
          ry: "3",
          width: _vm.node.width,
          height: _vm.node.height
        }
      }),
      _c("DiagramNodeTitle", {
        attrs: {
          x: _vm.node.x + 2,
          y: _vm.node.y + 2,
          width: _vm.node.size.width - 4,
          title: _vm.node.title,
          dragging: _vm.dragging,
          deletable: _vm.nodeDeletable
        },
        on: { delete: _vm.deleteNode },
        nativeOn: {
          mousedown: function($event) {
            $event.stopPropagation()
            return _vm.onDragStart($event)
          }
        }
      }),
      _c("rect", {
        staticClass: "node-light-background",
        attrs: {
          fill: "#ffffff",
          x: _vm.node.x + 2,
          y: _vm.node.y + 20,
          rx: "3",
          ry: "3",
          width: _vm.node.width - 4,
          height: _vm.node.height - 22
        }
      }),
      _c(
        "foreignObject",
        {
          attrs: {
            x: _vm.node.x + 2,
            y: _vm.node.y + 20,
            width: _vm.slotWidth,
            height: _vm.slotHeight
          }
        },
        [
          _c(
            "body",
            {
              staticClass: "diagram-editor__node-body",
              attrs: { xmlns: "http://www.w3.org/1999/xhtml" }
            },
            [
              _vm._t("default", null, {
                width: _vm.slotWidth,
                height: _vm.slotHeight
              })
            ],
            2
          )
        ]
      ),
      _c(
        "svg",
        {
          attrs: {
            x: _vm.node.x - 4,
            y: _vm.node.y + _vm.node.height - _vm.portsHeight - 2,
            width: _vm.node.width + 8,
            height: _vm.portsHeight
          }
        },
        [
          _vm._l(_vm.portsIn, function(ref, portIndex) {
            var port = ref[0]
            var portTitle = ref[1]
            return _c("DiagramPort", {
              key: _vm.node.id + "_in_" + port,
              attrs: {
                id: _vm.node.id + "_in_" + port,
                title: portTitle,
                width:
                  portIndex + 1 > _vm.portsOut.length
                    ? _vm.node.width
                    : _vm.node.width / 2,
                x: 0,
                y: portIndex * 18,
                disabled: _vm.portsInDisabled[port],
                available: _vm.portsInAvailable[port],
                hovered: _vm.isHoveredPort("in", port),
                align: "start"
              },
              on: {
                mousedown: function($event) {
                  return _vm.mouseDownPort("in", port, $event)
                },
                mouseenter: function($event) {
                  return _vm.mouseEnterPort("in", port, $event)
                },
                mouseleave: function($event) {
                  return _vm.mouseLeavePort("in", port, $event)
                }
              }
            })
          }),
          _vm._l(_vm.portsOut, function(ref, portIndex) {
            var port = ref[0]
            var portTitle = ref[1]
            return _c("DiagramPort", {
              key: _vm.node.id + "_out_" + port,
              attrs: {
                id: _vm.node.id + "_out_" + port,
                title: portTitle,
                width: _vm.node.width + 8,
                x: 0,
                y: portIndex * 18,
                disabled: _vm.portsOutDisabled[port],
                available: _vm.portsOutAvailable[port],
                hovered: _vm.isHoveredPort("out", port),
                align: "end"
              },
              on: {
                mousedown: function($event) {
                  return _vm.mouseDownPort("out", port, $event)
                },
                mouseenter: function($event) {
                  return _vm.mouseEnterPort("out", port, $event)
                },
                mouseleave: function($event) {
                  return _vm.mouseLeavePort("out", port, $event)
                }
              }
            })
          })
        ],
        2
      ),
      _c(
        "svg",
        {
          // attrs: {
          //   width: "10",
          //   height: "10",
          //   x: _vm.node.x + _vm.node.width - 10,
          //   y: _vm.node.y + _vm.node.height - 10
          // },
          // on: { mousedown: _vm.onResizeStart }
        },
        [
          _c("path", {
            // staticStyle: { cursor: "nwse-resize" },
            // attrs: { d: "M 0,10 10,0 v 10 z", fill: "#000" }
          })
        ]
      )
    ],
    1
  )
}
var DiagramNodevue_type_template_id_6da56cf5_staticRenderFns = []
DiagramNodevue_type_template_id_6da56cf5_render._withStripped = true


// CONCATENATED MODULE: ./src/components/DiagramNode.vue?vue&type=template&id=6da56cf5&

// EXTERNAL MODULE: external "ulid"
var external_ulid_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/models/Coordinates.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Coordinates = function Coordinates(_ref) {
  var _ref$x = _ref.x,
      x = _ref$x === void 0 ? 10 : _ref$x,
      _ref$y = _ref.y,
      y = _ref$y === void 0 ? 10 : _ref$y;

  _classCallCheck(this, Coordinates);

  _defineProperty(this, "x", null);

  _defineProperty(this, "y", null);

  this.x = Number(x);
  this.y = Number(y);
};


// CONCATENATED MODULE: ./src/models/Size.js
function Size_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Size_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Size = function Size(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 150 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 150 : _ref$height;

  Size_classCallCheck(this, Size);

  Size_defineProperty(this, "width", null);

  Size_defineProperty(this, "height", null);

  this.width = Number(width);
  this.height = Number(height);
};


// CONCATENATED MODULE: ./src/models/Node.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Node_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Node_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function Node_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Node_Node = function () {
  function Node(attr) {
    Node_classCallCheck(this, Node);

    Node_defineProperty(this, "id", null);

    Node_defineProperty(this, "title", null);

    Node_defineProperty(this, "size", null);

    Node_defineProperty(this, "coordinates", null);

    Node_defineProperty(this, "data", {});

    Node_defineProperty(this, "portsIn", {});

    Node_defineProperty(this, "portsOut", {});

    this.id = Node.prepareProp('id', attr.id);
    this.title = attr.title;
    this.coordinates = Node.prepareProp('coordinates', attr.coordinates);
    this.size = Node.prepareProp('size', attr.size);
    this.data = Node.prepareProp('data', attr.data);
    this.portsIn = Node.prepareProp('portsIn', attr.portsIn);
    this.portsOut = Node.prepareProp('portsOut', attr.portsOut);
  }

  _createClass(Node, [{
    key: "portsHeight",
    get: function get() {
      return Math.max(Object.keys(this.portsIn).length, Object.keys(this.portsOut).length) * Node.PORT_HEIGHT;
    }
  }, {
    key: "width",
    get: function get() {
      return this.size.width;
    }
  }, {
    key: "height",
    get: function get() {
      return this.size.height;
    }
  }, {
    key: "x",
    get: function get() {
      return this.coordinates.x;
    }
  }, {
    key: "y",
    get: function get() {
      return this.coordinates.y;
    }
  }, {
    key: "x1",
    get: function get() {
      return this.coordinates.x + this.size.width;
    }
  }, {
    key: "y1",
    get: function get() {
      return this.coordinates.y + this.size.height;
    }
  }, {
    key: "getPortCoordinates",
    value: function getPortCoordinates(type, name) {
      if (!['in', 'out'].includes(type)) throw new Error('Undefined port type ' + type);
      var ports = Object.keys(type === 'in' ? this.portsIn : this.portsOut);
      var index = ports.findIndex(function (portName) {
        return portName === name;
      });

      if (index === -1) {
        throw new Error("\"".concat(type, "\" port with name \"").concat(name, "\" is undefined!"));
      }

      return {
        x: this.x + (type === 'out' ? this.width : 1),
        y: this.y + this.height - (this.portsHeight - 2) + index * Node.PORT_HEIGHT + 1
      };
    }
  }], [{
    key: "prepareProp",
    value: function prepareProp(name, value) {
      switch (name) {
        case 'id':
          return value || Object(external_ulid_["ulid"])();

        case 'coordinates':
          return new Coordinates(value || {});

        case 'size':
          return new Size(value || {});

        case 'portsIn':
        case 'portsOut':
          return _objectSpread({}, value || {});

        case 'data':
          return value || {};

        default:
          return value;
      }
    }
  }, {
    key: "intersect",
    value: function intersect(a, b) {
      return !(a.x > b.x1 || b.x > a.x1 || a.y > b.y1 || b.y > a.y1);
    }
  }]);

  return Node;
}();

Node_defineProperty(Node_Node, "PORT_HEIGHT", 18);


// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiagramPort.vue?vue&type=template&id=561efff4&functional=true&
var DiagramPortvue_type_template_id_561efff4_functional_true_render = function(_h, _vm) {
  var _c = _vm._c
  return _c(
    "svg",
    {
      attrs: {
        x: _vm.props.x,
        y: _vm.props.y,
        width: _vm.props.width,
        height: "16"
      }
    },
    [
      _c(
        "rect",
        _vm._g(
          {
            attrs: {
              fill: _vm.$options.fill(_vm.props.available, _vm.props.hovered),
              x: _vm.props.align === "start" ? 0 : _vm.props.width - 10,
              y: "0",
              rx: "5",
              ry: "5",
              cursor: _vm.props.disabled ? "default" : "pointer",
              width: "10",
              height: "10"
            }
          },
          _vm.listeners
        )
      ),
      _c(
        "text",
        {
          attrs: {
            x: _vm.props.align === "start" ? 12 : _vm.props.width - 12,
            y: "9",
            "font-size": "8pt",
            "text-anchor": _vm.props.align
          }
        },
        [_vm._v("\n    " + _vm._s(_vm.props.title) + "\n  ")]
      )
    ]
  )
}
var DiagramPortvue_type_template_id_561efff4_functional_true_staticRenderFns = []
DiagramPortvue_type_template_id_561efff4_functional_true_render._withStripped = true


// CONCATENATED MODULE: ./src/components/DiagramPort.vue?vue&type=template&id=561efff4&functional=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiagramPort.vue?vue&type=script&lang=js&
/* harmony default export */ var DiagramPortvue_type_script_lang_js_ = ({
  fill: function fill(available, hovered) {
    if (available) {
      return hovered ? '#04ff00' : '#f00';
    }

    return hovered ? '#888' : '#444';
  }
});
// CONCATENATED MODULE: ./src/components/DiagramPort.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DiagramPortvue_type_script_lang_js_ = (DiagramPortvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/DiagramPort.vue





/* normalize component */

var component = normalizeComponent(
  components_DiagramPortvue_type_script_lang_js_,
  DiagramPortvue_type_template_id_561efff4_functional_true_render,
  DiagramPortvue_type_template_id_561efff4_functional_true_staticRenderFns,
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/DiagramPort.vue"
/* harmony default export */ var DiagramPort = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiagramNodeTitle.vue?vue&type=template&id=51477eda&
var DiagramNodeTitlevue_type_template_id_51477eda_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    {
      style: { cursor: _vm.dragging ? "grabbing" : "grab" },
      attrs: { x: _vm.x, y: _vm.y, width: _vm.width, height: "16" },
      on: {
        mouseenter: function($event) {
          _vm.hover = true
        },
        mouseleave: function($event) {
          _vm.hover = false
        }
      }
    },
    [
      _c("rect", {
        attrs: {
          fill: "#000",
          "fill-opacity": _vm.titleFillOpacity,
          x: "0",
          y: "0",
          rx: "3",
          ry: "3",
          width: _vm.width,
          height: "16"
        }
      }),
      _c(
        "svg",
        {
          attrs: {
            x: "0",
            y: "0",
            width: _vm.deletable ? _vm.width - 17 : _vm.width,
            height: "16"
          }
        },
        [
          _c("title", [_vm._v(_vm._s(_vm.title))]),
          _c(
            "text",
            {
              attrs: {
                x: "2",
                y: "13",
                "font-size": "15",
                "font-weight": "normal",
                fill: "#fff"
              }
            },
            [_vm._v(_vm._s(_vm.title))]
          )
        ]
      ),
      _vm.deletable
        ? _c(
            "svg",
            {
              staticClass: "diagram-editor__delete",
              attrs: { x: _vm.width - 15, y: "1", width: "14", height: "14" },
              on: {
                click: function($event) {
                  return _vm.$emit("delete")
                }
              }
            },
            [
              _c("rect", {
                attrs: {
                  x: "0",
                  y: "0",
                  width: "14",
                  height: "14",
                  rx: "2",
                  ry: "2"
                }
              }),
              _c("line", { attrs: { x1: 1, y1: 1, x2: 13, y2: 13 } }),
              _c("line", { attrs: { x1: 13, y1: 1, x2: 1, y2: 13 } })
            ]
          )
        : _vm._e()
    ]
  )
}
var DiagramNodeTitlevue_type_template_id_51477eda_staticRenderFns = []
DiagramNodeTitlevue_type_template_id_51477eda_render._withStripped = true


// CONCATENATED MODULE: ./src/components/DiagramNodeTitle.vue?vue&type=template&id=51477eda&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiagramNodeTitle.vue?vue&type=script&lang=js&
/* harmony default export */ var DiagramNodeTitlevue_type_script_lang_js_ = ({
  name: 'DiagramNodeTitle',
  props: {
    x: {
      type: Number,
      required: true
    },
    y: {
      type: Number,
      required: true
    },
    width: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    deletable: {
      type: Boolean,
      default: true
    },
    dragging: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      hover: false
    };
  },
  computed: {
    titleFillOpacity: function titleFillOpacity() {
      return this.hover ? 0.7 : 0.5;
    }
  }
});
// CONCATENATED MODULE: ./src/components/DiagramNodeTitle.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DiagramNodeTitlevue_type_script_lang_js_ = (DiagramNodeTitlevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/DiagramNodeTitle.vue





/* normalize component */

var DiagramNodeTitle_component = normalizeComponent(
  components_DiagramNodeTitlevue_type_script_lang_js_,
  DiagramNodeTitlevue_type_template_id_51477eda_render,
  DiagramNodeTitlevue_type_template_id_51477eda_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var DiagramNodeTitle_api; }
DiagramNodeTitle_component.options.__file = "src/components/DiagramNodeTitle.vue"
/* harmony default export */ var DiagramNodeTitle = (DiagramNodeTitle_component.exports);
// EXTERNAL MODULE: external "lodash/isEqual"
var isEqual_ = __webpack_require__(1);
var isEqual_default = /*#__PURE__*/__webpack_require__.n(isEqual_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiagramNode.vue?vue&type=script&lang=js&
function DiagramNodevue_type_script_lang_js_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DiagramNodevue_type_script_lang_js_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DiagramNodevue_type_script_lang_js_ownKeys(Object(source), true).forEach(function (key) { DiagramNodevue_type_script_lang_js_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DiagramNodevue_type_script_lang_js_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DiagramNodevue_type_script_lang_js_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* harmony default export */ var DiagramNodevue_type_script_lang_js_ = ({
  name: "DiagramNode",
  components: {
    DiagramNodeTitle: DiagramNodeTitle,
    DiagramPort: DiagramPort
  },
  props: {
    node: {
      type: Node_Node,
      required: true
    },
    color: {
      type: Function,
      required: true
    },
    pulseColor: {
      type: Function,
      required: true
    },
    pulsable: {
      type: Function,
      required: true
    },
    portDisabled: {
      type: Function,
      required: true
    },
    portAvailable: {
      type: Function,
      required: true
    },
    deletable: {
      type: Function,
      required: true
    },
    activePort: {
      type: Object,
      default: null
    },
    hoveredPort: {
      type: Object,
      default: null
    },
    selected: {
      type: Boolean,
      default: false
    },
    dragging: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      nodeStrokeWidth: 0,
      titleFillOpacity: 0.25
    };
  },
  computed: {
    portsIn: function portsIn() {
      return Object.entries(this.node.portsIn);
    },
    portsOut: function portsOut() {
      return Object.entries(this.node.portsOut);
    },
    portsInDisabled: function portsInDisabled() {
      var _this = this;

      return Object.keys(this.node.portsIn).reduce(function (acc, port) {
        return DiagramNodevue_type_script_lang_js_objectSpread(DiagramNodevue_type_script_lang_js_objectSpread({}, acc), {}, DiagramNodevue_type_script_lang_js_defineProperty({}, port, _this.portDisabled({
          id: _this.node.id,
          type: 'in',
          port: port
        })));
      }, {});
    },
    portsOutDisabled: function portsOutDisabled() {
      var _this2 = this;

      return Object.keys(this.node.portsOut).reduce(function (acc, port) {
        return DiagramNodevue_type_script_lang_js_objectSpread(DiagramNodevue_type_script_lang_js_objectSpread({}, acc), {}, DiagramNodevue_type_script_lang_js_defineProperty({}, port, _this2.portDisabled({
          id: _this2.node.id,
          type: 'out',
          port: port
        })));
      }, {});
    },
    portsInAvailable: function portsInAvailable() {
      var _this3 = this;

      return Object.keys(this.node.portsIn).reduce(function (acc, port) {
        return DiagramNodevue_type_script_lang_js_objectSpread(DiagramNodevue_type_script_lang_js_objectSpread({}, acc), {}, DiagramNodevue_type_script_lang_js_defineProperty({}, port, _this3.activePort && _this3.isAvailablePort('in', port)));
      }, {});
    },
    portsOutAvailable: function portsOutAvailable() {
      var _this4 = this;

      return Object.keys(this.node.portsOut).reduce(function (acc, port) {
        return DiagramNodevue_type_script_lang_js_objectSpread(DiagramNodevue_type_script_lang_js_objectSpread({}, acc), {}, DiagramNodevue_type_script_lang_js_defineProperty({}, port, _this4.activePort && _this4.isAvailablePort('out', port)));
      }, {});
    },
    portsHeight: function portsHeight() {
      return this.node.portsHeight;
    },
    slotWidth: function slotWidth() {
      return this.node.size.width - 4;
    },
    slotHeight: function slotHeight() {
      return this.node.size.height - 22;
    },
    nodeDeletable: function nodeDeletable() {
      return this.deletable(this.node);
    }
  },
  methods: {
    isAvailablePort: function isAvailablePort(type, port) {
      var data = {
        id: this.node.id,
        type: type,
        port: port
      };

      var activePort = DiagramNodevue_type_script_lang_js_objectSpread({}, this.activePort);

      var hoveredPort = this.hoveredPort ? DiagramNodevue_type_script_lang_js_objectSpread({}, this.hoveredPort) : null;
      var hoveredIsActive = hoveredPort ? isEqual_default()(activePort, hoveredPort) : false;
      return !hoveredIsActive && !isEqual_default()(activePort, data) && this.portAvailable(DiagramNodevue_type_script_lang_js_objectSpread(DiagramNodevue_type_script_lang_js_objectSpread({}, data), {}, {
        activePort: DiagramNodevue_type_script_lang_js_objectSpread({}, this.activePort)
      }));
    },
    deleteNode: function deleteNode() {
      this.$emit("delete", this.node.id);
    },
    onDragStart: function onDragStart(e) {
      this.$emit('drag-start', {
        node: this.node,
        eX: e.x,
        eY: e.y
      });
    },
    onResizeStart: function onResizeStart(e) {
      this.$emit('resize-start', {
        node: this.node,
        eX: e.x,
        eY: e.y
      });
    },
    isHoveredPort: function isHoveredPort(type, port) {
      return this.hoveredPort && this.node.id === this.hoveredPort.id && port === this.hoveredPort.port && type === this.hoveredPort.type;
    },
    mouseDownPort: function mouseDownPort(type, port) {
      var portIsDisabled = type === 'in' ? this.portsInDisabled[port] : this.portsOutDisabled[port];

      if (!portIsDisabled) {
        this.$emit('active-port', {
          id: this.node.id,
          port: port,
          type: type
        });
      }
    },
    mouseEnterPort: function mouseEnterPort(type, port) {
      this.$emit('hovered-port', {
        id: this.node.id,
        port: port,
        type: type
      });
    },
    mouseLeavePort: function mouseLeavePort() {
      this.$emit('hovered-port', null);
    }
  }
});
// CONCATENATED MODULE: ./src/components/DiagramNode.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DiagramNodevue_type_script_lang_js_ = (DiagramNodevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/DiagramNode.vue





/* normalize component */

var DiagramNode_component = normalizeComponent(
  components_DiagramNodevue_type_script_lang_js_,
  DiagramNodevue_type_template_id_6da56cf5_render,
  DiagramNodevue_type_template_id_6da56cf5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var DiagramNode_api; }
DiagramNode_component.options.__file = "src/components/DiagramNode.vue"
/* harmony default export */ var DiagramNode = (DiagramNode_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiagramLink.vue?vue&type=template&id=71e2b2ed&
var DiagramLinkvue_type_template_id_71e2b2ed_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "g",
    {
      on: {
        mouseenter: function($event) {
          _vm.hovered = true
        },
        mouseleave: function($event) {
          _vm.hovered = false
        },
        mousedown: function($event) {
          return _vm.$emit("mousedown", $event)
        }
      }
    },
    [
      _c("path", {
        style: _vm.largeStrokeStyle,
        attrs: { d: _vm.curve, "stroke-width": "8", fill: "none" }
      }),
      _c("path", {
        staticStyle: { stroke: "rgb(0,0,0)" },
        attrs: { d: _vm.curve, "stroke-width": "2", fill: "none" }
      })
    ]
  )
}
var DiagramLinkvue_type_template_id_71e2b2ed_staticRenderFns = []
DiagramLinkvue_type_template_id_71e2b2ed_render._withStripped = true


// CONCATENATED MODULE: ./src/components/DiagramLink.vue?vue&type=template&id=71e2b2ed&

// CONCATENATED MODULE: ./src/models/Link.js
function Link_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Link_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Link_Link = function Link(props) {
  Link_classCallCheck(this, Link);

  Link_defineProperty(this, "id", null);

  Link_defineProperty(this, "start_id", null);

  Link_defineProperty(this, "start_port", null);

  Link_defineProperty(this, "end_id", null);

  Link_defineProperty(this, "end_port", null);

  this.id = props.id || Object(external_ulid_["ulid"])();
  if (!props.start_id) throw new Error('start_id is empty!');
  this.start_id = props.start_id;
  this.start_port = props.start_port || 'default';
  if (!props.end_id) throw new Error('end_id is empty!');
  this.end_id = props.end_id;
  this.end_port = props.end_port || 'default';
};


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiagramLink.vue?vue&type=script&lang=js&


/* harmony default export */ var DiagramLinkvue_type_script_lang_js_ = ({
  name: "DiagramLink",
  props: {
    link: {
      type: Link_Link,
      required: true
    },
    nodeStart: {
      type: Node_Node,
      required: true
    },
    nodeEnd: {
      type: Node_Node,
      required: true
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      hovered: false
    };
  },
  computed: {
    startCoordinates: function startCoordinates() {
      return this.nodeStart.getPortCoordinates('out', this.link.start_port);
    },
    endCoordinates: function endCoordinates() {
      return this.nodeEnd.getPortCoordinates('in', this.link.end_port);
    },
    x1: function x1() {
      return this.startCoordinates.x - 2;
    },
    y1: function y1() {
      return this.startCoordinates.y;
    },
    x2: function x2() {
      return this.endCoordinates.x + 1;
    },
    y2: function y2() {
      return this.endCoordinates.y;
    },
    curve: function curve() {
      var x1 = Math.trunc(this.x1),
          y1 = Math.trunc(this.y1),
          x2 = Math.trunc(this.x2),
          y2 = Math.trunc(this.y2);
      var distance = Math.trunc(4 * Math.sqrt(Math.abs(x1 - x2))) + 10;
      return "M".concat(x1, ",").concat(y1, " C").concat(x1 + distance, ",").concat(y1, " ").concat(x2 - distance, ",").concat(y2, " ").concat(x2, ",").concat(y2);
    },
    largeStrokeStyle: function largeStrokeStyle() {
      if (this.selected) {
        return this.hovered ? 'stroke:rgba(0,0,255,0.6);' : 'stroke:rgba(0,0,255,0.4);';
      }

      return this.hovered ? 'stroke:rgba(255,0,0,0.5);' : 'stroke:rgba(255,0,0,0.0);';
    }
  }
});
// CONCATENATED MODULE: ./src/components/DiagramLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DiagramLinkvue_type_script_lang_js_ = (DiagramLinkvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/DiagramLink.vue





/* normalize component */

var DiagramLink_component = normalizeComponent(
  components_DiagramLinkvue_type_script_lang_js_,
  DiagramLinkvue_type_template_id_71e2b2ed_render,
  DiagramLinkvue_type_template_id_71e2b2ed_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var DiagramLink_api; }
DiagramLink_component.options.__file = "src/components/DiagramLink.vue"
/* harmony default export */ var DiagramLink = (DiagramLink_component.exports);
// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(2);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/helpers.js
var getAbsoluteXY = function getAbsoluteXY(element) {
  var viewportElement = document.documentElement;
  var box = element.getBoundingClientRect();
  var scrollLeft = viewportElement.scrollLeft;
  var scrollTop = viewportElement.scrollTop;
  return {
    x: box.left + scrollLeft,
    y: box.top + scrollTop
  };
};
var snapToGrip = function snapToGrip(val, gridSize) {
  return gridSize * Math.round(val / gridSize);
};
// EXTERNAL MODULE: external "lodash/cloneDeep"
var cloneDeep_ = __webpack_require__(3);
var cloneDeep_default = /*#__PURE__*/__webpack_require__.n(cloneDeep_);

// CONCATENATED MODULE: ./src/mixins/DiagramEditorMixin.js
function DiagramEditorMixin_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function DiagramEditorMixin_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { DiagramEditorMixin_ownKeys(Object(source), true).forEach(function (key) { DiagramEditorMixin_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { DiagramEditorMixin_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function DiagramEditorMixin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* harmony default export */ var DiagramEditorMixin = (function () {
  return {
    data: function data() {
      return {
        nodes: {},
        links: {},
        draggedNode: null,
        resizedNode: null,
        selectedNode: null,
        selectedLink: null,
        initialCursorOffset: {
          x: 0,
          y: 0
        },
        activePort: null,
        hoveredPort: null,
        nodeCoordinatesBeforeDrag: {
          x: 0,
          y: 0
        },
        nodeSizeBeforeResize: {
          width: 0,
          height: 0
        },
        currentCursorPos: null
      };
    },
    computed: {
      newLink: function newLink() {
        if (!this.activePort || this.currentCursorPos === null) return null;
        var _this$activePort = this.activePort,
            id = _this$activePort.id,
            type = _this$activePort.type,
            port = _this$activePort.port;
        var startCoordinates = this.nodes[id].getPortCoordinates(type, port);
        return {
          x1: startCoordinates.x,
          y1: startCoordinates.y,
          x2: this.currentCursorPos.x,
          y2: this.currentCursorPos.y
        };
      }
    },
    watch: {
      selectedNode: function selectedNode(id) {
        if (id) {
          this.$emit('select-node', id);
        }
      },
      draggedNode: function draggedNode(id) {
        if (id) {
          var node = this.nodes[id];
          this.nodeCoordinatesBeforeDrag = DiagramEditorMixin_objectSpread({}, node.coordinates);
        }

        this.toggleMoveEventListener(id !== null);
      },
      resizedNode: function resizedNode(id) {
        if (id) {
          var node = this.nodes[id];
          this.nodeSizeBeforeResize = DiagramEditorMixin_objectSpread({}, node.size);
        }

        this.toggleMoveEventListener(id !== null);
      },
      activePort: function activePort(v) {
        this.toggleMoveEventListener(v !== null);
      }
    },
    methods: {
      setModel: function setModel(model) {
        this.nodes = Object.values(model.nodes || []).reduce(function (carry, node) {
          var nodeModel = new Node_Node(node);
          return DiagramEditorMixin_objectSpread(DiagramEditorMixin_objectSpread({}, carry), {}, DiagramEditorMixin_defineProperty({}, nodeModel.id, nodeModel));
        }, {});
        this.links = Object.values(model.links || []).reduce(function (carry, link) {
          var linkModel = new Link_Link(link);
          return DiagramEditorMixin_objectSpread(DiagramEditorMixin_objectSpread({}, carry), {}, DiagramEditorMixin_defineProperty({}, linkModel.id, linkModel));
        }, {});
      },
      beforePan: function beforePan() {
        return this.pan && !(this.draggedNode || this.resizedNode || this.activePort);
      },
      addNode: function addNode(node) {
        var nodeModel = new Node_Node(node);
        external_vue_default.a.set(this.nodes, nodeModel.id, nodeModel);
      },
      addLink: function addLink(link) {
        var linkModel = new Link_Link(link);
        external_vue_default.a.set(this.links, linkModel.id, linkModel);
      },
      deleteNode: function deleteNode(id) {
        var node = this.nodes[id];
        if (this.beforeDeleteNode(node) === false) return;
        external_vue_default.a.delete(this.nodes, id);

        for (var linkId in this.links) {
          if (this.links.hasOwnProperty(linkId)) {
            var link = this.links[linkId];

            if (link.start_id === id || link.end_id === id) {
              external_vue_default.a.delete(this.links, linkId);
            }
          }
        }

        this.$emit('deleted-node', id);
      },
      deleteLink: function deleteLink(id) {
        if (this.beforeDeleteLink(this.links[id]) === false) return;
        external_vue_default.a.delete(this.links, id);
        this.$emit('deleted-link', id);
      },
      selectLink: function selectLink(id) {
        this.selectedLink = id;
      },
      clearSelection: function clearSelection() {
        this.selectedNode = null;
        this.selectedLink = null;
      },
      toggleMoveEventListener: function toggleMoveEventListener(enable) {
        if (enable) {
          document.body.addEventListener('mousemove', this.mouseMove);
          document.body.addEventListener('mouseup', this.mouseUp);
        } else {
          document.body.removeEventListener('mousemove', this.mouseMove);
          document.body.removeEventListener('mouseup', this.mouseUp);
        }
      },
      mouseMove: function mouseMove(pos) {
        if (this.draggedNode || this.resizedNode) {
          this.dragMove({
            gridSnap: this.gridSnap,
            x: pos.x,
            y: pos.y
          });
        } else if (this.activePort) {
          var _this$convertXYtoView = this.convertXYtoViewPort(pos.pageX, pos.pageY),
              x = _this$convertXYtoView.x,
              y = _this$convertXYtoView.y;

          this.currentCursorPos = {
            x: x,
            y: y
          };
        }
      },
      mouseUp: function mouseUp() {
        if (this.draggedNode || this.resizedNode) {
          var id = this.draggedNode || this.resizedNode;
          var node = id ? this.nodes[id] : null;
          var isDragged = !!this.draggedNode;
          var hasChanges = this.draggedNode && !isEqual_default()(DiagramEditorMixin_objectSpread({}, node.coordinates), DiagramEditorMixin_objectSpread({}, this.nodeCoordinatesBeforeDrag)) || this.resizedNode && !isEqual_default()(DiagramEditorMixin_objectSpread({}, node.size), DiagramEditorMixin_objectSpread({}, this.nodeSizeBeforeResize));
          this.dragEnd();

          if (hasChanges) {
            this.$emit('updated-node', node);
          } else if (isDragged) {
            this.selectedNode = id;
          }
        } else if (this.activePort) {
          var activePort = DiagramEditorMixin_objectSpread({}, this.activePort);

          if (this.hoveredPort) {
            var hoveredPort = DiagramEditorMixin_objectSpread({}, this.hoveredPort);

            if (isEqual_default()(activePort, hoveredPort)) {
              this.$emit('click-port', activePort);
            } else {
              if (this.portAvailable(DiagramEditorMixin_objectSpread(DiagramEditorMixin_objectSpread({}, hoveredPort), {}, {
                activePort: activePort
              }))) {
                var link = new Link_Link({
                  start_id: activePort.id,
                  start_port: activePort.port,
                  end_id: hoveredPort.id,
                  end_port: hoveredPort.port
                });
                external_vue_default.a.set(this.links, link.id, link);
                this.$emit('created-link', link);
              }
            }
          }

          this.activePort = null;
          this.currentCursorPos = null;
        }
      },
      serialize: function serialize() {
        return {
          nodes: Object.values(this.nodes).map(function (node) {
            return cloneDeep_default()(node);
          }),
          links: Object.values(this.links).map(function (link) {
            return cloneDeep_default()(link);
          })
        };
      },
      dragStart: function dragStart(_ref) {
        var id = _ref.id,
            offset = _ref.offset,
            type = _ref.type;

        if (type === 'drag') {
          this.draggedNode = id;
          this.resizedNode = null;
        } else if (type === 'resize') {
          this.draggedNode = null;
          this.resizedNode = id;
        }

        this.initialCursorOffset = offset;
      },
      dragMove: function dragMove(_ref2) {
        var _this = this;

        var gridSnap = _ref2.gridSnap,
            x = _ref2.x,
            y = _ref2.y;

        var getCoords = function getCoords(X, Y) {
          var _this$convertXYtoView2 = _this.convertXYtoViewPort(X, Y),
              x = _this$convertXYtoView2.x,
              y = _this$convertXYtoView2.y;

          x = snapToGrip(x, gridSnap) - gridSnap / 2;
          y = snapToGrip(y, gridSnap);
          x -= _this.initialCursorOffset.x;
          y -= _this.initialCursorOffset.y;
          return {
            x: x,
            y: y
          };
        };

        if (this.draggedNode) {
          this.updateNode({
            id: this.draggedNode,
            name: 'coordinates',
            value: new Coordinates(getCoords(x, y))
          });
        }

        if (this.resizedNode) {
          var node = this.nodes[this.resizedNode];
          var coords = getCoords(x, y);
          var size = new Size({
            width: Math.abs(coords.x - node.coordinates.x),
            height: Math.abs(coords.y - node.coordinates.y)
          });

          if (size.width < 30) {
            size.width = 30;
          }

          if (size.height < 30) {
            size.height = 30;
          }

          this.updateNode({
            id: this.resizedNode,
            name: 'size',
            value: size
          });
        }
      },
      dragEnd: function dragEnd() {
        this.draggedNode = null;
        this.resizedNode = null;
      },
      updateNode: function updateNode(_ref3) {
        var id = _ref3.id,
            name = _ref3.name,
            value = _ref3.value;
        external_vue_default.a.set(this.nodes[id], name, Node_Node.prepareProp(name, value));
      }
    }
  };
});
// EXTERNAL MODULE: external "svg-pan-zoom"
var external_svg_pan_zoom_ = __webpack_require__(4);
var external_svg_pan_zoom_default = /*#__PURE__*/__webpack_require__.n(external_svg_pan_zoom_);

// CONCATENATED MODULE: ./src/mixins/SvgPanZoomMixin.js

/* harmony default export */ var SvgPanZoomMixin = (function () {
  return {
    data: function data() {
      return {
        spz: null
      };
    },
    mounted: function mounted() {
      var _this = this;

      this.spz = external_svg_pan_zoom_default()(this.$refs.diagramRoot, {
        viewportSelector: this.$refs.viewPort,
        center: false,
        preventMouseEventsDefault: this.preventMouseEventsDefault,
        beforePan: this.beforePan,
        beforeZoom: function beforeZoom() {
          return _this.zoomEnabled;
        }
      });
    },
    beforeDestroy: function beforeDestroy() {
      if (this.spz) {
        this.spz.destroy();
      }
    },
    methods: {
      enableDblClickZoom: function enableDblClickZoom() {
        if (this.spz) return this.spz.enableDblClickZoom();
      },
      disableDblClickZoom: function disableDblClickZoom() {
        if (this.spz) return this.spz.disableDblClickZoom();
      },
      isDblClickZoomEnabled: function isDblClickZoomEnabled() {
        if (this.spz) return this.spz.isDblClickZoomEnabled();
      },
      enableMouseWheelZoom: function enableMouseWheelZoom() {
        if (this.spz) return this.spz.enableMouseWheelZoom();
      },
      disableMouseWheelZoom: function disableMouseWheelZoom() {
        if (this.spz) return this.spz.disableMouseWheelZoom();
      },
      isMouseWheelZoomEnabled: function isMouseWheelZoomEnabled() {
        if (this.spz) return this.spz.isMouseWheelZoomEnabled();
      },
      resetZoom: function resetZoom() {
        if (this.spz) return this.spz.resetZoom();
      },
      updateBBox: function updateBBox() {
        if (this.spz) return this.spz.updateBBox();
      },
      fit: function fit() {
        if (this.spz) return this.spz.fit();
      },
      contain: function contain() {
        if (this.spz) return this.spz.contain();
      },
      center: function center() {
        if (this.spz) return this.spz.center();
      }
    }
  };
});
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DiagramRoot.vue?vue&type=script&lang=js&






/* harmony default export */ var DiagramRootvue_type_script_lang_js_ = ({
  name: 'DiagramRoot',
  components: {
    DiagramNode: DiagramNode,
    DiagramLink: DiagramLink
  },
  mixins: [DiagramEditorMixin(), SvgPanZoomMixin()],
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      required: true
    },
    gridSnap: {
      type: Number,
      required: true
    },
    zoomEnabled: {
      type: Boolean,
      required: true
    },
    nodeColor: {
      type: Function,
      required: true
    },
    nodePulseColor: {
      type: Function,
      required: true
    },
    nodePulsable: {
      type: Function,
      required: true
    },
    nodeDeletable: {
      type: Function,
      required: true
    },
    beforeDeleteNode: {
      type: Function,
      required: true
    },
    beforeDeleteLink: {
      type: Function,
      required: true
    },
    portDisabled: {
      type: Function,
      required: true
    },
    portAvailable: {
      type: Function,
      required: true
    },
    pan: {
      type: Boolean,
      required: true
    },
    preventMouseEventsDefault: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    uniqId: function uniqId() {
      return Object(external_ulid_["ulid"])();
    }
  },
  mounted: function mounted() {
    document.addEventListener('keydown', this.keyDownHandler);
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('keydown', this.keyDownHandler);
  },
  methods: {
    keyDownHandler: function keyDownHandler(e) {
      if (e.keyCode === 46) {
        if (this.selectedNode && this.nodeDeletable(this.nodes[this.selectedNode])) {
          this.deleteNode(this.selectedNode);
        }

        if (this.selectedLink) {
          this.deleteLink(this.selectedLink);
        }
      }

      if (e.keyCode === 27) {
        this.clearSelection();
      }
    },
    convertXYtoViewPort: function convertXYtoViewPort(x, y) {
      var root = this.$refs.diagramRoot;
      var viewport = this.$refs.viewPort;
      var point = root.createSVGPoint();
      var rootPosition = getAbsoluteXY(root);
      point.x = x - rootPosition.x;
      point.y = y - rootPosition.y;
      var ctm = viewport.getCTM().inverse();
      return point.matrixTransform(ctm);
    },
    onNodeDragStart: function onNodeDragStart(_ref) {
      var node = _ref.node,
          eX = _ref.eX,
          eY = _ref.eY;

      var _this$convertXYtoView = this.convertXYtoViewPort(eX, eY),
          x = _this$convertXYtoView.x,
          y = _this$convertXYtoView.y;

      this.dragStart({
        type: 'drag',
        id: node.id,
        offset: {
          x: Math.round(x - node.x),
          y: Math.round(y - node.y)
        }
      });
    },
    onNodeResizeStart: function onNodeResizeStart(_ref2) {
      var node = _ref2.node,
          eX = _ref2.eX,
          eY = _ref2.eY;

      var _this$convertXYtoView2 = this.convertXYtoViewPort(eX, eY),
          x = _this$convertXYtoView2.x,
          y = _this$convertXYtoView2.y;

      this.dragStart({
        type: 'resize',
        id: node.id,
        offset: {
          x: -Math.round(node.x + node.width - x),
          y: -Math.round(node.y + node.height - y)
        }
      });
    },
    setActivePort: function setActivePort(port) {
      this.activePort = port;
    },
    setHoveredPort: function setHoveredPort(port) {
      this.hoveredPort = port;
    }
  }
});
// CONCATENATED MODULE: ./src/components/DiagramRoot.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_DiagramRootvue_type_script_lang_js_ = (DiagramRootvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/DiagramRoot.vue





/* normalize component */

var DiagramRoot_component = normalizeComponent(
  components_DiagramRootvue_type_script_lang_js_,
  DiagramRootvue_type_template_id_20c2cfd5_render,
  DiagramRootvue_type_template_id_20c2cfd5_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var DiagramRoot_api; }
DiagramRoot_component.options.__file = "src/components/DiagramRoot.vue"
/* harmony default export */ var DiagramRoot = (DiagramRoot_component.exports);
// EXTERNAL MODULE: external "lodash/throttle"
var throttle_ = __webpack_require__(5);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle_);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Diagram.vue?vue&type=script&lang=js&


/* harmony default export */ var Diagramvue_type_script_lang_js_ = ({
  name: "Diagram",
  components: {
    DiagramRoot: DiagramRoot
  },
  props: {
    height: {
      type: Number,
      default: 500
    },
    gridSnap: {
      type: Number,
      default: 1
    },
    zoomEnabled: {
      type: Boolean,
      default: true
    },
    nodeColor: {
      type: Function,
      default: function _default() {
        return "#66cc00";
      }
    },
    nodePulseColor: {
      type: Function,
      default: function _default() {
        return '#f00';
      }
    },
    nodePulsable: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    nodeDeletable: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    beforeDeleteNode: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    beforeDeleteLink: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    portDisabled: {
      type: Function,
      default: function _default() {
        return false;
      }
    },
    portAvailable: {
      type: Function,
      default: function _default() {
        return true;
      }
    },
    pan: {
      type: Boolean,
      default: true
    },
    preventMouseEventsDefault: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      width: null
    };
  },
  mounted: function mounted() {
    window.addEventListener('resize', this.updateWrapperWidth);
    this.updateWrapperWidth();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.updateWrapperWidth);
  },
  methods: {
    updateWrapperWidth: throttle_default()(function () {
      var _this$$el$getBounding = this.$el.getBoundingClientRect(),
          width = _this$$el$getBounding.width;

      this.width = width;
    }, 100),
    setModel: function setModel(model) {
      this.$refs.diagram.setModel(model);
    },
    serialize: function serialize() {
      return this.$refs.diagram.serialize();
    },
    addNode: function addNode(node) {
      this.$refs.diagram.addNode(node);
    },
    addLink: function addLink(link) {
      this.$refs.diagram.addLink(link);
    },
    updateNode: function updateNode(_ref) {
      var id = _ref.id,
          name = _ref.name,
          value = _ref.value;
      this.$refs.diagram.updateNode({
        id: id,
        name: name,
        value: value
      });
    },
    deleteNode: function deleteNode(id) {
      this.$refs.diagram.deleteNode(id);
    },
    deleteLink: function deleteLink(id) {
      this.$refs.diagram.deleteLink(id);
    },
    enableDblClickZoom: function enableDblClickZoom() {
      return this.$refs.diagram.enableDblClickZoom();
    },
    disableDblClickZoom: function disableDblClickZoom() {
      return this.$refs.diagram.disableDblClickZoom();
    },
    isDblClickZoomEnabled: function isDblClickZoomEnabled() {
      return this.$refs.diagram.isDblClickZoomEnabled();
    },
    enableMouseWheelZoom: function enableMouseWheelZoom() {
      return this.$refs.diagram.enableMouseWheelZoom();
    },
    disableMouseWheelZoom: function disableMouseWheelZoom() {
      return this.$refs.diagram.disableMouseWheelZoom();
    },
    isMouseWheelZoomEnabled: function isMouseWheelZoomEnabled() {
      return this.$refs.diagram.isMouseWheelZoomEnabled();
    },
    resetZoom: function resetZoom() {
      return this.$refs.diagram.resetZoom();
    },
    updateBBox: function updateBBox() {
      return this.$refs.diagram.updateBBox();
    },
    fit: function fit() {
      return this.$refs.diagram.fit();
    },
    contain: function contain() {
      return this.$refs.diagram.contain();
    },
    center: function center() {
      return this.$refs.diagram.center();
    }
  }
});
// CONCATENATED MODULE: ./src/components/Diagram.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Diagramvue_type_script_lang_js_ = (Diagramvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/components/Diagram.vue





/* normalize component */

var Diagram_component = normalizeComponent(
  components_Diagramvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var Diagram_api; }
Diagram_component.options.__file = "src/components/Diagram.vue"
/* harmony default export */ var Diagram = (Diagram_component.exports);
// EXTERNAL MODULE: ./src/style.scss
var style = __webpack_require__(6);

// CONCATENATED MODULE: ./src/index.js







/* harmony default export */ var src = __webpack_exports__["default"] = (Diagram);

/***/ })
/******/ ]);
//# sourceMappingURL=vue-diagram-editor.cjs.js.map
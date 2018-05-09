// { "framework": "Vue"} 

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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = {
  "header": {
    "height": "600"
  },
  "poster": {
    "width": "750",
    "height": "520",
    "backgroundColor": "#BBBBBB"
  },
  "profile": {
    "position": "absolute",
    "width": "185",
    "height": "185",
    "right": "40",
    "bottom": 0,
    "backgroundColor": "#AAAAAA",
    "borderWidth": "4",
    "borderColor": "#F5F5F5"
  },
  "name": {
    "position": "absolute",
    "right": "250",
    "bottom": "105",
    "fontSize": "36",
    "color": "#FFFFFF"
  },
  "moment": {
    "borderBottomWidth": "1",
    "borderBottomColor": "#DDDDDD",
    "paddingTop": "20",
    "paddingBottom": "20",
    "flexDirection": "row"
  },
  "author-profile": {
    "width": "95",
    "height": "95",
    "backgroundColor": "#D4D4D4",
    "marginLeft": "25",
    "marginRight": "15"
  },
  "link-text": {
    "color": "#576B95"
  },
  "author-name": {
    "fontSize": "30",
    "paddingTop": "8",
    "paddingBottom": "8"
  },
  "moment-content": {
    "width": "580",
    "fontSize": "30",
    "lineHeight": "40",
    "paddingTop": "5",
    "paddingBottom": "18",
    "color": "#353535"
  },
  "moment-pictures": {
    "flexDirection": "row",
    "paddingBottom": "8"
  },
  "picture": {
    "width": "450",
    "height": "260"
  },
  "moment-share": {
    "width": "580",
    "flexDirection": "row",
    "paddingLeft": "10",
    "paddingRight": "10",
    "paddingTop": "8",
    "paddingBottom": "8",
    "backgroundColor": "#EEEEEE"
  },
  "share-thumbnail": {
    "width": "85",
    "height": "85",
    "backgroundColor": "#DDDDDD"
  },
  "share-title": {
    "fontSize": "28",
    "color": "#232323",
    "marginTop": "25",
    "marginLeft": "15"
  },
  "moment-info": {
    "position": "relative",
    "paddingTop": "20",
    "height": "50",
    "width": "580",
    "flexDirection": "row"
  },
  "moment-time": {
    "color": "#999999",
    "fontSize": "24"
  },
  "moment-operation": {
    "marginLeft": "20",
    "fontSize": "24"
  },
  "moment-feedback": {
    "position": "absolute",
    "right": 0,
    "bottom": 0,
    "width": "45",
    "height": "32"
  },
  "moment-arrow": {
    "width": "30",
    "height": "12",
    "marginTop": "20",
    "marginLeft": "30"
  },
  "moment-likes": {
    "width": "580",
    "backgroundColor": "#F2F2F2",
    "paddingLeft": "20",
    "paddingRight": "10"
  },
  "like-list": {
    "paddingTop": "10",
    "paddingBottom": "10",
    "fontSize": "28",
    "lineHeight": "38"
  },
  "comment-list": {
    "width": "580",
    "borderTopWidth": "1",
    "borderTopColor": "#DDDDDD",
    "backgroundColor": "#F2F2F2",
    "paddingLeft": "20",
    "paddingRight": "10",
    "paddingTop": "5",
    "paddingBottom": "15"
  },
  "moment-comment": {
    "paddingTop": "6"
  },
  "comment-text": {
    "fontSize": "28",
    "lineHeight": "40",
    "color": "#454545"
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var mockMoments = [{
  author: {
    profile: 'http://img.qqzhi.com/upload/img_0_264028261D222908825_23.jpg',
    name: '孔明'
  },
  content: '精心整理，大家帮忙点个赞！',
  media: {
    share: {
      link: 'xxx',
      title: '手把手教你制作孔明灯，五分钟学会！',
      thumbnail: 'http://d9.yihaodianimg.com/N01/M08/1D/63/CgQCrlKsgAWAbKvCAAG6a3qH_po82600_380x380.jpg'
    }
  },
  time: '37 分钟前',
  from: '微博',
  likes: ['刘备', '黄月英', '孙尚香', '关羽', '大乔', '小乔', '貂蝉', '甄宓', '曹植', '蔡文姬', '吕布', '张春华', '赵云'],
  comments: [{
    author: '赵云',
    content: '丞相，有好多妹子给你点赞啊'
  }]
}, {
  author: {
    profile: 'http://img.mp.itc.cn/upload/20170214/db4a4f8b20ba404ba2c8bc0f230de87b_th.jpg',
    name: '刘备'
  },
  content: '勿以恶小而为之，勿以善小而不为。',
  media: {
    pictures: ['http://a2.att.hudong.com/87/21/19300001392461132643211668226.jpg']
  },
  time: '1 小时前',
  likes: ['刘禅', '孔明', '云长', '翼德', '孙权', '马超'],
  comments: [{
    author: '刘禅',
    content: '爸比，你说的太好啦，这是我的人生格言！'
  }, {
    author: '尚香♥',
    content: '哇塞好帅，图是我拍的 (ღˇ◡ˇღ)'
  }, {
    author: '刘备',
    reply: '刘禅',
    content: '以后每天早上抄十遍'
  }, {
    author: '孔明',
    content: '主公微言大义，定会被后人广为传颂 👍'
  }]
}, {
  author: {
    profile: 'http://img307.ph.126.net/TcF7wq1cxoyqq54ubF-rXg%3D%3D/3783868111921385084.jpg',
    name: '云长'
  },
  content: '还是大哥见多识广，这些年来跟着大哥学到了很多东西，开阔了视野，感恩。',
  media: {
    pictures: ['http://upload-images.jianshu.io/upload_images/6533694-fa08245e10968665.jpg']
  },
  time: '2 小时前',
  from: '微博',
  likes: ['刘备', '孔明', '赵云'],
  comments: [{
    author: '翼德',
    content: '这是什么东西，为什么大哥没给我看过？！'
  }, {
    author: '刘备',
    reply: '翼德',
    content: '快来看，我们在三号帐篷附近'
  }]
}];
exports.default = {
  data: function data() {
    return {
      currentUser: {
        name: '刘备',
        profile: 'http://img.mp.itc.cn/upload/20170214/db4a4f8b20ba404ba2c8bc0f230de87b_th.jpg',
        poster: 'http://pic.fayi.com.cn/Upload/origin/123/62123.jpg'
      },
      moments: mockMoments
    };
  }
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["wrapper"]
  }, [_c('cell', {
    staticClass: ["header"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('image', {
    staticClass: ["poster"],
    attrs: {
      "resize": "cover",
      "src": _vm.currentUser.poster
    }
  }), _c('text', {
    staticClass: ["name"]
  }, [_vm._v(_vm._s(_vm.currentUser.name))]), _c('image', {
    staticClass: ["profile"],
    attrs: {
      "resize": "cover",
      "src": _vm.currentUser.profile
    }
  })]), _vm._l((_vm.moments), function(moment, i) {
    return _c('cell', {
      key: i,
      staticClass: ["moment"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('image', {
      staticClass: ["author-profile"],
      attrs: {
        "resize": "cover",
        "src": moment.author.profile
      }
    }), _c('div', {
      staticClass: ["main"]
    }, [_c('text', {
      staticClass: ["author-name", "link-text"]
    }, [_vm._v(_vm._s(moment.author.name))]), _c('text', {
      staticClass: ["moment-content"]
    }, [_vm._v(_vm._s(moment.content))]), (moment.media) ? _c('div', {
      staticClass: ["moment-media"]
    }, [(moment.media.pictures && moment.media.pictures.length) ? _c('div', {
      staticClass: ["moment-pictures"]
    }, _vm._l((moment.media.pictures), function(src, p) {
      return _c('image', {
        key: p,
        staticClass: ["picture"],
        attrs: {
          "src": src
        }
      })
    })) : _vm._e(), (moment.media.share) ? _c('div', {
      staticClass: ["moment-share"]
    }, [_c('image', {
      staticClass: ["share-thumbnail"],
      attrs: {
        "src": moment.media.share.thumbnail
      }
    }), _c('text', {
      staticClass: ["share-title"]
    }, [_vm._v(_vm._s(moment.media.share.title))])]) : _vm._e()]) : _vm._e(), (moment.location) ? _c('text', {
      staticClass: ["location"]
    }, [_vm._v(_vm._s(moment.location))]) : _vm._e(), _c('div', {
      staticClass: ["moment-info"]
    }, [(moment.time) ? _c('text', {
      staticClass: ["moment-time"]
    }, [_vm._v(_vm._s(moment.time))]) : _vm._e(), (moment.author.name === _vm.currentUser.name) ? _c('text', {
      staticClass: ["moment-operation", "link-text"]
    }, [_vm._v("删除")]) : _vm._e(), _c('image', {
      staticClass: ["moment-feedback"],
      attrs: {
        "src": "https://gw.alicdn.com/tfs/TB1_POLc3MPMeJjy1XcXXXpppXa-66-46.png"
      }
    })]), (moment.likes || moment.comments) ? _c('image', {
      staticClass: ["moment-arrow"],
      attrs: {
        "src": "https://gw.alicdn.com/tfs/TB1F0OLc3oQMeJjy0FnXXb8gFXa-30-12.png"
      }
    }) : _vm._e(), (moment.likes && moment.likes.length) ? _c('div', {
      staticClass: ["moment-likes"]
    }, [_c('text', {
      staticClass: ["like-list", "link-text"]
    }, [_vm._v("♡ " + _vm._s(moment.likes.join(', ')))])]) : _vm._e(), (moment.comments && moment.comments.length) ? _c('div', {
      staticClass: ["comment-list"]
    }, _vm._l((moment.comments), function(comment, x) {
      return _c('richtext', {
        key: x,
        staticClass: ["moment-comment"]
      }, [_c('span', {
        staticClass: ["comment-text", "link-text"]
      }, [_vm._v(_vm._s(comment.author))]), (comment.reply) ? _c('span', {
        staticClass: ["comment-text"]
      }, [_vm._v("@")]) : _vm._e(), (comment.reply) ? _c('span', {
        staticClass: ["comment-text", "link-text"]
      }, [_vm._v(_vm._s(comment.reply))]) : _vm._e(), _c('span', {
        staticClass: ["comment-text"]
      }, [_vm._v(":  ")]), _c('span', {
        staticClass: ["comment-text"]
      }, [_vm._v(_vm._s(comment.content))])])
    })) : _vm._e()])])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(5)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(8)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\awesome-project\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3a057818"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "justifyContent": "center",
    "alignItems": "center"
  },
  "logo": {
    "width": "424",
    "height": "200"
  },
  "greeting": {
    "textAlign": "center",
    "marginTop": "70",
    "fontSize": "50",
    "color": "#41B883"
  },
  "message": {
    "marginTop": "30",
    "marginRight": "30",
    "marginBottom": "30",
    "marginLeft": "30",
    "fontSize": "32",
    "color": "#727272"
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HelloWorld = __webpack_require__(7);

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'App',
  components: {
    HelloWorld: _HelloWorld2.default
  },
  data: function data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    };
  }
}; //
//
//
//
//
//

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(0)
)

/* script */
__vue_exports__ = __webpack_require__(1)

/* template */
var __vue_template__ = __webpack_require__(2)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "E:\\awesome-project\\src\\components\\HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-041d7fa8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('HelloWorld')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
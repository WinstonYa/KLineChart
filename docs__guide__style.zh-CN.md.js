(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[33],{QkDc:function(n,o,e){"use strict";e.r(o);var t=e("q1tI"),a=e.n(t),i=e("dEAq"),r=e("H1Ra"),l=a.a.memo((n=>{n.demos;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"\u6837\u5f0f\u914d\u7f6e"},a.a.createElement(i["AnchorLink"],{to:"#\u6837\u5f0f\u914d\u7f6e","aria-hidden":"true",tabIndex:-1},a.a.createElement("span",{className:"icon icon-link"})),"\u6837\u5f0f\u914d\u7f6e"),a.a.createElement("p",null,"\u56fe\u8868\u4e0a\u770b\u5230\u7684\u4e0d\u7ba1\u662f\u70b9\u8fd8\u662f\u7ebf\uff0c\u57fa\u672c\u90fd\u53ef\u4ee5\u81ea\u5b9a\u4e49\u6837\u5f0f\u3002\u53ef\u4ee5\u901a\u8fc7\u56fe\u8868\u65b9\u6cd5",a.a.createElement(i["AnchorLink"],{to:"/zh-CN/api#initds-options"},"init(ds, options)"),"\u6216\u8005\u56fe\u8868\u5b9e\u4f8b\u65b9\u6cd5",a.a.createElement(i["AnchorLink"],{to:"/zh-CN/api/instance#setstyleoptionsoptions"},"setStyleOptions(options)"),"\u8fdb\u884c\u66f4\u6539\u3002"),a.a.createElement(r["a"],{code:"{\n  // \u7f51\u683c\u7ebf\n  grid: {\n    show: true,\n    // \u7f51\u683c\u6c34\u5e73\u7ebf\n    horizontal: {\n      show: true,\n      size: 1,\n      color: '#393939',\n      // 'solid'|'dash'\n      style: 'dash',\n      dashValue: [2, 2]\n    },\n   \t// \u7f51\u683c\u5782\u76f4\u7ebf\n    vertical: {\n      show: false,\n      size: 1,\n      color: '#393939',\n      // 'solid'|'dash'\n      style: 'dash',\n      dashValue: [2, 2]\n    }\n  },\n  // \u8721\u70db\u56fe\n  candle: {\n    // \u8721\u70db\u56fe\u4e0a\u4e0b\u95f4\u8ddd\uff0c\u5927\u4e8e1\u4e3a\u7edd\u5bf9\u503c\uff0c\u5927\u4e8e0\u5c0f\u4f591\u5219\u4e3a\u6bd4\u4f8b\n    margin: {\n      top: 0.2,\n      bottom: 0.1\n    },\n    // \u8721\u70db\u56fe\u7c7b\u578b 'candle_solid'|'candle_stroke'|'candle_up_stroke'|'candle_down_stroke'|'ohlc'|'area'\n    type: 'candle_solid',\n    // \u8721\u70db\u67f1\n    bar: {\n      upColor: '#26A69A',\n      downColor: '#EF5350',\n      noChangeColor: '#888888'\n    },\n    // \u9762\u79ef\u56fe\n    area: {\n      lineSize: 2,\n      lineColor: '#2196F3',\n      value: 'close',\n      backgroundColor: [{\n        offset: 0,\n        color: 'rgba(33, 150, 243, 0.01)'\n      }, {\n        offset: 1,\n        color: 'rgba(33, 150, 243, 0.2)'\n      }]\n    },\n    priceMark: {\n      show: true,\n      // \u6700\u9ad8\u4ef7\u6807\u8bb0\n      high: {\n        show: true,\n        color: '#D9D9D9',\n        textMargin: 5,\n        textSize: 10,\n        textFamily: 'Helvetica Neue',\n        textWeight: 'normal'\n      },\n      // \u6700\u4f4e\u4ef7\u6807\u8bb0\n      low: {\n        show: true,\n        color: '#D9D9D9',\n        textMargin: 5,\n        textSize: 10,\n        textFamily: 'Helvetica Neue',\n        textWeight: 'normal',\n      },\n      // \u6700\u65b0\u4ef7\u6807\u8bb0\n      last: {\n        show: true,\n        upColor: '#26A69A',\n        downColor: '#EF5350',\n        noChangeColor: '#888888',\n        line: {\n          show: true,\n          // 'solid'|'dash'\n          style: 'dash',\n          dashValue: [4, 4],\n          size: 1\n        },\n        text: {\n          show: true,\n          size: 12,\n          paddingLeft: 2,\n          paddingTop: 2,\n          paddingRight: 2,\n          paddingBottom: 2,\n          color: '#FFFFFF',\n          family: 'Helvetica Neue',\n          weight: 'normal',\n          borderRadius: 2\n        }\n      }\n    },\n    // \u63d0\u793a\n    tooltip: {\n      // 'always' | 'follow_cross' | 'none'\n      showRule: 'always',\n      // 'standard' | 'rect'\n      showType: 'standard',\n      labels: ['\u65f6\u95f4', '\u5f00', '\u6536', '\u9ad8', '\u4f4e', '\u6210\u4ea4\u91cf'],\n      values: null,\n      defaultValue: 'n/a',\n      rect: {\n        paddingLeft: 0,\n        paddingRight: 0,\n        paddingTop: 0,\n        paddingBottom: 6,\n        offsetLeft: 8,\n        offsetTop: 8,\n        offsetRight: 8,\n        borderRadius: 4,\n        borderSize: 1,\n        borderColor: '#3f4254',\n        backgroundColor: 'rgba(17, 17, 17, .3)'\n      },\n      text: {\n        size: 12,\n        family: 'Helvetica Neue',\n        weight: 'normal',\n        color: '#D9D9D9',\n        marginLeft: 8,\n        marginTop: 6,\n        marginRight: 8,\n        marginBottom: 0\n      }\n    }\n  },\n  // \u6280\u672f\u6307\u6807\n  technicalIndicator: {\n    margin: {\n      top: 0.2,\n      bottom: 0.1\n    },\n    bar: {\n      upColor: '#26A69A',\n      downColor: '#EF5350',\n      noChangeColor: '#888888'\n    },\n    line: {\n      size: 1,\n      colors: ['#FF9600', '#9D65C9', '#2196F3', '#E11D74', '#01C5C4']\n    },\n    circle: {\n      upColor: '#26A69A',\n      downColor: '#EF5350',\n      noChangeColor: '#888888'\n    },\n    // \u6700\u65b0\u503c\u6807\u8bb0\n    lastValueMark: {\n      show: false,\n      text: {\n        show: false,\n        color: '#ffffff',\n        size: 12,\n        family: 'Helvetica Neue',\n        weight: 'normal',\n        paddingLeft: 3,\n        paddingTop: 2,\n        paddingRight: 3,\n        paddingBottom: 2,\n        borderRadius: 2\n      }\n    },\n    // \u63d0\u793a\n    tooltip: {\n      // 'always' | 'follow_cross' | 'none'\n      showRule: 'always',\n      // 'standard' | 'rect'\n      showType: 'standard',\n      showName: true,\n      showParams: true,\n      defaultValue: 'n/a',\n      text: {\n        size: 12,\n        family: 'Helvetica Neue',\n        weight: 'normal',\n        color: '#D9D9D9',\n        marginTop: 6,\n        marginRight: 8,\n        marginBottom: 0,\n        marginLeft: 8\n      }\n    }\n  },\n  // x\u8f74\n  xAxis: {\n    show: true,\n    height: null,\n    // x\u8f74\u7ebf\n    axisLine: {\n      show: true,\n      color: '#888888',\n      size: 1\n    },\n    // x\u8f74\u5206\u5272\u6587\u5b57\n    tickText: {\n      show: true,\n      color: '#D9D9D9',\n      family: 'Helvetica Neue',\n      weight: 'normal',\n      size: 12,\n      paddingTop: 3,\n      paddingBottom: 6\n    },\n    // x\u8f74\u5206\u5272\u7ebf\n    tickLine: {\n      show: true,\n      size: 1,\n      length: 3,\n      color: '#888888'\n    }\n  },\n  // y\u8f74\n  yAxis: {\n    show: true,\n    width: null,\n    // 'left' | 'right'\n    position: 'right',\n    // 'normal' | 'percentage' | 'log'\n    type: 'normal',\n    inside: false,\n    // y\u8f74\u7ebf\n    axisLine: {\n      show: true,\n      color: '#888888',\n      size: 1\n    },\n    // x\u8f74\u5206\u5272\u6587\u5b57\n    tickText: {\n      show: true,\n      color: '#D9D9D9',\n      family: 'Helvetica Neue',\n      weight: 'normal',\n      size: 12,\n      paddingLeft: 3,\n      paddingRight: 6\n    },\n    // x\u8f74\u5206\u5272\u7ebf\n    tickLine: {\n      show: true,\n      size: 1,\n      length: 3,\n      color: '#888888'\n    }\n  },\n  // \u56fe\u8868\u4e4b\u95f4\u7684\u5206\u5272\u7ebf\n  separator: {\n    size: 1,\n    color: '#888888',\n    fill: true,\n    activeBackgroundColor: 'rgba(230, 230, 230, .15)'\n  },\n  // \u5341\u5b57\u5149\u6807\n  crosshair: {\n    show: true,\n    // \u5341\u5b57\u5149\u6807\u6c34\u5e73\u7ebf\u53ca\u6587\u5b57\n    horizontal: {\n      show: true,\n      line: {\n        show: true,\n        // 'solid'|'dash'\n        style: 'dash',\n        dashValue: [4, 2],\n        size: 1,\n        color: '#888888'\n      },\n      text: {\n        show: true,\n        color: '#D9D9D9',\n        size: 12,\n        family: 'Helvetica Neue',\n        weight: 'normal',\n        paddingLeft: 2,\n        paddingRight: 2,\n        paddingTop: 2,\n        paddingBottom: 2,\n        borderSize: 1,\n        borderColor: '#505050',\n        borderRadius: 2,\n        backgroundColor: '#505050'\n      }\n    },\n    // \u5341\u5b57\u5149\u6807\u5782\u76f4\u7ebf\u53ca\u6587\u5b57\n    vertical: {\n      show: true,\n      line: {\n        show: true,\n        // 'solid'|'dash'\n        style: 'dash',\n        dashValue: [4, 2],\n        size: 1,\n        color: '#888888'\n      },\n      text: {\n        show: true,\n        color: '#D9D9D9',\n        size: 12,\n        family: 'Helvetica Neue',\n        weight: 'normal',\n        paddingLeft: 2,\n        paddingRight: 2,\n        paddingTop: 2,\n        paddingBottom: 2,\n        borderSize: 1,\n        borderColor: '#505050',\n        borderRadius: 2,\n        backgroundColor: '#505050'\n      }\n    }\n  },\n  // \u56fe\u5f62\n  shape: {\n    point: {\n      backgroundColor: '#2196F3',\n      borderColor: '#2196F3',\n      borderSize: 1,\n      radius: 4,\n      activeBackgroundColor: '#2196F3',\n      activeBorderColor: '#2196F3',\n      activeBorderSize: 1,\n      activeRadius: 6\n    },\n    line: {\n      // 'solid'|'dash'\n      style: 'solid'\n      color: '#2196F3',\n      size: 1,\n      dashValue: [2, 2]\n    },\n    polygon: {\n      // 'stroke'|'fill'\n      style: 'stroke',\n      stroke: {\n        // 'solid'|'dash'\n        style: 'solid',\n        size: 1,\n        color: '#2196F3',\n        dashValue: [2, 2]\n      },\n      fill: {\n        color: 'rgba(33, 150, 243, 0.1)'\n      }\n    },\n    arc: {\n      // 'stroke'|'fill'\n      style: 'stroke',\n      stroke: {\n        // 'solid'|'dash'\n        style: 'solid',\n        size: 1,\n        color: '#2196F3',\n        dashValue: [2, 2]\n      },\n      fill: {\n        color: '#2196F3'\n      }\n    },\n    text: {\n      style: 'fill',\n      color: '#2196F3',\n      size: 12,\n      family: 'Helvetica Neue',\n      weight: 'normal',\n      offset: [0, 0]\n    }\n  },\n  annotation: {\n    // 'top' | 'bottom' | 'point'\n    position: 'top',\n    offset: [20, 0]\n    symbol: {\n      // 'diamond' | 'circle' | 'rect' | 'triangle' | 'custom' | 'none'\n      type: 'diamond',\n      size: 8,\n      color: '#2196F3',\n      activeSize: 10,\n      activeColor: '#FF9600'\n    }\n  },\n  tag: {\n    // 'top' | 'bottom' | 'point'\n    position: 'point',\n    offset: 0,\n    line: {\n      show: true,\n      style: LineStyle.DASH,\n      dashValue: [4, 2],\n      size: 1,\n      color: '#2196F3'\n    },\n    text: {\n      color: '#FFFFFF',\n      backgroundColor: '#2196F3',\n      size: 12,\n      family: 'Helvetica Neue',\n      weight: 'normal',\n      paddingLeft: 2,\n      paddingRight: 2,\n      paddingTop: 2,\n      paddingBottom: 2,\n      borderRadius: 2,\n      borderSize: 1,\n      borderColor: '#2196F3'\n    },\n    mark: {\n      offset: 0,\n      color: '#FFFFFF',\n      backgroundColor: '#2196F3',\n      size: 12,\n      family: 'Helvetica Neue',\n      weight: 'normal',\n      paddingLeft: 2,\n      paddingRight: 2,\n      paddingTop: 2,\n      paddingBottom: 2,\n      borderRadius: 2,\n      borderSize: 1,\n      borderColor: '#2196F3'\n    }\n  }\n}",lang:"js"})))}));o["default"]=n=>{var o=a.a.useContext(i["context"]),e=o.demos;return a.a.useEffect((()=>{var o;null!==n&&void 0!==n&&null!==(o=n.location)&&void 0!==o&&o.hash&&i["AnchorLink"].scrollToAnchor(decodeURIComponent(n.location.hash.slice(1)))}),[]),a.a.createElement(l,{demos:e})}}}]);
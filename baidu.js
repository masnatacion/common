(function() {
	var g = window.passport || {}, d = g.tangramInst || d || window.baidu;
	(function(h) {
		h.apiDomain = {
			staticDomain : (window.location ? ((window.location.protocol
					.toLowerCase() == "http:") ? "http://passport.bdimg.com"
					: "https://passport.baidu.com")
					: ((document.location.protocol.toLowerCase() == "http:") ? "http://passport.bdimg.com"
							: "https://passport.baidu.com"))
		}
	})(g);
	var f = d && d.phoenix;
	var c, d = c = function(h, i) {
		return d.dom ? d.dom(h, i) : null
	};
	d.phoenix = f;
	d.version = "2.0.1.2";
	d.guid = "$BAIDU$";
	d.key = "tangram_guid";
	var b = window[d.guid] = window[d.guid] || {};
	(b.versions || (b.versions = [])).push(d.version);
	d.check = d.check || function() {
	};
	d.merge = function(o, m) {
		var n = o.length, k = 0;
		if (typeof m.length === "number") {
			for (var h = m.length; k < h; k++) {
				o[n++] = m[k]
			}
		} else {
			while (m[k] !== undefined) {
				o[n++] = m[k++]
			}
		}
		o.length = n;
		return o
	};
	d.forEach = function(h, m, l) {
		var k, o, j;
		if (typeof m == "function" && h) {
			o = typeof h.length == "number" ? h.length : h.byteLength;
			if (typeof o == "number") {
				if (Object.prototype.toString.call(h) === "[object Function]") {
					return h
				}
				for (k = 0; k < o; k++) {
					j = h[k] || (h.charAt && h.charAt(k));
					m.call(l || null, j, k, h)
				}
			} else {
				if (typeof h == "number") {
					for (k = 0; k < h; k++) {
						m.call(l || null, k, k, k)
					}
				} else {
					if (typeof h == "object") {
						for (k in h) {
							if (h.hasOwnProperty(k)) {
								m.call(l || null, h[k], k, h)
							}
						}
					}
				}
			}
		}
		return h
	};
	d.lang = d.lang || {};
	d.type = (function() {
		var i = {}, h = [ , "HTMLElement", "Attribute", "Text", , , , ,
				"Comment", "Document", , "DocumentFragment", ], l = "Array Boolean Date Error Function Number RegExp String", j = {
			object : 1,
			"function" : "1"
		}, k = i.toString;
		d.forEach(l.split(" "), function(m) {
			i["[object " + m + "]"] = m.toLowerCase();
			d["is" + m] = function(n) {
				return d.type(n) == m.toLowerCase()
			}
		});
		return function(n) {
			var m = typeof n;
			return !j[m] ? m : n == null ? "null" : n._type_ || i[k.call(n)]
					|| h[n.nodeType] || (n == n.window ? "Window" : "")
					|| "object"
		}
	})();
	d.isDate = function(h) {
		return d.type(h) == "date" && h.toString() != "Invalid Date"
				&& !isNaN(h)
	};
	d.isElement = function(h) {
		return d.type(h) == "HTMLElement"
	};
	d.isEnumerable = function(h) {
		return h != null
				&& (typeof h == "object" || ~Object.prototype.toString.call(h)
						.indexOf("NodeList"))
				&& (typeof h.length == "number"
						|| typeof h.byteLength == "number" || typeof h[0] != "undefined")
	};
	d.isNumber = function(h) {
		return d.type(h) == "number" && isFinite(h)
	};
	d.isPlainObject = function(j) {
		var h, i = Object.prototype.hasOwnProperty;
		if (d.type(j) != "object") {
			return false
		}
		if (j.constructor && !i.call(j, "constructor")
				&& !i.call(j.constructor.prototype, "isPrototypeOf")) {
			return false
		}
		for (h in j) {
		}
		return h === undefined || i.call(j, h)
	};
	d.isObject = function(h) {
		return typeof h === "function" || (typeof h === "object" && h != null)
	};
	d.extend = function(k, o) {
		var l, u, s, h, j, p = 1, m = arguments.length, t = k || {}, q, r;
		d.isBoolean(k) && (p = 2) && (t = o || {});
		!d.isObject(t) && (t = {});
		for (; p < m; p++) {
			u = arguments[p];
			if (d.isObject(u)) {
				for (s in u) {
					h = t[s];
					j = u[s];
					if (h === j) {
						continue
					}
					if (d.isBoolean(k) && k && j
							&& (d.isPlainObject(j) || (q = d.isArray(j)))) {
						if (q) {
							q = false;
							r = h && d.isArray(h) ? h : []
						} else {
							r = h && d.isPlainObject(h) ? h : {}
						}
						t[s] = d.extend(k, r, j)
					} else {
						if (j !== undefined) {
							t[s] = j
						}
					}
				}
			}
		}
		return t
	};
	d.createChain = function(m, k, j) {
		var i = m == "dom" ? "$DOM" : "$" + m.charAt(0).toUpperCase()
				+ m.substr(1);
		var l = Array.prototype.slice;
		var h = d[m] = d[m] || k || function(n) {
			return d.extend(n, d[m].fn)
		};
		h.extend = function(n) {
			var o;
			for (o in n) {
				if (o != "splice") {
					h[o] = function() {
						var r = arguments[0];
						m == "dom" && d.type(r) == "string" && (r = "#" + r);
						var q = h(r);
						var p = q[o].apply(q, l.call(arguments, 1));
						return d.type(p) == "$DOM" ? p.get(0) : p
					}
				}
			}
			return d.extend(d[m].fn, n)
		};
		d[m][i] = d[m][i] || j || function() {
		};
		h.fn = d[m][i].prototype;
		return h
	};
	d.overwrite = function(h, l, k) {
		for (var j = l.length - 1; j > -1; j--) {
			h.prototype[l[j]] = k(l[j])
		}
		return h
	};
	d.createChain("array", function(k) {
		var j = d.array.$Array.prototype, i = Array.prototype, h;
		d.type(k) != "array" && (k = []);
		for (h in j) {
			i[h] || (k[h] = j[h])
		}
		return k
	});
	d.overwrite(d.array.$Array, "concat slice".split(" "), function(h) {
		return function() {
			return d.array(Array.prototype[h].apply(this, arguments))
		}
	});
	d.array.extend({
		unique : function(m) {
			var j = this.length, h = this.slice(0), l, k;
			if ("function" != typeof m) {
				m = function(n, i) {
					return n === i
				}
			}
			while (--j > 0) {
				k = h[j];
				l = j;
				while (l--) {
					if (m(k, h[l])) {
						h.splice(j, 1);
						break
					}
				}
			}
			j = this.length = h.length;
			for (l = 0; l < j; l++) {
				this[l] = h[l]
			}
			return this
		}
	});
	d.query = d.query
			|| function() {
				var h = /^(\w*)#([\w\-\$]+)$/, j = /^#([\w\-\$]+)$/, k = /^\w+$/, i = /^(\w*)\.([\w\-\$]+)$/, l = /^(\.[\w\-\$]+)+$/, n = /\s*,\s*/, p = /\s+/g, q = Array.prototype.slice;
				function m(v, s) {
					var D, C, r, w, u, B, y, A, z = [];
					if (h.test(v)) {
						r = RegExp.$2;
						u = RegExp.$1 || "*";
						d.forEach(s.getElementsByTagName(u), function(t) {
							t.id == r && z.push(t)
						})
					} else {
						if (k.test(v) || v == "*") {
							d.merge(z, s.getElementsByTagName(v))
						} else {
							if (i.test(v)) {
								y = [];
								u = RegExp.$1;
								B = RegExp.$2;
								D = " " + B + " ";
								if (s.getElementsByClassName) {
									y = s.getElementsByClassName(B)
								} else {
									d
											.forEach(
													s.getElementsByTagName("*"),
													function(t) {
														t.className
																&& ~(" "
																		+ t.className + " ")
																		.indexOf(D)
																&& (y.push(t))
													})
								}
								if (u && (u = u.toUpperCase())) {
									d.forEach(y, function(t) {
										t.tagName.toUpperCase() === u
												&& z.push(t)
									})
								} else {
									d.merge(z, y)
								}
							} else {
								if (l.test(v)) {
									A = v.substr(1).split(".");
									d
											.forEach(
													s.getElementsByTagName("*"),
													function(t) {
														if (t.className) {
															D = " "
																	+ t.className
																	+ " ";
															C = true;
															d
																	.forEach(
																			A,
																			function(
																					x) {
																				~D
																						.indexOf(" "
																								+ x
																								+ " ")
																						|| (C = false)
																			});
															C && z.push(t)
														}
													})
								}
							}
						}
					}
					return z
				}
				function o(r, u) {
					var t, v = r, x = "__tangram__", w = [];
					if (!u && j.test(v)
							&& (t = document.getElementById(v.substr(1)))) {
						return [ t ]
					}
					u = u || document;
					if (u.querySelectorAll) {
						if (u.nodeType == 1 && !u.id) {
							u.id = x;
							t = u.querySelectorAll("#" + x + " " + v);
							u.id = ""
						} else {
							t = u.querySelectorAll(v)
						}
						return t
					} else {
						if (!~v.indexOf(" ")) {
							return m(v, u)
						}
						d.forEach(m(v.substr(0, v.indexOf(" ")), u),
								function(s) {
									d.merge(w, o(v.substr(v.indexOf(" ") + 1),
											s))
								})
					}
					return w
				}
				return function(s, u, t) {
					if (!s || typeof s != "string") {
						return t || []
					}
					var r = [];
					s = s.replace(p, " ");
					t && d.merge(r, t) && (t.length = 0);
					d.forEach(s.indexOf(",") > 0 ? s.split(n) : [ s ],
							function(v) {
								d.merge(r, o(v, u))
							});
					return d.merge(t || [], d.array(r).unique())
				}
			}();
	d
			.createChain(
					"dom",
					function(h, i) {
						var k, j = new d.dom.$DOM(i);
						if (!h) {
							return j
						}
						if (h._type_ == "$DOM") {
							return h
						} else {
							if (h.nodeType || h == h.window) {
								j[0] = h;
								j.length = 1;
								return j
							} else {
								if (h.length
										&& j.toString.call(h) != "[object String]") {
									return d.merge(j, h)
								} else {
									if (typeof h == "string") {
										if (h.charAt(0) == "<"
												&& h.charAt(h.length - 1) == ">"
												&& h.length > 2) {
											if (d.dom.createElements) {
												d.merge(j, d.dom
														.createElements(h))
											}
										} else {
											d.query(h, i, j)
										}
									} else {
										if (typeof h == "function") {
											return j.ready ? j.ready(h) : j
										}
									}
								}
							}
						}
						return j
					}, function(h) {
						this.length = 0;
						this._type_ = "$DOM";
						this.context = h || document
					}).extend({
				size : function() {
					return this.length
				},
				splice : function() {
				},
				get : function(h) {
					if (typeof h == "number") {
						return h < 0 ? this[this.length + h] : this[h]
					}
					return Array.prototype.slice.call(this, 0)
				},
				toArray : function() {
					return this.get()
				}
			});
	d.dom.extend({
		each : function(k) {
			d.check("function", "baidu.dom.each");
			var j, h, l = this.length;
			for (j = 0; j < l; j++) {
				h = k.call(this[j], j, this[j], this);
				if (h === false || h == "break") {
					break
				}
			}
			return this
		}
	});
	d.dom
			.extend({
				html : function(q) {
					var k = d.dom, r = d._util_, n = this, o = false, t;
					if (this.size() <= 0) {
						switch (typeof q) {
						case "undefined":
							return undefined;
							break;
						default:
							return n;
							break
						}
					}
					var j = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", p = /<(?:script|style|link)/i, i = new RegExp(
							"<(?:" + j + ")[\\s/>]", "i"), m = /^\s+/, h = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, l = /<([\w:]+)/, s = {
						option : [ 1, "<select multiple='multiple'>",
								"</select>" ],
						legend : [ 1, "<fieldset>", "</fieldset>" ],
						thead : [ 1, "<table>", "</table>" ],
						tr : [ 2, "<table><tbody>", "</tbody></table>" ],
						td : [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
						col : [ 2, "<table><tbody></tbody><colgroup>",
								"</colgroup></table>" ],
						area : [ 1, "<map>", "</map>" ],
						_default : [ 0, "", "" ]
					};
					s.optgroup = s.option;
					s.tbody = s.tfoot = s.colgroup = s.caption = s.thead;
					s.th = s.td;
					if (!d.support.htmlSerialize) {
						s._default = [ 1, "X<div>", "</div>" ]
					}
					d.forEach(n, function(v, u) {
						if (t) {
							return
						}
						var x = k(v);
						switch (typeof q) {
						case "undefined":
							t = (v.nodeType === 1 ? v.innerHTML : undefined);
							return t;
							break;
						case "number":
							q = String(q);
						case "string":
							o = true;
							if (!p.test(q)
									&& (d.support.htmlSerialize || !i.test(q))
									&& (d.support.leadingWhitespace || !m
											.test(q))
									&& !s[(l.exec(q) || [ "", "" ])[1]
											.toLowerCase()]) {
								q = q.replace(h, "<$1></$2>");
								try {
									if (v.nodeType === 1) {
										x.empty();
										v.innerHTML = q
									}
									v = 0
								} catch (w) {
								}
							}
							if (v) {
								n.empty().append(q)
							}
							break;
						case "function":
							o = true;
							x.html(q.call(v, u, x.html()));
							break
						}
					});
					return o ? n : t
				}
			});
	d.support = d.support
			|| function() {
				var k = document.createElement("div"), j, h, i;
				k.innerHTML = '<a href="/a" style="top:1px; float: left; opacity: .55">Tangram</a><input type="checkbox">';
				h = k.getElementsByTagName("A")[0];
				i = k.getElementsByTagName("input")[0];
				i.checked = true;
				j = {
					opacity : h.style.opacity === "0.55",
					cssFloat : !!h.style.cssFloat,
					noCloneChecked : i.cloneNode(true).checked,
					noCloneEvent : true
				};
				if (!k.addEventListener && k.attachEvent && k.fireEvent) {
					k.attachEvent("onclick", function() {
						j.noCloneEvent = false
					});
					k.cloneNode(true).fireEvent("onclick")
				}
				d(function() {
					var o = document.getElementsByTagName("body")[0], m = document
							.createElement("div"), l = document
							.createElement("div"), u = "padding: 0; margin: 0; border: ", t = "left: 0; top: 0; width: 0px; height: 0px; ", q = t
							+ u + "0; visibility: hidden;", v = t + u
							+ "5px solid #000; position: absolute;", x, y, s, n, w;
					m.style.cssText = "position: static;" + q;
					o.insertBefore(m, o.firstChild);
					m.appendChild(l);
					l.style.cssText = "position: absolute;" + q;
					l.innerHTML = '<div style="'
							+ v
							+ 'display: bloack;"><div style="'
							+ u
							+ '0; display: block; overflow: hidden;"></div></div><table style="'
							+ v
							+ '" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';
					x = l.firstChild;
					y = x.firstChild;
					w = x.nextSibling;
					j.hasBorderWidth = y.offsetTop >= 5;
					j.hasTableCellBorderWidth = w.rows[0].cells[0].offsetTop >= 5;
					y.style.position = "fixed";
					y.style.top = "20px";
					j.fixedPosition = y.offsetTop === 20 || y.offsetTop === 15;
					j.deleteExpando = true;
					try {
						delete l.test
					} catch (p) {
						j.deleteExpando = false
					}
					s = document.createElement("select");
					n = s.appendChild(document.createElement("option"));
					s.disabled = true;
					j.optDisabled = !n.disabled;
					j.optSelected = n.selected;
					l.setAttribute("className", "t");
					l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
					var r = l.getElementsByTagName("input")[0];
					j.checkOn = (r.value === "on");
					j.htmlSerialize = !!l.getElementsByTagName("link").length;
					j.leadingWhitespace = (l.firstChild.nodeType === 3);
					j.getSetAttribute = l.className !== "t";
					j.pixelMargin = true;
					l.innerHTML = "";
					l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
					if (window.getComputedStyle) {
						j.pixelMargin = (window.getComputedStyle(l, null) || {}).marginTop !== "1%"
					}
					var r = document.createElement("input");
					r.value = "t";
					r.setAttribute("type", "radio");
					j.radioValue = r.value === "t";
					j.hrefNormalized = (h.getAttribute("href") === "/a");
					j.style = /top/.test(h.getAttribute("style"));
					j.enctype = !!document.createElement("form").enctype;
					o.removeChild(m);
					m = l = x = y = w = null
				});
				return j
			}();
	d.global = d.global || (function() {
		var i = d._global_ = window[d.guid], h = i._ = i._ || {};
		return function(k, l, j) {
			if (typeof l != "undefined") {
				j || (l = typeof h[k] == "undefined" ? l : h[k]);
				h[k] = l
			} else {
				if (k && typeof h[k] == "undefined") {
					h[k] = {}
				}
			}
			return h[k]
		}
	})();
	d._util_ = d._util_ || {};
	d._util_.propFixer = {
		tabindex : "tabIndex",
		readonly : "readOnly",
		"for" : "htmlFor",
		"class" : "className",
		classname : "className",
		maxlength : "maxLength",
		cellspacing : "cellSpacing",
		cellpadding : "cellPadding",
		rowspan : "rowSpan",
		colspan : "colSpan",
		usemap : "useMap",
		frameborder : "frameBorder",
		contenteditable : "contentEditable",
		rboolean : /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i
	};
	!document.createElement("form").enctype
			&& (d._util_.propFixer.enctype = "encoding");
	d._util_.support = d._util_.support
			|| function() {
				var m = document.createElement("div"), l, i, j, h, k;
				m.setAttribute("className", "t");
				m.innerHTML = ' <link/><table></table><a href="/a">a</a><input type="checkbox"/>';
				i = m.getElementsByTagName("A")[0];
				i.style.cssText = "top:1px;float:left;opacity:.5";
				h = document.createElement("select");
				k = h.appendChild(document.createElement("option"));
				j = m.getElementsByTagName("input")[0];
				j.checked = true;
				l = {
					dom : {
						div : m,
						a : i,
						select : h,
						opt : k,
						input : j
					}
				};
				return l
			}();
	d._util_.support.getSetAttribute = d._util_.support.dom.div.className !== "t";
	d._util_.removeAttr = function() {
		var i = d._util_.propFixer, h = /\s+/, j = d._util_.support.getSetAttribute;
		return function(p, n) {
			if (!n || p.nodeType !== 1) {
				return
			}
			var q = n.split(h), o, k;
			for (var m = 0, l; l = q[m]; m++) {
				o = i[l] || l;
				k = i.rboolean.test(l);
				!k && d._util_.attr(p, l, "");
				p.removeAttribute(j ? l : o);
				k && (o in p) && (p[o] = false)
			}
		}
	}();
	d.dom.extend({
		removeAttr : function(h) {
			this.each(function(i, j) {
				d._util_.removeAttr(j, h)
			});
			return this
		}
	});
	d._util_.access = function(m, j, l, n, k) {
		if (m.size() <= 0) {
			return m
		}
		switch (d.type(j)) {
		case "string":
			if (l === undefined) {
				return n.call(m, m[0], j)
			} else {
				m.each(function(i, o) {
					n.call(m, o, j, (d.type(l) === "function" ? l.call(o, i, n
							.call(m, o, j)) : l), k)
				})
			}
			break;
		case "object":
			for ( var h in j) {
				d._util_.access(m, h, j[h], n, l)
			}
			break
		}
		return m
	};
	d._util_.isXML = function(i) {
		var h = (i ? i.ownerDocument || i : 0).documentElement;
		return h ? h.nodeName !== "HTML" : false
	};
	d.browser = d.browser
			|| function() {
				var i = navigator.userAgent;
				var h = {
					isStrict : document.compatMode == "CSS1Compat",
					isGecko : /gecko/i.test(i) && !/like gecko/i.test(i),
					isWebkit : /webkit/i.test(i)
				};
				try {
					/(\d+\.\d+)/.test(external.max_version)
							&& (h.maxthon = +RegExp["\x241"])
				} catch (j) {
				}
				switch (true) {
				case /msie (\d+\.\d+)/i.test(i):
					h.ie = document.documentMode || +RegExp["\x241"];
					break;
				case /chrome\/(\d+\.\d+)/i.test(i):
					h.chrome = +RegExp["\x241"];
					break;
				case /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(i)
						&& !/chrome/i.test(i):
					h.safari = +(RegExp["\x241"] || RegExp["\x242"]);
					break;
				case /firefox\/(\d+\.\d+)/i.test(i):
					h.firefox = +RegExp["\x241"];
					break;
				case /opera(?:\/| )(\d+(?:\.\d+)?)(.+?(version\/(\d+(?:\.\d+)?)))?/i
						.test(i):
					h.opera = +(RegExp["\x244"] || RegExp["\x241"]);
					break
				}
				d.extend(d, h);
				return h
			}();
	d.id = function() {
		var i = d.global("_maps_id"), h = d.key;
		window[d.guid]._counter = window[d.guid]._counter || 1;
		return function(k, n) {
			var m, l = d.isString(k), j = d.isObject(k), o = j ? k[h] : l ? k
					: "";
			if (d.isString(n)) {
				switch (n) {
				case "get":
					return j ? o : i[o];
				case "remove":
				case "delete":
					if (m = i[o]) {
						if (d.isElement(m) && d.browser.ie < 8) {
							m.removeAttribute(h)
						} else {
							delete m[h]
						}
						delete i[o]
					}
					return o;
				default:
					if (l) {
						(m = i[o]) && delete i[o];
						m && (i[m[h] = n] = m)
					} else {
						if (j) {
							o && delete i[o];
							i[k[h] = n] = k
						}
					}
					return n
				}
			}
			if (j) {
				!o && (i[k[h] = o = d.id()] = k);
				return o
			} else {
				if (l) {
					return i[k]
				}
			}
			return "TANGRAM__PSP_" + d._global_._counter++
		}
	}();
	d.id.key = "tangram_guid";
	d
			.createChain("string",
					function(h) {
						var i = d.type(h), k = new String(~"string|number"
								.indexOf(i) ? h : i), j = String.prototype;
						d.forEach(d.string.$String.prototype, function(m, l) {
							j[l] || (k[l] = m)
						});
						return k
					});
	d.string.extend({
		getByteLength : function() {
			return this.replace(/[^\x00-\xff]/g, "ci").length
		}
	});
	d.string
			.extend({
				trim : function() {
					var h = new RegExp(
							"(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+\x24)",
							"g");
					return function() {
						return this.replace(h, "")
					}
				}()
			});
	d.dom.extend({
		addClass : function(k) {
			if (!arguments.length) {
				return this
			}
			var j = typeof k, i = " ";
			if (j == "string") {
				k = d.string.trim(k);
				var h = k.split(" ");
				d.forEach(this, function(n, l) {
					var o = n.className;
					for (var m = 0; m < h.length; m++) {
						if (!~(i + o + i).indexOf(i + h[m] + i)) {
							o += " " + h[m]
						}
					}
					n.className = o.replace(/^\s+/g, "")
				})
			} else {
				if (j == "function") {
					d.forEach(this, function(m, l) {
						d.dom(m).addClass(k.call(m, l, m.className))
					})
				}
			}
			return this
		}
	});
	d.dom.extend({
		removeClass : function(k) {
			var j = typeof k, i = " ";
			if (!arguments.length) {
				d.forEach(this, function(l) {
					l.className = ""
				})
			}
			if (j == "string") {
				k = d.string.trim(k);
				var h = k.split(" ");
				d.forEach(this, function(m) {
					var n = m.className;
					for (var l = 0; l < h.length; l++) {
						while (~(i + n + i).indexOf(i + h[l] + i)) {
							n = (i + n + i).replace(i + h[l] + i, i)
						}
					}
					m.className = d.string.trim(n)
				})
			} else {
				if (j == "function") {
					d.forEach(this, function(n, l, m) {
						d.dom(n).removeClass(k.call(n, l, n.className))
					})
				}
			}
			return this
		}
	});
	d.dom
			.extend({
				getComputedStyle : function(i) {
					var j = this[0].ownerDocument.defaultView, h = j
							&& j.getComputedStyle
							&& j.getComputedStyle(this[0], null), k = h ? (h
							.getPropertyValue(i) || h[i]) : "";
					return k || this[0].style[i]
				}
			});
	d.dom.extend({
		getCurrentStyle : function() {
			var h = document.documentElement.currentStyle ? function(i) {
				return this[0].currentStyle ? this[0].currentStyle[i]
						: this[0].style[i]
			} : function(i) {
				return this.getComputedStyle(i)
			};
			return function(i) {
				return h.call(this, i)
			}
		}()
	});
	d.dom.extend({
		getDocument : function() {
			if (this.size() <= 0) {
				return undefined
			}
			var h = this[0];
			return h.nodeType == 9 ? h : h.ownerDocument || h.document
		}
	});
	d._util_.contains = document.compareDocumentPosition ? function(h, i) {
		return !!(h.compareDocumentPosition(i) & 16)
	} : function(h, i) {
		if (h === i) {
			return false
		}
		if (h.contains && i.contains) {
			return h.contains(i)
		} else {
			while (i = i.parentNode) {
				if (i === h) {
					return true
				}
			}
			return false
		}
	};
	d.dom.extend({
		show : function() {
			var h = {};
			function i(k) {
				if (h[k]) {
					return h[k]
				}
				var l = document.createElement(k), n, m, j;
				document.body.appendChild(l);
				n = d.dom(l).getCurrentStyle("display");
				document.body.removeChild(l);
				if (n === "" || n === "none") {
					m = document.body.appendChild(document
							.createElement("iframe"));
					m.frameBorder = m.width = m.height = 0;
					j = (m.contentWindow || m.contentDocument).document;
					j.writeln("<!DOCTYPE html><html><body>");
					j.close();
					l = j.appendChild(j.createElement(k));
					n = d.dom(l).getCurrentStyle("display");
					document.body.removeChild(m);
					m = null
				}
				l = null;
				return h[k] = n
			}
			return function() {
				var j;
				this.each(function(k, l) {
					if (!l.style) {
						return
					}
					l.style.display = "";
					j = d.dom(l);
					if (j.getCurrentStyle("display") === "none"
							|| !d._util_.contains(j.getDocument(), l)) {
						l.style.display = h[l.nodeName] || i(l.nodeName)
					}
				});
				return this
			}
		}()
	});
	d.dom.extend({
		hide : function() {
			return this.each(function(h, i) {
				if (!i.style) {
					return
				}
				i.style.display = "none"
			})
		}
	});
	d.dom.extend({
		toggle : function() {
			return this.each(function(h, i) {
				if (i.style && i.style.display == "none") {
					d.dom(i).show()
				} else {
					d.dom(i).hide()
				}
			})
		}
	});
	d.dom.extend({
		find : function(h) {
			var i = [], j, l = "__tangram__find__", k = d.dom();
			switch (d.type(h)) {
			case "string":
				this.each(function() {
					d.merge(k, d.query(h, this))
				});
				break;
			case "HTMLElement":
				j = h.tagName + "#" + (h.id ? h.id : (h.id = l));
				this.each(function() {
					if (d.query(j, this).length > 0) {
						i.push(h)
					}
				});
				h.id == l && (h.id = "");
				if (i.length > 0) {
					d.merge(k, i)
				}
				break;
			case "$DOM":
				i = h.get();
				this.each(function() {
					d.forEach(d.query("*", this), function(o) {
						for (var m = 0, p = i.length; m < p; m++) {
							o === i[m] && (k[k.length++] = i[m])
						}
					})
				});
				break
			}
			return k
		}
	});
	d.dom
			.extend({
				attr : function(i, l) {
					if (arguments.length <= 0 || typeof i === "function") {
						return this
					}
					var h, k = this, j = false;
					if (this.size() <= 0) {
						if (i && l) {
							return k
						} else {
							if (i && !l) {
								return undefined
							} else {
								return k
							}
						}
					}
					d
							.forEach(
									this,
									function(u, q) {
										if (h) {
											return
										}
										var r, t, n, p = d.dom, s = d._util_, o = u.nodeType;
										if (!u || o === 3 || o === 8 || o === 2) {
											return
										}
										if (typeof u.getAttribute === "undefined") {
											var v = p(u);
											h = v.prop(i, l)
										}
										switch (typeof i) {
										case "string":
											n = o !== 1 || !d._util_.isXML(u);
											if (n) {
												i = i.toLowerCase();
												t = s.attrHooks[i]
														|| (s.rboolean.test(i) ? s.boolHook
																: s.nodeHook)
											}
											if (typeof l === "undefined") {
												if (t
														&& "get" in t
														&& n
														&& (r = t.get(u, i)) !== null) {
													h = r
												} else {
													r = u.getAttribute(i);
													h = r === null ? undefined
															: r
												}
											} else {
												if (typeof l === "function") {
													j = true;
													var v = p(u);
													v.attr(i, l.call(u, q, v
															.attr(i)))
												} else {
													j = true;
													var m = {
														val : true,
														css : true,
														html : true,
														text : true,
														width : true,
														height : true,
														offset : true
													};
													if (i in m) {
														h = p(u)[i](l);
														return
													}
													if (l === null) {
														p(u).removeAttr(i);
														return
													} else {
														if (t
																&& "set" in t
																&& n
																&& (r = t
																		.set(
																				u,
																				l,
																				i)) !== undefined) {
															return r
														} else {
															u.setAttribute(i,
																	"" + l);
															return l
														}
													}
												}
											}
											break;
										case "object":
											j = true;
											var v = p(u);
											for (key in i) {
												v.attr(key, i[key])
											}
											break;
										default:
											h = k;
											break
										}
									});
					return j ? this : h
				}
			});
	d.dom.g = function(h) {
		if (!h) {
			return null
		}
		if ("string" == typeof h || h instanceof String) {
			return document.getElementById(h)
		} else {
			if (h.nodeName && (h.nodeType == 1 || h.nodeType == 9)) {
				return h
			}
		}
		return null
	};
	d.dom.toggle = function(h) {
		h = d.dom.g(h);
		h.style.display = h.style.display == "none" ? "" : "none";
		return h
	};
	d.dom.extend({
		hasClass : function(j) {
			if (arguments.length <= 0 || typeof j === "function") {
				return this
			}
			if (this.size() <= 0) {
				return false
			}
			j = j.replace(/^\s+/g, "").replace(/\s+$/g, "")
					.replace(/\s+/g, " ");
			var i = j.split(" ");
			var h;
			d.forEach(this, function(l) {
				var m = l.className;
				for (var k = 0; k < i.length; k++) {
					if (!~(" " + m + " ").indexOf(" " + i[k] + " ")) {
						h = false;
						return
					}
				}
				if (h !== false) {
					h = true;
					return
				}
			});
			return h
		}
	});
	d._util_.getWidthOrHeight = function() {
		var h = {}, k = {
			position : "absolute",
			visibility : "hidden",
			display : "block"
		}, i = /^(none|table(?!-c[ea]).+)/;
		function j(n, l) {
			var o = {};
			for ( var m in l) {
				o[m] = n.style[m];
				n.style[m] = l[m]
			}
			return o
		}
		d
				.forEach(
						[ "Width", "Height" ],
						function(l) {
							var m = {
								Width : [ "Right", "Left" ],
								Height : [ "Top", "Bottom" ]
							}[l];
							h["get" + l] = function(s, n) {
								var r = d.dom(s), o = s.offsetWidth === 0
										&& i.test(r.getCurrentStyle("display"))
										&& (j(s, k)), q = s["offset" + l]
										|| parseInt(r.getCurrentStyle(l
												.toLowerCase())), p = "padding|border";
								n
										&& d.forEach(n.split("|"), function(t) {
											if (!~p.indexOf(t)) {
												q += parseFloat(r
														.getCurrentStyle(t
																+ m[0])) || 0;
												q += parseFloat(r
														.getCurrentStyle(t
																+ m[1])) || 0
											} else {
												p = p.replace(new RegExp("\\|?"
														+ t + "\\|?"), "")
											}
										});
								p
										&& d.forEach(p.split("|"), function(t) {
											q -= parseFloat(r.getCurrentStyle(t
													+ m[0]
													+ (t === "border" ? "Width"
															: ""))) || 0;
											q -= parseFloat(r.getCurrentStyle(t
													+ m[1]
													+ (t === "border" ? "Width"
															: ""))) || 0
										});
								o && j(s, o);
								return q
							}
						});
		return function(n, m, l) {
			return h[m === "width" ? "getWidth" : "getHeight"](n, l)
		}
	}();
	d.string.extend({
		toCamelCase : function() {
			var h = this.valueOf();
			if (h.indexOf("-") < 0 && h.indexOf("_") < 0) {
				return h
			}
			return h.replace(/[-_][^-_]/g, function(i) {
				return i.charAt(1).toUpperCase()
			})
		}
	});
	d.dom.styleFixer = function() {
		var m = /alpha\s*\(\s*opacity\s*=\s*(\d{1,3})/i, h = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i, n = "fillOpacity,fontWeight,opacity,orphans,widows,zIndex,zoom", j = d._util_.support.dom.a, o = {
			"float" : !!j.style.cssFloat ? "cssFloat" : "styleFloat"
		}, i = {
			fontWeight : {
				normal : 400,
				bold : 700,
				bolder : 700,
				lighter : 100
			}
		}, l = {
			opacity : {},
			width : {},
			height : {},
			fontWeight : {
				get : function(r, q) {
					var p = k.get(r, q);
					return i.fontWeight[p] || p
				}
			}
		}, k = {
			set : function(q, p, r) {
				q.style[p] = r
			}
		};
		d
				.extend(
						l.opacity,
						/^0.5/.test(j.style.opacity) ? {
							get : function(r, q) {
								var p = d.dom(r).getCurrentStyle(q);
								return p === "" ? "1" : p
							}
						}
								: {
									get : function(p) {
										return m
												.test((p.currentStyle || p.style).filter
														|| "") ? parseFloat(RegExp.$1) / 100
												: "1"
									},
									set : function(t, q, s) {
										var r = (t.currentStyle || t.style).filter
												|| "", p = s * 100;
										t.style.zoom = 1;
										t.style.filter = m.test(r) ? r.replace(
												m, "Alpha(opacity=" + p)
												: r
														+ " progid:dximagetransform.microsoft.Alpha(opacity="
														+ p + ")"
									}
								});
		d.forEach([ "width", "height" ], function(p) {
			l[p] = {
				get : function(q) {
					return d._util_.getWidthOrHeight(q, p) + "px"
				},
				set : function(r, q, s) {
					d.type(s) === "number" && s < 0 && (s = 0);
					k.set(r, q, s)
				}
			}
		});
		d.extend(k, document.documentElement.currentStyle ? {
			get : function(r, q) {
				var s = d.dom(r).getCurrentStyle(q), p;
				if (h.test(s)) {
					p = r.style.left;
					r.style.left = q === "fontSize" ? "1em" : s;
					s = r.style.pixelLeft + "px";
					r.style.left = p
				}
				return s
			}
		} : {
			get : function(q, p) {
				return d.dom(q).getCurrentStyle(p)
			}
		});
		return function(t, r, u) {
			var s = d.string(r).toCamelCase(), v = u === undefined ? "get"
					: "set", q, p;
			s = o[s] || s;
			q = d.type(u) === "number" && !~n.indexOf(s) ? u + "px" : u;
			p = l.hasOwnProperty(s) && l[s][v] || k[v];
			return p(t, s, q)
		}
	}();
	d.dom.extend({
		css : function(h, i) {
			d.check("^(?:(?:string(?:,(?:number|string|function))?)|object)$",
					"baidu.dom.css");
			return d._util_.access(this, h, i, function(k, j, m) {
				var l = d.dom.styleFixer;
				return l ? l(k, j, m) : (m === undefined ? this
						.getCurrentStyle(j) : k.style[j] = m)
			})
		}
	});
	d.dom.createElements = function() {
		var j = /<(\w+)/i, i = /<|&#?\w+;/, k = {
			area : [ 1, "<map>", "</map>" ],
			col : [ 2, "<table><tbody></tbody><colgroup>",
					"</colgroup></table>" ],
			legend : [ 1, "<fieldset>", "</fieldset>" ],
			option : [ 1, "<select multiple='multiple'>", "</select>" ],
			td : [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
			thead : [ 1, "<table>", "</table>" ],
			tr : [ 2, "<table><tbody>", "</tbody></table>" ],
			_default : [ 0, "", "" ]
		};
		k.optgroup = k.option;
		k.tbody = k.tfoot = k.colgroup = k.caption = k.thead;
		k.th = k.td;
		function h(o, q) {
			var p = o.getElementsByTagName("SCRIPT"), m, l, n;
			for (m = p.length - 1; m >= 0; m--) {
				n = p[m];
				l = q.createElement("SCRIPT");
				n.id && (l.id = n.id);
				n.src && (l.src = n.src);
				n.type && (l.type = n.type);
				l[n.text ? "text" : "textContent"] = n.text || n.textContent;
				n.parentNode.replaceChild(l, n)
			}
		}
		return function(q, t) {
			d.isNumber(q) && (q = q.toString());
			t = t || document;
			var m, p, r, u = q, o = u.length, l = t.createElement("div"), s = t
					.createDocumentFragment(), v = [];
			if (d.isString(u)) {
				if (!i.test(u)) {
					v.push(t.createTextNode(u))
				} else {
					m = k[u.match(j)[1].toLowerCase()] || k._default;
					l.innerHTML = "<i>mz</i>" + m[1] + u + m[2];
					l.removeChild(l.firstChild);
					h(l, t);
					p = m[0];
					r = l;
					while (p--) {
						r = r.firstChild
					}
					d.merge(v, r.childNodes);
					d.forEach(v, function(n) {
						s.appendChild(n)
					});
					l = r = null
				}
			}
			l = null;
			return v
		}
	}();
	d
			.createChain(
					"event",
					function() {
						var h = {};
						return function(j, i) {
							switch (d.type(j)) {
							case "object":
								return h.originalEvent === j ? h
										: h = new d.event.$Event(j);
							case "$Event":
								return j;
							case "string":
								var k = new d.event.$Event(j);
								if (typeof i == "object") {
									d.forEach(k, i)
								}
								return k
							}
						}
					}(),
					function(l) {
						var o, j, m;
						var k = this;
						this._type_ = "$Event";
						if (typeof l == "object" && l.type) {
							k.originalEvent = o = l;
							for ( var i in o) {
								if (typeof o[i] != "function") {
									k[i] = o[i]
								}
							}
							if (o.extraData) {
								d.extend(k, o.extraData)
							}
							k.target = k.srcElement = o.srcElement
									|| ((j = o.target) && (j.nodeType == 3 ? j.parentNode
											: j));
							k.relatedTarget = o.relatedTarget
									|| ((j = o.fromElement) && (j === k.target ? o.toElement
											: j));
							k.keyCode = k.which = o.keyCode || o.which;
							if (!k.which && o.button !== undefined) {
								k.which = o.button & 1 ? 1 : (o.button & 2 ? 3
										: (o.button & 4 ? 2 : 0))
							}
							var n = document.documentElement, h = document.body;
							k.pageX = o.pageX
									|| (o.clientX
											+ (n && n.scrollLeft || h
													&& h.scrollLeft || 0) - (n
											&& n.clientLeft || h
											&& h.clientLeft || 0));
							k.pageY = o.pageY
									|| (o.clientY
											+ (n && n.scrollTop || h
													&& h.scrollTop || 0) - (n
											&& n.clientTop || h && h.clientTop || 0));
							k.data
						}
						if (typeof l == "string") {
							this.type = l
						}
						this.timeStamp = new Date().getTime()
					}).extend(
					{
						stopPropagation : function() {
							var h = this.originalEvent;
							h
									&& (h.stopPropagation ? h.stopPropagation()
											: h.cancelBubble = true)
						},
						preventDefault : function() {
							var h = this.originalEvent;
							h
									&& (h.preventDefault ? h.preventDefault()
											: h.returnValue = false)
						}
					});
	d._util_.eventBase = {};
	void function(i, h) {
		h = i.listener = {};
		if (window.addEventListener) {
			h.add = function(l, j, k) {
				l.addEventListener(j, k, false)
			}
		} else {
			if (window.attachEvent) {
				h.add = function(l, j, k) {
					l.attachEvent("on" + j, k)
				}
			}
		}
	}(d._util_.eventBase);
	void function(l, j) {
		var i = d.id;
		var h = l.queue = {};
		var m = h.attaCache = d.global("eventQueueCache");
		var k = l.listener;
		h.get = function(q, o, p, n) {
			var s = i(q), r;
			if (!m[s]) {
				m[s] = {}
			}
			r = m[s];
			if (o) {
				if (!r[o]) {
					this.setupCall(q, o, p, r[o] = [], n)
				}
				return r[o]
			} else {
				return r
			}
		};
		h.add = function(r, o, q, p, n) {
			this.get(r, o, q, n).push(p)
		};
		h.remove = function(r, q, p) {
			var n, s;
			if (q) {
				var n = this.get(r, q);
				if (p) {
					for (var o = n.length - 1; o >= 0; o--) {
						if (n[o].orig == p) {
							n.splice(o, 1)
						}
					}
				} else {
					n.length = 0
				}
			} else {
				var s = this.get(r);
				for ( var o in s) {
					s[o].length = 0
				}
			}
		};
		h.call = function(s, w, u, t) {
			if (u) {
				if (!u.length) {
					return
				}
				var v = [].slice.call(arguments, 1), q = [];
				v.unshift(t = d.event(t || w));
				t.type = w;
				if (!t.currentTarget) {
					t.currentTarget = s
				}
				for (var p = 0, n, o = u.length; p < o; p++) {
					if (n = u[p]) {
						n.pkg.apply(s, v);
						if (n.one) {
							q.unshift(p)
						}
					}
				}
				if (q.length) {
					for (var p = 0, o = q.length; p < o; p++) {
						this.remove(s, w, u[p].fn)
					}
				}
			} else {
				u = this.get(s, w);
				this.call(s, w, u, t)
			}
		};
		h.setupCall = function() {
			var n = function(r, o, p, q) {
				k.add(r, p, function(s) {
					h.call(r, o, q, s)
				})
			};
			return function(u, r, s, t, p) {
				if (!p) {
					n(u, r, s, t)
				} else {
					u = d.dom(p, u);
					for (var q = 0, o = u.length; q < o; q++) {
						n(u[q], r, s, t)
					}
				}
			}
		}()
	}(d._util_.eventBase, d.event);
	d._util_.cleanData = function(l) {
		var h;
		for (var j = 0, k; k = l[j]; j++) {
			h = d.id(k, "get");
			if (!h) {
				continue
			}
			d._util_.eventBase.queue.remove(k);
			d.id(k, "remove")
		}
	};
	d.dom.extend({
		empty : function() {
			for (var h = 0, j; j = this[h]; h++) {
				j.nodeType === 1
						&& d._util_.cleanData(j.getElementsByTagName("*"));
				while (j.firstChild) {
					j.removeChild(j.firstChild)
				}
			}
			return this
		}
	});
	d._util_.smartInsert = function(h, m, r) {
		if (m.length <= 0 || h.size() <= 0) {
			return
		}
		if (d.type(m[0]) === "function") {
			var o = m[0], q;
			return d.forEach(h, function(t, i) {
				q = d.dom(t);
				m[0] = o.call(t, i, q.html());
				d._util_.smartInsert(q, m, r)
			})
		}
		var p = h.getDocument() || document, l = p.createDocumentFragment(), k = h.length - 1, n;
		for (var j = 0, s; s = m[j]; j++) {
			if (s.nodeType) {
				l.appendChild(s)
			} else {
				d.forEach(~"string|number".indexOf(d.type(s)) ? d.dom
						.createElements(s, p) : s, function(i) {
					l.appendChild(i)
				})
			}
		}
		if (!(n = l.firstChild)) {
			return
		}
		d.forEach(h, function(t, i) {
			r.call(t.nodeName.toLowerCase() === "table"
					&& n.nodeName.toLowerCase() === "tr" ? t.tBodies[0]
					|| t.appendChild(t.ownerDocument.createElement("tbody"))
					: t, i < k ? l.cloneNode(true) : l)
		})
	};
	d.dom
			.extend({
				append : function() {
					d
							.check(
									"^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$",
									"baidu.dom.append");
					d._util_.smartInsert(this, arguments, function(h) {
						this.nodeType === 1 && this.appendChild(h)
					});
					return this
				}
			});
	d.dom
			.extend({
				prepend : function() {
					d
							.check(
									"^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$",
									"baidu.dom.prepend");
					d._util_.smartInsert(this, arguments, function(h) {
						this.nodeType === 1
								&& this.insertBefore(h, this.firstChild)
					});
					return this
				}
			});
	d.dom.extend({
		map : function(h) {
			d.check("function", "baidu.dom.map");
			var i = this, j = d.dom();
			d.forEach(this, function(l, k) {
				j[j.length++] = h.call(l, k, l, l)
			});
			return j
		}
	});
	void function(m, l) {
		var h = m.queue;
		var i = m.core = {};
		var k = l.special = {};
		var j = [].push;
		var n = function(r, p) {
			for (var q = 0, o = p.length; q < o; q++) {
				if (p.get(q).contains(r)) {
					return p[q]
				}
			}
		};
		i.build = function(t, q, r, o, s) {
			var p;
			if (o) {
				p = d.dom(o, t)
			}
			if ((q in k) && k[q].pack) {
				r = k[q].pack(r)
			}
			return function(y) {
				var x = d.dom(y.target), v = [ y ], u;
				if (s && !y.data) {
					y.data = s
				}
				if (y.triggerData) {
					j.apply(v, y.triggerData)
				}
				if (!p) {
					return y.result = r.apply(t, v)
				}
				for (var w = 0; w < 2; w++) {
					if (u = n(y.target, p)) {
						return y.result = r.apply(u, v)
					}
					p = d.dom(o, t)
				}
			}
		};
		i.add = function(t, v, w, p, q, s) {
			var u = this.build(t, v, w, p, q), o, r;
			r = v;
			if (v in k) {
				o = k[v].attachElements, r = k[v].bindType || v
			}
			h.add(t, v, r, {
				type : v,
				pkg : u,
				orig : w,
				one : s
			}, o)
		};
		i.remove = function(r, q, p, o) {
			h.remove(r, q, p, o)
		}
	}(d._util_.eventBase, d.event);
	d.dom
			.extend({
				clone : function() {
					var k = d._util_, n = k.eventBase.core, q = k.eventBase.queue, h = k.support.dom.div, p = k.support.dom.input
							.cloneNode(true).checked, i = true;
					if (!h.addEventListener && h.attachEvent && h.fireEvent) {
						h.attachEvent("onclick", function() {
							i = false
						});
						h.cloneNode(true).fireEvent("onclick")
					}
					function j(r) {
						return r.getElementsByTagName ? r
								.getElementsByTagName("*")
								: (r.querySelectorAll ? r.querySelectorAll("*")
										: [])
					}
					function l(s, r) {
						r.clearAttributes && r.clearAttributes();
						r.mergeAttributes && r.mergeAttributes(s);
						switch (r.nodeName.toLowerCase()) {
						case "object":
							r.outerHTML = s.outerHTML;
							break;
						case "textarea":
						case "input":
							if (~"checked|radio".indexOf(s.type)) {
								s.checked
										&& (r.defaultChecked = r.checked = s.checked);
								r.value !== s.value && (r.value = s.value)
							}
							r.defaultValue = s.defaultValue;
							break;
						case "options":
							r.selected = s.defaultSelected;
							break;
						case "script":
							r.text !== s.text && (r.text = s.text);
							break
						}
						r[d.key] && r.removeAttribute(d.key)
					}
					function o(w, t) {
						if (t.nodeType !== 1 || !d.id(w, "get")) {
							return
						}
						var r = q.get(w);
						for ( var u in r) {
							for (var s = 0, v; v = r[u][s]; s++) {
								n.add(t, u, v)
							}
						}
					}
					function m(x, y, v) {
						var u = x.cloneNode(true), s, t, r;
						if ((!i || !p)
								&& (x.nodeType === 1 || x.nodeType === 11)
								&& !d._util_.isXML(x)) {
							l(x, u);
							s = j(x);
							t = j(u);
							r = s.length;
							for (var w = 0; w < r; w++) {
								t[w] && l(s[w], t[w])
							}
						}
						if (y) {
							o(x, u);
							if (v) {
								s = j(x);
								t = j(u);
								r = s.length;
								for (var w = 0; w < r; w++) {
									o(s[w], t[w])
								}
							}
						}
						return u
					}
					return function(s, r) {
						s = !!s;
						r = !!r;
						return this.map(function() {
							return m(this, s, r)
						})
					}
				}()
			});
	d.dom.extend({
		contains : function(i) {
			var h = this[0];
			i = d.dom(i)[0];
			if (!h || !i) {
				return false
			}
			return d._util_.contains(h, i)
		}
	});
	d.dom._g = function(h) {
		return d.type(h) === "string" ? document.getElementById(h) : h
	};
	d.dom.contains = function(h, i) {
		var j = d.dom._g;
		return d._util_.contains(j(h), j(i))
	};
	d._util_.smartInsertTo = function(h, l, n, p) {
		var o = d.dom(l), k = o[0], m;
		if (p && k && (!k.parentNode || k.parentNode.nodeType === 11)) {
			p = p === "before";
			m = d.merge(p ? h : o, !p ? h : o);
			if (h !== m) {
				h.length = 0;
				d.merge(h, m)
			}
		} else {
			for (var j = 0, q; q = o[j]; j++) {
				d._util_.smartInsert(d.dom(q), j > 0 ? h.clone(true) : h, n)
			}
		}
	};
	d.dom.extend({
		appendTo : function(h) {
			d.check("^(?:string|HTMLElement|\\$DOM)$", "baidu.dom.appendTo");
			d._util_.smartInsertTo(this, h, function(i) {
				this.appendChild(i)
			});
			return this
		}
	});
	d.dom.extend({
		prependTo : function(h) {
			d.check("^(?:string|HTMLElement|\\$DOM)$", "baidu.dom.prependTo");
			d._util_.smartInsertTo(this, h, function(i) {
				this.insertBefore(i, this.firstChild)
			});
			return this
		}
	});
	d.dom
			.extend({
				after : function() {
					d
							.check(
									"^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$",
									"baidu.dom.after");
					var h = this[0] && this[0].parentNode, i = !h && [];
					d._util_.smartInsert(this, arguments, function(j) {
						h ? h.insertBefore(j, this.nextSibling) : d.merge(i,
								j.childNodes)
					});
					i && d.merge(this, i);
					return this
				}
			});
	d.dom
			.extend({
				before : function() {
					d
							.check(
									"^(?:string|function|HTMLElement|\\$DOM)(?:,(?:string|array|HTMLElement|\\$DOM))*$",
									"baidu.dom.before");
					var h = this[0] && this[0].parentNode, j = !h && [], i;
					d._util_.smartInsert(this, arguments, function(k) {
						h ? h.insertBefore(k, this) : d.merge(j, k.childNodes)
					});
					if (j) {
						j = d.merge(j, this);
						this.length = 0;
						d.merge(this, j)
					}
					return this
				}
			});
	d.dom
			.extend({
				insertAfter : function(h) {
					d.check("^(?:string|HTMLElement|\\$DOM)$",
							"baidu.dom.insertAfter");
					d._util_.smartInsertTo(this, h, function(i) {
						this.parentNode.insertBefore(i, this.nextSibling)
					}, "after");
					return this
				}
			});
	d.dom.insertAfter = function(j, i) {
		var h = d.dom._g;
		return d.dom(h(j)).insertAfter(h(i))[0]
	};
	d.dom.extend({
		insertBefore : function(h) {
			d
					.check("^(?:string|HTMLElement|\\$DOM)$",
							"baidu.dom.insertBefore");
			d._util_.smartInsertTo(this, h, function(i) {
				this.parentNode.insertBefore(i, this)
			}, "before");
			return this
		}
	});
	d.dom.insertBefore = function(j, i) {
		var h = d.dom._g;
		return d.dom(h(j)).insertBefore(h(i))[0]
	};
	d.dom.match = function() {
		var i = /^[\w\#\-\$\.\*]+$/, j = document.createElement("DIV");
		j.id = "__tangram__";
		return function(r, l, p) {
			var m, o = d.array();
			switch (d.type(l)) {
			case "$DOM":
				for (var k = r.length - 1; k > -1; k--) {
					for (var q = l.length - 1; q > -1; q--) {
						r[k] === l[q] && o.push(r[k])
					}
				}
				break;
			case "function":
				d.forEach(r, function(t, s) {
					l.call(t, s) && o.push(t)
				});
				break;
			case "HTMLElement":
				d.forEach(r, function(s) {
					s == l && o.push(s)
				});
				break;
			case "string":
				var n = d.query(l, p || document);
				d.forEach(r, function(v) {
					if (m = h(v)) {
						var u = m.nodeType == 1 ? d.query(l, m) : n;
						for (var s = 0, w = u.length; s < w; s++) {
							if (u[s] === v) {
								o.push(v);
								break
							}
						}
					}
				});
				o = o.unique();
				break;
			default:
				o = d.array(r).unique();
				break
			}
			return o
		};
		function h(m) {
			var k = [], l;
			while (m = m.parentNode) {
				m.nodeType && k.push(m)
			}
			for (var l = k.length - 1; l > -1; l--) {
				if (k[l].nodeType == 1 || k[l].nodeType == 9) {
					return k[l]
				}
			}
			return null
		}
	}();
	d.dom.extend({
		filter : function(h) {
			return d.dom(d.dom.match(this, h))
		}
	});
	d.dom.extend({
		remove : function(h, l) {
			arguments.length > 0
					&& d.check("^string(?:,boolean)?$", "baidu.dom.remove");
			var m = h ? this.filter(h) : this;
			for (var j = 0, k; k = m[j]; j++) {
				if (!l && k.nodeType === 1) {
					d._util_.cleanData(k.getElementsByTagName("*"));
					d._util_.cleanData([ k ])
				}
				k.parentNode && k.parentNode.removeChild(k)
			}
			return this
		}
	});
	d.dom.extend({
		getWindow : function() {
			var h = this.getDocument();
			return (this.size() <= 0) ? undefined
					: (h.parentWindow || h.defaultView)
		}
	});
	d._util_.nodeName = function(h, i) {
		return h.nodeName && h.nodeName.toLowerCase() === i.toLowerCase()
	};
	d._util_.inArray = function(k, l, i) {
		if (!l) {
			return -1
		}
		var j = Array.prototype.indexOf, h;
		if (j) {
			return j.call(l, k, i)
		}
		h = l.length;
		i = i ? i < 0 ? Math.max(0, h + i) : i : 0;
		for (; i < h; i++) {
			if (i in l && l[i] === k) {
				return i
			}
		}
		return -1
	};
	d.makeArray = function(j, i) {
		var h = i || [];
		if (!j) {
			return h
		}
		j.length == null || ~"string|function|regexp".indexOf(d.type(j)) ? [].push
				.call(h, j)
				: d.merge(h, j);
		return h
	};
	d._util_.nodeHook = function() {
		if (d._util_.support.getSetAttribute) {
			return
		}
		var h = {};
		h.name = h.id = h.coords = true;
		return {
			get : function(k, j) {
				var i = k.getAttributeNode(j);
				return i && (h[j] ? i.value !== "" : i.specified) ? i.value
						: undefined
			},
			set : function(k, j, l) {
				var i = k.getAttributeNode(j);
				if (!i) {
					i = document.createAttribute(j);
					k.setAttributeNode(i)
				}
				return (i.value = l + "")
			}
		}
	}();
	d
			.extend(
					d._util_,
					{
						rfocusable : /^(?:button|input|object|select|textarea)$/i,
						rtype : /^(?:button|input)$/i,
						rclickable : /^a(?:rea)?$/i,
						rboolean : /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
						attrHooks : {
							type : {
								set : function(i, j) {
									var h = d._util_;
									if (h.rtype.test(i.nodeName)
											&& i.parentNode) {
										d
												._error("type property can't be changed")
									} else {
										if (!d.support.radioValue
												&& j === "radio"
												&& d._nodeName(i, "input")) {
											var k = i.value;
											i.setAttribute("type", j);
											if (k) {
												i.value = k
											}
											return j
										}
									}
								}
							},
							value : {
								get : function(j, i) {
									var h = d._util_;
									if (h.nodeHook && d._nodeName(j, "button")) {
										return h.nodeHook.get(j, i)
									}
									return i in j ? j.value : null
								},
								set : function(i, j, h) {
									if (bu.nodeHook && d._nodeName(i, "button")) {
										return bu.nodeHook.set(i, j, h)
									}
									i.value = j
								}
							}
						},
						nodeHook : {},
						boolHook : {
							get : function(i, h) {
								var k, j = d(i).prop(h);
								return j === true || typeof j !== "boolean"
										&& (k = i.getAttributeNode(h))
										&& k.nodeValue !== false ? h
										.toLowerCase() : undefined
							},
							set : function(i, k, h) {
								var j;
								if (k === false) {
									d(i).removeAttr(h)
								} else {
									j = d._util_.propFix[h] || h;
									if (j in i) {
										i[j] = true
									}
									i.setAttribute(h, h.toLowerCase())
								}
								return h
							}
						}
					});
	Array.prototype.map = function(k, j) {
		d.check("function(,.+)?", "baidu.array.map");
		var h, m, l = d.array([]);
		for (h = 0, m = this.length; h < m; h++) {
			l[h] = k.call(j || this, this[h], h, this)
		}
		return l
	};
	d.array.map = function(j, i, h) {
		return d.isArray(j) ? j.map(i, h) : j
	};
	d.dom.extend({
		insertHTML : function(h, k) {
			var i, l, j = this[0];
			if (j.insertAdjacentHTML && !d.browser.opera) {
				j.insertAdjacentHTML(h, k)
			} else {
				i = j.ownerDocument.createRange();
				h = h.toUpperCase();
				if (h == "AFTERBEGIN" || h == "BEFOREEND") {
					i.selectNodeContents(j);
					i.collapse(h == "AFTERBEGIN")
				} else {
					l = h == "BEFOREBEGIN";
					i[l ? "setStartBefore" : "setEndAfter"](j);
					i.collapse(l)
				}
				i.insertNode(i.createContextualFragment(k))
			}
			return j
		}
	});
	d.dom
			.extend({
				offsetParent : function() {
					return this
							.map(function() {
								var i = this.offsetParent || document.body, h = /^(?:body|html)$/i;
								while (i
										&& d.dom(i).getCurrentStyle("position") === "static"
										&& !h.test(i.nodeName)) {
									i = i.offsetParent
								}
								return i
							})
				}
			});
	d.dom.extend({
		position : function() {
			if (this.size() <= 0) {
				return 0
			}
			var h = /^(?:body|html)$/i, k = this.offset(), i = this
					.offsetParent(), j = h.test(i[0].nodeName) ? {
				left : 0,
				top : 0
			} : i.offset();
			k.left -= parseFloat(this.getCurrentStyle("marginLeft")) || 0;
			k.top -= parseFloat(this.getCurrentStyle("marginTop")) || 0;
			j.left += parseFloat(i.getCurrentStyle("borderLeftWidth")) || 0;
			j.top += parseFloat(i.getCurrentStyle("borderTopWidth")) || 0;
			return {
				left : k.left - j.left,
				top : k.top - j.top
			}
		}
	});
	d.dom.extend({
		offset : function() {
			var h = {
				setOffset : function(q, r, n) {
					var i = i = d.dom(q), l = i.getCurrentStyle("position");
					l === "static" && (q.style.position = "relative");
					var j = i.offset(), k = i.getCurrentStyle("left"), o = i
							.getCurrentStyle("top"), p = (~"absolute|fixed"
							.indexOf(l))
							&& ~("" + k + o).indexOf("auto"), m = p
							&& i.position();
					k = m && m.left || parseFloat(k) || 0;
					o = m && m.top || parseFloat(o) || 0;
					d.type("options") === "function" && (r = r.call(q, n, j));
					r.left != undefined
							&& (q.style.left = r.left - j.left + k + "px");
					r.top != undefined
							&& (q.style.top = r.top - j.top + o + "px")
				},
				bodyOffset : function(i) {
					var j = d.dom(i);
					return {
						left : i.offsetLeft
								+ parseFloat(j.getCurrentStyle("marginLeft"))
								|| 0,
						top : i.offsetTop
								+ parseFloat(j.getCurrentStyle("marginTop"))
								|| 0
					}
				}
			};
			return function(r) {
				if (!r) {
					var q = this[0], o = this.getDocument(), l = {
						left : 0,
						top : 0
					}, n, j, m;
					if (q === o.body) {
						return h.bodyOffset(q, o)
					}
					if (typeof q.getBoundingClientRect !== "undefined") {
						l = q.getBoundingClientRect()
					}
					n = this.getWindow();
					j = o.documentElement;
					m = o.body;
					return {
						left : l.left
								+ (n.pageXOffset || Math.max(j.scrollLeft,
										m.scrollLeft))
								- (j.clientLeft || m.clientLeft),
						top : l.top
								+ (n.pageYOffset || Math.max(j.scrollTop,
										m.scrollTop))
								- (j.clientTop || m.clientTop)
					}
				} else {
					d.check("^(?:object|function)$", "baidu.dom.offset");
					for (var k = 0, p; p = this[k]; k++) {
						h.setOffset(p, r, k)
					}
					return this
				}
			}
		}()
	});
	d._util_.smartScroll = function(k) {
		var h = {
			scrollLeft : "pageXOffset",
			scrollTop : "pageYOffset"
		}[k], l = k === "scrollLeft", i = {};
		function m(n) {
			return n && n.nodeType === 9
		}
		function j(n) {
			return d.type(n) == "Window" ? n : m(n) ? n.defaultView
					|| n.parentWindow : false
		}
		return {
			get : function(n) {
				var o = j(n);
				return o ? (h in o) ? o[h] : d.browser.isStrict
						&& o.document.documentElement[k] || o.document.body[k]
						: n[k]
			},
			set : function(n, p) {
				if (!n) {
					return
				}
				var o = j(n);
				o ? o.scrollTo(l ? p : this.get(n), !l ? p : this.get(n))
						: n[k] = p
			}
		}
	};
	d.dom.extend({
		scrollLeft : function() {
			var h = d._util_.smartScroll("scrollLeft");
			return function(i) {
				i && d.check("^(?:number|string)$", "baidu.dom.scrollLeft");
				if (this.size() <= 0) {
					return i === undefined ? 0 : this
				}
				return i === undefined ? h.get(this[0]) : h.set(this[0], i)
						|| this
			}
		}()
	});
	d.dom.extend({
		scrollTop : function() {
			var h = d._util_.smartScroll("scrollTop");
			return function(i) {
				i && d.check("^(?:number|string)$", "baidu.dom.scrollTop");
				if (this.size() <= 0) {
					return i === undefined ? 0 : this
				}
				return i === undefined ? h.get(this[0]) : h.set(this[0], i)
						|| this
			}
		}()
	});
	d._util_.getWindowOrDocumentWidthOrHeight = d._util_.getWindowOrDocumentWidthOrHeight
			|| function() {
				var h = {
					window : {},
					document : {}
				};
				d.forEach([ "Width", "Height" ], function(k) {
					var j = "client" + k, l = "offset" + k, i = "scroll" + k;
					h.window["get" + k] = function(m) {
						var o = m.document, n = o.documentElement[j];
						return d.browser.isStrict && n || o.body && o.body[j]
								|| n
					};
					h.document["get" + k] = function(m) {
						var n = m.documentElement;
						return n[j] >= n[i] ? n[j] : Math.max(m.body[i], n[i],
								m.body[l], n[l])
					}
				});
				return function(k, j, i) {
					return h[j][i === "width" ? "getWidth" : "getHeight"](k)
				}
			}();
	d.dom.extend({
		width : function(h) {
			return d._util_.access(this, "width", h, function(m, k, n) {
				var j = n !== undefined, i = j && parseFloat(n), l = m != null
						&& m == m.window ? "window"
						: (m.nodeType === 9 ? "document" : false);
				if (j && i < 0 || isNaN(i)) {
					return
				}
				j && /^(?:\d*\.)?\d+$/.test(n += "") && (n += "px");
				return l ? d._util_.getWindowOrDocumentWidthOrHeight(m, l, k)
						: (j ? m.style.width = n : d._util_.getWidthOrHeight(m,
								k))
			})
		}
	});
	d.dom.extend({
		height : function(h) {
			return d._util_.access(this, "height", h, function(m, k, n) {
				var j = n !== undefined, i = j && parseFloat(n), l = m != null
						&& m == m.window ? "window"
						: (m.nodeType === 9 ? "document" : false);
				if (j && i < 0 || isNaN(i)) {
					return
				}
				j && /^(?:\d*\.)?\d+$/.test(n += "") && (n += "px");
				return l ? d._util_.getWindowOrDocumentWidthOrHeight(m, l, k)
						: (j ? m.style.height = n : d._util_.getWidthOrHeight(
								m, k))
			})
		}
	});
	d.dom.extend({
		innerWidth : function() {
			if (this.size() <= 0) {
				return 0
			}
			var i = this[0], h = i != null && i === i.window ? "window"
					: (i.nodeType === 9 ? "document" : false);
			return h ? d._util_.getWindowOrDocumentWidthOrHeight(i, h, "width")
					: d._util_.getWidthOrHeight(i, "width", "padding")
		}
	});
	d.dom.extend({
		innerHeight : function() {
			if (this.size() <= 0) {
				return 0
			}
			var i = this[0], h = i != null && i === i.window ? "window"
					: (i.nodeType === 9 ? "document" : false);
			return h ? d._util_
					.getWindowOrDocumentWidthOrHeight(i, h, "height")
					: d._util_.getWidthOrHeight(i, "height", "padding")
		}
	});
	d.dom.extend({
		outerWidth : function(j) {
			if (this.size() <= 0) {
				return 0
			}
			var i = this[0], h = i != null && i === i.window ? "window"
					: (i.nodeType === 9 ? "document" : false);
			return h ? d._util_.getWindowOrDocumentWidthOrHeight(i, h, "width")
					: d._util_.getWidthOrHeight(i, "width", "padding|border"
							+ (j ? "|margin" : ""))
		}
	});
	d.dom.extend({
		outerHeight : function(j) {
			if (this.size() <= 0) {
				return 0
			}
			var i = this[0], h = i != null && i === i.window ? "window"
					: (i.nodeType === 9 ? "document" : false);
			return h ? d._util_
					.getWindowOrDocumentWidthOrHeight(i, h, "height")
					: d._util_.getWidthOrHeight(i, "height", "padding|border"
							+ (j ? "|margin" : ""))
		}
	});
	d.dom.extend({
		on : function(j, h, m, l, k) {
			var i = d._util_.eventBase.core;
			if (typeof h == "object" && h) {
				l = m, m = h, h = null
			} else {
				if (typeof m == "function") {
					l = m, m = null
				} else {
					if (typeof h == "function") {
						l = h, h = m = null
					}
				}
			}
			if (typeof j == "string") {
				j = j.split(/[ ,]+/);
				this.each(function() {
					d.forEach(j, function(n) {
						i.add(this, n, l, h, m, k)
					}, this)
				})
			} else {
				if (typeof j == "object") {
					if (l) {
						l = null
					}
					d.forEach(j, function(o, n) {
						this.on(n, h, m, o, k)
					}, this)
				}
			}
			return this
		}
	});
	d.event.on = d.on = function(h, j, i) {
		if (typeof h == "string") {
			h = d.dom.g(h)
		}
		d.dom(h).on(j.replace(/^\s*on/, ""), i);
		return h
	};
	d.dom.extend({
		off : function(j, h, k) {
			var i = d._util_.eventBase.core, l = this;
			if (!j) {
				d.forEach(this, function(m) {
					i.remove(m)
				})
			} else {
				if (typeof j == "string") {
					if (typeof h == "function") {
						k = h, h = null
					}
					j = j.split(/[ ,]/);
					d.forEach(this, function(m) {
						d.forEach(j, function(n) {
							i.remove(m, n, k, h)
						})
					})
				} else {
					if (typeof j == "object") {
						d.forEach(j, function(m, n) {
							l.off(n, h, m)
						})
					}
				}
			}
			return this
		}
	});
	d.event.un = d.un = function(h, j, i) {
		h = d.dom.g(h);
		d.dom(h).off(j.replace(/^\s*on/, ""), i);
		return h
	};
	d.dom.extend({
		bind : function(i, j, h) {
			return this.on(i, undefined, j, h)
		}
	});
	d.dom.extend({
		unbind : function(i, h) {
			return this.off(i, h)
		}
	});
	d.each = function(j, o, m) {
		var l, p, k, h;
		if (typeof o == "function" && j) {
			p = typeof j.length == "number" ? j.length : j.byteLength;
			if (typeof p == "number") {
				if (Object.prototype.toString.call(j) === "[object Function]") {
					return j
				}
				for (l = 0; l < p; l++) {
					k = j[l] || (j.charAt && j.charAt(l));
					h = o.call(m || k, l, k, j);
					if (h === false || h == "break") {
						break
					}
				}
			} else {
				if (typeof j == "number") {
					for (l = 0; l < j; l++) {
						h = o.call(m || l, l, l, l);
						if (h === false || h == "break") {
							break
						}
					}
				} else {
					if (typeof j == "object") {
						for (l in j) {
							if (j.hasOwnProperty(l)) {
								h = o.call(m || j[l], l, j[l], j);
								if (h === false || h == "break") {
									break
								}
							}
						}
					}
				}
			}
		}
		return j
	};
	void function(i) {
		var h = /firefox/i.test(navigator.userAgent);
		d.each({
			mouseenter : "mouseover",
			mouseleave : "mouseout"
		}, function(k, j) {
			i[k] = {
				bindType : j,
				pack : function(m) {
					var l = d.dom.contains;
					return function(o) {
						var n = o.relatedTarget;
						o.type = k;
						if (!n || (n !== this && !l(this, n))) {
							return m.apply(this, arguments)
						}
					}
				}
			}
		});
		if (h) {
			d.each({
				focusin : "focus",
				focusout : "blur"
			}, function(k, j) {
				i[k] = {
					bindType : j,
					attachElements : "textarea,select,input,button,a"
				}
			})
		}
		i.mousewheel = {
			bindType : h ? "DOMMouseScroll" : "mousewheel",
			pack : function(j) {
				return function(k) {
					var l = k.originalEvent;
					k.type = "mousewheel";
					k.wheelDelta = k.wheelDelta
							|| (h ? l.detail * -40 : l.wheelDelta) || 0;
					return j.apply(this, arguments)
				}
			}
		}
	}(d.event.special);
	void function(i) {
		var h = i.queue;
		d.dom.extend({
			triggerHandler : function(l, k, j) {
				if (j && !j.triggerData) {
					j.triggerData = k
				}
				d.forEach(this, function(m) {
					h.call(m, l, undefined, j)
				});
				return this
			}
		})
	}(d._util_.eventBase);
	void function(h, k) {
		var o = k.special;
		var l = h.queue;
		var j = d.dom;
		var m = {
			submit : 1
		};
		var q = function(t, u) {
			var w;
			if (document.createEvent) {
				w = document.createEvent("HTMLEvents"), w.initEvent(t, true,
						true)
			} else {
				if (document.createEventObject) {
					w = document.createEventObject(), w.type = t
				}
			}
			var s = {};
			if (u) {
				for ( var r in u) {
					try {
						w[r] = u[r]
					} catch (v) {
						if (!w.extraData) {
							w.extraData = s
						}
						s[r] = u[r]
					}
				}
			}
			return w
		};
		var p = function(r, s, t) {
			if (r.dispatchEvent) {
				return r.dispatchEvent(t)
			} else {
				if (r.fireEvent) {
					return r.fireEvent("on" + s, t)
				}
			}
		};
		var n = function(r) {
			return r.replace(/^\w/, function(t) {
				return t.toUpperCase()
			})
		};
		var i = function(u, w, v, s, r) {
			var y, t;
			if (y = q(w, s)) {
				if (v) {
					y.triggerData = v
				}
				if (r) {
					l.call(u, w, null, y)
				} else {
					try {
						t = p(u, w, y)
					} catch (x) {
						j(u).triggerHandler(w, v, y)
					}
				}
				if (t !== false && m[w]) {
					try {
						if (u[w]) {
							u[w]()
						} else {
							if (w = n(w), u[w]) {
								u[w]()
							}
						}
					} catch (x) {
					}
				}
			}
		};
		d.dom.extend({
			trigger : function(t, s, r) {
				var u;
				if (t in o) {
					u = o[t]
				}
				this.each(function() {
					i(this, t, s, r, u)
				});
				return this
			}
		})
	}(d._util_.eventBase, d.event);
	d.array.extend({
		indexOf : function(i, j) {
			d.check(".+(,number)?", "baidu.array.indexOf");
			var h = this.length;
			(j = j | 0) < 0 && (j = Math.max(0, h + j));
			for (; j < h; j++) {
				if (j in this && this[j] === i) {
					return j
				}
			}
			return -1
		}
	});
	d.dom.extend({
		ready : function() {
			var k = this, m, i = window.document;
			d._util_.isDomReady = false;
			d._util_._readyWait = 1;
			d.dom.holdReady = function(n) {
				if (n) {
					d._util_.readyWait++
				} else {
					h(true)
				}
			};
			var h = function(n) {
				if (n === true ? --d._util_.readyWait : d._util_.isDomReady) {
					return
				}
				if (!i.body) {
					return setTimeout(h, 1)
				}
				d._util_.isReady = true;
				if (n !== true && --d._util_.readyWait > 0) {
					return
				}
				m.resolveWith(i);
				if (d.dom.trigger) {
					d.dom(i).trigger("ready").off("ready")
				}
			};
			var j = function() {
				if (i.addEventListener) {
					i.removeEventListener("DOMContentLoaded", j, false);
					h()
				} else {
					if (i.readyState === "complete") {
						i.detachEvent("onreadystatechange", j);
						h()
					}
				}
			};
			var l = function(q) {
				if (!m) {
					m = d.Deferred();
					if (i.readyState === "complete") {
						setTimeout(h, 1)
					} else {
						if (i.addEventListener) {
							i.addEventListener("DOMContentLoaded", j, false);
							window.addEventListener("load", h, false)
						} else {
							i.attachEvent("onreadystatechange", j);
							window.attachEvent("onload", h);
							var p = false;
							try {
								p = window.frameElement == null
										&& i.documentElement
							} catch (o) {
							}
							if (p && p.doScroll) {
								(function n() {
									if (!d._util_.isDomReady) {
										try {
											p.doScroll("left")
										} catch (r) {
											return setTimeout(n, 50)
										}
										h()
									}
								})()
							}
						}
					}
				}
				return m.promise(q)
			};
			return function(n) {
				l().done(n);
				return k
			}
		}()
	});
	d.dom.ready = d.dom.fn.ready;
	d.dom.extend({
		one : function(i, h, k, j) {
			return this.on(i, h, k, j, 1)
		}
	});
	d.dom.extend({
		delegate : function(h, j, k, i) {
			if (typeof k == "function") {
				i = k, k = null
			}
			return this.on(j, h, k, i)
		}
	});
	d.dom.extend({
		undelegate : function(h, j, i) {
			return this.off(j, h, i)
		}
	});
	void function() {
		var h = ("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave mousewheel change select submit keydown keypress keyup error contextmenu")
				.split(" ");
		var k = {};
		var n = function(i) {
			k[i] = function(o, l) {
				if (l == null) {
					l = o, o = null
				}
				return arguments.length > 0 ? this.on(i, null, o, l) : this
						.trigger(i)
			}
		};
		for (var m = 0, j = h.length; m < j; m++) {
			n(h[m])
		}
		d.dom.extend(k)
	}();
	d.dom.extend({
		eq : function(h) {
			d.check("number", "baidu.dom.eq");
			return d.dom(this.get(h))
		}
	});
	d.dom.extend({
		is : function(h) {
			return d.dom.match(this, h).length > 0
		}
	});
	d.dom.extend({
		children : function(i) {
			var h, j = [];
			this.each(function(k) {
				d.forEach(this.children || this.childNodes, function(l) {
					l.nodeType == 1 && j.push(l)
				})
			});
			return d.dom(d.dom.match(j, i))
		}
	});
	d.dom.children = function(h) {
		d.check("string|HTMLElement", "baidu.dom.children");
		return d.dom(d.isString(h) ? "#" + h : h).children().toArray()
	};
	d.dom.extend({
		first : function() {
			return d.dom(this[0])
		}
	});
	d.dom.first = function(h) {
		d.isString(h) && (h = "#" + h);
		return d.dom(h).children()[0]
	};
	d.dom.extend({
		slice : function() {
			var h = Array.prototype.slice;
			return function(j, i) {
				d.check("number(,number)?", "baidu.dom.slice");
				return d.dom(h.apply(this, arguments))
			}
		}()
	});
	d.dom.extend({
		closest : function(h, j) {
			var i = d.array();
			d.forEach(this, function(l) {
				var k = [ l ];
				while (l = l.parentNode) {
					l.nodeType && k.push(l)
				}
				k = d.dom.match(k, h, j);
				k.length && i.push(k[0])
			});
			return d.dom(i.unique())
		}
	});
	d.dom.extend({
		next : function(h) {
			var i = d.dom();
			d.forEach(this, function(j) {
				while ((j = j.nextSibling) && j && j.nodeType != 1) {
				}
				j && (i[i.length++] = j)
			});
			return h ? i.filter(h) : i
		}
	});
	d.dom.extend({
		parent : function(h) {
			var i = [];
			d.forEach(this, function(j) {
				(j = j.parentNode) && j.nodeType == 1 && i.push(j)
			});
			return d.dom(d.dom.match(i, h))
		}
	});
	d.dom.extend({
		parents : function(h) {
			var i = [];
			d.forEach(this, function(k) {
				var j = [];
				while ((k = k.parentNode) && k.nodeType == 1) {
					j.push(k)
				}
				d.merge(i, j)
			});
			return d.dom(d.dom.match(i, h))
		}
	});
	d.dom.extend({
		prev : function(h) {
			var i = [];
			d.forEach(this, function(j) {
				while (j = j.previousSibling) {
					if (j.nodeType == 1) {
						i.push(j);
						break
					}
				}
			});
			return d.dom(d.dom.match(i, h))
		}
	});
	d.platform = d.platform
			|| function() {
				var i = navigator.userAgent, h = function() {
				};
				d.forEach("Android iPad iPhone Linux Macintosh Windows X11"
						.split(" "), function(k) {
					var j = k.charAt(0).toUpperCase()
							+ k.toLowerCase().substr(1);
					d["is" + j] = h["is" + j] = !!~i.indexOf(k)
				});
				return h
			}();
	d.createChain("sio", function(h) {
		switch (typeof h) {
		case "string":
			return new d.sio.$Sio(h);
			break
		}
	}, function(h) {
		this.url = h
	});
	d.sio._createScriptTag = function(i, h, j) {
		i.setAttribute("type", "text/javascript");
		j && i.setAttribute("charset", j);
		i.setAttribute("src", h);
		document.getElementsByTagName("head")[0].appendChild(i)
	};
	d.sio._removeScriptTag = function(i) {
		if (i.clearAttributes) {
			i.clearAttributes()
		} else {
			for ( var h in i) {
				if (i.hasOwnProperty(h)) {
					delete i[h]
				}
			}
		}
		if (i && i.parentNode) {
			i.parentNode.removeChild(i)
		}
		i = null
	};
	d.sio
			.extend({
				callByBrowser : function(n, p) {
					var h = this.url;
					var k = document.createElement("SCRIPT"), l = 0, q = p
							|| {}, j = q.charset, o = n || function() {
					}, m = q.timeOut || 0, i;
					k.onload = k.onreadystatechange = function() {
						if (l) {
							return
						}
						var r = k.readyState;
						if ("undefined" == typeof r || r == "loaded"
								|| r == "complete") {
							l = 1;
							try {
								o();
								clearTimeout(i)
							} finally {
								k.onload = k.onreadystatechange = null;
								d.sio._removeScriptTag(k)
							}
						}
					};
					if (m) {
						i = setTimeout(function() {
							k.onload = k.onreadystatechange = null;
							d.sio._removeScriptTag(k);
							q.onfailure && q.onfailure()
						}, m)
					}
					d.sio._createScriptTag(k, h, j)
				}
			});
	d.sio
			.extend({
				callByServer : function(t, u) {
					var h = this.url;
					var p = document.createElement("SCRIPT"), o = "bd__cbs__", r, l, v = u
							|| {}, k = v.charset, m = v.queryField
							|| "callback", s = v.timeOut || 0, i, j = new RegExp(
							"(\\?|&)" + m + "=([^&]*)"), n;
					if (d.lang.isFunction(t)) {
						r = o
								+ Math.floor(Math.random() * 2147483648)
										.toString(36);
						window[r] = q(0)
					} else {
						if (d.lang.isString(t)) {
							r = t
						} else {
							if (n = j.exec(h)) {
								r = n[2]
							}
						}
					}
					if (s) {
						i = setTimeout(q(1), s)
					}
					h = h.replace(j, "\x241" + m + "=" + r);
					if (h.search(j) < 0) {
						h += (h.indexOf("?") < 0 ? "?" : "&") + m + "=" + r
					}
					d.sio._createScriptTag(p, h, k);
					function q(w) {
						return function() {
							try {
								if (w) {
									v.onfailure && v.onfailure()
								} else {
									t.apply(window, arguments);
									clearTimeout(i)
								}
								window[r] = null;
								delete window[r]
							} catch (x) {
							} finally {
								d.sio._removeScriptTag(p)
							}
						}
					}
				}
			});
	d.object = d.object || {};
	d.lang.isArray = d.isArray;
	d.object.isPlain = d.isPlainObject;
	d.object.extend = d.extend;
	d.lang.isObject = d.isObject;
	d.lang.isFunction = d.isFunction;
	d.lang.Class = (function() {
		var h = (d._global_ = window[d.guid])._instances_;
		h || (h = d._global_._instances_ = {});
		return function() {
			this.guid = d.id();
			this._decontrol_ || (h[this.guid] = this)
		}
	})();
	d.lang.Class.prototype.dispose = function() {
		delete d._global_._instances_[this.guid];
		for ( var h in this) {
			typeof this[h] != "function" && delete this[h]
		}
		this.disposed = true
	};
	d.lang.Class.prototype.toString = function() {
		return "[object "
				+ (this._type_ || this.__type || this._className || "Object")
				+ "]"
	};
	var a = function(h) {
		return d._global_._instances_[h]
	};
	d.baiduInstance = a;
	d.lang.guid = function() {
		return d.id()
	};
	d.lang.isString = d.isString;
	d.lang.Event = function(h, i) {
		this.type = h;
		this.returnValue = true;
		this.target = i || null;
		this.currentTarget = null
	};
	d.lang.Class.prototype.fire = d.lang.Class.prototype.dispatchEvent = function(
			m, h) {
		d.lang.isString(m) && (m = new d.lang.Event(m));
		!this.__listeners && (this.__listeners = {});
		h = h || {};
		for ( var k in h) {
			m[k] = h[k]
		}
		var k, q, l = this, j = l.__listeners, o = m.type;
		m.target = m.target || (m.currentTarget = l);
		o.indexOf("on") && (o = "on" + o);
		typeof l[o] == "function" && l[o].apply(l, arguments);
		if (typeof j[o] == "object") {
			for (k = 0, q = j[o].length; k < q; k++) {
				j[o][k] && j[o][k].apply(l, arguments)
			}
		}
		return m.returnValue
	};
	d.lang.Class.prototype.on = d.lang.Class.prototype.addEventListener = function(
			m, l, k) {
		if (typeof l != "function") {
			return
		}
		!this.__listeners && (this.__listeners = {});
		var j, h = this.__listeners;
		m.indexOf("on") && (m = "on" + m);
		typeof h[m] != "object" && (h[m] = []);
		for (j = h[m].length - 1; j >= 0; j--) {
			if (h[m][j] === l) {
				return l
			}
		}
		h[m].push(l);
		k && typeof k == "string" && (h[m][k] = l);
		return l
	};
	d.page = d.page || {};
	d.global.get = function(h) {
		return d.global(h)
	};
	d.global.set = function(i, j, h) {
		return d.global(i, j, !h)
	};
	d.lang.instance = function(h) {
		return d._global_._instances_[h] || null
	};
	d.lang.inherits = function(n, l, k) {
		var j, m, h = n.prototype, i = new Function();
		i.prototype = l.prototype;
		m = n.prototype = new i();
		for (j in h) {
			m[j] = h[j]
		}
		n.prototype.constructor = n;
		n.superClass = l.prototype;
		typeof k == "string" && (m.__type = k);
		n.extend = function(p) {
			for ( var o in p) {
				m[o] = p[o]
			}
			return n
		};
		return n
	};
	d.dom.getStyle = function(i, h) {
		return d.dom(d.dom.g(i)).css(h)
	};
	d.page.getScrollTop = function() {
		var h = document;
		return window.pageYOffset || h.documentElement.scrollTop
				|| h.body.scrollTop
	};
	d.page.getScrollLeft = function() {
		var h = document;
		return window.pageXOffset || h.documentElement.scrollLeft
				|| h.body.scrollLeft
	};
	(function() {
		d.page.getMousePosition = function() {
			return {
				x : d.page.getScrollLeft() + h.x,
				y : d.page.getScrollTop() + h.y
			}
		};
		var h = {
			x : 0,
			y : 0
		};
		d.event.on(document, "onmousemove", function(i) {
			i = window.event || i;
			h.x = i.clientX;
			h.y = i.clientY
		})
	})();
	d.event.preventDefault = function(h) {
		return new d.event(h).preventDefault()
	};
	d.lang.createClass = function(j, q) {
		q = q || {};
		var o = q.superClass || d.lang.Class;
		var p = function() {
			var t = this;
			q.decontrolled && (t.__decontrolled = true);
			o.apply(t, arguments);
			for (r in p.options) {
				t[r] = p.options[r]
			}
			j.apply(t, arguments);
			for (var r = 0, s = p["\x06r"]; s && r < s.length; r++) {
				s[r].apply(t, arguments)
			}
		};
		p.options = q.options || {};
		var h = function() {
		}, n = j.prototype;
		h.prototype = o.prototype;
		var l = p.prototype = new h();
		for ( var k in n) {
			l[k] = n[k]
		}
		var m = q.className || q.type;
		typeof m == "string" && (l.__type = m);
		l.constructor = n.constructor;
		p.extend = function(s) {
			for ( var r in s) {
				p.prototype[r] = s[r]
			}
			return p
		};
		return p
	};
	d.dom.setPixel = function(i, h, j) {
		typeof j != "undefined"
				&& (d.dom.g(i).style[h] = j + (!isNaN(j) ? "px" : ""))
	};
	d.page.getViewHeight = function() {
		var i = document, j = d.browser.ie || 1, h = i.compatMode === "BackCompat"
				&& j < 9 ? i.body : i.documentElement;
		return h.clientHeight
	};
	d.global.getZIndex = function(h, j) {
		var i = d.global.get("zIndex");
		if (h) {
			i[h] = i[h] + (j || 1)
		}
		return i[h]
	};
	d.global.set("zIndex", {
		popup : 50000,
		dialog : 1000
	}, true);
	d.string.extend({
		format : function(h) {
			var j = this.valueOf(), i = Array.prototype.slice
					.call(arguments, 0), k = Object.prototype.toString;
			if (i.length) {
				i = i.length == 1 ? (h !== null
						&& (/\[object Array\]|\[object Object\]/
								.test(k.call(h))) ? h : i) : i;
				return j.replace(/#\{(.+?)\}/g, function(l, n) {
					var m = i[n];
					if ("[object Function]" == k.call(m)) {
						m = m(n)
					}
					return ("undefined" == typeof m ? "" : m)
				})
			}
			return j
		}
	});
	d.string.extend({
		encodeHTML : function() {
			return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(
					/>/g, "&gt;").replace(/"/g, "&quot;")
					.replace(/'/g, "&#39;")
		}
	});
	d.lang.isElement = d.isElement;
	d.createChain("fn", function(h) {
		return new d.fn.$Fn(~"function|string".indexOf(d.type(h)) ? h
				: function() {
				})
	}, function(h) {
		this.fn = h
	});
	d.fn.extend({
		bind : function(h) {
			var i = this.fn, j = arguments.length > 1 ? Array.prototype.slice
					.call(arguments, 1) : null;
			return function() {
				var l = d.type(i) === "string" ? h[i] : i, k = j ? j
						.concat(Array.prototype.slice.call(arguments, 0))
						: arguments;
				return l.apply(h || l, k)
			}
		}
	});
	d.fn.bind = function(j, i) {
		var h = d.fn(j);
		return h.bind.apply(h, Array.prototype.slice.call(arguments, 1))
	};
	d.lang.register = function(i, k, h) {
		var j = i["\x06r"] || (i["\x06r"] = []);
		j[j.length] = k;
		for ( var l in h) {
			i.prototype[l] = h[l]
		}
	};
	d.lang.isDate = d.isDate;
	d.page.getWidth = function() {
		var k = document, h = k.body, j = k.documentElement, i = k.compatMode == "BackCompat" ? h
				: k.documentElement;
		return Math.max(j.scrollWidth, h.scrollWidth, i.clientWidth)
	};
	d.page.getHeight = function() {
		var k = document, h = k.body, j = k.documentElement, i = k.compatMode == "BackCompat" ? h
				: k.documentElement;
		return Math.max(j.scrollHeight, h.scrollHeight, i.clientHeight)
	};
	(function() {
		var t = false, p, o, l, k, j, m, s, h, r, u;
		d.dom.drag = function(w, v) {
			if (!(p = d.dom.g(w))) {
				return false
			}
			o = d.object.extend({
				autoStop : true,
				capture : true,
				interval : 16
			}, v);
			h = m = parseInt(d.dom.getStyle(p, "left")) || 0;
			r = s = parseInt(d.dom.getStyle(p, "top")) || 0;
			t = true;
			setTimeout(
					function() {
						var y = d.page.getMousePosition();
						l = o.mouseEvent ? (d.page.getScrollLeft() + o.mouseEvent.clientX)
								: y.x;
						k = o.mouseEvent ? (d.page.getScrollTop() + o.mouseEvent.clientY)
								: y.y;
						clearInterval(j);
						j = setInterval(i, o.interval)
					}, 1);
			var x = d.dom(document);
			o.autoStop && x.on("mouseup", q);
			x.on("selectstart", n);
			if (o.capture && p.setCapture) {
				p.setCapture()
			} else {
				if (o.capture && window.captureEvents) {
					window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP)
				}
			}
			u = document.body.style.MozUserSelect;
			document.body.style.MozUserSelect = "none";
			d.isFunction(o.ondragstart) && o.ondragstart(p, o);
			return {
				stop : q,
				dispose : q,
				update : function(y) {
					d.object.extend(o, y)
				}
			}
		};
		function q() {
			t = false;
			clearInterval(j);
			if (o.capture && p.releaseCapture) {
				p.releaseCapture()
			} else {
				if (o.capture && window.captureEvents) {
					window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP)
				}
			}
			document.body.style.MozUserSelect = u;
			var v = d.dom(document);
			v.off("selectstart", n);
			o.autoStop && v.off("mouseup", q);
			d.isFunction(o.ondragend) && o.ondragend(p, o, {
				left : h,
				top : r
			})
		}
		function i(z) {
			if (!t) {
				clearInterval(j);
				return
			}
			var w = o.range || [], v = d.page.getMousePosition(), x = m + v.x
					- l, y = s + v.y - k;
			if (d.isObject(w) && w.length == 4) {
				x = Math.max(w[3], x);
				x = Math.min(w[1] - p.offsetWidth, x);
				y = Math.max(w[0], y);
				y = Math.min(w[2] - p.offsetHeight, y)
			}
			p.style.left = x + "px";
			p.style.top = y + "px";
			h = x;
			r = y;
			d.isFunction(o.ondrag) && o.ondrag(p, o, {
				left : h,
				top : r
			})
		}
		function n(v) {
			return d.event.preventDefault(v, false)
		}
	})();
	d.page.getViewWidth = function() {
		var i = document, h = i.compatMode == "BackCompat" ? i.body
				: i.documentElement;
		return h.clientWidth
	};
	d.array.extend({
		contains : function(h) {
			return !!~this.indexOf(h)
		}
	});
	d.array.extend({
		remove : function(h) {
			var i = this.length;
			while (i--) {
				if (this[i] === h) {
					this.splice(i, 1)
				}
			}
			return this
		}
	});
	d.lang.Class.prototype.un = d.lang.Class.prototype.removeEventListener = function(
			l, k) {
		var j, h = this.__listeners;
		if (!h) {
			return
		}
		if (typeof l == "undefined") {
			for (j in h) {
				delete h[j]
			}
			return
		}
		l.indexOf("on") && (l = "on" + l);
		if (typeof k == "undefined") {
			delete h[l]
		} else {
			if (h[l]) {
				typeof k == "string" && (k = h[l][k]) && delete h[l][k];
				for (j = h[l].length - 1; j >= 0; j--) {
					if (h[l][j] === k) {
						h[l].splice(j, 1)
					}
				}
			}
		}
	};
	d.array = d.array || {};
	d.dom = d.dom || {};
	d.addClass = d.dom.addClass || {};
	d.g = d.G = d.dom.g || {};
	d.getAttr = d.dom.getAttr || {};
	d.getStyle = d.dom.getStyle || {};
	d.hide = d.dom.hide || {};
	d.insertHTML = d.dom.insertHTML || {};
	d.q = d.Q = d.dom.q || {};
	d.removeClass = d.dom.removeClass || {};
	d.setAttr = d.dom.setAttr || {};
	d.setAttrs = d.dom.setAttrs || {};
	d.dom.setOuterHeight = d.dom.setBorderBoxHeight || {};
	d.dom.setOuterWidth = d.dom.setBorderBoxWidth || {};
	d.setStyle = d.dom.setStyle || {};
	d.setStyles = d.dom.setStyles || {};
	d.show = d.dom.show || {};
	d.e = d.element = d.element || {};
	d.event = d.event || {};
	d.on = d.event.on || {};
	d.un = d.event.un || {};
	d.lang = d.lang || {};
	d.inherits = d.lang.inherits || {};
	d.object = d.object || {};
	d.string = d.string || {};
	d.decodeHTML = d.string.decodeHTML || {};
	d.encodeHTML = d.string.encodeHTML || {};
	d.format = d.string.format || {};
	d.trim = d.string.trim || {};
	var e = null;
	if (typeof e != "function") {
		var e = function() {
		}
	}
	e.resourcePath = "";
	e.skinName = "default";
	e.version = "1.0.2.2";
	/msie 6/i.test(navigator.userAgent)
			&& document.execCommand("BackgroundImageCache", false, true);
	e.Base = function() {
		d.lang.Class.call(this);
		this._ids = {};
		this._eid = this.guid + "__"
	};
	d.lang.inherits(e.Base, d.lang.Class, "magic.Base").extend({
		getElement : function(h) {
			return document.getElementById(this.$getId(h))
		},
		getElements : function() {
			var h = {};
			var j = this._ids;
			for ( var i in j) {
				h[i] = this.getElement(i)
			}
			return h
		},
		$getId : function(h) {
			h = d.lang.isString(h) ? h : "";
			return this._ids[h] || (this._ids[h] = this._eid + h)
		},
		$mappingDom : function(h, i) {
			if (d.lang.isString(i)) {
				this._ids[h] = i
			} else {
				if (i && i.nodeType) {
					i.id ? this._ids[h] = i.id : i.id = this.$getId(h)
				}
			}
			return this
		},
		$dispose : function() {
			this.fire("ondispose") && d.lang.Class.prototype.dispose.call(this)
		}
	});
	e.control = e.control || {};
	e.control.Layer = d.lang.createClass(function(h) {
		this.width = "auto";
		this.height = "auto";
		d.object.extend(this, h || {})
	}, {
		type : "magic.control.Layer",
		superClass : e.Base
	}).extend({
		show : function() {
			if (this.fire("onbeforeshow")) {
				this.getElement().style.display = "";
				this.fire("onshow")
			}
		},
		hide : function() {
			if (this.fire("onbeforehide")) {
				this.getElement().style.display = "none";
				this.fire("onhide")
			}
		},
		setWidth : function(h) {
			d.dom.setPixel(this.getElement(), "width", (this.width = h))
		},
		setHeight : function(h) {
			d.dom.setPixel(this.getElement(), "height", (this.height = h))
		},
		setSize : function(h) {
			this.setWidth(h.width || h[0]);
			this.setHeight(h.height || h[1])
		}
	});
	e.control.Dialog = d.lang.createClass(function(h) {
		var i = this;
		h = d.object.extend({
			width : 400,
			height : 300,
			left : 0,
			top : 0,
			contentType : "html",
			draggable : true
		}, h || {});
		d.object.extend(i._options || (i._options = {}), h);
		i._footerHeight = 0;
		if (h.width < 100) {
			h.width = 100
		}
		if (h.height < 100) {
			h.height = 100
		}
		this.zIndex = 60001;
		this.disposeProcess = [];
		this.on("load", function() {
			var l = this.getElement(), p = this, s = p._options;
			if (typeof s.left == "number" || typeof s.top == "number") {
				this.setPosition(s)
			}
			if (typeof s.width == "number" || typeof s.height == "number") {
				this.setSize(this._options)
			}
			this._isShown = true;
			this.focus();
			var k = function(t) {
				p.focus(t)
			};
			d(document).on("mousedown", k);
			this.disposeProcess.unshift(function() {
				d(document).off("mousedown", k)
			});
			if (s.draggable) {
				var r = this.getElement("title"), q;
				var o = d.fn.bind;
				var p = this;
				var m = l.parentNode;
				var n = d(m).position();
				r.className += " tang-title-dragable";
				var j = {
					top : function() {
						var t = d(m).css("borderTopWidth");
						if (!/px/.test(t)) {
							t = 0
						} else {
							t = parseInt(t)
						}
						if (m == document.body) {
							return 0 - t
						} else {
							return 0 - (n.top + t)
						}
					},
					right : function() {
						var u = d(".tang-background-inner", l)[0];
						var t = d(u).css("marginLeft") == "auto" ? u.offsetLeft
								+ "px" : d(u).css("marginLeft");
						return d.page.getWidth() + j.left() - parseInt(t)
					},
					bottom : function() {
						var u = d(".tang-background-inner", l)[0];
						var t = d(u).css("marginTop") == "auto" ? u.offsetTop
								+ "px" : d(u).css("marginTop");
						return d.page.getHeight() + j.top() - parseInt(t)
					},
					left : function() {
						var t = d(m).css("borderLeftWidth");
						if (!/px/.test(t)) {
							t = 0
						} else {
							t = parseInt(t)
						}
						if (m == document.body) {
							return 0 - t
						} else {
							return 0 - (n.top + t)
						}
					}
				};
				d(r).on("mousedown", q = o(function(t) {
					t.preventDefault();
					d.dom.drag(l, {
						ondragstart : o(function() {
							this.fire("dragstart")
						}, this),
						ondrag : o(function() {
							this.fire("drag")
						}, this),
						ondragend : o(function() {
							this.fire("dragstop")
						}, this),
						range : [ j.top(), j.right(), j.bottom(), j.left() ]
					})
				}, this));
				this.disposeProcess.unshift(function() {
					d(r).off("mousedown", q)
				})
			}
		});
		this.on("resize", function(l, m) {
			var j = this.getElement("titleText");
			var k = this.getElement("titleButtons")
		})
	}, {
		type : "magic.control.Dialog",
		superClass : e.Base
	});
	e.control.Dialog.extend({
		isShowing : function() {
			return this._isShown
		},
		show : function() {
			if (this.fire("beforeshow") === false) {
				return this
			}
			this.getElement().style.display = "";
			this._isShown = true;
			this.fire("show")
		},
		hide : function(h) {
			if (this.fire("beforehide") === false) {
				return this
			}
			this._isShown = false;
			this.getElement().style.display = "none";
			if (h == "unHide") {
				this.hideMask();
				return this
			}
			this.fire("hide")
		},
		setTitleText : function(i) {
			var h = this.getElement("titleText");
			h.innerHTML = d.string.encodeHTML(i) || "&nbsp;";
			return this
		},
		setContent : function(k, m) {
			var i = this.getElement("content");
			var j, l, h;
			if (j = this._lastDom) {
				h = j.parent;
				if (j.content === k) {
					return this
				}
				if (j.target) {
					h.insertBefore(j.content, j.target)
				} else {
					h.appendChild(j.content)
				}
				this._lastDom = null
			}
			switch (m) {
			case "text":
				i.innerHTML = d.string.encodeHTML(k);
				d(i).removeClass("contentFrame");
				break;
			case "element":
				if (h = k.parentNode) {
					h.insertBefore(l = document.createTextNode(""), k);
					this._lastDom = {
						content : k,
						parent : k.parentNode,
						target : l
					}
				}
				i.innerHTML = "";
				i.appendChild(k);
				break;
			case "frame":
				d(i).css("height", d(this.getElement("body")).css("height"));
				i.innerHTML = "<iframe frameborder='no' src='" + k
						+ "'></iframe>";
				d(i).hasClass("contentFrame") || d(i).addClass("contentFrame");
				break;
			default:
				i.innerHTML = k;
				d(i).removeClass("contentFrame");
				break
			}
			return this
		},
		focus : function(l) {
			var j = d.global.get("dialogFocused").map, i = this.$getId()
					+ "focus", h = function() {
				for ( var m in j) {
					m != i && (j[m] = false)
				}
			};
			j || (d.global.get("dialogFocused").map = j = {});
			if (arguments.length) {
				var k = l.target;
				if (d(k).closest(this.getElement()).size() > 0) {
					d(this.getElement()).css("zIndex", this.zIndex = 60001);
					if (j[i] != true) {
						this.fire("focus");
						h();
						j[i] = true
					}
				} else {
					j[i] = false
				}
			} else {
				d(this.getElement()).css("zIndex", this.zIndex = 60001);
				j[i] = true;
				h();
				this.fire("focus")
			}
		},
		setSize : function(i) {
			var j = this.getElement("foreground");
			if (typeof i.width == "number") {
				d(j).css("width", (this._options.width = i.width) + "px")
			}
			if (typeof i.height == "number") {
				d(j).css("height", (this._options.height = i.height) + "px");
				var h = Math.max(0, this._options.height - this._titleHeight
						- this._footerHeight)
						+ "px";
				d(this.getElement("body")).css("height", h)
			}
			this.fire("resize", i)
		},
		getSize : function() {
			return {
				width : this._options.width,
				height : this._options.height
			}
		},
		setPosition : function(h) {
			if (typeof h.left == "number") {
				d(this.getElement()).css("left",
						(this._options.left = h.left) + "px")
			}
			if (typeof h.top == "number") {
				d(this.getElement()).css("top",
						(this._options.top = h.top) + "px")
			}
			this.fire("move", h)
		},
		getPosition : function() {
			return {
				left : this._options.left,
				top : this._options.top
			}
		},
		center : function() {
			var i = document[d.browser.isStrict ? "documentElement" : "body"];
			var h = i.clientWidth;
			var l = i.clientHeight;
			var k = (((h - this._options.width) / 2) | 0)
					+ d.page.getScrollLeft();
			var j = (((l - this._options.height) / 2) | 0)
					+ d.page.getScrollTop();
			this.setPosition({
				left : k,
				top : j
			})
		},
		$dispose : function() {
			var j = d.global.get("dialogFocused").map;
			if (j) {
				delete j[this.$getId() + "focus"]
			}
			for (var k = 0, h = this.disposeProcess.length; k < h; k++) {
				this.disposeProcess[k].call(this)
			}
			e.Base.prototype.$dispose.call(this)
		}
	});
	e.Background = d.lang
			.createClass(
					function(i) {
						var j = i || {}, k = this;
						k.coverable = j.coverable || false;
						k.styleBox = j.styleBox;
						k.tagName = "div";
						var h = "filter:progid:DXImageTransform.Microsoft.Alpha(opacity:0);position:absolute;z-index:-1;top:0;left:0;width:100%;height:100%;";
						k._coverDom = "<div style='" + h
								+ "opacity:0;background-color:#FFFFFF'></div>";
						var l = d.browser;
						l.ie < 7
								&& (k._coverDom = "<iframe frameborder='0' style='"
										+ h
										+ "' src='"
										+ ((window.location ? window.location.protocol
												.toLowerCase()
												: document.location.protocol
														.toLowerCase()) == "https:" ? "https://passport.baidu.com/passApi/html/_blank.html"
												: "about:blank")
										+ "'></iframe>");
						if (l.ie && (!l.isStrict || l.ie < 8)) {
							k.size = [ 0, 0 ];
							k.timer = setInterval(function() {
								k._forIE()
							}, 80)
						}
						this._innerHTML = "<div class='tang-background-inner' style='width:100%;height:100%;' id='"
								+ this.$getId("inner") + "'></div>"
					}, {
						type : "magic.Background",
						superClass : e.Base
					})
			.extend(
					{
						render : function(h) {
							var i = d.dom(h).get(0);
							i != document.body
									&& d.dom(i).css("position") == "static";
							d.dom(i).insertHTML("afterbegin",
									this.toHTMLString())
						},
						$dispose : function() {
							var h = this.getElement();
							h.parentNode.removeChild(h);
							clearInterval(this.timer)
						},
						toHTMLString : function(h) {
							return [
									"<",
									(h || this.tagName),
									" class='tang-background",
									(d.browser.ie < 7 ? " ie6__" : ""),
									"' id='",
									this.$getId(),
									"' style='position:absolute; top:0px; left:0px;",
									(this.timer ? "width:10px;height:10px;"
											: "width:100%;height:100%;"),
									"z-index:-9; -webkit-user-select:none; -moz-user-select:none;' ",
									"onselectstart='return false'>",
									this._innerHTML,
									(this.coverable ? this._coverDom || "" : ""),
									"</", (h || this.tagName), ">" ].join("")
						},
						setContent : function(h) {
							this.getElement("inner").innerHTML = h
						},
						_forIE : function() {
							if (this.guid
									&& this.layer
									|| ((this.layer = this.getElement()) && this.layer.offsetHeight)) {
								var p = this.layer;
								var k = this.container || p.parentNode;
								if (k && k.style) {
									var s = k.style, r = parseInt(s.borderTopWidth) || 0, t = parseInt(s.borderRightWidth) || 0, m = parseInt(s.borderBottomWidth) || 0, i = parseInt(s.borderLeftWidth) || 0, q = k.offsetWidth
											- t - i, j = k.offsetHeight - r - m;
									if (this.size[0] != q || this.size[1] != j) {
										p.style.width = (this.size[0] = q)
												+ "px";
										p.style.height = (this.size[1] = j)
												+ "px"
									}
									if (this.styleBox
											&& this.table
											|| (this.table = this
													.getElement("table"))) {
										var o, n, l;
										o = o
												|| parseInt(d.dom(
														this.table.rows[0])
														.getCurrentStyle(
																"height"));
										l = l
												|| parseInt(d.dom(
														this.table.rows[2])
														.getCurrentStyle(
																"height"));
										this.table.rows[0].style.height = o
												+ "px";
										this.table.rows[2].style.height = l
												+ "px";
										this.table.rows[1].style.height = (this.layer.offsetHeight
												- o - l)
												+ "px"
									}
								}
							}
						}
					});
	e.Dialog = d.lang.createClass(function(h) {
	}, {
		type : "magic.Dialog",
		superClass : e.control.Dialog
	});
	e.Dialog
			.extend({
				render : function(j) {
					if (d.type(j) === "string") {
						j = "#" + j
					}
					j = d(j)[0];
					j
							|| document.body.appendChild(j = document
									.createElement("div"));
					var i = e.Dialog.template.join(""), h = this._options;
					d(j).addClass(h.className || "tang-pass-pop-login");
					d(j).insertHTML("beforeEnd", d.string.format(i, {
						content : "",
						titleId : this.$getId("title"),
						bodyId : this.$getId("body"),
						contentId : this.$getId("content"),
						foregroundId : this.$getId("foreground"),
						footerId : this.$getId("footer"),
						footerContainerId : this.$getId("footerContainer")
					}));
					this._background = new e.Background({
						coverable : true
					});
					this._background.render(j);
					this.$mappingDom("", j);
					this._renderHeader();
					this._titleHeight = this.getElement("title").offsetHeight || 30;
					d(this.getElement("footer")).hide();
					this.fire("footer");
					this.setSize(h);
					this.setPosition(h);
					if (h.content) {
						this.setContent(h.content, h.contentType)
					}
					this.fire("load");
					this.show();
					this.disposeProcess.push(function() {
						d(this.getElement("closeBtn")).off("click",
								this._closeBtnFn);
						this._background.$dispose();
						j.innerHTML = "";
						d(j).removeClass("tang-ui tang-dialog")
					})
				},
				_renderHeader : function() {
					var h = [
							"<div class='buttons' id='",
							this.$getId("titleButtons"),
							"'>",
							"<a id='",
							this.$getId("closeBtn"),
							"' class='close-btn' href='###' onmousedown='event.stopPropagation && event.stopPropagation(); event.cancelBubble = true; return false;' onclick='return false;'></a>",
							"</div>",
							"<span id='",
							this.$getId("titleText"),
							"'>",
							d.string.encodeHTML(this._options.titleText || "")
									|| "&nbsp;", "</span>" ];
					d(this.getElement("title")).insertHTML("beforeEnd",
							h.join(""));
					d(this.getElement("closeBtn")).on("click",
							this._closeBtnFn = d.fn.bind(this.hide, this))
				}
			});
	e.Dialog.template = [ "<div class='tang-foreground' id='#{foregroundId}'>",
			"<div class='tang-title' id='#{titleId}'>", "</div>",
			"<div class='tang-body' id='#{bodyId}'>",
			"<div class='tang-content' id='#{contentId}'>#{content}</div>",
			"</div>", "<div class='tang-footer' id='#{footerId}'>",
			"<div id='#{footerContainerId}'></div>", "</div>", "</div>" ];
	d.lang
			.register(
					e.control.Dialog,
					function(h) {
						h
								&& h.buttons
								&& h.buttons.enable
								&& this
										.on(
												"footer",
												function() {
															this.buttons = null,
															d(
																	this
																			.getElement("footer"))
																	.show();
													this
															._createButton(h.buttons);
													d(
															this
																	.getElement("footerContainer"))
															.addClass(
																	"tang-footerContainer");
													var i = this
															.getElement("footer").offsetHeight;
													(!this.buttons || this.buttons.length == 0)
															&& (i = 30)
															&& d(
																	this
																			.getElement("footer"))
																	.css(
																			"height",
																			30);
													this._footerHeight = i
												})
					},
					{
						_createButton : function() {
							var m = this, j = arguments.length > 0 ? arguments[0]
									: {}, k = d(m.getElement("footerContainer")), l = m.buttons
									|| (m.buttons = []), i = false, h = (function() {
								var n = [
										'<a href="#" onClick="return false;" class="tang-dialog-button ',
										"",
										'">',
										'<span class="tang-dialog-button-s">',
										'<span class="tang-dialog-button-s-space">&nbsp;</span>',
										'<span class="tang-dialog-button-s-text">',
										"", "</span>", "</span>", "</a>" ];
								return function(p, o) {
									p.disabled ? (n[1] = "tang-dialog-button-disabled")
											: (n[1] = "");
									n[6] = p.text || "&nbsp;";
									d(o).insertHTML("beforeEnd", n.join(""));
									return d(o).children().get(0)
								}
							})();
							d
									.forEach(
											j.items || [],
											function(p, n) {
												var q, o;
												k
														.append(o = d('<span class="tang-dialog-button-carrier"></span>')[0]);
												o = typeof p == "object" ? (p.builder || h)
														.call(this, p, o, m, n)
														: p;
												!i && p.focused && !p.disabled
														&& (i = true)
														&& o.focus();
												l.push(o);
												p.disabled
														|| p.click
														&& d(o)
																.on(
																		"click",
																		q = function() {
																			p.click
																					.call(
																							this,
																							m)
																		});
												q
														&& this.disposeProcess
																.push(function() {
																	d(o)
																			.off(
																					"click",
																					q)
																})
											}, m);
							k.addClass("tang-button-" + (j.align || "right"))
						}
					});
	(function() {
		var h = [];
		function j() {
			for (var m = 0, k = h.length; m < k; m++) {
				h[m]()
			}
			h = []
		}
		function i() {
			var n = d.browser.ie;
			var l = document.createElement("div");
			l.className = "tang-mask";
			n == 6 && d(l).css("position", "absolute");
			d(l).css("zIndex", 59999);
			document.body.appendChild(l);
			function m() {
				l.style.display = "none";
				d(l).css("height", d.page.getViewHeight() + "px");
				d(l).css("width", d.page.getViewWidth() + "px");
				l.style.display = ""
			}
			function k() {
				l.style.display = "none";
				d(l).css("top", d.page.getScrollTop() + "px");
				d(l).css("left", d.page.getScrollLeft() + "px");
				l.style.display = ""
			}
			m();
			n == 6 && k();
			d(window).on("resize", m);
			h.push(function() {
				d(window).off("resize", m)
			});
			n == 6 && d(window).on("scroll", k);
			n == 6 && h.push(function() {
				d(window).off("scroll", k)
			});
			h.push(function() {
				document.body.removeChild(l)
			})
		}
	})();
	e.Mask = function(j) {
		var l = this;
		e.control.Layer.call(this);
		l.zIndex = 999;
		l.opacity = 0.3;
		l.bgColor = "#000000";
		l.coverable = false;
		l.container = document.body;
		d.object.extend(l, j || {});
		var k = d.browser.safari, m = d.browser.ie;
		d.dom(l.container).insertHTML("afterBegin", l.toHTMLString());
		if (m == 6) {
			l.getElement().style.position = "absolute"
		}
		function i() {
			if (l.container == document.body) {
				var o = l.getElement().style;
				o.display = "none";
				l.setSize([ d.page.getViewWidth(), d.page.getViewHeight() ]);
				o.display = ""
			}
		}
		function h() {
			if (l.container == document.body) {
				var o = l.getElement().style;
				o.display = "none";
				o.top = d.page.getScrollTop() + "px";
				o.left = d.page.getScrollLeft() + "px";
				o.display = ""
			}
		}
		function n(r) {
			var t = document.getElementsByTagName("object");
			var q = r ? "visible" : "hidden";
			for (var s = 0, u, p = t.length; s < p; s++) {
				u = t[s];
				u.style.visibility = q
			}
		}
		l.on("show", function() {
			i();
			m == 6 && h();
			d.dom(window).on("resize", i);
			m == 6 && d.dom(window).on("scroll", h);
			var o = l.getElement().style;
			o.opacity = l.opacity;
			o.zIndex = l.zIndex;
			o.filter = "alpha(opacity=" + l.opacity * 100 + ")";
			o.backgroundColor = l.bgColor;
			k && n(false)
		});
		l.on("hide", function() {
			d.dom(window).off("resize", i);
			m == 6 && d.dom(window).off("scroll", h);
			k && n(true)
		})
	};
	d.lang
			.inherits(e.Mask, e.control.Layer, "magic.Mask")
			.extend(
					{
						toHTMLString : function() {
							return "<div id='"
									+ this.$getId()
									+ "' style='top:0px; left:0px; position:fixed; display:none;'>"
									+ ("<iframe frameborder='0' style='filter:progid:DXImageTransform.Microsoft.Alpha(opacity:0);position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:-1' src='"
											+ ((window.location ? window.location.protocol
													.toLowerCase()
													: document.location.protocol
															.toLowerCase()) == "https:" ? "https://passport.baidu.com/passApi/html/_blank.html"
													: "about:blank") + "'></iframe><div style='position:absolute;top:0px;left:0px;width:100%;height:100%;z-index:-1;'>&nbsp;</div>")
									+ "</div>"
						}
					});
	d.lang.register(e.control.Dialog, function(h) {
		if (h && h.mask && h.mask.enable) {
			this.renderMask();
			this.on("load", function() {
				if (!this._options.left) {
					this.center()
				}
			});
			this.on("show", function() {
				this.showMask()
			});
			this.on("hide", function() {
				this.hideMask()
			})
		}
	}, {
		renderMask : function() {
			if (this._mask) {
				return this
			}
			var i = this._options.mask;
			this._mask = new e.Mask({
				opacity : i.opacity || 0.15,
				bgColor : i.bgColor || "#000",
				zIndex : this.zIndex - 1
			});
			var h = this;
			this.disposeProcess.push(function() {
				d(h._mask.getElement()).remove()
			});
			return this
		},
		showMask : function() {
			this._mask.show();
			return this
		},
		hideMask : function() {
			this._mask.hide();
			return this
		}
	});
	var g = g || window.passport || {};
	g._modulePool = g._modulePool || {};
	g._define = g._define || function(h, i) {
		g._modulePool[h] = i && i()
	};
	g._getModule = g._getModule || function(h) {
		return g._modulePool[h]
	};
	g._load = g._load
			|| function(j, h, o) {
				if (h) {
					var n = document, l = n.createElement("SCRIPT");
					l.type = "text/javascript";
					l.charset = "UTF-8";
					var i = j.split("?")[0];
					var m = Math.round(Math.random() * 1000);
					var k = new Date().getTime();
					if (l.readyState) {
						l.onreadystatechange = function() {
							if (l.readyState == "loaded"
									|| l.readyState == "complete") {
								l.onreadystatechange = null;
								if (100 == m) {
									var p = new Date().getTime() - k;
									(new Image()).src = "http://nsclick.baidu.com/v.gif?pid=111&type=1023&url="
											+ encodeURIComponent(i)
											+ "&time="
											+ p
								}
								o && o()
							}
						}
					} else {
						l.onload = function() {
							if (100 == m) {
								var p = new Date().getTime() - k;
								(new Image()).src = "http://nsclick.baidu.com/v.gif?pid=111&type=1023&url="
										+ encodeURIComponent(i) + "&time=" + p
							}
							o && o()
						}
					}
					if (100 == m) {
						l.src = i + "?t=" + Math.random()
					} else {
						l.src = j
					}
					n.getElementsByTagName("head")[0].appendChild(l)
				} else {
					var n = document, l = n.createElement("SCRIPT");
					l.type = "text/javascript";
					l.charset = "UTF-8";
					l.src = j;
					n.getElementsByTagName("head")[0].appendChild(l);
					if (l.readyState) {
						l.onreadystatechange = function() {
							if (l.readyState == "loaded"
									|| l.readyState == "complete") {
								l.onreadystatechange = null;
								o && o()
							}
						}
					} else {
						l.onload = function() {
							o && o()
						}
					}
				}
			};
	g._use = g._use
			|| function(k, l, m) {
				var j = (window.location ? ((window.location.protocol
						.toLowerCase() == "http:") ? "http://passport.bdimg.com"
						: "https://passport.baidu.com")
						: ((document.location.protocol.toLowerCase() == "http:") ? "http://passport.bdimg.com"
								: "https://passport.baidu.com"))
						+ l;
				var i = k + ".js";
				moduleInstance = g._getModule(i);
				if (moduleInstance) {
					m && m(moduleInstance)
				} else {
					g._load(j, true, h)
				}
				function h() {
					var n = g._getModule(i);
					if (n) {
						m && m(n)
					} else {
						throw new Error("load " + i + "module script error.")
					}
				}
			};
	g.use = g.use
			|| function(k, j, m) {
				var i = (j && j.tangram === false) ? "" : "_tangram";
				if (k == "reg" && j && j.regPhoneOnly) {
					k = "regPhone"
				}
				var l = {
					login : "/passApi/js/login_4e5b68bc.js",
					login_tangram : "/passApi/js/login_tangram_b01224f7.js",
					loginWap : "/passApi/js/loginWap_2dc90d3c.js",
					reg : "/passApi/js/reg_a7909e6c.js",
					reg_tangram : "/passApi/js/reg_tangram_82d08dce.js",
					regPhone : "/passApi/js/regPhone_2d22478e.js",
					regPhone_tangram : "/passApi/js/regPhone_tangram_05224777.js",
					fillUserName : "/passApi/js/fillUserName_8cfdd9b5.js",
					fillUserName_tangram : "/passApi/js/fillUserName_tangram_a26bd7aa.js",
					qrcode : "/passApi/js/qrcode_ffae2705.js",
					qrcode_tangram : "/passApi/js/qrcode_tangram_78458347.js",
					realUserTag : "/passApi/js/realUserTag_47a2f73b.js",
					realUserTag_tangram : "/passApi/js/realUserTag_tangram_c68b6d3f.js",
					bind : "/passApi/js/bind_8ef48bbe.js",
					bind_tangram : "/passApi/js/bind_tangram_199793bc.js",
					multiBind : "/passApi/js/multiBind_ea28cda3.js",
					multiBind_tangram : "/passApi/js/multiBind_tangram_5340600c.js",
					multiUnbind : "/passApi/js/multiUnbind_1d0612f3.js",
					multiUnbind_tangram : "/passApi/js/multiUnbind_tangram_c4a22274.js",
					changeUser : "/passApi/js/changeUser_a4717247.js",
					changeUser_tangram : "/passApi/js/changeUser_tangram_5b7cf147.js",
					loginMultichoice : "/passApi/js/loginMultichoice_cb590345.js",
					loginMultichoice_tangram : "/passApi/js/loginMultichoice_tangram_c65324d1.js",
					confirmWidget : "/passApi/js/confirmWidget_92063696.js",
					confirmWidget_tangram : "/passApi/js/confirmWidget_tangram_37566441.js"
				}, h = k + i;
				if (arguments.length == 2) {
					m = j
				}
				if (j && j.tangramInst) {
					g.tangramInst = j.tangramInst
				}
				g._use(h, l[h], m)
			};
	g.pop.login = function(l, n, r) {
		var m = function(v, t) {
			var u = document.createElement("div");
			u.id = v;
			return t ? u : document.body.appendChild(u)
		};
		var q = {}, i = {
			main : m("passport-login-pop"),
			dialog : m("passport-login-pop-dialog")
		}, j = [];
		var k = function() {
			var t = [];
			t.push('<div class="clearfix">');
			t.push(l.img ? '<div class="pass-login-pop-img"><img src="' + l.img
					+ '" alt="登录百度帐号即刻畅行百度" title="登录百度帐号即刻畅行百度"/></div>' : "");
			t.push('<div class="pass-login-pop-content">');
			t.push('<div class="pass-login-pop-form">');
			t.push('<div id="passport-login-pop-api"></div></div>');
			t.push("</div>");
			t.push("</div>");
			return t.join("")
		};
		var h = {
			template : function() {
				d(i.main)
						.addClass(
								l.img ? "tang-pass-pop-login-img"
										: "tang-pass-pop-login-noimg")
						.addClass("tang-pass-pop-login-merge")
						.addClass(
								"tang-pass-pop-login-tpl-"
										+ ((l.apiOpt && l.apiOpt.product) ? l.apiOpt.product
												: "isnull")).addClass(
								"tang-pass-pop-login-color-"
										+ ((l.color == "green") ? "green"
												: (l.color == "red" ? "red"
														: "blue")));
				i.dialog.innerHTML = k()
			},
			dialog : function() {
				q.dialog = new e.Dialog({
					draggable : true,
					titleText : "登录百度帐号",
					content : i.dialog,
					contentType : "element",
					width : l.img ? 532 : 393,
					height : "auto",
					mask : {
						enable : true
					}
				});
				q.dialog.render(i.main);
				q.dialog.hide();
				q.dialog._center = function() {
					q.dialog.center();
					q.dialog.setPosition({
						top : (d(window).height() - d(q.dialog.getElement())
								.height())
								/ 2 + d(window).scrollTop()
					})
				};
				d(window).on("resize", function() {
					q.dialog._center()
				})
			},
			login : function() {
				var t = q.login = new this.apiMagic.passport.login(l.apiOpt), v;
				t.render("passport-login-pop-api");
				q.dialog._center();
				t._ownerDialog = q.dialog;
				function u(x) {
					if ((/msie (\d+\.\d+)/i.test(navigator.userAgent) ? (document.documentMode || +RegExp["\x241"])
							: undefined) == 8) {
						var w = x.keyCode;
						if (w == 13) {
							x.type = "submit";
							t._eventHandler.entrance.apply(t, [ x ])
						}
					}
				}
				d(t.getElement("userName")).on("keydown", u);
				d(t.getElement("password")).on("keydown", u);
				d(t.getElement("verifyCode")).on("keydown", u)
			},
			init : function(t) {
				this.apiMagic = t;
				this.template();
				this.dialog();
				this.login()
			}
		};
		function p() {
			var u = q.dialog, t = q.login;
			n.show = function(w) {
				if (w) {
					var v = d(".pass-login-pop-img img").get(0);
					v && (v.src = w)
				}
				n.reset();
				u.show.call(u);
				if (l && l.hunter && window.Hunt) {
					window.Hunt.start("29680", {})
				}
				return n
			};
			n.hide = function() {
				u.hide.call(u);
				return n
			};
			n.center = function() {
				u._center.call(u);
				return n
			};
			n.reset = function() {
				t._validateSuccess({
					field : "userName"
				});
				t._validateSuccess({
					field : "password"
				});
				t._validateSuccess({
					field : "verifyCode"
				});
				if (t.suggestionDom) {
					t.suggestionDom.style.display = "none"
				}
				n.center();
				return n
			};
			n.destroy = function() {
				for (var w = 0, v = j.length; w < v; w++) {
					var x = j[w];
					x.el.off(x.event, x.handler)
				}
				t.$dispose();
				u.$dispose();
				l && l.onDestroy && l.onDestroy()
			}
		}
		function o() {
			var u = q.dialog, t = q.login;
			l && l.onShow && u.on("show", l.onShow);
			l && l.onHide && u.on("hide", function() {
				l.onHide && l.onHide()
			});
			l && l.onSubmitStart && t.on("beforeSubmit", l.onSubmitStart);
			l && l.onLoginSuccess && t.on("loginSuccess", l.onLoginSuccess);
			l && l.onSubmitedErr && t.on("loginError", l.onSubmitedErr);
			l && l.beforeJump && t.on("beforeJump", l.beforeJump);
			l && l.onSystemErr && t.on("onSystemErr", l.onSystemErr);
			if (l && l.hunter && window.Hunt) {
				u.on("hide", function() {
					window.Hunt.stop()
				})
			}
		}
		function s() {
			g.use("login", {
				tangram : false,
				tangramInst : (l.tangram ? d : null)
			}, function(t) {
				l = d.extend({
					img : false
				}, l);
				l.apiOpt = l.apiOpt || {};
				l.apiOpt.diaPassLogin = true;
				l.apiOpt.phoenixLimit = l.img ? 5 : 7;
				if (l.apiOpt && l.apiOpt.product == "vd") {
					l.apiOpt.phoenixLimit = l.img ? 3 : 4
				}
				if (l.apiOpt.sms === 0) {
					l.apiOpt.sms = 0
				} else {
					if (!l.apiOpt.sms) {
						l.apiOpt.sms = 1
					}
				}
				l.apiOpt.authsiteLogin = l.authsite;
				l.apiOpt.authsiteCfgLogin = l.authsiteCfg;
				l.apiOpt.qrcode = false;
				l.apiOpt.loginMerge = true;
				l.apiOpt.hasRegUrl = true;
				l.apiOpt.autosuggest = true;
				l.apiOpt.hasPlaceholder = true;
				l.apiOpt.registerLink = l.registerLink;
				h.init(t);
				p();
				o();
				r && r()
			})
		}
		s()
	}
})();

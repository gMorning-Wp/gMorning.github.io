(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{330:function(e,s,r){"use strict";r.r(s);var n=r(33),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h4",{attrs:{id:"为什么app-locals定义的键值对能在模板中直接访问呢"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#为什么app-locals定义的键值对能在模板中直接访问呢"}},[e._v("#")]),e._v(" 为什么app.locals定义的键值对能在模板中直接访问呢")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("不知道大家在使用express框架开发的过程中，有没有过这样的疑问，在app.locals这个对象字面量中定义的键值对，是可以直接在模板中使用的，就和res.render时开发者传入的模板渲染参数一样，那么为什么能这样操作呢，本文就是从源码角度浅析下这个问题。")]),e._v(" "),r("h4",{attrs:{id:"res-render做了些什么"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#res-render做了些什么"}},[e._v("#")]),e._v(" res.render做了些什么")]),e._v(" "),r("p",[e._v("其实要探讨大标题的问题，必须先弄明白，当我们在路由函数中使用：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("  res.render(view, data)\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("在服务端渲染输出页面的时候，express做了些什么。\n这本身就是一个很有意思的问题，因为，大部分Express开发者都遇到过如下二种写法：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("res.render(view, data);\nres.render(view, data, (err, text)=>if(!err)=>res.send(text));\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("很有意思吧，也就是说，当我们调用res的render方法时，如果不传第三个回调函数，则render结束后将结果HTML自动发送给浏览器；如果我们传入第三个回调函数，则服务器端的render页面结果HTML字符串会以该回调函数的第二个参数的形式返回（上述代码样例中的text），此时何时返回调用"),r("code",[e._v("res.send")]),e._v("方法将HTML给浏览器由开发者自己决定。")]),e._v(" "),r("p",[e._v("接下来我们就深入Express的源码来理解下，为什么可以这样进行编码。经过查阅express的源码，可以发现"),r("code",[e._v("res.render")]),e._v("方法最终是在"),r("code",[e._v("express/lib/response.js")]),e._v("中实现的。至于在形如：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("app.get(‘/index’, (req, res, next)=>res.render(‘index’))\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br")])]),r("p",[e._v("的常规路由函数中，初始的http服务器处理句柄中传入的原始req和res何时被express自动包装，提供了诸如"),r("code",[e._v("res.send()")]),e._v(", res.json()等方法调用链，这里只提供大略的源码路线，不作详细展开：其实此处大家可以自己看"),r("code",[e._v("lib/application.js")]),e._v("，从第一个中间件加载开始（或者没有中间件，直接开始加载路由），都会执行一个lazyrouter方法，那么原始的req和res正是在这里使用原型链赋值的方式进行初始化包装了express提供的\n"),r("code",[e._v("lib/request.js")]),e._v("和"),r("code",[e._v("lib/response.js")]),e._v("方法的。\n有点扯远了，回归正途，首先贴一下"),r("code",[e._v("res.render")]),e._v("的精简后的源码：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("function render(view, options, callback) {\n\tvar app = this.req.app;\n\tvar done = callback;\n\tvar opts = options || {};\n\tvar req = this.req;\n\tvar self = this;\n\tdone = done || function (err, str) {\n\t\tif (err) return req.next(err);\n\t\tself.send(str);\n\t};\n\tapp.render(view, opts, done);\n};\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br")])]),r("p",[e._v("这段代码非常容易理解，也解释了本节最开始提出的问题，两种写法都支持的原因，就是：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var done = callback;\ndone = done || function (err, str) {\n\tif (err) return req.next(err);\n\tself.send(str);\n};\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br")])]),r("p",[e._v("显然，如果用户传入了回调函数，则done就是用户传入的回调函数，如果用户没有传入回调函数，则express框架自动给你添加了一个渲染完成没有错误自动将渲染后的HTML返回给浏览器的回调函数，当然这个自动添加的回调函数也提供了简单的异常处理，比如渲染出错，就走next(err)，返回500给浏览器。\n接下来就是")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("var app = this.req.app;\napp.render(view, opts, done);\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br")])]),r("p",[e._v("这里的app可以通过"),r("code",[e._v("this.req.app")]),e._v("来获取来获取的原因，就是上面提到的原始req和res在lazyrouter中进行了一系列初始化的结果，具体不展开了。而得到的app，就是原始的express生成的app。\n所以，"),r("code",[e._v("res.render")]),e._v("方法，最终调用的就是"),r("code",[e._v("app.render")]),e._v("方法，并且传入了三个参数"),r("code",[e._v("view")]),e._v("，"),r("code",[e._v("opts")]),e._v("，"),r("code",[e._v("done")]),e._v("。其中view依旧是模板路径，opts则是渲染该模板传入的参数，最后的done就是回调函数。")]),e._v(" "),r("h4",{attrs:{id:"app-render"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#app-render"}},[e._v("#")]),e._v(" app.render")]),e._v(" "),r("p",[e._v("上面一节分析了这么多，其实正主在这里。我们可以看到，最终所有的render方法，收口的地方在"),r("code",[e._v("app.render")]),e._v("函数中。这个函数也能找到本文的主题："),r("code",[e._v("app.locals")]),e._v("中定义的键值对为何能在模板中直接使用，真正原因。\n核心的代码如下：")]),e._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("function render(name, options, callback) {\n\t…\n\tvar renderOptions = {};\n\tvar opts = options;\n\t…\n\tmerge(renderOptions, this.locals);\n\tif (opts._locals) {\n    \t\tmerge(renderOptions, opts._locals);\n\t}\n\tmerge(renderOptions, opts);\n\t…\n\ttryRender(view, renderOptions, done);\n}\n\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br"),r("span",{staticClass:"line-number"},[e._v("4")]),r("br"),r("span",{staticClass:"line-number"},[e._v("5")]),r("br"),r("span",{staticClass:"line-number"},[e._v("6")]),r("br"),r("span",{staticClass:"line-number"},[e._v("7")]),r("br"),r("span",{staticClass:"line-number"},[e._v("8")]),r("br"),r("span",{staticClass:"line-number"},[e._v("9")]),r("br"),r("span",{staticClass:"line-number"},[e._v("10")]),r("br"),r("span",{staticClass:"line-number"},[e._v("11")]),r("br"),r("span",{staticClass:"line-number"},[e._v("12")]),r("br"),r("span",{staticClass:"line-number"},[e._v("13")]),r("br"),r("span",{staticClass:"line-number"},[e._v("14")]),r("br")])]),r("p",[e._v("我把和大标题无关的view生成代码都去掉了，可以看到，最后调用tryRender方法进行渲染传入的参数renderOptions，其实是由"),r("code",[e._v("app.locals")]),e._v("，"),r("code",[e._v("options._locals")]),e._v("(如果存在的话)和真正的由开发者传入的渲染页面所需要的参数options，这三者merge而成的。\n那么在模板中，真正输出给模板的参数是这个包含上述三者的renderOptions，故而，我们可以在模板中和调用自己传入参数一样的方式，直接调用"),r("code",[e._v("app.locals")]),e._v("中定义的键值对。")]),e._v(" "),r("h4",{attrs:{id:"结语"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[e._v("#")]),e._v(" 结语")]),e._v(" "),r("p",[e._v("存储在app.locals中的这些键值对一般是公共模板方法或者公共模板变量，express提供了这样的机制，便于公共数据和方法在模板中的使用，而无需每次render手动传入，这种思想值得我们设计代码框架时学习。")])])}),[],!1,null,null,null);s.default=a.exports}}]);
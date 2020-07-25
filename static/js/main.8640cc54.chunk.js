(this["webpackJsonpsimple-github-search"]=this["webpackJsonpsimple-github-search"]||[]).push([[0],{134:function(e,t,n){e.exports=n(223)},136:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);n(135),n(136);var r,i,a,o,c,s,l,u,d,p,f=n(0),h=n.n(f),b=n(31),y=n.n(b),g=n(16),m=n(27),v=n(38),O=n(37),j=n(55),w=n(227),E=n(225),k=n(91),x=n(224),I=n(124),S=n(68),C=n(12),T=n(10),z=(n(71),n(5)),R=n(110),L=n.n(R),P=n(111),q=n(112),H=(r=function(){function e(t){var n=this;Object(g.a)(this,e),Object(C.a)(this,"data",i,this),Object(C.a)(this,"total",a,this),Object(C.a)(this,"loading",o,this),Object(C.a)(this,"q",c,this),Object(C.a)(this,"type",s,this),this.first=10,this.last=void 0,this.after=void 0,this.before=void 0,this.accessToken=void 0,Object(C.a)(this,"loadFromSearch",l,this),Object(C.a)(this,"setQ",u,this),Object(C.a)(this,"setType",d,this),this.setPageInfo=function(e){var t,r;"next"===e&&(n.after=null===(t=n.pageInfo)||void 0===t?void 0:t.endCursor,n.before=void 0,n.first=10,n.last=void 0);"previous"===e&&(n.before=null===(r=n.pageInfo)||void 0===r?void 0:r.startCursor,n.after=void 0,n.last=10,n.first=void 0);n.search()},Object(C.a)(this,"search",p,this);var r=t.accessToken,f=t.search;this.accessToken=r,this.loadFromSearch(f)}return Object(m.a)(e,[{key:"pageInfo",get:function(){var e;return null===(e=this.data)||void 0===e?void 0:e.data.search.pageInfo}},{key:"pageTotal",get:function(){var e,t;return"REPOSITORY"===this.type?Math.min(1e3,(null===(e=this.data)||void 0===e?void 0:e.data.search.repositoryCount)||0):"ISSUE"===this.type?Math.min(1e3,(null===(t=this.data)||void 0===t?void 0:t.data.search.issueCount)||0):0}}]),e}(),i=Object(T.a)(r.prototype,"data",[z.n],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),a=Object(T.a)(r.prototype,"total",[z.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),o=Object(T.a)(r.prototype,"loading",[z.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),c=Object(T.a)(r.prototype,"q",[z.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),s=Object(T.a)(r.prototype,"type",[z.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"REPOSITORY"}}),Object(T.a)(r.prototype,"pageInfo",[z.g],Object.getOwnPropertyDescriptor(r.prototype,"pageInfo"),r.prototype),Object(T.a)(r.prototype,"pageTotal",[z.g],Object.getOwnPropertyDescriptor(r.prototype,"pageTotal"),r.prototype),l=Object(T.a)(r.prototype,"loadFromSearch",[z.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var n=$(t);n.q&&(e.q=n.q),n.type&&(e.type=n.type),e.search()}}}),u=Object(T.a)(r.prototype,"setQ",[z.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.q=t,e.after=void 0,e.before=void 0,W({q:t}),e.search()}}}),d=Object(T.a)(r.prototype,"setType",[z.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){e.type=t,e.data=void 0,W({type:t}),e.search()}}}),p=Object(T.a)(r.prototype,"search",[z.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){if(e.accessToken){e.loading=!0;var t=Object(z.q)({query:e.q,first:e.first,last:e.last,type:e.type,after:e.after,before:e.before});L()({url:"https://api.github.com/graphql",headers:{Authorization:"Bearer ".concat(e.accessToken)},method:"POST",data:{query:"\nquery githubsearch($query: String!, $first: Int, $last: Int, $type: SearchType!, $after: String, $before: String) {\n    search(query: $query, type: $type, first: $first, last: $last, after: $after, before: $before) {\n        issueCount\n        repositoryCount\n        nodes {\n            ... on Repository {\n                id\n                name\n                nameWithOwner\n                updatedAt\n                shortDescriptionHTML(limit: 120)\n                primaryLanguage {\n                    color\n                    name\n                }\n                licenseInfo {\n                    hidden\n                    spdxId\n                }\n                repositoryTopics(first: 10) {\n                    nodes {\n                        topic {\n                            name\n                        }\n                        url\n                    }\n                }\n                stargazers {\n                    totalCount\n                }\n                url\n            }\n            ... on Issue {\n                id\n                title\n                state\n                body\n                url\n            }\n        }\n        pageInfo {\n            hasNextPage\n            startCursor\n            hasPreviousPage\n            endCursor\n        }\n    }\n}\n",variables:t}}).then(Object(z.f)((function(t){200===t.status&&(e.data=t.data),e.loading=!1}))).catch(Object(z.f)((function(t){console.error(t),e.loading=!1})))}else console.error("token is missing")}}}),r);function W(e){var t=$(window.location.search),n="".concat(window.location.pathname,"?").concat(Object(P.stringify)(Object(S.a)(Object(S.a)({},t),e)));window.history.pushState({url:n},"",n)}function $(e){return e.startsWith("?")&&(e=e.substring(1)),Object(q.parse)(e)}var A,B,D,_,F,G,K,M,U,N,Y,J,Q,V,X,Z=n(228),ee=n(229),te=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e,t,n=this.props.item;return f.createElement("div",{key:n.id,style:{padding:"24px 0",borderTop:"1px solid #e1e4e8"}},f.createElement("a",{style:{fontSize:"16px"},href:n.url,target:"__blank"},n.nameWithOwner),f.createElement("div",{style:{marginBottom:"4px"},dangerouslySetInnerHTML:{__html:n.shortDescriptionHTML}}),f.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},null===(e=n.repositoryTopics)||void 0===e?void 0:e.nodes.map((function(e){return f.createElement(Z.a,{key:e.url,style:{borderRadius:6,marginBottom:4,cursor:"pointer"},color:"blue",onClick:function(){window.open(e.url)}},f.createElement("div",{style:{fontSize:12,fontWeight:500}},e.topic.name))}))),f.createElement("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",fontSize:12,marginTop:4}},f.createElement("div",{style:{display:"flex",alignItems:"center",marginRight:16}},f.createElement(ee.a,null),f.createElement("div",{style:{marginLeft:4}},null===(t=n.stargazers)||void 0===t?void 0:t.totalCount)),n.primaryLanguage&&f.createElement("div",{style:{display:"flex",alignItems:"center",marginRight:16}},f.createElement("div",{style:{width:12,height:12,borderRadius:6,backgroundColor:n.primaryLanguage.color,marginRight:4}}),f.createElement("div",null,n.primaryLanguage.name)),n.licenseInfo&&!n.licenseInfo.hidden&&f.createElement("div",{style:{display:"flex",alignItems:"center",marginRight:16}},f.createElement("div",{style:{marginLeft:4}},"".concat(n.licenseInfo.spdxId," license"))),n.updatedAt&&f.createElement("div",null,"Updated on ".concat(new Date(n.updatedAt).toLocaleString()))))}}]),n}(f.Component),ne=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.item,t=e.body||"",n=t.length>120?t.substring(0,120)+" ...":t;return f.createElement("div",{key:e.id,style:{padding:"24px 0",borderTop:"1px solid #e1e4e8"}},f.createElement("a",{style:{fontSize:"16px"},href:e.url,target:"__blank"},e.title),f.createElement("div",{style:{marginBottom:"4px"}},n))}}]),n}(f.Component),re=n(59),ie=n(226),ae=n(113),oe=(A=function e(){var t=this;Object(g.a)(this,e),this.storageKey=window.location.hostname+"search_history",Object(C.a)(this,"history",B,this),Object(C.a)(this,"add",D,this),Object(C.a)(this,"delete",_,this),Object(C.a)(this,"clean",F,this),this.save=function(){localStorage.setItem(t.storageKey,JSON.stringify(t.history))},Object(C.a)(this,"getFromLocal",G,this),this.getFromLocal()},B=Object(T.a)(A.prototype,"history",[z.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),D=Object(T.a)(A.prototype,"add",[z.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){if(t){var n=e.history.findIndex((function(e){return e===t}));n>-1&&e.history.splice(n,1),e.history.unshift(t),e.save()}}}}),_=Object(T.a)(A.prototype,"delete",[z.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(t){var n=e.history.findIndex((function(e){return e===t}));-1!==n&&(e.history.splice(n,1),e.save())}}}),F=Object(T.a)(A.prototype,"clean",[z.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){console.log("clean"),e.history=[],e.save()}}}),G=Object(T.a)(A.prototype,"getFromLocal",[z.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){var t=localStorage.getItem(e.storageKey)||"[]";e.history=JSON.parse(t)}}}),A),ce=Object(j.a)((M=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(g.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).historyStore=new oe,e.input=null,Object(C.a)(e,"showHistory",U,Object(re.a)(e)),e.onChange=ae.debounce((function(t){var n,r=e.props.store;e.close(),null===(n=e.input)||void 0===n||n.blur(),r.setQ(t),e.historyStore.add(t)}),800),Object(C.a)(e,"show",N,Object(re.a)(e)),Object(C.a)(e,"close",Y,Object(re.a)(e)),e.documentClickHandler=function(){e.close()},e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){window.document.addEventListener("click",this.documentClickHandler)}},{key:"componentWillUnmount",value:function(){window.document.removeEventListener("click",this.documentClickHandler)}},{key:"render",value:function(){var e=this,t=this.props,n=t.style,r=t.store;return f.createElement("div",{style:{position:"relative"}},f.createElement(ie.a,{ref:function(t){return e.input=t},placeholder:"Search...",style:Object(S.a)({borderRadius:6},n),onChange:function(t){return e.onChange(t.target.value)},defaultValue:r.q,onFocus:this.show,onClick:function(e){return e.nativeEvent.stopImmediatePropagation()},onPressEnter:function(t){return e.onChange(t.currentTarget.value)}}),this.showHistory&&this.historyStore.history.length>0&&f.createElement("div",{style:{zIndex:99,position:"absolute",top:36,left:0,right:0,maxHeight:200,backgroundColor:"#fff",boxShadow:"rgb(51, 51, 51, 0.1) 0px 10px 12px"},onClick:function(e){return e.nativeEvent.stopImmediatePropagation()}},this.historyStore.history.map((function(t){return f.createElement("div",{key:t,style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"4px 12px",fontSize:"16px",color:"#666",cursor:"pointer"},onClick:function(){var n;e.close(),null===(n=e.input)||void 0===n||n.setValue(t),r.setQ(t)}},t)})),f.createElement("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"4px 12px"}},f.createElement("div",{style:{color:"#666",cursor:"pointer"},onClick:function(t){e.historyStore.clean(),e.close()}},"\u6e05\u9664\u8bb0\u5f55"))))}}]),n}(f.Component),U=Object(T.a)(M.prototype,"showHistory",[z.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return!1}}),N=Object(T.a)(M.prototype,"show",[z.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.showHistory=!0}}}),Y=Object(T.a)(M.prototype,"close",[z.f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){var e=this;return function(){e.showHistory=!1}}}),K=M))||K,se=n(230),le=Object(j.a)(J=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(g.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).store=new H({accessToken:e.props.accessToken,search:document.location.search}),e.renderList=function(){var t,n,r,i=((null===(t=e.store.data)||void 0===t?void 0:t.data.search.nodes)||[]).filter((function(e){return e.id}));return e.store.data?f.createElement(E.b,{style:{height:"100%"},itemLayout:"vertical",size:"large",dataSource:i,renderItem:e.renderItem,footer:f.createElement("div",{style:{display:"flex",flexDirection:"row-reverse",alignItems:"center"}},[{text:"Next",action:"next",disabled:null===(n=e.store.pageInfo)||void 0===n?void 0:n.hasNextPage},{text:"Previous",action:"previous",disabled:null===(r=e.store.pageInfo)||void 0===r?void 0:r.hasPreviousPage}].filter((function(e){return e.disabled})).map((function(t){return f.createElement(k.a,{key:t.action,style:{padding:"0 10px",fontSize:"16px"},type:"link",onClick:function(){e.store.setPageInfo(t.action),window.scrollTo(0,0)}},t.text)})))}):null},e.renderItem=function(t){return"REPOSITORY"===e.store.type?f.createElement(te,{item:t}):"ISSUE"===e.store.type?f.createElement(ne,{item:t}):null},e.renderCountTip=function(){var t=function(){var t,n;switch(e.store.type){case"REPOSITORY":return"Showing ".concat(null===(t=e.store.data)||void 0===t?void 0:t.data.search.repositoryCount.toLocaleString()," available repository results");case"ISSUE":return"".concat(null===(n=e.store.data)||void 0===n?void 0:n.data.search.issueCount.toLocaleString()," issues");default:return""}}();return e.store.data&&t&&f.createElement("div",{style:{fontSize:24,color:"#24292E",fontWeight:"bold",marginBottom:16}},t)},e.renderTypeRadio=function(){return f.createElement("div",{style:{marginBottom:24}},f.createElement(x.default.Group,{size:"small",buttonStyle:"solid",defaultValue:e.store.type,onChange:function(t){e.store.setType(t.target.value)}},f.createElement(x.default.Button,{value:"REPOSITORY"},"Repositories"),f.createElement(x.default.Button,{value:"ISSUE"},"Issues")))},e}return Object(m.a)(n,[{key:"render",value:function(){return f.createElement(I.a,{spinning:this.store.loading},f.createElement("div",{style:{maxWidth:"768px",margin:"auto",padding:"0 20px"}},f.createElement("div",{style:{marginBottom:24}},f.createElement("h2",{style:{color:"#24292E"}},f.createElement(se.a,{style:{marginRight:6}}),"Search Github"),f.createElement(ce,{style:{width:"100%"},store:this.store})),this.renderTypeRadio(),this.renderCountTip(),this.renderList()))}}]),n}(f.Component))||J,ue=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(g.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).value="",e}return Object(m.a)(n,[{key:"render",value:function(){var e=this,t=this.props.config;return f.createElement("div",{style:{maxWidth:"768px",margin:"auto",padding:"0 20px"}},f.createElement("div",{style:{display:"flex",flexDirection:"row",alignItems:"center"}},f.createElement(ie.a,{placeholder:"input access token for test",onChange:function(t){return e.value=t.target.value}}),f.createElement(k.a,{onClick:function(){return t.setGithubAccessToken(e.value)}},"Confirm")))}}]),n}(f.Component),de=(Q=function(){function e(){Object(g.a)(this,e),this.storageKey=window.location.hostname+"github_api_access_token",Object(C.a)(this,"token",V,this),this.token=this.getGithubAccessToken()}return Object(m.a)(e,[{key:"setGithubAccessToken",value:function(e){console.log("set token:",e),this.token=e,localStorage.setItem(this.storageKey,e)}},{key:"getGithubAccessToken",value:function(){return localStorage.getItem(this.storageKey)}},{key:"deleteToken",value:function(){this.token=null,localStorage.removeItem(this.storageKey)}}]),e}(),V=Object(T.a)(Q.prototype,"token",[z.n],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Q),pe=w.a.Header,fe=w.a.Content,he=Object(j.a)(X=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){var e;Object(g.a)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))).config=new de,e.renderContent=function(){return e.config.token?f.createElement(le,{accessToken:e.config.token}):f.createElement(ue,{config:e.config})},e}return Object(m.a)(n,[{key:"render",value:function(){var e=this;return f.createElement(w.a,{style:{display:"flex",flexDirection:"column",justifyContent:"space-between"}},f.createElement(pe,{style:{display:"flex",alignItems:"center",justifyContent:"space-between",height:"53px",backgroundColor:"#24292e",color:"#fff",padding:"0 20px"}},f.createElement("div",{style:{flexShrink:0,fontSize:"16px",fontWeight:"bold",marginRight:"16px"}},"Github Explorer"),f.createElement("div",{style:{cursor:"pointer"},onClick:function(){return e.config.deleteToken()}},"\u6e05\u9664token")),f.createElement(fe,{style:{flex:1,justifyContent:"center",backgroundColor:"#fff",padding:"24px 0 50px"}},this.renderContent()))}}]),n}(f.Component))||X,be=function(e){Object(v.a)(n,e);var t=Object(O.a)(n);function n(){return Object(g.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return f.createElement(he,null)}}]),n}(f.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));y.a.render(h.a.createElement(be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[134,1,2]]]);
//# sourceMappingURL=main.8640cc54.chunk.js.map
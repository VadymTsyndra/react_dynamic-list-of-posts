(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],{18:function(e,t,s){},20:function(e,t,s){},21:function(e,t,s){"use strict";s.r(t);var a=s(9),n=s.n(a),c=s(10),i=s(6),r=s(2),o=s(4),l=s.n(o),d=s(1),m=(s(16),s(17),s(18),s(3)),j=s.n(m),u=s(0),b=function(e){var t=e.posts,s=e.setSideBarOpened,a=e.isSideBarOpened,n=e.loadComments,c=e.setIsCommentFormOpened,i=Object(d.useState)(null),o=Object(r.a)(i,2),l=o[0],m=o[1],j=function(e,t){s(!0),c(!1),t&&e?(m(t),n(e)):s(!a)};return Object(u.jsxs)("div",{"data-cy":"PostsList",children:[Object(u.jsx)("p",{className:"title",children:"Posts:"}),Object(u.jsxs)("table",{className:"table is-fullwidth is-striped is-hoverable is-narrow",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{className:"has-background-link-light",children:[Object(u.jsx)("th",{children:"#"}),Object(u.jsx)("th",{children:"Title"}),Object(u.jsx)("th",{children:" "})]})}),Object(u.jsx)("tbody",{children:t&&t.map((function(e){return Object(u.jsxs)("tr",{"data-cy":"Post",children:[Object(u.jsx)("td",{"data-cy":"PostId",children:e.id}),Object(u.jsx)("td",{"data-cy":"PostTitle",children:e.title}),Object(u.jsx)("td",{className:"has-text-right is-vcentered",children:a&&e.id===l?Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link",onClick:function(){return j()},children:"Close"}):Object(u.jsx)("button",{type:"button","data-cy":"PostButton",className:"button is-link is-light",onClick:function(){return j(e,e.id)},children:"Open"})})]},e.id)}))})]})]})},h=(s(20),function(){return Object(u.jsx)("div",{className:"Loader","data-cy":"Loader",children:Object(u.jsx)("div",{className:"Loader__content"})})}),O=function(e){var t=e.addComment,s=e.postId,a=e.loadingComment,n=Object(d.useState)(""),c=Object(r.a)(n,2),i=c[0],o=c[1],l=Object(d.useState)(!1),m=Object(r.a)(l,2),b=m[0],h=m[1],O=Object(d.useState)(""),p=Object(r.a)(O,2),x=p[0],f=p[1],v=Object(d.useState)(!1),N=Object(r.a)(v,2),y=N[0],g=N[1],C=Object(d.useState)(""),S=Object(r.a)(C,2),k=S[0],w=S[1],E=Object(d.useState)(!1),P=Object(r.a)(E,2),F=P[0],I=P[1];return Object(u.jsxs)("form",{"data-cy":"NewCommentForm",children:[Object(u.jsxs)("div",{className:"field","data-cy":"NameField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-name",children:"Author Name"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"name",id:"comment-author-name",placeholder:"Name Surname",className:j()("input",{"is-danger":b}),value:i,onChange:function(e){return t=e.target.value,o(t.trim()),void h(!1);var t}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-user"})}),b&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),b&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Name is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"EmailField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-author-email",children:"Author Email"}),Object(u.jsxs)("div",{className:"control has-icons-left has-icons-right",children:[Object(u.jsx)("input",{type:"text",name:"email",id:"comment-author-email",placeholder:"email@test.com",className:j()("input",{"is-danger":y}),value:x,onChange:function(e){return t=e.target.value,f(t.trim()),void g(!1);var t}}),Object(u.jsx)("span",{className:"icon is-small is-left",children:Object(u.jsx)("i",{className:"fas fa-envelope"})}),y&&Object(u.jsx)("span",{className:"icon is-small is-right has-text-danger","data-cy":"ErrorIcon",children:Object(u.jsx)("i",{className:"fas fa-exclamation-triangle"})})]}),y&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Email is required"})]}),Object(u.jsxs)("div",{className:"field","data-cy":"BodyField",children:[Object(u.jsx)("label",{className:"label",htmlFor:"comment-body",children:"Comment Text"}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("textarea",{id:"comment-body",name:"body",placeholder:"Type comment here",className:j()("textarea",{"is-danger":F}),value:k,onChange:function(e){return t=e.target.value,w(t.trim()),void I(!1);var t}})}),F&&Object(u.jsx)("p",{className:"help is-danger","data-cy":"ErrorMessage",children:"Enter some text"})]}),Object(u.jsxs)("div",{className:"field is-grouped",children:[Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"submit",className:j()("button","is-link",{"is-loading":a}),onClick:function(e){return function(e,a,n,c){e.preventDefault(),i||h(!0),x||g(!0),k||I(!0),i&&x&&k&&s&&t({postId:s,name:a,email:n,body:c}),w("")}(e,i,x,k)},children:"Add"})}),Object(u.jsx)("div",{className:"control",children:Object(u.jsx)("button",{type:"reset",className:"button is-link is-light",onClick:function(){o(""),f(""),w(""),h(!1),g(!1),I(!1)},children:"Clear"})})]})]})},p=function(e){var t=e.currentPost,s=e.comments,a=e.isLoadingComments,n=e.commentsError,c=e.isCommentFormOpened,i=e.setIsCommentFormOpened,r=e.addComment,o=e.isLoadingComment,l=e.deleteComment;return Object(u.jsx)("div",{className:"content","data-cy":"PostDetails",children:Object(u.jsxs)("div",{className:"content","data-cy":"PostDetails",children:[Object(u.jsxs)("div",{className:"block",children:[Object(u.jsx)("h2",{"data-cy":"PostTitle",children:t&&"#".concat(t.id,": ").concat(t.title)}),Object(u.jsx)("p",{"data-cy":"PostBody",children:t&&t.body})]}),Object(u.jsxs)("div",{className:"block",children:[a&&Object(u.jsx)(h,{}),n&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"CommentsError",children:"Something went wrong"}),s&&0===s.length&&Object(u.jsx)("p",{className:"title is-4","data-cy":"NoCommentsMessage",children:"No comments yet"}),!a&&s&&s.length>0&&Object(u.jsx)("p",{className:"title is-4",children:"Comments:"}),s&&s.length>0&&!a&&s.map((function(e){var t=e.id,s=e.name,a=e.email,n=e.body;return Object(u.jsx)("div",{children:Object(u.jsxs)("article",{className:"message is-small","data-cy":"Comment",children:[Object(u.jsxs)("div",{className:"message-header",children:[Object(u.jsx)("a",{href:"mailto:".concat(a),"data-cy":"CommentAuthor",children:s}),Object(u.jsx)("button",{"data-cy":"CommentDelete",type:"button",className:"delete is-small","aria-label":"delete",onClick:function(){return l(t)},children:"delete button"})]}),Object(u.jsx)("div",{className:"message-body","data-cy":"CommentBody",children:n})]})},t)})),!a&&!c&&Object(u.jsx)("button",{"data-cy":"WriteCommentButton",type:"button",className:"button is-link",onClick:function(){i(!0)},children:"Write a comment"})]}),c&&Object(u.jsx)(O,{addComment:r,postId:null===t||void 0===t?void 0:t.id,loadingComment:o})]})})},x=function(e){var t=e.users,s=e.loadPosts,a=e.selectedUser,n=e.setSelectedUser,c=Object(d.useState)(!1),i=Object(r.a)(c,2),o=i[0],l=i[1],m=function(){l(!o)};return Object(u.jsxs)("div",{"data-cy":"UserSelector",className:"dropdown ".concat(o?"is-active":""),children:[Object(u.jsx)("div",{className:"dropdown-trigger",children:Object(u.jsxs)("button",{type:"button",className:"button","aria-haspopup":"true","aria-controls":"dropdown-menu",onClick:m,children:[Object(u.jsx)("span",{children:a?a.name:"Choose a user"}),Object(u.jsx)("span",{className:"icon is-small",children:Object(u.jsx)("i",{className:"fas fa-angle-down","aria-hidden":"true"})})]})}),o&&Object(u.jsx)("div",{className:"dropdown-menu",id:"dropdown-menu",role:"menu",children:Object(u.jsx)("div",{className:"dropdown-content",children:t.map((function(e){return Object(u.jsx)("a",{href:"#user-".concat(e.id),className:j()("dropdown-item ".concat(a&&a.id===e.id?"is-active":"")),onClick:function(){return function(e){n(e),m(),s(e)}(e)},children:e.name},e.id)}))})})]})},f="https://mate.academy/students-api";function v(e){return new Promise((function(t){setTimeout(t,e)}))}function N(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a={method:t};return s&&(a.body=JSON.stringify(s),a.headers={"Content-Type":"application/json; charset=UTF-8"}),v(300).then((function(){return fetch(f+e,a)})).then((function(e){return e.json()}))}var y=function(e){return N(e)},g=function(e,t){return N(e,"POST",t)},C=function(e){return N(e,"DELETE")},S=function(){var e=Object(d.useState)([]),t=Object(r.a)(e,2),s=t[0],a=t[1],n=Object(d.useState)(null),o=Object(r.a)(n,2),m=o[0],O=o[1],f=Object(d.useState)(null),v=Object(r.a)(f,2),N=v[0],S=v[1],k=Object(d.useState)(null),w=Object(r.a)(k,2),E=w[0],P=w[1],F=Object(d.useState)(!1),I=Object(r.a)(F,2),B=I[0],T=I[1],L=Object(d.useState)(""),U=Object(r.a)(L,2),D=U[0],M=U[1],A=Object(d.useState)(!1),_=Object(r.a)(A,2),J=_[0],q=_[1],W=Object(d.useState)(null),G=Object(r.a)(W,2),Y=G[0],z=G[1],H=Object(d.useState)(!1),K=Object(r.a)(H,2),Q=K[0],R=K[1],V=Object(d.useState)(""),X=Object(r.a)(V,2),Z=X[0],$=X[1],ee=Object(d.useState)(!1),te=Object(r.a)(ee,2),se=te[0],ae=te[1],ne=Object(d.useState)(!1),ce=Object(r.a)(ne,2),ie=ce[0],re=ce[1];function oe(){return(oe=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y("/users");case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(d.useEffect)((function(){!function(){oe.apply(this,arguments)}()}),[]);var le=function(){var e=Object(i.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==m){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,q(!1),T(!0),M(""),e.next=8,y("/posts?userId=".concat(t.id));case 8:s=e.sent,S(s),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),S([]),M("Failed to load posts");case 16:return e.prev=16,T(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,12,16,19]])})));return function(t){return e.apply(this,arguments)}}(),de=function(){var e=Object(i.a)(l.a.mark((function e(t){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,R(!0),$(""),e.next=5,y("/comments?postId=".concat(t.id));case 5:s=e.sent,z(s),P(t),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),z([]),$("Failed to load comments");case 14:return e.prev=14,R(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,10,14,17]])})));return function(t){return e.apply(this,arguments)}}(),me=function(){var e=Object(i.a)(l.a.mark((function e(t){var s,a,n,i,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=t.postId,a=t.name,n=t.email,i=t.body,e.prev=1,re(!0),e.next=5,g("/comments",{postId:s,name:a,email:n,body:i});case 5:r=e.sent,z((function(e){return null!==e?[].concat(Object(c.a)(e),[r]):[r]})),e.next=12;break;case 9:throw e.prev=9,e.t0=e.catch(1),new Error(e.t0.message);case 12:return e.prev=12,re(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("main",{className:"section",children:Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"tile is-ancestor",children:[Object(u.jsx)("div",{className:"tile is-parent",children:Object(u.jsxs)("div",{className:"tile is-child box is-success",children:[Object(u.jsx)("div",{className:"block",children:Object(u.jsx)(x,{users:s,loadPosts:le,selectedUser:m,setSelectedUser:O})}),Object(u.jsxs)("div",{className:"block","data-cy":"MainContent",children:[!m&&Object(u.jsx)("p",{"data-cy":"NoSelectedUser",children:"No user selected"}),B&&Object(u.jsx)(h,{}),D&&Object(u.jsx)("div",{className:"notification is-danger","data-cy":"PostsLoadingError",children:"Something went wrong!"}),N&&0===N.length&&Object(u.jsx)("div",{className:"notification is-warning","data-cy":"NoPostsYet",children:"No posts yet"}),N&&N.length>0&&!B&&Object(u.jsx)(b,{posts:N,isSideBarOpened:J,setSideBarOpened:q,loadComments:de,setIsCommentFormOpened:ae})]})]})}),Object(u.jsx)("div",{"data-cy":"Sidebar",className:j()("tile","is-parent","is-8-desktop","Sidebar",{"Sidebar--open":J}),children:J&&Object(u.jsx)("div",{className:"tile is-child box is-success ",children:Object(u.jsx)(p,{currentPost:E,comments:Y,isLoadingComments:Q,commentsError:Z,isCommentFormOpened:se,setIsCommentFormOpened:ae,addComment:me,isLoadingComment:ie,deleteComment:function(e){C("/comments/".concat(e)),z((function(t){return t?t.filter((function(t){return t.id!==e})):[]}))}})})})]})})})};n.a.render(Object(u.jsx)(S,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.2762e179.chunk.js.map
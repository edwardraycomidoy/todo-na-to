(this["webpackJsonptodo-na-to"]=this["webpackJsonptodo-na-to"]||[]).push([[0],{37:function(t,e,o){},63:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o(0),a=o.n(r),c=o(29),s=o.n(c),d=o(20),i=o(8),l=o(9),p=o(11),u=o(10),j=o(14),h=o(2);o(37);var b={backgroundColor:"#333",color:"#fff",textAlign:"center",padding:"10px"},f={color:"#fff",textDecoration:"none"},m=function(){return Object(n.jsxs)("header",{style:b,children:[Object(n.jsx)("h1",{children:"TodoList"}),Object(n.jsx)(j.b,{style:f,to:"/todo-na-to/",children:"Home"})," | ",Object(n.jsx)(j.b,{style:f,to:"/todo-na-to/about",children:"About"})]})},O=o(31),x=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={title:""},t.onChange=function(e){t.setState(Object(O.a)({},e.target.name,e.target.value))},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(l.a)(o,[{key:"render",value:function(){return Object(n.jsxs)("form",{style:{display:"flex"},onSubmit:this.onSubmit,children:[Object(n.jsx)("input",{type:"text",name:"title",style:{flex:"10",padding:"5px"},placeholder:"Add Todo ...",value:this.state.title,onChange:this.onChange}),Object(n.jsx)("button",{type:"submit",className:"btn",style:{flex:"1"},children:"Submit"})]})}}]),o}(a.a.Component),y=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).getStyle=function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px #ccc dotted",textDecoration:t.props.todo.completed?"line-through":"none"}},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props.todo,e=t.id,o=t.title;return Object(n.jsx)("div",{style:this.getStyle(),children:Object(n.jsxs)("p",{children:[Object(n.jsx)("input",{type:"checkbox",checked:this.props.todo.completed,onChange:this.props.markComplete.bind(this,e)})," "," ",o,Object(n.jsx)("button",{style:v,onClick:this.props.deleteTodo.bind(this,e),children:"x"})]})})}}]),o}(a.a.Component),v={backgroundColor:"#ff0000",color:"#fff",border:"none",padding:"5px 9px",borderRadius:"50%",cursor:"pointer",float:"right",outlineStyle:"none"},g=y,k=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(l.a)(o,[{key:"render",value:function(){var t=this;return this.props.todos.map((function(e){return Object(n.jsx)(g,{todo:e,markComplete:t.props.markComplete,deleteTodo:t.props.deleteTodo},e.id)}))}}]),o}(a.a.Component);function C(){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)("h1",{children:"About"}),Object(n.jsx)("p",{children:"This is the TodoList app v1.0.0. It is part of a React crash course."})]})}var S=o(15),T=o.n(S),A=function(t){Object(p.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={todos:[]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t.deleteTodo=function(e){T.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(o){return t.setState({todos:Object(d.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.addTodo=function(e){T.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(d.a)(t.state.todos),[e.data])})}))},t}return Object(l.a)(o,[{key:"componentDidMount",value:function(){var t=this;T.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return Object(n.jsx)(j.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(m,{}),Object(n.jsx)(h.a,{exact:!0,path:"/todo-na-to/",render:function(e){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(x,{addTodo:t.addTodo}),Object(n.jsx)(k,{todos:t.state.todos,markComplete:t.markComplete,deleteTodo:t.deleteTodo})]})}}),Object(n.jsx)(h.a,{exact:!0,path:"/todo-na-to/about",component:C})]})})})}}]),o}(a.a.Component);s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(A,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.29c07a5d.chunk.js.map
(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,a,n){},13:function(e,a,n){},14:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),l=n(3),c=n(4),s=n(6),m=n(5),u=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],h=(n(12),function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("h2",null,a),r.a.createElement("p",null,n))}),d=function(e){var a=e.robots,n=a.map((function(e,n){return r.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})}));return r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap",justifyContent:"center"}},n)},f={padding:"8px",borderRadius:"5px",marginBottom:"20px",backgroundColor:"#8f32a8",color:"#fff",outline:"none"},b=function(e){e.searchField;var a=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{style:f,type:"search",placeholder:"Search . . ",onChange:a}))},g=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"70vh"}},e.children)},p=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).onSearchChange=function(a){e.setState({searchField:a.target.value})},e.state={robots:u,searchField:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return r.a.createElement("div",{style:{margin:"0 auto"}},r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(g,null,r.a.createElement(d,{robots:a})))}}]),n}(t.Component);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("h1",{style:{fontFamily:"Roshi",fontSize:"4em",background:"-webkit-linear-gradient(#ff4800, #1c9abe)",webkitBackgroundClip:"text",webkitTextFillColor:"transparent"}},"Robo Friends"),r.a.createElement(p,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.fea58099.chunk.js.map
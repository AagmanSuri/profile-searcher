(this.webpackJsonpstudents=this.webpackJsonpstudents||[]).push([[0],{12:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(1),i=t.n(n),r=t(3),s=t.n(r),d=(t(12),t(13),t(4)),l=t(5),c=t(7),o=t(6),g=t(0),h=function(e){var a=e.name,t=e.id,n=e.email,i=e.standard,r=e.Language,s=e.CodingLvl;return Object(g.jsxs)("div",{className:"tc bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(g.jsx)("img",{alt:"Student",src:"https://robohash.org/set_set5/bgset_bg1/3.14159/".concat(t,"?size=200x200")}),Object(g.jsx)("h2",{children:a}),Object(g.jsxs)("p",{children:["Standard:",i]}),Object(g.jsxs)("p",{children:["Language: ",r]}),Object(g.jsxs)("p",{children:["Coding Level:",s]}),Object(g.jsx)("p",{children:n})]})},m=function(e){var a=e.Profile;return Object(g.jsxs)("div",{children:[" ",a.map((function(e,a){return Object(g.jsx)(h,{id:e.id,name:e.name,standard:e.standard,Language:e.Language,CodingLvl:e.CodingLvl,email:e.email},a)}))," "]})},u=[{id:1,name:"Mario Speedwagon",standard:"9",Language:"JavaScript",CodingLvl:"5 star \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f ",email:"mario@gmail.com"},{id:2,name:"Petey Cruiser",standard:"7",Language:"JavaScript",CodingLvl:"4 star \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f ",email:"petey@gmail.com"},{id:3,name:"Anna Sthesia",standard:"12",Language:"Python",CodingLvl:"3 star \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f  ",email:"anna@gmail.com"},{id:4,name:"Paul Molive",standard:"11",Language:"C",CodingLvl:"4 star \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f ",email:"paul@gmail.com"},{id:5,name:"Gail Forcewind",standard:"10",Language:"C++",CodingLvl:"1 star \u2b50\ufe0f",email:"gail@gmail.com"},{id:6,name:"Barb Dwyer",standard:"8",Language:"Python",CodingLvl:"4 star \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f ",email:"barb@gmail.com"},{id:7,name:"Moe Fugga",standard:"8",Language:"C",CodingLvl:"2 star \u2b50\ufe0f \u2b50\ufe0f ",email:"moe@gmail.com"},{id:8,name:"Tom Foolery",standard:"10",Language:"Java",CodingLvl:"4 star \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f ",email:"tom@gmail.com"},{id:9,name:"Arty Ficial",standard:"11",Language:"c",CodingLvl:"1 star \u2b50\ufe0f ",email:"arty@gmail.com"},{id:10,name:"Tara Misu",standard:"9",Language:"JavaScript",CodingLvl:"5 star \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f \u2b50\ufe0f ",email:"tara@gmail.com"}],b=function(e){var a=e.searchChange;return Object(g.jsx)("div",{className:"pa2",children:Object(g.jsx)("input",{onChange:a,className:"pa3 ba b--blue bg-lightest",type:"search",placeholder:"Search for the profile"})})},j=function(e){return Object(g.jsx)("div",{style:{overflowY:"scroll",border:"1px solid light-blue",height:"700px"},children:e.children})},L=function(e){Object(c.a)(t,e);var a=Object(o.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this)).onSearchChange=function(e){n.setState({searchfield:e.target.value})},n.state={Profile:u,searchfield:""},n}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state.Profile.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())||a.standard.includes(e.state.searchfield)||a.CodingLvl.toLowerCase().includes(e.state.searchfield.toLowerCase())||a.Language.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.Profile.length?Object(g.jsx)("h1",{children:"Loading"}):Object(g.jsxs)("div",{className:"tc",children:[Object(g.jsx)("h1",{className:"",children:"Shortlisted Profile's"}),Object(g.jsx)(b,{searchChange:this.onSearchChange}),Object(g.jsx)(j,{children:Object(g.jsx)(m,{Profile:a})})]})}}]),t}(n.Component),v=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,16)).then((function(a){var t=a.getCLS,n=a.getFID,i=a.getFCP,r=a.getLCP,s=a.getTTFB;t(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(L,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.c88c3f62.chunk.js.map
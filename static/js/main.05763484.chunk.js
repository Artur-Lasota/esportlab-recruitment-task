(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(18),c=a.n(s),i=(a(24),a(7)),l=a(1),r=a(9),m=a(10),u=a(12),p=a(11),b=(a(25),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={jobs:[]},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://5fa97699c9b4e90016e6a81f.mockapi.io/jobs").then((function(e){return e.json()})).then((function(t){var a=t.map((function(e){return o.a.createElement(i.b,{to:"/details/"+e.id,key:e.id,className:"job-item"},o.a.createElement("p",{className:"job-item__title"},e.title),o.a.createElement("button",{className:"job-item__button job-item__button--align-bottom"},"Apply now"))}));e.setState({jobs:a})}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"jobs-list"},this.state.jobs)}}]),a}(n.Component)),d=(a(31),function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).state={loadedJob:null},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.match.params.id&&(!this.state.loadedJob||this.state.loadedJob&&this.state.loadedJob.id!==+this.props.match.params.id)&&fetch("https://5fa97699c9b4e90016e6a81f.mockapi.io/jobs/"+this.props.match.params.id).then((function(e){return e.json()})).then((function(t){e.setState({loadedJob:t})}))}},{key:"render",value:function(){var e=o.a.createElement("article",null);return this.state.loadedJob&&(e=o.a.createElement("article",{className:"JobsDetails"},o.a.createElement(i.b,{to:"/",className:"Link"}," ",o.a.createElement("span",{className:"material-icons icon--position"},"keyboard_backspace")," ",o.a.createElement("span",{className:"return-link--position"},"All positions")),o.a.createElement("h2",{className:"JobsDetails__title"},this.state.loadedJob.title),o.a.createElement("p",{className:"JobsDetails__employment-type"},this.state.loadedJob.employment_type),o.a.createElement("p",{className:"JobsDetails__description"},this.state.loadedJob.description))),e}}]),a}(n.Component));a(32);var h=function(){return o.a.createElement(i.a,null,o.a.createElement("main",null,o.a.createElement("h1",{className:"App__header"},"Job Offers"),o.a.createElement(l.a,{path:"/",exact:!0,component:b}),o.a.createElement(l.a,{path:"/details/:id",component:d})))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.05763484.chunk.js.map
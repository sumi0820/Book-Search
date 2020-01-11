(this.webpackJsonpbooksearch=this.webpackJsonpbooksearch||[]).push([[0],{10:function(e,t,a){e.exports=a(23)},15:function(e,t,a){},22:function(e,t,a){},23:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),l=a.n(r),s=(a(15),a(1)),i=a(2),c=a(4),u=a(3),m=a(5),h=function(){return o.a.createElement("header",null,o.a.createElement("i",{className:"fas fa-book fa-2x"}),o.a.createElement("h1",null,"Book Search"))},d=function(e){return o.a.createElement("div",{className:"search-area"},o.a.createElement("form",{onSubmit:e.searchBooks,action:""},o.a.createElement("input",{onChange:e.handleSearch,type:"text",placeholder:"Title / Author"}),o.a.createElement("button",{type:"submit"},"Search"),o.a.createElement("select",{defaultValue:"Sort",onChange:e.handleSort},o.a.createElement("option",{disabled:!0,value:"Sort"},"Sort"),o.a.createElement("option",{value:"Newest"},"Newest"),o.a.createElement("option",{value:"Oldest"},"Oldest"))))},b=a(9),p=a.n(b),f=function(e){return o.a.createElement("div",{className:"card-container"},o.a.createElement("img",{src:e.image,alt:""}),o.a.createElement("div",{className:"desc"},o.a.createElement("h2",null,e.title," ",e.subtitle),o.a.createElement("h3",null,"Author: ",e.author),o.a.createElement("h4",null,"Published Date: ","0000"===e.published?"Not available":e.published.substring(0,10)),o.a.createElement("p",null,e.description),o.a.createElement("div",{className:"view"},o.a.createElement("a",{href:e.previewLink,target:"_blank",className:"btn btn-primary badge-dark"},"View more"))))},v=function(e){return o.a.createElement("div",{className:"list"},e.books.map((function(e,t){return o.a.createElement(f,{key:t,image:e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,subtitle:e.volumeInfo.subtitle,author:e.volumeInfo.authors,published:e.volumeInfo.publishedDate,description:e.volumeInfo.description,previewLink:e.volumeInfo.previewLink})})))},E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).searchBooks=function(e){e.preventDefault(),p.a.get("https://www.googleapis.com/books/v1/volumes/").query({q:a.state.searchField}).query("&maxResults=40").then((function(e){console.log(e);var t=a.cleanData(e);a.setState({books:t})}))},a.handleSearch=function(e){a.setState({searchField:e.target.value})},a.handleSort=function(e){a.setState({sort:e.target.value})},a.cleanData=function(e){return e.body.items.map((function(e){return!1===e.volumeInfo.hasOwnProperty("publishedDate")?e.volumeInfo.publishedDate="0000":!1===e.volumeInfo.hasOwnProperty("imageLinks")&&(e.volumeInfo.imageLinks={thumbnail:"https://icon-library.net/images/no-photo-icon/no-photo-icon-5.jpg"}),e}))},a.state={books:[],searchField:"",sort:""},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.books.sort((function(t,a){return"Newest"===e.state.sort?parseInt(a.volumeInfo.publishedDate.substring(0,4))-parseInt(t.volumeInfo.publishedDate.substring(0,4)):"Oldest"===e.state.sort?parseInt(t.volumeInfo.publishedDate.substring(0,4))-parseInt(a.volumeInfo.publishedDate.substring(0,4)):void 0}));return o.a.createElement("div",null,o.a.createElement(d,{searchBooks:this.searchBooks,handleSearch:this.handleSearch,handleSort:this.handleSort}),o.a.createElement(v,{books:t}))}}]),t}(n.Component),k=function(){return o.a.createElement("footer",null,o.a.createElement("p",{className:"comment"},"made with React"))},g=(a(22),function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(h,null),o.a.createElement(E,null),o.a.createElement(k,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.f6549ceb.chunk.js.map
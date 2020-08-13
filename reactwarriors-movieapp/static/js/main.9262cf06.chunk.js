(this["webpackJsonpmovies-app"]=this["webpackJsonpmovies-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(7),i=a.n(c),s=(a(14),a(8)),l=a(1),r=a(2),m=a(4),v=a(3),u=a(5),d=(a(15),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(v.a)(t).call(this))).state={willWatch:!1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,o=(t.removeMovie,t.addMovieToWillWatch),c=t.removeMovieFromWillWatch;return n.a.createElement("div",{className:"card"},n.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:""}),n.a.createElement("div",{className:"card-body"},n.a.createElement("h6",{className:"card-title"},a.title),n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement("p",{className:"nb-0"},"Raiting: ",a.vote_average),this.state.willWatch?n.a.createElement("button",{type:"button",className:"btn btn-success",onClick:function(){e.setState({willWatch:!1}),c(a)}},"Remove Will Watch "):n.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){e.setState({willWatch:!0}),o(a)}},"Add Will Watch")),n.a.createElement("button",{onClick:this.props.removeMovie.bind(this,a)},"Delete Movie")))}}]),t}(n.a.Component)),p=function(e){var t=e.sort_by,a=e.updateSortBy;return n.a.createElement("ul",{className:"tabs nav nav-pills"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:"nav-link ".concat("popularity.desc"===t?"active":""),onClick:function(){a("popularity.desc")}},"Popularity")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:"nav-link ".concat("revenue.desc"===t?"active":""),onClick:function(){a("revenue.desc")}},"REvenue")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("div",{className:"nav-link ".concat("vote_average.desc"===t?"active":""),onClick:function(){a("vote_average.desc")}},"Vote average")))},h=(a(16),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(v.a)(t).call(this))).nextPage=function(){e.setState({page:e.state.page+1})},e.prevPage=function(){e.setState({page:e.state.page-1},(function(){e.limiter()})),console.log("prev",e.state.page)},e.limiter=function(){0===e.state.page&&alert("No more pages")},e.getMovies=function(){fetch("".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("32044039455e2188ce91364820cf17a3","&sort_by=").concat(e.state.sort_by,"&page=").concat(e.state.page)).then((function(e){return console.log("then"),e.json()})).then((function(t){console.log("data",t),e.setState({movies:t.results,page:t.page})}))},e.removeMovie=function(t){var a=e.state.movies.filter((function(e){return e.id!==t.id}));console.log(a),e.setState({movies:a})},e.addMovieToWillWatch=function(t){var a=[].concat(Object(s.a)(e.state.moviesWillWatch),[t]);e.setState({moviesWillWatch:a})},e.removeMovieFromWillWatch=function(t){var a=e.state.moviesWillWatch.filter((function(e){return e.id!==t.id}));e.setState({moviesWillWatch:a})},e.updateSortBy=function(t){e.setState({sort_by:t})},e.state={movies:[],moviesWillWatch:[],sort_by:"popularity.desc",page:1},e}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){console.log("didMount"),this.getMovies()}},{key:"componentDidUpdate",value:function(e,t){console.log("didUpdate"),console.log("prev",e,t),console.log("this",this.props,this.state),t.sort_by===this.state.sort_by&&t.page===this.state.page||(console.log("call api"),this.getMovies())}},{key:"render",value:function(){var e=this;return console.log("render",this.state.sort_by),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-6"},n.a.createElement("div",{className:"row mb-4 mt-4"},n.a.createElement(p,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy})),this.state.movies.map((function(t){return n.a.createElement(d,{key:t.id,movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch})})),n.a.createElement("div",null,n.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.prevPage},"Previous Page"),n.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:this.nextPage},"Next Page"))),n.a.createElement("div",{className:"col-3"},n.a.createElement("p",null,"Will Watch: ",this.state.moviesWillWatch.length," "))))}}]),t}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.9262cf06.chunk.js.map
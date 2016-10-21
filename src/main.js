import Vue from 'vue'
import App from './App'
var VueRouter=require("vue-router");
//var one=require("./components/one");
//var two=require("./components/two");
//console.log(VueRouter);
var RouterConfig=require("./components/config");
var Resource=require("vue-resource");
Vue.use(VueRouter);
Vue.use(Resource);
var router=new VueRouter();
//console.log(router);

// router.map({
// 	"/one/:id":{
// 		name:"one",
// 		component:one
// 	},
// 	"/two":{
// 		component:two
// 	}
// })
RouterConfig(router);

router.start(App,"#apps");

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})


(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e5ea8a6"],{"0e29":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"exportImportTable"},[a("div",{staticClass:"condition-wrap"},[a("Upload",{attrs:{action:"//jsonplaceholder.typicode.com/posts/","show-upload-list":!1,accept:".xlsx, .xls","before-upload":e.getFile}},[a("Button",{attrs:{icon:"ios-cloud-upload-outline"}},[e._v("上传")])],1)],1),a("div",{staticClass:"table-wrap"},[a("Table",{attrs:{height:e.tableHeight,border:"",columns:e.columns1,data:e.data1}})],1)])},l=[],n=a("edf2"),s=a.n(n),i={name:"exportImportTable",components:{},data(){return{tableHeight:100,columns1:[{title:"姓名",key:"姓名"},{title:"性别",key:"性别"},{title:"年龄",key:"年龄"}],data1:[]}},computed:{},watch:{},methods:{async getFile(e){console.log("===file====",e);let t=await this.handleFile(e);const a=s.a.read(t,{type:"binary"});console.log(a),t=s.a.utils.sheet_to_json(a.Sheets[a.SheetNames[0]]),console.log(t),this.data1=t},handleFile(e){return new Promise(t=>{let a=new FileReader;a.readAsBinaryString(e),a.onload=e=>{t(e.target.result)}})}},created(){this.tableHeight=window.innerHeight-200},mounted(){}},c=i,r=(a("7d4d"),a("4ac2")),d=Object(r["a"])(c,o,l,!1,null,"68643ce5",null);t["default"]=d.exports},"58f9":function(e,t,a){},"7d4d":function(e,t,a){"use strict";a("58f9")}}]);
"use strict";(self.webpackChunksengee_ui=self.webpackChunksengee_ui||[]).push([[922],{71922:(S,u,o)=>{o.r(u),o.d(u,{PromptModule:()=>R});var f=o(69808),c=o(77152),s=o(62545),m=o(64219),O=o(82886),C=o(15701),t=o(5e3),_=o(49727),g=o(89445),x=o(14581),P=o(31453),M=o(82683),h=o(11047),d=o(93075),v=o(72394),b=o(55535),y=o(404);const T=["promptForm"];function z(a,i){if(1&a){const n=t.EpF();t.TgZ(0,"span",15),t.NdJ("click",function(){return t.CHM(n),t.oxw().searchHandler()}),t.qZA()}}function I(a,i){if(1&a&&(t.TgZ(0,"div",16),t._uU(1),t.qZA()),2&a){const n=i.$implicit,e=t.oxw();t.Q6J("nz-tooltip",e.toPromptTip(n.promptTemplate)),t.xp6(1),t.Oqu(e.toPromptTip(n.promptTemplate))}}const Z=function(a){return{height:a}};let k=(()=>{class a{constructor(n,e,l,r){this.message=n,this.i18n=e,this.router=l,this.api=r,this.typeList=[{name:"\u8bed\u8a00",children:C.s.map(p=>({alias:this.i18n.translate(p.i18n),value:p.value,selected:!0}))},{name:"\u7c7b\u578b",children:C.y.map(p=>({alias:this.i18n.translate(p.i18n),value:p.value.toLocaleUpperCase(),selected:!0}))}],this.listOfData=[],this.pageInfo={pageIndex:1,pageSize:10,total:0},this.searchValue="",this.languages=this.typeList[0].children.map(p=>p.value).join(","),this.types=this.typeList[1].children.map(p=>p.value).join(","),this.columns=[{type:"index"},{i18n:"base.name",field:"name"},{i18n:"base.language",field:"lang",dataI18n:!0},{i18n:"base.model",field:"model"},{i18n:"prompt.modelFamily",field:"modelFamily"},{i18n:"base.type",field:"promptTemplateTypeI18n",dataI18n:!0},{i18n:"prompt.template",field:"promptTemplate",render:"templateColumn"},{buttons:[{icon:"xiugai",tip:"base.edit",click:p=>this.onEdit(p)},{icon:"shanchu",tip:"base.delete",type:"delete",confirmTip:"Prompt",click:p=>this.deleteConfirm(p)}]}],this.isVisible=!1}ngOnInit(){this.searchHandler()}goTo(){this.router.navigate(["resource"])}searchHandler(){this.api.searchPrompt("",this.searchValue,this.languages,this.types,this.pageInfo.pageIndex,this.pageInfo.pageSize).subscribe(n=>{this.listOfData=n.content.map(e=>(e.promptTemplateTypeI18n=e.promptTemplateType?`prompt.${e.promptTemplateType.toLocaleLowerCase()}`:"",e.promptTemplate=this.parsePrompt(e.promptTemplate),e)),this.pageInfo.total=n.totalElements})}parsePrompt(n){let e={prefix:"",prompt:"",suffix:""};try{e=JSON.parse(n)}catch(l){}return[{i18n:"prompt.prefix",value:null==e?void 0:e.prefix},{i18n:"prompt.prompt",value:(null==e?void 0:e.prompt)||n},{i18n:"prompt.suffix",value:null==e?void 0:e.suffix}]}pageChangeHandler(n){this.pageInfo.pageIndex=n.pageIndex,this.pageInfo.pageSize=n.pageSize,this.searchHandler()}onSelectLanguage(n){this.languages=n,this.pageInfo.pageIndex=1,this.searchHandler()}onSelectType(n){this.types=n,this.pageInfo.pageIndex=1,this.searchHandler()}deleteConfirm(n){this.api.deleteBatchPrompt([n.id]).subscribe(e=>{this.message.success(`${this.i18n.translate("base.delete")}${this.i18n.translate("base.success")}`),this.searchHandler()})}onEdit(n){this.curItem=n,this.isVisible=!0}handleOk(){const n=this.promptForm.getPrompt();this.api.editPrompt(n.id,n).subscribe(e=>{this.message.success(`${this.i18n.translate("base.update")}${this.i18n.translate("base.success")}`),this.handleCancel(300)})}handleCancel(n=0){setTimeout(()=>{this.isVisible=!1,n&&this.searchHandler()},n)}delClick(n){n.stopPropagation()}toPromptTip(n){let e="";return n.forEach(l=>{l.value&&(e+=this.i18n.translate(l.i18n),e+=":\n",e+=l.value,e+="\n")}),e}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(_.dD),t.Y36(g.wi),t.Y36(c.F0),t.Y36(x.Xp))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-prompt-retrieval"]],viewQuery:function(n,e){if(1&n&&t.Gf(T,5),2&n){let l;t.iGM(l=t.CRH())&&(e.promptForm=l.first)}},decls:26,vars:23,consts:[[1,"page-retrieval","pr"],["dy-icon","","type","return",3,"click"],["nzSearch","","nzSize","large",3,"nzSuffix"],["type","text","nz-input","",3,"ngModel","placeholder","ngModelChange","keyup.enter"],["suffixIconSearch",""],[1,"types-box"],["typesBox",""],[1,"type-box"],[1,"type-label"],[1,"type-item-box"],[3,"data","selected"],[1,"table-box",3,"ngStyle"],[3,"columns","data","total","pageIndex","pageSize","pageChange"],["table",""],["dy-column","templateColumn"],["dy-icon","","type","sousuo",3,"click"],[1,"template-column",3,"nz-tooltip"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"i",1),t.NdJ("click",function(){return e.goTo()}),t.qZA(),t.TgZ(2,"nz-input-group",2)(3,"input",3),t.NdJ("ngModelChange",function(r){return e.searchValue=r})("keyup.enter",function(){return e.searchHandler()}),t.ALo(4,"nzI18n"),t.ALo(5,"nzI18n"),t.qZA()(),t.YNc(6,z,1,0,"ng-template",null,4,t.W1O),t.TgZ(8,"div",5,6)(10,"div",7)(11,"span",8),t._uU(12),t.ALo(13,"nzI18n"),t.qZA(),t.TgZ(14,"span",9)(15,"dy-checkbox-btn",10),t.NdJ("selected",function(r){return e.onSelectLanguage(r)}),t.qZA()()(),t.TgZ(16,"div",7)(17,"span",8),t._uU(18),t.ALo(19,"nzI18n"),t.qZA(),t.TgZ(20,"span",9)(21,"dy-checkbox-btn",10),t.NdJ("selected",function(r){return e.onSelectType(r)}),t.qZA()()()(),t.TgZ(22,"div",11)(23,"app-table",12,13),t.NdJ("pageChange",function(r){return e.pageChangeHandler(r)}),t.YNc(25,I,2,2,"ng-template",14),t.qZA()()()),2&n){const l=t.MAs(7),r=t.MAs(9);t.xp6(2),t.Q6J("nzSuffix",l),t.xp6(1),t.Q6J("ngModel",e.searchValue)("placeholder",t.lcZ(4,13,"base.pleaseInput")+t.lcZ(5,15,"base.name")),t.xp6(9),t.hij("",t.lcZ(13,17,e.typeList[0].name),": "),t.xp6(3),t.Q6J("data",e.typeList[0].children),t.xp6(3),t.hij("",t.lcZ(19,19,e.typeList[1].name),": "),t.xp6(3),t.Q6J("data",e.typeList[1].children),t.xp6(1),t.Q6J("ngStyle",t.VKq(21,Z,"calc(100% - 111px - "+r.offsetHeight+"px)")),t.xp6(1),t.Q6J("columns",e.columns)("data",e.listOfData)("total",e.pageInfo.total)("pageIndex",e.pageInfo.pageIndex)("pageSize",e.pageInfo.pageSize)}},directives:[P.kE,M.w,h.gB,h.ke,h.Zp,d.Fj,d.JJ,d.On,P.Ov,f.PC,v.a,b.rA,y.SY],pipes:[g.o9],styles:["html.default[_ngcontent-%COMP%]   html[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{min-width:1366px}html.default[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{margin:0;padding:0;list-style:none}html.default[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%]{margin:0}html.default[_ngcontent-%COMP%]   .layout[_ngcontent-%COMP%]{display:flex;width:100%;height:100%;flex:auto;flex-direction:column}html.default[_ngcontent-%COMP%]   .fdc[_ngcontent-%COMP%]{flex-direction:column}html.default[_ngcontent-%COMP%]   .fdr[_ngcontent-%COMP%]{flex-direction:row}html.default[_ngcontent-%COMP%]   .fauto[_ngcontent-%COMP%]{flex:auto}html.default[_ngcontent-%COMP%]   .pf[_ngcontent-%COMP%]{position:fixed}html.default[_ngcontent-%COMP%]   .pr[_ngcontent-%COMP%]{position:relative}html.default[_ngcontent-%COMP%]   .pa[_ngcontent-%COMP%]{position:absolute}html.default[_ngcontent-%COMP%]   .fl[_ngcontent-%COMP%]{float:left}html.default[_ngcontent-%COMP%]   .fr[_ngcontent-%COMP%]{float:right}html.default[_ngcontent-%COMP%]   .clear-f[_ngcontent-%COMP%]{clear:both}html.default[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{color:#396669}html.default[_ngcontent-%COMP%]   .ant-table-pagination.ant-pagination[_ngcontent-%COMP%]{margin:0}html.default[_ngcontent-%COMP%]   .ant-pagination[_ngcontent-%COMP%]{text-align:right}html.default[_ngcontent-%COMP%]   .ant-table-column-sorter[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-table-filter-trigger[_ngcontent-%COMP%]{color:#a1a1a1}html.default[_ngcontent-%COMP%]   .ant-table-filter-trigger.active[_ngcontent-%COMP%]{color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]   th.ant-table-column-sort[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-table-thead[_ngcontent-%COMP%]   th.ant-table-column-has-sorters[_ngcontent-%COMP%]:hover{background:#e2eeee}html.default[_ngcontent-%COMP%]   .ant-tree-switcher[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-tree-indent-unit[_ngcontent-%COMP%]{width:17px;color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-tree[_ngcontent-%COMP%]   .ant-tree-node-content-wrapper[_ngcontent-%COMP%]{padding:0}html.default[_ngcontent-%COMP%]   .ant-tree-checkbox-inner[_ngcontent-%COMP%]{display:inline-block}html.default[_ngcontent-%COMP%]   .ant-select-tree[_ngcontent-%COMP%]   .ant-select-tree-node-content-wrapper.ant-select-tree-node-selected[_ngcontent-%COMP%]:hover{background-color:#e2eeee}html.default[_ngcontent-%COMP%]   .ant-modal-title[_ngcontent-%COMP%]{color:#396669}html.default[_ngcontent-%COMP%]   .ant-dropdown-menu-item-selected[_ngcontent-%COMP%], html.default[_ngcontent-%COMP%]   .ant-dropdown-menu-submenu-title-selected[_ngcontent-%COMP%]{background-color:#e2eeee}html.default[_ngcontent-%COMP%]   .ant-badge-status-processing[_ngcontent-%COMP%]{background-color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-badge-status-processing[_ngcontent-%COMP%]:after{border-color:#2a8b92}html.default[_ngcontent-%COMP%]   .ant-tooltip[_ngcontent-%COMP%]{max-width:550px;max-height:550px;overflow:hidden}html.default[_ngcontent-%COMP%]   .ant-tooltip-content[_ngcontent-%COMP%]{width:100%;height:100%;max-width:550px;max-height:542px}html.default[_ngcontent-%COMP%]   .ant-tooltip-inner[_ngcontent-%COMP%]{box-shadow:none}html.default   [_nghost-%COMP%]   .type-box[_ngcontent-%COMP%]{font-size:13px}html.default   [_nghost-%COMP%]     .app-table .template-column{width:300px;overflow:hidden;white-space:break-spaces;text-overflow:ellipsis;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical}html.default   [_nghost-%COMP%]     .app-table .ant-table-pagination.ant-pagination{margin-top:8px}html.default   [_nghost-%COMP%]   .ant-pagination[_ngcontent-%COMP%]{text-align:left;margin-left:15px}html.dark   [_nghost-%COMP%]   .type-box[_ngcontent-%COMP%]{font-size:13px}html.dark   [_nghost-%COMP%]     .app-table .template-column{width:300px;overflow:hidden;white-space:break-spaces;text-overflow:ellipsis;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical}html.dark   [_nghost-%COMP%]     .app-table .ant-table-pagination.ant-pagination{margin-top:8px}html.dark   [_nghost-%COMP%]   .ant-pagination[_ngcontent-%COMP%]{text-align:left;margin-left:15px}html.light-blue   [_nghost-%COMP%]   .type-box[_ngcontent-%COMP%]{font-size:13px}html.light-blue   [_nghost-%COMP%]     .app-table .template-column{width:300px;overflow:hidden;white-space:break-spaces;text-overflow:ellipsis;-webkit-line-clamp:3;display:-webkit-box;-webkit-box-orient:vertical}html.light-blue   [_nghost-%COMP%]     .app-table .ant-table-pagination.ant-pagination{margin-top:8px}html.light-blue   [_nghost-%COMP%]   .ant-pagination[_ngcontent-%COMP%]{text-align:left;margin-left:15px}"]}),a})();function w(a,i){1&a&&(t.TgZ(0,"li",6),t._uU(1),t.ALo(2,"nzI18n"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"prompt.template")," "))}function A(a,i){1&a&&(t.TgZ(0,"li",7),t._uU(1),t.ALo(2,"nzI18n"),t.qZA()),2&a&&(t.xp6(1),t.hij(" ",t.lcZ(2,1,"base.retrieval")," "))}const L=[{path:"",component:(()=>{class a{constructor(n,e){this.route=n,this.helper=e}ngOnInit(){this.helper.defaultEnter(this.route)}ngOnDestroy(){}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(c.gz),t.Y36(s.$J))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-prompt-main"]],decls:7,vars:2,consts:[[1,"tab-menu-box"],[1,"menu"],["nz-menu",""],["nz-menu-item","","nzMatchRouter","","routerLink","./list",4,"authx"],["nz-menu-item","","nzMatchRouter","","routerLink","./retrieval",4,"authx"],[1,"content",2,"padding","15px"],["nz-menu-item","","nzMatchRouter","","routerLink","./list"],["nz-menu-item","","nzMatchRouter","","routerLink","./retrieval"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"ul",2),t.YNc(3,w,3,3,"li",3),t.YNc(4,A,3,3,"li",4),t.qZA()(),t.TgZ(5,"div",5),t._UZ(6,"dy-router-outlet"),t.qZA()()),2&n&&(t.xp6(3),t.Q6J("authx","Resource.Prompt.Group"),t.xp6(1),t.Q6J("authx","Resource.Prompt.Retrieval"))},directives:[m.wO,s.xo,m.r9,M.w,c.rH,s.Fr],pipes:[g.o9],encapsulation:2}),a})(),children:[{path:"list",loadChildren:()=>o.e(515).then(o.bind(o,95515)).then(a=>a.PromptListModule),data:{authPathMatch:"full"},canActivate:[s.$P],canActivateChild:[s.$P]},{path:"retrieval",component:k,data:{authPathMatch:"full"},canActivate:[s.$P],canActivateChild:[s.$P]}]}];let R=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[[f.ez,s.OX,m.ip,O.m,c.Bz.forChild(L)]]}),a})()}}]);
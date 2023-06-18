"use strict";(self.webpackChunkecommerce=self.webpackChunkecommerce||[]).push([[142],{4142:(z,u,r)=>{r.r(u),r.d(u,{ProductModule:()=>k});var d=r(6895),p=r(6237),t=r(8256),l=r(2420),_=r(2175);function m(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"button",2),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.handleAddToCart())}),t._uU(1," Add To Cart\n"),t.qZA()}}function f(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"div",3)(1,"button",4),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.handleQuantity("decrease"))}),t._uU(2,"\u2212"),t.qZA(),t.TgZ(3,"span"),t._uU(4),t.qZA(),t.TgZ(5,"button",4),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.handleQuantity("increase"))}),t._uU(6,"+"),t.qZA()()}if(2&o){const n=t.oxw();t.xp6(4),t.Oqu(null==n.cart?null:n.cart.quantity)}}let g=(()=>{class o{constructor(n){this.cartService=n,this.product={}}get cart(){return this.cartService.getProductById(this.product.id)}handleAddToCart(){let{id:n,brand:c,category:i,description:a,discountPercentage:s,price:U,title:L,thumbnail:J}=this.product;this.cartService.addProduct({id:n,brand:c,category:i,description:a,discountPercentage:s,price:U,thumbnail:J,quantity:1,title:L,discountPrice:this.product.price-this.product.price*this.product.discountPercentage/100})}handleQuantity(n){this.cartService.updateQuantity(this.product.id,n)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(_.N))},o.\u0275cmp=t.Xpm({type:o,selectors:[["add-to-cart"]],inputs:{product:"product"},decls:3,vars:2,consts:[["class","add-btn",3,"click",4,"ngIf","ngIfElse"],["quantity",""],[1,"add-btn",3,"click"],[1,"quantity-btn"],[3,"click"]],template:function(n,c){if(1&n&&(t.YNc(0,m,2,0,"button",0),t.YNc(1,f,7,1,"ng-template",null,1,t.W1O)),2&n){const i=t.MAs(2);t.Q6J("ngIf",!c.cart)("ngIfElse",i)}},dependencies:[d.O5],styles:[".add-btn[_ngcontent-%COMP%]{padding:10px;background-color:#24aeb1;width:100%;height:37px;font-size:16px;border-radius:4px;border:none;color:#fff;text-transform:uppercase}.quantity-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:20px;height:37px}.quantity-btn[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:35px;height:35px;border:1px solid rgba(112,112,112,.38);border-radius:50%;color:#6f7284;background-color:#fff;font-size:20px}"]}),o})();const C=function(o){return["/product",o,"detail"]};let P=(()=>{class o{constructor(){this.product={}}get discountPrice(){return this.product.price-this.product.price*this.product.discountPercentage/100}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["product-card"]],inputs:{product:"product"},decls:23,vars:16,consts:[[1,"card"],[3,"routerLink"],[1,"offer"],[3,"src"],[1,"info"],[1,"price"],[1,"mrp"],[3,"product"]],template:function(n,c){1&n&&(t.TgZ(0,"div",0)(1,"a",1)(2,"span",2),t._uU(3),t.qZA(),t._UZ(4,"img",3),t.TgZ(5,"div",4)(6,"span"),t._uU(7),t.qZA(),t.TgZ(8,"span"),t._uU(9),t.qZA()(),t.TgZ(10,"div",5)(11,"span"),t._uU(12,"Best Price *"),t.qZA(),t.TgZ(13,"b"),t._uU(14),t.ALo(15,"currency"),t.qZA()(),t.TgZ(16,"div",6)(17,"span"),t._uU(18,"MRP "),t.qZA(),t.TgZ(19,"span"),t._uU(20),t.ALo(21,"currency"),t.qZA()()(),t._UZ(22,"add-to-cart",7),t.qZA()),2&n&&(t.xp6(1),t.Q6J("routerLink",t.VKq(14,C,c.product.id)),t.xp6(2),t.hij("",c.product.discountPercentage," %"),t.xp6(1),t.Q6J("src",c.product.thumbnail,t.LSH),t.xp6(3),t.Oqu(c.product.title),t.xp6(2),t.Oqu(c.product.description),t.xp6(5),t.Oqu(t.xi3(15,8,c.discountPrice,"INR")),t.xp6(6),t.Oqu(t.xi3(21,11,c.product.price,"INR")),t.xp6(2),t.Q6J("product",c.product))},dependencies:[p.rH,g,d.H9],styles:[".card[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;position:relative;background-color:#fff;box-shadow:0 6px 12px -4px #0b12191a;border-radius:8px;padding:12px}.card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;aspect-ratio:1}.card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px}.card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:#151b39;font-size:20px;-webkit-line-clamp:1}.card[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{-webkit-line-clamp:2;color:#6f7284;font-size:16px}.card[_ngcontent-%COMP%]   .offer[_ngcontent-%COMP%]{position:absolute;top:15px;left:15px;background:#84be52;border-radius:4px;color:#fff;font-size:12px;padding:4px 7px}.card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px}.card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6f7284;font-size:14px}.card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#ef4281;font-size:16px}.card[_ngcontent-%COMP%]   .mrp[_ngcontent-%COMP%]{color:#6f7284;font-size:14px}.card[_ngcontent-%COMP%]   .mrp[_ngcontent-%COMP%]:last-child{text-decoration:line-through}"]}),o})();function x(o,e){1&o&&t._UZ(0,"div",2)}function O(o,e){1&o&&t._UZ(0,"product-card",5),2&o&&t.Q6J("product",e.$implicit)}function M(o,e){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,O,1,1,"product-card",4),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.products)}}let h=(()=>{class o{constructor(n){this.productService=n,this.products=[],this.page=1}ngOnInit(){this.getProducts()}getProducts(){this.productService.getProducts(this.page).subscribe(({products:n})=>{this.products=n})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(l.M))},o.\u0275cmp=t.Xpm({type:o,selectors:[["product-list"]],decls:3,vars:2,consts:[["class","loader",4,"ngIf","ngIfElse"],["list",""],[1,"loader"],[1,"list"],[3,"product",4,"ngFor","ngForOf"],[3,"product"]],template:function(n,c){if(1&n&&(t.YNc(0,x,1,0,"div",0),t.YNc(1,M,2,1,"ng-template",null,1,t.W1O)),2&n){const i=t.MAs(2);t.Q6J("ngIf",0===c.products.length)("ngIfElse",i)}},dependencies:[d.sg,d.O5,P],styles:[".list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:20px;max-width:1300px;margin:30px auto}"]}),o})();function b(o,e){1&o&&(t.TgZ(0,"div"),t._uU(1,"Loading..."),t.qZA())}const v=function(o){return{active:o}};function y(o,e){if(1&o){const n=t.EpF();t.TgZ(0,"img",11),t.NdJ("click",function(){const a=t.CHM(n).index,s=t.oxw(2);return t.KtG(s.handleImage(a))}),t.qZA()}if(2&o){const n=e.$implicit,c=e.index,i=t.oxw(2);t.Tol(t.VKq(3,v,c===i.activeImage)),t.Q6J("src",n,t.LSH)}}function Z(o,e){if(1&o&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div"),t.YNc(3,y,1,5,"img",4),t.qZA(),t.TgZ(4,"div"),t._UZ(5,"img",5),t.qZA()(),t.TgZ(6,"div")(7,"div",6)(8,"span"),t._uU(9),t.qZA(),t.TgZ(10,"span"),t._uU(11),t.qZA()(),t.TgZ(12,"div",7)(13,"span"),t._uU(14,"Best Price *"),t.qZA(),t.TgZ(15,"b"),t._uU(16),t.ALo(17,"currency"),t.qZA()(),t.TgZ(18,"div",8)(19,"span"),t._uU(20,"MRP "),t.qZA(),t.TgZ(21,"span"),t._uU(22),t.ALo(23,"currency"),t.qZA()(),t.TgZ(24,"div",9),t._UZ(25,"add-to-cart",10),t.qZA()()()),2&o){const n=t.oxw();t.xp6(3),t.Q6J("ngForOf",n.product.images),t.xp6(2),t.Q6J("src",n.product.images[n.activeImage],t.LSH),t.xp6(4),t.Oqu(n.product.title),t.xp6(2),t.Oqu(n.product.description),t.xp6(5),t.Oqu(t.xi3(17,7,n.discountPrice,"INR")),t.xp6(6),t.Oqu(t.xi3(23,10,n.product.price,"INR")),t.xp6(3),t.Q6J("product",n.product)}}let T=(()=>{class o{constructor(n,c,i){this.route=n,this.router=c,this.productService=i,this.product={},this.activeImage=0,this.loading=!0}get discountPrice(){return this.product.price-this.product.price*this.product.discountPercentage/100}ngOnInit(){this.route.params.subscribe(({id:n})=>{this.getProductById(n)})}getProductById(n){this.productService.getProductById(n).subscribe(c=>{this.product=c,this.loading=!1})}handleImage(n){this.activeImage=n}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(p.gz),t.Y36(p.F0),t.Y36(l.M))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-detail"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["detail",""],[1,"container"],[1,"product-img"],[3,"src","class","click",4,"ngFor","ngForOf"],[3,"src"],[1,"info"],[1,"price"],[1,"mrp"],[1,"add-btn"],[3,"product"],[3,"src","click"]],template:function(n,c){if(1&n&&(t.YNc(0,b,2,0,"div",0),t.YNc(1,Z,26,13,"ng-template",null,1,t.W1O)),2&n){const i=t.MAs(2);t.Q6J("ngIf",c.loading)("ngIfElse",i)}},dependencies:[d.sg,d.O5,g,d.H9],styles:[".container[_ngcontent-%COMP%]{display:grid;grid-template-columns:.4fr 1fr;gap:25px;max-width:1300px;margin:30px auto}.container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]{display:flex;gap:25px}.container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100px}.container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{display:flex;flex-direction:column;justify-content:center;gap:10px}.container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]{width:100%;aspect-ratio:4/3;border:1px solid #d3d3d3;cursor:pointer}.container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child   img[_ngcontent-%COMP%]:is(.active){border:2px solid #32aeb1;box-shadow:0 0 4px 2px #d1c9c9}.container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{display:flex;align-items:center;width:100%}.container[_ngcontent-%COMP%]   .product-img[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   img[_ngcontent-%COMP%]{aspect-ratio:4/3}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{color:#151b39;font-size:32px;-webkit-line-clamp:1}.container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{-webkit-line-clamp:2;color:#6f7284;font-size:20px}.container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{display:flex;align-items:center;gap:20px;margin-top:30px}.container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#6f7284;font-size:20px}.container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]   b[_ngcontent-%COMP%]{color:#ef4281;font-size:28px}.container[_ngcontent-%COMP%]   .mrp[_ngcontent-%COMP%]{color:#6f7284;font-size:16px}.container[_ngcontent-%COMP%]   .mrp[_ngcontent-%COMP%]:last-child{text-decoration:line-through}.container[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]{width:150px;margin-top:30px}"]}),o})();var A=r(1379);const q=[{path:"",component:(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-layout"]],decls:2,vars:0,template:function(n,c){1&n&&t._UZ(0,"app-header")(1,"router-outlet")},dependencies:[p.lC,A.G]}),o})(),children:[{path:"all",component:h},{path:":id/detail",component:T}]}];let w=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.Bz.forChild(q),p.Bz]}),o})();var I=r(4466);let k=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.ez,w,I.m]}),o})()}}]);
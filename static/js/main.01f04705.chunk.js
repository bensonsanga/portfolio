(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(e,t,a){},138:function(e,t,a){e.exports=a.p+"static/media/logo.0e7be800.svg"},207:function(e,t,a){e.exports=a(394)},212:function(e,t,a){},278:function(e,t,a){e.exports=a.p+"static/media/Avatar.31000888.jpg"},283:function(e,t,a){},370:function(e,t,a){},394:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(25),r=a.n(c),i=(a(212),a(13)),o=a(14),s=a(16),m=a(15),d=a(17),h=(a(110),a(138),a(6)),p=a(71),u=a.n(p),b=a(70),g=a.n(b);a(54);var f=Object(h.withStyles)({bigAvatar:{height:"12em",width:"12em"}})(function(e){var t=e.classes;return l.a.createElement("div",{className:"avatarSize"},l.a.createElement(g.a,{container:!0,justify:"flex-end",alignItems:"center"},l.a.createElement("div",{class:"pl3"},l.a.createElement(u.a,{alt:"Benson",src:a(278),className:t.bigAvatar}))))});a(283);var E=Object(h.withStyles)({card:{color:"black",minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},pos:{marginBottom:12},head:{color:"white",fontSize:"4em"}})(function(e){var t=e.classes;return l.a.createElement("span",{className:t.bullet},"\u2022"),l.a.createElement("div",null,l.a.createElement("div",{class:"flex justify-between w-90 flex-wrap-reverse"},l.a.createElement("div",{class:"animated fadeInUp slow"},l.a.createElement("h1",{class:"f1-m f-subheadline-l white pl3"},"Benson Sanga")),l.a.createElement("div",{class:"animated fadeInUp fast"},l.a.createElement(f,null))),l.a.createElement("div",{class:"w-70 typewriter f9 f6-m f5-l pl3"},l.a.createElement("h1",null,"Hello world. Amature Architect....")))}),w=a(72),x=a.n(w),v=a(73),k=a.n(v),y=a(74),j=a.n(y),C=a(9),_=a.n(C),S=Object(h.withStyles)({root:{border:"1px solid rgba(0,0,0,.125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"}},expanded:{margin:"auto"}})(x.a),N=Object(h.withStyles)({root:{backgroundColor:"rgba(0,0,0,.03)",borderBottom:"1px solid rgba(0,0,0,.125)",marginBottom:-1,minHeight:56,color:"white","&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"}},expanded:{}})(function(e){return l.a.createElement(k.a,e)});N.muiName="ExpansionPanelSummary";var O=Object(h.withStyles)(function(e){return{root:{padding:2*e.spacing.unit}}})(j.a),B=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={expanded:"panel1"},a.handleChange=function(e){return function(t,n){a.setState({expanded:!!n&&e})}},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.expanded;return l.a.createElement("div",null,l.a.createElement(S,{expanded:"panel1"===e,onChange:this.handleChange("panel1")},l.a.createElement(N,null,l.a.createElement(_.a,null,"New Grasshopper Plugin development")),l.a.createElement(O,null,l.a.createElement(_.a,null,"I have been developing a grasshopper plugin and a python library to assist in generation of geometry, automation of tasks and presentations of the designs in a more legible manner"))),l.a.createElement(S,{expanded:"panel2"===e,onChange:this.handleChange("panel2")},l.a.createElement(N,null,l.a.createElement(_.a,null,"Creating an asset library")),l.a.createElement(O,null,l.a.createElement(_.a,null,"I have been also working to make comprehesive assest file incuding cutout people, brushes, fonts, sheets and other elements used in presentation boards"))),l.a.createElement(S,{expanded:"panel3"===e,onChange:this.handleChange("panel3")},l.a.createElement(N,null,l.a.createElement(_.a,null,"Competition results")),l.a.createElement(O,null,l.a.createElement(_.a,null,"Waiting for some competion results. But in the mean time I am very eager to take part in other project. So if they are any please reach out."))))}}]),t}(l.a.Component),A=a(140),W=a.n(A),T=a(79),P=(l.a.Component,a(75)),I=a.n(P),F=a(38),z=a.n(F),D=a(141),L=a.n(D),M=a(142),J=a.n(M),R=a(143),V=a.n(R),$=a(144),G=a.n($),U=a(39),H=a.n(U),K=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={value:"01"},a.handleChange=function(e,t){H()({value:t}),a.setState({value:t})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return l.a.createElement("div",{className:"w-60 w-100-l w-90-m"},l.a.createElement(I.a,{value:t,onChange:this.handleChange,className:e.root},l.a.createElement(z.a,{onClick:H()(0),label:"Home",className:e.colors,value:"01",icon:l.a.createElement(L.a,null)}),l.a.createElement(z.a,{onClick:H()(500),label:"Skills",className:e.colors,value:"02",icon:l.a.createElement(J.a,null)}),l.a.createElement(z.a,{onClick:H()(1500),label:"Contact",className:e.colors,value:"03",icon:l.a.createElement(V.a,null)}),l.a.createElement(z.a,{onClick:H()(2e3),label:"Projects",className:e.colors,value:"04",icon:l.a.createElement(G.a,null)})))}}]),t}(l.a.Component),q=Object(h.withStyles)({root:{width:"100%",height:"100px",background:"transparent",borderRadius:3,border:0,color:"white",padding:"0 30px"},colors:{color:"white"}})(K),Z=a(145),X=a.n(Z),Y=(a(330),a(146)),Q=a.n(Y),ee=(a(332),a(22)),te=a.n(ee),ae=a(37),ne=a.n(ae),le=a(50),ce=a.n(le),re=a(47),ie=a.n(re),oe=a(46),se=a.n(oe),me=a(48),de=a.n(me),he=a(49),pe=a.n(he),ue=a(32),be=a.n(ue),ge=a(35),fe=a.n(ge),Ee=a(33),we=a.n(Ee),xe=a(36),ve=a.n(xe),ke=a(27),ye=a.n(ke),je=a(45),Ce=a.n(je),_e=a(26),Se=a.n(_e),Ne=a(51),Oe=a.n(Ne),Be=a(52),Ae=a.n(Be),We=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={activeStep:0},a.handleNext=function(){a.setState(function(e){return{activeStep:e.activeStep+1}})},a.handleBack=function(){a.setState(function(e){return{activeStep:e.activeStep-1}})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme,n=this.state.activeStep,c=this.props.images,r=c.length;return l.a.createElement("div",{className:t.root},l.a.createElement(Se.a,{square:!0,elevation:0,className:t.header},l.a.createElement(_.a,null,c[n].label)),l.a.createElement("img",{className:t.img,src:c[n].imgPath,alt:c[n].label}),l.a.createElement(Ce.a,{steps:r,position:"static",activeStep:n,className:t.mobileStepper,nextButton:l.a.createElement(te.a,{size:"small",onClick:this.handleNext,disabled:n===r-1},"Next","rtl"===a.direction?l.a.createElement(Oe.a,null):l.a.createElement(Ae.a,null)),backButton:l.a.createElement(te.a,{size:"small",onClick:this.handleBack,disabled:0===n},"rtl"===a.direction?l.a.createElement(Ae.a,null):l.a.createElement(Oe.a,null),"Back")}))}}]),t}(l.a.Component),Te=Object(h.withStyles)(function(e){return{root:{maxWidth:"100%",background:"white",flexGrow:1},header:{display:"flex",alignItems:"center",height:"100%",paddingLeft:4*e.spacing.unit,background:"white)"},img:{height:"auto",maxWidth:"100%",overflow:"hidden",display:"block",width:"100%"},mobileStepper:{background:"white"}}},{withTheme:!0})(We),Pe=[{id:1,name:"Residential Unit Cengelkoy",description:"The project was loacted in Cengelkoy. The site was a step side next to the see and the scenario was one family of three",cover:"https://visualizingarchitecture.com/wp-content/uploads/2013/08/Cranbrook_clay_model_view_2.jpg",location:"Cengelkoy, Istanbul, Turkey",architect:"Benson Sanga",date:"January 2016",images:[{label:"Fifth one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/75fcbf74238911.5c27b97c0ca4a.png"},{label:"ATrial 2",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8e96be64395233.5ad0a38665155.jpg"},{label:"Another one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19a46574238911.5c27b97c0d2c1.png"},{label:"Third one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/13007a74238911.5c27b97c0d0b9.png"},{label:"Fourth one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/55a08c74238911.5c27b97c0dffb.png"}]},{id:2,name:"Kindergatten",description:"Also The project was loacted in Cengelkoy. The site was a step side next to the see and the scenario was one family of three",cover:"http://designplaygrounds.com/wp-content/uploads/2016/01/Diagrams-02.jpg",location:"Cengelkoy, Istanbul, Turkey",architect:"Benson Sanga",date:"June 2017",images:[{label:"ATrial 2",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0d1bbf74238911.5c27b97c0d846.png"},{label:"Another one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19a46574238911.5c27b97c0d2c1.png"},{label:"Third one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/13007a74238911.5c27b97c0d0b9.png"},{label:"Fourth one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/55a08c74238911.5c27b97c0dffb.png"},{label:"Fifth one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/75fcbf74238911.5c27b97c0ca4a.png"}]},{id:3,name:"Exhibtion Space",description:"Also The project was loacted in Cengelkoy. The site was a step side next to the see and the scenario was one family of three",cover:"https://www.ronenbekerman.com/wp-content/uploads/2010/04/TEZUKA-EXTERIOR01-CLAY.jpg",location:"Cengelkoy, Istanbul, Turkey",architect:"Benson Sanga",date:"June 2017",images:[{label:"ATrial 2",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0d1bbf74238911.5c27b97c0d846.png"},{label:"Another one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19a46574238911.5c27b97c0d2c1.png"},{label:"Third one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/13007a74238911.5c27b97c0d0b9.png"},{label:"Fourth one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/55a08c74238911.5c27b97c0dffb.png"},{label:"Fifth one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/75fcbf74238911.5c27b97c0ca4a.png"}]},{id:4,name:"Urban Transformation",description:"Also The project was loacted in Cengelkoy. The site was a step side next to the see and the scenario was one family of three",cover:"https://img.archilovers.com/projects/b_730_87422CF9-7FC6-4B03-82F1-1698C331D6E9.jpg",location:"Cengelkoy, Istanbul, Turkey",architect:"Benson Sanga",date:"June 2017",images:[{label:"ATrial 2",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0d1bbf74238911.5c27b97c0d846.png"},{label:"Another one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19a46574238911.5c27b97c0d2c1.png"},{label:"Third one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/13007a74238911.5c27b97c0d0b9.png"},{label:"Fourth one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/55a08c74238911.5c27b97c0dffb.png"},{label:"Fifth one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/75fcbf74238911.5c27b97c0ca4a.png"}]},{id:5,name:"Istanbul in 50 years",description:"The project was a collaborattive project with two more of my friend where we tried to speculate how the city of Istanbul, Turkey would look like in 20168. The project in turned out to be a very interesting exploration of how different cutting edge methods and technologies can be used to solve their own cutting edge problems. The other two members when Can Mezunoglu and Zeki Kan",cover:"https://st3.depositphotos.com/3364427/19228/i/1600/depositphotos_192280390-stock-photo-clay-rendering-image-heavyweight-robotic.jpg",location:"Cengelkoy, Istanbul, Turkey",architect:"Benson Sanga",date:"June 2017",images:[{label:"Conceptual master design",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9cca0b75430601.5c4c75085707e.jpg"},{label:"Some visuals",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4baf975430601.5c4c750857791.jpg"},{label:"Some Elements",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7c20bf75430601.5c4c75085735c.jpg"}]},{id:6,name:"University campus",description:"Also The project was loacted in Cengelkoy. The site was a step side next to the see and the scenario was one family of three",cover:"http://designplaygrounds.com/wp-content/uploads/2016/01/Diagrams-02.jpg",location:"Cengelkoy, Istanbul, Turkey",architect:"Benson Sanga",date:"June 2017",images:[{label:"ATrial 2",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0d1bbf74238911.5c27b97c0d846.png"},{label:"Another one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/19a46574238911.5c27b97c0d2c1.png"},{label:"Third one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/13007a74238911.5c27b97c0d0b9.png"},{label:"Fourth one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/55a08c74238911.5c27b97c0dffb.png"},{label:"Fifth one",imgPath:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/75fcbf74238911.5c27b97c0ca4a.png"}]}],Ie=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1,fullWidth:!0,maxWidth:"xl"},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleMaxWidthChange=function(e){a.setState({maxWidth:e.target.value})},a.handleFullWidthChange=function(e){a.setState({fullWidth:e.target.checked})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.props,a=t.name,n=t.cover,c=t.description,r=(t.id,t.images);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"pa2",onClick:this.handleClickOpen},l.a.createElement(be.a,{"data-aos":"fade-up",className:e.card},l.a.createElement(fe.a,null,l.a.createElement(ve.a,{className:e.media,image:"".concat(n),title:"Project"}),l.a.createElement(we.a,null,l.a.createElement(_.a,{gutterBottom:!0,variant:"h5",component:"h2",className:e.text},a),l.a.createElement(_.a,{component:"p",className:e.text},c))),l.a.createElement(ye.a,null))),l.a.createElement(ne.a,{fullWidth:this.state.fullWidth,maxWidth:this.state.maxWidth,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"max-width-dialog-title"},l.a.createElement(se.a,{id:"max-width-dialog-title"},a),l.a.createElement(ie.a,null,l.a.createElement(Te,{images:r}),l.a.createElement("form",{className:e.form,noValidate:!0},l.a.createElement(de.a,{className:e.formControlLabel,control:l.a.createElement(pe.a,{checked:this.state.fullWidth,onChange:this.handleFullWidthChange,value:"fullWidth"}),label:"Full width"}))),l.a.createElement(ce.a,null,l.a.createElement(te.a,{onClick:this.handleClose,color:"primary"},"Close"))))}}]),t}(l.a.Component),Fe=Object(h.withStyles)(function(e){return{form:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content"},formControl:{marginTop:2*e.spacing.unit,minWidth:120},formControlLabel:{marginTop:e.spacing.unit},card:{maxWidth:345,background:"#262626"},media:{height:250},text:{color:"white"}}})(Ie),ze=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={activeStep:0},a.handleNext=function(){a.setState(function(e){return{activeStep:e.activeStep+1}})},a.handleBack=function(){a.setState(function(e){return{activeStep:e.activeStep-1}})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.theme,n=this.state.activeStep,c=r.length,r=this.props.images;return l.a.createElement("div",{className:t.root},l.a.createElement(Se.a,{square:!0,elevation:0,className:t.header},l.a.createElement(_.a,null,r[n].label)),l.a.createElement("img",{className:t.img,src:r[n].imgPath,alt:r[n].label}),l.a.createElement(Ce.a,{steps:c,position:"static",activeStep:n,className:t.mobileStepper,nextButton:l.a.createElement(te.a,{size:"small",onClick:this.handleNext,disabled:n===c-1},"Next","rtl"===a.direction?l.a.createElement(Oe.a,null):l.a.createElement(Ae.a,null)),backButton:l.a.createElement(te.a,{size:"small",onClick:this.handleBack,disabled:0===n},"rtl"===a.direction?l.a.createElement(Ae.a,null):l.a.createElement(Oe.a,null),"Back")}))}}]),t}(l.a.Component),De=Object(h.withStyles)(function(e){return{root:{maxWidth:"100%",background:"white",flexGrow:1},header:{display:"flex",alignItems:"center",height:"100%",paddingLeft:4*e.spacing.unit,background:"white)"},img:{height:"auto",maxWidth:"100%",overflow:"hidden",display:"block",width:"100%"},mobileStepper:{background:"white"}}},{withTheme:!0})(ze),Le=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1,fullWidth:!0,maxWidth:"xl"},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a.handleMaxWidthChange=function(e){a.setState({maxWidth:e.target.value})},a.handleFullWidthChange=function(e){a.setState({fullWidth:e.target.checked})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"pa2",onClick:this.handleClickOpen},l.a.createElement(be.a,{"data-aos":"fade-up",className:e.card},l.a.createElement(fe.a,null,l.a.createElement(ve.a,{className:e.media,image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/40786564395233.5ad0a38665840.jpg",title:"Project"}),l.a.createElement(we.a,null,l.a.createElement(_.a,{gutterBottom:!0,variant:"h5",component:"h2",className:e.text},Pe[1].name),l.a.createElement(_.a,{component:"p",className:e.text},Pe[1].description))),l.a.createElement(ye.a,null))),l.a.createElement(ne.a,{fullWidth:this.state.fullWidth,maxWidth:this.state.maxWidth,open:this.state.open,onClose:this.handleClose,"aria-labelledby":"max-width-dialog-title"},l.a.createElement(se.a,{id:"max-width-dialog-title"},Pe[1].name),l.a.createElement(ie.a,null,l.a.createElement(De,null),l.a.createElement("form",{className:e.form,noValidate:!0},l.a.createElement(de.a,{className:e.formControlLabel,control:l.a.createElement(pe.a,{checked:this.state.fullWidth,onChange:this.handleFullWidthChange,value:"fullWidth"}),label:"Full width"}))),l.a.createElement(ce.a,null,l.a.createElement(te.a,{onClick:this.handleClose,color:"primary"},"Close"))))}}]),t}(l.a.Component),Me=(Object(h.withStyles)(function(e){return{form:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content"},formControl:{marginTop:2*e.spacing.unit,minWidth:120},formControlLabel:{marginTop:e.spacing.unit},card:{maxWidth:345,background:"#262626"},media:{height:250},text:{color:"white"}}})(Le),function(){var e=Pe.map(function(e,t){return l.a.createElement("div",{class:"horizontal-scroll-wrapper squares"},l.a.createElement("div",null,l.a.createElement(Fe,{key:t,id:Pe[t].id,name:Pe[t].name,description:Pe[t].description,cover:Pe[t].cover,images:Pe[t].images})))});return l.a.createElement("section",{"data-aos":"fade-up",class:"flex justify-center flex-wrap w-100 h-100 section scrollmenu","data-aos-delay":"400"},e)});function Je(){return Math.round(20*Math.random())-10}function Re(){var e=50+Je(),t=50+Je();return{top:"".concat(e,"%"),left:"".concat(t,"%"),transform:"translate(-".concat(e,"%, -").concat(t,"%)")}}var Ve=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},a.handleOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,l.a.createElement("div",{class:"pa2"},l.a.createElement(be.a,{"data-aos":"fade-up",className:e.card},l.a.createElement(fe.a,null,l.a.createElement(ve.a,{className:e.media,image:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/91608064395233.5ad0a386665f4.jpg",title:"Project"}),l.a.createElement(we.a,null,l.a.createElement(_.a,{gutterBottom:!0,variant:"h5",component:"h2",className:e.text},"Kindergarten"),l.a.createElement(_.a,{component:"p",className:e.text},"Project uses structure to create architectural spaces and creates for chidren"))),l.a.createElement(ye.a,null))),l.a.createElement(ye.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},l.a.createElement("div",{style:Re(),className:e.paper},l.a.createElement($e,null))))}}]),t}(l.a.Component),$e=Object(h.withStyles)(function(e){return{paper:{position:"absolute",width:50*e.spacing.unit,backgroundColor:e.palette.background.paper,boxShadow:e.shadows[5],padding:4*e.spacing.unit,outline:"none"},card:{maxWidth:345,background:"#262626"},media:{height:250},text:{color:"white"}}})(Ve),Ge=a(59),Ue=a.n(Ge),He=a(147),Ke=a.n(He),qe=a(148),Ze=a.n(qe),Xe=a(29),Ye=a.n(Xe);var Qe=Object(h.withStyles)(function(e){return{fab:{margin:e.spacing.unit},extendedIcon:{marginRight:e.spacing.unit}}})(function(e){var t=e.classes;return l.a.createElement("div",null,l.a.createElement("a",{target:"blank",href:"https://www.instagram.com/benson.a.d/"},l.a.createElement(Ye.a,{title:"Story","aria-label":"Story"},l.a.createElement(Ue.a,{"aria-label":"Add",className:t.fab},l.a.createElement(Ke.a,null)))),l.a.createElement("a",{target:"blank",href:"https://mailchi.mp/7609e33669ef/bensonadnewsletter"},l.a.createElement(Ye.a,{title:"Subscribe","aria-label":"Subscribe"},l.a.createElement(Ue.a,{variant:"extended","aria-label":"Delete",className:t.fab},l.a.createElement(Ze.a,{className:t.extendedIcon}),"Subscribe"))))});a(370);var et=Object(h.withStyles)(function(e){return{text:{color:"white"},lightTooltip:{backgroundColor:e.palette.common.black,color:e.palette.text.white,boxShadow:e.shadows[1],fontSize:15}}})(function(e){var t=e.classes;return l.a.createElement("div",{className:"flex flex-wrap pl5 justify-around"},l.a.createElement(Ye.a,{classes:{tooltip:t.lightTooltip},title:"Proficient in Autodesk Revit, Navis works, Dynamo and AutoCad ","aria-label":"Autodedesk",placement:"top"},l.a.createElement("section",null,l.a.createElement("h2",{className:t.text},"Autodesk Suite"),l.a.createElement("svg",{className:"circle-chart",viewBox:"0 0 33.83098862 33.83098862",width:200,height:200,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{className:"circle-chart__background",stroke:"#efefef",strokeWidth:4,fill:"#bfbfbf",cx:"16.91549431",cy:"16.91549431",r:"8"}),l.a.createElement("circle",{className:"circle-chart__circle",stroke:"#1de954",strokeWidth:2,strokeDasharray:"60,100",strokeLinecap:"round",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"11"}),l.a.createElement("g",{className:"circle-chart__info"},l.a.createElement("text",{className:t.text,x:"16.91549431",y:"15.5",alignmentBaseline:"central",textAnchor:"middle",fontSize:5},"90%"),l.a.createElement("text",{className:t.text,x:"16.91549431",y:"20.5",alignmentBaseline:"central",textAnchor:"middle",fontSize:2},"Pro"))))),l.a.createElement(Ye.a,{classes:{tooltip:t.lightTooltip},title:"Skilled in graphical respresentaion by using AfterEffects, Illustrator, Photoshop and Indesign Mainly.","aria-label":"Adobe",placement:"top"},l.a.createElement("section",null,l.a.createElement("h2",{className:t.text},"Adobe Suite"),l.a.createElement("svg",{className:"circle-chart",viewBox:"0 0 33.83098862 33.83098862",width:200,height:200,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{className:"circle-chart__background",stroke:"#efefef",strokeWidth:4,fill:"#bfbfbf",cx:"16.91549431",cy:"16.91549431",r:"8"}),l.a.createElement("circle",{className:"circle-chart__circle",stroke:"#1de954",strokeWidth:2,strokeDasharray:"45,100",strokeLinecap:"round",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"11"}),l.a.createElement("g",{className:"circle-chart__info"},l.a.createElement("text",{className:t.text,x:"16.91549431",y:"15.5",alignmentBaseline:"central",textAnchor:"middle",fontSize:5},"60%"),l.a.createElement("text",{className:t.text,x:"16.91549431",y:"20.5",alignmentBaseline:"central",textAnchor:"middle",fontSize:2},"Expert"))))),l.a.createElement(Ye.a,{classes:{tooltip:t.lightTooltip},title:"Problem solving by coding languages including C#, JavaScript, Python and Visual programming like Grasshopper and Espresso","aria-label":"Code",placement:"top"},l.a.createElement("section",null,l.a.createElement("h2",{className:t.text},"Coding"),l.a.createElement("svg",{className:"circle-chart",viewBox:"0 0 33.83098862 33.83098862",width:200,height:200,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{className:"circle-chart__background",stroke:"#efefef",strokeWidth:4,fill:"#bfbfbf",cx:"16.91549431",cy:"16.91549431",r:"8"}),l.a.createElement("circle",{className:"circle-chart__circle",stroke:"#1de954",strokeWidth:2,strokeDasharray:"12,100",strokeLinecap:"round",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"11"}),l.a.createElement("g",{className:"circle-chart__info"},l.a.createElement("text",{className:t.text,x:"16.91549431",y:"15.5",alignmentBaseline:"central",textAnchor:"middle",fontSize:5},"20%"),l.a.createElement("text",{className:t.text,x:"16.91549431",y:"20.5",alignmentBaseline:"central",textAnchor:"middle",fontSize:2},"Good"))))),l.a.createElement(Ye.a,{classes:{tooltip:t.lightTooltip},title:"Reseasonabl well in technical drawing and perspective sketching. Also good at digital and traditional painting","aria-label":"Sketching",placement:"top"},l.a.createElement("section",null,l.a.createElement("h2",{className:t.text},"Hand Drawing"),l.a.createElement("svg",{className:"circle-chart",viewBox:"0 0 33.83098862 33.83098862",width:200,height:200,xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("circle",{className:"circle-chart__background",stroke:"#efefef",strokeWidth:4,fill:"#bfbfbf",cx:"16.91549431",cy:"16.91549431",r:"8"}),l.a.createElement("circle",{className:"circle-chart__circle",stroke:"#1de954",strokeWidth:2,strokeDasharray:"50,100",strokeLinecap:"round",fill:"none",cx:"16.91549431",cy:"16.91549431",r:"11"}),l.a.createElement("g",{className:"circle-chart__info"},l.a.createElement("text",{className:t.text,x:"16.91549431",y:"15.5",alignmentBaseline:"central",textAnchor:"middle",fontSize:5},"70%"),l.a.createElement("text",{className:t.text,x:"16.91549431",y:"20.5",alignmentBaseline:"central",textAnchor:"middle",fontSize:2},"Good"))))))}),tt=a(77),at=a.n(tt),nt=a(78),lt=a.n(nt),ct=a(44),rt=a.n(ct),it=a(150),ot=a.n(it),st=a(76),mt=a.n(st),dt=a(103),ht=a(104),pt=[{url:"http://www.renderit.cc/wp-content/uploads/2016/02/0-renderit-exterior2-rendering.jpg",title:"Renders",width:"25%"},{url:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f120ae36351729.56064345db123.jpg",title:"Sketches",width:"25%"},{url:"https://www.designingbuildings.co.uk/w/images/c/c3/As-built-drawings.jpg",title:"Techniacal",width:"25%"},{url:"https://www.arch2o.com/wp-content/uploads/2017/02/Arch2O-Architectural-model.jpg",title:"Models",width:"25%"}];var ut=Object(h.withStyles)(function(e){var t;return{root:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%"},image:(t={position:"relative",height:200},Object(dt.a)(t,e.breakpoints.down("xs"),{width:"100% !important",height:100}),Object(dt.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.15},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"4px solid currentColor"}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.4,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(2*e.spacing.unit,"px ").concat(4*e.spacing.unit,"px ").concat(e.spacing.unit+6,"px")},imageMarked:{height:3,width:18,backgroundColor:e.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}})(function(e){var t=e.classes;return l.a.createElement("div",{className:t.root},pt.map(function(e){return l.a.createElement(ht.a,{focusRipple:!0,key:e.title,className:t.image,focusVisibleClassName:t.focusVisible,style:{width:e.width}},l.a.createElement("span",{className:t.imageSrc,style:{backgroundImage:"url(".concat(e.url,")")}}),l.a.createElement("span",{className:t.imageBackdrop}),l.a.createElement("span",{className:t.imageButton},l.a.createElement(ht.b,{component:"span",variant:"subtitle1",color:"inherit",className:t.imageTitle},e.title,l.a.createElement("span",{className:t.imageMarked}))))}))}),bt=a(149),gt=a.n(bt),ft=(a(377),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement(gt.a,{items:[{original:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2745b64395233.5ad0a38667825.jpg",thumbnail:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b2745b64395233.5ad0a38667825.jpg"},{original:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c82ff064395233.5ad0a38665f8c.jpg",thumbnail:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c82ff064395233.5ad0a38665f8c.jpg"},{original:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ae172664395233.5ad22fa0d6529.jpg",thumbnail:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/ae172664395233.5ad22fa0d6529.jpg"},{original:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dbed4064395233.5ad0a38668623.jpg",thumbnail:"https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/dbed4064395233.5ad0a38668623.jpg"}]})}}]),t}(l.a.Component));function Et(e){return l.a.createElement(mt.a,Object.assign({direction:"up"},e))}var wt=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={open:!1},a.handleClickOpen=function(){a.setState({open:!0})},a.handleClose=function(){a.setState({open:!1})},a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes;return l.a.createElement("div",null,l.a.createElement("div",{onClick:this.handleClickOpen},l.a.createElement(ut,null)),l.a.createElement(ne.a,{fullScreen:!0,open:this.state.open,onClose:this.handleClose,TransitionComponent:Et,className:e.mainBg},l.a.createElement(at.a,{className:e.appBar},l.a.createElement(lt.a,null,l.a.createElement(rt.a,{color:"inherit",onClick:this.handleClose,"aria-label":"Close"},l.a.createElement(ot.a,null)),l.a.createElement(_.a,{variant:"h6",color:"inherit",className:e.flex},"Benson AD"),l.a.createElement(te.a,{color:"inherit",onClick:this.handleClose},"Close"))),l.a.createElement(ft,null)))}}]),t}(l.a.Component),xt=Object(h.withStyles)({appBar:{position:"relative",backgroundColor:"black"},flex:{flex:1},mainBg:{background:"black"}})(wt);X()(),Q.a.init();var vt={particles:{number:{value:80},size:{value:3}},interactivity:{events:{onhover:{enable:!0,mode:"repulse"}}}},kt=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(W.a,{className:"particles",params:vt}),l.a.createElement("div",{class:"float"},l.a.createElement(Qe,null)),l.a.createElement("div",{id:"outer-container"},l.a.createElement(T.bubble,{pageWrapId:"page-wrap",outerContainerId:"outer-container",width:"30%"},l.a.createElement("a",{id:"home",className:"menu-item",href:"mailto:bensonsanga@hotmail.com"},"Mail"),l.a.createElement("a",{id:"about",className:"menu-item",href:"https://www.instagram.com/ymcmbennie/"},"Instagram"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"https://www.behance.net/bensonsang34cd"},"Behance"),l.a.createElement("a",{id:"contact",className:"menu-item",href:"https://www.facebook.com/benson.sanga?ref=bookmarks"},"Facebook")),l.a.createElement("main",{id:"page-wrap"},l.a.createElement("div",{class:"nav flex justify-around animated fadeInLeft ml6 float2"},l.a.createElement(q,null)),l.a.createElement("div",{className:"bodyFake"},l.a.createElement("section",{class:"w-100 h-100 section"},l.a.createElement(E,null)),l.a.createElement("section",{"data-aos":"fade-up",class:"w-100 h-100 section","data-aos-delay":"400"},l.a.createElement(et,null)),l.a.createElement("section",{"data-aos":"fade-up",class:"w-100 h-100 section","data-aos-delay":"400"}),l.a.createElement("section",null,l.a.createElement(Me,null)),l.a.createElement("section",{ref:"01","data-aos":"fade-up",class:"w-100 h-100 section","data-aos-delay":"100"},l.a.createElement(xt,null),l.a.createElement(B,null))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(kt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[207,2,1]]]);
//# sourceMappingURL=main.01f04705.chunk.js.map
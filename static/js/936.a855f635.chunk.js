"use strict";(self.webpackChunkreact_app_1=self.webpackChunkreact_app_1||[]).push([[936],{936:(e,s,t)=>{t.r(s),t.d(s,{default:()=>w});var a=t(60),l=t(124),o=t(336),i=t(496);const r=e=>{let{isOwner:s,updateStatus:t,...l}=e;const[o,r]=(0,a.useState)(!1),[n,c]=(0,a.useState)(l.status);(0,a.useEffect)((()=>{c(l.status)}),[l.status]);return(0,i.jsx)(i.Fragment,{children:o?s?(0,i.jsxs)("div",{className:"update_status_input",children:[(0,i.jsx)("input",{className:"default_input status_input",onChange:e=>c(e.currentTarget.value),autoFocus:!0,onBlur:()=>{r(!1),t(n)},value:n,maxLength:"200"}),(0,i.jsx)("div",{children:(0,i.jsx)("span",{className:"status_annotation basic-text--color-muted",children:"\u0412\u0430\u0448 \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u0431\u043e\u043b\u0435\u0435 200 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"})})]}):(0,i.jsx)("span",{children:n||"\u041d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"}):(0,i.jsxs)("div",{className:"status",children:[(0,i.jsx)("span",{onDoubleClick:()=>{r(!0)},children:n||"\u041d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"}),s&&(0,i.jsx)("div",{children:(0,i.jsx)("span",{className:"status_annotation basic-text--color-muted",children:"\u0414\u043b\u044f \u0442\u043e\u0433\u043e \u0447\u0442\u043e\u0431\u044b \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0434\u0432\u0430\u0436\u0434\u044b \u0449\u0435\u043b\u043a\u043d\u0438\u0442\u0435 \u043d\u0430 \u0442\u0435\u043a\u0441\u0442"})})]})})};var n=t(622);const c=e=>{let{profile:s,setEditMode:t,editProfile:a}=e;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"page_profile_user_data",children:(0,i.jsx)(n.QJ,{initialValues:{AboutMe:"I'am cool",fullName:s.fullName,lookingForAJob:s.lookingForAJob,lookingForAJobDescription:s.lookingForAJobDescription,contacts:{facebook:s.contacts.facebook,website:s.contacts.website,vk:s.contacts.vk,twitter:s.contacts.twitter,instagram:s.contacts.instagram,youtube:s.contacts.youtube,github:s.contacts.github,mainLink:s.contacts.mainLink}},onSubmit:(e,s)=>{let{setStatus:l}=s;a(e,l).then((()=>t(!1))).catch((e=>console.log(e)))},children:e=>{let{status:t}=e;return(0,i.jsxs)(n.QF,{children:[t&&t.errors&&(0,i.jsx)("div",{className:"error_message_block",children:t.errors}),(0,i.jsxs)("div",{className:"edit_profile_item",children:[(0,i.jsx)("label",{className:"edit_profile_label",htmlFor:"fullName",children:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f: "}),(0,i.jsx)(n.IN,{className:"default_input edit_profile_input",type:"text",maxLength:"40",name:"fullName",placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"})]}),(0,i.jsx)(n.mS,{name:"fullName",component:"div"}),(0,i.jsxs)("div",{className:"edit_profile_item",children:[(0,i.jsx)("label",{className:"edit_profile_label",children:"\u0412\u044b \u0438\u0449\u0438\u0442\u0435 \u0440\u0430\u0431\u043e\u0442\u0443?"}),(0,i.jsx)("div",{className:"edit_profile_radio",children:(0,i.jsxs)("label",{children:[(0,i.jsx)(n.IN,{type:"radio",name:"lookingForAJob",id:"yes",value:"true"}),"\u0414\u0430"]})}),(0,i.jsx)("div",{className:"edit_profile_radio",children:(0,i.jsxs)("label",{children:[(0,i.jsx)(n.IN,{type:"radio",name:"lookingForAJob",id:"no",value:"false"}),"\u041d\u0435\u0442"]})})]}),(0,i.jsx)(n.mS,{name:"lookingForAJob",component:"div"}),(0,i.jsxs)("div",{className:"edit_profile_item",children:[(0,i.jsx)("label",{className:"edit_profile_label",htmlFor:"lookingForAJobDescription",children:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043e \u0432\u0430\u0448\u0438\u0445 \u043f\u0440\u043e\u0444\u0444\u0435\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u043d\u0430\u0432\u044b\u043a\u0430\u0445: "}),(0,i.jsx)(n.IN,{as:"textarea",className:"edit_profile_textarea",name:"lookingForAJobDescription",wrap:"hard",placeholder:"\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u043e \u0441\u0432\u043e\u0438\u0445 \u043d\u0430\u0432\u044b\u043a\u0430\u0445"})]}),(0,i.jsx)(n.mS,{name:"lookingForAJobDescription",component:"div"}),(0,i.jsxs)("div",{className:"page_profile_user_data_contacts",children:[(0,i.jsx)("h3",{children:"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u0435\u0441\u044c \u0441\u0432\u043e\u0438\u043c\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430\u043c\u0438:"}),Object.keys(s.contacts).map((e=>(0,i.jsxs)("div",{className:"edit_profile_item",children:[(0,i.jsxs)("label",{className:"edit_profile_label",htmlFor:"contacts."+e,children:[e,": "]}),(0,i.jsx)(n.IN,{className:"default_input edit_profile_input",type:"text",name:"contacts."+e}),(0,i.jsx)(n.mS,{name:"contacts."+e})]})))]}),(0,i.jsx)("button",{className:"default_btn",type:"submit",children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})]})}})})})},d=e=>(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"page_profile_user_data",children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"basic-text--color-muted",children:"\u0418\u043c\u044f: "})," ",e.profile.fullName]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("span",{className:"basic-text--color-muted",children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0435 \u0440\u0430\u0431\u043e\u0442\u044b? "})," ",e.profile.lookingForAJob?"\u0414\u0430":"\u041d\u0435\u0442"]}),(0,i.jsxs)("div",{className:"page_profile_user_data_item",children:[(0,i.jsx)("span",{className:"basic-text--color-muted",children:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438: "}),(0,i.jsx)("span",{children:e.profile.lookingForAJobDescription})]}),(0,i.jsxs)("div",{className:"page_profile_user_data_contacts",children:[(0,i.jsx)("h3",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}),Object.keys(e.profile.contacts).map((s=>(0,i.jsxs)("div",{children:[(0,i.jsxs)("span",{className:"basic-text--color-muted",children:[s,":"]})," ",e.profile.contacts[s]]},s)))]})]})}),p=e=>{let{profile:s,isOwner:t,status:n,updateStatus:p,savePhoto:u,editProfile:h}=e;const[_,m]=(0,a.useState)(!1);if(!s)return(0,i.jsx)(l.c,{});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"section_profile",children:(0,i.jsxs)("div",{className:"section_title",children:[(0,i.jsx)("h2",{children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"}),t&&!_&&(0,i.jsx)("div",{children:(0,i.jsx)("button",{className:"default_btn",onClick:()=>m(!0),children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"})})]})}),(0,i.jsxs)("div",{className:"page_profile__body",children:[(0,i.jsx)("div",{className:"page_profile__user_img",children:s?(0,i.jsx)("img",{alt:"Profile_logo",src:s.photos.large||o.c}):null}),t&&_&&(0,i.jsx)("div",{className:"upload_photo",children:t&&(0,i.jsx)("input",{type:"file",onChange:e=>{e.target.files.length&&u(e.target.files[0])}})}),(0,i.jsxs)("div",{className:"page_profile__content",children:[(0,i.jsx)("div",{className:"page_profile__user_status",children:(0,i.jsx)(r,{status:n,updateStatus:p,isOwner:t})}),_?(0,i.jsx)(c,{profile:s,setEditMode:m,editProfile:h}):(0,i.jsx)(d,{profile:s,isOwner:t,editMode:m})]})]})]})};var u=t(624),h=t(472);const _=a.memo((e=>{let{profile:s,message:t}=e;return console.log("CreatePost"),(0,i.jsx)("div",{className:"block",children:(0,i.jsxs)("div",{className:"section_post",children:[(0,i.jsx)("div",{className:"section_post__user_img",children:s?(0,i.jsx)("img",{alt:"Profile_logo",src:s.photos.small||o.c}):null}),(0,i.jsx)("div",{className:"section_post_item",children:t})]})})})),m=_;var x=t(264),f=t.n(x);const j=e=>{let{error_post:s,profile:t,profileData:l,update_new_post:r,on_add_post:n,clear_post:c}=e,d=a.createRef();return(0,i.jsxs)("div",{className:f()({block:!0,post_error:null!==s}),children:[(0,i.jsx)("div",{className:"section_post__user_img",children:t?(0,i.jsx)("img",{alt:"Profile_logo",src:t.photos.small||o.c}):null}),(0,i.jsx)("textarea",{name:"new_post",wrap:"hard",id:"new_post",className:"send_post",placeholder:"\u0427\u0442\u043e \u0443 \u0432\u0430\u0441 \u043d\u043e\u0432\u043e\u0433\u043e?",ref:d,value:l.NewPostText,onChange:e=>r(e.target.value)}),(0,i.jsx)("div",{className:"post_error_message",children:(0,i.jsx)("span",{children:s})}),(0,i.jsxs)("div",{className:"post_button_align",children:[(0,i.jsx)("button",{className:"default_btn",onClick:()=>c(),children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"}),(0,i.jsx)("button",{className:"default_btn",onClick:n,children:"\u041e\u043f\u0443\u0431\u043b\u0438\u043a\u043e\u0432\u0430\u0442\u044c"})]})]})};const g=(0,u.Ul)((e=>({profileData:e.profilePage})),{clear_post:h.c5,add_post:h.uw,update_new_post:h.Id})((e=>{let{profileData:s,add_post:t,clear_post:l,update_new_post:o,profile:r}=e;console.log("MyPostsContainer");const[n,c]=(0,a.useState)(null);return(0,i.jsxs)("div",{children:[(0,i.jsx)(j,{error_post:n,profile:r,profileData:s,update_new_post:o,on_add_post:()=>{""===s.NewPostText?c("\u041f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c"):(t(),c(null))},clear_post:l}),[...s.postsData].reverse().map((e=>(0,i.jsx)(m,{message:e.post_text,likes:e.likes,profile:r},e.id)))]})})),v=e=>{let{status:s,profile:t,isOwner:a,updateStatus:l,savePhoto:o,editProfile:r}=e;return console.log("Profile"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"block",children:(0,i.jsx)(p,{profile:t,isOwner:a,status:s,updateStatus:l,savePhoto:o,editProfile:r})}),a&&(0,i.jsx)(g,{profile:t})]})};var N=t(560),b=t(416),k=t(773);class P extends a.Component{refreshProfile(){let e=this.props.router.params.userId;e||(e=this.props.auth_user_id),this.props.getUsersProfileThunk(e),this.props.getStatusThunk(e)}componentDidMount(){this.refreshProfile()}componentDidUpdate(e,s,t){this.props.router.params.userId!==e.router.params.userId&&this.refreshProfile()}render(){return console.log("Profile Container"),(0,i.jsx)("div",{children:(0,i.jsx)(v,{...this.props,isOwner:!this.props.router.params.userId,profile:this.props.profile,updateStatus:this.props.updateStatusThunk,savePhoto:this.props.savePhotoThunk,editProfile:this.props.editProfile})})}}const w=(0,k.Jn)((0,u.Ul)((e=>({profile:e.profilePage.profile,status:e.profilePage.status,auth_user_id:e.auth.userId,is_auth:e.auth.is_auth})),{getUsersProfileThunk:h.a,getStatusThunk:h.Ep,updateStatusThunk:h.W8,savePhotoThunk:h.G8,editProfile:h.Cu}),(function(e){return function(s){let t=(0,N.IT)(),a=(0,N.i6)(),l=(0,N.W4)();return(0,i.jsx)(e,{...s,router:{location:t,navigate:a,params:l}})}}),b.A)(P)}}]);
//# sourceMappingURL=936.a855f635.chunk.js.map
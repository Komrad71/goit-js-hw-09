import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const e={email:"",message:""},a=document.querySelector(".feedback-form");a.addEventListener("input",t=>{e[t.target.name]=t.target.value.trim(),localStorage.setItem("feedback-form-state",JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.reset()});
//# sourceMappingURL=2-form.js.map

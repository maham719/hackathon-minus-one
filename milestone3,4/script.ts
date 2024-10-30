declare var html2pdf: any;
document.addEventListener('DOMContentLoaded', () => {
    let skillfield = document.querySelector("#skillsfield") as HTMLFieldSetElement;

    let btnskill = document.querySelector("#btn-skills") as HTMLButtonElement;

    const addTextarea = (field: HTMLFieldSetElement, btn: HTMLButtonElement) => {
        btn.addEventListener("click", (event) => {
            event.preventDefault();
            let newTextarea = document.createElement("textarea") as HTMLTextAreaElement;
            newTextarea.style.width = "80%";
            field.insertBefore(newTextarea, btn);
        });
    };

    addTextarea(skillfield, btnskill);

    let edfield = document.querySelector("#educationfield") as HTMLFieldSetElement;
    let btned = document.querySelector("#btn-edu") as HTMLButtonElement;
    addTextarea(edfield, btned);

    let expfield = document.querySelector("#experiencefield") as HTMLFieldSetElement;
    let btnexp = document.querySelector("#btn-exp") as HTMLButtonElement;
    addTextarea(expfield, btnexp);
 

    // form elements 
   
    let submitbtn = document.getElementById('submitBtn');
   

    submitbtn?.addEventListener('click', (event) => {
        event.preventDefault();
let skills:string[]=[];
let education:string[]=[];
let experience:string[]=[];
        let formdp=document.getElementById('dp') as HTMLInputElement;
        let formname = (document.getElementById('myname') as HTMLInputElement).value || " ";
        let formprofession=(document.getElementById('profession') as HTMLInputElement).value || " ";
        let formnumber=(document.getElementById('phnumber') as HTMLInputElement).value || " ";
        let formemail=(document.getElementById('email') as HTMLInputElement).value || " ";
        let formaddress=(document.getElementById('address') as HTMLInputElement).value || " ";
      let formobj=(document.getElementById('formobjective') as HTMLInputElement).value || " ";
      let skilltextareas = skillfield.querySelectorAll("textarea");
    
      for(let i=0;i<skilltextareas.length;i++){    
        let skilltextareaValue = (skilltextareas[i] as HTMLTextAreaElement).value || " ";
        skills.push(skilltextareaValue);
    }
 
    let edutextareas = edfield.querySelectorAll("textarea");

    for (let i=0;i<edutextareas.length;i++){
        let edutextareaValue = (edutextareas[i] as HTMLTextAreaElement).value || " ";
      education.push(edutextareaValue)
    }

    let exptextareas = expfield.querySelectorAll("textarea");
    for (let i=0;i<exptextareas.length;i++){
        let exptextareaValue = (exptextareas[i] as HTMLTextAreaElement).value || " ";
        experience.push(exptextareaValue)
    }
 
      
//   cv elements 
(document.getElementById('cvname') as HTMLElement).innerHTML = formname;
(document.getElementById('cvprofession') as HTMLElement).innerHTML = formprofession;
(document.getElementById('cvphone') as HTMLElement).innerHTML = formnumber;
(document.getElementById('cvemail') as HTMLElement).innerHTML = formemail;
(document.getElementById('cvaddress') as HTMLElement).innerHTML = formaddress;
(document.getElementById('cvobjective') as HTMLElement).innerHTML = formobj;
let cvskills = document.getElementById('cvskills') as HTMLUListElement;
skills.forEach(skill => {
    let li = document.createElement('li'); 
    li.textContent = skill;                
    cvskills.appendChild(li);             
});
let cveducation = document.getElementById('cveducation') as HTMLUListElement;
education.forEach(edu => {
    let li = document.createElement('li'); 
    li.textContent = edu;                
    cveducation.appendChild(li);             
});
let cvexperience = document.getElementById('cvexperience') as HTMLUListElement;
experience.forEach(exp=> {
    let li = document.createElement('li'); 
    li.textContent = exp;                
    cvexperience.appendChild(li);             
});
let form = document.querySelector('.form-container') as HTMLElement;

form.style.display="none";

let resumes = document.querySelector('.resume') as HTMLElement;

resumes.style.display="block";

if (formdp.files && formdp.files[0]){
let cvimage=document.getElementById('cvimage') as HTMLImageElement;
    let reader = new FileReader()
    reader.addEventListener('load', ()=>{
        let textimage= reader.result as string;
        cvimage.src=textimage
    }) ;reader.readAsDataURL(formdp.files[0])
}
    });
  
let download=document.querySelector('#Download');
download?.addEventListener('click',()=>{
  window.print()
})



});

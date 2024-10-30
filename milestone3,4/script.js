document.addEventListener('DOMContentLoaded', function () {
    var skillfield = document.querySelector("#skillsfield");
    var btnskill = document.querySelector("#btn-skills");
    var addTextarea = function (field, btn) {
        btn.addEventListener("click", function (event) {
            event.preventDefault();
            var newTextarea = document.createElement("textarea");
            newTextarea.style.width = "80%";
            field.insertBefore(newTextarea, btn);
        });
    };
    addTextarea(skillfield, btnskill);
    var edfield = document.querySelector("#educationfield");
    var btned = document.querySelector("#btn-edu");
    addTextarea(edfield, btned);
    var expfield = document.querySelector("#experiencefield");
    var btnexp = document.querySelector("#btn-exp");
    addTextarea(expfield, btnexp);
    // form elements 
    var submitbtn = document.getElementById('submitBtn');
    submitbtn === null || submitbtn === void 0 ? void 0 : submitbtn.addEventListener('click', function (event) {
        event.preventDefault();
        var skills = [];
        var education = [];
        var experience = [];
        var formdp = document.getElementById('dp');
        var formname = document.getElementById('myname').value || " ";
        var formprofession = document.getElementById('profession').value || " ";
        var formnumber = document.getElementById('phnumber').value || " ";
        var formemail = document.getElementById('email').value || " ";
        var formaddress = document.getElementById('address').value || " ";
        var formobj = document.getElementById('formobjective').value || " ";
        var skilltextareas = skillfield.querySelectorAll("textarea");
        for (var i = 0; i < skilltextareas.length; i++) {
            var skilltextareaValue = skilltextareas[i].value || " ";
            skills.push(skilltextareaValue);
        }
        var edutextareas = edfield.querySelectorAll("textarea");
        for (var i = 0; i < edutextareas.length; i++) {
            var edutextareaValue = edutextareas[i].value || " ";
            education.push(edutextareaValue);
        }
        var exptextareas = expfield.querySelectorAll("textarea");
        for (var i = 0; i < exptextareas.length; i++) {
            var exptextareaValue = exptextareas[i].value || " ";
            experience.push(exptextareaValue);
        }
        //   cv elements 
        document.getElementById('cvname').innerHTML = formname;
        document.getElementById('cvprofession').innerHTML = formprofession;
        document.getElementById('cvphone').innerHTML = formnumber;
        document.getElementById('cvemail').innerHTML = formemail;
        document.getElementById('cvaddress').innerHTML = formaddress;
        document.getElementById('cvobjective').innerHTML = formobj;
        var cvskills = document.getElementById('cvskills');
        skills.forEach(function (skill) {
            var li = document.createElement('li');
            li.textContent = skill;
            cvskills.appendChild(li);
        });
        var cveducation = document.getElementById('cveducation');
        education.forEach(function (edu) {
            var li = document.createElement('li');
            li.textContent = edu;
            cveducation.appendChild(li);
        });
        var cvexperience = document.getElementById('cvexperience');
        experience.forEach(function (exp) {
            var li = document.createElement('li');
            li.textContent = exp;
            cvexperience.appendChild(li);
        });
        var form = document.querySelector('.form-container');
        form.style.display = "none";
        var resumes = document.querySelector('.resume');
        resumes.style.display = "block";
        if (formdp.files && formdp.files[0]) {
            var cvimage_1 = document.getElementById('cvimage');
            var reader_1 = new FileReader();
            reader_1.addEventListener('load', function () {
                var textimage = reader_1.result;
                cvimage_1.src = textimage;
            });
            reader_1.readAsDataURL(formdp.files[0]);
        }
    });
    var download = document.querySelector('#Download');
    download === null || download === void 0 ? void 0 : download.addEventListener('click', function () {
        window.print();
    });
});

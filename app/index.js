function addPreloader(arg = ".pre-loader", arg2 = "_active-preloader", time = 1000){
    document.querySelector(arg).classList.add(arg2);
    setTimeout(()=>{
        document.querySelector(arg).classList.remove(arg2);
    },time)
};
function changesHomeElValue(obj){
    let [...arrEl] = document.querySelectorAll(".scroll-btn__btn");
    
    if(pageObject.homePage.counter < 3){
        try{
            document.querySelector(".header__header-cont")
            .style.backgroundImage = `url(${pageObject.homePage.image[pageObject.homePage.counter].url})`;
            
            document.querySelector(".header-cont__banner")
            .innerHTML = obj.homePage.image[pageObject.homePage.counter].name;
            
            document.querySelector(".header-cont__text")
            .innerHTML = obj.homePage.image[pageObject.homePage.counter].text;
    
            arrEl.forEach(e=>{
                if(e.classList.contains("_active-scroll-btn")){
                    e.classList.remove("_active-scroll-btn");
                }
            });
            arrEl[pageObject.homePage.counter].classList.add("_active-scroll-btn");
            pageObject.homePage.counter++;
    
            if(pageObject.homePage.counter >= 3){
                pageObject.homePage.counter = 0;
            }
        }catch{
            return
        }

    }
};
function removeEllChildren(arg = ".root"){
    let [...childrenRoot] = document.querySelector(arg).children;
    childrenRoot.forEach(e=>e.remove(e));

};

const pageObject = {
    homePage:{
        image:[
            {
                name:`classic massage`,
                text:`
                With a technical performance, massage allows you 
                to get rid of local pain and swelling, cosmetic defects, 
                as well as improve the condition of individual organs and systems.
                `,
                url:`./assets/images/image1.jpg`
            },
            {
                name:`massage therapeutic`,
                text:`
                A form of manual therapy aimed at improving or 
                maintaining a person's physical abilities.
                `,
                url:`./assets/images/image2.jpg`
            },
            {
                name:`massage tok sen`,
                text:`
                Thai massage Tok Sen has a deep activation of 
                biologically active points, which helps to achieve 
                the relaxation of tight muscles in a particularly 
                effective way. The technique is effective in diseases 
                of the musculoskeletal system, in particular the back, 
                as well as some internal organs.
                `,
                url:`./assets/images/image3.jpg`
            },
            
        ],
        counter: 1
    },
    aboutUs:{
        elementPage:`
        <section class="about-us">
            <div class="about-us-cont">
                <h2>About us</h2>
                <p>
                    We know how to beat Mercury Retrograde, 
                    post-COVID depression, deal with deadlines 
                    and nervous tension from important projects, 
                    get rid of postpartum depression, prepare for 
                    a marathon or recover from a competition, and 
                    just relax you from everything and everyone.
                </p>
                <p>
                    No unnecessary conversations and devices!
                </p>
                <p>
                    Only professional hands of the master, 
                    60 minutes of massage to your favorite music or silence.
                </p>
            </div>
        </section>
        `
    },
    aboutMaster:{
        elementPage:`
            <section class="about-master">
                <div class="about-master-cont">
                    <img src="./assets/images/about-master.jpg" alt="master">
                    <div class="about-master-cont__content">
                        <h2>Tarasov Sergey Sergeevich</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur 
                            adipisicing elit. Ut, adipisci ducimus 
                            delectus eum quam commodi voluptatibus 
                            hic ullam sit distinctio, voluptas 
                            esse laborum quae libero voluptate? 
                            Eaque hic eveniet aliquam reiciendis, 
                            accusantium, ad quam, error veniam 
                            laborum voluptates nobis accusamus 
                            laudantium sed esse dicta!
                            
                        </p>
                    </div>
                    <div class="about-master-cont__certificate">
                        <img src="./assets/images/certificate.jpg" alt="certificate">
                    </div>
                </div>
            </section>
        `
    },
    service:{
        elementPage:`
            <section class="services">
                <div class="services-cont">
                    <h2>Service price</h2>
                    <ul class="services-cont-list">
                    </ul>
                </div>
            </section>
        `,
        massageName: [
            {
                name:"Classic massage",
                price: 500,
                regularSale: 10,
                sale:0
            },
            {
                name:"Massage therapeutic",
                price: 600,
                regularSale: 10,
                sale:0
            },
            {
                name:"Massage Tok Sen",
                price: 700,
                regularSale: 10,
                sale:0
            }
        ],
        createEll(obj, index, fatherClass){
            let element =`
            <li class="services-cont-list__item">
                <label class="price-item" for="services-cont${index}">
                    <input class="price-item-input" id="services-cont${index}" type="checkbox">
                    <div class="price-item-cont">
                        <p class="name-massage">${obj.name}</p>
                        <div class="price-item-cont-info">
                            <p class="price-text">First ${obj.name}</p>
                            <p class="price-value">${obj.price} UAH</p>
                        </div>
                        <div class="price-item-cont-info">
                            <p class="price-text">Next ${obj.name}</p>
                            <p class="price-value">${obj.price - ((obj.price/ 100) * obj.regularSale)} UAH</p>
                        </div>
                        <div class="price-item-cont-info">
                            <p class="price-text-info">
                                The indicated prices may differ from those 
                                in the clinic. You can find out the current 
                                prices in the clinic or by phone.
                            </p>
                        </div>
                    </div>
                </label>
            </li>
            `;
            document.querySelector(fatherClass).insertAdjacentHTML("beforeend", element);
        }
    }
};
const [...navMenu] = document.querySelectorAll("._link-page");
const timerChangesHomeElValue = setInterval(() => changesHomeElValue(pageObject), 3000);

document.querySelector(".nav__btn").addEventListener("click", ()=>{
    clearInterval(timerChangesHomeElValue);
    
    let clearEll = () =>{
        document.querySelector(".nav-cont__nav-list").classList.remove("_nav-list-active");
        document.querySelector(".nav__btn").classList.remove("_active-nav__btn");
    };
    if(document.querySelector(".nav__btn").classList.contains("_active-nav__btn")){
        clearEll();
    }else{
        document.querySelector(".nav-cont__nav-list").classList.add("_nav-list-active");
        document.querySelector(".nav__btn").classList.add("_active-nav__btn");

        document.querySelector(".nav-cont__nav-list").addEventListener("click", ()=>{
            setTimeout(clearEll, 300);
        });
    };
});

navMenu.forEach(e=>{
    e.addEventListener("click", (e)=>{
        addPreloader(".pre-loader", "_active-preloader", 1000);
        removeEllChildren(".root");
        if(e.target.innerHTML === "about us"){
            document.querySelector(".root").insertAdjacentHTML("beforeend", pageObject.aboutUs.elementPage);
        }else if(e.target.innerHTML === "about master"){
            document.querySelector(".root").insertAdjacentHTML("beforeend", pageObject.aboutMaster.elementPage);
        }else if(e.target.innerHTML === "services"){
            document.querySelector(".root").insertAdjacentHTML("beforeend", pageObject.service.elementPage);

            pageObject.service.massageName.forEach((ell, index)=>{
                pageObject.service.createEll(ell, index + 1, ".services-cont-list");
            });
        }
        clearInterval(timerChangesHomeElValue);
    });
});
//=================================================================================
document.addEventListener("DOMContentLoaded", function (){
    const form = document.getElementById("form-request");
    form.addEventListener("submit", formSend);

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form);
        let formData = new FormData(form);
        if(error === 0){
            form.parentElement.classList.add("_sending");

            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            
            if(response.ok){
                let result = await response.json();
                alert(result.message);
                form.reset();
                form.parentElement.classList.remove("_sending");
            }else{
                form.parentElement.classList.remove("_sending");
            }
        }else{
            alert("Заполните")
        }
    };

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll("._req");

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);
            if(input.getAttribute("type") === "checkbox" && input.checked === false){
                formAddError(input);
                error++;

            }else {
                if(input.value === ""){
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    };

    function formAddError(input){
        input.parentElement.classList.add("_error");
        input.classList.add("_error");
    };

    function formRemoveError(input){
        input.parentElement.classList.remove("_error");
        input.classList.remove("_error");
    };
});
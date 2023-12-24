let profileDetails = {
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/user-profile-img.png",
    name: "Rajesh Bokka",
    age: 23
};

let rootEl=document.getElementById('root');
rootEl.classList.add('bg1')

let imageContainerEl=document.createElement('div');
rootEl.appendChild(imageContainerEl)

let imageEl=document.createElement('img');
imageEl.setAttribute('src',profileDetails.imgSrc);
imageEl.classList.add("image");
imageContainerEl.appendChild(imageEl);

let headingEl=document.createElement('h4')
headingEl.textContent=profileDetails.name;
headingEl.classList.add('heading')
rootEl.appendChild(headingEl);

let paragraphEl=document.createElement('p');
paragraphEl.textContent="Age: "+profileDetails.age;
paragraphEl.classList.add('paragraph');
rootEl.appendChild(paragraphEl)
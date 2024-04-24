function scrollView(div){
    document.getElementById(div).scrollIntoView({
        behavior:smooth,
        block:center
    });
}

const page_home = document.querySelectorAll("#page_home");
const header = document.getElementById("page_header");
const nav_bar = document.getElementById("nav");

const home_ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        nav_bar.classList.toggle('active', !entry.isIntersecting);
        header.classList.toggle('active', !entry.isIntersecting);
    });
}, {
    threshold: 0.4
});

page_home.forEach((el) => home_ob.observe(el));

const page_about = document.querySelectorAll('#page_about');
const page_menu = document.querySelectorAll("#page_menu");
const page_music = document.querySelectorAll("#page_music");
const page_jobs = document.querySelectorAll("#page_jobs");

const about_border1 = document.getElementById("about_border1");
const about_border2 = document.getElementById("about_border2");
const about_bg1 = document.getElementById("about_bg1");
const about_bg2 = document.getElementById("about_bg2");

const about_ob = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        about_border1.classList.toggle('active', entry.isIntersecting);
        about_border2.classList.toggle('active', entry.isIntersecting);
        about_bg1.classList.toggle('active', entry.isIntersecting);
        about_bg2.classList.toggle('active', entry.isIntersecting);
    });
}, {
    threshold: 0.6
});

page_about.forEach((el) => about_ob.observe(el));

/* Menu */

const bev_dict = [
                    {
                        dict : "bev_dict",
                        name : "Cafe Con Leche Espanol",
                        des : "This Spanish latte is a harmonious blend of bold espresso and velvety steamed milk, creating a creamy and satisfying coffee experience.",
                        price : "7.99",
                        icon : "assets/menu_bevlogo1.png",
                        photo : "assets/menu_bev1.jpg"
                    },
                    {
                        dict : "bev_dict",
                        name : "Bold Frontier Americano",
                        des : "Crafted with a double shot of espresso and hot water, this Americano boasts a strong yet smooth taste that embodies the spirit of the American coffee tradition.",
                        price : "7.99",
                        icon : "assets/menu_bevlogo2.png",
                        photo : "assets/menu_bev2.jpg"
                    },
                    {
                        dict : "bev_dict",
                        name : "Frappe Au Chocolat de Gheru",
                        des : "This luxurious chocolate frappe is a symphony of rich cocoa flavors, creating a decadent and refreshing treat. Sip on velvety smoothness and savor the exquisite taste of our Frappé Au Chocolat de Gheru, a delight for chocolate lovers  worldwide.",
                        price : "10.26",
                        icon : "assets/menu_bevlogo3.png",
                        photo : "assets/menu_bev3.jpg"
                    },
                    {
                        dict : "bev_dict",
                        name : "Illusory Heart Harmony Matcha Latte",
                        des : "Introducing our \"Illusory Heart Harmony Matcha Latte,\" a serene blend of premium matcha and creamy steamed milk. Dive into a tranquil experience with every sip of this exquisite matcha creation, crafted to soothe your senses and elevate your day.",
                        price : "6.99",
                        icon : "assets/menu_bevlogo4.png",
                        photo : "assets/menu_bev4.jpg",
                    },
                    {
                        dict : "bev_dict",
                        name : "Raine-zelnut Latte",
                        des : "This delightful hazelnut latte is a harmonious blend of smooth espresso, creamy steamed milk, and the irresistible flavor of roasted hazelnuts. Let each sip transport you to a cozy café atmosphere, where warmth and flavor intertwine in perfect harmony." ,
                        price : "7.99",
                        icon : "assets/menu_bevlogo5.png",
                        photo : "assets/menu_bev5.jpg"
                    },
                    {
                        dict : "bev_dict",
                        name : "The Charm-cciato",
                        des : "This captivating macchiato is a delightful fusion of bold espresso and velvety steamed milk, crowned with a touch of foam. Each sip is a journey into a world of charm and flavor, where the rich espresso notes dance harmoniously with the creamy texture, leaving a lingering sweetness on your palate.",
                        price : "15.02",
                        icon : "assets/menu_bevlogo6.png",
                        photo : "assets/menu_bev6.jpg"
                    },
                    {
                        dict : "bev_dict",
                        name : "Dragon Iced Tea from Heyu Tea House",
                        des : "Savor the taste of excellence with Heyu Tea House's legendary \"Dragon Iced Tea,\" crafted from the best tea leaves in Liyue as approved by the Geo Dragon. This refreshing blend combines the finest waters sourced from Fontaine, meticulously chilled by the Coldest Ice of Dragonspine, ensuring each sip is a burst of revitalizing flavor.",
                        price : "8.99",
                        icon : "assets/menu_bevlogo7.png",
                        photo : "assets/menu_bev7.jpg"
                    }
];

const pastry_dict = [
                        {
                            dict : "pastry_dict",
                            name : "Rexy's Delight: Croissant", 
                            des : "Our signature croissant is a flaky masterpiece, baked to perfection and filled with a rich, indulgent filling. Every bite is a symphony of flavors and textures, with a golden exterior that gives way to a soft, melt-in-your-mouth interior.",
                            price : "3.99",
                            icon : "assets/menu_pastrylogo1.png",
                            photo : "assets/menu_pastry1.jpg"
                        },
                        {
                            dict : "pastry_dict",
                            name : "Charles L'Eclair", 
                            des : "This delectable éclair is a work of culinary art, meticulously crafted with layers of delicate pastry, filled with a luscious cream, and topped with a decadent glaze. Each bite is a symphony of flavors and textures, where sweetness and richness harmonize perfectly.",
                            price : "4.99",
                            icon : "assets/menu_pastrylogo2.png",
                            photo : "assets/menu_pastry2.jpg"
                        },
                        {
                            dict : "pastry_dict",
                            name : "Fun Au Chocolat", 
                            des : "This delightful Pain Au Chocolat is a playful twist on a classic favorite, featuring layers of flaky pastry enveloping rich, gooey chocolate. With each bite, savor the perfect balance of buttery pastry and indulgent chocolate, creating a symphony of flavors that will make your taste buds dance with delight.",
                            price : "5.99",
                            icon : "assets/menu_pastrylogo3.png",
                            photo : "assets/menu_pastry3.jpg"
                        },
                        {
                            dict : "pastry_dict",
                            name : "Rustic Hearth Sourdough", 
                            des : "Handcrafted using time-honored techniques, this sourdough bread boasts a crusty exterior and a tender, tangy crumb within. Baked to perfection in a rustic hearth oven, each loaf is infused with a depth of flavor that can only come from slow fermentation.",
                            price : "7.99",
                            icon : "assets/menu_pastrylogo4.png",
                            photo : "assets/menu_pastry4.jpg"
                        },
                        {
                            dict : "pastry_dict",
                            name : "Ian's Protien-Filled Donuts",
                            des : "Each bite of these light, fluffy donuts is a symphony of flavors, with a velvety texture that melts in your mouth. Whether you're looking for a sweet snack or a post-workout boost, Ian's Protein-Filled Donuts are the perfect choice, offering a delightful combination of taste and nutrition that's sure to satisfy.",
                            price : "3.99",
                            icon : "assets/menu_pastrylogo5.png", 
                            photo : "assets/menu_pastry5.jpg"
                        }
];  

const pasta_dict = [
                    {
                        dict : "pasta_dict",
                        name : "Mama Mia's Spaghetti and Meatballs",
                        des : "This dish brings together perfectly cooked spaghetti topped with savory, homemade meatballs smothered in rich marinara sauce. Each forkful is a symphony of flavors, combining the hearty texture of the pasta with the tender, flavorful meatballs.",
                        price : "8.99",
                        icon : "assets/menu_pastalogo1.png", 
                        photo : "assets/menu_pasta1.jpg"
                    },
                    {
                        dict : "pasta_dict",
                        name : "Maui's Italiano Carbonara Delight",
                        des : "This classic pasta dish features al dente spaghetti enveloped in a luxurious sauce made with eggs, Parmesan cheese, crispy pancetta, and a touch of freshly cracked black pepper. Each forkful is a harmonious blend of flavors and textures, with the creamy sauce coating every strand of pasta for a truly satisfying experience.",
                        price : "8.99",
                        icon : "assets/menu_pastalogo2.png",
                        photo : "assets/menu_pasta2.jpg"
                    },
                    {
                        dict : "pasta_dict",
                        name : "Pesto Passion Pasta",
                        des : "This vibrant dish features al dente pasta coated in a luscious basil pesto sauce, made with fresh basil leaves, garlic, pine nuts, Parmesan cheese, and a hint of lemon zest. Each bite is a burst of herbaceous flavor, complemented by the nutty richness of the Parmesan and the subtle citrusy notes.",
                        price : "7.99",
                        icon : "assets/menu_pastalogo3.png",
                        photo : "assets/menu_pasta3.jpg"
                    }
];

const pizza_dict = [
                    {
                        dict : "pizza_dict",
                        name : "Mischa's Peperoni Pizza",
                        des : "This iconic pizza features a crispy, golden crust topped with zesty tomato sauce, gooey mozzarella cheese, and generous slices of savory pepperoni. Each bite is a delightful medley of tangy tomato, melty cheese, and perfectly seasoned pepperoni, creating a symphony of flavors that will transport you to the streets of Naples.",
                        price : "15.99",
                        icon : "assets/menu_pizzalogo1.png",
                        photo : "assets/menu_pizza1.jpg"
                    },
                    {
                        dict : "pizza_dict",
                        name : "Margherita Sanctuary",
                        des : "This culinary masterpiece starts with a hand-stretched crust, topped with a harmonious blend of vine-ripened tomatoes, fresh basil leaves, and creamy mozzarella cheese. Each bite is a journey to flavor bliss, as the sweetness of the tomatoes, the herbal notes of basil, and the rich creaminess of the mozzarella come together in perfect harmony.",
                        price : "14.99",
                        icon : "assets/menu_pizzalogo2.png",
                        photo : "assets/menu_pizza2.jpg"
                    }
];

const web = document.querySelectorAll("body");
const body = document.getElementById("main_body");
const menu_tab = document.getElementById("menu_tab");
const list_cont = document.getElementById("list_cont");
const menu_img = document.getElementById("menu_img");
const food_name = document.getElementById("food_name");
const food_desc = document.getElementById("food_desc");
const food_price = document.getElementById("food_price");

function activateMenu(dict) {
    menu_tab.classList.add('active');
    list_cont.innerHTML = "";
    appendMenu(dict);
    changeFocus(dict, 0);
    body.style.opacity = "100%";
    body.style.pointerEvents = "all";
    web[0].style.overflowY = "hidden";
}

function disableMenu() {
    menu_tab.classList.remove('active');
    body.style.opacity = "0%";
    body.style.pointerEvents = "none";
    web[0].style.overflowY = "auto";
}

function appendMenu(dictionary){
    for(let i=0; i < dictionary.length;i++){
        let menu_btn_base = document.createElement("div");
        let menu_btn_top = document.createElement("div");
        let curr_val = i;

        menu_btn_base.classList.add("img");
        menu_btn_top.classList.add("front");
        menu_btn_top.style.backgroundImage = "url(" + dictionary[i].icon + ")";
        menu_btn_base.append(menu_btn_top);
        menu_btn_base.setAttribute('onclick', 'changeFocus(' + dictionary[i].dict + ',' + curr_val + ")");
        list_cont.append(menu_btn_base);
    }
}

function changeFocus(food_dict, index){
    menu_img.style.backgroundImage = "url(" + food_dict[index].photo + ")";
    food_name.innerHTML = food_dict[index].name;
    food_desc.innerHTML = food_dict[index].des;
    food_price.innerHTML = "$" + food_dict[index].price;
    menu_img.style.animation = "enter_anim 0.25s ease-in-out";
    food_name.style.animation = "enter_anim 0.25s ease-in-out";
    food_desc.style.animation = "enter_anim 0.25s ease-in-out";
    food_price.style.animation = "enter_anim 0.25s ease-in-out";
}

const menu_dict = [bev_dict, pasta_dict, pasta_dict, pizza_dict];

function preload_image(dict) {
    for(let i = 0; i < dict.length; i++){
        let img = new Image();
        let icon = new Image();
        img.src = dict[i].photo;
        icon.src = dict[i].icon;
    }   
}

menu_dict.forEach((el) => preload_image(el));

function ScrollToView(div){
    div.scrollIntoView({block:'center', behavior:'smooth'})
}
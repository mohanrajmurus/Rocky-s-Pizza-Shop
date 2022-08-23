const menu = [
    {
        pizza:{
            veg:[
                {
                    title:'Margherita',
                    img:'https://www.dominos.co.in/files/items/Margherit.jpg',
                    description:'A hugely popular margherita, with a deliciously tangy single cheese topping',
                    price:245
                },
                {
                    title:'Peppy Paneer',
                    img:'https://www.dominos.co.in/files/items/Peppy_Paneer.jpg',
                    description:'Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!',
                    price:469 
                },
                {
                    title:'PANEER MAKHANI',
                    img:'https://www.dominos.co.in/files/items/Paneer_Makhni.jpg',
                    description:'Paneer and Capsicum on Makhani Sauce',
                    price:469 
                },
                {
                    title:'Deluxe Veggie',
                    img:'https://www.dominos.co.in/files/items/Deluxe_Veggie.jpg',
                    description:"For a vegetarian looking for a BIG treat that goes easy on the spices, this one's got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.",
                    price:385 
                },
                {
                    title:'Indi Tandoori Paneer',
                    img:'https://www.dominos.co.in/files/items/IndianTandooriPaneer.jpg',
                    description:'It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo ',
                    price:559 
                },
                {
                    title:'VEGGIE PARADISE',
                    img:'https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg',
                    description:'Goldern Corn, Black Olives, Capsicum & Red Paprika',
                    price:385 
                },
            ],
            nonVeg:[
                {
                    title:'Chicken Golden Delight',
                    img:'https://www.dominos.co.in/files/items/MicrosoftTeams-image_(14).png',
                    description:'Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!',
                    price:450  
                },
                {
                    title:'Non Veg Supreme',
                    img:'https://www.dominos.co.in//files/items/MicrosoftTeams-image_(13).png',
                    description:'Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers',
                    price:609  
                },
                {
                    title:'PEPPER BARBECUE & ONION',
                    img:'https://www.dominos.co.in//files/items/Pepper_Barbeque_&_Onion.jpg',
                    description:'Pepper Barbecue Chicken I Onion',
                    price:385  
                },
                {
                    title:'CHICKEN SAUSAGE',
                    img:'https://www.dominos.co.in/files/items/MicrosoftTeams-image_(17).png',
                    description:'Chicken Sausage & Cheese',
                    price:369  
                },
                {
                    title:'CHICKEN FIESTA',
                    img:'https://www.dominos.co.in//files/items/MicrosoftTeams-image_(10).png',
                    description:'Grilled Chicken Rashers I Peri-Peri Chicken I Onion I Capsicum',
                    price:559  
                },
                {
                    title:'Chicken Dominator',
                    img:'https://www.dominos.co.in//files/items/MicrosoftTeams-image_(11).png',
                    description:'Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers',
                    price:609  
                }
            ]
        },
        pasta:{
            veg:[
                {
                    title:'Moroccan Spice Pasta Veg',
                    img:'https://www.dominos.co.in//files/items/MoroccanPastaVeg_N_(1).jpg',
                    description:'Instant Fusilli Pasta, Harissa Sauce, Onion, Mushroom, Olives, Parsley sprinkle',
                    price:145
                },
                {
                    title:'Tikka Masala Pasta Veg',
                    img:'https://www.dominos.co.in//files/items/PaneerTikkaMasala_N.jpg',
                    description:'Instant Fusilli Pasta, Spicy Red dressing, Onion, Paneer Tikka, Parsley sprinkle',
                    price:129
                },
                {
                    title:'Creamy Tomato Pasta Veg',
                    img:'https://www.dominos.co.in//files/items/CreamyTomatoVeg_N_(3).jpg',
                    description:'Instant Fusilli Pasta, Creamy Culinary Dressing, Onion, Olive, Green Capsicum, Parsley sprinkle',
                    price:145
                }
            ],
            nonVeg:[
                {
                    title:'Creamy Tomato Pasta Non Veg',
                    img:'https://www.dominos.co.in//files/items/CreamyTomatoNV_N.jpg',
                    description:'Instant Fusilli Pasta, Creamy Culinary Dressing, Onion, Olive, BBQ Pepper Chicken, Parsley sprinkle',
                    price:165
                },
                {
                    title:'Tikka Masala Pasta Non Veg',
                    img:'https://www.dominos.co.in//files/items/ChickenTikkaMasala_N.jpg',
                    description:'Instant Fusilli Pasta, Spicy Red dressing, Onion, Chicken Tikka, Parsley sprinkle',
                    price:155
                },
                {
                    title:'Moroccan Spice Pasta Non Veg',
                    img:'https://www.dominos.co.in//files/items/MoroccanPastaNonVeg_N.jpg',
                    description:'Instant Fusilli Pasta, Harissa Sauce, Onion,Meatballs, Olives, Parsley sprinkle',
                    price:165
                }
            ]
        },
        sides:[
            {
                title:'Garlic Breadsticks',
                img:'https://www.dominos.co.in//files/items/garlic-bread.webp',
                description:'The endearing tang of garlic in breadstics baked to perfection.',
                price:95
            },
            {
                title:'Red Velvet Lava Cake',
                img:'https://www.dominos.co.in//files/items/CAKE03.jpg',
                description:'A truly indulgent experience with sweet and rich red velvet cake on a creamy cheese flavoured base to give a burst of flavour in',
                price:145
            },
            {
                title:'CRINKLE FRIES',
                img:'https://www.dominos.co.in//files/items/crinkle_fries.png',
                description:'Crispy wavy masala coated fries served with a spicy tomato chilli sauce',
                price:75
            }
        ]
    }
]
/* let menukeys;
menu.map(items =>{
    menukeys = Object.keys(items);
    menukeys.map(item =>{
        console.log(items[item]);
    })
} ) */

const getMenu = () => {
    return menu;
}
 export default getMenu;

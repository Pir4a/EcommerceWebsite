import casein from "../assets/products/casein.jpg"
import whey from "../assets/products/whey.webp"
import isolatewhey from "../assets/products/isolatewhey.webp"
import veganwhey from "../assets/products/veganwhey.jpg"
import omega from "../assets/products/omega.webp"
import multivitamin from "../assets/products/multi.jpg"
import creatine from "../assets/products/creatine.jpg"
import caffeine from "../assets/products/caffein.webp"
import apurna from  "../assets/products/Apurna.webp"
import protbar from  "../assets/products/protbar1.jpg"
import carb from  "../assets/products/carb.jpg"
import mars from  "../assets/products/barre-proteinee-mars.webp"
import nutrimuscle from "../assets/products/nutrimuscles.jpg"




export const PRODUCTSPROTEIN = [
    {
        id: 1,
        productName: "Whey Protein 2.9KG",
        price: 50.0,
        productImage: whey,
        link: "whey/whey-protein",
    },
    {
        id: 2,
        productName: "Isolate Whey Protein 2.9KG",
        price: 150.0,
        productImage: isolatewhey,
        link: "whey/whey-protein-isolate",
    },
    {
        id: 3,
        productName: "Vegan Whey Protein 2.9KG",
        price: 1250.0,
        productImage: veganwhey,
        link: "whey/whey-protein-vegan",
    },
    {
        id: 4,
        productName: "Casein Protein 2.9KG",
        price: 250.0,
        productImage: casein,
        link: "whey/casein",
    },
]

export const PRODUCTSSUPPS = [ {
    id: 5,
    productName: "Omega 3 60caps",
    price: 20.0,
    productImage: omega,
    link: "supps/omega"
},
{
    id: 6,
    productName: "Multivitamin 60caps",
    price: 50.0,
    productImage: multivitamin,
    link: "supps/multivitamin"
},
{
    id: 7,
    productName: "Creatine 90caps",
    price: 1250.0,
    productImage: creatine,
    link: "supps/creatine"
},
{
    id: 8,
    productName: "Caffeine 60caps",
    price: 250.0,
    productImage: caffeine,

    link: "supps/caffeine"
},]


export const PRODUCTSSNACKS = [ {
    id: 9,
    productName: "Barre Protéinée Apurna",
    price: 2.0,
    productImage: apurna,
    link: "snacks/barre-proteinee-apurna"
},
{
    id: 10,
    productName: "Barre Protéinée Gourmande",
    price: 2.0,
    productImage: protbar,
    link: "snacks/barre-proteinee-gourmande"
},
{
    id: 11,
    productName: "Barre Protéinée Carb Killa",
    price: 3.0,
    productImage: carb,
    link: "snacks/barre-proteinee-carbkilla"
},
{
    id: 12,
    productName: "Barre Protéinée Mars",
    price: 3.0,
    productImage: mars,
    link: "snacks/barre-proteinee-mars"
},
{
    id: 13,
    productName: "Barre Protéinée Nutrimuscle",
    price: 3.0,
    productImage: nutrimuscle,
    link: "snacks/barre-proteinee-nutrimuscle"
},]
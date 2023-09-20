import Hero from "../Components/Hero";
import Specials from "../Components/Specials";
import Testimonials from "../Components/Testimonials";
import brus from "../images/specials/bruschetta.jpg";
import greek from "../images/specials/greekSalad.jpg";
import dessert from "../images/specials/dessert.jpg";

const dataSpecials = [
  {
    name: "Greek Salad",
    price: "$8.99",
    image: greek,
    description: "Lettuce, peppers, olives and feta cheese, garnished with garlic and croutons.",
  },
  {
    name: "Bruschetta",
    price: "$6.99",
    image: brus,
    description: "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    name: "Lemon Special",
    price: "$4.99",
    image: dessert,
    description: "This comes straight from grandma's recipe book.",
  },
];

export default function Home() {
    return(
        <>
            <Hero />
            <Specials data={dataSpecials} />
            <Testimonials />
        </>
    )
}
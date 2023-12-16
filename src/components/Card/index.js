import Card from "./Card.vue";

Card.install = (app)=>{
    app.component(Card.name,Card);

}

export default Card;

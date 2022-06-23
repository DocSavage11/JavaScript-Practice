class Pizza {
    constructor(pizzaType) {
        this.type = pizzaType;
        this.size = "medium";
        this.crust = "original";
    }
    bake() {
        console.log(`Baking a $(this.size) $(this.crust) crust pizza.`);
    }
}

const myPizza = new Pizza("pepperoni");
myPizza.bake();

console.log("Lockeed Martin");
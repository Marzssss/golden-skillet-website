export type MenuItem = {
    id: string;
    name: string;
    price: number | { single: number; double?: number; triple?: number } | { [key: string]: number };
    description?: string;
    tags?: string[];
};

export type MenuCategory = {
    id: string;
    title: string;
    items: MenuItem[];
};

export const menuData: MenuCategory[] = [
    {
        id: "coffee-espresso",
        title: "Coffee & Espresso",
        items: [
            { id: "espresso-single", name: "Espresso (Single)", price: 2.50 },
            { id: "espresso-double", name: "Espresso (Double)", price: 3.50 },
            { id: "macchiato", name: "Macchiato", price: 3.00 },
            { id: "caramel-macchiato", name: "Caramel Macchiato", price: 3.50 },
            { id: "cappuccino", name: "Cappuccino", price: 4.50 },
            { id: "latte", name: "Latte", price: 4.50 },
            { id: "americano", name: "Americano", price: 3.00 },
            { id: "hot-chocolate", name: "Hot Chocolate", price: 4.00 },
            { id: "coffee-small", name: "Regular Coffee (Small)", price: 2.00 },
            { id: "coffee-medium", name: "Regular Coffee (Medium)", price: 2.50 },
            { id: "coffee-large", name: "Regular Coffee (Large)", price: 3.00 },
        ],
    },
    {
        id: "breakfast-sandwiches",
        title: "Breakfast Sandwiches",
        items: [
            { id: "bagel-cream-cheese", name: "Bagel With Cream Cheese", price: 4.99 },
            { id: "bagel-egg-cheese", name: "Bagel W/ Egg & Cheese", price: 5.99 },
            { id: "bagel-egg-cheese-sausage", name: "Bagel W/ Egg, Cheese & Sausage", price: 6.99 },
            { id: "bagel-cream-cheese-cucumber", name: "Bagel W/ Cream Cheese, Cucumber & Tomatoes", price: 6.99 },
            { id: "croissant-egg-cheese", name: "Croissant W/ Egg & Cheese", price: 7.00 },
            { id: "croissant-egg-cheese-bacon", name: "Croissant W/ Egg, Cheese & Bacon", price: 7.90 },
            { id: "panini-egg-cheese-bacon", name: "Panini Sandwich W/ Egg, Cheese & Bacon", price: 8.90 },
        ],
    },
    {
        id: "burgers",
        title: "Burgers",
        items: [
            {
                id: "smashburger",
                name: "Smashburger",
                description: "Onions, cheese, brioche bun",
                price: { single: 9.99, double: 12.99, triple: 17.99 },
            },
        ],
    },
    {
        id: "sandwiches",
        title: "Sandwiches",
        items: [
            { id: "cheesesteak", name: "Cheesesteak", description: "American/Whiz/Spicy or Chicken", price: 12.99 },
            { id: "chicken-cheesesteak-hoagie", name: "Chicken Cheesesteak Hoagie", description: "Lettuce, tomatoes, onions, cheese", price: 13.99 },
            { id: "buffalo-chicken-cheesesteak", name: "Buffalo Chicken Cheesesteak", price: 12.99 },
            { id: "chicken-parm", name: "Chicken Parm", description: "Marinara & mozzarella", price: 12.99 },
            { id: "crispy-chicken", name: "Crispy Chicken Sandwich", description: "Brioche bun, cheese, pickles, lettuce, tomatoes", price: 9.99 },
            { id: "spicy-crispy-chicken", name: "Spicy Crispy Chicken Sandwich W/ Cheese", price: 9.99 },
        ],
    },
    {
        id: "fries-tots",
        title: "Fries or Tater Tots",
        items: [
            { id: "regular", name: "Regular", price: 7.25 },
            { id: "cheese", name: "Cheese", price: 8.99 },
            { id: "spicy-cheese", name: "Spicy Cheese", price: 8.99 },
            { id: "loaded", name: "Loaded", description: "Steak meat & cheese", price: 10.99 },
            { id: "pizza-fries", name: "Pizza Fries", price: 10.00 },
        ],
    },
    {
        id: "wings",
        title: "Wings",
        items: [
            { id: "6-piece", name: "6-Piece", price: 12.99 },
            { id: "8-piece", name: "8-Piece", price: 15.99 },
            { id: "12-piece", name: "12-Piece", price: 20.99 },
            { id: "16-piece", name: "16-Piece", price: 24.99 },
            { id: "32-piece-combo", name: "32-Piece Combo", price: 49.99 },
        ],
    },
];

export type SpiritType =
  | "bourbon"
  | "brandy"
  | "gin"
  | "Pisco"
  | "rum"
  | "rye"
  | "soju"
  | "tequila"
  | "vodka"
  | "whiskey"
  | "none"
  | "non-alcoholic";

export type FlavorType =
  | "bitter"
  | "dry"
  | "floral"
  | "fruity"
  | "refreshing"
  | "rich"
  | "savory"
  | "sour"
  | "spicy"
  | "sweet";

export type IngredientType = {
  ingredient: string;
  altIngredient?: string;
  amount: string | null;
};

export type CocktailType = {
  name: string;
  label: string;
  spirits: SpiritType[];
  flavors: FlavorType[];
  ingredients: IngredientType[];
  directions: string[];
  imageUrl?: string;
};

type CocktailsDataType = CocktailType[];

export const cocktailsData: CocktailsDataType = [
  {
    name: "cucumbercooler",
    label: "Cucumber Cooler",
    flavors: ["refreshing"],
    spirits: ["non-alcoholic"],
    ingredients: [
      {
        ingredient: "cucumber",
        amount: "3 slices",
      },
      {
        ingredient: "lemon juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1/3 oz.",
      },
      {
        ingredient: "soda water",
        amount: "3 oz.",
      },
    ],
    directions: [
      "Place a long cucumber slice along the inside of a stemless wine glass.",
      "Shake all but soda water in a shaker full of ice.",
      "Strain into the prepared glass with ice and top with club soda.",
    ],
  },
  {
    name: "blueberrythyme",
    label: "Blueberry Thyme",
    flavors: ["fruity", "refreshing", "sweet"],
    spirits: ["non-alcoholic"],
    ingredients: [
      {
        ingredient: "blueberries",
        amount: "handful of",
      },
      {
        ingredient: "thyme",
        amount: "1 strand fresh",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "honey",
        amount: "1/2 oz.",
      },
      {
        ingredient: "coconut water",
        amount: "4 oz.",
      },
    ],
    directions: [
      "Muddle blueberries, thyme, honey, and lemon juice in a shaker.",
      "Add coconut water and ice to shaker and shake vigorously.",
      "Strain into a coupe glass filled with ice.",
      "Garnish with fresh thyme and blueberries.",
    ],
  },
  {
    name: "honeyraspberryspritz",
    label: "Honey Raspberry Spritz",
    flavors: ["fruity", "refreshing", "sweet"],
    spirits: ["non-alcoholic"],
    ingredients: [
      {
        ingredient: "raspberries",
        amount: "5-6",
      },
      {
        ingredient: "mint leaves",
        amount: "4-5",
      },
      {
        ingredient: "lemon juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "honey",
        amount: "1/2 oz.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Muddle raspberries, mint leaves, lemon juice, and honey in a highball glass.",
      "Top with ice and soda water.",
      "Garnish with a mint sprig and raspberries.",
    ],
  },
  {
    name: "gingerpeachsmash",
    label: "Ginger Peach Smash",
    flavors: ["fruity", "sweet", "spicy"],
    spirits: ["non-alcoholic"],
    ingredients: [
      {
        ingredient: "peach nectar",
        amount: "1 1/3 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "2/3 oz.",
      },
      {
        ingredient: "ginger syrup",
        amount: "1/3 oz.",
      },
      {
        ingredient: "soda water",
        amount: "3 oz.",
      },
    ],
    directions: [
      "Shake all but soda water in a shaker full of ice.",
      "Strain into a rocks glass with ice and top with soda water.",
      "Garnish with a peach slice.",
    ],
  },
  {
    name: "cloverclub",
    label: "Clover Club",
    flavors: ["floral", "fruity"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "2 oz.",
      },
      {
        ingredient: "raspberry syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "egg white",
        amount: null,
      },
    ],
    directions: [
      "Add all the ingredients into a shaker with ice and shake vigorously until well-chilled.",
      "Strain into a chilled coupe glass.",
      "Garnish with 3 speared raspberries.",
    ],
  },
  {
    name: "elderberryfizz",
    label: "Elderberry Fizz",
    flavors: ["refreshing", "fruity", "floral", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "raspberry vodka",
        amount: "1 1/2 oz.",
      },
      {
        ingredient: "elderflower liqueur",
        amount: "1/2 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "1 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "soda water",
        amount: "4 oz.",
      },
    ],
    directions: [
      "Stir all ingredients together in a highball glass.",
      "Garnish with blueberries and strawberries.",
    ],
  },
  {
    name: "shirleytemplefloat",
    label: "Shirley Temple Float",
    flavors: ["rich", "sweet"],
    spirits: ["non-alcoholic"],
    ingredients: [
      {
        ingredient: "vanilla ice cream",
        amount: "3 scoops",
      },
      {
        ingredient: "grenadine",
        amount: "1 1/2 tsp.",
      },
      {
        ingredient: "Sprite",
        amount: "6 oz.",
      },
    ],
    directions: [
      "Press ice cream into a glass.",
      "Pour Sprite over ice cream and drizzle grenadine on top.",
      "Garnish with whipped cream and a maraschino cherry.",
      "(Optional: Add 1 1/2 oz. vodka with the Sprite in step 2 to make it a cocktail!)",
    ],
  },
  {
    name: "gladhatter",
    label: "Glad Hatter",
    flavors: ["refreshing", "sweet"],
    spirits: ["non-alcoholic"],
    ingredients: [
      {
        ingredient: "black tea",
        amount: "2 oz.",
      },
      {
        ingredient: "raspberry syrup",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "1 oz.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Shake all ingredients except soda water with ice.",
      "Strain into a glass filled with ice and top with soda water.",
    ],
  },
  {
    name: "dalgonacoffeemartini",
    label: "Dalgona Coffee Martini (aka The Quarantini)",
    flavors: ["rich", "sweet"],
    spirits: ["soju", "vodka"],
    ingredients: [
      {
        ingredient: "soju",
        amount: "2 oz.",
      },
      {
        ingredient: "Bailey's",
        amount: "2 oz.",
      },
      {
        ingredient: "hot water",
        amount: "2 oz.",
      },
      {
        ingredient: "sugar",
        amount: "2 tbsp.",
      },
      {
        ingredient: "instant coffee",
        amount: "2 tbsp.",
      },
      {
        ingredient: "vanilla extract",
        amount: "1/2 tsp.",
      },
      {
        ingredient: "ice",
        amount: "1 cup",
      },
    ],
    directions: [
      "Combine instant coffee, sugar, hot water, and vanilla extract in a small bowl and whisk until it becomes thick and light (1-2 minutes with an electric mixer).",
      "Shake soju (or vodka) and Bailey's with ice and pour into a chilled martini glass.",
      "Spoon the whipped coffee mixture on top of the glass and garnish with nutmeg.",
    ],
    imageUrl: "https://i.imgur.com/rMvvlAR.jpeg",
  },
  {
    name: "honeydeuce",
    label: "Honey Deuce",
    flavors: ["refreshing", "fruity", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 1/4 oz.",
      },
      {
        ingredient: "raspberry liqueur",
        amount: "1/2 oz.",
      },
      {
        ingredient: "lemonade",
        amount: "4 oz.",
      },
      {
        ingredient: "honeydew melon balls",
        amount: "3",
      },
    ],
    directions: [
      "Add vodka, raspberry liqueur (i.e. Chambord), and lemonade (Minute Maid recommended) to a highball glass filled with ice and stir.",
      "Garnish with a skewer of honeydew melon balls.",
    ],
    imageUrl: "https://i.imgur.com/uYUge0t.jpeg",
  },
  {
    name: "melonaspritz",
    label: "Melona Spritz",
    flavors: ["fruity", "refreshing", "rich", "sweet"],
    spirits: ["soju"],
    ingredients: [
      {
        ingredient: "soju",
        amount: "3 oz.",
      },
      {
        ingredient: "elderflower liqueur",
        amount: "1/2 oz.",
      },
      {
        ingredient: "orgeat syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "Sprite",
        amount: null,
      },
      {
        ingredient: "Melona ice pop",
        amount: null,
      },
    ],
    directions: [
      "Add all ingredients to a rocks glass and use the Melona ice pop to stir until the mixture turns a creamy light green.",
      "Garnish with an orange wedge and maraschino cherries.",
    ],
    imageUrl: "https://i.imgur.com/Phqq8X4.jpeg",
  },
  {
    name: "blueberrycloverclub",
    label: "Blueberry Clover Club",
    flavors: ["floral", "fruity"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "Empress 1908 Indigo gin",
        amount: "2 oz.",
      },
      {
        ingredient: "blueberry syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "egg white",
        amount: null,
      },
    ],
    directions: [
      "Shake all ingredients with ice vigorously for a couple of minutes.",
      "Strain into a coupe glass.",
      "Garnish with blueberries.",
    ],
    imageUrl: "https://i.imgur.com/UA4m4Uc.jpeg",
  },
  {
    name: "raspberryelderflowerspritz",
    label: "Raspberry Elderflower Spritz",
    flavors: ["fruity", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "2 oz.",
      },
      {
        ingredient: "elderflower liqueur",
        amount: "1 1/2 oz.",
      },
      {
        ingredient: "lemon juice",
        altIngredient: "lime juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "soda water",
        amount: "4 oz.",
      },
      {
        ingredient: "raspberries",
        amount: "6",
      },
    ],
    directions: [
      "Muddle the raspberries with lemon (or lime) juice in a shaker.",
      "Add gin and elderflower liqueur and shake with ice.",
      "Strain with a fine mesh strainer and top with soda water and ice.",
      "Garnish with raspberries.",
    ],
  },
  {
    name: "afterfive",
    label: "After Five",
    flavors: ["rich"],
    spirits: ["none"],
    ingredients: [
      {
        ingredient: "peppermint schnapps",
        amount: "1/2 oz.",
      },
      {
        ingredient: "Kahlua",
        amount: "3/4 oz.",
      },
      {
        ingredient: "Bailey's",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Pour the peppermint schnapps into a chilled small wine glass.",
      "Carefully pour the Kahlua over the back of a spoon to make a second layer.",
      "Finally, float the cream Bailey's on top and serve.",
    ],
  },
  {
    name: "alaska",
    label: "Alaska",
    flavors: ["dry", "floral"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1/2 oz.",
      },
      {
        ingredient: "yellow Chartreuse",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Shake the gin and Chartreuse over ice cubes until well-frosted.",
      "Strain into a chilled glass and serve.",
    ],
  },
  {
    name: "applecidermimosa",
    label: "Apple Cider Mimosa",
    flavors: ["fruity", "refreshing", "spicy", "sweet"],
    spirits: ["none"],
    ingredients: [
      {
        ingredient: "apple cider",
        amount: "4 oz.",
      },
      {
        ingredient: "sparkling wine",
        amount: "2-4 oz.",
      },
      {
        ingredient: "caramel sauce",
        amount: null,
      },
      {
        ingredient: "cinnamon sugar",
        amount: null,
      },
    ],
    directions: [
      "Dip the rim of a champagne flute in the caramel sauce and then in the cinnamon sugar.",
      "Pour the apple cider into the flute and top off with sparkling wine.",
      "Garnish with a slice of apple or cinnamon stick.",
    ],
    imageUrl: "https://i.imgur.com/JA5tQnW.jpeg",
  },
  {
    name: "applefizz",
    label: "Apple Fizz",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "apple brandy",
        amount: "3/4 oz.",
      },
      {
        ingredient: "sparkling hard cider",
        amount: "4 oz.",
      },
      {
        ingredient: "lemon",
        amount: "juice of 1/2",
      },
      {
        ingredient: "egg white",
        amount: "1 tbsp.",
      },
      {
        ingredient: "sugar",
        amount: "generous pinch",
      },
    ],
    directions: [
      "Shake the ingredients together over ice.",
      "Pour immediately into a rocks glass.",
      "Garnish with a slice of lemon and apple and serve.",
    ],
  },
  {
    name: "babybellini",
    label: "Baby Bellini",
    flavors: ["fruity", "sweet"],
    spirits: ["non-alcoholic"],
    ingredients: [
      {
        ingredient: "peach juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "sparkling apple juice",
        amount: null,
      },
    ],
    directions: [
      "Pour the peach juice and lemon juice into a chilled champage flute and stir well.",
      "Top off with sparkling apple juice and stir again.",
    ],
  },
  {
    name: "bachelorsbait",
    label: "Bachelor's Bait",
    flavors: ["floral", "fruity", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "1 tsp.",
      },
      {
        ingredient: "egg white",
        amount: "1",
      },
      {
        ingredient: "orange bitters",
        amount: "dash",
      },
    ],
    directions: [
      "Shake the gin, grenadine, and egg white together over ice cubes until well-frosted.",
      "Add a dash of orange bitters, give the mixture another quick shake, and strain into a chilled martini glass.",
    ],
  },
  {
    name: "bajansun",
    label: "Bajan Sun",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "3/4 oz. white",
      },
      {
        ingredient: "mandarine brandy",
        altIngredient: "Grand Marnier",
        amount: "3/4 oz.",
      },
      {
        ingredient: "orange juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "splash",
      },
    ],
    directions: [
      "Put crushed ice into a cocktail shaker.",
      "Pour the rum, brandy (or Grand Marnier), orange juice, and pineapple juice over the ice.",
      "Add the grenadine and shake vigorously.",
      "Strain into a chilled highball glass and garnish with a pineapple slice and maraschino cherry.",
    ],
  },
  {
    name: "bananabrulee",
    label: "Banana Brulee",
    flavors: ["rich", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "Empress 1908 Indigo gin",
        amount: "1 1/2 oz.",
      },
      {
        ingredient: "banana liqueur",
        amount: "1/2 oz.",
      },
      {
        ingredient: "orgeat syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "milk",
        amount: "3 oz.",
      },
      {
        ingredient: "vanilla extract",
        amount: "1 tsp.",
      },
    ],
    directions: [
      "Use a milk frother to froth all ingredients except gin for 20-30 seconds.",
      "Pour the mixture into a rocks glass with ice and float the gin on top over the back of a spoon.",
      "Garnish with a caramelized banana.",
    ],
  },
  {
    name: "bananacolada",
    label: "Banana Colada",
    flavors: ["fruity", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "1 3/4 oz. white",
      },
      {
        ingredient: "pineapple juice",
        amount: "3 1/2 oz.",
      },
      {
        ingredient: "Malibu",
        amount: "3/4 oz.",
      },
      {
        ingredient: "banana",
        amount: "1 peeled and sliced",
      },
    ],
    directions: [
      "Blend 4-6 crushed ice cubes in a blender with the rum, pineapple juice, Malibu, and sliced bananas.",
      "Blend until smooth, then pour, without straining, into a chilled highball glass and garnish with pineapple wedges.",
    ],
  },
  {
    name: "bananadaiquiri",
    label: "Banana Daiquiri",
    flavors: ["fruity", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "1 3/4 oz. white",
      },
      {
        ingredient: "triple sec",
        amount: "1/2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "light cream",
        amount: "1/2 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1 tsp.",
      },
      {
        ingredient: "banana",
        amount: "1/4 peeled and sliced",
      },
    ],
    directions: [
      "Put all the liquid ingredients into a blender.",
      "Add the banana nad blend until smooth.",
      "Pour, without straining, into a chilled rocks glass.",
      "Garnish with a lime slice and serve.",
    ],
  },
  {
    name: "beadlestone",
    label: "Beadlestone",
    flavors: ["dry"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "1 3/4 oz. scotch",
      },
      {
        ingredient: "dry vermouth",
        amount: "1 1/4 oz.",
      },
    ],
    directions: [
      "Put some cracked ice into a mixing glass and pour the whiskey and vermouth over the ice.",
      "Stir well to mix and strain into a chilled martini glass.",
    ],
  },
  {
    name: "beesknees",
    label: "Bee's Knees",
    flavors: ["floral", "fruity", "sour"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "2 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "honey syrup",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Add the gin, lemon juice, and honey syrup into a shaker with ice and shake until well-chilled.",
      "Strain into a chilled cocktail glass.",
      "Garnish with a lemon twist.",
    ],
  },
  {
    name: "bellecollins",
    label: "Belle Collins",
    flavors: ["floral", "fruity", "sour", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1 tsp.",
      },
      {
        ingredient: "mint springs",
        amount: "2",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Muddle the mint sprigs.",
      "Place the mint in a chilled rocks glass and pour in the gin, lemon juice, and simple syrup.",
      "Add the crushed ice to the glass.",
      "Top off with soda water, stir gently, and garnish with more fresh mint.",
    ],
  },
  {
    name: "bellini",
    label: "Bellini",
    flavors: ["fruity", "refreshing", "sweet"],
    spirits: ["none"],
    ingredients: [
      {
        ingredient: "peach juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "sparkling wine",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "lemon wedge",
        amount: "1",
      },
      {
        ingredient: "sugar",
        amount: null,
      },
    ],
    directions: [
      "Rub the rim of a chilled champagne flute with the lemon wedge.",
      "Put the sugar in a saucer, then dip the rim of the flute in it.",
      "Pour the peach juice into the flute.",
      "Top off with sparkling wine.",
    ],
  },
  {
    name: "blackrussian",
    label: "Black Russian",
    flavors: ["bitter"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "Kahlua",
        amount: "3/4 oz.",
      },
    ],
    directions: [
      "Pour the vodka and liqueur over cracked ice in a chilled rocks glass.",
      "Stir to mix and serve.",
    ],
  },
  {
    name: "bleubleubleu",
    label: "Bleu Bleu Bleu",
    flavors: ["dry", "floral", "fruity", "sour"],
    spirits: ["gin", "tequila", "vodka"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "3/4 oz.",
      },
      {
        ingredient: "vodka",
        amount: "3/4 oz.",
      },
      {
        ingredient: "tequila",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "blue curacao",
        amount: "3/4 oz.",
      },
      {
        ingredient: "egg white",
        amount: "2 dashes",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Put crushed ice into a cocktail shaker.",
      "Add the gin, vodka, tequila, lemon juice, egg white, and curacao and shake until frosted.",
      "Strain the cocktail into a highball glass filled with crushed ice and top off with soda water.",
      "Garnish with a lemon slice.",
    ],
  },
  {
    name: "bloodhound",
    label: "Bloodhound",
    flavors: ["floral", "fruity", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "sweet vermouth",
        amount: "3/4 oz.",
      },
      {
        ingredient: "dry vermouth",
        amount: "3/4 oz.",
      },
      {
        ingredient: "strawberries",
        amount: "3",
      },
    ],
    directions: [
      "Put the gin, sweet vermouth, dry vermouth, and strawberries into a blender with 4-6 cracked ice cubes, and blend until smooth.",
      "Pour into a chilled martini glass and garnish with the remaining strawberry.",
    ],
  },
  {
    name: "bloodymary",
    label: "Bloody Mary",
    flavors: ["savory", "spicy"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "tomato juice",
        amount: "5 1/4 oz.",
      },
      {
        ingredient: "lemon",
        amount: "juice of 1/2",
      },
      {
        ingredient: "hot sauce",
        amount: "dash",
      },
      {
        ingredient: "Worcestershire sauce",
        amount: "dash",
      },
      {
        ingredient: "celery salt",
        amount: "pinch",
      },
      {
        ingredient: "cayenne pepper",
        amount: "pinch",
      },
    ],
    directions: [
      "Put cracked ice into a cocktail shaker. Dash the hot sauce and Worcestershire sauce over the ice.",
      "Add the vodka, tomato juice, and lemon juice and shake vigorously until well-frosted",
      "Strain into a chilled highball glass, add the celery salt and cayenne pepper, and garnish with a celery stalk and lemon slice.",
    ],
  },
  {
    name: "blueblooded",
    label: "Blue Blooded",
    flavors: ["floral", "fruity", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "3/4 oz.",
      },
      {
        ingredient: "passionfruit nectar",
        amount: "3/4 oz.",
      },
      {
        ingredient: "melon",
        altIngredient: "mango",
        amount: "4 cubes",
      },
      {
        ingredient: "blue curacao",
        amount: "1-2 tsp.",
      },
    ],
    directions: [
      "Put the gin, passionfruit nectar, melon (or mango) cubes, and 4-6 cracked ice cubes into a blender and blend until smooth and frosted.",
      "Pour into a chilled highball glass filled with cracked ice and top off with the blue curacao.",
    ],
  },
  {
    name: "bluehawaiian",
    label: "Blue Hawaiian",
    flavors: ["fruity", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "blue curacao",
        amount: "1/2 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "cream of coconut",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Put crushed ice in a shaker.",
      "Pour the ingredients over the ice. Shake vigorously until well-frosted and strain into a chilled margarita glass.",
      "Garnish with a pineapple wedge and serve.",
    ],
  },
  {
    name: "bluelagoon",
    label: "Blue Lagoon",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "3/4 oz.",
      },
      {
        ingredient: "blue curacao",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "dash",
      },
      {
        ingredient: "Sprite",
        amount: null,
      },
    ],
    directions: [
      "Pour the blue curacao into a chilled martini glass, followed by the vodka.",
      "Add the lemon juice, top off with the Sprite, and serve.",
    ],
  },
  {
    name: "bluemonday",
    label: "Blue Monday",
    flavors: ["dry", "fruity", "sour"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "3/4 oz.",
      },
      {
        ingredient: "Cointreau",
        amount: "1/2 oz.",
      },
      {
        ingredient: "blue curacao",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Put cracked ice into a mixing glass and pour in the vodka, Cointreau, and curacao.",
      "Stir well, strain into a cocktail glass, and serve.",
    ],
  },
  {
    name: "bluetrain",
    label: "The Blue Train",
    flavors: ["dry", "floral", "fruity", "sour"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "triple sec",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "blue curacao",
        amount: "splash",
      },
    ],
    directions: [
      "Pour all of the liquid ingredients into a cocktail shaker filled with cracked ice.",
      "Shake vigorously until frosted and strain into a chilled martini glass.",
    ],
  },
  {
    name: "blueberrylemonade",
    label: "Blueberry Lemonade",
    flavors: ["fruity", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 1/2 oz.",
      },
      {
        ingredient: "blueberry syrup",
        amount: "1 oz.",
      },
      {
        ingredient: "lemonade",
        amount: "6 oz.",
      },
      {
        ingredient: "soda water",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Combine all ingredients in a highball glass with ice and stir.",
      "Garnish with a lemon wedge and blueberries.",
    ],
    imageUrl: "https://i.imgur.com/nNVbLcV.jpeg",
  },
  {
    name: "bostonsour",
    label: "Boston Sour",
    flavors: ["dry", "fruity", "sour"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        altIngredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1 tsp.",
      },
      {
        ingredient: "egg white",
        amount: "1",
      },
    ],
    directions: [
      "Put cracked ice into a shaker.",
      "Pour the lemon (or lime) juice, whiskey, and simple syrup over the ice.",
      "Add the egg white.",
      "Shake until chilled. Strain into a martini glass and garnish with a lemon slice and a maraschino cherry.",
    ],
  },
  {
    name: "bourbonmilkpunch",
    label: "Bourbon Milk Punch",
    flavors: ["spicy", "sweet"],
    spirits: ["bourbon"],
    ingredients: [
      {
        ingredient: "bourbon",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "milk",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "vanilla extract",
        amount: "dash",
      },
      {
        ingredient: "honey syrup",
        amount: "1 tsp.",
      },
      {
        ingredient: "grated nutmeg",
        amount: null,
      },
    ],
    directions: [
      "Put cracked ice into a shaker.",
      "Pour the bourbon, milk, and vanilla extract over the ice.",
      "Add the honey syrup and shake until well-frosted.",
      "Strain into a chilled rocks glass and sprinkle with grated nutmeg.",
    ],
  },
  {
    name: "brandyjulep",
    label: "Brandy Julep",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "brandy",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "mint leaves",
        amount: "4",
      },
      {
        ingredient: "simple syrup",
        amount: "1 tsp.",
      },
    ],
    directions: [
      "Filla chilled rocks glass with cracked ice.",
      "Add the brandy, simple syrup, and mint leaves, and stir well to mix.",
      "Garnish with a sprig of fresh mint and a slice of lemon.",
    ],
  },
  {
    name: "brandysour",
    label: "Brandy Sour",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "brandy",
        amount: "2 oz.",
      },
      {
        ingredient: "lemon juice",
        altIngredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1 tsp.",
      },
    ],
    directions: [
      "Shake the lemon (or lime) juice, brandy, and simple syrup well over ice and strain into a martini glass.",
      "Garnish with a lime slice and a maraschino cherry, and serve.",
    ],
  },
  {
    name: "champagnecocktail",
    label: "Champagne Cocktail",
    flavors: ["sweet"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "brandy",
        amount: "3/4 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "Angostura bitters",
        amount: "2 dashes",
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Put the simple syrup into the bottom of a chilled champagne flute.",
      "Add the Angostura bitters and the brandy.",
      "Top off with chilled sparkling wine and serve.",
    ],
  },
  {
    name: "champagnepickmeup",
    label: "Champagne Pick-Me-Up",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "brandy",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "orange juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "dash",
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Put cracked ice into a shaker.",
      "Pour the brandy, orange juice, lemon juice, and grenadine over the ice and shake vigorously until well-frosted.",
      "Strain into a chilled wine glass, top off with champagne, and serve.",
    ],
  },
  {
    name: "champagnesidecar",
    label: "Champagne Sidecar",
    flavors: ["dry", "fruity", "sour"],
    spirits: ["bourbon"],
    ingredients: [
      {
        ingredient: "bourbon",
        amount: "1 1/4 oz.",
      },
      {
        ingredient: "Cointreau",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "1 1/2 tsp.",
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Shake the bourbon, Cointreau, and lemon juice over ice and strain into a chilled champagne flute.",
      "Top off with chilled sparkling wine and serve.",
    ],
  },
  {
    name: "cherrycola",
    label: "Cherry Cola",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "cherry brandy",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "cola",
        amount: null,
      },
    ],
    directions: [
      "Fill a chilled rocks glass halfway with cracked ice.",
      "Pour the cherry brandy and lemon juice over the ice.",
      "Top off with cola, stir gently, and garnish with a slice of lemon.",
    ],
  },
  {
    name: "cherrykitsch",
    label: "Cherry Kitsch",
    flavors: ["fruity", "sweet"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "cherry brandy",
        amount: "3/4 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "kirsch",
        amount: "1/2 oz.",
      },
      {
        ingredient: "egg white",
        amount: "1",
      },
    ],
    directions: [
      "Shake the cherry brandy, pineapple juice, kirsch, and egg white well over crushed ice until frosted.",
      "Pour into a chilled highball glass and top with a frozen maraschino cherry.",
    ],
  },
  {
    name: "chocolatemartini",
    label: "Chocolate Martini",
    flavors: ["rich", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "4 oz.",
      },
      {
        ingredient: "Bailey's",
        amount: "2 oz.",
      },
      {
        ingredient: "creme de cacao",
        amount: "2 oz.",
      },
      {
        ingredient: "chocolate syrup",
        amount: null,
      },
    ],
    directions: [
      "Drizzle chocolate syrup inside a martini glass and then add chocolate syrup to a plate and coat the rim of the glass.",
      "Combine the Bailey's, creme de cacao, and vodka in a shaker filled with ice. Shake until thoroughly chilled.",
      "Strain drink into glass and garnis with shaved chocolate.",
    ],
  },
  {
    name: "cosmopolitan",
    label: "Cosmopolitan",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "triple sec",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "cranberry juice",
        amount: "3/4 oz.",
      },
    ],
    directions: [
      "Put cracked ice into a cocktail shaker.",
      "Pour the liquid ingredients over the ice.",
      "Shake vigorously until well-frosted.",
      "Strain into a chilled martini glass and garnish with an orange peel.",
    ],
  },
  {
    name: "creolelady",
    label: "Creole Lady",
    flavors: ["floral", "fruity", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "Madeira",
        altIngredient: "sherry",
        amount: "1 1/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "1 tsp.",
      },
    ],
    directions: [
      "Pour the gin, Madeira (or sherry), and grenadine over cracked ice in a mixing glass.",
      "Stir well to mix, then strain into a chilled martini glass.",
      "Garnish with maraschino cherries and serve.",
    ],
  },
  {
    name: "cubanspecial",
    label: "Cuban Special",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "1 3/4 oz. white",
      },
      {
        ingredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "triple sec",
        amount: "1 tsp.",
      },
    ],
    directions: [
      "Put cracked ice cubes into a shaker.",
      "Pour the rum, lime juice, pineapple juice, and triple sec over the ice. Shake vigorously until well-frosted. Strain into a chilled martini glass.",
      "Garnish with pineapple wedges and serve.",
    ],
  },
  {
    name: "daiquiri",
    label: "Daiquiri",
    flavors: ["fruity", "sour"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "1 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "3/4 oz.",
      },
    ],
    directions: [
      "Shake all ingredients with ice in a shaker until well-frosted.",
      "Strain into a chilled coupe glass and garnish with a lime wedge.",
    ],
  },
  {
    name: "daisy",
    label: "Daisy",
    flavors: ["floral", "fruity", "sour", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "1/2 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1 tsp.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Put cracked ice into a cocktail shaker.",
      "Pour the gin, lemon juice, grenadine, and simple syrup over the ice and shake vigorously until well-frosted.",
      "Strain the cocktail into a chilled highball glass.",
      "Top off with soda water, stir gently, and garnish with an orange wedge.",
    ],
  },
  {
    name: "diamondfizz",
    label: "Diamond Fizz",
    flavors: ["floral", "fruity", "sour"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1 tsp.",
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Shake the gin, lemon juice, and simple syrup over ice until well frosted.",
      "Strain into a chilled champagne flute. TOp off with chilled sparkling wine and serve.",
    ],
  },
  {
    name: "dirtyginmartini",
    label: "Dirty Gin Martini",
    flavors: ["dry"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "olive brine",
        amount: "1 oz.",
      },
      {
        ingredient: "dry vermouth",
        amount: null,
      },
    ],
    directions: [
      "Rinse the inside of a chilled martini glass with a small amount of dry vermouth and discard the liquid.",
      "Shake gin and olive brine with ice in a shaker until well-frosted.",
      "Strain into the prepared martini glass and garnish with 3 olives.",
    ],
  },
  {
    name: "dirtyshirley",
    label: "Dirty Shirley",
    flavors: ["fruity", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "2 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "1 oz.",
      },
      {
        ingredient: "Sprite",
        amount: null,
      },
    ],
    directions: [
      "Add ice to a highball glass and pour in vodka, Sprite, and grenadine.",
      "Stir well and serve.",
    ],
  },
  {
    name: "drymartini",
    label: "Dry Martini",
    flavors: ["dry"],
    spirits: ["gin", "vodka"],
    ingredients: [
      {
        ingredient: "gin",
        altIngredient: "vodka",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "dry vermouth",
        amount: "1/2 oz.",
      },
      {
        ingredient: "orange bitters",
        amount: "1 dash",
      },
    ],
    directions: [
      "Add the gin (or vodka), vermouth, and bitters to a shaker with ice and stir until very cold.",
      "Strain into a chilled martini glass and garnish with a lemon twist or olive brine.",
    ],
  },
  {
    name: "duke",
    label: "Duke",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["none"],
    ingredients: [
      {
        ingredient: "triple sec",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "orange juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "egg white",
        amount: "1",
      },
      {
        ingredient: "maraschino liqueur",
        amount: "dash",
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Shake the triple sec, lemon juice, orange juice, egg white, and maraschino liqueur vigorously over cracked ice until well-frosted.",
      "Strain into a chilled wine glass and top off with chilled sparkling wine.",
    ],
  },
  {
    name: "eltoro",
    label: "El Toro",
    flavors: ["rich", "sweet"],
    spirits: ["tequila"],
    ingredients: [
      {
        ingredient: "tequila",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "Kahlua",
        amount: "3/4 oz.",
      },
      {
        ingredient: "light cream",
        amount: "3/4 oz.",
      },
    ],
    directions: [
      "Pour the tequila, Kahlua, and cream into a shaker filled with cracked ice.",
      "Shake well and strain into a chilled martini glass and serve.",
    ],
  },
  {
    name: "espressomartini",
    label: "Espresso Martini",
    flavors: ["bitter", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "2 oz.",
      },
      {
        ingredient: "Kahlua",
        amount: "1/2 oz.",
      },
      {
        ingredient: "cold brew",
        amount: "1 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Add ice to a shaker and then add the cold brew, simple syrup, Kahlua, and vodka.",
      "Shake very hard and strain into a martini glass.",
      "Garnish with coffee beans.",
    ],
  },
  {
    name: "firefly",
    label: "Firefly",
    flavors: ["floral", "fruity", "sour"],
    spirits: ["gin", "tequila"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "3/4 oz.",
      },
      {
        ingredient: "tequila",
        amount: "1/2 oz.",
      },
      {
        ingredient: "orange curacao",
        amount: "1/2 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "egg white",
        amount: "dash",
      },
    ],
    directions: [
      "Shake all the liquid ingredients well over ice until frosted.",
      "Strain into a chilled martini glass and garnish with a twist of orange peel.",
    ],
  },
  {
    name: "flirtini",
    label: "Flirtini",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1/2 oz.",
      },
      {
        ingredient: "Cointreau",
        amount: "1/2 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "pineapple",
        amount: "1/4 slice (chopped)",
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Put the pineapple into a mixing glass or bowl.",
      "Crush the pineapple and add the Cointreau, vodka, and pineapple juice. Stir well.",
      "Strain into a glass and top off with sparkling wine.",
    ],
  },
  {
    name: "flowerdrop",
    label: "Flower Drop",
    flavors: ["fruity", "floral"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 1/2 oz.",
      },
      {
        ingredient: "elderflower liqueur",
        amount: "1 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Shake all ingredients with ice and strain into a coupe glass.",
      "Garnish with edible flowers.",
      "(Optional: Substitute simple syrup for blueberry syrup for a blueberry twist!)",
    ],
  },
  {
    name: "flyingscotsman",
    label: "Flying Scotsman",
    flavors: ["sweet"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "1 3/4 oz. scotch",
      },
      {
        ingredient: "sweet vermouth",
        amount: "3/4 oz.",
      },
      {
        ingredient: "Angostura bitters",
        amount: "dash",
      },
      {
        ingredient: "simple syrup",
        amount: "1/4 tsp.",
      },
    ],
    directions: [
      "Put some crushed ice into a blender.",
      "Dash Angostura bitters over the ice, and add the whiskey, vermouth, and simple syrup.",
      "Blend until slushy and pour into a chilled rocks glass.",
    ],
  },
  {
    name: "frenchkiss",
    label: "French Kiss",
    flavors: ["sweet"],
    spirits: ["bourbon"],
    ingredients: [
      {
        ingredient: "bourbon",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "apricot liqueur",
        amount: "3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "2 tsp.",
      },
      {
        ingredient: "lemon juice",
        amount: "1 tsp.",
      },
    ],
    directions: [
      "Put cracked ice into a shaker.",
      "Pour the ingredients over the ice and shake vigorously until well-frosted.",
      "Strain into a chilled martini glass and serve.",
    ],
  },
  {
    name: "fuzzynavel",
    label: "Fuzzy Navel",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "peach schnapps",
        amount: "3/4 oz.",
      },
      {
        ingredient: "orange juice",
        amount: "1 cup",
      },
    ],
    directions: [
      "Put cracked ice into a cocktail shaker.",
      "Pour the ingredients over the ice and shake vigorously until well-frosted.",
      "Strain into 2 chilled cocktail glasses.",
    ],
  },
  {
    name: "ginrickey",
    label: "Gin Rickey",
    flavors: ["dry", "floral", "sour"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Fill a chilled highball glass with cracked ice.",
      "Pour the gin and lime juice over the ice, and top off with soda water.",
      "Stir gently to mix and garnish with a lemon slice.",
    ],
  },
  {
    name: "gimlet",
    label: "Gimlet",
    flavors: ["dry", "floral", "sour"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "3/4 oz.",
      },
    ],
    directions: [
      "Combine all ingredients in a shaker and add ice.",
      "Shake vigorously, until tin is frosted over.",
      "Strain into a chilled coupe glass, and garnish with a lime wheel.",
    ],
  },
  {
    name: "goddaughter",
    label: "Goddaughter",
    flavors: ["fruity", "spicy", "sweet"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "apple brandy",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "amaretto",
        amount: "3/4 oz.",
      },
      {
        ingredient: "apple sauce",
        amount: "1 tsp.",
      },
    ],
    directions: [
      "Put some crushed ice into a blender and add the apple brandy, amaretto, and apple sauce.",
      "Blend until smooth, then pour the mixture, without straining, into a chilled margarita glass.",
      "Sprinkle with ground cinnamon and serve.",
    ],
  },
  {
    name: "grandroyalcloverclub",
    label: "Grand Royal Clover Club",
    flavors: ["floral", "fruity"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "3/4 oz.",
      },
      {
        ingredient: "egg white",
        amount: "1",
      },
    ],
    directions: [
      "Pour the ingredients over ice, shake vigorously until well-frosted, and strain into a chilled coupe glass.",
      "Garnish with a twist of lime peel.",
    ],
  },
  {
    name: "greenlady",
    label: "Green Lady",
    flavors: ["dry", "floral", "fruity", "sour"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "green Chartreuse",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "dash",
      },
    ],
    directions: [
      "Shake the ingredients vigorously over ice until well-frosted.",
      "Strain into a chilled martini glass and serve.",
    ],
  },
  {
    name: "hawaiianorangeblossom",
    label: "Hawaiian Orange Blossom",
    flavors: ["floral", "fruity", "sour", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "triple sec",
        amount: "3/4 oz.",
      },
      {
        ingredient: "orange juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "3/4 oz.",
      },
    ],
    directions: [
      "Shake the liquid ingredients vigorously over ice until well-frosted.",
      "Strain into a chilled wine glass and serve, garnished with pineapple slices and leaves.",
    ],
  },
  {
    name: "highlandfling",
    label: "Highland Fling",
    flavors: ["dry"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "sweet vermouth",
        amount: "3/4 oz.",
      },
      {
        ingredient: "Angostura bitters",
        amount: "dash",
      },
    ],
    directions: [
      "Put cracked ice into a mixing glass.",
      "Pour the Angostura bitters over the ice. Pour in the whiskey and vermouth, and stir well to mix.",
      "Strain into a chilled rocks glass and garnish with a cocktail olive.",
    ],
  },
  {
    name: "highvoltage",
    label: "High Voltage",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["tequila"],
    ingredients: [
      {
        ingredient: "tequila",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "peach schnapps",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Pour the tequila, schnapps, and juice into a shaker filled with cracked ice.",
      "Shake well and strain into a chilled martini glass.",
      "Garnish the glass with a peach slice and serve.",
    ],
  },
  {
    name: "hurricane",
    label: "Hurricane",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "3 1/2 oz. dark",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "orange and passionfruit juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Put cracked ice into a shaker.",
      "Add the rum, lemon juice, and orange and passionfruit juice, and shake until well-combined.",
      "Pour the cocktail into a chilled hurricane glass and top off with soda water.",
      "Garnish with orange slices and maraschino cherries, and serve.",
    ],
  },
  {
    name: "jinglejuice",
    label: "Jingle Juice",
    flavors: ["fruity", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "whipped cream vodka",
        amount: "1 750ml bottle",
      },
      {
        ingredient: "sparkling rose",
        amount: "1 750ml bottle",
      },
      {
        ingredient: "cherry soda",
        amount: "1 2L bottle",
      },
      {
        ingredient: "cranberries",
        amount: null,
      },
      {
        ingredient: "rosemary sprigs",
        amount: null,
      },
    ],
    directions: [
      "In a large bowl or pitcher full of ice, combine all of the liquid ingredients.",
      "Stir well and serve garnished with cranberries and rosemary sprigs (serves 12).",
    ],
  },
  {
    name: "kamikaze",
    label: "Kamikaze",
    flavors: ["dry", "fruity", "sour"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "3/4 oz.",
      },
      {
        ingredient: "triple sec",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "white wine",
        amount: "chilled dry",
      },
    ],
    directions: [
      "Put cracked ice into a cocktail shaker.",
      "Pour the vodka, triple sec, lime juice, and lemon juice over the ice and shake until well-frosted.",
      "Strain into a chilled rocks glass.",
      "Top off with wine and garnish with cucumber and lime slices.",
    ],
  },
  {
    name: "klondikecooler",
    label: "Klondike Cooler",
    flavors: ["sweet"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "ginger ale",
        amount: "3/4 oz.",
      },
      {
        ingredient: "confectioner's sugar",
        amount: "1/2 tsp.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Put the sugar into a chilled rocks glass and add the ginger ale. Stir until the sugar has dissolved.",
      "Fill the glass with cracked ice. Pour the whiskey over the ice.",
      "Top off with soda water. Stir gently and garnish with a lemon peel.",
    ],
  },
  {
    name: "lastmangoinparis",
    label: "Last Mango in Paris",
    flavors: ["fruity", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "raspberry liqueur",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "mango",
        amount: "1/2 peeled, pitted, and chopped",
      },
      {
        ingredient: "strawberries",
        amount: "2",
      },
    ],
    directions: [
      "Mix the ingredients in a blender until slushy.",
      "Pour into a chilled margarita glass and garnish with a slice of lime.",
    ],
  },
  {
    name: "lavenderlemonmule",
    label: "Lavender Lemon Mule",
    flavors: ["sour", "fruity"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "Empress 1908 Indigo gin",
        amount: "2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "1 oz.",
      },
      {
        ingredient: "lavender lemon syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "ginger beer",
        amount: "3 oz.",
      },
    ],
    directions: [
      "Add all ingredients besides the Indigo gin to a coupe glass filled with crushed ice.",
      "Float the Indigo gin on top over the back of a spoon.",
      "Garnish with star fruit, mint, and a cucumber ribbon.",
      "Stir before enjoying.",
    ],
  },
  {
    name: "londonfrench75",
    label: "London French 75",
    flavors: ["dry", "floral", "fruity", "sour"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Shake the gin and lemon juice vigorously over cracked ice until well-frosted.",
      "Strain into a chilled highball glass and top off with sparkling wine.",
    ],
  },
  {
    name: "longislandicedtea",
    label: "Long Island Iced Tea",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["gin", "rum", "tequila", "vodka"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "3/4 oz.",
      },
      {
        ingredient: "rum",
        amount: "3/4 oz.",
      },
      {
        ingredient: "tequila",
        amount: "3/4 oz.",
      },
      {
        ingredient: "vodka",
        amount: "3/4 oz.",
      },
      {
        ingredient: "triple sec",
        amount: "3/4 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "cola",
        amount: null,
      },
    ],
    directions: [
      "Add all the ingredients except the cola into a Collins glass with ice.",
      "Top with a splash of cola and stir briefly.",
      "Garnish with a lemon wedge.",
    ],
  },
  {
    name: "lovepotion",
    label: "Love Potion",
    flavors: ["fruity", "rich", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vanilla vodka",
        amount: "1 oz.",
      },
      {
        ingredient: "white creme de cacao",
        amount: "1/2 oz.",
      },
      {
        ingredient: "frozen strawberries",
        amount: "1/2 cup",
      },
      {
        ingredient: "vanilla ice cream",
        amount: "1 scoop",
      },
      {
        ingredient: "ice",
        amount: "1/2 cup",
      },
    ],
    directions: [
      "Rim a margarita glass with white chocolate syrup.",
      "Blend all the ingredients until smooth.",
      "Pour the blended mixture into the rimmed glass garnish with a strawberry.",
    ],
  },
  {
    name: "maidensprayer",
    label: "Maiden's Prayer",
    flavors: ["dry", "floral", "fruity", "sour"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "3/4 oz.",
      },
      {
        ingredient: "triple sec",
        amount: "3/4 oz.",
      },
      {
        ingredient: "orange juice",
        amount: "1 tsp.",
      },
      {
        ingredient: "lemon juice",
        amount: "1 tsp.",
      },
    ],
    directions: [
      "Shake the ingredients vigorously over ice until well frosted.",
      "Strain into a chilled cocktail glass and garnish with a twist of lemon peel.",
    ],
  },
  {
    name: "maitai",
    label: "Mai Tai",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "3/4 oz. white",
      },
      {
        ingredient: "rum",
        amount: "3/4 oz. dark",
      },
      {
        ingredient: "orange curacao",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "orgeat syrup",
        amount: "3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Put cracked ice into a shaker. Pour the white rum, dark rum, curacao, lime juice, orgeat syrup, and grenadine over the ice.",
      "Shake vigorously until well-frosted and strain into a chilled rocks glass.",
      "Garnish with a pineapple wedge, leaves, maraschino cherry, and orange peel twist.",
    ],
  },
  {
    name: "manhattan",
    label: "Manhattan",
    flavors: ["dry"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "sweet vermouth",
        amount: "1 oz.",
      },
      {
        ingredient: "Angostura bitters",
        amount: "2 dashes",
      },
    ],
    directions: [
      "Add all the ingredients to a shaker with ice and stir until well-chilled.",
      "Strain into a chilled coupe glass and garnish with a brandied cherry.",
    ],
  },
  {
    name: "margarita",
    label: "Margarita",
    flavors: ["dry", "fruity", "sour"],
    spirits: ["tequila"],
    ingredients: [
      {
        ingredient: "tequila",
        amount: "2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "1 oz.",
      },
      {
        ingredient: "orange liqueur",
        amount: "1 1/2 oz.",
      },
      {
        ingredient: "agave syrup",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Run a lime around the rim of a margarita glass, then dip into a plate of kosher salt.",
      "Add all the ingredients into a shaker with ice, and shake.",
      "Strain into the prepared margarita glass over fresh ice.",
      "Garnish with a lime wheel.",
    ],
  },
  {
    name: "marilynmonroe",
    label: "Marilyn Monroe",
    flavors: ["fruity", "sweet"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "apple brandy",
        amount: "3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "1 tsp.",
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Add the brandy and grenadine to a chilled champagne glass and stir.",
      "Top off with sparkling wine.",
      "Hang maraschino cherries over the edge of the glass to garnish.",
    ],
  },
  {
    name: "metropolitan",
    label: "Metropolitan",
    flavors: ["fruity", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1/2 oz.",
      },
      {
        ingredient: "raspberry liqueur",
        amount: "1/2 oz.",
      },
      {
        ingredient: "cranberry juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "orange juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "sugar",
        amount: "1 tbsp.",
      },
      {
        ingredient: "lemon wedge",
        amount: "1",
      },
    ],
    directions: [
      "Rub the rim of a martini glass with the lemon wedge.",
      "Dip into the sugar to coat.",
      "Put cracked ice cubes into a shaker and pour the liquid ingredients over the ice.",
      "Cover and shake vigorously until well-frosted. Strain into the glass and serve.",
    ],
  },
  {
    name: "miamibeach",
    label: "Miami Beach",
    flavors: ["dry", "sour"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "1 3/4 oz. scotch",
      },
      {
        ingredient: "dry vermouth",
        amount: "1 1/4 oz.",
      },
      {
        ingredient: "grapefruit juice",
        amount: "1 3/4 oz.",
      },
    ],
    directions: [
      "Put cracked ice into a shaker.",
      "Pour the whiskey, vermouth, and grapefruit juice over the ice.",
      "Shake vigorously until well-frosted. Strain into a chilled martini glass.",
      "Garnish with an orange peel strip and serve.",
    ],
  },
  {
    name: "midnightcowboy",
    label: "Midnight Cowboy",
    flavors: ["rich", "sweet"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "brandy",
        amount: "3/4 oz.",
      },
      {
        ingredient: "Kahlua",
        amount: "1/2 oz.",
      },
      {
        ingredient: "cream",
        amount: "1/2 oz.",
      },
      {
        ingredient: "cola",
        amount: null,
      },
    ],
    directions: [
      "Slowly blend together the brandy, coffee liqueur, cream, and crushed ice in a blender until frothy.",
      "Pour into a chilled cocktail glass. Top off with cola and serve.",
    ],
  },
  {
    name: "midnightskiss",
    label: "Midnight's Kiss",
    flavors: ["sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1/2 oz.",
      },
      {
        ingredient: "blue curacao",
        amount: "2 tsp.",
      },
      {
        ingredient: "lemon wedge",
        amount: null,
      },
      {
        ingredient: "sugar",
        amount: null,
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Spread the sugar on a plate. Run a wedge of lemon around the rim of a chilled champagne flute to moisten it, then dip the glass in the sugar.",
      "Add the vodka and curacao to a shaker filled with cracked ice.",
      "Shake well, strain into the glass, and top off with sparkling wine.",
    ],
  },
  {
    name: "mimi",
    label: "Mimi",
    flavors: ["fruity", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "cream of coconut",
        amount: "1/2 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "1 3/4 oz.",
      },
    ],
    directions: [
      "Put the vodka, cream of coconut, pineapple juice, and 4-6 crushed ice cubes into a blender.",
      "Blend for a few seconds until frothy.",
      "Pour into a chilled martini glass.",
      "Garnish with a slice of pineapple.",
    ],
  },
  {
    name: "minicolada",
    label: "Mini Colada",
    flavors: ["fruity", "sweet"],
    spirits: ["non-alcoholic"],
    ingredients: [
      {
        ingredient: "milk",
        amount: "5 1/2 oz.",
      },
      {
        ingredient: "cream of coconut",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "3 1/2 oz.",
      },
    ],
    directions: [
      "Put cracked ice into a shaker.",
      "Pour the milk and cream of coconut over the ice.",
      "Add the pineapple juice and shake vigorously until well-frosted.",
      "Fill a highball glass halfway with cracked ice, strain the cocktail into it, and garnish with a pineapple chunk, pineapple leaf, and maraschino cherry.",
    ],
  },
  {
    name: "mintjulep",
    label: "Mint Julep",
    flavors: ["dry"],
    spirits: ["bourbon"],
    ingredients: [
      {
        ingredient: "bourbon",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "3/4 oz.",
      },
      {
        ingredient: "mint leaves",
        amount: "8",
      },
    ],
    directions: [
      "In a Julep cup or rocks glass, lightly muddle the mint and simple syrup.",
      "Add the bourbon and pack tightly with crushed ice.",
      "Stir until the cup is frosted on the outside.",
      "Top with more crushed ice to form an ice dome and garnish with a few drops of bitters and a mint spring.",
    ],
  },
  {
    name: "mojito",
    label: "Mojito",
    flavors: ["sour", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "mint leaves",
        amount: "3",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "In a shaker, lightly muddle the mint.",
      "Add the rum, simple syrup, and lime juice.",
      "Fill with ice and strain into a highball glass.",
      "Top with the soda water, and garnish with a mint sprig.",
    ],
  },
  {
    name: "moomoo",
    label: "Moo Moo",
    flavors: ["rich", "sweet"],
    spirits: ["none"],
    ingredients: [
      {
        ingredient: "Bailey's",
        amount: "3/4 oz.",
      },
      {
        ingredient: "creme de cacao",
        amount: "3/4 oz.",
      },
      {
        ingredient: "light cream",
        amount: "2 1.2 oz.",
      },
      {
        ingredient: "ground cinnamon",
        amount: null,
      },
    ],
    directions: [
      "Pour the liqueurs and cream into a shaker filled with cracked ice.",
      "Shake well and strain into a chilled highball glass filled with ice cubes.",
      "Sprinkle a little cinnamon on top and serve.",
    ],
  },
  {
    name: "moonlight",
    label: "Moonlight",
    flavors: ["dry", "floral", "sour"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "3 1/2 oz.",
      },
      {
        ingredient: "grapefruit juice",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "kirsch",
        amount: "3/4 oz.",
      },
      {
        ingredient: "white wine",
        amount: "3 1/2 oz.",
      },
      {
        ingredient: "lemon zest",
        amount: "1/2 tsp.",
      },
    ],
    directions: [
      "Shake all the ingredients vigorously over ice cubes until well-frosted. Strain into 4 chilled glasses.",
    ],
  },
  {
    name: "moscowmule",
    label: "Moscow Mule",
    flavors: ["sour", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "ginger beer",
        amount: "6 oz.",
      },
    ],
    directions: [
      "Squeeze lime juice into a Collins glass (or Moscow Mule mug) and drop in the spent rind.",
      "Add 2 or 3 ice cubes, then pour in the vodka and fill with cold ginger beer.",
      "Garnish with a lemon wheel and a mint sprig.",
    ],
  },
  {
    name: "mudslide",
    label: "Mudslide",
    flavors: ["rich", "sweet"],
    spirits: ["vodka", "whiskey"],
    ingredients: [
      {
        ingredient: "vodka",
        altIngredient: "peanut butter whiskey",
        amount: "1 1/4 oz.",
      },
      {
        ingredient: "Kahlua",
        amount: "1 1/4 oz.",
      },
      {
        ingredient: "Bailey's",
        amount: "1 1/4 oz.",
      },
    ],
    directions: [
      "Shake the Kahlua, Bailey's, and vodka (or peanut butter whiskey) vigorously over cracked ice until well frosted.",
      "Strain into a chilled glass and serve.",
    ],
  },
  {
    name: "oceanbreeze",
    label: "Ocean Breeze",
    flavors: ["dry", "fruity"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "3/4 oz. white",
      },
      {
        ingredient: "amaretto",
        amount: "3/4 oz.",
      },
      {
        ingredient: "blue curacao",
        amount: "1/2 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Put crushed ice into a shaker.",
      "Pour the white rum, amaretto, blue curacao, and pineapple juice over the ice and shake well.",
      "Strain into a chilled highball glass and top off with soda water.",
    ],
  },
  {
    name: "oldfashioned",
    label: "Old Fashioned",
    flavors: ["dry"],
    spirits: ["bourbon", "whiskey"],
    ingredients: [
      {
        ingredient: "bourbon",
        altIngredient: "rye",
        amount: "2 oz.",
      },
      {
        ingredient: "Angostura bitters",
        amount: "2-4 dashes",
      },
      {
        ingredient: "simple syrup",
        amount: "1/4 oz.",
      },
    ],
    directions: [
      "Combine bourbon (or rye), bitters, and simple sytrup in a rocks glass, fill with ice, and stir for 15-20 seconds or until chilled.",
      "Garnish with an orange peel and/or cocktail cherry.",
    ],
  },
  {
    name: "palmbeach",
    label: "Palm Beach",
    flavors: ["floral", "fruity", "sweet"],
    spirits: ["gin", "rum"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "3/4 oz.",
      },
      {
        ingredient: "rum",
        amount: "3/4 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "3/4 oz.",
      },
    ],
    directions: [
      "Shake the gin, rum, and pineapple juice vigorously over cracked ice until well-frosted.",
      "Strain into a chilled rocks glass.",
    ],
  },
  {
    name: "paloma",
    label: "Paloma",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["tequila"],
    ingredients: [
      {
        ingredient: "tequila",
        amount: "2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "1 oz.",
      },
      {
        ingredient: "grapefruit juice",
        amount: "1 oz.",
      },
      {
        ingredient: "agave syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "soda water",
        amount: "4 oz.",
      },
    ],
    directions: [
      "Combine ingredients in a highball glass, fill with ice, and stir to combine.",
      "Garnish with coarse salt or tajin rim.",
    ],
  },
  {
    name: "peachdaiquiri",
    label: "Peach Daiquiri",
    flavors: ["fruity", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "1 3/4 oz. white",
      },
      {
        ingredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1 tsp.",
      },
      {
        ingredient: "peach",
        amount: "1/2 chopped",
      },
    ],
    directions: [
      "Put 6 crushed ice cubes and the peach into a blender.",
      "Add the rum, lime juice, and simple syrup, and blend until slushy.",
      "Pour into a chilled cocktail glass.",
      "Garnish with a peach slice.",
    ],
  },
  {
    name: "peachfloyd",
    label: "Peach Floyd",
    flavors: ["fruity", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "3/4 oz.",
      },
      {
        ingredient: "peach schnapps",
        amount: "3/4 oz.",
      },
      {
        ingredient: "white cranberry and peach juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "cranberry juice",
        amount: "3/4 oz.",
      },
    ],
    directions: [
      "Stir all the ingredients together over cracked ice.",
      "Pour into a chilled small glass and serve.",
    ],
  },
  {
    name: "peanutbuttercup",
    label: "Peanut Butter Cup",
    flavors: ["rich", "sweet"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "peanut butter whiskey",
        amount: "3 oz.",
      },
      {
        ingredient: "creme de cacao",
        amount: "1 oz.",
      },
      {
        ingredient: "milk",
        amount: "1-2 oz.",
      },
      {
        ingredient: "salt",
        amount: null,
      },
    ],
    directions: [
      "Add cracked ice, peanut butter whiskey, creme de cacao, and milk to a rocks glass.",
      "Add salt to taste and stir.",
    ],
  },
  {
    name: "pinacolada",
    label: "Pina Colada",
    flavors: ["fruity", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "2 oz.",
      },
      {
        ingredient: "cream of coconut",
        amount: "2 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "6 oz.",
      },
      {
        ingredient: "ice",
        amount: "2 cups",
      },
    ],
    directions: ["Blend all ingredients in a blender and serve."],
  },
  {
    name: "pinkheather",
    label: "Pink Heather",
    flavors: ["fruity", "sweet"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "3/4 oz. scotch",
      },
      {
        ingredient: "strawberry liqueur",
        amount: "3/4 oz.",
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Pour the whiskey and the strawberry liqueur into a chilled champagne flute.",
      "Top off with chilled sparkling wine and garnish with a strawberry.",
    ],
  },
  {
    name: "pinkwhiskers",
    label: "Pink Whiskers",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "apricot brandy",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "dry vermouth",
        amount: "3/4 oz.",
      },
      {
        ingredient: "orange juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "dash",
      },
    ],
    directions: [
      "Shake the ingredients vigorously over ice until well-frosted.",
      "Strain the mixtrue into a chilled martini glass and serve.",
    ],
  },
  {
    name: "piscosour",
    label: "Pisco Sour",
    flavors: ["dry", "sour"],
    spirits: ["Pisco"],
    ingredients: [
      {
        ingredient: "Pisco",
        amount: "2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "1 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "3/4 oz.",
      },
      {
        ingredient: "egg white",
        amount: "(optional) 1",
      },
    ],
    directions: [
      "Combine all ingredients in a shaker and add ice.",
      "Shake vigorously, until tin is frosted over.",
      "Strain into a chilled rocks glass.",
      "Garnish with Angostura bitters and a lemon wheel.",
    ],
  },
  {
    name: "prettyinpink",
    label: "Pretty in Pink",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["none"],
    ingredients: [
      {
        ingredient: "cranberry juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "Sprite",
        amount: "3/4 oz.",
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Pour the Sprite and juice into a rocks glass filled with ice cubes. Stir gently.",
      "Fill the glass with the sparkling wine.",
      "Garnish with a mint spring and serve.",
    ],
  },
  {
    name: "prohibitionpunch",
    label: "Prohibition Punch",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["non-alcoholic"],
    ingredients: [
      {
        ingredient: "apple juice",
        amount: "1 1/2 cups",
      },
      {
        ingredient: "lemon juice",
        amount: "1 1/2 cups",
      },
      {
        ingredient: "simple syrup",
        amount: "1/2 cup",
      },
      {
        ingredient: "ginger ale",
        amount: "2 liters",
      },
    ],
    directions: [
      "Pour the apple juice into a large pitcher.",
      "Add the lemon juice and simple syrup and a handful of cracked ice.",
      "Add the ginger ale and stir gently to mix. Pour into 6 chilled rocks glasses and garnish with orange slices.",
    ],
  },
  {
    name: "pussycat",
    label: "Pussycat",
    flavors: ["floral", "fruity", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "dash",
      },
      {
        ingredient: "pineapple juice",
        amount: null,
      },
    ],
    directions: [
      "Fill a chilled rocks glass halfway with cracked ice.",
      "Dash the grenadine over the ice and add the gin.",
      "Top off with pineapple juice and garnish with a pineapple slice.",
    ],
  },
  {
    name: "queenofmemphis",
    label: "Queen of Memphis",
    flavors: ["fruity", "sweet"],
    spirits: ["bourbon"],
    ingredients: [
      {
        ingredient: "bourbon",
        amount: "1 3.4 oz.",
      },
      {
        ingredient: "Midori",
        amount: "3/4 oz.",
      },
      {
        ingredient: "peach juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "maraschino liqueur",
        amount: "dash",
      },
    ],
    directions: [
      "Put cracked ice into a shaker.",
      "Pour the bourbon, Midori, peach juice, and maraschino liqueur over the ice and shake vigorously until well-frosted.",
      "Strain into a chilled martini glass. Garnish with a melon wedge and serve.",
    ],
  },
  {
    name: "redapplesunset",
    label: "Red Apple Sunset",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["non-alcoholic"],
    ingredients: [
      {
        ingredient: "apple juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "grapefruit juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "dash",
      },
    ],
    directions: [
      "Shake the apple juice, grapefruit juice, and a dash of grenadine over ice cubes until well-frosted.",
      "Strain into a chilled cocktail glass and serve.",
    ],
  },
  {
    name: "royalsilver",
    label: "Royal Silver",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["none"],
    ingredients: [
      {
        ingredient: "pear liqueur",
        amount: "1/2 oz.",
      },
      {
        ingredient: "triple sec",
        amount: "1/2 oz.",
      },
      {
        ingredient: "grapefruit juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: null,
      },
      {
        ingredient: "sugar",
        amount: null,
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Dip the rim of a wine glass first into some grenadine and then into some sugar.",
      "Pour the pear liqueur, triple sec, and juice into a shaker filled with cracked ice.",
      "Shake well and strain carefully into the chilled glass.",
      "Top off with sparkling wine and serve.",
    ],
  },
  {
    name: "rumcooler",
    label: "Rum Cooler",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "1 1/4 oz. white",
      },
      {
        ingredient: "pineapple juice",
        amount: "1 1/4 oz.",
      },
      {
        ingredient: "banana",
        amount: "1 peeled and sliced",
      },
      {
        ingredient: "lime",
        amount: "juice of 1",
      },
    ],
    directions: [
      "Put the cracked ice, rum, pineapple juice, and banana into a blender.",
      "Add the lime juice and blend for about 1 minute or until smooth.",
      "Fill a chilled rocks glass with cracked ice and pour the cocktail over the ice.",
      "Garnish with a lime peel and serve.",
    ],
  },
  {
    name: "saketini",
    label: "Saketini",
    flavors: ["dry", "floral"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "sake",
        amount: "1/2 measure",
      },
    ],
    directions: [
      "Shake the gin and sake vigorously over ice until well frosted.",
      "Strain into a chilled martini glass and garnish with a twist of lemon peel.",
    ],
  },
  {
    name: "saltydog",
    label: "Salty Dog",
    flavors: ["dry", "fruity", "sour"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "granulated sugar",
        amount: "1 tbsp.",
      },
      {
        ingredient: "kosher salt",
        amount: "1 tbsp.",
      },
      {
        ingredient: "lime wedge",
        amount: "1",
      },
      {
        ingredient: "grapefruit juice",
        amount: null,
      },
    ],
    directions: [
      "Mix the sugar and salt in a saucer. Rub the rim of a chilled martini glass with the lime wedge nad dip into the sugar and salt mixture to coat.",
      "Fill the glass with cracked ice and pour the vodka over the ice.",
      "Top off with the grapefruit juice and stir.",
    ],
  },
  {
    name: "sangria",
    label: "Sangria",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["none"],
    ingredients: [
      {
        ingredient: "orange",
        amount: "juice of 1",
      },
      {
        ingredient: "lemon",
        amount: "juice of 1",
      },
      {
        ingredient: "confectioner's sugar",
        amount: "2 tbsp.",
      },
      {
        ingredient: "orange",
        amount: "1 thinly sliced",
      },
      {
        ingredient: "lemon",
        amount: "1 thinly sliced",
      },
      {
        ingredient: "red wine",
        amount: "1 bottle chilled",
      },
      {
        ingredient: "Sprite",
        amount: null,
      },
    ],
    directions: [
      "Put the orange juice and lemon juice in a large pitcher and stir.",
      "Add the sugar and stir. When the sugar has dissolved, add cracked ice, sliced fruit, and wine. Marinate for 1 hour.",
      "Add Sprite to taste and then top off with cracked ice.",
    ],
  },
  {
    name: "screwdriver",
    label: "Screwdriver",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "orange juice",
        amount: null,
      },
    ],
    directions: [
      "Fill a chilled rocks glass with cracked ice. Pour the vodka over the ice.",
      "Top off with orange juice nad stir well to mix.",
      "Garnish with an orange slice and serve.",
    ],
  },
  {
    name: "seabreeze",
    label: "Sea Breeze",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 1/4 oz.",
      },
      {
        ingredient: "cranberry juice",
        amount: "1/2 oz.",
      },
      {
        ingredient: "grapefruit juice",
        amount: null,
      },
    ],
    directions: [
      "Put cracked ice into a shaker and pour the vodka and cranberyy juice over the ice.",
      "Shake until frosted, strain into a chilled highball glass, and top off with grapefruit juice.",
    ],
  },
  {
    name: "seventhheaven",
    label: "Seventh Heaven",
    flavors: ["dry", "floral", "fruity", "sour"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "maraschino liqueur",
        amount: "1/2 oz.",
      },
      {
        ingredient: "grapefruit juice",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Shake all the liquid ingredients vigorously over ice cubes until well-frosted.",
      "Strain into a chilled martini glass and garnish with fresh mint.",
    ],
  },
  {
    name: "sexonthebeach",
    label: "Sex on the Beach",
    flavors: ["fruity", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "3/4 oz.",
      },
      {
        ingredient: "peach schnapps",
        amount: "3/4 oz.",
      },
      {
        ingredient: "orange juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "cranberry juice",
        altIngredient: "peach juice",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "dash",
      },
    ],
    directions: [
      "Put crushed ice into a shaker and pour over the peach schnapps, vodka, orange juice, and cranberry (or peach) juice.",
      "Shake until well-frosted and strain into a rocks glass filled with ice.",
      "Squeeze the lemon juice over the top and garnish with an orange peel.",
    ],
  },
  {
    name: "shadylady",
    label: "Shady Lady",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["tequila", "brandy"],
    ingredients: [
      {
        ingredient: "tequila",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "apple brandy",
        amount: "3/4 oz.",
      },
      {
        ingredient: "cranberry juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "dash",
      },
    ],
    directions: [
      "Shake the tequila, apple brandy, cranberry juice, and a dash of lime juice over ice cubes until well frosted.",
      "Strain into a chiled martini glass and serve.",
    ],
  },
  {
    name: "shamrock",
    label: "Shamrock",
    flavors: ["dry"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "3/4 oz. Irish",
      },
      {
        ingredient: "dry vermouth",
        amount: "3/4 oz.",
      },
      {
        ingredient: "green Chartreuse",
        amount: "3 dashes",
      },
      {
        ingredient: "creme de menthe",
        amount: "3 dashes",
      },
    ],
    directions: [
      "Put cracked ice into a mixing glass.",
      "Pour the whiskey, vermouth, and Chartreuse over the ice. Stir until well-frosted.",
      "Strain into a chilled martini glass, pour in the creme de menthe, and stir.",
    ],
  },
  {
    name: "sidecar",
    label: "Sidecar",
    flavors: ["dry", "fruity", "sour"],
    spirits: ["brandy"],
    ingredients: [
      {
        ingredient: "brandy",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "triple sec",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
    ],
    directions: [
      "Put cracked ice into a cocktail shaker. Pour the ingredients over the ice.",
      "Shake vigorously until well-frosted.",
      "Strain into a chilled martini glass and garnish with an orange peel.",
    ],
  },
  {
    name: "silkstockings",
    label: "Silk Stockings",
    flavors: ["fruity", "rich", "sweet"],
    spirits: ["tequila"],
    ingredients: [
      {
        ingredient: "tequila",
        amount: "1 1/4 oz.",
      },
      {
        ingredient: "raspberry liqueur",
        amount: "1/2 oz.",
      },
      {
        ingredient: "creme de cacao",
        amount: "1/2 oz.",
      },
      {
        ingredient: "heavy cream",
        amount: "3/4 oz.",
      },
    ],
    directions: [
      "Pour the tequila, liqueurs, and cream into a shaker filled with cracked ice.",
      "Shake well and strain into a chilled martini glass.",
      "Garnish the glass with raspberries on a toothpick.",
    ],
  },
  {
    name: "singaporesling",
    label: "Singapore Sling",
    flavors: ["floral", "sour", "sweet"],
    spirits: ["gin", "brandy"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "cherry brandy",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "1 tsp.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Put cracked ice into a cocktail shaker and pour the gin over it.",
      "Pour in the cherry brandy, lemon juice, and grenadine and shake vigorously until well-frosted.",
      "Fill a chilled highball glass halfway with cracked ice and strain the cocktail over the ice.",
      "Top off with club soda and garnish with lime peel strips and maraschino cherries.",
    ],
  },
  {
    name: "stonefence",
    label: "The Stone Fence",
    flavors: ["fruity", "spicy"],
    spirits: ["bourbon"],
    ingredients: [
      {
        ingredient: "bourbon",
        amount: "1 1/4 oz.",
      },
      {
        ingredient: "Angostura bitters",
        amount: "2 dashes",
      },
      {
        ingredient: "sparkling hard cider",
        amount: null,
      },
    ],
    directions: [
      "Add the bourbon and bitters to a chilled highball glass filled with ice.",
      "Top off with the cider.",
      "Garnish with a mint spring.",
    ],
  },
  {
    name: "strawberrycolada",
    label: "Strawberry Colada",
    flavors: ["fruity", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "3 1/2 oz.",
      },
      {
        ingredient: "cream of coconut",
        amount: "3/4 oz.",
      },
      {
        ingredient: "strawberries",
        amount: "6",
      },
    ],
    directions: [
      "Put 4-6 crushed ice cubes into a blender. Add the rum, pineapple juice, and cream of coconut.",
      "Hull the strawberries and add to the blender. Blend until smooth, then pour, without straining, into a chilled highball glass.",
      "Garnish with a pineapple wedge and strawberry, and serve.",
    ],
  },
  {
    name: "strawberrydaiquiri",
    label: "Strawberry Daiquiri",
    flavors: ["fruity", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "2 tbsp.",
      },
      {
        ingredient: "honey",
        amount: "2 tsp.",
      },
      {
        ingredient: "frozen strawberries",
        amount: "1 1/2 cups",
      },
    ],
    directions: ["Blend all of the ingredients in a blender and serve."],
  },
  {
    name: "strawberrymargarita",
    label: "Strawberry Margarita",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["tequila"],
    ingredients: [
      {
        ingredient: "tequila",
        amount: "2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "1 oz.",
      },
      {
        ingredient: "strawberry jam",
        amount: "1 1/2 tbsp.",
      },
    ],
    directions: [
      "Combine ingredients in a cocktail shaker, fill with ice, and shake hard for 5-10 seconds.",
      "Strain into a margarita glass, garnish with a lime wedge, and serve.",
    ],
  },
  {
    name: "sunnybay",
    label: "Sunny Bay",
    flavors: ["fruity", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "melon liqueur",
        amount: "1/2 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "1 3/4 tbsp.",
      },
    ],
    directions: [
      "Pour the ingredients into a shaker filled with ice and shake well.",
      "Strain into a chilled martini glass and garnish with a maraschino cherry on a toothpick.",
    ],
  },
  {
    name: "sunrise",
    label: "Sunrise",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["non-alcoholic"],
    ingredients: [
      {
        ingredient: "orange juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "3/4 oz.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Put cracked ice into a chilled highball glass and pour the orange juice, lemon juice, and grenadine over it.",
      "Stir together well and top off with sparkling mineral water.",
    ],
  },
  {
    name: "sunsetcider",
    label: "Sunset Cider",
    flavors: ["fruity", "refreshing"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vanilla vodka",
        amount: "1 oz.",
      },
      {
        ingredient: "strawberries",
        amount: "2-3",
      },
      {
        ingredient: "simple syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "1 1/2 tsp.",
      },
      {
        ingredient: "basil leaves",
        amount: "2",
      },
      {
        ingredient: "hard cider",
        amount: "4-6 oz.",
      },
    ],
    directions: [
      "Quarter 2 strawberries (optional: set 1 aside for the garnish) and muddle them with ripped or julienned basil leaves and simple syrup in a highball glass.",
      "Add ice, lime juice, vodka, and hard cider.",
      "Stir and garnish with remaining strawberry and lime wedge.",
    ],
    imageUrl: "https://i.imgur.com/UfIXd24.jpeg",
  },
  {
    name: "teardrop",
    label: "Teardrop",
    flavors: ["floral", "fruity", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "3/4 oz.",
      },
      {
        ingredient: "apricot nectar",
        altIngredient: "peach nectar",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "light cream",
        amount: "3/4 oz.",
      },
      {
        ingredient: "strawberry syrup",
        amount: "1/2 oz.",
      },
    ],
    directions: [
      "Put the gin, apricot (or peach) nectar, and cream into a blender for 5-10 seconds, until thick and frothy.",
      "Pour into a highball glass filled with crushed ice.",
      "Splash the strawberry syrup on the top and garnish with strawberry and peach slices.",
    ],
  },
  {
    name: "tequilasunrise",
    label: "Tequila Sunrise",
    flavors: ["fruity", "sweet"],
    spirits: ["tequila"],
    ingredients: [
      {
        ingredient: "tequila",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "3/4 oz.",
      },
      {
        ingredient: "orange juice",
        amount: null,
      },
      {
        ingredient: "ice",
        amount: null,
      },
    ],
    directions: [
      "Put the cracked ice into a chilled highball glass. Pour the tequila over the ice.",
      "Top off with orange juice and stir well.",
      "Slowly pour the grenadine over the juice.",
      "Garnish with an orange slice and maraschino cherry, and serve.",
    ],
  },
  {
    name: "thistle",
    label: "Thistle",
    flavors: ["dry"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "1 3/4 oz. scotch",
      },
      {
        ingredient: "sweet vermouth",
        amount: "1 1/4 oz.",
      },
      {
        ingredient: "Angostura bitters",
        amount: "dash",
      },
    ],
    directions: [
      "Put some cracked ice into a mixing glass.",
      "Dash Angostura bitters over the ice and pour in the whiskey and vermouth.",
      "Stir well to mix and strain into a chilled martini glass.",
    ],
  },
  {
    name: "tomcollins",
    label: "Tom Collins",
    flavors: ["floral", "fruity", "sour", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "gin",
        amount: "2 1/2 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Put cracked ice into a cocktail shaker.",
      "Pour the gin, lemon juice, and simple syrup over the ice and shake vigorously until well-frosted.",
      "Strain into a chiled highball glass.",
      "Top off with soda water and garnish with the lemon slices.",
    ],
  },
  {
    name: "undertheboardwalk",
    label: "Under the Boardwalk",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["none"],
    ingredients: [
      {
        ingredient: "lemon juice",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "peach",
        amount: "1/2 peeled, pitted, and chopped",
      },
      {
        ingredient: "simple syrup",
        amount: "1/2 tsp.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Blend crushed ice in a blender with the lemon juice, simple syrup, and chopped peach until slushy.",
      "Pour into a chilled rocks glass, top off with soda water, and stir gently.",
      "Garnish with raspberries and serve.",
    ],
  },
  {
    name: "valenciacafe43",
    label: "Valencia Cafe 43",
    flavors: ["fruity", "rich", "sweet"],
    spirits: ["none"],
    ingredients: [
      {
        ingredient: "Licor 43 Horchata",
        amount: "1 1/2 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "1 1/2 oz.",
      },
      {
        ingredient: "cold brew",
        amount: "1/2 oz.",
      },
      {
        ingredient: "cinnamon",
        amount: null,
      },
    ],
    directions: [
      "Pour the liquid ingredients into a shaker full of ice and shake well.",
      "Strain into a coupe glass and garnish with cinnamon.",
    ],
  },
  {
    name: "velvetsnowbird",
    label: "Velvet Snowbird",
    flavors: ["fruity", "rich", "sweet"],
    spirits: ["gin"],
    ingredients: [
      {
        ingredient: "Empress 1908 Indigo gin",
        amount: "1 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "2 oz.",
      },
      {
        ingredient: "vanilla ice cream",
        amount: "360 mL",
      },
      {
        ingredient: "blueberry syrup",
        amount: "1 oz.",
      },
    ],
    directions: [
      "Blend all the ingredients for 10-15 seconds and pour the mixture inot a fizzio glass.",
      "Garnish with blueberries and a pineapple wedge.",
    ],
    imageUrl: "https://i.imgur.com/YVHRdOG.jpeg",
  },
  {
    name: "whiskeyrickey",
    label: "Whiskey Rickey",
    flavors: ["dry", "sour"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "soda water",
        amount: null,
      },
    ],
    directions: [
      "Put crushed ice into a chilled highball glass.",
      "Pour the whiskey and lime juice over the ice and top with soda water.",
      "Stir gently to mix, garnish with a lime slice, and serve.",
    ],
  },
  {
    name: "whiskeysling",
    label: "Whiskey Sling",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "water",
        amount: "1 tsp.",
      },
      {
        ingredient: "confectioner's sugar",
        amount: "1 tsp.",
      },
    ],
    directions: [
      "Put the sugar into a mixing glass.",
      "Add the lemon juice and water and stir until the sugar has dissolved.",
      "Pour in the whiskey and stir to mix.",
      "Fill a chilled rocks glass with cracked ice and strain the cocktail over it.",
      "Garnish with an orange wedge and serve.",
    ],
  },
  {
    name: "whiskeysour",
    label: "Whiskey Sour",
    flavors: ["dry", "fruity", "sour"],
    spirits: ["whiskey"],
    ingredients: [
      {
        ingredient: "whiskey",
        amount: "1 1/2 oz.",
      },
      {
        ingredient: "lemon juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "simple syrup",
        amount: "3/4 oz.",
      },
      {
        ingredient: "maraschino cherry",
        amount: null,
      },
    ],
    directions: [
      "Add all the ingredients to a shaker filled with ice and shake.",
      "Strain into a rocks glass filled with fresh ice.",
      "Garnish with a cherry and lemon wedge.",
    ],
  },
  {
    name: "wildsilk",
    label: "Wild Silk",
    flavors: ["fruity", "rich", "sweet"],
    spirits: ["none"],
    ingredients: [
      {
        ingredient: "raspberry syrup",
        amount: "3/4 oz.",
      },
      {
        ingredient: "cream",
        amount: "1/2 oz.",
      },
      {
        ingredient: "raspberries",
        amount: null,
      },
      {
        ingredient: "sparkling wine",
        amount: null,
      },
    ],
    directions: [
      "Set aside 2 unbruised raspberries. Blend the remainder with the cream, raspberry syrup, and some crushed ice in a blender until frosted and slushy.",
      "Pour into 2 chilled glasses and top off with sparkling wine.",
      "Float a raspberry on top of each glass and serve.",
    ],
  },
  {
    name: "woowoo",
    label: "Woo-Woo",
    flavors: ["fruity", "sweet"],
    spirits: ["vodka"],
    ingredients: [
      {
        ingredient: "vodka",
        amount: "1 3/4 oz.",
      },
      {
        ingredient: "cranberry juice",
        amount: "3 1/2 oz.",
      },
      {
        ingredient: "peach schnapps",
        amount: "1 3/4 oz.",
      },
    ],
    directions: [
      "Fill a chilled cocktail glass halfway with crushed ice.",
      "Pour the cranberry juice over the ice.",
      "Add the vodka and peach schnapps.",
      "Stir well to mix and serve.",
    ],
  },
  {
    name: "zombie",
    label: "Zombie",
    flavors: ["fruity", "sour", "sweet"],
    spirits: ["rum"],
    ingredients: [
      {
        ingredient: "rum",
        amount: "1 3/4 oz. dark",
      },
      {
        ingredient: "rum",
        amount: "1 3/4 oz. white",
      },
      {
        ingredient: "rum",
        amount: "1 3/4 oz. golden",
      },
      {
        ingredient: "triple sec",
        amount: "3/4 oz.",
      },
      {
        ingredient: "lime juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "orange juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "pineapple juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "guava juice",
        amount: "3/4 oz.",
      },
      {
        ingredient: "grenadine",
        amount: "1/2 oz.",
      },
      {
        ingredient: "orgeat syrup",
        amount: "1/2 oz.",
      },
      {
        ingredient: "pernod",
        amount: "1/ tsp.",
      },
    ],
    directions: [
      "Put crushed ice into a shaker.",
      "Pour the liquid ingredients over the ice and shake vigorously until well-frosted.",
      "Pour the cocktail into 3 chilled glasses and garnish with fresh mint and pineapple wedges.",
    ],
  },
];

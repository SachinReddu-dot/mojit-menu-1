const menu = {
      "title": "Breakfast Menu",
      "served_time": "Served from 7am to 11am",
      "categories":
        {
          "name": "Breakfast",
          "items": [
            {
              "name": "OG Paratha",
              "description": "Hand made layered butter paratha",
              "price": {
                "regular": 10,
                "with_chai": 15
              }
            },
            {
              "name": "Kiri/Cheesey Paratha",
              "description": "Hand made layered butter paratha with Kiri cheese spread or grated cheese and optional chips Oman",
              "price": {
                "regular": 15,
                "with_chai": 25
              }
            },
            {
              "name": "Omelette Paratha",
              "description": "Hand made layered butter paratha with plain omelette and optional kiri cheese",
              "price": {
                "regular": 20,
                "with_chai": 30
              }
            },
            {
              "name": "Smashed Avo on Toast",
              "description": "Smashed Avocado and feta on sourdough toast with labneh and fresh herbs",
              "price": {
                "regular": 38,
                "with_chai": 48
              }
            },
            {
              "name": "Bombay Scramble",
              "description": "Lightly spiced Bombay scrambled eggs, with labneh on sourdough toast",
              "price": {
                "regular": 35,
                "with_chai": 45
              }
            },
            {
              "name": "Turkish Eggs",
              "description": "Turkish eggs with whipped labneh on sourdough toast drizzled with chilli oil",
              "price": {
                "regular": 38,
                "with_chai": 48
              }
            },
            {
              "name": "Mushroom Toast",
              "description": "Herby sautéed mushroom on sourdough toast",
              "price": {
                "regular": 35,
                "with_chai": 45
              }
            },
            {
              "name": "Super French Toast",
              "description": "French Brioche Toast with caramelised strawberries and vanilla cream",
              "price": {
                "regular": 35,
                "with_chai": 45
              }
            },
            {
              "name": "Chai Spiced Granola Bowl",
              "description": "Our homemade chai infused healthy granola, with oats, pecans, almonds and coconut, finished with fresh fruits and yoghurt",
              "price": {
                "regular": 35,
                "with_chai": 45
              }
            },
            {
              "name": "Karak Chai",
              "description": "Our signature blend masala Chai with our homemade cardamom cookie",
              "price": {
                "regular": 15
              }
            }
          ]
        }
}

export const mainCourse = {
  "title": "Main Menu",
  "served_time": "Served from 11am to 5pm",
  "categories": [
    {
      "name": "Chaat",
      "items": [
        {
          "name": "Dahi Puri/Pani Puri",
          "description": "Puffed puri filled with tamarind chutney, chickpea and potato topped with sweet yoghurt and sev (V)",
          "price": { "regular": 28 }
        },
        {
          "name": "Avocado Papri Chaat",
          "description": "Crisp flat puri topped with smashed avo, mango relish and tamarind chutney (V)",
          "price": { "regular": 35 }
        },
        {
          "name": "Aloo Tikki Chaat",
          "description": "Spiced potato cutlet, topped on yoghurt, mint sauce and tamarind chutney (V)",
          "price": { "regular": 35 }
        },
        {
          "name": "Smash Samosa Chaat",
          "description": "Smashed Punjabi potato samosa with chutneys and yoghurt (V)",
          "price": { "regular": 25 }
        },
        {
          "name": "Spinach Crunch Chaat",
          "description": "Crunch, crisp spinach with chopped tomato, pomegranate, crispy bombnay sev, finished with our tamarind and sweet yoghurt",
          "price": { "regular": 35 }
        }
      ]
    },
    {
      "name": "Bites",
      "items": [
        {
          "name": "Chicken Mirchi Burger and Fries",
          "description": "Overnight marinaded buttermilk premium chicken breast, dipped in chilli oil and finished with a zingy herby salad, fries and spicy sauce",
          "price": { "regular": 48 }
        },
        {
          "name": "Butter Chicken Fries",
          "description": "Fries topped with our signature butter chicken sauce (V)",
          "price": { "regular": 45 }
        },
        {
          "name": "Chicken Crunch Samosa",
          "description": "Crunchy samosa filled with chicken, mixed capsicum and cheese (3 Pieces)",
          "price": { "regular": 35 }
        },
        {
          "name": "Punjabi Potato Samosa",
          "description": "Handmade pastry filled with spiced potato and pea (4 pieces)",
          "price": { "regular": 30 }
        },
        {
          "name": "Crunch Chicken Sticks",
          "description": "Skewers of our marinaded fried chicken (5 Pieces)",
          "price": { "regular": 35 }
        },
        {
          "name": "Cheese & Fresh Herb Paratha",
          "description": "Crisp paratha with a blend of fresh herbs, green chilli and 3 cheese",
          "price": { "regular": 25 }
        },
        {
          "name": "Masala Fries",
          "description": "Fries topped with our masala seasoning, served with tomato relish chutney (V)",
          "price": { "regular": 20 }
        }
      ]
    },
    {
      "name": "Mains",
      "items": [
        {
          "name": "Boombastic Biryani",
          "description": "Our signature lamb/chicken biryani layered with rice and spices. Served with raita",
          "price": { "regular": 55 }
        },
        {
          "name": "Butter Chicken Rice Bowl",
          "description": "Butter chicken, lightly spiced and served with rice and raita (V)",
          "price": { "regular": 55 }
        },
        {
          "name": "Masala Meat Bowl",
          "description": "Slow cooked lamb with a rich masala served with rice and beets garnish",
          "price": { "regular": 55 }
        },
        {
          "name": "Dhal Makhni Rice Bowl",
          "description": "Overnight cooked black dhal served with rice and raita (V)",
          "price": { "regular": 50 }
        },
        {
          "name": "Daily Special",
          "description": "Ask for details of the daily special each day",
          "price": { "regular": 55 }
        },
        {
          "name": "Dhal Tadka Rice Bowl",
          "description": "Yellow lentils, slow cooked with aromatic spices and side veg of the day",
          "price": { "regular": 50 }
        },
        {
          "name": "Goan Prawn Curry",
          "description": "Lightly spiced prawns in a light coconut milk sauce topped with tempered mustard and Goan spices",
          "price": { "regular": 65 }
        }
      ]
    },
    {
      "name": "Wraps and Toasties",
      "items": [
        {
          "name": "Bombay Cheese Toastie",
          "description": "Mixed paneer and cheese with a mint chutney toasted on artisan sour dough bread",
          "price": {
            "regular": 35,
            "with_fries": 45
          }
        },
        {
          "name": "Cauliflower Wrap",
          "description": "Handmade roomali roti filled with, lightly spiced cauliflower, potato and pea mix",
          "price": { "regular": 40 }
        },
        {
          "name": "Masala Meat Bowl",
          "description": "Handmade roomali roti, filled with pulled masala beef and a consume dipping gravy",
          "price": { "regular": 55 }
        },
        {
          "name": "Chicken Tikka Wrap",
          "description": "Handmade roomali roti, filled with boneless chicken tikka, fresh herbs and cheese",
          "price": {
            "regular": 40,
            "with_fries": 50
          }
        }
      ]
    },
    {
      "name": "Super Salads",
      "items": [
        {
          "name": "Roasted Tomato and Cous Cous Salad",
          "description": "Roasted tomato, chickpea, cucumber, pomegranate, cous cous and feta with a lime and tamarind dressing",
          "price": { "regular": 38 }
        },
        {
          "name": "Thai Fusion Salad",
          "description": "Shredded carrot, red and white cabbage with edamame, fresh herbs and finished with a thai peanut and lime dressing",
          "price": { "regular": 38 }
        },
        {
          "name": "Jaipur Gem Salad",
          "description": "Baby gem lettuce, avocado, spring onion and a creamy tahini sauce",
          "price": { "regular": 38 }
        },
        {
          "name": "Anytime Aubergine Salad",
          "description": "Roasted eggplant, with a green herb yoghurt dressing (V)",
          "price": { "regular": 38 }
        }
      ],
      "add_ons": {
        "description": "Add Protein",
        "price": 15,
        "options": ["Halloumi", "Grilled chicken breast"]
      }
    },
    {
      "name": "Additional Sauces",
      "items": [
        {
          "name": "Spicy Tomato Relish",
          "price": { "regular": 5 }
        },
        {
          "name": "Mint Chutney",
          "price": { "regular": 5 }
        },
        {
          "name": "Minty Yoghurt",
          "price": { "regular": 5 }
        },
        {
          "name": "Sams Spicy Sauce",
          "price": { "regular": 5 }
        },
        {
          "name": "Dynamite Sauce",
          "price": { "regular": 5 }
        },
        {
          "name": "Raita",
          "price": { "regular": 5 }
        }
      ]
    },
    {
      "name": "Desserts and Drinks",
      "items": [
        {
          "name": "Karak Chai (hot)",
          "description": "Our mixed masala chai with an indian mini cookie",
          "price": { "regular": 15 }
        },
        {
          "name": "Karak Chai Dallah (6 cups)",
          "description": "Our mixed masala chai with indian mini cookies (6 Cups) 6 cookies",
          "price": { "regular": 85 }
        },
        {
          "name": "Mango Lassi",
          "description": "Mango and cardamom flavoured drink with yoghurt",
          "price": { "regular": 15 }
        },
        {
          "name": "Voss Water",
          "price": { "regular": 12 }
        },
        {
          "name": "Local Water",
          "price": { "regular": 4 }
        },
        {
          "name": "Cola",
          "price": { "regular": 8 }
        },
        {
          "name": "Lemonade",
          "price": { "regular": 8 }
        }
      ]
    }
  ]
}



export default menu

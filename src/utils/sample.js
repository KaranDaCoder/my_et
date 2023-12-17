const sample = [
  {
    uniqueId: 'MTEvMjUvMjAyMzYuMzlhc2lhbiBtYXJrZXQ=',
    tx_name: 'Asian Market',
    tx_amount: 6.39,
    tx_date: '11/25/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Asian Market - Papaya',
  },
  {
    uniqueId: 'MTEvMjUvMjAyMzI5LjJwb29ybmFuZCBmb29kcw==',
    tx_name: 'Poornand Foods',
    tx_amount: 29.2,
    tx_date: '11/25/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description:
      'Indian Store - EP. Pani puri masala, pani puries, peas etc.',
  },
  {
    uniqueId: 'MTEvMjEvMjAyMzhwYXJrIG1zcA==',
    tx_name: 'Park MSP',
    tx_amount: 8,
    tx_date: '11/21/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'MSP - Airport Parking',
  },
  {
    uniqueId: 'MTEvMjEvMjAyMzQwLjk4ZG9zYSBpbmM=',
    tx_name: 'Dosa Inc',
    tx_amount: 40.98,
    tx_date: '11/21/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Indian Restaurant - Lunch',
  },
  {
    uniqueId: 'MTEvMjIvMjAyMzQ0Ljdjb3N0Y28gd2hvbGVzYWxl',
    tx_name: 'Costco Wholesale',
    tx_amount: 44.7,
    tx_date: '11/22/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Costco, EP - Gas Station',
  },
  {
    uniqueId: 'MTEvMjMvMjAyMzIyLjc1cG9vcm5hbmQgZm9vZHM=',
    tx_name: 'Poornand Foods',
    tx_amount: 22.75,
    tx_date: '11/23/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description:
      'Indian Store - EP : Khaari, Soup Packets, Tea Strainer, etc.',
  },
  {
    uniqueId: 'MTEvMjIvMjAyMzYuNTd3YWxtYXJ0IHN1cGVyY2VudGVy',
    tx_name: 'Walmart Supercenter',
    tx_amount: 6.57,
    tx_date: '11/22/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Banana, Cookies, Skim Milk',
  },
  {
    uniqueId: 'MTEvMjEvMjAyMzEwLjg1d2FsbWFydCBzdXBlcmNlbnRlcg==',
    tx_name: 'Walmart Supercenter',
    tx_amount: 10.85,
    tx_date: '11/21/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Bread, Milk, Mint, etc.',
  },
  {
    uniqueId: 'MTEvMjQvMjAyMzQyLjYxYmVzdCBvZiBpbmRpYQ==',
    tx_name: 'Best Of India',
    tx_amount: 42.61,
    tx_date: '11/24/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Chicken Tikka, Chicken Garlic',
  },
  {
    uniqueId: 'MTEvMjQvMjAyMzM1LjQ3YmVzdCBvZiBpbmRpYQ==',
    tx_name: 'Best Of India',
    tx_amount: 35.47,
    tx_date: '11/24/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'To-Go. Chicken Biryani, Chicken 65',
  },
  {
    uniqueId: 'MTEvMjQvMjAyMzM5LjYzdGV4YXMgdG9ua2EgbGlxdW9y',
    tx_name: 'Texas Tonka Liquor',
    tx_amount: 39.63,
    tx_date: '11/24/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Vodka, Smokes, Mixer',
  },
  {
    uniqueId: 'MTEvMjQvMjAyMzQ2OC40OWFpcmJuYg==',
    tx_name: 'AirBnB',
    tx_amount: 468.49,
    tx_date: '11/24/2023',
    tx_type: 'Online',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'AirBnB - KeyWest from 12/17 to 12/19',
  },
  {
    uniqueId: 'MTEvMjQvMjAyMzMzMy42c3VuIGNvdW50cnkgYWlybGluZXM=',
    tx_name: 'Sun Country Airlines',
    tx_amount: 333.6,
    tx_date: '11/24/2023',
    tx_type: 'Online',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Sun Country flight For Florida from 12/17 to 12/25',
  },
  {
    uniqueId: 'MTEvMjUvMjAyMzMyLjk0YW1jIG1vdmllcw==',
    tx_name: 'AMC Movies',
    tx_amount: 32.94,
    tx_date: '11/25/2023',
    tx_type: 'Online',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Tiger 3 - Online Movie Tickets',
  },
  {
    uniqueId: 'MTEvMjUvMjAyMzIxLjA1bW9jaGlkbw==',
    tx_name: 'Mochido',
    tx_amount: 21.05,
    tx_date: '11/25/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: '6 Mochido Japanese Donuts + cheese key',
  },
  {
    uniqueId: 'MTEvMjIvMjAyMzI2LjExbGVhbm4gY2hpbg==',
    tx_name: 'Leann Chin',
    tx_amount: 26.11,
    tx_date: '11/22/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Chicken Plate + Noodle Bowl + Pot Stickers Dinner',
  },
  {
    uniqueId: 'MTEvMjQvMjAyMzE5Ljk4cHVtYQ==',
    tx_name: 'Puma',
    tx_amount: 19.98,
    tx_date: '11/24/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Black Friday : 2 Ts',
  },
  {
    uniqueId: 'MTEvMjQvMjAyMzY1LjU0Y29sdW1iaWE=',
    tx_name: 'Columbia',
    tx_amount: 65.54,
    tx_date: '11/24/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Black Friday : 6 Shorts',
  },
  {
    uniqueId: 'MTEvMjQvMjAyMzM5Ljk4cHVtYQ==',
    tx_name: 'Puma',
    tx_amount: 39.98,
    tx_date: '11/24/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Black Friday : Hoodie + Ts',
  },
  {
    uniqueId: 'MTEvMjQvMjAyMzU0dW5kZXIgYXJtb3Vy',
    tx_name: 'Under Armour',
    tx_amount: 54,
    tx_date: '11/24/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Black Friday : Beanie + Shoes',
  },
  {
    uniqueId: 'MTEvMjQvMjAyMzE0Ljc1bGV2aSdz',
    tx_name: "Levi's",
    tx_amount: 14.75,
    tx_date: '11/24/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Black Friday : T-Shirt',
  },
  {
    uniqueId: 'MTEvMjQvMjAyMzM3Ljk5Z2FwIG91dGxldA==',
    tx_name: 'Gap Outlet',
    tx_amount: 37.99,
    tx_date: '11/24/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Black Friday : T-Shirts',
  },
  {
    uniqueId: 'MTEvMjYvMjAyMzguMTNkb21pbm9z',
    tx_name: 'Dominos',
    tx_amount: 8.13,
    tx_date: '11/26/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Choco Lava Cake',
  },
  {
    uniqueId: 'MTEvMjcvMjAyMzc5LjE4d2FsbWFydA==',
    tx_name: 'Walmart',
    tx_amount: 79.18,
    tx_date: '11/27/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Blender, printer cartridges, iron etc.',
  },
  {
    uniqueId: 'MTEvMjcvMjAyMzE2LjQ5cG9vcm5hbmFuZCBmb29kcw==',
    tx_name: 'Poornanand Foods',
    tx_amount: 16.49,
    tx_date: '11/27/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Phulka, Naan, mutter paneer ingredients',
  },
  {
    uniqueId: 'MTEvMjcvMjAyMzY1LjFhbWF6b24=',
    tx_name: 'Amazon',
    tx_amount: 65.1,
    tx_date: '11/27/2023',
    tx_type: 'Online',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Akaso Action Camera + memory stick',
  },
  {
    uniqueId: 'MTEvMjkvMjAyMzQ5LjkyZ29kYXZhcmkgLSBpbmRpYW4gcmVzdGF1cmFudCA=',
    tx_name: 'Godavari - Indian Restaurant ',
    tx_amount: 49.92,
    tx_date: '11/29/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Chicken Lollypop, noodles etc.',
  },
  {
    uniqueId: 'MTEvMjkvMjAyMzY5MC4yNWFpcmJuYiAtIG1pYW1p',
    tx_name: 'AirBnB - Miami',
    tx_amount: 690.25,
    tx_date: '11/29/2023',
    tx_type: 'Online',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: '527 NW 40th St, Miami, FL 33127, USA',
  },
  {
    uniqueId: 'MTEvMjgvMjAyMzE3OC44OGNhcGl0YWwgb25lIHRyYXZlbA==',
    tx_name: 'Capital One Travel',
    tx_amount: 178.88,
    tx_date: '11/28/2023',
    tx_type: 'Online',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Rental Car in Florida b/w 12/17 and 12/25',
  },
  {
    uniqueId: 'MTEvMzAvMjAyMzMwLjlkb21pbm9z',
    tx_name: 'Dominos',
    tx_amount: 30.9,
    tx_date: '11/30/2023',
    tx_type: 'Online',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Large Pizza, Med. Veggie Sandwich, Habanero Wings',
  },
  {
    uniqueId: 'MTEvMzAvMjAyMzQuMjN3YWxtYXJ0IHN1cGVyY2VudGVy',
    tx_name: 'Walmart Supercenter',
    tx_amount: 4.23,
    tx_date: '11/30/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Whole Milk and Coke',
  },
  {
    uniqueId: 'MTIvMDEvMjAyMzE4Ljg2ZWRlbiBwcmFpcmllIGxpcXVvcg==',
    tx_name: 'Eden Prairie Liquor',
    tx_amount: 18.86,
    tx_date: '12/01/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Smirnoff Green Apple - 750ml',
  },
  {
    uniqueId: 'MTIvMDEvMjAyMzM0LjczZ29kYXZhcmkgLSBpbmRpYW4gcmVzdGF1cmFudA==',
    tx_name: 'Godavari - Indian Restaurant',
    tx_amount: 34.73,
    tx_date: '12/01/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Chicken Manchurian and 777 - Pick Up',
  },
  {
    uniqueId: 'MTIvMDEvMjAyMzE0LjY0aW5kaWEgbWFya2V0',
    tx_name: 'India Market',
    tx_amount: 14.64,
    tx_date: '12/01/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Green Chillies and Bhungra*2',
  },
  {
    uniqueId: 'MTIvMDIvMjAyMzIyZG9zYSBpbmMu',
    tx_name: 'Dosa Inc.',
    tx_amount: 22,
    tx_date: '12/02/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Masala Idly and Sambhar Vada',
  },
  {
    uniqueId: 'MTIvMDMvMjAyMzI2LjEybmFmIG5hZiBncmlsbA==',
    tx_name: 'Naf Naf Grill',
    tx_amount: 26.12,
    tx_date: '12/03/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'BYOB abd Chick. Shwarma Pita',
  },
  {
    uniqueId: 'MTIvMDMvMjAyMzE0LjA1bmFmIG5hZiBncmlsbA==',
    tx_name: 'Naf Naf Grill',
    tx_amount: 14.05,
    tx_date: '12/03/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Falafel Bowl & Spicy Hummus',
  },
  {
    uniqueId: 'MTIvMDMvMjAyMzQyLjM0d2FsbWFydCBzdXBlcmNlbnRlcg==',
    tx_name: 'Walmart Supercenter',
    tx_amount: 42.34,
    tx_date: '12/03/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Asparagus, Fruits, Salad Kit, Hand Soap',
  },
  {
    uniqueId: 'MTIvMDUvMjAyMzQxLjQzcG9vcm5hbmFuZCBmb29kcw==',
    tx_name: 'Poornanand Foods',
    tx_amount: 41.43,
    tx_date: '12/05/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Curry Leaves, Cilantro, Phulkas, Ghee, GGP, Dahi, etc.',
  },
  {
    uniqueId: 'MTIvMDYvMjAyMzE4LjA4aW5kaWEgbWFya2V0',
    tx_name: 'India Market',
    tx_amount: 18.08,
    tx_date: '12/06/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Onions, ParleG, Dettol, ENO',
  },
  {
    uniqueId: 'MTIvMDYvMjAyMzE3LjM0aW5kaWEgbWFya2V0IC0gZGluZSBpbg==',
    tx_name: 'India Market - Dine In',
    tx_amount: 17.34,
    tx_date: '12/06/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Motichoor Ladoo, Samosa and Punugulu',
  },
  {
    uniqueId: 'MTIvMDYvMjAyMzMyLjU1ZWRlbiB0b2JhY2NvICYgdmFwZQ==',
    tx_name: 'Eden Tobacco & Vape',
    tx_amount: 32.55,
    tx_date: '12/06/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'EJuice - Silver Back - BooBoo',
  },
  {
    uniqueId: 'MTIvMDgvMjAyMzI0LjM1dGFjbyBiZWxs',
    tx_name: 'Taco Bell',
    tx_amount: 24.35,
    tx_date: '12/08/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description:
      'Late Night - Nacho Fries, Chicken Chalupa, Spicy Potato Tacos',
  },
  {
    uniqueId: 'MTIvMTAvMjAyMzU1Z3JlYXQgY2xpcHM=',
    tx_name: 'Great Clips',
    tx_amount: 55,
    tx_date: '12/10/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Shraddha & Karan Hair Cuts',
  },
  {
    uniqueId: 'MTIvMDkvMjAyMzUuOTllZGVuIHByYWlyaWUgLSBmb29kICYgZnVlbA==',
    tx_name: 'Eden Prairie - Food & Fuel',
    tx_amount: 5.99,
    tx_date: '12/09/2023',
    tx_type: 'In Store',
    tx_card_used: 'Apple Card Ending 3735',
    tx_status: 'paid',
    tx_description: 'Whole Milk',
  },
  {
    uniqueId: 'MTIvMDkvMjAyMzEwZWRlbiBwcmFpcmllIC0gZm9vZCAmIGZ1ZWw=',
    tx_name: 'Eden Prairie - Food & Fuel',
    tx_amount: 10,
    tx_date: '12/09/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: '$10 Gas at $2.97/Gallon',
  },
  {
    uniqueId: 'MTIvMDkvMjAyMzI5LjM2bm9vZGxlcyAmIGNvbXBhbnk=',
    tx_name: 'Noodles & Company',
    tx_amount: 29.36,
    tx_date: '12/09/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description:
      'Chicken Parmesan, Japanese Pan Noodles, Garlic Cheesy Bread',
  },
  {
    uniqueId: 'MTIvMDkvMjAyMzEwNC42MXRvbW15IGhpbGZpZ2Vy',
    tx_name: 'Tommy Hilfiger',
    tx_amount: 104.61,
    tx_date: '12/09/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Jogger, Polo T-shirts, etc for Karan ',
  },
  {
    uniqueId: 'MTIvMDkvMjAyMzQ5Ljk0ZXhwcmVzcyBmYWN0b3J5',
    tx_name: 'Express Factory',
    tx_amount: 49.94,
    tx_date: '12/09/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Hawain Shirts for Karan ',
  },
  {
    uniqueId: 'MTIvMDkvMjAyMzUyLjQ4YW1jIG1vdmllcw==',
    tx_name: 'AMC Movies',
    tx_amount: 52.48,
    tx_date: '12/09/2023',
    tx_type: 'In Store',
    tx_card_used: 'Apple Card Ending 3735',
    tx_status: 'paid',
    tx_description: 'Swapnil, Karan & Shraddha - Animal - Online Tickets ',
  },
  {
    uniqueId: 'MTIvMDkvMjAyMzI4LjE3ZG9taW5vcyBwaXp6YQ==',
    tx_name: 'Dominos Pizza',
    tx_amount: 28.17,
    tx_date: '12/09/2023',
    tx_type: 'Online',
    tx_card_used: 'Apple Card Ending 3735',
    tx_status: 'paid',
    tx_description:
      'LG Thin Pizz (Half n Half), 8-Piece Habanero Wings, Coke*2',
  },
  {
    uniqueId: 'MTIvMTAvMjAyMzI3LjV2YWx2b2xpbmUgb2lsIGNoYW5nZQ==',
    tx_name: 'Valvoline Oil Change',
    tx_amount: 27.5,
    tx_date: '12/10/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Periodic Oil Change for Mazda',
  },
  {
    uniqueId: 'MTIvMTAvMjAyMzI3Ljc1dGF6YSBtZWRpdGVycmFuZWFu',
    tx_name: 'Taza Mediterranean',
    tx_amount: 27.75,
    tx_date: '12/10/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Chicken and Falafel Bowl',
  },
  {
    uniqueId: 'MTIvMTEvMjAyMzEzLjU5YWxkaQ==',
    tx_name: 'ALDI',
    tx_amount: 13.59,
    tx_date: '12/11/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Sugar, Potatoes, Green Peppers, Coke, Cauliflower',
  },
  {
    uniqueId: 'MTIvMTEvMjAyMzEwLjA2ZWRlbiBwcmFpcmllIC0gZm9vZCAmIGZ1ZWw=',
    tx_name: 'Eden Prairie - Food & Fuel',
    tx_amount: 10.06,
    tx_date: '12/11/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: '3.77 Gallons @ 2.97/gallon',
  },
  {
    uniqueId: 'MTIvMTEvMjAyMzEwLjU5cG9vcm5hbmFuZCBmb29kcw==',
    tx_name: 'Poornanand Foods',
    tx_amount: 10.59,
    tx_date: '12/11/2023',
    tx_type: 'In Store',
    tx_card_used: 'Cap One Ending 3340',
    tx_status: 'paid',
    tx_description: 'Pao Bhaaji Buns, Paao Bhaaji Masala, Goodday, etc.',
  }
];


export default sample;
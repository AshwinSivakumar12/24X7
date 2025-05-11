import {
  FaSwimmingPool,
  FaWifi,
  FaParking,
  FaUtensils,
  FaMapMarkerAlt,
  FaStar,
  FaRegStar,
  FaCalendarAlt,
  FaUserFriends,
} from "react-icons/fa";
import { FiCheckCircle } from "react-icons/fi";
import React from "react";
import { useParams } from "react-router-dom";

const PackageDetailsPage = () => {
  const { id } = useParams(); // This will get the :id from the URL
  const packageId = parseInt(id);

  const packages = [
      {
        id: 1,
        title: "Luxury Phuket Beach Escape",
        location: "Phuket, Thailand",
        images: [
          "https://source.unsplash.com/random/800x600/?phuket-beach",
          "https://source.unsplash.com/random/800x600/?phuket-resort",
          "https://source.unsplash.com/random/800x600/?phuket-pool",
          "https://source.unsplash.com/random/800x600/?phuket-sunset",
        ],
        rating: 4.8,
        reviewCount: 124,
        duration: "5 days",
        persons: 2,
        price: 899,
        oldPrice: 1099,
        discount: "18% OFF",
        description:
          "Experience ultimate luxury at our beachfront resort in Phuket with private pool villa and daily spa credits.",
        category: "beach",
        popular: true,
        highlights: [
          "Private beach access",
          "Daily breakfast buffet",
          "Airport transfers included",
          "Free spa credit ($100 per day)",
          "Sunset cocktail hour",
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Relaxation",
            description:
              "Airport pickup and check-in to your luxury villa. Evening at leisure to enjoy resort amenities.",
          },
          {
            day: 2,
            title: "Island Exploration",
            description:
              "Private boat tour to nearby islands with snorkeling and lunch included.",
          },
          {
            day: 3,
            title: "Spa Day",
            description:
              "Full day to enjoy your spa credit with optional additional treatments.",
          },
          {
            day: 4,
            title: "Cultural Experience",
            description:
              "Guided tour of Phuket Old Town with traditional dinner.",
          },
          {
            day: 5,
            title: "Departure",
            description:
              "Leisurely morning with late checkout followed by airport transfer.",
          },
        ],
        amenities: [
          { icon: "pool", name: "Infinity Pool" },
          { icon: "wifi", name: "Free WiFi" },
          { icon: "parking", name: "Parking" },
          { icon: "restaurant", name: "Restaurant" },
          { icon: "front-desk", name: "24/7 Front Desk" },
        ],
        popularAttractions: [
          "Patong Beach",
          "Big Buddha Phuket",
          "Phi Phi Islands",
          "Phang Nga Bay",
        ],
      },
      {
        id: 2,
        title: "Bali Cultural Retreat",
        location: "Ubud, Indonesia",
        images: [
          "https://source.unsplash.com/random/800x600/?bali-temple",
          "https://source.unsplash.com/random/800x600/?bali-villa",
          "https://source.unsplash.com/random/800x600/?bali-rice-terrace",
          "https://source.unsplash.com/random/800x600/?bali-waterfall",
        ],
        rating: 4.9,
        reviewCount: 156,
        duration: "7 days",
        persons: 2,
        price: 1199,
        oldPrice: 1399,
        discount: "14% OFF",
        description:
          "Immerse yourself in Balinese culture with daily yoga, traditional ceremonies, and jungle villa accommodation.",
        category: "culture",
        popular: true,
        highlights: [
          "Daily yoga sessions",
          "Balinese cooking class",
          "Sacred temple visits",
          "Rice field trekking",
          "Traditional dance performance",
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Orientation",
            description:
              "Airport transfer and resort check-in with welcome ceremony.",
          },
          {
            day: 2,
            title: "Ubud Exploration",
            description:
              "Visit Monkey Forest, Art Market and traditional craft villages.",
          },
          {
            day: 3,
            title: "Cultural Immersion",
            description:
              "Temple visit, offering making workshop, and traditional dance show.",
          },
          {
            day: 4,
            title: "Countryside Tour",
            description:
              "Rice terrace walk, coffee plantation visit, and waterfall excursion.",
          },
          {
            day: 5,
            title: "Free Day",
            description: "Optional activities or relaxation at the resort.",
          },
          {
            day: 6,
            title: "Beach Day",
            description: "Trip to Seminyak Beach with sunset dinner.",
          },
          {
            day: 7,
            title: "Departure",
            description: "Morning at leisure before airport transfer.",
          },
        ],
        amenities: [
          { icon: "yoga", name: "Yoga Pavilion" },
          { icon: "spa", name: "Spa Center" },
          { icon: "restaurant", name: "Organic Restaurant" },
          { icon: "bicycle", name: "Bicycle Rental" },
          { icon: "tour", name: "Tour Desk" },
        ],
        popularAttractions: [
          "Tegallalang Rice Terraces",
          "Sacred Monkey Forest",
          "Tirta Empul Temple",
          "Mount Batur",
        ],
      },
      {
        id: 3,
        title: "Malaysian Adventure",
        location: "Langkawi, Malaysia",
        images: [
          "https://source.unsplash.com/random/800x600/?langkawi",
          "https://source.unsplash.com/random/800x600/?malaysia-beach",
          "https://source.unsplash.com/random/800x600/?cable-car",
          "https://source.unsplash.com/random/800x600/?island-hopping",
        ],
        rating: 4.7,
        reviewCount: 98,
        duration: "4 days",
        persons: 2,
        price: 749,
        oldPrice: 899,
        discount: "17% OFF",
        description:
          "Island hopping adventure with luxury yacht charter and cable car experience included.",
        category: "adventure",
        highlights: [
          "Private yacht day trip",
          "Duty-free shopping",
          "SkyCab cable car ride",
          "Island hopping tour",
          "Mangrove kayaking",
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & Orientation",
            description:
              "Airport transfer and hotel check-in with welcome briefing.",
          },
          {
            day: 2,
            title: "Island Hopping",
            description:
              "Full-day boat tour to nearby islands with snorkeling and beach picnic.",
          },
          {
            day: 3,
            title: "SkyCab Adventure",
            description:
              "Cable car ride to Mount Mat Cincang with sky bridge walk.",
          },
          {
            day: 4,
            title: "Departure",
            description: "Morning at leisure before airport transfer.",
          },
        ],
        amenities: [
          { icon: "boat", name: "Boat Charter" },
          { icon: "guide", name: "English Guide" },
          { icon: "breakfast", name: "Daily Breakfast" },
          { icon: "transfer", name: "Airport Transfers" },
          { icon: "snorkel", name: "Snorkeling Gear" },
        ],
        popularAttractions: [
          "Langkawi Sky Bridge",
          "Cenang Beach",
          "Kilim Geoforest Park",
          "Eagle Square",
        ],
      },
      {
        id: 4,
        title: "Premium Thailand Experience",
        location: "Bangkok & Phuket, Thailand",
        images: [
          "https://images.unsplash.com/photo-1528181304800-259b08848526",
          "https://source.unsplash.com/random/800x600/?thailand-temple",
          "https://source.unsplash.com/random/800x600/?bangkok",
          "https://source.unsplash.com/random/800x600/?thai-food",
        ],
        rating: 4.8,
        reviewCount: 1245,
        duration: "5 days",
        persons: 2,
        price: 999,
        oldPrice: 1299,
        discount: "23% OFF",
        description:
          "Explore the best of Thailand with this premium package including cultural tours and beach relaxation.",
        category: "beach",
        popular: true,
        highlights: [
          "Private beaches in Phuket",
          "Cultural tours of Bangkok temples",
          "Island hopping in Krabi",
          "Floating markets experience",
        ],
        itinerary: [
          {
            day: 1,
            title: "Bangkok Arrival",
            description:
              "Airport transfer and check-in to luxury hotel. Evening at leisure.",
          },
          {
            day: 2,
            title: "City Tour",
            description:
              "Visit Grand Palace, Wat Pho, and enjoy a river cruise dinner.",
          },
          {
            day: 3,
            title: "Fly to Phuket",
            description: "Morning flight to Phuket and beach resort check-in.",
          },
          {
            day: 4,
            title: "Island Excursion",
            description: "Full-day Phi Phi Islands tour with snorkeling.",
          },
          {
            day: 5,
            title: "Departure",
            description: "Relax at resort before airport transfer.",
          },
        ],
        amenities: [
          { icon: "flight", name: "Domestic Flight" },
          { icon: "guide", name: "English Guide" },
          { icon: "meal", name: "Daily Breakfast" },
          { icon: "transfer", name: "All Transfers" },
          { icon: "wifi", name: "Free WiFi" },
        ],
        popularAttractions: [
          "Grand Palace, Bangkok",
          "Phi Phi Islands",
          "Chiang Mai Night Bazaar",
        ],
      },
      {
        id: 5,
        title: "Japanese Cultural Odyssey",
        location: "Tokyo & Kyoto, Japan",
        images: [
          "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
          "https://source.unsplash.com/random/800x600/?tokyo",
          "https://source.unsplash.com/random/800x600/?kyoto",
          "https://source.unsplash.com/random/800x600/?japanese-food",
        ],
        rating: 4.8,
        reviewCount: 1850,
        duration: "8 days",
        persons: 2,
        price: 2499,
        oldPrice: 2999,
        discount: "17% OFF",
        description:
          "Experience traditional and modern Japan with this comprehensive cultural tour.",
        category: "culture",
        popular: true,
        highlights: [
          "Tokyo Skytree experience",
          "Kyoto traditional tea ceremony",
          "Osaka street food tour",
          "Mount Fuji views",
        ],
        itinerary: [
          {
            day: 1,
            title: "Tokyo Arrival",
            description:
              "Airport transfer and hotel check-in. Evening at leisure.",
          },
          {
            day: 2,
            title: "Tokyo Exploration",
            description: "Visit Asakusa, Akihabara, and Shibuya Crossing.",
          },
          {
            day: 3,
            title: "Day Trip to Hakone",
            description: "Mount Fuji views and hot spring experience.",
          },
          {
            day: 4,
            title: "Bullet Train to Kyoto",
            description: "Travel to Kyoto and visit Fushimi Inari Shrine.",
          },
          {
            day: 5,
            title: "Kyoto Cultural Day",
            description: "Tea ceremony, Golden Pavilion, and Gion district.",
          },
          {
            day: 6,
            title: "Nara Excursion",
            description:
              "Day trip to Nara to see Todai-ji Temple and deer park.",
          },
          {
            day: 7,
            title: "Osaka Day Trip",
            description: "Explore Osaka Castle and Dotonbori street food.",
          },
          {
            day: 8,
            title: "Departure",
            description: "Transfer to Kansai Airport for departure.",
          },
        ],
        amenities: [
          { icon: "train", name: "Bullet Train" },
          { icon: "guide", name: "Bilingual Guide" },
          { icon: "meal", name: "Daily Breakfast" },
          { icon: "wifi", name: "Pocket WiFi" },
          { icon: "hotel", name: "4-Star Hotels" },
        ],
        popularAttractions: [
          "Fushimi Inari Shrine",
          "Hiroshima Peace Memorial",
          "Nara Deer Park",
        ],
      },
      {
        id: 6,
        title: "Australian Adventure",
        location: "Sydney & Melbourne, Australia",
        images: [
          "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9",
          "https://source.unsplash.com/random/800x600/?sydney",
          "https://source.unsplash.com/random/800x600/?melbourne",
          "https://source.unsplash.com/random/800x600/?great-barrier-reef",
        ],
        rating: 4.9,
        reviewCount: 1560,
        duration: "7 days",
        persons: 2,
        price: 1999,
        oldPrice: 2599,
        discount: "23% OFF",
        description:
          "Explore Australia's iconic cities with optional Great Barrier Reef extension.",
        category: "adventure",
        popular: true,
        highlights: [
          "Sydney Opera House tour",
          "Great Ocean Road drive",
          "Great Barrier Reef snorkeling",
          "Kangaroo Island wildlife",
        ],
        itinerary: [
          {
            day: 1,
            title: "Sydney Arrival",
            description:
              "Airport transfer and hotel check-in. Evening harbor cruise.",
          },
          {
            day: 2,
            title: "Sydney Sights",
            description: "Opera House tour, Bondi Beach, and Harbour Bridge.",
          },
          {
            day: 3,
            title: "Blue Mountains",
            description: "Day trip to Blue Mountains with wildlife park visit.",
          },
          {
            day: 4,
            title: "Fly to Melbourne",
            description: "Morning flight and afternoon city tour.",
          },
          {
            day: 5,
            title: "Great Ocean Road",
            description:
              "Full-day tour along Australia's most scenic coastal drive.",
          },
          {
            day: 6,
            title: "Optional: Reef Trip",
            description: "Fly to Cairns for Great Barrier Reef experience.",
          },
          {
            day: 7,
            title: "Departure",
            description: "Transfer to airport for return flight.",
          },
        ],
        amenities: [
          { icon: "flight", name: "Domestic Flights" },
          { icon: "guide", name: "Local Guides" },
          { icon: "breakfast", name: "Daily Breakfast" },
          { icon: "transfer", name: "All Transfers" },
          { icon: "snorkel", name: "Reef Equipment" },
        ],
        popularAttractions: [
          "Bondi Beach",
          "Uluru (Ayers Rock)",
          "Gold Coast theme parks",
        ],
      },
      {
        id: 7,
        title: "Maldives Paradise Retreat",
        location: "North Male Atoll, Maldives",
        images: [
          "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
          "https://source.unsplash.com/random/800x600/?maldives-resort",
          "https://source.unsplash.com/random/800x600/?overwater-bungalow",
          "https://source.unsplash.com/random/800x600/?maldives-snorkeling",
        ],
        rating: 4.9,
        reviewCount: 2100,
        duration: "5 days",
        persons: 2,
        price: 2999,
        oldPrice: 3999,
        discount: "25% OFF",
        description:
          "All-inclusive luxury water villa stay in the Maldives with private beach access.",
        category: "luxury",
        popular: true,
        highlights: [
          "Private overwater villa",
          "Coral reef snorkeling",
          "Sunset dolphin cruise",
          "Spa with ocean views",
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival",
            description: "Speedboat transfer to resort and villa check-in.",
          },
          {
            day: 2,
            title: "Island Relaxation",
            description:
              "Full day to enjoy resort amenities and private beach.",
          },
          {
            day: 3,
            title: "Snorkeling Adventure",
            description: "Guided reef snorkeling trip with marine biologist.",
          },
          {
            day: 4,
            title: "Dolphin Cruise",
            description: "Sunset cruise with dolphin spotting and champagne.",
          },
          {
            day: 5,
            title: "Departure",
            description: "Morning at leisure before transfer to airport.",
          },
        ],
        amenities: [
          { icon: "villa", name: "Overwater Villa" },
          { icon: "meal", name: "All Meals Included" },
          { icon: "spa", name: "Spa Credit" },
          { icon: "transfer", name: "Speedboat Transfer" },
          { icon: "activities", name: "Daily Activities" },
        ],
        popularAttractions: [
          "Male Fish Market",
          "Bioluminescent Beach",
          "Underwater Restaurant",
        ],
      },
      {
        id: 9,
        title: "Dubai Luxury Experience",
        location: "Dubai, UAE",
        images: [
          "https://source.unsplash.com/random/800x600/?dubai",
          "https://source.unsplash.com/random/800x600/?burj-khalifa",
          "https://source.unsplash.com/random/800x600/?desert-safari",
          "https://source.unsplash.com/random/800x600/?palm-jumeirah",
          "https://source.unsplash.com/random/800x600/?dubai-mall",
        ],
        rating: 4.5,
        reviewCount: 890,
        duration: "4 days",
        persons: 2,
        price: 1499,
        oldPrice: 1899,
        discount: "21% OFF",
        description:
          "Ultimate luxury in Dubai with Burj Khalifa access, desert safari, and premium shopping experiences in the world's most glamorous city.",
        category: "luxury",
        season: "Winter",
        popular: true,
        highlights: [
          "Burj Khalifa At The Top (124th floor access)",
          "Premium desert safari with VIP tent and gourmet BBQ",
          "Private shopping assistant at Dubai Mall",
          "Palm Jumeirah monorail with Atlantis view",
          "Gold Souk visit with jewelry presentation",
          "Dhow cruise dinner with fountain show view",
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival & City Orientation",
            description:
              "Private limousine transfer to Burj Al Arab hotel. Evening at leisure with complimentary access to Wild Wadi Waterpark.",
          },
          {
            day: 2,
            title: "Iconic Dubai Experience",
            description:
              "Morning at Burj Khalifa (skip-the-line tickets). Afternoon shopping at Dubai Mall with personal shopper. Evening fountain show and dinner at Atmosphere restaurant (122nd floor).",
          },
          {
            day: 3,
            title: "Desert & Culture",
            description:
              "Morning heritage district tour. Afternoon premium desert safari with falconry show, camel rides, and starlit gourmet dinner at luxury Bedouin camp.",
          },
          {
            day: 4,
            title: "Modern Wonders",
            description:
              "Palm Jumeirah monorail ride. Visit to Atlantis The Palm. Optional helicopter tour (extra cost). Evening departure transfer with Dubai skyline farewell.",
          },
        ],
        amenities: [
          { icon: "hotel", name: "7-Star Accommodation" },
          { icon: "limo", name: "Luxury Transfers" },
          { icon: "meal", name: "Daily Breakfast + 2 Dinners" },
          { icon: "guide", name: "VIP Guide Service" },
          { icon: "fast-track", name: "Priority Access" },
          { icon: "wifi", name: "Pocket WiFi" },
          { icon: "spa", name: "Spa Credit ($100)" },
        ],
        popularAttractions: [
          "Burj Khalifa (World's Tallest Building)",
          "Dubai Mall (Largest Shopping Complex)",
          "Palm Jumeirah (Man-Made Island)",
          "Dubai Fountain (World's Largest Dancing Fountain)",
          "Gold Souk (Traditional Gold Market)",
        ],
        inclusions: [
          "3 nights at Burj Al Arab in Deluxe Suite",
          "All entrance fees to mentioned attractions",
          "Private transfers in luxury vehicle",
          "English-speaking guide for all tours",
          "All taxes and service charges",
        ],
        exclusions: [
          "International flights",
          "Travel insurance",
          "Optional activities",
          "Personal expenses",
          "Visa fees",
        ],
        bookingNotes: [
          "Minimum 30 days advance booking required",
          "Dress code applies for some venues",
          "Ramadan timings may affect some activities",
          "5% tourism fee applies at checkout",
        ],
      },
      {
        id: 10,
        title: "French Riviera Escape",
        location: "Nice & Monaco, France",
        images: [
          "https://source.unsplash.com/random/800x600/?french-riviera",
          "https://source.unsplash.com/random/800x600/?monaco",
          "https://source.unsplash.com/random/800x600/?cannes",
          "https://source.unsplash.com/random/800x600/?saint-tropez",
        ],
        rating: 4.6,
        reviewCount: 1320,
        duration: "7 days",
        persons: 2,
        price: 2299,
        oldPrice: 2799,
        discount: "18% OFF",
        description:
          "Experience the glamour of the French Riviera with stays in Nice and Monaco, including a day trip to Cannes.",
        category: "luxury",
        highlights: [
          "Promenade des Anglais",
          "Monaco Grand Prix circuit tour",
          "Cannes Film Festival palace",
          "Saint-Tropez day trip",
          "Perfume factory visit",
        ],
        itinerary: [
          {
            day: 1,
            title: "Nice Arrival",
            description: "Airport transfer and check-in to beachfront hotel.",
          },
          {
            day: 2,
            title: "Nice Exploration",
            description: "Old Town walking tour and Castle Hill visit.",
          },
          {
            day: 3,
            title: "Monaco Day Trip",
            description:
              "Prince's Palace, Oceanographic Museum, and Casino Square.",
          },
          {
            day: 4,
            title: "Cannes & Antibes",
            description: "Walk the Croisette and visit Picasso Museum.",
          },
          {
            day: 5,
            title: "Saint-Tropez",
            description: "Boat trip to this glamorous coastal town.",
          },
          {
            day: 6,
            title: "Free Day",
            description: "Optional activities or relaxation.",
          },
          {
            day: 7,
            title: "Departure",
            description: "Transfer to Nice airport.",
          },
        ],
        amenities: [
          { icon: "hotel", name: "4-Star Hotels" },
          { icon: "train", name: "Regional Train Pass" },
          { icon: "meal", name: "Daily Breakfast" },
          { icon: "guide", name: "Local Guides" },
          { icon: "boat", name: "Boat Transfers" },
        ],
        popularAttractions: [
          "Palace of Versailles",
          "Eiffel Tower",
          "Provence Lavender Fields",
        ],
      },
      {
        id: 11,
        title: "New Zealand Adventure",
        location: "Queenstown, New Zealand",
        images: [
          "https://source.unsplash.com/random/800x600/?queenstown",
          "https://source.unsplash.com/random/800x600/?milford-sound",
          "https://source.unsplash.com/random/800x600/?hobbiton",
          "https://source.unsplash.com/random/800x600/?new-zealand",
        ],
        rating: 4.8,
        reviewCount: 1670,
        duration: "9 days",
        persons: 2,
        price: 2999,
        oldPrice: 3799,
        discount: "21% OFF",
        description:
          "Thrilling adventures across New Zealand's South Island with Milford Sound cruise and bungee jumping.",
        category: "adventure",
        highlights: [
          "Milford Sound cruise",
          "Queenstown bungee jumping",
          "Hobbiton Movie Set",
          "Waitomo glowworm caves",
          "Franz Josef Glacier",
        ],
        itinerary: [
          {
            day: 1,
            title: "Auckland Arrival",
            description: "City orientation tour and Sky Tower visit.",
          },
          {
            day: 2,
            title: "Hobbiton Tour",
            description: "Guided tour of the Lord of the Rings movie set.",
          },
          {
            day: 3,
            title: "Fly to Queenstown",
            description: "Scenic flight and check-in to adventure lodge.",
          },
          {
            day: 4,
            title: "Adventure Day",
            description: "Choose from bungee, jet boat, or skydiving.",
          },
          {
            day: 5,
            title: "Milford Sound",
            description: "Full-day excursion with nature cruise.",
          },
          {
            day: 6,
            title: "Wanaka & Glaciers",
            description: "Travel to Franz Josef with stops at Lake Wanaka.",
          },
          {
            day: 7,
            title: "Christchurch",
            description: "TranzAlpine train journey across the Alps.",
          },
          {
            day: 8,
            title: "Free Day",
            description: "Optional whale watching or city exploration.",
          },
          {
            day: 9,
            title: "Departure",
            description: "Transfer to Christchurch airport.",
          },
        ],
        amenities: [
          { icon: "flight", name: "Domestic Flights" },
          { icon: "train", name: "TranzAlpine Train" },
          { icon: "guide", name: "Adventure Guides" },
          { icon: "activities", name: "Adventure Credits" },
          { icon: "transfer", name: "All Transfers" },
        ],
        popularAttractions: [
          "Aoraki/Mount Cook",
          "Rotorua Geothermal Parks",
          "Abel Tasman National Park",
        ],
      },
      {
        id: 12,
        title: "Italian Dream Vacation",
        location: "Rome, Florence & Venice",
        images: [
          "https://source.unsplash.com/random/800x600/?rome",
          "https://source.unsplash.com/random/800x600/?florence",
          "https://source.unsplash.com/random/800x600/?venice",
          "https://source.unsplash.com/random/800x600/?tuscany",
        ],
        rating: 4.7,
        reviewCount: 1540,
        duration: "8 days",
        persons: 2,
        price: 2399,
        oldPrice: 2999,
        discount: "20% OFF",
        description:
          "Classic Italy tour covering Rome's ancient wonders, Florence's art, and Venice's canals with gondola ride.",
        category: "culture",
        highlights: [
          "Colosseum underground tour",
          "Vatican Museums & Sistine Chapel",
          "Florence Duomo climb",
          "Venetian gondola ride",
          "Tuscan wine tasting",
        ],
        itinerary: [
          {
            day: 1,
            title: "Rome Arrival",
            description: "Airport transfer and evening walking tour.",
          },
          {
            day: 2,
            title: "Ancient Rome",
            description: "Colosseum, Roman Forum, and Pantheon visit.",
          },
          {
            day: 3,
            title: "Vatican City",
            description: "Full-day Vatican tour with Sistine Chapel.",
          },
          {
            day: 4,
            title: "Train to Florence",
            description: "Uffizi Gallery and Ponte Vecchio exploration.",
          },
          {
            day: 5,
            title: "Tuscany Day Trip",
            description: "Wine tasting in Chianti region.",
          },
          {
            day: 6,
            title: "Venice Arrival",
            description: "Gondola ride and St. Mark's Basilica.",
          },
          {
            day: 7,
            title: "Venetian Islands",
            description: "Murano and Burano islands tour.",
          },
          {
            day: 8,
            title: "Departure",
            description: "Water taxi to Venice airport.",
          },
        ],
        amenities: [
          { icon: "train", name: "High-Speed Train" },
          { icon: "guide", name: "Local Experts" },
          { icon: "meal", name: "Daily Breakfast" },
          { icon: "tickets", name: "All Entry Fees" },
          { icon: "hotel", name: "Central Hotels" },
        ],
        popularAttractions: [
          "Leaning Tower of Pisa",
          "Amalfi Coast",
          "Cinque Terre Villages",
        ],
      },
      {
        id: 13,
        title: "Mauritius Island Paradise",
        location: "Mauritius",
        images: [
          "https://source.unsplash.com/random/800x600/?mauritius",
          "https://source.unsplash.com/random/800x600/?trou-aux-biches",
          "https://source.unsplash.com/random/800x600/?seven-coloured-earth",
          "https://source.unsplash.com/random/800x600/?mauritius-waterfall",
        ],
        rating: 4.9,
        reviewCount: 1980,
        duration: "6 days",
        persons: 2,
        price: 1899,
        oldPrice: 2499,
        discount: "24% OFF",
        description:
          "All-inclusive luxury beach resort with water sports, island tours, and romantic sunset dinners.",
        category: "beach",
        highlights: [
          "Private beach villa",
          "Seven Colored Earths",
          "Underwater waterfall flight",
          "Casela Nature Park",
          "Chamarel rum tasting",
        ],
        itinerary: [
          {
            day: 1,
            title: "Arrival",
            description: "Airport transfer and resort check-in.",
          },
          {
            day: 2,
            title: "Island Tour",
            description: "Full-day tour of Mauritius highlights.",
          },
          {
            day: 3,
            title: "Water Sports",
            description: "Snorkeling, kayaking, and glass-bottom boat ride.",
          },
          {
            day: 4,
            title: "Free Day",
            description: "Optional spa treatments or relaxation.",
          },
          {
            day: 5,
            title: "Catamaran Cruise",
            description: "Day trip to Île aux Cerfs with BBQ lunch.",
          },
          {
            day: 6,
            title: "Departure",
            description: "Transfer to airport for return flight.",
          },
        ],
        amenities: [
          { icon: "villa", name: "Beachfront Villa" },
          { icon: "meal", name: "All-Inclusive Dining" },
          { icon: "activities", name: "Water Sports" },
          { icon: "spa", name: "Spa Credit" },
          { icon: "transfer", name: "Airport Transfers" },
        ],
        popularAttractions: [
          "Black River Gorges",
          "Ile aux Cerfs",
          "Port Louis Market",
        ],
      },
      {
        id: 14,
        title: "Canadian Rockies Adventure",
        location: "Banff & Jasper, Canada",
        images: [
          "https://source.unsplash.com/random/800x600/?banff",
          "https://source.unsplash.com/random/800x600/?lake-louise",
          "https://source.unsplash.com/random/800x600/?columbia-icefield",
          "https://source.unsplash.com/random/800x600/?moraine-lake",
        ],
        rating: 4.8,
        reviewCount: 1420,
        duration: "7 days",
        persons: 2,
        price: 2499,
        oldPrice: 3199,
        discount: "22% OFF",
        description:
          "Spectacular mountain scenery, glacial lakes, and wildlife spotting in Canada's premier national parks.",
        category: "mountain",
        highlights: [
          "Lake Louise canoeing",
          "Columbia Icefield Skywalk",
          "Banff Gondola ride",
          "Wildlife safari",
          "Johnston Canyon hike",
        ],
        itinerary: [
          {
            day: 1,
            title: "Calgary Arrival",
            description: "Transfer to Banff and orientation walk.",
          },
          {
            day: 2,
            title: "Banff Exploration",
            description: "Sulphur Mountain gondola and hot springs.",
          },
          {
            day: 3,
            title: "Lake Louise",
            description: "Canoeing and tea house hike.",
          },
          {
            day: 4,
            title: "Icefields Parkway",
            description: "Scenic drive to Jasper with stops.",
          },
          {
            day: 5,
            title: "Jasper Adventures",
            description: "Maligne Lake cruise and wildlife tour.",
          },
          {
            day: 6,
            title: "Free Day",
            description: "Optional activities in Jasper.",
          },
          {
            day: 7,
            title: "Departure",
            description: "Transfer to Edmonton airport.",
          },
        ],
        amenities: [
          { icon: "hotel", name: "Mountain Lodges" },
          { icon: "transport", name: "Private Vehicle" },
          { icon: "guide", name: "Naturalist Guide" },
          { icon: "activities", name: "Park Fees" },
          { icon: "meal", name: "Daily Breakfast" },
        ],
        popularAttractions: [
          "Moraine Lake",
          "Emerald Lake",
          "Yoho National Park",
        ],
      },
    ],
    //   testimonials= [
    //     // Previous testimonials...
    //     {
    //       id: 8,
    //       name: "Isabella Rossi",
    //       rating: 5,
    //       comment: "The French Riviera package was absolute perfection. Every hotel and excursion was carefully selected.",
    //       image: "https://randomuser.me/api/portraits/women/28.jpg",
    //       packageId: 10
    //     },
    //     {
    //       id: 9,
    //       name: "Liam Johnson",
    //       rating: 5,
    //       comment: "New Zealand was the adventure of a lifetime! The Milford Sound cruise took our breath away.",
    //       image: "https://randomuser.me/api/portraits/men/22.jpg",
    //       packageId: 11
    //     },
    //     {
    //       id: 10,
    //       name: "Sophia Chen",
    //       rating: 4,
    //       comment: "Italy lived up to all our expectations. The Vatican tour with early access was worth every penny.",
    //       image: "https://randomuser.me/api/portraits/women/44.jpg",
    //       packageId: 12
    //     },
    //     {
    //       id: 11,
    //       name: "Mohammed Al-Farsi",
    //       rating: 5,
    //       comment: "Mauritius was paradise on earth. Our overwater villa was beyond anything we imagined.",
    //       image: "https://randomuser.me/api/portraits/men/36.jpg",
    //       packageId: 13
    //     },
    //     {
    //       id: 12,
    //       name: "Emily Wilson",
    //       rating: 5,
    //       comment: "The Canadian Rockies took our breath away every single day. The wildlife sightings were incredible!",
    //       image: "https://randomuser.me/api/portraits/women/51.jpg",
    //       packageId: 14
    //     }
    //   ],
    //   categories= [
    //     { id: 1, name: "Beach", icon: "🏖️", count: 32 },
    //     { id: 2, name: "Culture", icon: "🏯", count: 28 },
    //     { id: 3, name: "Adventure", icon: "🧗", count: 19 },
    //     { id: 4, name: "Luxury", icon: "✨", count: 15 },
    //     { id: 5, name: "Family", icon: "👨‍👩‍👧‍👦", count: 23 },
    //     { id: 6, name: "Honeymoon", icon: "💝", count: 18 },
    //     { id: 7, name: "Mountain", icon: "⛰️", count: 12 },
    //     { id: 8, name: "Winter", icon: "❄️", count: 9 },
    //     { id: 9, name: "Cruise", icon: "🛳️", count: 7 }
    //   ],
    //   destinations= [
    //     {
    //       id: 1,
    //       name: "Thailand",
    //       image: "https://source.unsplash.com/random/300x200/?thailand",
    //       packages: [1, 4]
    //     },
    //     {
    //       id: 2,
    //       name: "Indonesia",
    //       image: "https://source.unsplash.com/random/300x200/?indonesia",
    //       packages: [2]
    //     },
    //     {
    //       id: 3,
    //       name: "Malaysia",
    //       image: "https://source.unsplash.com/random/300x200/?malaysia",
    //       packages: [3, 5]
    //     },
    //     {
    //       id: 4,
    //       name: "Japan",
    //       image: "https://source.unsplash.com/random/300x200/?japan",
    //       packages: [5]
    //     },
    //     {
    //       id: 5,
    //       name: "Australia",
    //       image: "https://source.unsplash.com/random/300x200/?australia",
    //       packages: [6]
    //     },
    //     {
    //       id: 6,
    //       name: "Maldives",
    //       image: "https://source.unsplash.com/random/300x200/?maldives",
    //       packages: [7]
    //     },
    //     {
    //       id: 7,
    //       name: "Switzerland",
    //       image: "https://source.unsplash.com/random/300x200/?switzerland",
    //       packages: [8]
    //     },
    //     {
    //       id: 8,
    //       name: "UAE",
    //       image: "https://source.unsplash.com/random/300x200/?dubai",
    //       packages: [9]
    //     },
    //     {
    //       id: 9,
    //       name: "France",
    //       image: "https://source.unsplash.com/random/300x200/?france",
    //       packages: [10]
    //     },
    //     {
    //       id: 10,
    //       name: "New Zealand",
    //       image: "https://source.unsplash.com/random/300x200/?new-zealand",
    //       packages: [11]
    //     },
    //     {
    //       id: 11,
    //       name: "Italy",
    //       image: "https://source.unsplash.com/random/300x200/?italy",
    //       packages: [12]
    //     },
    //     {
    //       id: 12,
    //       name: "Mauritius",
    //       image: "https://source.unsplash.com/random/300x200/?mauritius",
    //       packages: [13]
    //     },
    //     {
    //       id: 13,
    //       name: "Canada",
    //       image: "https://source.unsplash.com/random/300x200/?canada",
    //       packages: [14]
    //     }
    //   ],
    specialOffers = [
      {
        id: 1,
        title: "Early Bird Special",
        description: "Book 3 months in advance and save up to 30%",
        discount: "30%",
        validUntil: "2023-12-31",
        applicablePackages: [1, 3, 5, 7, 9, 11, 13],
      },
      {
        id: 2,
        title: "Honeymoon Package",
        description: "Free room upgrade and spa credits for honeymooners",
        discount: "15%",
        validUntil: "2024-06-30",
        applicablePackages: [2, 4, 7, 10, 13],
      },
      {
        id: 3,
        title: "Adventure Bundle",
        description: "Book two adventure tours and get 20% off",
        discount: "20%",
        validUntil: "2024-03-31",
        applicablePackages: [3, 6, 8, 11, 14],
      },
    ],
    travelTips = [
      {
        id: 1,
        title: "Best Time to Visit Bali",
        content:
          "April to October offers the best weather with less humidity and minimal rainfall. July and August are peak months with more crowds but perfect beach weather.",
        category: "beach",
      },
      {
        id: 2,
        title: "Packing for Mountain Trips",
        content:
          "Layered clothing is essential for changing alpine weather. Include thermal base layers, waterproof jacket, hiking boots, sunglasses, and altitude sickness medication if needed.",
        category: "mountain",
      },
      {
        id: 3,
        title: "Cultural Etiquette in Japan",
        content:
          "Remember to bow when greeting, remove shoes when entering homes/temples, avoid eating while walking, and never stick chopsticks upright in rice.",
        category: "culture",
      },
      {
        id: 4,
        title: "Saving on European Travel",
        content:
          "Travel between September-November for fewer crowds and lower prices. Use regional trains instead of flights between cities. Many museums offer free entry days.",
        category: "culture",
      },
    ],
    bookingOptions = {
      paymentMethods: [
        "Credit Card",
        "PayPal",
        "Bank Transfer",
        "Travel Now Pay Later",
      ],
      cancellationPolicies: [
        {
          type: "Flexible",
          description: "Free cancellation up to 30 days before travel",
          penalty: "15% fee for late cancellation",
        },
        {
          type: "Standard",
          description: "Free cancellation up to 60 days before travel",
          penalty: "25% fee for late cancellation",
        },
      ],
      travelInsurance: {
        provider: "World Nomads",
        coverage: [
          "Medical",
          "Trip Cancellation",
          "Baggage Loss",
          "Emergency Evacuation",
        ],
        priceRange: "4-8% of trip cost",
      },
    };

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "The Phuket beach escape was everything we dreamed of! The private villa was stunning.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      packageId: 1,
    },
    {
      id: 2,
      name: "Michael Chen",
      rating: 4,
      comment:
        "Excellent cultural experience in Bali. The cooking class was amazing!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      packageId: 2,
    },
    {
      id: 3,
      name: "Emma Wilson",
      rating: 5,
      comment:
        "Langkawi adventure was perfect mix of relaxation and activities. Loved the island hopping!",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      packageId: 3,
    },
    {
      id: 4,
      name: "Rahul Sharma",
      comment:
        "The Thailand package was amazing! Everything was well organized and the beaches were pristine.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      destination: "Thailand",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "David Kim",
      destination: "Seoul, South Korea",
      comment:
        "As a frequent traveler, I've never experienced such seamless logistics combined with authentic local experiences. The Japan tour exceeded all expectations.",
      rating: 5,
      trip: "Japanese Cultural Odyssey",
    },
    {
      id: 6,
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Maria Rodriguez",
      destination: "Barcelona, Spain",
      comment:
        "Our family's African safari was magical. The guides' expertise and the luxury camp's attention to detail made it educational yet incredibly comfortable.",
      rating: 5,
      trip: "Tanzania Family Safari",
    },
    // {
    //   image:
    //     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    //   name: "James Wilson",
    //   location: "London, UK",
    //   comment:
    //     "The Scandinavian tour balanced adventure and relaxation perfectly. From Northern Lights viewing to sleek urban hotels, every moment was Instagram-worthy.",
    //   rating: 4,
    //   trip: "Nordic Lights Expedition",
    // },
    // Add more testimonials
  ];

  // Additional data for filters
  const categories = [
    { id: 1, name: "Beach", icon: "🏖️", count: 32 },
    { id: 2, name: "Culture", icon: "🏯", count: 28 },
    { id: 3, name: "Adventure", icon: "🧗", count: 19 },
    { id: 4, name: "Luxury", icon: "✨", count: 15 },
    { id: 5, name: "Family", icon: "👨‍👩‍👧‍👦", count: 23 },
    { id: 6, name: "Honeymoon", icon: "💝", count: 18 },
  ];

  const destinations = [
    {
      id: 1,
      name: "Thailand",
      image: "https://source.unsplash.com/random/300x200/?thailand",
    },
    {
      id: 2,
      name: "Indonesia",
      image: "https://source.unsplash.com/random/300x200/?indonesia",
    },
    {
      id: 3,
      name: "Vietnam",
      image: "https://source.unsplash.com/random/300x200/?vietnam",
    },
    {
      id: 4,
      name: "Japan",
      image: "https://source.unsplash.com/random/300x200/?japan",
    },
    {
      id: 5,
      name: "Malaysia",
      image: "https://source.unsplash.com/random/300x200/?malaysia",
    },
    {
      id: 6,
      name: "Philippines",
      image: "https://source.unsplash.com/random/300x200/?philippines",
    },
  ];

  // Removed duplicate testimonials declaration

  // Find the package by ID (in a real app, this would come from API/state)
  const pkg = packages.find((p) => p.id === packageId);

  if (!pkg) return <div>Package not found</div>;

  // Render star ratings
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header with title and breadcrumbs */}
      <div className="mb-6">
        <nav className="flex mb-4" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2">
            <li className="inline-flex items-center">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-500">/</span>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Packages
                </a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-500">/</span>
                <span className="text-gray-500">{pkg.title}</span>
              </div>
            </li>
          </ol>
        </nav>

        <h1 className="text-3xl font-bold text-gray-900">{pkg.title}</h1>
        <div className="flex items-center mt-2">
          <FaMapMarkerAlt className="text-gray-500 mr-1" />
          <span className="text-gray-600">{pkg.location}</span>
          <div className="ml-4 flex items-center">
            {renderStars(pkg.rating)}
            <span className="ml-1 text-gray-600">
              ({pkg.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Image gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="md:col-span-2 row-span-2">
          <img
            src={pkg.images[0]}
            alt={pkg.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {pkg.images.slice(1, 5).map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`${pkg.title} ${idx + 1}`}
              className="w-full h-32 md:h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Details */}
        <div className="lg:col-span-2">
          {/* Highlights */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Package Highlights</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {pkg.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start">
                  <FiCheckCircle className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{pkg.description}</p>
          </div>

          {/* Itinerary */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Daily Itinerary</h2>
            <div className="space-y-4">
              {pkg.itinerary.map((day) => (
                <div
                  key={day.day}
                  className="border-l-4 border-blue-500 pl-4 py-2"
                >
                  <h3 className="font-medium text-lg">
                    Day {day.day}: {day.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{day.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {pkg.amenities.map((amenity, idx) => (
                <div key={idx} className="flex items-center">
                  <span className="text-blue-500 mr-2">{amenity.icon}</span>
                  <span>{amenity.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column - Booking card */}
        <div>
          <div className="sticky top-4 border border-gray-200 rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <span className="text-2xl font-bold text-gray-900">
                  ${pkg.price}
                </span>
                {pkg.oldPrice && (
                  <span className="ml-2 text-gray-500 line-through">
                    ${pkg.oldPrice}
                  </span>
                )}
                <div className="text-sm text-green-600 mt-1">
                  Save ${pkg.oldPrice - pkg.price}!
                </div>
              </div>
              <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {Math.round(((pkg.oldPrice - pkg.price) / pkg.oldPrice) * 100)}%
                OFF
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <span>{pkg.duration}</span>
              </div>
              <div className="flex items-center">
                <FaUserFriends className="text-gray-500 mr-2" />
                <span>
                  For {pkg.persons} {pkg.persons > 1 ? "persons" : "person"}
                </span>
              </div>
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition duration-200">
              Book Now
            </button>

            <div className="mt-4 text-center text-sm text-gray-500">
              Free cancellation up to 30 days before travel
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="font-medium mb-2">Need help booking?</h3>
              <p className="text-sm text-gray-600 mb-3">
                Call our customer services team 24/7
              </p>
              <a href="tel:+18005551234" className="text-blue-600 font-medium">
                +1 (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials
            .filter((t) => t.packageId === pkg.id)
            .map((review) => (
              <div key={review.id} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-medium">{review.name}</h4>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                </div>
                <p className="text-gray-700">"{review.comment}"</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PackageDetailsPage;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FiMapPin, FiCalendar, FiStar, FiArrowRight } from "react-icons/fi";
import { FaSwimmingPool, FaUmbrellaBeach, FaMountain } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../../Common/Navbar";

// // Import more images as needed
// import destination1 from "../../assets/Thailand.avif";
// import destination2 from "../../assets/Malaysia.avif";
// import destination3 from "../../assets/Australia.avif";
// import destination4 from "../../assets/China.avif";
// import destination5 from "../../assets/Japan.jpg";
// import destination6 from "../../assets/Maldives.jpg";
// import destination7 from "../../assets/Dubai.jpg";
// import destination8 from "../../assets/Switzerland.jpg";

const DestinationsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const destinations = [
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
          description: "Day trip to Nara to see Todai-ji Temple and deer park.",
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
          description: "Full day to enjoy resort amenities and private beach.",
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
  ];

  const categories = [
    { name: "Beach", icon: <FaUmbrellaBeach />, count: 32 },
    { name: "Mountain", icon: <FaMountain />, count: 18 },
    { name: "City", icon: <FiMapPin />, count: 24 },
    { name: "Adventure", icon: <FaSwimmingPool />, count: 15 },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      comment:
        "The Thailand package was amazing! Everything was well organized and the beaches were pristine.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      destination: "Thailand",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "David Kim",
      location: "Seoul, South Korea",
      comment:
        "As a frequent traveler, I've never experienced such seamless logistics combined with authentic local experiences. The Japan tour exceeded all expectations.",
      rating: 5,
      trip: "Japanese Cultural Odyssey",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      name: "Maria Rodriguez",
      location: "Barcelona, Spain",
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

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gradient-to-r from-blue-900 to-emerald-800 overflow-hidden">
        {/* <Navbar /> */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
          <div className="text-center max-w-4xl">
            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-6"
              data-aos="fade-up"
            >
              Discover Your Dream Destinations
            </h1>
            <p
              className="text-xl text-white mb-8 max-w-2xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Curated travel experiences with exclusive deals and personalized
              itineraries
            </p>
            <div
              className="relative max-w-xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <input
                type="text"
                placeholder="Search destinations..."
                className="w-full py-4 px-6 rounded-full shadow-lg focus:outline-none border-2 border-[#86b817] focus:ring-2 focus:ring-[#86b817] pr-32 placeholder-white"
              />
              <button className="absolute right-2 top-2 h-[calc(100%-1rem)] bg-gradient-to-r from-[#86b817] to-[#6a9e0f] text-white font-medium rounded-full px-8 flex items-center justify-center transition-all duration-300 hover:from-[#6a9e0f] hover:to-[#56850c] hover:shadow-lg hover:scale-105 active:scale-95">
                <span className="mr-2">Search</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80')] bg-cover bg-center"></div>
      </div>

      {/* Featured Destinations */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#86b817] bg-[#86b817]/10 rounded-full">
            POPULAR CHOICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Featured Destinations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handpicked destinations loved by our travelers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.slice(0, 4).map((item, index) => (
            <DestinationCard key={index} item={item} index={index} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore By Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find your perfect trip based on your travel style
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="text-3xl text-[#86b817] mb-3 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-600">{category.count} packages</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Destinations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              All Destinations
            </h2>
            <p className="text-gray-600 mt-2">
              Browse our complete collection of travel destinations
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="px-4 py-2 bg-gray-200 rounded-lg">All</button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-lg">
              Asia
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 rounded-lg">
              Europe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((item, index) => (
            <DestinationCard key={index} item={item} index={index} detailed />
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border-2 border-[#86b817] text-[#86b817] font-medium rounded-full hover:bg-[#86b817] hover:text-white transition-all duration-300">
            Load More Destinations
            <FiArrowRight className="ml-2" />
          </button>
        </div> */}
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#86b817]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-[#86b817] bg-white rounded-full">
              TRAVELER STORIES
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from people who've experienced our tours
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.comment}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {testimonial.destination} Trip
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#86b817] to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us help you plan the perfect getaway tailored just for you
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contactus">
              <button className="px-8 py-3 bg-white text-[#86b817] font-bold rounded-full hover:bg-gray-100 transition-colors">
                Book Now
              </button>
            </Link>
            <button className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              Contact Our Experts
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Destination Card Component
const DestinationCard = ({ item, index, detailed = false }) => {
  return (
    <div
      className={`relative group rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl ${
        detailed ? "bg-white" : ""
      }`}
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      {!detailed && (
        <>
          <div className="relative h-80 group">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute top-4 right-4 bg-white text-[#86b817] font-bold px-3 py-1 rounded-full shadow-md">
              {item.discount}
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <div className="flex justify-between items-end mb-2">
              <h3 className="text-2xl font-bold">{item.title}</h3>
              <span className="text-xl font-bold">${item.price}</span>
            </div>

            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(item.rating)
                      ? "text-yellow-400"
                      : "text-gray-400"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm">({item.reviewCount})</span>
            </div>

            <p className="text-sm mb-4">
              {item.duration} • {item.location}
            </p>

            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link to="/contactus">
                <button className="w-full bg-[#86b817] hover:bg-[#76a315] text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        </>
      )}

      {detailed && (
        <div>
          <div className="relative h-64">
            <img
              src={item.images[0]}
              alt={item.label}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white text-[#86b817] font-bold px-3 py-1 rounded-full shadow-md">
              {item.discount}
            </div>
          </div>
          <div className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-[#86b817] font-medium">{item.duration}</p>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">
                  {item.price}
                </span>
                {item.oldPrice && (
                  <span className="block text-sm text-gray-500 line-through">
                    {item.oldPrice}
                  </span>
                )}
              </div>
            </div>

            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(item.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm text-gray-600">
                ({item.reviews})
              </span>
            </div>

            <p className="text-gray-600 mb-4">{item.details}</p>

            {item.highlights && (
              <div className="mb-4">
                <h4 className="font-medium text-gray-900 mb-2">Highlights:</h4>
                <ul className="grid grid-cols-2 gap-2">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-4 h-4 text-[#86b817] mt-0.5 mr-1.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600 text-sm">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <Link to={`/package/${item.id}`}>
              <button className="w-full mt-4 py-2 px-4 bg-[#86b817] hover:bg-[#76a315] text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center">
                View Package
                <FiArrowRight className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DestinationsPage;

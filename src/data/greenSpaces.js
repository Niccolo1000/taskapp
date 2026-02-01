// Vancouver Green Spaces Database
// Real parks and green spaces with approximate coordinates

export const greenSpaces = [
  {
    id: 1,
    name: "Stanley Park",
    lat: 49.3017,
    lng: -123.1417,
    type: "park",
    size: "405 hectares",
    vibes: ["forest bathing", "waterfront", "cycling", "wildlife", "quiet zones"],
    description: "Vancouver's crown jewel - a 405-hectare urban oasis with old-growth forest, the iconic seawall, and abundant wildlife. Home to over 500,000 trees.",
    highlights: ["Seawall trail", "Lost Lagoon", "Beaver Lake", "Old-growth cedars", "Great blue heron colony"],
    bestSeasons: ["spring", "summer", "fall", "winter"],
    photos: []
  },
  {
    id: 2,
    name: "Queen Elizabeth Park",
    lat: 49.2413,
    lng: -123.1122,
    type: "park",
    size: "53 hectares",
    vibes: ["gardens", "views", "romantic", "photography", "picnic"],
    description: "Built on a former quarry, this park showcases stunning gardens, the Bloedel Conservatory, and panoramic city views. A testament to urban renewal.",
    highlights: ["Bloedel Conservatory", "Quarry Gardens", "Rose Garden", "City viewpoint", "Arboretum"],
    bestSeasons: ["spring", "summer"],
    photos: []
  },
  {
    id: 3,
    name: "VanDusen Botanical Garden",
    lat: 49.2388,
    lng: -123.1306,
    type: "garden",
    size: "22 hectares",
    vibes: ["gardens", "peaceful", "educational", "photography", "meditation"],
    description: "A world-class botanical garden with over 7,500 plant species from around the world. A living library of plants and a sanctuary of calm.",
    highlights: ["Elizabethan Maze", "Korean Pavilion", "Rhododendron Walk", "Living Wall", "Seasonal blooms"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 4,
    name: "Pacific Spirit Regional Park",
    lat: 49.2560,
    lng: -123.2180,
    type: "forest",
    size: "763 hectares",
    vibes: ["forest bathing", "hiking", "quiet", "dog-friendly", "running"],
    description: "A vast urban forest on Vancouver's west side with 73km of trails through second-growth forest. Perfect for escaping the city without leaving it.",
    highlights: ["Cathedral Trail", "Wreck Beach access", "Old-growth remnants", "Salal loops", "Bird watching"],
    bestSeasons: ["spring", "summer", "fall", "winter"],
    photos: []
  },
  {
    id: 5,
    name: "Dr. Sun Yat-Sen Classical Chinese Garden",
    lat: 49.2799,
    lng: -123.1028,
    type: "garden",
    size: "0.5 hectares",
    vibes: ["peaceful", "meditation", "cultural", "photography", "intimate"],
    description: "The first authentic Chinese garden built outside of China. A pocket of profound tranquility in the heart of Chinatown.",
    highlights: ["Jade Water Pavilion", "Scholar's courtyard", "Koi pond", "Tai Lake rocks", "Covered walkways"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 6,
    name: "Trout Lake / John Hendry Park",
    lat: 49.2542,
    lng: -123.0544,
    type: "park",
    size: "27 hectares",
    vibes: ["family-friendly", "swimming", "dog-friendly", "community", "farmers market"],
    description: "A beloved East Vancouver gathering place centered around the city's only freshwater lake with a swimming beach.",
    highlights: ["Swimming beach", "Farmers market", "Community garden", "Off-leash area", "Perimeter trail"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 7,
    name: "Jericho Beach Park",
    lat: 49.2722,
    lng: -123.1978,
    type: "park",
    size: "54 hectares",
    vibes: ["waterfront", "sunset", "sailing", "dog-friendly", "picnic"],
    description: "A stunning west-side beach park with panoramic views of the mountains and English Bay. Connected to a larger green corridor.",
    highlights: ["Beach access", "Jericho Pond", "Mountain views", "Sailing club", "Sunset viewing"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 8,
    name: "David Lam Park",
    lat: 49.2723,
    lng: -123.1214,
    type: "park",
    size: "4.9 hectares",
    vibes: ["waterfront", "cherry blossoms", "family-friendly", "accessible", "urban"],
    description: "A beautiful Yaletown waterfront park famous for its spring cherry blossoms and stunning False Creek views.",
    highlights: ["Cherry blossom grove", "Seawall access", "Playground", "Marina views", "Public art"],
    bestSeasons: ["spring", "summer"],
    photos: []
  },
  {
    id: 9,
    name: "Everett Crowley Park",
    lat: 49.2167,
    lng: -123.0725,
    type: "park",
    size: "40 hectares",
    vibes: ["rewilding", "quiet", "hiking", "bird-watching", "nature recovery"],
    description: "A former landfill transformed into a thriving urban wilderness. A powerful symbol of nature's resilience and recovery.",
    highlights: ["Meadow trails", "Viewpoint hill", "Pollinator gardens", "Bird habitat", "Frog pond"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 10,
    name: "Spanish Banks",
    lat: 49.2767,
    lng: -123.2267,
    type: "beach",
    size: "14 hectares",
    vibes: ["waterfront", "sunset", "quiet", "expansive", "low tide walks"],
    description: "A long, peaceful beach on Vancouver's west side with dramatic low tides that reveal vast sandbars. Mountain views across the water.",
    highlights: ["Low tide sandbars", "Mountain panorama", "Quieter than Kits", "Picnic areas", "Sunset views"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 11,
    name: "Strathcona Community Garden",
    lat: 49.2775,
    lng: -123.0856,
    type: "community-garden",
    size: "2.5 hectares",
    vibes: ["community", "growing food", "pollinators", "educational", "grassroots"],
    description: "One of the largest urban gardens in North America. A vibrant patchwork of plots tended by diverse community members.",
    highlights: ["400+ garden plots", "Community events", "Heritage seeds", "Pollinator habitat", "Fruit trees"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 12,
    name: "Hastings Park / PNE Grounds",
    lat: 49.2833,
    lng: -123.0375,
    type: "park",
    size: "62 hectares",
    vibes: ["sanctuary", "nature recovery", "quiet", "bird-watching", "gardens"],
    description: "The Hastings Park Sanctuary is a restored wetland and forest area within the larger park, providing crucial urban wildlife habitat.",
    highlights: ["Sanctuary wetlands", "Native plantings", "Italian Garden", "Empire Fields", "Wildlife corridor"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 13,
    name: "Kitsilano Beach Park",
    lat: 49.2733,
    lng: -123.1536,
    type: "beach",
    size: "11 hectares",
    vibes: ["waterfront", "active", "social", "swimming", "volleyball"],
    description: "A classic Vancouver beach with a massive outdoor saltwater pool, tennis courts, and stunning views of downtown and the North Shore.",
    highlights: ["Kits Pool", "Beach volleyball", "Seawall connection", "Sunset views", "Grassy areas"],
    bestSeasons: ["summer"],
    photos: []
  },
  {
    id: 14,
    name: "Renfrew Ravine Park",
    lat: 49.2500,
    lng: -123.0422,
    type: "ravine",
    size: "6 hectares",
    vibes: ["ravine", "forest", "stream", "quiet", "urban wilderness"],
    description: "A lush, hidden ravine with Still Creek running through it. Part of the salmon-bearing stream restoration efforts.",
    highlights: ["Still Creek", "Forest canopy", "Moon Festival lanterns", "Salmon habitat", "Secluded trails"],
    bestSeasons: ["spring", "fall"],
    photos: []
  },
  {
    id: 15,
    name: "Central Park",
    lat: 49.2275,
    lng: -123.0175,
    type: "park",
    size: "90 hectares",
    vibes: ["forest", "sports", "family-friendly", "lakes", "trails"],
    description: "Straddling Burnaby and Vancouver, this large park features second-growth forest, Patterson Lake, and extensive trail networks.",
    highlights: ["Swangard Stadium", "Patterson Lake", "Forest trails", "Pitch & putt", "Playground"],
    bestSeasons: ["spring", "summer", "fall", "winter"],
    photos: []
  },
  {
    id: 16,
    name: "Coal Harbour Seawall",
    lat: 49.2908,
    lng: -123.1250,
    type: "waterfront",
    size: "3 hectares",
    vibes: ["waterfront", "accessible", "urban", "harbour views", "public art"],
    description: "A beautifully landscaped waterfront promenade with harbour views, public art, and green spaces amidst downtown towers.",
    highlights: ["Harbour Green Park", "Olympic Cauldron", "Marina views", "Native plantings", "Seawall access"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 17,
    name: "Quilchena Park",
    lat: 49.2433,
    lng: -123.1681,
    type: "park",
    size: "5 hectares",
    vibes: ["quiet", "family-friendly", "tennis", "picnic", "neighborhood gem"],
    description: "A peaceful neighborhood park with mature trees, sports facilities, and a wonderful farmers market on summer Saturdays.",
    highlights: ["Farmers market", "Tennis courts", "Mature trees", "Wading pool", "Playground"],
    bestSeasons: ["summer"],
    photos: []
  },
  {
    id: 18,
    name: "Memorial South Park",
    lat: 49.2617,
    lng: -123.0878,
    type: "park",
    size: "2 hectares",
    vibes: ["community", "sports", "accessible", "family-friendly"],
    description: "A well-loved community park in the Grandview-Woodland neighborhood with mature trees and excellent facilities.",
    highlights: ["Sports fields", "Playground", "Community events", "Shaded picnic areas"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 19,
    name: "Musqueam Park",
    lat: 49.2361,
    lng: -123.2075,
    type: "forest",
    size: "7 hectares",
    vibes: ["forest", "quiet", "bird-watching", "indigenous territory", "peaceful"],
    description: "A forested park on the edge of Musqueam territory with trails through mature trees. A quiet escape near UBC.",
    highlights: ["Forest trails", "Bird watching", "Quiet atmosphere", "Native plants"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 20,
    name: "Vanier Park",
    lat: 49.2756,
    lng: -123.1456,
    type: "park",
    size: "15 hectares",
    vibes: ["waterfront", "kite flying", "cultural", "views", "festivals"],
    description: "A beautiful waterfront park home to museums, the planetarium, and wide open spaces perfect for kite flying and festivals.",
    highlights: ["Museum of Vancouver", "H.R. MacMillan Space Centre", "Kite flying", "Mountain views", "Bard on the Beach"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 21,
    name: "Tatlow Park",
    lat: 49.2694,
    lng: -123.1750,
    type: "park",
    size: "1.5 hectares",
    vibes: ["quiet", "dog-friendly", "neighborhood", "shaded", "picnic"],
    description: "A lovely shaded Kitsilano park with a seasonal creek, perfect for a quiet afternoon under the trees.",
    highlights: ["Seasonal creek", "Shaded areas", "Off-leash area", "Playground"],
    bestSeasons: ["spring", "summer"],
    photos: []
  },
  {
    id: 22,
    name: "Creekside Park",
    lat: 49.2719,
    lng: -123.1028,
    type: "park",
    size: "3 hectares",
    vibes: ["waterfront", "family-friendly", "accessible", "urban", "events"],
    description: "A vibrant False Creek waterfront park near Science World with playgrounds, open spaces, and great seawall access.",
    highlights: ["Science World views", "Playground", "Seawall", "Event space", "Public art"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 23,
    name: "Crab Park",
    lat: 49.2856,
    lng: -123.0992,
    type: "waterfront",
    size: "4.2 hectares",
    vibes: ["waterfront", "community victory", "harbour views", "accessible"],
    description: "A hard-won community park providing waterfront access and green space in the Downtown Eastside. A symbol of community power.",
    highlights: ["Harbour views", "Community history", "Beach access", "Native plantings"],
    bestSeasons: ["spring", "summer", "fall"],
    photos: []
  },
  {
    id: 24,
    name: "Sunrise Park",
    lat: 49.2631,
    lng: -123.0311,
    type: "park",
    size: "2 hectares",
    vibes: ["neighborhood", "family-friendly", "quiet", "playground"],
    description: "A peaceful neighborhood park in Hastings-Sunrise with a lovely community atmosphere.",
    highlights: ["Playground", "Shaded areas", "Sports facilities"],
    bestSeasons: ["spring", "summer"],
    photos: []
  },
  {
    id: 25,
    name: "Locarno Beach",
    lat: 49.2756,
    lng: -123.2158,
    type: "beach",
    size: "8 hectares",
    vibes: ["waterfront", "quiet", "sunset", "family-friendly", "natural"],
    description: "A quieter west-side beach between Jericho and Spanish Banks with natural shoreline and spectacular sunsets.",
    highlights: ["Natural shoreline", "Sunset views", "Quieter beach", "Mountain views"],
    bestSeasons: ["summer"],
    photos: []
  }
];

export const getSpaceById = (id) => greenSpaces.find(space => space.id === id);

export const getSpacesByType = (type) => greenSpaces.filter(space => space.type === type);

export const getSpacesByVibe = (vibe) =>
  greenSpaces.filter(space => space.vibes.includes(vibe.toLowerCase()));

export const searchSpaces = (query) => {
  const lowerQuery = query.toLowerCase();
  return greenSpaces.filter(space =>
    space.name.toLowerCase().includes(lowerQuery) ||
    space.description.toLowerCase().includes(lowerQuery) ||
    space.vibes.some(v => v.includes(lowerQuery))
  );
};

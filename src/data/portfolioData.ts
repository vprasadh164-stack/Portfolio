import { Project, ExperienceItem, EducationItem, LeadershipItem, StatProof } from '../types';

export const PERSONAL_INFO = {
  name: "VENKATESH PRASADH H P",
  shortName: "VENKATESH",
  title: "Strategy & Market Research Professional",
  tagline: "Turning data into decisions.",
  subtitle: "5+ years across market research, business development, client advisory and growth strategy.",
  email: "venkatesh.prasadh2027@mastersunion.org",
  phone: "+91 7975023279",
  linkedin: "https://www.linkedin.com/in/venkateshprasadh",
  location: "Gurgaon & Bengaluru, India",
  timezone: "Asia/Kolkata",
  status: "AVAILABLE FOR OPPORTUNITIES",
  currentRole: "PGP in Technology & Business Management, Masters' Union",
  metaKeywords: ["Strategy", "Market Research", "Growth", "Client Advisory", "Founder's Office"],
};

export const PROJECTS: Project[] = [
  {
    id: "ooru",
    number: "01",
    title: "OORU",
    tagline: "REGIONAL FOOD. REAL PROTEIN.",
    category: "D2C / STRATEGY / ENTREPRENEURSHIP",
    year: "2026",
    tag: "MASTERS' UNION PROJECT",
    description: "A Masters' Union project exploring how South Indian regional food can meet the growing demand for convenient high-protein eating.",
    image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1600&auto=format&fit=crop",
    overview: "Urban Indian consumers are increasingly prioritizing daily macro-nutrient targets, specifically clean protein. However, the existing market presents an uncomfortable compromise: foreign whey powders, bland meal replacements, or carbohydrate-heavy traditional staples. OORU investigates how indigenous South Indian culinary staples can be re-engineered into functional, protein-rich everyday meals without sacrificing taste or comfort.",
    metrics: [
      { label: "Target Protein / Serving", value: "24g" },
      { label: "Target Gross Margin", value: "60%" },
      { label: "Format", value: "Dry Mix / Retort" },
      { label: "Validation Segment", value: "Tier 1 Urban" }
    ],
    sections: [
      {
        title: "01 CONTEXT",
        subtitle: "The Indian protein deficit & everyday habit gap",
        content: [
          "India faces a well-documented national protein gap, with over 70% of urban diets failing to meet recommended daily dietary allowances (RDA).",
          "While health consciousness and gym culture have accelerated rapidly, westernized protein supplements (whey isolate, bars) suffer from high churn, taste fatigue, and gastrointestinal complaints.",
          "Food habits in South India are deeply anchored in warm, savory, grain-and-pulse based breakfast and evening meals—dosas, idlis, sambars, and upmas."
        ],
        callout: "Consumers do not want to substitute their culture with pills or powder shakes; they want their staple foods to work harder for them."
      },
      {
        title: "02 PROBLEM",
        subtitle: "The dilemma of carbohydrate density in comfort staples",
        content: [
          "A standard two-dosa meal with coconut chutney delivers roughly 6-8g of protein alongside 60-70g of fast-digesting carbohydrates.",
          "Existing 'healthy' alternatives on supermarket shelves either rely on heavily processed isolate powders that ruin cooking fermentation, or use unpalatable textures.",
          "Working professionals lack the 45-minute kitchen prep time required to soak, grind, and ferment artisanal protein-rich lentils from raw pulses every day."
        ],
        dataPoints: [
          { label: "Standard Dosa Protein", value: "~4g / unit" },
          { label: "Target OORU Dosa Protein", value: "14g / unit" },
          { label: "Prep Time Constraint", value: "<8 mins" }
        ]
      },
      {
        title: "03 INSIGHT",
        subtitle: "Blending indigenous pulse varieties with bioavailable seeds",
        content: [
          "Consumer research identified that consumers actively reject 'chemical-tasting' fortified items, but readily embrace indigenous whole ingredients like horse gram (kollu), edamame, sprouted moong, and roasted hemp seed flour.",
          "By utilizing naturally high-protein micro-milled pulse blends that naturally ferment without artificial leavening agents, batter viscosity and crispness can be preserved identically to authentic fermented rice-urad batter."
        ]
      },
      {
        title: "04 POSITIONING",
        subtitle: "Clean label, regional heritage, uncompromised macros",
        content: [
          "Positioned as 'Real South Indian Food, Powered by Pure Plant Protein.'",
          "Distinctly avoids synthetic fitness aesthetics (black tubs, neon typography, bodybuilders) in favor of warm, honest, editorial regional food identity.",
          "Targets young urban professionals (24–38) who exercise 3+ times weekly and cook quick weekday breakfasts or late-night post-work dinners."
        ]
      },
      {
        title: "05 GO-TO-MARKET",
        subtitle: "D2C subscription flywheel into quick-commerce dark stores",
        content: [
          "Phase 1: Direct-to-Consumer (D2C) dry-mix subscription boxes piloted across Gurgaon and Bengaluru tech corridors, paired with fitness studio sampling.",
          "Phase 2: Transitioning high-velocity SKUs into Zepto/Blinkit/Instamart quick commerce dark stores to capture spontaneous 10-minute breakfast replenishment.",
          "Zero cold-chain dependency initially: Focusing exclusively on dry-ferment ready mixes and shelf-stable ambient retort curries to optimize inventory carrying costs."
        ]
      },
      {
        title: "06 ECONOMICS",
        subtitle: "Unit economics and margin protection",
        content: [
          "Target retail price point: ₹249 for a 400g pack (yielding 8 high-protein meals at ~₹31 per meal base).",
          "Formulation COGS calculated at ₹58 per unit including sustainable barrier pouch packaging.",
          "Target gross margin of 58% to 62%, leaving adequate headroom for quick-commerce commission structures (28-32%) and digital CAC amortized over 4.2x expected annual repeat orders."
        ],
        dataPoints: [
          { label: "Target Gross Margin", value: "58–62%" },
          { label: "Blended Meal Cost", value: "₹31 / serving" },
          { label: "Payback on CAC", value: "1.8 orders" }
        ]
      },
      {
        title: "07 LEARNING",
        subtitle: "Key strategic takeaways from product prototyping",
        content: [
          "Macro-nutrient density cannot be treated as an isolated engineering problem; in consumer packaged goods, taste and textural fidelity dictate 90% of repeat purchase velocity.",
          "Dry ambient formulations vastly de-risk early stage operations by eliminating refrigerated supply chain spoilage and frozen warehouse surcharges."
        ]
      }
    ]
  },
  {
    id: "fetchy-go",
    number: "02",
    title: "FETCHY.GO",
    tagline: "BUILDING A BUSINESS FROM ZERO.",
    category: "ENTREPRENEURSHIP / E-COMMERCE",
    year: "2026",
    tag: "MASTERS' UNION PROJECT",
    description: "A Masters' Union entrepreneurship project exploring dropshipping, product selection, sourcing, marketplaces and execution.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    overview: "Fetchy.go was conceived as an end-to-end entrepreneurial laboratory to stress-test real-world e-commerce mechanics: from identifying high-intent impulse product niches and negotiating reliable supplier fulfilment, to building conversion-optimized digital storefronts, orchestrating paid traffic, and mitigating Cash-on-Delivery return risks.",
    metrics: [
      { label: "Business Model", value: "Lean Sourcing" },
      { label: "Fulfillment Cycle", value: "48-72h" },
      { label: "Focus", value: "RTO Mitigation" },
      { label: "Stage", value: "Execution Sprint" }
    ],
    sections: [
      {
        title: "BUSINESS MODEL",
        subtitle: "High-velocity catalog testing with minimal capital lock-in",
        content: [
          "Structured around a rapid-iteration e-commerce model designed to test consumer willingness to purchase niche problem-solver consumer lifestyle gadgets.",
          "Eliminated upfront inventory risk by partnering with domestic warehouse suppliers with verified API order integration and same-day dispatch capabilities."
        ]
      },
      {
        title: "PRODUCT STRATEGY",
        subtitle: "The 3-point scorecard for impulse SKU qualification",
        content: [
          "Criteria 1: Immediate visual demonstration capability in the first 3 seconds of vertical video.",
          "Criteria 2: High perceived value-to-cost ratio (minimum 3.2x markup over supplier cost).",
          "Criteria 3: Non-fragile, low-weight (<400g) products with zero complex electrical hazard liabilities to keep shipping slabs minimal."
        ]
      },
      {
        title: "CUSTOMER ACQUISITION",
        subtitle: "Hook testing and cost-per-acquisition management",
        content: [
          "Built high-converting single-product landing pages with dynamic social proof, scarcity indicators, and streamlined 1-click checkout flows.",
          "A/B tested creative hooks across Meta ads, measuring cost-per-click (CPC), add-to-cart rates, and drop-off points along the checkout funnel."
        ]
      },
      {
        title: "OPERATIONS & EXECUTION",
        subtitle: "Solving the Indian e-commerce Achilles' heel: RTO",
        content: [
          "In the Indian market, Return-to-Origin (RTO) on Cash-on-Delivery (COD) orders routinely wipes out gross margins for emerging brands.",
          "Implemented WhatsApp verification bots confirming order delivery addresses before dispatch, automatically filtering suspicious or fake orders.",
          "Incentivized prepaid UPI conversions via instant 5% cashback discounts, raising prepaid mix and slashing logistic return penalties."
        ]
      },
      {
        title: "LEARNINGS",
        subtitle: "Operational wisdom forged in the trenches of real execution",
        content: [
          "A great creative campaign means nothing if your courier logistics partner has poor first-attempt delivery rates in Tier-2/Tier-3 pin codes.",
          "E-commerce profitability is not won on vanity revenue; it is preserved in the microscopic details of reverse logistics, payment gateway charges, and automated customer reassurance."
        ]
      }
    ]
  },
  {
    id: "solid-perfume",
    number: "03",
    title: "SOLID PERFUME",
    tagline: "RETHINKING EVERYDAY FRAGRANCE.",
    category: "D2C / PRODUCT STRATEGY",
    year: "2025",
    tag: "PRODUCT CONCEPT",
    description: "A D2C product concept exploring solid perfume, differentiation, customer proposition, acquisition, retention, referrals and unit economics.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1600&auto=format&fit=crop",
    overview: "Traditional luxury perfumery is an industry built on shipping alcohol and glass around the world. Solid Perfume explores an alternative consumer thesis: pocketable, wax-based personal fragrance designed for tactile, discreet, all-day reapplication for modern urban movers.",
    metrics: [
      { label: "Weight Reduction vs Glass", value: "-78%" },
      { label: "Target Gross Margin", value: "72%" },
      { label: "Formulation", value: "Alcohol-Free" },
      { label: "Refill Mechanism", value: "Modular Pan" }
    ],
    sections: [
      {
        title: "CUSTOMER",
        subtitle: "The urban commuter and frequent flyer",
        content: [
          "Primary demographic: Active young professionals, travelers, and gym-goers who want to refresh their scent profile midway through a 14-hour day.",
          "Frustrated by bulky 50ml glass spray bottles that shatter in gym bags, leak into laptops, or violate airport security liquid limits."
        ]
      },
      {
        title: "PROBLEM",
        subtitle: "Fragrance that evaporates in 2 hours and cannot travel",
        content: [
          "Conventional spray perfumes contain 80-90% ethanol alcohol carrier. Alcohol causes rapid top-note flash-off, resulting in intense initial sillage followed by quick decay.",
          "Alcohol also causes skin drying and sensitization when sprayed multiple times throughout the day."
        ]
      },
      {
        title: "PRODUCT",
        subtitle: "Concentrated botanicals locked in organic wax",
        content: [
          "Formulated using organic beeswax, jojoba esters, and shea butter infused with 18% pure fragrance oils.",
          "Melts at body temperature upon fingertip touch, allowing subtle pulse-point application without scent cloud intrusion in crowded offices or airplanes."
        ]
      },
      {
        title: "DIFFERENTIATION",
        subtitle: "Tactile industrial design as the marketing vector",
        content: [
          "Housed in a weighted, precision-machined brushed zinc slider case with an audible, satisfying magnetic click.",
          "The tactile fidget factor of the case turns everyday application into a memorable, conversation-sparking physical ritual."
        ]
      },
      {
        title: "GTM & UNIT ECONOMICS",
        subtitle: "Low shipping bulk, high repeat subscription refills",
        content: [
          "Razor-and-blade model: Initial purchase includes the durable metal slider case + 2 scent pods (₹1,299).",
          "Repeat refills ship in flat, letter-sized compostable mailers (₹499 for 2 pods), cutting logistics costs by over 70% compared to heavy liquid bottles.",
          "Projected steady-state gross margin: 72% on starter sets, 81% on subscription refill packs."
        ]
      },
      {
        title: "LEARNING",
        subtitle: "Sensory branding and consumer habit formation",
        content: [
          "Personal care innovations succeed when they transform an infrequent ritual into an effortless pocket habit.",
          "Shipping weight and volumetric displacement are overlooked structural levers for D2C margin health."
        ]
      }
    ]
  },
  {
    id: "twin-cylinder-motorcycle",
    number: "04",
    title: "TWIN-CYLINDER MOTORCYCLE",
    tagline: "MAKING PERFORMANCE MORE ACCESSIBLE.",
    category: "ENTREPRENEURSHIP / PRODUCT STRATEGY",
    year: "2025",
    tag: "ENTREPRENEURIAL CONCEPT",
    description: "An entrepreneurial motorcycle concept focused on an affordable twin-cylinder motorcycle in the ₹2.5–3 lakh price range.",
    image: "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1600&auto=format&fit=crop",
    overview: "India is the world's largest two-wheeler market, yet the enthusiast upgrade path is broken. Riders graduating from single-cylinder 150-250cc commuters hit a price wall when seeking the refined harmonics, balance, and effortless highway cruising of a multi-cylinder machine. This entrepreneurial design and business concept investigates the engineering, supply chain, and positioning feasibility of an indigenous ₹2.5–3.0 lakh parallel-twin motorcycle.",
    metrics: [
      { label: "Target Price Band", value: "₹2.5L – ₹3.0L" },
      { label: "Engine Arch", value: "350cc Parallel Twin" },
      { label: "Fuel Standard", value: "E20 Compliant" },
      { label: "Target Power", value: "38-40 BHP" }
    ],
    sections: [
      {
        title: "PRODUCT CONCEPT",
        subtitle: "The accessible twin for the Indian sub-continent",
        content: [
          "An entrepreneurial concept exploring a neo-retro roadster with modern mechanical architecture.",
          "Bridges the yawning gap between single-cylinder 350-400cc bikes and expensive 650cc+ multi-cylinder imports.",
          "Engineered around agility, low unladen curb weight (<175 kg), and manageable seat height tailored for Indian riding ergonomics."
        ]
      },
      {
        title: "E20-COMPLIANT ENGINE CONCEPT",
        subtitle: "Future-proof powertrain for India's 2025+ biofuel mandate",
        content: [
          "Engineered specifically to run reliably on 20% ethanol blended petrol (E20), eliminating the fuel degradation and corrosion issues plaguing older legacy architectures.",
          "Features nickel-plated cylinder sleeves, upgraded fluorocarbon fuel lines, anti-corrosive fuel pump internals, and dual oxygen-sensor EFI tuning."
        ]
      },
      {
        title: "ENGINE DESIGN ON PAPER",
        subtitle: "Compact parallel-twin architecture with 270° crank",
        content: [
          "350cc liquid-cooled 8-valve DOHC parallel-twin configuration.",
          "270-degree cross-plane crankshaft firing interval delivers the deep, rhythmic exhaust rumble and low-end tractor torque beloved by Indian tourers, while inherently cancelling out primary rocking vibrations.",
          "Single balancer shaft design keeps engine block width narrow and tooling cost economical."
        ]
      },
      {
        title: "TARGET CUSTOMER",
        subtitle: "The discerning highway enthusiast",
        content: [
          "22 to 34-year-old passionate motorcyclists, weekend club riders, and daily commuters who want vibration-free 100-120 km/h cruising on expanding Indian expressway networks.",
          "Currently priced out of premium imported twin-cylinders costing upwards of ₹4.5 lakh on-road."
        ]
      },
      {
        title: "FUNDING REQUIREMENT & FEASIBILITY",
        subtitle: "Modular localization and contract manufacturing model",
        content: [
          "Avoids heavy initial greenfield plant CAPEX by proposing strategic contract assembly partnerships with tier-1 auto-component clusters in Pune or Chennai.",
          "Phased capital requirements: ₹15 Cr for CAD simulation, dynamic dyno testing, prototype validation, and ARAI homologation certification."
        ],
        callout: "Clearly noted: This project represents an on-paper entrepreneurial business and technical feasibility study, not a launched commercial vehicle."
      }
    ]
  },
  {
    id: "strategy-cases",
    number: "05",
    title: "STRATEGY CASES",
    tagline: "BREAKING DOWN AMBIGUOUS PROBLEMS.",
    category: "STRATEGY / ACADEMIC",
    year: "2025–2026",
    tag: "ACADEMIC / STRATEGY CASE",
    description: "An interactive archive of rigorous academic strategy cases breaking down complex real-world business dilemmas across heavy manufacturing, healthcare, materials, technology and public transit.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    overview: "Structured problem solving applied to ambiguous business challenges. This interactive archive documents detailed case analyses addressing profitability decline, value-based pricing, competitive positioning against market incumbents, product growth levers, and rapid-transit infrastructure market sizing.",
    metrics: [
      { label: "Cases Documented", value: "5 Deep Dives" },
      { label: "Methodology", value: "First-Principles" },
      { label: "Sectors", value: "5 Distinct Sectors" },
      { label: "Context", value: "Strategy / Academic" }
    ],
    sections: [],
    strategyCases: [
      {
        id: "steel",
        title: "STEEL MANUFACTURER",
        sector: "Industrial Manufacturing",
        challengeType: "Profitability Decline",
        problem: "A major integrated Indian steel manufacturer experienced a sharp 420 bps operating margin compression over four fiscal quarters despite running blast furnaces at over 90% capacity utilization.",
        structure: [
          "Profitability Tree: Margin = (Average Realized Price - Total Cost) / Realized Price",
          "Cost Dissection: Raw Material Inflow (Iron Ore, Coking Coal), Conversion Energy (Electricity, Natural Gas), Logistics (Rail freight vs. Coastal shipping), Fixed Overhead",
          "Revenue Dissection: Volume × Product Mix (Flat Steel vs. Long Steel / Construction Rebar vs. Automotive Cold-Rolled Coils)"
        ],
        analysis: [
          "Identified that while sales volume remained robust, the product sales mix had inadvertently tilted 14% toward low-margin commodity TMT rebar due to aggressive infrastructure discount bidding.",
          "Meanwhile, spot market coking coal import prices surged by 38% from Australia due to supply disruptions, catching the procurement division without long-term forward supply hedges.",
          "Plant rail siding bottlenecks added ₹850/ton in secondary road freight double-handling."
        ],
        recommendation: [
          "Shift blast furnace production capacity toward high-tensile Cold Rolled Galvanized (CRG) sheets targeting booming domestic automotive OEMs commanding a 28% margin premium.",
          "Transition 65% of coking coal spot purchase exposure to index-linked long-term volume contracts with collar price bands.",
          "Upgrade on-site rail siding marshaling yards to eliminate double-trucking transshipment."
        ],
        learning: "In cyclical, capital-heavy process industries, chasing vanity volume without dynamic margin-mix governance is a direct path to margin erosion."
      },
      {
        id: "pharma",
        title: "PHARMA",
        sector: "Healthcare & Life Sciences",
        challengeType: "Pricing Strategy",
        problem: "Formulating a go-to-market pricing and market access architecture for a newly licensed, life-improving chronic respiratory drug across diverse income tiers in South Asia.",
        structure: [
          "Value-Based Pricing Matrix: Economic value to healthcare system (avoided hospitalizations and emergency visits).",
          "Channel Segmentation: Institutional Government Tenders vs. Private Out-of-Pocket Retail Pharmacy.",
          "Arbitrage Risk & Parallel Trade: Price differential boundaries to prevent cross-border grey market leakage."
        ],
        analysis: [
          "Patients experiencing severe asthma exacerbations average 2.4 hospitalizations annually, costing the health ecosystem ~₹85,000 per patient/year.",
          "While private tier-1 metro patients demonstrate high price inelasticity and willingness-to-pay for superior inhalation compliance, semi-urban populations drop therapy if monthly out-of-pocket costs exceed ₹1,500.",
          "Institutional government bodies demand massive 60%+ volume discounts but guarantee prompt multi-year volume commitments."
        ],
        recommendation: [
          "Adopt a dual-tier branding and packaging structure: Premium branded digital-counter inhaler for private retail at ₹2,200/month.",
          "Create a differentiated unbundled institutional package for state health procurement at ₹890/month, tied to mandatory patient tracking and hospital dispensing registers to prevent channel diversion."
        ],
        learning: "Pharmaceutical pricing is fundamentally an ethics-and-access equilibrium: revenue maximization in affluent channels must subsidize volume expansion in underserved public healthcare channels."
      },
      {
        id: "paint",
        title: "PAINT",
        sector: "Consumer Durables & Building Materials",
        challengeType: "Pricing & Channel Strategy",
        problem: "A challenger paint brand seeking to penetrate tier-2 and tier-3 markets where the dominant market leader commands 60%+ market share and monopolizes dealer tinting machines.",
        structure: [
          "Channel Economics: Dealer working capital, inventory turn velocity, annual volume rebate ladders, and contractor loyalty perks.",
          "Consumer Purchasing Journey: End-customer brand awareness vs. Painting Contractor / Painter recommendation authority.",
          "Installed Machine Lock-in: Software-restricted color matching formulas tied exclusively to incumbent machines."
        ],
        analysis: [
          "Discovered that 80% of homeowners defer paint brand selection entirely to local painting contractors.",
          "Incumbent dealers are trapped in high working capital lock-in, with up to ₹30 lakh tied up in slow-moving premium top-coat inventories.",
          "Contractors prioritize immediate dry-time reliability and dealer credit convenience over television advertising."
        ],
        recommendation: [
          "Do not fight the incumbent head-on in decorative topcoats. Instead, enter the dealer shop via high-consumption, fast-turning base substrates: Wall Putty and Primer.",
          "Offer dealers a 15-day faster working capital cycle and direct digital contractor instant-cash reward QR codes inside every pail.",
          "Provide universal tinting color formulas compatible with existing dealer dispensing hardware."
        ],
        learning: "When facing a market leader with overwhelming brand pull, your wedge is not consumer advertising; your wedge is solving working capital pain for the distribution gatekeepers."
      },
      {
        id: "google-photos",
        title: "GOOGLE PHOTOS",
        sector: "Consumer Tech / SaaS",
        challengeType: "Growth Strategy",
        problem: "How to accelerate conversion from free active photo backup users to paid recurring Google One cloud storage subscriptions without triggering churn or negative brand sentiment.",
        structure: [
          "User Funnel: Free Tier User -> Storage Threshold Warning (80% full) -> Full Capacity State -> Subscription Paywall.",
          "Value Perception: Utility backup vs. Emotional archive (Memories, Face recognition, Shared albums).",
          "Friction & Alternative Substitution: Local hard drive backup, Amazon Photos, deletion behavior."
        ],
        analysis: [
          "Users do not upgrade until their Gmail and Drive services are threatened with operational disruption, turning the upgrade moment into an unpleasant, coerced transaction.",
          "40% of consumed storage consists of redundant duplicate photos, blurry burst shots, and forwarded WhatsApp memes that users genuinely do not wish to pay to preserve.",
          "The price jump from 0 to 100GB feels disproportionately steep for casual mobile users."
        ],
        recommendation: [
          "Introduce an automated 'Storage Cleanup Intelligence' feature: Help users instantly clear 3-5 GB of digital junk with one click, building trust through value delivery rather than pressure.",
          "Introduce a transitional micro-tier ('Photo Saver Pass') for ₹39/month for users who only want to keep memories safe without needing 100GB enterprise cloud storage.",
          "Contextualize paywalls during emotional discovery moments (e.g., anniversary 'Memories' reels) rather than blunt account lock warnings."
        ],
        learning: "True SaaS expansion revenue comes from aligning monetization triggers with peak customer joy, not with peak customer panic."
      },
      {
        id: "metro",
        title: "METRO TRANSIT",
        sector: "Infrastructure & Public Transit",
        challengeType: "Market Sizing / Guesstimate",
        problem: "Estimate daily ridership demand, revenue potential, and train fleet sizing for a newly proposed 32-kilometer arterial metro rail corridor connecting an international airport to an IT business district.",
        structure: [
          "Total Corridor Population & Commute Catchment (Radius of 2.5 km along 22 stations).",
          "Daily Commute Trips & Modal Split: Personal Two-Wheelers, App-Based Cabs, Public Buses, Proposed Metro.",
          "Peak Hour Load Factor, Directional Imbalance, and Rolling Stock Trainset Sizing."
        ],
        analysis: [
          "Corridor residential + workforce catchment calculated at 3.6 million residents within station accessibility buffer.",
          "Daily motorized vehicular trips along the congested corridor estimated at 1.4 million trips.",
          "Benchmarked against peer metro corridor launches: conservative 12% modal shift to metro due to 45-minute travel time savings over congested arterial road traffic.",
          "Estimated daily ridership: ~168,000 passenger trips initially, scaling to 320,000 trips within 36 months as first-and-last-mile feeder transit matures."
        ],
        recommendation: [
          "Fleet sizing: At 168,000 daily trips with peak hour load at 16% (26,880 passengers/hour/direction), require 24 six-car train sets operating at 4-minute headways.",
          "Station design priority: Invest heavily in multimodal feeder hubs (electric auto-rickshaw bays and bus feeder bays) to protect the 12% modal transfer assumption."
        ],
        learning: "Infrastructure utilization models succeed or fail not on train engineering, but on first-mile and last-mile feeder accessibility."
      }
    ]
  }
];

export const STATS: StatProof[] = [
  { value: "5+", label: "YEARS", subtext: "Professional experience across research, recruitment, and ops" },
  { value: "250%", label: "GROWTH", subtext: "Enrolment scale delivered for Keele University in India" },
  { value: "40+", label: "PARTNERS", subtext: "Recruitment and institutional partners managed across India" },
  { value: "3,000+", label: "RESPONDENTS", subtext: "Survey sample coordinated across high-impact research" },
  { value: "20+", label: "RESEARCH PROJECTS", subtext: "Ad-hoc and institutional market studies delivered" },
  { value: "20", label: "PEOPLE LED", subtext: "Led Quality Control verification operations at Leverage Edu" },
  { value: "70%", label: "FEWER RETURNED APPS", subtext: "Process improvement gain in application verification" },
  { value: "10+", label: "UNIVERSITIES BENCHMARKED", subtext: "Informed institutional strategy with empirical market data" }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "onestep",
    index: "01",
    company: "ONESTEP GLOBAL INGRESS PRIVATE LIMITED",
    role: "Senior Associate — Leading Market Research & Client Advisory",
    period: "Jan '25 – Jul '26",
    location: "Mumbai and Gurgaon, India",
    heroMetric: {
      value: "3,000+",
      label: "Survey Respondents Coordinated"
    },
    secondaryMetrics: [
      { value: "20+", label: "Research Projects" },
      { value: "40+", label: "Institutional Partners" },
      { value: "10+", label: "Universities Benchmarked" }
    ],
    subRole: {
      title: "Recruitment Advisor — South Asia for Maynooth University",
      description: "Representing Ireland's fastest-growing university across the South Asian sub-continent."
    },
    summary: "Led market intelligence and institutional advisory initiatives for international university partners while serving as the primary South Asian recruitment advisor for Maynooth University.",
    achievements: [
      "Delivered actionable insights for university and client stakeholders by leading ad-hoc market research projects.",
      "Strengthened brand credibility by owning marketing initiatives across podcasts, client events, and institutional outreach.",
      "Informed institutional expansion strategy by designing surveys and competitive benchmarking research for client proposals.",
      "Improved student engagement and enrolment by executing targeted recruitment strategies across key tier-1 and tier-2 Indian hubs.",
      "Strengthened strategic relationships with 40+ recruitment partners across India as Recruitment Advisor for Maynooth University.",
      "Improved offer acceptance rates by organizing high-impact webinars and interactive school sessions across India.",
      "Moderated executive panel discussions and hosted marquee corporate events at OneStep Global, showcasing strong cross-cultural facilitation."
    ]
  },
  {
    id: "keele",
    index: "02",
    company: "IN-COUNTRY LOGISTICS PRIVATE LIMITED",
    role: "Senior India Officer for Keele University",
    period: "Jul '22 – Dec '24",
    location: "Delhi and Bangalore, India",
    heroMetric: {
      value: "250%",
      label: "Enrolment Scale Delivered"
    },
    secondaryMetrics: [
      { value: "100 to 350", label: "Annual Student Surge" },
      { value: "100%", label: "South India Growth" },
      { value: "60%", label: "West + East Demand Rise" }
    ],
    summary: "Orchestrated Keele University's commercial recruitment and market expansion across India, transforming an emerging brand into a prime UK study destination.",
    achievements: [
      "Grew Keele University's India enrolments by 250% (scaling from 100 to 350 students annually) via a targeted, market-led expansion strategy within under two years.",
      "Expanded institutional market reach by building, training, and maintaining a high-performing pan-India recruitment agent network.",
      "Guided university leadership recruitment strategy via regular market analysis reports, competitive intelligence, and high-profile stakeholder event representation.",
      "Unlocked 100% enrolment growth in South India and a 60% surge across West and East India through regionally calibrated outreach."
    ]
  },
  {
    id: "leverage",
    index: "03",
    company: "LEVERAGE EDU",
    role: "Quality Compliance Associate / Operations / Business Development",
    period: "Jun '21 – Jul '22",
    location: "Delhi, India",
    heroMetric: {
      value: "70%",
      label: "Fewer Returned Applications"
    },
    secondaryMetrics: [
      { value: "20", label: "QC Team Members Led" },
      { value: "50%", label: "Submission Velocity Growth" },
      { value: "12+", label: "Apps / Day Efficiency" }
    ],
    summary: "Promoted rapidly across three functions: Business Development, Operations, and Quality Compliance, culminating in heading a 20-member Quality Control team.",
    achievements: [
      "Quality Compliance: Led a 20-member Quality Control team, improving document verification efficiency and turnaround speed.",
      "Optimized document verification workflows through targeted process improvements, delivering a 70% reduction in returned university applications.",
      "Guided company-wide operational enhancements by reporting daily and weekly efficiency metrics directly to senior management.",
      "Operations: Met rigorous daily and monthly operational targets by collaborating with a 6-member cross-functional team on resource utilization.",
      "Ensured timely document submission to global partner universities by streamlining handoffs between counseling and admissions teams.",
      "Business Development: Generated high-intent leads through 100+ daily consultative calls and multi-channel campaigns, expanding active client pipelines."
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    institution: "MASTERS' UNION",
    degree: "PGP in Technology & Business Management",
    period: "2026 – Present",
    location: "Gurgaon, India",
    details: "Focusing on Business Strategy, Tech Entrepreneurship, Corporate Finance, and Modern Product Operations."
  },
  {
    institution: "MANIPAL INSTITUTE OF TECHNOLOGY",
    degree: "B.Tech in Biomedical Engineering",
    period: "2017 – 2021",
    location: "Manipal, India",
    details: "CGPA 6.64. Analytical engineering core, diagnostic systems modeling, and scientific problem-solving."
  },
  {
    institution: "ASC PU COLLEGE",
    degree: "Karnataka State Science Class 12",
    period: "2016 – 2017",
    location: "Bengaluru, India",
    details: "Physics, Chemistry, Mathematics, and Biology foundations."
  }
];

export const INTERNSHIPS = [
  {
    company: "LEVERAGE EDU",
    role: "Business Development Intern",
    period: "Feb '21 – Jun '21",
    location: "Bengaluru, India",
    description: "Conducted initial outbound market outreach and qualification of prospective higher education candidates."
  },
  {
    company: "ASTER RV HOSPITAL",
    role: "Biomedical Engineering Intern",
    period: "May '19 – Jun '19",
    location: "Bengaluru, India",
    description: "Monitored functioning of critical clinical equipment, coordinated with medical device vendors during breakdowns, and assisted hospital technicians in technical troubleshooting."
  }
];

export const LEADERSHIP: LeadershipItem[] = [
  {
    number: "01",
    role: "20-MEMBER QUALITY CONTROL TEAM",
    context: "Operations Leadership at Leverage Edu",
    description: "Headed quality compliance workflows, mentoring team members and establishing procedural accuracy benchmarks across hundreds of daily files.",
    metric: "20 Members"
  },
  {
    number: "02",
    role: "SPORTS CLUB CO-FOUNDER",
    context: "Corporate Employee Engagement",
    description: "Co-founded employee sports club organizing cricket, pickleball, and badminton tournaments to foster inter-departmental collaboration and wellness.",
    metric: "Inter-dept Sports"
  },
  {
    number: "03",
    role: "VICE-CAPTAIN, CRICKET TEAM",
    context: "Bachelor's Inter-Collegiate Cricket",
    description: "Led team tactics, field placements, and bowling changes during high-pressure knockout fixtures, guiding the team to a runner-up tournament finish.",
    metric: "Runners-Up Finish"
  },
  {
    number: "04",
    role: "LIGHT BLUE HOUSE CAPTAIN",
    context: "Annual Sports Tournament Championship",
    description: "Captained the Light Blue House to overall victory in the annual inter-house sports tournament through disciplined squad selection and morale building.",
    metric: "Tournament Victory"
  },
  {
    number: "05",
    role: "HEAD OF PUBLICITY, NUDI CLUB",
    context: "Cultural Club at Manipal",
    description: "Spearheaded promotional campaigns, sponsorship outreach, and media drives for major campus cultural events during engineering undergrad.",
    metric: "Publicity Lead"
  },
  {
    number: "06",
    role: "COMMUNITY MOTORCYCLE RIDES",
    context: "Enthusiast Group Organizer",
    description: "Organized multi-day motorcycle expeditions, planning waypoint logistics, safety briefings, emergency protocols, and participant engagement.",
    metric: "Expedition Lead"
  }
];

export const THINKING_PILLARS = [
  {
    id: "understand",
    number: "01",
    keyword: "UNDERSTAND.",
    subheading: "Surface the foundational truth before jumping to answers.",
    description: "Every failed strategy begins with solving the wrong problem with high efficiency. I dive into primary data, stakeholder incentives, and raw customer sentiment to discover the real underlying bottleneck."
  },
  {
    id: "structure",
    number: "02",
    keyword: "STRUCTURE.",
    subheading: "Deconstruct ambiguity into mutually exclusive, solvable parts.",
    description: "Ambiguous situations paralyze organizations without rigorous frameworks. I map messy problems into clear MECE decision trees, unit-economic balance equations, and prioritized workstreams."
  },
  {
    id: "analyse",
    number: "03",
    keyword: "ANALYSE.",
    subheading: "Pressure-test hypotheses against empirical evidence.",
    description: "Strategy without numerical rigor is mere opinion. I pressure-test our assumptions with quantitative scenario modeling, benchmark comparisons, and sensitivity analysis to evaluate downside resilience."
  },
  {
    id: "act",
    number: "04",
    keyword: "ACT.",
    subheading: "Translate clean insight into operational momentum.",
    description: "A strategy that cannot be executed by everyday teams on Monday morning is worthless. I build clear accountability matrices, feedback loops, and tactical sprint goals that drive measurable execution."
  }
];

export const CAREER_DIRECTIONS = [
  {
    title: "MANAGEMENT CONSULTING",
    desc: "Advising enterprise leadership on strategic positioning, operational turnaround, and commercial growth."
  },
  {
    title: "FOUNDER'S OFFICE",
    desc: "Acting as an operational force multiplier, tackling high-priority ambiguous initiatives directly beside leadership."
  },
  {
    title: "CHIEF OF STAFF",
    desc: "Driving cross-functional alignment, strategic cadence, key governance programs, and organizational execution."
  },
  {
    title: "BUSINESS STRATEGY",
    desc: "Structuring new market expansion, channel monetization, competitor benchmarking, and M&A feasibility."
  },
  {
    title: "GROWTH & OPERATIONS",
    desc: "Scaling supply chains, customer acquisition loops, unit economics, and operational efficiency."
  }
];

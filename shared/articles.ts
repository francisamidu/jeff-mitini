// Sample dummy data to use before connecting to Strapi

import { Article } from "@/types/types"

export const authors = [
    {
      id: 1,
      name: "Bree Mukami",
      bio: "Content writer fascinated by content creation, culture, and lifestyle",
      avatar: "/images/bree-mukami.jpg",
    },
  ]
  
  export const articles: Article[] = [
    {
      id: 1,
      title: "Traveling solo? Here are some must see spots",
      slug: "traveling-solo-must-see-spots",
      description:
        "Traveling alone can be one of the most rewarding experiences. Here are some of the best destinations for solo travelers that offer safety, friendly locals, and amazing experiences.",
      content: `
        <p>Traveling alone can be one of the most rewarding experiences. It allows you to fully immerse yourself in new cultures, meet interesting people, and discover more about yourself in the process. If you're considering a solo adventure, here are some destinations that offer the perfect blend of safety, friendly locals, and unforgettable experiences.</p>
        
        <h2>1. Kyoto, Japan</h2>
        
        <p>Japan consistently ranks as one of the safest countries for solo travelers. Kyoto, with its serene temples, beautiful gardens, and preserved traditional culture, offers a peaceful environment for self-reflection and exploration. The efficient public transportation system makes it easy to navigate, and the Japanese people are known for their helpfulness toward tourists.</p>
        
        <h2>2. Lisbon, Portugal</h2>
        
        <p>Lisbon's warm climate, stunning architecture, and relaxed atmosphere make it an ideal destination for solo travelers. The city is compact enough to explore on foot, and the locals are generally friendly and willing to help. Don't miss the opportunity to listen to traditional Fado music in the Alfama district while enjoying a glass of local wine.</p>
        
        <h2>3. Melbourne, Australia</h2>
        
        <p>Melbourne's vibrant arts scene, diverse food culture, and walkable city center make it perfect for solo exploration. The city's grid layout makes it difficult to get lost, and Australians are known for their friendly, laid-back attitude. Take a day trip to the Great Ocean Road for breathtaking coastal views.</p>
        
        <h2>4. Reykjavik, Iceland</h2>
        
        <p>Iceland is consistently rated as one of the safest countries in the world, making it ideal for solo travelers. Reykjavik serves as a perfect base for exploring Iceland's stunning natural landscapes, including geysers, waterfalls, and the famous Blue Lagoon. The small size of the city makes it easy to navigate, and most Icelanders speak excellent English.</p>
        
        <h2>5. Vancouver, Canada</h2>
        
        <p>Vancouver offers the perfect blend of urban amenities and natural beauty. The city is safe, clean, and easy to navigate using public transportation. Stanley Park, with its seawall and forest trails, provides a peaceful retreat within the city. Canadians are known for their friendliness, making it easy to strike up conversations with locals.</p>
        
        <h2>Tips for Solo Travelers</h2>
        
        <ul>
          <li>Always share your itinerary with someone back home</li>
          <li>Stay connected with a local SIM card or international plan</li>
          <li>Trust your instincts and be aware of your surroundings</li>
          <li>Consider staying in social accommodations like hostels to meet other travelers</li>
          <li>Research local customs and basic phrases in the local language</li>
        </ul>
        
        <p>Solo travel allows you to set your own pace, follow your interests, and challenge yourself in new ways. These destinations offer the perfect starting point for your solo adventure, combining safety with unforgettable experiences.</p>
      `,
      publishedAt: "2022-09-25T10:00:00Z",
      categories: [{ name: "Travel" }],
      coverImage: {
        url: "/placeholder.svg?height=400&width=600&query=colorful gradient sphere",
      },
      author: {
        id: 1,
        name: "Bree Mukami",
        email: "bree.mukami@example.com",
        avatar: {
          url: "/images/bree-mukami.jpg",
        },
      },
      createdAt: "2022-09-25T10:00:00Z",
      recentPosts: [],
    },
    {
      id: 2,
      title: "Headed to Asia in October? The 10 best places to visit",
      slug: "headed-to-asia-in-october",
      description:
        "Bursting with culture, abundant nature and fragrant tastes, health travel's luxury wellness holidays in Asia are hosted in some of the most fascinating places.",
      content: `
        <p>October is an ideal time to visit many parts of Asia. The monsoon season has typically ended in most regions, temperatures are moderate, and tourist crowds are thinner than during peak season. Here are the ten best places to visit in Asia during October.</p>
        
        <h2>1. Kyoto, Japan</h2>
        
        <p>October brings the beginning of autumn colors to Kyoto, transforming the city's numerous temples and gardens into a spectacular display of red, orange, and gold. The weather is pleasantly cool, making it perfect for exploring the city's historic sites like Kinkaku-ji (Golden Pavilion) and Fushimi Inari Shrine.</p>
        
        <h2>2. Bali, Indonesia</h2>
        
        <p>October marks the beginning of the dry season in Bali, offering sunny days with less humidity. This is an excellent time to explore the island's beaches, rice terraces, and temples without the peak season crowds. Don't miss the cultural heart of Bali in Ubud.</p>
        
        <h2>3. Chiang Mai, Thailand</h2>
        
        <p>October in Chiang Mai brings cooler temperatures and the end of the rainy season. The surrounding countryside is lush and green, perfect for trekking to hill tribe villages or visiting elephant sanctuaries. The city itself offers hundreds of temples, vibrant markets, and excellent northern Thai cuisine.</p>
        
        <h2>4. Seoul, South Korea</h2>
        
        <p>Autumn transforms Seoul into a colorful canvas, especially in places like Bukhansan National Park and Changdeokgung Palace's Secret Garden. October also brings pleasant temperatures, making it ideal for exploring the city's mix of ancient traditions and cutting-edge modernity.</p>
        
        <h2>5. Hoi An, Vietnam</h2>
        
        <p>October is one of the best months to visit this charming ancient town. The rainy season is ending, and the temperatures are comfortable. Hoi An's lantern-lit streets, tailors, and excellent food scene can be enjoyed without the discomfort of summer heat or heavy rains.</p>
        
        <h2>6. Luang Prabang, Laos</h2>
        
        <p>This UNESCO World Heritage city is particularly beautiful in October when the surrounding mountains are lush after the rainy season, and the Mekong River is full. The weather is becoming drier, making it perfect for exploring the city's numerous temples and taking boat trips to nearby caves and waterfalls.</p>
        
        <h2>7. Taipei, Taiwan</h2>
        
        <p>October brings comfortable temperatures to Taipei, making it an ideal time to explore this vibrant city. From the towering Taipei 101 to the numerous night markets offering delicious street food, Taipei offers a perfect blend of modern amenities and traditional Chinese culture.</p>
        
        <h2>8. Bhutan</h2>
        
        <p>October offers clear skies and spectacular mountain views in Bhutan. This is the perfect time to trek through the Himalayan kingdom, visit ancient dzongs (fortresses), and experience the unique Buddhist culture that permeates every aspect of life in Bhutan.</p>
        
        <h2>9. Rajasthan, India</h2>
        
        <p>As the monsoon ends and before the tourist season peaks, October is an excellent time to explore the colorful state of Rajasthan. The weather is becoming cooler, making it comfortable to explore the magnificent forts and palaces of Jaipur, Jodhpur, and Udaipur.</p>
        
        <h2>10. Maldives</h2>
        
        <p>While technically part of South Asia, the Maldives deserves a mention for October travel. The monsoon season is ending, bringing clearer waters for diving and snorkeling. You'll also find better deals before the high season begins in November.</p>
        
        <h2>Travel Tips for Asia in October</h2>
        
        <ul>
          <li>Pack layers, as temperatures can vary significantly, especially in mountainous regions</li>
          <li>Check for local festivals – October hosts many celebrations across Asia</li>
          <li>Book accommodations in advance for popular destinations</li>
          <li>Be aware that typhoon season can still affect East Asian coastal areas</li>
          <li>Consider travel insurance that covers weather-related disruptions</li>
        </ul>
        
        <p>Asia in October offers the perfect combination of good weather, natural beauty, and cultural experiences without the peak season crowds. Whether you're seeking spiritual enlightenment, culinary adventures, or simply stunning landscapes, these destinations will provide unforgettable experiences.</p>
      `,
      publishedAt: "2022-09-11T14:30:00Z",
      categories: [{ name: "Travel" }],
      coverImage: {
        url: "/placeholder.svg?height=300&width=500&query=blue pink gradient",
      },
      author: {
        id: 1,
        name: "Bree Mukami",
        email: "bree.mukami@example.com",
        avatar: {
          url: "/images/bree-mukami.jpg",
        },
      },
      createdAt: "2022-09-11T14:30:00Z",
      recentPosts: [],
    },
    {
      id: 3,
      title: "4 Ways to style the girl with curves tunic sweater",
      slug: "style-girl-with-curves-tunic-sweater",
      description:
        "One of the best ways to determine if a garment is worth adding to your wardrobe, is making sure it can be styled multiple ways.",
      content: `
        <p>The tunic sweater is a versatile piece that deserves a place in every woman's wardrobe, especially for those with curves. Its longer length provides flattering coverage while offering endless styling possibilities. Here are four stylish ways to wear a tunic sweater that celebrates your curves.</p>
        
        <h2>1. The Classic Leggings Look</h2>
        
        <p>Pairing your tunic sweater with leggings is perhaps the most classic and comfortable combination. The key to making this look polished rather than casual is in the details:</p>
        
        <ul>
          <li>Choose high-quality, thick leggings that aren't see-through</li>
          <li>Opt for leather or faux leather leggings for an elevated look</li>
          <li>Add ankle boots or knee-high boots depending on the season</li>
          <li>Accessorize with a statement necklace or scarf to draw attention upward</li>
          <li>Layer with a fitted jacket that hits at the waist to create definition</li>
        </ul>
        
        <p>This combination works perfectly for casual outings, running errands, or even casual Friday at the office when styled with the right accessories.</p>
        
        <h2>2. Belted Over Skinny Jeans</h2>
        
        <p>Transform your tunic sweater by adding a belt to create definition at the waist:</p>
        
        <ul>
          <li>Choose a medium-width belt that sits comfortably at your natural waist</li>
          <li>Pair with dark-wash skinny jeans for a slimming effect</li>
          <li>Add heeled booties to elongate your legs</li>
          <li>Consider slightly blousing the sweater over the belt for a relaxed look</li>
          <li>Complete the outfit with hoop earrings and stacked bracelets</li>
        </ul>
        
        <p>This style works wonderfully for casual dinners, movie dates, or weekend brunches with friends.</p>
        
        <h2>3. Layered Over a Dress</h2>
        
        <p>For a unique and feminine look, try wearing your tunic sweater over a dress:</p>
        
        <ul>
          <li>Choose a dress that's slightly longer than your tunic sweater</li>
          <li>A-line or straight skirts work best for this layered look</li>
          <li>Add tights or leggings for cooler weather</li>
          <li>Cinch with a thin belt at the waist if desired</li>
          <li>Finish with ankle boots or ballet flats</li>
        </ul>
        
        <p>This unexpected combination creates visual interest and allows you to extend your dress collection into cooler months.</p>
        
        <h2>4. French-Tucked with Wide-Leg Pants</h2>
        
        <p>For a modern, sophisticated look, pair your tunic sweater with wide-leg pants:</p>
        
        <ul>
          <li>Choose high-waisted, wide-leg pants in a complementary color</li>
          <li>Do a partial or "French" tuck of just the front portion of your sweater</li>
          <li>Add pointed-toe heels or wedges to add height</li>
          <li>Accessorize with a long pendant necklace to create a vertical line</li>
          <li>Add a structured blazer for professional settings</li>
        </ul>
        
        <p>This combination is perfect for the office, dinner parties, or any occasion where you want to look polished and put-together.</p>
        
        <h2>Styling Tips for Curvy Figures</h2>
        
        <ul>
          <li>Look for tunic sweaters with subtle waist definition or the ability to add it with a belt</li>
          <li>V-necks and scoop necks tend to be most flattering for showcasing your décolletage</li>
          <li>Consider the material – a thinner knit will drape better than a bulky one</li>
          <li>Pay attention to the length – ideally, a tunic should hit at the most flattering part of your thighs</li>
          <li>Don't be afraid of color and patterns – just ensure they're proportional to your frame</li>
        </ul>
        
        <p>The beauty of a tunic sweater is its versatility. By styling it these different ways, you'll get maximum value from this wardrobe staple while flattering your curves beautifully.</p>
      `,
      publishedAt: "2022-09-07T09:15:00Z",
      categories: [{ name: "Fashion" }],
      coverImage: {
        url: "/placeholder.svg?height=300&width=500&query=pink orange gradient",
      },
      author: {
        id: 1,
        name: "Bree Mukami",
        email: "bree.mukami@example.com",
        avatar: {
          url: "/images/bree-mukami.jpg",
        },
      },
      createdAt: "2022-09-07T09:15:00Z",
      recentPosts: [],
    },
    {
      id: 4,
      title: "6 Amazing health benefits of dark chocolate",
      slug: "health-benefits-dark-chocolate",
      description:
        "If health wasn't reason enough for you to go on and indulge in dark chocolate, then here are some amazing health benefits that will convince you.",
      content: `
        <p>Dark chocolate isn't just a delicious treat; it's also packed with nutrients that can positively impact your health. Made from the seed of the cacao tree, high-quality dark chocolate with a high cocoa content contains fiber, iron, magnesium, copper, manganese, and several other beneficial compounds. Here are six evidence-based health benefits of dark chocolate.</p>
        
        <h2>1. Powerful Source of Antioxidants</h2>
        
        <p>Dark chocolate is loaded with organic compounds that function as antioxidants, including polyphenols, flavanols, and catechins. According to research, the antioxidant activity in dark chocolate is higher than in many other foods, including blueberries and acai berries. These antioxidants help neutralize free radicals, which can damage cells and contribute to aging and diseases.</p>
        
        <h2>2. May Improve Heart Health</h2>
        
        <p>The compounds in dark chocolate appear to be highly protective against the oxidation of LDL cholesterol. Over time, oxidized LDL can damage the lining of arteries in your heart, leading to a buildup of plaque. Studies show that consuming dark chocolate can reduce cardiovascular risk by:</p>
        
        <ul>
          <li>Lowering blood pressure in people with high blood pressure</li>
          <li>Increasing HDL (good) cholesterol</li>
          <li>Reducing LDL (bad) cholesterol</li>
          <li>Decreasing insulin resistance, a common risk factor for heart disease</li>
        </ul>
        
        <h2>3. Could Improve Brain Function</h2>
        
        <p>The good news isn't over yet. Dark chocolate may also improve brain function by:</p>
        
        <ul>
          <li>Increasing blood flow to the brain</li>
          <li>Enhancing cognitive function in elderly individuals with mental impairment</li>
          <li>Improving verbal fluency and several risk factors for disease</li>
        </ul>
        
        <p>The flavanols in cocoa can cross the blood-brain barrier and participate in biochemical pathways that produce neurons and important molecules for brain function. Additionally, the caffeine and theobromine in dark chocolate may enhance short-term brain function.</p>
        
        <h2>4. May Protect Your Skin</h2>
        
        <p>The bioactive compounds in dark chocolate may also benefit your skin. The flavanols can:</p>
        
        <ul>
          <li>Protect against sun damage</li>
          <li>Improve blood flow to the skin</li>
          <li>Increase skin density and hydration</li>
          <li>Decrease skin roughness and scaling</li>
        </ul>
        
        <p>The minimal erythemal dose (MED) is the minimum amount of UVB rays required to cause redness in the skin 24 hours after exposure. Studies have shown that after consuming dark chocolate high in flavanols for 12 weeks, the MED more than doubled, suggesting significant protection from the sun's harmful effects.</p>
        
        <h2>5. Could Reduce Inflammation</h2>
        
        <p>Chronic inflammation is at the root of many diseases, including heart disease, diabetes, arthritis, and certain types of cancer. Dark chocolate contains compounds with anti-inflammatory properties that may help reduce inflammation in the body. Studies have found that consuming dark chocolate can reduce markers of inflammation in the blood.</p>
        
        <h2>6. May Improve Mood and Reduce Stress</h2>
        
        <p>Dark chocolate contains several compounds that can influence our mood and brain function:</p>
        
        <ul>
          <li>Phenylethylamine (PEA): A compound that stimulates the brain to release endorphins</li>
          <li>Anandamide: Often called the "bliss molecule," it activates pleasure receptors in the brain</li>
          <li>Theobromine and caffeine: Mild stimulants that can improve mood and energy</li>
        </ul>
        
        <p>Research has shown that consuming dark chocolate can reduce stress hormones like cortisol and catecholamines in the body, potentially reducing the negative effects of stress.</p>
        
        <h2>Choosing the Right Dark Chocolate</h2>
        
        <p>To maximize the health benefits of dark chocolate, choose varieties that:</p>
        
        <ul>
          <li>Contain at least 70% cocoa content (higher is better)</li>
          <li>Have minimal added sugar</li>
          <li>List cocoa or chocolate liquor as the first ingredient, not sugar</li>
          <li>Are organic and fair-trade when possible</li>
        </ul>
        
        <p>Remember that while dark chocolate offers health benefits, it's still calorie-dense and should be consumed in moderation – about 1-2 ounces (30-60g) per day is sufficient to reap the benefits without overindulging.</p>
      `,
      publishedAt: "2022-08-11T11:45:00Z",
      categories: [{ name: "Health" }],
      coverImage: {
        url: "/placeholder.svg?height=300&width=500&query=blue green gradient",
      },
      author: {
        id: 1,
        name: "Bree Mukami",
        email: "bree.mukami@example.com",
        avatar: {
          url: "/images/bree-mukami.jpg",
        },
      },
      createdAt: "2022-08-11T11:45:00Z",
      recentPosts: [],
    },
    {
      id: 5,
      title: "How to choose a purpose in life when we're overwhelmed by options",
      slug: "choose-purpose-in-life",
      description:
        "In a world filled with choices, look at your past to identify patterns in what brings you joy and meaning. Then, take small steps to explore those areas.",
      content: `
        <p>In today's world of endless possibilities, many of us struggle with a paradox: having too many options can actually make it harder to find our purpose. When faced with countless paths, how do we choose the one that will bring us fulfillment? Here's a thoughtful approach to finding your purpose when you're overwhelmed by options.</p>
        
        <h2>Understand That Purpose Is Fluid</h2>
        
        <p>First, release the pressure of finding your "one true calling." Purpose isn't necessarily a single, unchanging destination. For many people, purpose evolves throughout life. What gives your life meaning at 25 may be different from what fulfills you at 45 or 65.</p>
        
        <p>Think of purpose as a direction rather than a destination—a way of moving through life that aligns with your values and brings a sense of meaning, even as specific goals and activities change.</p>
        
        <h2>Look for Patterns in Your Past</h2>
        
        <p>Our histories contain valuable clues about what brings us fulfillment. Reflect on these questions:</p>
        
        <ul>
          <li>When have you lost track of time because you were so engaged in an activity?</li>
          <li>What experiences have brought you the deepest sense of satisfaction?</li>
          <li>What problems do you find yourself naturally drawn to solving?</li>
          <li>What topics do you consistently enjoy learning about?</li>
          <li>When have you felt most proud of yourself?</li>
        </ul>
        
        <p>Look for patterns in your answers. These patterns often point toward activities and values that align with your natural inclinations and sources of meaning.</p>
        
        <h2>Identify Your Core Values</h2>
        
        <p>Purpose is closely tied to values—the principles that matter most to you. When your actions align with your values, you're more likely to feel fulfilled. Consider what values consistently show up as important in your life:</p>
        
        <ul>
          <li>Creativity and self-expression</li>
          <li>Connection and relationships</li>
          <li>Learning and growth</li>
          <li>Service to others</li>
          <li>Achievement and recognition</li>
          <li>Autonomy and independence</li>
          <li>Security and stability</li>
        </ul>
        
        <p>Understanding your core values helps narrow your focus to options that honor what matters most to you.</p>
        
        <h2>Start Small: Experiment and Iterate</h2>
        
        <p>Rather than trying to make one perfect choice, adopt an experimental mindset. Purpose often emerges through action rather than contemplation alone. Try these approaches:</p>
        
        <ul>
          <li><strong>The 30-day trial:</strong> Commit to exploring a potential interest for just 30 days</li>
          <li><strong>Volunteer:</strong> Offer your time to causes that interest you</li>
          <li><strong>Take a class:</strong> Learn something new that aligns with your curiosity</li>
          <li><strong>Side projects:</strong> Dedicate a few hours each week to a passion project</li>
        </ul>
        
        <p>Pay attention to how these experiences make you feel. Energy and engagement are powerful indicators that you're moving in the right direction.</p>
        
        <h2>Embrace Constraints</h2>
        
        <p>Counterintuitively, imposing some limitations can make finding purpose easier. When faced with too many options, consider:</p>
        
        <ul>
          <li>Focusing on just 2-3 potential paths at a time</li>
          <li>Setting a deadline for making an initial choice</li>
          <li>Eliminating options that clearly don't align with your values</li>
          <li>Considering what you can uniquely contribute, given your specific combination of skills and experiences</li>
        </ul>
        
        <p>Constraints help transform overwhelming possibility into manageable choice.</p>
        
        <h2>Connect to Something Larger</h2>
        
        <p>Research consistently shows that purpose is often tied to contributing to something beyond ourselves. Consider how your interests and skills might:</p>
        
        <ul>
          <li>Help solve problems in your community</li>
          <li>Contribute to causes you care about</li>
          <li>Create meaningful experiences for others</li>
          <li>Pass knowledge or wisdom to future generations</li>
        </ul>
        
        <p>When personal passion connects with broader impact, purpose often emerges naturally.</p>
        
        <h2>Practice Mindfulness and Reflection</h2>
        
        <p>Regular reflection helps you notice what activities and experiences bring genuine fulfillment. Consider keeping a journal where you record:</p>
        
        <ul>
          <li>Moments when you felt most alive and engaged</li>
          <li>Instances when you felt you were making a meaningful contribution</li>
          <li>Activities that energized rather than depleted you</li>
        </ul>
        
        <p>Over time, these reflections reveal patterns that can guide your choices.</p>
        
        <h2>Conclusion: Purpose as a Practice</h2>
        
        <p>Finding purpose isn't a one-time decision but an ongoing practice of aligning your actions with your values and sources of meaning. By looking for patterns in your past, identifying core values, experimenting with possibilities, embracing helpful constraints, connecting to something larger, and practicing regular reflection, you can navigate the sea of options and discover a path that brings genuine fulfillment.</p>
        
        <p>Remember that purpose often reveals itself gradually through living intentionally, rather than through a single moment of clarity. Be patient with the process and trust that meaningful direction will emerge as you take thoughtful steps forward.</p>
      `,
      publishedAt: "2022-07-15T10:00:00Z",
      categories: [{ name: "Lifestyle" }],
      coverImage: {
        url: "/placeholder.svg?height=300&width=500&query=pink gradient",
      },
      author: {
        id: 1,
        name: "Bree Mukami",
        email: "bree.mukami@example.com",
        avatar: {
          url: "/images/bree-mukami.jpg",
        },
      },
      createdAt: "2022-07-15T10:00:00Z",
      recentPosts: [],
    },
    {
      id: 6,
      title: "3 Simple Habits for Daily Mindfulness",
      slug: "simple-habits-daily-mindfulness",
      description:
        "Incorporate these three simple practices into your daily routine to cultivate greater mindfulness and presence in your everyday life.",
      content: `
        <p>In our fast-paced world, mindfulness—the practice of being fully present and engaged in the moment—has become an essential skill for maintaining mental well-being. The good news is that cultivating mindfulness doesn't require hours of meditation or major lifestyle changes. By incorporating these three simple habits into your daily routine, you can develop greater awareness and presence in your everyday life.</p>
        
        <h2>1. The Mindful Morning Minute</h2>
        
        <p>How you start your day sets the tone for everything that follows. Before reaching for your phone or jumping out of bed, take just one minute to practice mindfulness:</p>
        
        <ul>
          <li>When you first wake up, remain in bed with your eyes closed or softly open</li>
          <li>Take three deep, conscious breaths—inhaling slowly through your nose and exhaling completely through your mouth</li>
          <li>Notice the sensations in your body: the weight of the blanket, the texture of the sheets, the temperature of the room</li>
          <li>Set a simple intention for the day, such as "Today, I will notice moments of beauty" or "Today, I will pause before responding"</li>
        </ul>
        
        <p>This brief practice creates a mindful foundation for your day, making it more likely that you'll return to present-moment awareness throughout your waking hours. It also interrupts the automatic habit of immediately checking devices, which often throws us into a reactive state before we've even fully awakened.</p>
        
        <h2>2. Transition Moments as Mindfulness Bells</h2>
        
        <p>Our days are filled with transitions: from home to work, from one meeting to another, from work to personal time. Instead of moving through these transitions on autopilot, use them as "mindfulness bells"—reminders to return to the present moment.</p>
        
        <p>Choose 3-5 daily transitions that you'll use as mindfulness triggers, such as:</p>
        
        <ul>
          <li>Before starting your car or boarding public transportation</li>
          <li>Before entering your workplace or home</li>
          <li>Before eating a meal</li>
          <li>Before checking email or social media</li>
          <li>Before a meeting or conversation</li>
        </ul>
        
        <p>When you encounter these transitions, pause for just 10-15 seconds to:</p>
        
        <ul>
          <li>Take one conscious breath</li>
          <li>Feel your feet on the ground</li>
          <li>Notice your current emotional and mental state without judgment</li>
        </ul>
        
        <p>These brief moments of awareness prevent you from carrying stress or distraction from one activity to the next. They create small resets throughout your day, allowing you to approach each new situation with fresh attention.</p>
        
        <h2>3. The Evening Gratitude Scan</h2>
        
        <p>End your day with a simple practice that both cultivates mindfulness and promotes positive emotion:</p>
        
        <ul>
          <li>Before falling asleep, take 2-3 minutes to mentally scan through your day</li>
          <li>Identify three specific moments for which you feel grateful—they can be simple pleasures, meaningful interactions, or personal accomplishments</li>
          <li>For each moment, briefly replay the experience in your mind, noticing the sensations, emotions, and details associated with it</li>
          <li>Acknowledge how these experiences contributed to your day</li>
        </ul>
        
        <p>This practice trains your mind to notice positive experiences throughout the day (knowing you'll be recalling them later) and helps you develop the habit of paying attention to the present moment in greater detail. It also counteracts the brain's natural negativity bias, which tends to fixate on what went wrong rather than what went well.</p>
        
        <h2>Making These Habits Stick</h2>
        
        <p>The key to establishing any new habit is consistency and integration with existing routines. Here are some tips for incorporating these mindfulness practices successfully:</p>
        
        <ul>
          <li>Start with just one habit and practice it daily for two weeks before adding another</li>
          <li>Use visual reminders (like a small sticker or symbol) in relevant locations to trigger your mindfulness practice</li>
          <li>Pair each mindfulness habit with something you already do consistently</li>
          <li>Keep expectations realistic—even a few seconds of mindfulness is valuable</li>
          <li>Be compassionate with yourself when you forget; simply begin again</li>
        </ul>
        
        <p>Remember that mindfulness is not about achieving a particular state or eliminating thoughts. It's about developing the capacity to notice your experience as it unfolds, with curiosity and kindness. These three simple habits—the morning minute, transition moments, and evening gratitude scan—create natural opportunities throughout your day to return to the present moment, gradually building a more mindful approach to living.</p>
      `,
      publishedAt: "2022-06-20T09:30:00Z",
      categories: [{ name: "Lifestyle" }],
      coverImage: {
        url: "/placeholder.svg?height=300&width=500&query=purple gradient",
      },
      author: {
        id: 1,
        name: "Bree Mukami",
        email: "bree.mukami@example.com",
        avatar: {
          url: "/images/bree-mukami.jpg",
        },
      },
      createdAt: "2022-06-20T09:30:00Z",
      recentPosts: [],
    },
  ]
  
  // Add recent posts to each article
  articles.forEach((article) => {
    article.recentPosts = articles
      .filter((a) => a.id !== article.id)
      .slice(0, 3)
      .map((a) => ({
        id: a.id,
        title: a.title,
        slug: a.slug,
        publishedAt: a.publishedAt,
        description: a.description,
        content: a.content,
        createdAt: a.createdAt,
        coverImage: a.coverImage,
        author: a.author,
        categories: a.categories,
      }))
  })
  
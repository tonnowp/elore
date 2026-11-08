/* ==========================================================
   ELENCO PRODOTTI

   - name:  nome della fragranza
   - fam:   categoria per il filtro — deve corrispondere ESATTAMENTE
            a uno dei valori data-fam dei bottoni:
            "Women" | "Men" | "UoL" | "BC" | "C"
   - desc:  breve descrizione
   - image: chiave dell'immagine — NON un percorso locale. Viene
            risolta tramite PRODUCT_IMAGES (js/product-images.js),
            che punta alle immagini caricate manualmente su ImgBB
            (vedi js/product-images.js per i dettagli).
   - price: prezzo in $ (numero, senza simboli) — usato in collections.html
            per il filtro a fascia di prezzo
   ========================================================== */
const products = [
  {
    id: "florale",
    name: "Florale",
    fam: "Women",
    desc: "A luxurious, modern bouquet where the seductive warmth of night-blooming jasmine meets the delicate romance of Damask rose. Infused with a soft, velvety base of Madagascar vanilla and white musk, it leaves an elegant, powdery trail that embodies timeless femininity.",
    image: "florale.png",
    price: 6000
  },
  {
    id: "blossom",
    name: "Blossom Éclat",
    fam: "Women",
    desc: "A luminous and sophisticated floral-fruity masterpiece. It opens with the crisp, sparkling sweetness of white pear and orange blossom, gently unfolding into a rich heart of absolute iris. A base of smooth praline and patchouli adds an addictive, modern touch of elegance.",
    image: "blossom.png",
    price: 6000
  },
  {
    id: "rouge",
    name: "Rouge Velours",
    fam: "Women",
    desc: "An opulent and deeply seductive fragrance. It pairs the dark, syrupy sweetness of black cherry and roasted almond with a rich heart of crimson rose. A warm, lingering base of amberwood and tonka bean gives it a striking, nocturnal allure.",
    image: "Rouge.png",
    price: 6000
  },
  {
    id: "orchid",
    name: "Orchid Nuit",
    fam: "Women",
    desc: "An enigmatic and deeply sensual scent centered around rare black orchid and dark plum. The fragrance is sharpened by a touch of pink pepper and grounded in an earthy, luxurious base of patchouli, vetiver, and rich dark chocolate.",
    image: "orchid.png",
    price: 7000
  },
  {
    id: "soieblanche",
    name: "Soie Blanche",
    fam: "Women",
    desc: "The ultimate expression of clean, understated luxury. It captures the crisp sensation of white silk on the skin with notes of bright aldehydes, soft cotton flower, and powdery white iris, resting beautifully on a delicate bed of blonde woods.",
    image: "SoieBlanche.png",
    price: 7000
  },
  {
    id: "oud",
    name: "Oud Voyage",
    fam: "Men",
    desc: "A deep, magnetic fragrance that opens with the intense warmth of dark Cambodian Oud wood, balanced by the sharp spice of saffron and rich cardamom. The scent settles into a sophisticated base of roasted tonka bean and leather, creating a powerful, mysterious, and commanding presence.",
    image: "oud.png",
    price: 6000
  },
  {
    id: "bleu",
    name: "Bleu Impérial",
    fam: "Men",
    desc: "A sharp, commanding scent that balances raw freshness with deep woodiness. It leads with a striking burst of cold mint and crushed pink pepper, moving swiftly into a solid heart of cedarwood and vetiver. The fragrance closes with a luxurious, lingering trace of dark incense and ambergris.",
    image: "bleu.png",
    price: 6000
  },
  {
    id: "tabac",
    name: "Tabac Doré",
    fam: "Men",
    desc: "A rich, warm, and comforting fragrance built for the modern gentleman. It highlights the sweet, smoky aroma of premium tobacco leaves and rich Cuban rum, layered with spicy cinnamon and drizzled with warm, golden honey over a base of dark vanilla.",
    image: "tabac.png",
    price: 7000
  },
  {
    id: "noir",
    name: "Cuir Noir",
    fam: "Men",
    desc: "A bold, ruggedly sophisticated fragrance that celebrates ultra-premium leather. It blends the smoky texture of black suede with wild Tuscan iris and saffron, supported by a heavy, masculine backbone of dark woods, styrax, and rich frankincense.",
    image: "noir.png",
    price: 6000
  },
  {
    id: "vert",
    name: "Vert Sauvage",
    fam: "Men",
    desc: "A vibrant, masculine green fragrance that feels like an upscale escape into the wild. Crisp galbanum, crushed mint leaves, and bitter bergamot collide with a sharp heart of violet leaf, resting on a clean, modern base of oakmoss and mineral amber.",
    image: "vert.png",
    price: 7000
  },
  {
    id: "obsidianvapour",
    name: "Obsidian Vapour",
    fam: "Men",
    desc: "Inspired by volcanic terrain and crisp high-altitude air. It features a striking opening of crushed juniper berries and iced mint, balanced by volcanic mineral slate, crisp cedar, and smoky vetiver.",
    image: "obsidianvapour.png",
    price: 8000
  },
  {
    id: "auraimperium",
    name: "Aura Imperium",
    fam: "Men",
    desc: "A bold, regal scent crafted for presence. It merges spicy cardamom and dark roasted coffee beans with a rich heart of tonka bean, guided by an enduring finish of aged rum and golden amber.",
    image: "auraimperium.png",
    price: 8000
  },
  {
    id: "verdantdrift",
    name: "Verdant Drift",
    fam: "Men",
    desc: "Clean, grounded, and invigorating. Bright bergamot and crushed eucalyptus leaves mix with lush bamboo stem, resting gently on a fresh base of wet oakmoss and white cedarwood.",
    image: "verdantdrift.png",
    price: 9000
  },
  {
    id: "auravolcanique",
    name: "Aura Volcanique",
    fam: "Men",
    desc: "An intoxicating mix of charred pineapple and smoked yuzu citrus, anchored by volcanic mineral ash. A heart of spicy pink pepper gives way to dark vetiver and rich, resinous oud wood.",
    image: "auravolcanique.png",
    price: 9000
  },
  {
    id: "verdant",
    name: "Verdant Tropics",
    fam: "Men",
    desc: "Crisp, wild green mango and crushed papaya leaves paired with sharp kaffir lime. The tropical freshness settles grounded in damp bamboo wood, vetiver root, and smoky black tea.",
    image: "verdant.png",
    price: 10000
  },
  {
    id: "obsidianstolsice",
    name: "Obsidian Solstice",
    fam: "Men",
    desc: "Bold and magnetic. Ripe spiced plum and dark passionfruit fuse with roasted Tonka bean and smoked vanilla, finished with a rich base of aged rum and dark leather.",
    image: "obsidianstolsice.png",
    price: 10000
  },
  {
    id: "celestialsilk",
    name: "Celestial Silk",
    fam: "Women",
    desc: "Designed to evoke the feeling of weightless elegance. It combines ethereal white peony and crisp nashi pear with a heart of shimmering iris, settling into a velvet base of cashmere wood and warm white musk.",
    image: "celestialsilk.png",
    price: 8000
  },
  {
    id: "soleil",
    name: "Soleil de Sapphire",
    fam: "Women",
    desc: "A vibrant fragrance that captures the warmth of a Mediterranean summer sunset. It opens with sun-ripened blood orange and salty sea spray, gracefully blooming into orange blossom and a subtle touch of sweet coconut nectar.",
    image: "soleil.png",
    price: 9000
  },
  {
    id: "nocturnerose",
    name: "Nocturne Rose",
    fam: "Women",
    desc: "Mysterious and deeply sensual. Midnight-blooming Damask rose is paired with smoky saffron and pink pepper, resting on a luxurious foundation of dark vanilla bean, leather, and rich agarwood.",
    image: "nocturnerose.png",
    price: 8000
  },
  {
    id: "solaris",
    name: "Solaris Passion",
    fam: "Women",
    desc: "A vivid burst of golden passionfruit and pink dragonfruit blended with sun-drenched hibiscus blossoms. It settles into a creamy coconut cream base with hints of wild guava and golden amber.",
    image: "solaris.png",
    price: 9000
  },
  {
    id: "sirens",
    name: "Siren’s Nectar",
    fam: "Women",
    desc: "Lush, juicy lychee and crushed starfruit layered over sweet water lily. As it dries down, lingering notes of ripe mangosteen, Tahitian vanilla, and soft driftwood create a mesmerising, tropical trail.",
    image: "sirens.png",
    price: 10000
  },
  {
    id: "nocturnevelvet",
    name: "Nocturne Velvet",
    fam: "Women",
    desc: "Opulent midnight purple fig and rich black cherry laced with warm cardamom. The deep fruity opening evolves into dark orchid petals, smooth cocoa butter, and velvet sandalwood.",
    image: "nocturnevelvet.png",
    price: 10000
  },
  {
    id: "skyeperfume",
    name: "Skye",
    fam: "Women",
    desc: "A bold night fragrance capturing the Australian desert under the stars. Crisp lemon myrtle and pink pepperberry burst over a sweet heart of desert rose, honey, and native resins, anchored by a deep, room-filling base of aged oud, smoky eucalyptus, and dark vanilla amber.",
    image: "skyeperfume.png",
    price: 8000
  },
  {
    id: "amethyst",
    name: "Amethyst",
    fam: "BC",
    desc: "A luxurious scented body lotion inspired by an intense and mysterious fragrance, defined by deep purple tones and an elegant, captivating identity.",
    image: "amethyst.png",
    price: 7000
  },
  {
    id: "cloudveil",
    name: "Cloud Veil",
    fam: "BC",
    desc: "A creamy facial mask with a soft, enveloping texture, created for a calming and luxurious skincare ritual.",
    image: "cloudveil.png",
    price: 7000
  },
  {
    id: "lumine",
    name: "Luminé",
    fam: "BC",
    desc: "A lightweight, luminous facial serum designed to hydrate the skin while leaving it looking fresh, smooth, even, and naturally radiant.",
    image: "lumine.png",
    price: 7000
  },
  {
    id: "solara",
    name: "Solara",
    fam: "BC",
    desc: "A lightweight, radiant body oil designed to leave the skin feeling silky with a delicate luminous finish, inspired by the warmth and glow of sunlight.",
    image: "solara.png",
    price: 7000
  },
  {
    id: "velvetbloom",
    name: "Velvet Bloom",
    fam: "BC",
    desc: "A rich, creamy body scrub with a soft, luxurious texture, designed to leave the skin feeling smooth, soft, and velvety.",
    image: "velvetbloom.png",
    price: 7000
  },
  {
    id: "Veloura",
    name: "Veloura",
    fam: "BC",
    desc: "A rich, soothing foot mask designed to deeply nourish dry, tired feet and leave the skin feeling exceptionally soft, smooth, and refreshed.",
    image: "Veloura.png",
    price: 7000
  },
  {
    id: "Vespera",
    name: "Vespera",
    fam: "Women",
    desc: "A cold, mysterious nocturnal fragrance. Bitter almond and crushed black hemlock open over an intoxicating heart of midnight jasmine and belladonna blossom, anchored by a shadowy base of black patchouli, smoked myrrh, and obsidian amber.",
    image: "Vespera.png",
    price: 7000
  },
  {
    id: "Crimson",
    name: "Crimson",
    fam: "Women",
    desc: "Dramatic and opulent. Syrupy dark plum and pink pepperberry melt into a heavy, velvety heart of crimson rose and church incense, grounding into a long-lasting base of smoked buddha wood, dark vanilla, and black leather.",
    image: "Crimson.png",
    price: 7000
  },
  {
    id: "Coven",
    name: "Coven",
    fam: "Women",
    desc: "Evokes an ancient, damp stone courtyard enveloped in fog. Cold eucalyptus leaf and violet leaf pierce through a dark heart of dried lichen and damp soil, settling into a deep base of wet oakmoss, vetiver root, and smoky frankincense.",
    image: "coven.png",
    price: 8000
  },
  {
    id: "Cathedral",
    name: "Cathedral",
    fam: "Men",
    desc: "Evokes a somber, torch-lit stone cathedral at midnight. Heavy frankincense smoke and cold myrrh open over a heart of dark charred cedar and dry clove, anchored by an intense base of black ash, labdanum resin, and damp cathedral moss.",
    image: "cathedral.png",
    price: 7000
  },
  {
    id: "Nocturnal King",
    name: "Nocturnal King",
    fam: "Men",
    desc: "A commanding, villainous fragrance. Sharp metallic gunpowder and crushed black pepper spark over a heart of bruised crimson rose and native wattleseed, grounding into a heavy, room-filling base of aged oud, smoked eucalyptus gum, and black leather.",
    image: "Nocturnal King.png",
    price: 7000
  },
  {
    id: "Graveyard",
    name: "Graveyard",
    fam: "Men",
    desc: "Atmospheric, cold, and deeply subterranean. Sharp blue gum eucalyptus and icy petrichor (rain on cold earth) pierce through a heart of unrefined black patchouli and dried tobacco leaf, settling into a dense base of wet oakmoss, vetiver root, and dark amber resin.",
    image: "Graveyard.png",
    price: 8000
  },
  {
    id: "Sanguine Shadow",
    name: "Sanguine Shadow",
    fam: "Men",
    desc: "Sinister and opulent. Bitter almond and black hemlock open over a heavy heart of rich pipe tobacco and native plum, anchored by a long-lasting base of raw black suede, buddha wood, and dark vanilla bean.",
    image: "Sanguine Shadow.png",
    price: 8000
  },
  {
    id: "Bois Sacré",
    name: "Bois Sacré",
    fam: "C",
    desc: "A rich woody fragrance inspired by a quiet, ancient forest. Fresh pine needles and aromatic cedar open the composition, followed by sacred woods, earthy moss, and subtle incense. A warm base of sandalwood, vetiver, and amber gives it depth and serenity.",
    image: "Bois Sacré.png",
    price: 7000
  },
  {
    id: "Crimson Sin",
    name: "Crimson Sin",
    fam: "C",
    desc: "A dark and sensual fragrance opening with juicy blood orange, saffron, and black pepper. The heart reveals rich rose, dark plum, and jasmine, melting into a seductive base of amber, vanilla, leather, and smoky woods.",
    image: "Crimson Sin.png",
    price: 7000
  },
  {
    id: "Lune Blanche",
    name: "Lune Blanche",
    fam: "C",
    desc: "A clean and luminous fragrance inspired by a quiet moonlit night. Fresh bergamot and pear open the composition, followed by white jasmine, iris, and soft lavender. The fragrance settles into white musk, cashmere wood, and a subtle touch of vanilla.",
    image: "Lune Blanche.png",
    price: 7000
  },
  {
    id: "Noir Éclipse",
    name: "Noir Éclipse",
    fam: "C",
    desc: "A deep and mysterious fragrance opening with smoky bergamot and black pepper, slowly revealing dark woods, incense, and soft violet. The base settles into rich amber, patchouli, and warm musk, creating an elegant and hypnotic nocturnal atmosphere.",
    image: "Noir Éclipse.png",
    price: 7000
  },
  {
    id: "Rosé Velours",
    name: "Rosé Velours",
    fam: "C",
    desc: "A soft and romantic blend of fresh rose petals, pink pepper, and delicate lychee. The heart blooms into velvety rose, peony, and jasmine, resting on a warm base of vanilla, white musk, and smooth sandalwood.",
    image: "Rosé Velours.png",
    price: 7000
  },
  {
    id: "Vanilla Reverie",
    name: "Vanilla Reverie",
    fam: "C",
    desc: "A warm and comforting gourmand fragrance centered around creamy vanilla. Soft notes of caramel and almond blend with freshly baked pastries and a touch of cinnamon, while tonka bean, white musk, and sandalwood create a smooth and indulgent finish.",
    image: "Vanilla Reverie.png",
    price: 7000
  },
  {
    id: "Strawberry Mochi",
    name: "Strawberry Mochi",
    fam: "Women",
    desc: "Soft, playful, and irresistibly sweet. Bright pink berries and juicy wild strawberry pierce through a heart of steamed sweet rice flour and marshmallow fluff, settling into a dense base of creamy vanilla bean, whipped cream, and pastel white musk.",
    image: "Strawberry Mochi.png",
    price: 6000
  },
  {
    id: "Sakura Boba",
    name: "Sakura Boba",
    fam: "Women",
    desc: "Delicate, airy, and comfortingly sweet. Sugared cherry blossom and sparkling lychee pierce through a heart of sweet condensed milk and black tea, settling into a dense base of brown sugar tapioca pearls, sheer blonde woods, and soft amber.",
    image: "Sakura Boba.png",
    price: 6000
  },
  {
    id: "Peach Cloud",
    name: "Peach Cloud",
    fam: "Women",
    desc: "Bright, cheerful, and velvety soft. Sun-kissed white peach and pink raspberry pierce through a heart of whipped apricot nectar and cotton candy, settling into a dense base of sweet vanilla cashmere, tonka bean, and fluffy marshmallow musk.",
    image: "Peach Cloud.png",
    price: 8000
  },
  {
    id: "Kitten Puff",
    name: "Kitten Puff",
    fam: "Women",
    desc: "Cozy, delicate, and innocent. Candied lemon peel and soft pink berry pierce through a heart of powdery violet petals and sweet spun sugar, settling into a dense base of warm vanilla milk, silky sandalwood, and clean baby powder musk.",
    image: "Kitten Puff.png",
    price: 8000
  },
  {
    id: "Matcha Milk",
    name: "Matcha Milk",
    fam: "Men",
    desc: "Fresh, comforting, and modern. Crisp bergamot and whipped ceremonial matcha pierce through a heart of warm steamed milk and toasted rice, settling into a dense base of creamy sandalwood, sweet vanilla bean, and soft white cedar.",
    image: "Matcha Milk.png",
    price: 6000
  },
  {
    id: "Ramune Fizz",
    name: "Ramune Fizz",
    fam: "Men",
    desc: "Bouncy, energetic, and refreshing. Fizzy Yuzu lime and sparkling pink berry pierce through a heart of sweet marble soda accord and candied mint, settling into a dense base of clean white musk, sweet ambergris, and sun-bleached driftwood.",
    image: "Ramune Fizz.png",
    price: 6000
  },
  {
    id: "Gummy Bear",
    name: "Gummy Bear",
    fam: "Men",
    desc: "Bold, nostalgic, and fun. Juicy green apple and candied pink raspberry pierce through a heart of sweet citrus gummies and subtle star anise, settling into a dense base of sugary amber, smooth blond woods, and clean cotton musk.",
    image: "Gummy Bear.png",
    price: 8000
  },
  {
    id: "Choco Bun",
    name: "Choco Bun",
    fam: "Men",
    desc: "Rich, cozy, and adorable. Crushed hazelnut and warm cocoa powder pierce through a heart of fresh baked sweet bread and melted milk chocolate, settling into a dense base of bourbon vanilla, roasted tonka bean, and soft cedar.",
    image: "Choco Bun.png",
    price: 8000
  },
  {
    id: "amber-leather",
    name: "Amber Leather",
    fam: "Men",
    desc: "Rugged, refined, and mysterious. Crushed black pepper and dried thyme pierce through a heart of worn saddle leather and dark labdanum, settling into a dense base of rich amber, smoked cedarwood, and roasted tonka.",
    image: "amber_leather.png",
    price: 7500
  },
  {
    id: "spiced-fig",
    name: "Spiced Fig",
    fam: "Men",
    desc: "Earthy, warm, and sophisticated. Sun-ripened black fig and grated ginger pierce through a heart of crushed walnut shells and dry tobacco leaf, settling into a dense base of dark rum, balsam fir, and creamy sandalwood.",
    image: "spiced_fig.png",
    price: 6800
  },
  {
    id: "black-pepper-chai",
    name: "Black Pepper Chai",
    fam: "Men",
    desc: "Intense, vibrant, and comforting. Cracked peppercorns and green cardamom pods pierce through a heart of steamed black tea and sweet clove, settling into a dense base of smoked vanilla bean, cashmeran, and vetiver root.",
    image: "black_pepper_chai.png",
    price: 6200
  },
  {
    id: "smoked-maple",
    name: "Smoked Maple",
    fam: "Men",
    desc: "Rich, rugged, and indulgent. Dark maple sap and scorched rosemary pierce through a heart of toasted chestnut and charred oakwood, settling into a dense base of bourbon vanilla, labdanum, and soft leather.",
    image: "smoked_maple.png",
    price: 8000
  },
{
    id: "strawberry-velvet",
    name: "Strawberry Velvet",
    fam: "Women",
    desc: "Sultry, bright, and decadent. Wild strawberry reduction and pink peppercorns pierce through a heart of whipped cream and red rose petals, settling into a dense base of white amber, Madagascar vanilla, and soft musk.",
    image: "strawberry_velvet.png",
    price: 6500
  },
  {
    id: "honeyed-plum",
    name: "Honeyed Plum",
    fam: "Women",
    desc: "Lush, golden, and intoxicating. Dark Damson plum and warm cinnamon pierce through a heart of raw wildflower honey and night-blooming jasmine, settling into a dense base of liquid benzoin, patchouli, and sandalwood.",
    image: "honeyed_plum.png",
    price: 7800
  },
  {
    id: "lemon-merengue",
    name: "Lemon Merengue",
    fam: "Women",
    desc: "Crisp, airy, and delicious. Meyer lemon zest and candied bergamot pierce through a heart of toasted meringue and rich pastry cream, settling into a dense base of bourbon vanilla, tonka bean, and sheer cedarwood.",
    image: "lemon_merengue.png",
    price: 6000
  },
  {
    id: "salted-butterscotch",
    name: "Salted Butterscotch",
    fam: "Women",
    desc: "Warm, golden, and addictive. Flaky sea salt and scorched brown sugar pierce through a heart of rich butterscotch and toasted almonds, settling into a dense base of creamy sandalwood, vanilla pod, and cashmeran.",
    image: "salted_butterscotch.png",
    price: 7200
  }
];

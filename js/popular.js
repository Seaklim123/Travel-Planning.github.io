const popularDestinations = [
    {
        name: "Angkor Wat",
        description: "The largest religious monument in the world and Cambodia's most famous UNESCO World Heritage Site.",
        image: "images/popular/1.jpg",
        price: "$200 / Per person",
        category: "temple",
        destination: "temple",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Bayon Temple",
        description: "Known for its giant smiling stone faces located in the heart of Angkor Thom.",
        image: "images/popular/2.jpg",
        price: "$180 / Per person",
        category: "temple",
        destination: "temple",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Ta Prohm",
        description: "The famous jungle temple where massive tree roots intertwine with ancient ruins.",
        image: "images/popular/3.jpg",
        price: "$170 / Per person",
        category: "temple",
        destination: "temple",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Preah Vihear Temple",
        description: "A spectacular temple situated on a cliff overlooking Cambodia and Thailand.",
        image: "images/popular/4.jpg",
        price: "$220 / Per person",
        category: "temple",
        destination: "temple",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Banteay Srei",
        description: "A beautifully carved pink sandstone temple famous for its intricate artwork.",
        image: "images/popular/5.jpg",
        price: "$160 / Per person",
        category: "temple",
        destination: "temple",
        destinationDetail: "destination-detail.html"
    },

    {
        name: "Koh Rong",
        description: "A tropical island known for its white sand beaches and crystal-clear waters.",
        image: "images/popular/6.jpg",
        price: "$250 / Per person",
        category: "beach",
        destination: "beach",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Koh Rong Samloem",
        description: "A peaceful island paradise perfect for relaxation and snorkeling.",
        image: "images/popular/7.jpg",
        price: "$260 / Per person",
        category: "beach",
        destination: "beach",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Otres Beach",
        description: "A quiet beach in Sihanoukville with soft sand and calm waters.",
        image: "images/popular/8.jpg",
        price: "$120 / Per person",
        category: "beach",
        destination: "beach",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Kep Beach",
        description: "A family-friendly beach famous for fresh seafood and beautiful sunsets.",
        image: "images/popular/9.jpg",
        price: "$100 / Per person",
        category: "beach",
        destination: "beach",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Long Set Beach",
        description: "A stunning beach on Koh Rong offering golden sand and turquoise waters.",
        image: "images/popular/10.jpg",
        price: "$230 / Per person",
        category: "beach",
        destination: "beach",
        destinationDetail: "destination-detail.html"
    },

    {
        name: "Bokor Mountain",
        description: "A cool mountain retreat featuring waterfalls, forests, and the historic Bokor Palace.",
        image: "images/popular/11.jpg",
        price: "$150 / Per person",
        category: "mountain",
        destination: "mountain",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Phnom Aural",
        description: "Cambodia's highest mountain and a favorite destination for adventurous hikers.",
        image: "images/popular/12.jpg",
        price: "$180 / Per person",
        category: "mountain",
        destination: "mountain",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Kulen Mountain",
        description: "A sacred mountain with waterfalls, rivers, and ancient carvings.",
        image: "images/popular/13.jpg",
        price: "$170 / Per person",
        category: "mountain",
        destination: "mountain",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Cardamom Mountains",
        description: "One of Southeast Asia's largest rainforests, rich in biodiversity and wildlife.",
        image: "images/popular/14.jpg",
        price: "$240 / Per person",
        category: "mountain",
        destination: "mountain",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Phnom Krom",
        description: "A scenic hill near Siem Reap offering panoramic sunset views.",
        image: "images/popular/15.jpg",
        price: "$90 / Per person",
        category: "mountain",
        destination: "mountain",
        destinationDetail: "destination-detail.html"
    },

    {
        name: "Virachey National Park",
        description: "A remote rainforest home to rare wildlife, waterfalls, and indigenous communities.",
        image: "images/popular/16.jpg",
        price: "$280 / Per person",
        category: "forest",
        destination: "forest",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Kirirom National Park",
        description: "A beautiful pine forest with cool weather, hiking trails, and waterfalls.",
        image: "images/popular/17.jpg",
        price: "$150 / Per person",
        category: "forest",
        destination: "forest",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Botum Sakor National Park",
        description: "Cambodia's largest national park featuring mangroves, forests, and wildlife.",
        image: "images/popular/18.jpg",
        price: "$220 / Per person",
        category: "forest",
        destination: "forest",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Prey Lang Wildlife Sanctuary",
        description: "One of Southeast Asia's most important evergreen forests rich in biodiversity.",
        image: "images/popular/19.jpg",
        price: "$200 / Per person",
        category: "forest",
        destination: "forest",
        destinationDetail: "destination-detail.html"
    },
    {
        name: "Keo Seima Wildlife Sanctuary",
        description: "A protected forest famous for its elephants, gibbons, and diverse wildlife.",
        image: "images/popular/20.jpg",
        price: "$210 / Per person",
        category: "forest",
        destination: "forest",
        destinationDetail: "destination-detail.html"
    }
];


const popularContainer = document.getElementById("popular-destinations");

popularDestinations.forEach(popular => {
    const card = document.createElement("div");
    card.classList.add("col-12","col-sm-6","col-lg-4","mb-4");
    card.innerHTML = `
        <div class="popular-card h-100">
            <img src="${popular.image}" class="popular-img" alt="${popular.name}">
            <div class="popular-body">
                <a href="#" class="text-decoration-none">​
                    <h5 class="popular-title">${popular.name}</h5>
                </a>
                <p class="popular-description">${popular.description}</p>
                <div class="popular-price">
                    <i class="bi bi-tag"></i>
                    ${popular.price}
                </div
                <a href="#" class="popular-btn">
                    View Details
                </a>
            </div>
        </div>
    `;

    popularContainer.appendChild(card);
});
var destination = [
    {
        name: "Angkor Wat", 
        description: "Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world, on a site measuring 162.6 hectares.",
        image: "images/card/beach-one.jpg",
        price: "$200 / Per person",
        category: "temple"

    },
    {
        name: "Kompong Phluk",
        description: "Kompong Phluk is a traditional Khmer village located in the province of Kampot, known for its beautiful landscapes and cultural heritage.",
        image: "images/card/beach-two.jpg",
        price: "$100 / Per person",
        category: "beach"
    },
    {
        name: "Beach resort",
        description: "A beautiful beach resort with crystal clear waters and pristine sands, perfect for a relaxing vacation.",
        image: "images/card/beach-three.jpg",
        price: "$150 / Per person",
        category: "beach"
    },
    {
        name: "Angkor Wat", 
        description: "Angkor Wat is a temple complex in Cambodia and is the largest religious monument in the world, on a site measuring 162.6 hectares.",
        image: "images/card/beach-one.jpg",
        price: "$200 / Per person",
        category: "temple"
    },
    {
        name: "Kirirom Mountain",
        description: "Kirirom Mountain is a scenic destination in Cambodia, known for its lush forests and panoramic views.",
        image: "images/card/kirirom-mountain.jpg",
        price: "$100 / Per person",
        category: "mountain"
    },
    {
        name: "kirirom park",
        description: "Kirirom Park is a beautiful natural area in Cambodia, known for its lush greenery and serene atmosphere.",
        image: "images/card/kirirom-park.jpg",
        price: "$150 / Per person",
        category: "forest"
    }
];

const destinationContainer = document.getElementById("destination-container");

destination.forEach(dest => {
    const card = document.createElement("div");
    card.classList.add("col-4", "mb-4");
    card.innerHTML = `
        <div class="card-container">
            <div class="card">
                <img src="${dest.image}" class="card-img-top card-image" alt="${dest.name}">
                <div class="card-body">
                    <a href="#" class="text-decoration-none">
                        <h5 class="card-title hover-color text-color">${dest.name}</h5>
                    </a>
                    <a class="nav-link text-color hover-color" href="#">
                        <p class="card-text text-clamp">${dest.description}</p>
                    </a>
                    <span class="text-color"><i class="bi bi-tag"></i>${dest.price}</span>
                    <a href="#" class="btn bg-color hover-color d-flex justify-content-center mt-3">View Details</a>
                </div>
            </div>
        </div>
    `;
    destinationContainer.appendChild(card);
});





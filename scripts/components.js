// Including buttons
	// fetch("/components/button.html")
	// 	.then(response => response.text())
	// 	.then(data => {
	// 		$$(".placeholder--button").forEach(el => {
	// 			el.innerHTML = data;
	// 		})
	// 	});

// customElements.define(
// 	"component-button",
// 	class extends HTMLElement {
// 		constructor() {
// 			super();
// 			const shadowRoot = this.attachShadow({ mode: "open" });
			
// 			// Fetching the component from a local file
// 			fetch("/components/button.html")
// 				.then(response => response.text())
// 				.then(templateString => {
// 					const parser = new DOMParser();
// 					const template = parser.parseFromString(templateString, "text/html");
// 					shadowRoot.appendChild(template.querySelector("template").content.cloneNode(true));
// 				})
// 				.catch(error => {
// 					console.error("Error fetching template:", error);
// 				});
// 		}
// 	},
// 	);
// TODO Remove this if not used


// Including the header
fetch("/components/header.html")
	.then(response => response.text())
	.then(data => {
		$$all(".header-placeholder").forEach(el => {
			el.innerHTML = data;
		})
	});

    // log(template);
    // // Clone the product element content
    // const clone = document.importNode(template.content, true);
    
    // Modify the cloned content
    // const title = clone.querySelector('.product-template__title');
    // title.textContent = "test"; // Change the content
    // nameSpan.setAttribute("class", "custom-class"); 
	// Change the class attribute
    
    // Append the modified content to the document
    // document.body.appendChild(template.querySelector("article").content.cloneNode(true));







// Including the featured products
	// Fetching the HTML for each featured product from the local component
	fetch("/components/featured-product.html")
		.then(response => {
			// Checking if the request was successful
			if (!response.ok) {
				throw new Error("Couldn't retrieve HTML data");
			}
			// Returning the HTML content as text
			return response.text();
		})
		.then(html => {
			// If successful, sending this HTML content to the function that creates each featured product
			includeFeaturedProducts(html);
		})
		.catch(error => {
			// Logging any errors to the console
			log("There was a problem with the fetch operation: ", error);
		});

	// The function for creating each featured product and adding it into the DOM
	function includeFeaturedProducts(html) {
		// Creating a new a card for each featured product, using the data from the featuredProducts array
		for (let i = 0; i < featuredProducts.length; i++) {
			// Creating a container element
			const container = document.createElement("article");

			// Setting the innerHTML of the container to the fetched HTML
			container.innerHTML = html;

			// Giving the container classes
			classAdd(container, "featured-product");
			classAdd(container, "panel");
			classAdd(container, "flex");
			classAdd(container, "flex--vertical");
			classAdd(container, "flex--justify-between");
			classAdd(container, "gap--standard");

			// Replacing the default data for the featured product with that specific to the product in question
			const title = container.querySelector(".featured-product__title"); // Editing the title
			title.textContent = featuredProducts[i][0];
			const price = container.querySelector(".featured-product__price"); // Editing the price
			price.textContent = featuredProducts[i][1];
			const img = container.querySelector(".featured-product__img"); // Editing the image
			img.setAttribute("src", "/assets/images/" + featuredProducts[i][2] + ".jpg");

			// Appending the content of the container to the featured products div
			$$(".featured-products__list").appendChild(container);
			// const clone = document.importNode(code, true);
		}
	}
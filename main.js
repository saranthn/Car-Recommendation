function loadHomePage() {
	loadRecommendations()
	loadPopularCars()
}

function loadRecommendations() {
	console.log("Load Recommendations function called");

	//Call API to retrieve the recommendations for this user
	let recommendation_results = document.getElementById("recommendation-results");
	let results = [
		{
			carId: '5',
			imgUrl: 'Assets/car5.jpeg',
			capacity: '2',
			transmissionType: 'Manual',
			price: '$30,000'
		},
		{
			carId: '6',
			imgUrl: 'Assets/car6.jpeg',
			capacity: '2',
			transmissionType: 'Manual',
			price: '$30,000'
		},
		{
			carId: '7',
			imgUrl: 'Assets/car7.jpeg',
			capacity: '2',
			transmissionType: 'Manual',
			price: '$30,000'
		},
		{
			carId: '8',
			imgUrl: 'Assets/car8.jpeg',
			capacity: '2',
			transmissionType: 'Manual',
			price: '$30,000'
		}
	]

	results.forEach(function myFunction(result) {
		recommendation_results.innerHTML += 
		`<div class="flex-child polaroid" id=${result.carId}">
			<a>
				<img class="img" src=${result.imgUrl} alt="" onclick="openCarPage(${result.carId})"/>
			</a>
			<div class="flex-container">
				<div class="flex-child green"> ${result.capacity} </div>
				<div class="flex-child green"> ${result.transmissionType} </div>
				<div class="flex-child green"> ${result.price} </div>
				<div class="flex-child green">
					<i class="bi-heart" onclick="toggleIcon(this)"></i>
				</div>
			</div>
		</div>`
	})
}

function openCarPage(carId) {
	// Define the URL of the webpage to open, including the query parameters
	const url = `car.html?carId=${carId}`;

	// Open the webpage in the same tab of the browser
	window.open(url, "_self");
}

function loadPopularCars() {
	console.log("Load Popular Cars called");

	//Call API to retrieve the popular cars
	let popular_cars = document.getElementById("popular-cars-results");
	let results = [
		{
			carId: '1',
			imgUrl: 'Assets/car1.jpeg',
			capacity: '2',
			transmissionType: 'Manual',
			price: '$30,000'
		},
		{
			carId: '2',
			imgUrl: 'Assets/car2.jpeg',
			capacity: '2',
			transmissionType: 'Manual',
			price: '$30,000'
		},
		{
			carId: '3',
			imgUrl: 'Assets/car3.jpeg',
			capacity: '2',
			transmissionType: 'Manual',
			price: '$30,000'
		},
		{
			carId: '4',
			imgUrl: 'Assets/car4.jpeg',
			capacity: '2',
			transmissionType: 'Manual',
			price: '$30,000'
		}
	]

	results.forEach(function myFunction(result) {
		popular_cars.innerHTML += 
		`<div class="flex-child polaroid" id=${result.carId}>
			<a>
				<img class="img" src=${result.imgUrl} alt="" onclick="openCarPage(${result.carId})"/>
			</a>
			<div class="flex-container">
				<div class="flex-child green"> ${result.capacity} </div>
				<div class="flex-child green"> ${result.transmissionType} </div>
				<div class="flex-child green"> ${result.price} </div>
				<div class="flex-child green">
					<i class="bi-heart" onclick="toggleIcon(this)"></i>
				</div>
			</div>
		</div>`
	})
}

function loadCarPage() {
	const url = new URL(window.location.href);

	// Use the URLSearchParams interface to retrieve the query parameters
	const params = new URLSearchParams(url.search);

	const carId = params.get("carId");

	console.log(carId);

	//GET request to get car details
	let result = {
		carId: '1',
		make: 'Porsche',
		imgUrl: 'Assets/car1.jpeg',
		capacity: '2',
		transmissionType: 'Manual',
		price: '$30,000',
		model: '4door',
		mpg: '25',
		fuel: 'Diesel',
		style: 'SUV',
		category: 'Luxury'
	}
	let car_description_results = document.getElementById("car-description");
	car_description_results.innerHTML += 
		`<h2> ${result.make} </h2>
	      <div>
	        <div class="flex-container top">
	          <div class="flex-child polaroid">
	            <img class="img" src=${result.imgUrl} alt="" />
	            <div class="flex-container">
	              <div class="flex-child green"> ${result.capacity} </div>
	              <div class="flex-child green"> ${result.transmissionType} </div>
	              <div class="flex-child green"> ${result.price} </div>
	              <div class="flex-child green">
	                <i class="bi-heart" onclick="toggleIcon(this)"></i>
	              </div>
	            </div>
	          </div>
	          <div class="flex-child wrapper">
	            <div class="flex-columns-child"> Make: ${result.make} </div>
	            <div class="flex-columns-child"> Model: ${result.model} </div>
	            <div class="flex-columns-child"> Price: ${result.price} </div>
	            <div class="flex-columns-child"> Transmission: ${result.transmissionType} </div>
	            <div class="flex-columns-child"> MPG: ${result.mpg} </div>
	            <div class="flex-columns-child"> Fuel Type: ${result.fuel} </div>
	            <div class="flex-columns-child"> Style: ${result.style} </div>
	            <div class="flex-columns-child"> Market Category: ${result.category} </div>
	          </div>
	        </div>
	      </div>
	    </div>`
}

function loadSearchResults() {
	const url = new URL(window.location.href);

	// Use the URLSearchParams interface to retrieve the query parameters
	const params = new URLSearchParams(url.search);

	const make = params.get("make");
	const price = params.get("price");
	const style = params.get("style");
	const transmissionType = params.get("transmissionType");

	console.log("Make:"+make);
	console.log("Price:"+price);
	console.log("Style:"+style);
	console.log("Transmission Type:"+transmissionType);

	// GET request to search cars based on given parameters

	let search_results_row1 = document.getElementById("result-row1");
	let search_results_row2 = document.getElementById("result-row2");
	let count = 1

	let results = [
		{
			carId: '1',
			imgUrl: 'Assets/car1.jpeg',
			capacity: '2',
			transmissionType: 'Manual',
			price: '$30,000'
		},
		{
			carId: '2',
			imgUrl: 'Assets/car2.jpeg',
			capacity: '2',
			transmissionType: 'Manual',
			price: '$30,000'
		}
	]

	results.forEach(function myFunction(result) {
		if (count>4)
		{
			let x = 25*(count-4);
			search_results_row2.style.width = x+"%";
			search_results_row2.innerHTML += 
				`<div class="flex-child polaroid" id=${result.carId}>
					<a>
						<img class="img" src=${result.imgUrl} alt="" onclick="openCarPage(${result.carId})"/>
					</a>
					<div class="flex-container">
						<div class="flex-child green"> ${result.capacity} </div>
						<div class="flex-child green"> ${result.transmissionType} </div>
						<div class="flex-child green"> ${result.price} </div>
						<div class="flex-child green">
							<i class="bi-heart" onclick="toggleIcon(this)"></i>
						</div>
					</div>
				</div>`
		}
		else
		{
			let x = 25*(count);
			search_results_row1.style.width = x+"%";
			search_results_row1.innerHTML += 
				`<div class="flex-child polaroid" id=${result.carId}>
					<a>
						<img class="img" src=${result.imgUrl} alt="" onclick="openCarPage(${result.carId})"/>
					</a>
					<div class="flex-container">
						<div class="flex-child green"> ${result.capacity} </div>
						<div class="flex-child green"> ${result.transmissionType} </div>
						<div class="flex-child green"> ${result.price} </div>
						<div class="flex-child green">
							<i class="bi-heart" onclick="toggleIcon(this)"></i>
						</div>
					</div>
				</div>`
		}
		count++;
		
	})

}

function search() {
	const make = document.getElementById('make').value;
	const price = document.getElementById('price').value;
	const style = document.getElementById('style').value;
	const transmissionType = document.getElementById('transmission').value;
	const url = `search.html?make=${make}&price=${price}&style=${style}&transmissionType=${transmissionType}`;

	// Open the webpage in the same tab of the browser
	window.open(url, "_self");
}

function login() {
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	let result = true;

	if (username == "")
	{
        alert("Please enter user name!");
        result = false;
    }
    else if (password == "")
    {
        alert("Please enter password!");
        result = false;
    }
    else
    {
    	//Check Login Credentials

		if (result)
		{
			// Add session variables?? Cookies? Cognito?
	        window.open('index.html', '_self');
	    }
	    else
	    {
	        alert("Please enter the correct username and password!")
	        document.getElementById('username').value = '';
	        document.getElementById('password').value = '';
	    }
    }
}

function logout() {
	
	// Remove session variables?? Cookies? Cognito?
    window.open('login.html', '_self');
}

function signup() {
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	const email = document.getElementById('email').value;
	const first_name = document.getElementById('first_name').value;
	const last_name = document.getElementById('last_name').value;
	let result = true;

	if (username == "")
	{
        alert("Please enter user name!");
        result = false;
    }
    else if (password == "")
    {
        alert("Please enter password!");
        result = false;
    }
    else if (email == "")
    {
        alert("Please enter email!");
        result = false;
    }
    else if (first_name == "")
    {
        alert("Please enter First name!");
        result = false;
    }
    else if (last_name == "")
    {
        alert("Please enter Last name!");
        result = false;
    }
    else
    {
    	//PUT request to update users DB or Cognito??

		if (result)
		{
			// Add session variables?? Cookies? Cognito?
	        window.open('login.html', '_self');
	    }
	    else
	    {
	        alert("Error in registration. Please try after some time!")
	    }
    }
}


function toggleIcon(x) {
	x.classList.toggle("bi-heart-fill");
	x.classList.toggle("bi-heart");

	//TODO: PUT request to update items in wishlist or favorites
}
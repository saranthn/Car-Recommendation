// JavaScript
// var token = "eyJraWQiOiJvT0g3ZmYyXC9NZVVqc2FqN3MzN291eWQ3QkVTbGU3YXhPVDZWN21uTGpqYz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoidWVoSlhKMlBOUGZpV3ZfVm5jejNDZyIsInN1YiI6ImJhOGQ3NjNlLTkyM2UtNDUzYi05YTVlLTI1ZDc5ZTQ3NTkxNSIsImF1ZCI6IjNpYnFoMzBsMHU5aDVuM24zbjU2cTBkNnEwIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NzE1NzQ4NDQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0RpclVaWHQycyIsImNvZ25pdG86dXNlcm5hbWUiOiJ1c2VyMSIsImV4cCI6MTY3MTU3ODQ0NCwiaWF0IjoxNjcxNTc0ODQ0LCJqdGkiOiI5MmI5MzQxYS02ZDk4LTQ3ZWYtYjczMS1iYjRlMTE5NTExNWEifQ.v17DjmB2x6ZDxVUXdIog5JhgGks7Lfv1JlB8biYbJN67MNsPq_r9f5ZLxSuhhf9w_fUQhPnnjfaXXV7SJbPUy0-m7hVZ5XcbBMBBQ-nieB4-2H2aex7-_wcfDBWgWoubceUYJKuBprOTQGADkqzOwolsP_JFnfqcbffHzxPVsQ-NcGr710nIn53jeoEO9ajvqPVe7CkV4zdOcZyjHiIhEqMu8W3dOnF3C6KKz_fcru04-Vvgqc4Zewei1dt2ZtPmqfyN0O0gST9m6B7XOQnsqT_qLi3V1vTeMXqMUDZqJFR9XW3415rSCKO15vBKGBj-2dtnVWiuHiKrzanMuW5Fcg"
function loadHomePage(flag=0) {
	const list = "BMW, Audi, FIAT, Mercedes-Benz, Chrysler, Nissan, Volvo, Mazda, Mitsubishi, Ferrari, Alfa Romeo, Toyota, McLaren, Maybach, Pontiac, Porsche, Saab, GMC, Hyundai, Plymouth, Honda, Oldsmobile, Suzuki, Ford, Cadillac, Kia, Bentley, Chevrolet, Dodge, Lamborghini, Lincoln, Subaru, Volkswagen, Spyker, Buick, Acura, Rolls-Royce, Maserati, Lexus, Aston Martin, Land Rover, Lotus, Infiniti, Scion, Genesis, HUMMER, Tesla, Bugatti";
	const carList = list.split(', ');

	const datalist = document.getElementById('make');
	const url = new URL(window.location.href);
	console.log(url);
	let token = '';
	try {
		let a = url['hash'].split('=')[1];
		token = a.split('&')[0];
		sessionStorage.setItem("token", token);
	} catch (error) {
		token = sessionStorage.getItem("token");
	}
	console.log(token);

	// Loop through the car list
	carList.forEach(car => {
	  // Create an option element for each car
	  const option = document.createElement('option');
	  option.setAttribute('value', car);
	  option.innerHTML = car;

	  // Add the option element to the select element
	  datalist.appendChild(option);
	});

	// const style = "Coupe, Convertible, Sedan, Wagon, 4dr Hatchback, 2dr Hatchback, 4dr SUV, Passenger Minivan, Cargo Minivan, Crew Cab Pickup, Regular Cab Pickup, Extended Cab Pickup, 2dr SUV, Cargo Van, Passenger Van, Convertible SUV";
	// const styleList = style.split(', ');
	// const styleDatalist = document.getElementById('style');

	// // Loop through the style list
	// styleList.forEach(s => {
	//   // Create an option element for each style
	//   const opt = document.createElement('option');
	//   opt.setAttribute('value', s);
	//   opt.innerHTML = s;

	//   // Add the option element to the select element
	//   styleDatalist.appendChild(opt);
	// });

	if (flag == 0) {
		loadRecommendations()
		loadPopularCars()
	}

	if (flag == 1) {
		let errormsg = document.getElementById("search-error");
			errormsg.innerHTML = "Please select atleast one field";
	}
}

function loadRecommendations() {
	console.log("Load Recommendations function called");

	//Call API to retrieve the recommendations for this user
	var apigClient = apigClientFactory.newClient();
	let count = 1;
	let recommendation_results = document.getElementById("recommendation-results");
	let token = sessionStorage.getItem("token");
	apigClient.recommendationGet({'Authorization':  token})
    	.then(function(results) {
    		console.log("success");
    		console.log(results);
			let recheader = document.getElementById("recommendations-header");
			if (results['data'].length == 0) {
				recheader.innerHTML = "Try liking some cars first to get recommendations!";
			}
			else {
				recheader.innerHTML = "Recommendations";
			}
    		output = results['data'].slice(0,4);
    		output.forEach(function myFunction(result) {

					let x = 25*(count-4);
					recommendation_results.style.width = x+"%";
					recommendation_results.innerHTML += 
						`<div class="flex-child polaroid" id=${result['carid']} onclick="openCarPage(this.id)">
							<a>
								<img src=${result['carurl']} width="270" height="150">
							</a>
							<div class="flex-container">
								<div class="flex-child green"> ${result['make']} </div>
								<div class="flex-child green"> ${result['model']} </div>
								<div class="flex-child green"> $${result['msrp']} </div>
							</div>
						</div>`
				count++;	
			})

    	}).catch(function(result){
    		console.log("failed")
    		console.log(result);
    	});
}

function toTitleCase(str) {
	return str.replace(
	  /\w\S*/g,
	  function(txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	  }
	);
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

	var apigClient = apigClientFactory.newClient();
	let count=1;

	apigClient.popularGet()
    	.then(function(results) {
    		console.log("success");
    		console.log(results);
    		output = results['data'].slice(0,4);
    		output.forEach(function myFunction(result) {

					let x = 25*(count-4);
					popular_cars.style.width = x+"%";
					popular_cars.innerHTML += 
						`<div class="flex-child polaroid" id=${result['carid']} onclick="openCarPage(this.id)">
							<a>
								<img src=${result['carurl']} width="270" height="150">
							</a>
							<div class="flex-container">
								<div class="flex-child green"> ${result['make']} </div>
								<div class="flex-child green"> ${result['model']} </div>
								<div class="flex-child green"> $${result['msrp']} </div>
							</div>
						</div>`
				count++;	
			})

    	}).catch(function(result){
    		console.log("failed")
    		console.log(result);
    	});
}

function loadCarPage() {

	var apigClient = apigClientFactory.newClient();

	const url = new URL(window.location.href);

	// Use the URLSearchParams interface to retrieve the query parameters
	const params = new URLSearchParams(url.search);

	let carId = params.get("carId");
	console.log(carId);
	let token = sessionStorage.getItem("token");
	apigClient.descriptionGet({ carID: carId, 'Authorization':  token})
    	.then(function(result) {
    		console.log("success");
    		console.log(result['data']);
    		let car_description_results = document.getElementById("car-description");
			let likecls = "bi-heart";
			if (result['data']['like_state'].trim() == "True"){
				likecls = "bi-heart-fill";
			}
			car_description_results.innerHTML += 
				`<h2> ${result['data']['make']} ${result['data']['model']} </h2>
			      <div>
			        <div class="flex-container top-2">
			          <div class="flex-child polaroid-1">
			          <img src=${result['data']['carurl']} width="800" height="400">
			            <div class="flex-container">
			              <div class="flex-child green"> ${result['data']['make']} </div>
			              <div class="flex-child green"> ${result['data']['model']} </div>
			              <div class="flex-child green"> $${result['data']['msrp']} </div>
			              <div class="flex-child green">
			                <i class=${likecls} id=${result['data']['carurl']} onclick="toggleIcon(this, this.id)"></i>
			              </div>
			            </div>
			          </div>
			          <div class="flex-child-desc wrapper">
					  	<br>
						<br>
			            <div class="flex-columns-child"> <b>Make:</b> ${result['data']['make']} </div>
			            <div class="flex-columns-child"> <b>Model:</b> ${result['data']['model']} </div>
			            <div class="flex-columns-child"> <b>Style:</b> ${result['data']['vehicle_style']} </div>
			            <div class="flex-columns-child"> <b>Size:</b> ${result['data']['vehicle_size']} </div>
						<br>
						<br>
						<div class="flex-columns-child"> <b>Cylinders:</b> ${result['data']['engine_cylinders']} </div>
			            <div class="flex-columns-child"> <b>Wheel Drive:</b> ${result['data']['driven_wheels']} </div>
			            <div class="flex-columns-child"> <b>Horsepower:</b> ${result['data']['engine_hp']} </div>
			            <div class="flex-columns-child"> <b>Transmission:</b> ${toTitleCase(result['data']['transmission_type'])} </div>
						<br>
						<br>
			            <div class="flex-columns-child"> <b>Fuel Type:</b> ${result['data']['fuel_type']} </div>
			            <div class="flex-columns-child"> <b>City Mileage:</b> ${result['data']['mpg']} </div>
			            <div class="flex-columns-child"> <b>Highway Mileage:</b> ${result['data']['highway_mpg']} </div>
			          </div>
			        </div>
			      </div>
			    </div>`;

    	}).catch(function(result){
    		console.log("failed")
    		console.log(result);
    	});
}

function loadSearchResults() {
	const url = new URL(window.location.href);

	// Use the URLSearchParams interface to retrieve the query parameters
	const params = new URLSearchParams(url.search);

	const make = params.get("make") ?? "";
	const price = params.get("price") ?? "";
	const transmissionType = params.get("transmissionType") ?? "";
	const model = params.get("model") ?? "";

	const obj = {};
	var list = [];

	if (make !== "") {
	  obj.make = make;
	  list.push('make');
	}

	if (price !== "") {
	  obj.price = price;
	  list.push('price');
	}

	if (transmissionType !== "") {
	  obj.transmission = transmissionType;
	  list.push('transmission');
	}

	if (model !== "") {
	  obj.model = model;
	  list.push('model');
	}
	console.log(obj);

	// GET request to search cars based on given parameters

	let search_results_row1 = document.getElementById("result-row1");
	let search_results_row2 = document.getElementById("result-row2");
	let search_results_row3 = document.getElementById("result-row3");
	let count = 1

	var apigClient = apigClientFactory.newClient();

	apigClient.searchGet(obj, {}, {}, list)
    	.then(function(results) {
    		console.log("success");
    		console.log("results length: ", results['data'].length);
			let searchheader = document.getElementById("search-header");
			if (results['data'].length > 0) {
				searchheader.innerHTML = "Here are your search results";
			}
			else {
				searchheader.innerHTML = "No Results Found!";
			}
    		output = results['data'].slice(0,10);
    		output.forEach(function myFunction(result) {
    			if (count>8)
				{
					let x = 25*(count-8);
					search_results_row3.style.width = x+"%";
					search_results_row3.innerHTML += 
						`<div class="flex-child polaroid" id=${result['carid']} onclick="openCarPage(this.id)">
							<a>
								<img src=${result['carurl']} width="270" height="150">
							</a>
							<div class="flex-container">
								<div class="flex-child green"> ${result['make']} </div>
								<div class="flex-child green"> ${result['model']} </div>
								<div class="flex-child green"> $${result['msrp']} </div>
							</div>
						</div>`
				}
				else if (count>4)
				{
					let x = 25*(count-4);
					search_results_row2.style.width = x+"%";
					search_results_row2.innerHTML += 
						`<div class="flex-child polaroid" id=${result['carid']} onclick="openCarPage(this.id)">
							<a>
								<img src=${result['carurl']} width="270" height="150">
							</a>
							<div class="flex-container">
								<div class="flex-child green"> ${result['make']} </div>
								<div class="flex-child green"> ${result['model']} </div>
								<div class="flex-child green"> $${result['msrp']} </div>
							</div>
						</div>`
				}
				else
				{
					let x = 25*(count);
					search_results_row1.style.width = x+"%";
					search_results_row1.innerHTML += 
						`<div class="flex-child polaroid" id=${result['carid']} onclick="openCarPage(this.id)">
							<a>
								<img src=${result['carurl']} width="270" height="150">
							</a>
							<div class="flex-container">
								<div class="flex-child green"> ${result['make']} </div>
								<div class="flex-child green"> ${result['model']} </div>
								<div class="flex-child green"> $${result['msrp']} </div>
							</div>
						</div>`
				}
				count++;	
			})

    	}).catch(function(result){
    		console.log("failed")
    		console.log(result);
    	});
}

function search() {
	const make = document.getElementById('makeInput').value;
	const model = document.getElementById('modelInput').value;
	const price = document.getElementById('price').value;
	const transmissionType = document.getElementById('transmission').value;

	console.log("Make: ", make);
	if (make == "" && model == "" && price == "" && transmissionType == "") {
		console.log("No search");
		loadHomePage(1);
		return null;
	}

	let url = `search.html?`;
	let count = 0;
	if(make !== null && make !== "") {
		url+=`make=${make}`;
		count++;
	}
	if(price !== null && price !== "") {
		if (count>0)
		{
			url+= `&`;
		}
		url+=`price=${price}`
		count++;
	}

	if(transmissionType !== null && transmissionType !== "") {
		if (count>0)
		{
			url+= `&`;
		}
		url+=`transmissionType=${transmissionType}`;
		count++;
	}
	if(model !== null && model !== "") {
		if (count>0)
		{
			url+= `&`;
		}
		url+=`model=${model}`;
		count++;
	}

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

// const cognitoIdentityServiceProvider = new AWS.CognitoIdentityServiceProvider();
// AWS.config.region = 'us-east-1';
// AWS.config.credentials = new AWS.CognitoIdentityCredentials({
//     IdentityPoolId: 'us-east-1_DirUZXt2s'
// });


const button = document.getElementById('sign-out-button');
button.addEventListener('click', async function() {
	window.location.replace('https://carfinder.auth.us-east-1.amazoncognito.com/logout?client_id=3ibqh30l0u9h5n3n3n56q0d6q0&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://d19fq1agwipela.cloudfront.net/index.html');
});


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


function toggleIcon(x, carid) {
	x.classList.toggle("bi-heart-fill");
	x.classList.toggle("bi-heart");

	var apigClient = apigClientFactory.newClient();
	console.log("carID: ", carid.split("/")[3].split(".")[0])
	let token = sessionStorage.getItem("token");
	apigClient.likeGet({'carID': carid.split("/")[3].split(".")[0], 'Authorization':  token})
    	.then(function(result) {
    		console.log("success");
    		console.log(result);

    	}).catch(function(result){
    		console.log("failed")
    		console.log(result);
    	});


	//TODO: PUT request to update items in wishlist or favorites
}

function loadWishlist() {
	let search_results_row1 = document.getElementById("result-row1");
	let search_results_row2 = document.getElementById("result-row2");
	let search_results_row3 = document.getElementById("result-row3");
	let count = 1
	var apigClient = apigClientFactory.newClient();
	let token = sessionStorage.getItem("token");
	apigClient.wishlistGet({'Authorization':  token})
	.then(function(results) {
		console.log("success");
		console.log(results);
		let wishheader = document.getElementById("wishlist-header");
		if (results['data'].length > 0) {
			wishheader.innerHTML = "Here are your liked cars!";
		}
		else {
			wishheader.innerHTML = "You haven't liked any cars yet!";
		}
		output = results['data'].slice(0,10);
		output.forEach(function myFunction(result) {
			if (count>8)
			{
				let x = 25*(count-8);
				search_results_row3.style.width = x+"%";
				search_results_row3.innerHTML += 
					`<div class="flex-child polaroid" id=${result['carid']} onclick="openCarPage(this.id)">
						<a>
							<img src=${result['carurl']} width="270" height="150">
						</a>
						<div class="flex-container">
							<div class="flex-child green"> ${result['make']} </div>
							<div class="flex-child green"> ${result['model']} </div>
							<div class="flex-child green"> $${result['msrp']} </div>
						</div>
					</div>`
			}
			else if (count>4)
			{
				let x = 25*(count-4);
				search_results_row2.style.width = x+"%";
				search_results_row2.innerHTML += 
					`<div class="flex-child polaroid" id=${result['carid']} onclick="openCarPage(this.id)">
						<a>
							<img src=${result['carurl']} width="270" height="150">
						</a>
						<div class="flex-container">
							<div class="flex-child green"> ${result['make']} </div>
							<div class="flex-child green"> ${result['model']} </div>
							<div class="flex-child green"> $${result['msrp']} </div>
						</div>
					</div>`
			}
			else
			{
				let x = 25*(count);
				search_results_row1.style.width = x+"%";
				search_results_row1.innerHTML += 
					`<div class="flex-child polaroid" id=${result['carid']} onclick="openCarPage(this.id)">
						<a>
							<img src=${result['carurl']} width="270" height="150">
						</a>
						<div class="flex-container">
							<div class="flex-child green"> ${result['make']} </div>
							<div class="flex-child green"> ${result['model']} </div>
							<div class="flex-child green"> $${result['msrp']} </div>
						</div>
					</div>`
			}
			count++;	
		})

	}).catch(function(result){
		console.log("failed")
		console.log(result);
	});
}
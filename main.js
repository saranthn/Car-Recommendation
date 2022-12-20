// JavaScript
// var token="eyJraWQiOiJvT0g3ZmYyXC9NZVVqc2FqN3MzN291eWQ3QkVTbGU3YXhPVDZWN21uTGpqYz0iLCJhbGciOiJSUzI1NiJ9";
var token = "3eyJraWQiOiJvT0g3ZmYyXC9NZVVqc2FqN3MzN291eWQ3QkVTbGU3YXhPVDZWN21uTGpqYz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiUER2R0EtYjl4dmsyeXhuZXJIelJWQSIsInN1YiI6ImJhOGQ3NjNlLTkyM2UtNDUzYi05YTVlLTI1ZDc5ZTQ3NTkxNSIsImF1ZCI6IjNpYnFoMzBsMHU5aDVuM24zbjU2cTBkNnEwIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NzE1NjIwNTQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0RpclVaWHQycyIsImNvZ25pdG86dXNlcm5hbWUiOiJ1c2VyMSIsImV4cCI6MTY3MTU2NTY1NCwiaWF0IjoxNjcxNTYyMDU0LCJqdGkiOiJiOTI3Nzc2NC01ZGI2LTRjOWMtOTdlNS01MmYwNzc0MWIwMWMifQ.amIHrClRU6B8KEpPShED9L52sdBW401Uf17xeUbU1X-CjzK0_url8WndWP2C2D7EryagB-7emt6dYh2ZyAByRfxPYd6tXW0970KssRgJmHv7wIjuVtU65lHRg7-5u6WHWKdpUz-a6h7Qrjt_lSu6D1miB_2k3fsnCs0n-ZVMkAk2B4lI9N9Q405I2HDVLFCbLNGOACGgrQaVbke2SeOKcVn-eLQUWGBBcTgiBtFvZk74mnf0GzdW1UVV_vJZ4tRSjv1UbPkwbz85ADd0na-GCi_EpEviW08LP-UCEyQ1dbIkOaVIcjxwDg9Ly7Smc03-9t45Xpl-i-b4e-7WVelv8g"
// eyJraWQiOiJvT0g3ZmYyXC9NZVVqc2FqN3MzN291eWQ3QkVTbGU3YXhPVDZWN21uTGpqYz0iLCJhbGciOiJSUzI1NiJ9.eyJhdF9oYXNoIjoiUER2R0EtYjl4dmsyeXhuZXJIelJWQSIsInN1YiI6ImJhOGQ3NjNlLTkyM2UtNDUzYi05YTVlLTI1ZDc5ZTQ3NTkxNSIsImF1ZCI6IjNpYnFoMzBsMHU5aDVuM24zbjU2cTBkNnEwIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE2NzE1NjIwNTQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0RpclVaWHQycyIsImNvZ25pdG86dXNlcm5hbWUiOiJ1c2VyMSIsImV4cCI6MTY3MTU2NTY1NCwiaWF0IjoxNjcxNTYyMDU0LCJqdGkiOiJiOTI3Nzc2NC01ZGI2LTRjOWMtOTdlNS01MmYwNzc0MWIwMWMifQ.amIHrClRU6B8KEpPShED9L52sdBW401Uf17xeUbU1X-CjzK0_url8WndWP2C2D7EryagB-7emt6dYh2ZyAByRfxPYd6tXW0970KssRgJmHv7wIjuVtU65lHRg7-5u6WHWKdpUz-a6h7Qrjt_lSu6D1miB_2k3fsnCs0n-ZVMkAk2B4lI9N9Q405I2HDVLFCbLNGOACGgrQaVbke2SeOKcVn-eLQUWGBBcTgiBtFvZk74mnf0GzdW1UVV_vJZ4tRSjv1UbPkwbz85ADd0na-GCi_EpEviW08LP-UCEyQ1dbIkOaVIcjxwDg9Ly7Smc03-9t45Xpl-i-b4e-7WVelv8g&access_token=eyJraWQiOiJsVkE2VEpKNElMYXV0XC9aeGRvNGdrQno0YlF2aG93TXdkM0diN3E0MHZ6cz0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiJiYThkNzYzZS05MjNlLTQ1M2ItOWE1ZS0yNWQ3OWU0NzU5MTUiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImF3cy5jb2duaXRvLnNpZ25pbi51c2VyLmFkbWluIHBob25lIG9wZW5pZCBwcm9maWxlIGVtYWlsIiwiYXV0aF90aW1lIjoxNjcxNTYyMDU0LCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0xLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMV9EaXJVWlh0MnMiLCJleHAiOjE2NzE1NjU2NTQsImlhdCI6MTY3MTU2MjA1NCwidmVyc2lvbiI6MiwianRpIjoiOWEwYTRkNjctOWNhZC00ODc1LTg1NTEtZWFkZGE2NDg1ODg5IiwiY2xpZW50X2lkIjoiM2licWgzMGwwdTloNW4zbjNuNTZxMGQ2cTAiLCJ1c2VybmFtZSI6InVzZXIxIn0.e2hxL0ZtItgQwFExQA0m5wvFoxM5NKCudaoSbeF3Zikd_lDbMCQMEnV8gMEgPgijfvGEjQVCv-SRbDI3Pns27iK1mnf8xwkrB8e_2fkujLeuIDbyjjqzEm7ijgG_L3ZKL95NFXqFp1CV96Gke1GNUyQTzdrcW8E-4IMUsNOcMqwEP8wjPBRImveDVpySAAAoKgd98uPpFIwde92SERd26c-fYtWGkIs22yOG7sNEsE8DSlbAMHeOo5JhN6bhQQJmzLyJOhhPpJwq0ISfX4baPT91WPRMq3Ezpmj_QNvUD6Gyf18TxN2zHfuwYmm7uf5Yq9NJOzxEr5fIEIXazMfp-w&expires_in=3600&token_type=Bearer


function loadHomePage() {
	const list = "BMW, Audi, FIAT, Mercedes-Benz, Chrysler, Nissan, Volvo, Mazda, Mitsubishi, Ferrari, Alfa Romeo, Toyota, McLaren, Maybach, Pontiac, Porsche, Saab, GMC, Hyundai, Plymouth, Honda, Oldsmobile, Suzuki, Ford, Cadillac, Kia, Bentley, Chevrolet, Dodge, Lamborghini, Lincoln, Subaru, Volkswagen, Spyker, Buick, Acura, Rolls-Royce, Maserati, Lexus, Aston Martin, Land Rover, Lotus, Infiniti, Scion, Genesis, HUMMER, Tesla, Bugatti";
	const carList = list.split(', ');

	const datalist = document.getElementById('make');
	const url = new URL(window.location.href);
	console.log(url);
	let a = url['hash'].split('=')[1];
	token = a.split('&')[0];
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

	const style = "Coupe, Convertible, Sedan, Wagon, 4dr Hatchback, 2dr Hatchback, 4dr SUV, Passenger Minivan, Cargo Minivan, Crew Cab Pickup, Regular Cab Pickup, Extended Cab Pickup, 2dr SUV, Cargo Van, Passenger Van, Convertible SUV";
	const styleList = style.split(', ');
	const styleDatalist = document.getElementById('style');

	// Loop through the style list
	styleList.forEach(s => {
	  // Create an option element for each style
	  const opt = document.createElement('option');
	  opt.setAttribute('value', s);
	  opt.innerHTML = s;

	  // Add the option element to the select element
	  styleDatalist.appendChild(opt);
	});

	// loadRecommendations()
	loadPopularCars()
}

function loadRecommendations() {
	console.log("Load Recommendations function called");

	//Call API to retrieve the recommendations for this user
	let recommendation_results = document.getElementById("recommendation-results");
	apigClient.recommendationGet()
    	.then(function(results) {
    		console.log("success");
    		console.log(results);
    		output = results['data'].slice(0,4);
    		output.forEach(function myFunction(result) {

					let x = 25*(count-4);
					recommendation_results.style.width = x+"%";
					recommendation_results.innerHTML += 
						`<div class="flex-child polaroid" id=${result['carid']} onclick="openCarPage(this.id)">
							<a>
								<img class="img" src=${result['carurl']} alt="" />
							</a>
							<div class="flex-container">
								<div class="flex-child green"> ${result['doors']} </div>
								<div class="flex-child green"> ${result['transmission_type']} </div>
								<div class="flex-child green"> ${result['msrp']} </div>
								<div class="flex-child green">
									<i class="bi-heart" onclick="toggleIcon(this, ${result['carid']})"></i>
								</div>
							</div>
						</div>`
				count++;	
			})

    	}).catch(function(result){
    		console.log("failed")
    		console.log(result);
    	});
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
								<img class="img" src=${result['carurl']} alt="" />
							</a>
							<div class="flex-container">
								<div class="flex-child green"> ${result['doors']} </div>
								<div class="flex-child green"> ${result['transmission_type']} </div>
								<div class="flex-child green"> ${result['msrp']} </div>
								<div class="flex-child green">
									<i class="bi-heart" onclick="toggleIcon(this)"></i>
								</div>
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

	apigClient.descriptionGet({ carID: carId})
    	.then(function(result) {
    		console.log("success");
    		console.log(result['data']);
    		let car_description_results = document.getElementById("car-description");
			car_description_results.innerHTML += 
				`<h2> ${result['data']['make']} ${result['data']['model']} </h2>
			      <div>
			        <div class="flex-container top">
			          <div class="flex-child polaroid">
			          <img class="img" src=${result['data']['carurl']} alt="" />
			            <div class="flex-container">
			              <div class="flex-child green"> ${result['data']['make']} </div>
			              <div class="flex-child green"> ${result['data']['model']} </div>
			              <div class="flex-child green"> $${result['data']['msrp']} </div>
			              <div class="flex-child green">
			                <i class="bi-heart" id=${result['data']['carurl']} onclick="toggleIcon(this, this.id)"></i>
			              </div>
			            </div>
			          </div>
			          <div class="flex-child wrapper">
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
	const style = params.get("style") ?? "";
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

	if (style !== "") {
	  obj.style = style;
	  // list.push('style');
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
    		console.log(results);
    		output = results['data'].slice(0,10);
    		output.forEach(function myFunction(result) {
    			if (count>8)
				{
					let x = 25*(count-8);
					search_results_row3.style.width = x+"%";
					search_results_row3.innerHTML += 
						`<div class="flex-child polaroid" id=${result['carid']} onclick="openCarPage(this.id)">
							<a>
								<img class="img" src=${result['carurl']} alt="" />
							</a>
							<div class="flex-container">
								<div class="flex-child green"> ${result['doors']} </div>
								<div class="flex-child green"> ${result['transmission_type']} </div>
								<div class="flex-child green"> ${result['msrp']} </div>
								<div class="flex-child green">
									<i class="bi-heart" onclick="toggleIcon(this)"></i>
								</div>
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
								<img class="img" src=${result['carurl']} alt="" />
							</a>
							<div class="flex-container">
								<div class="flex-child green"> ${result['doors']} </div>
								<div class="flex-child green"> ${result['transmission_type']} </div>
								<div class="flex-child green"> ${result['msrp']} </div>
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
						`<div class="flex-child polaroid" id=${result['carid']} onclick="openCarPage(this.id)">
							<a>
								<img class="img" src=${result['carurl']} alt="" />
							</a>
							<div class="flex-container">
								<div class="flex-child green"> ${result['doors']} </div>
								<div class="flex-child green"> ${result['transmission_type']} </div>
								<div class="flex-child green"> ${result['msrp']} </div>
								<div class="flex-child green">
									<i class="bi-heart" onclick="toggleIcon(this)"></i>
								</div>
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
	const style = document.getElementById('styleInput').value;
	const transmissionType = document.getElementById('transmission').value;

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
	if(style !== null && style !== "") {
		if (count>0)
		{
			url+= `&`;
		}
		url+=`style=${style}`;
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
	window.location.replace('https://carfinder.auth.us-east-1.amazoncognito.com/logout?client_id=3ibqh30l0u9h5n3n3n56q0d6q0&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https://d19fq1agwipela.cloudfront.net/index.html');
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
	console.log("In toggle icon")
	console.log("carID: ", carid.split("/")[3].split(".")[0])
	apigClient.likeGet({'carID': carid.split("/")[3].split(".")[0], 'Authorization': token})
    	.then(function(result) {
    		console.log("success");
    		console.log(result);

    	}).catch(function(result){
    		console.log("failed")
    		console.log(result);
    	});


	//TODO: PUT request to update items in wishlist or favorites
}
// variables
var masthead = document.querySelector(".mh-image");
var slides = [["img/home.jpg", "Information sessions on how to reduce your household energy consumption"], ["img/lightbulb.jpg", "Energy efficient lightbulbs"], ["img/recycling.jpg", "Easy to follow recycling programs"], ["img/bicycle.jpg", "Alternative transportation options"]];
var buttons = document.querySelectorAll(".btn i");
var contents = [["Increase Other Fuel and Electricity Prices", "img/windmill.jpg", "“If fossil fuels cost enough, the incentive to research and produce other energy sources greatly increases. For example, Hawaii, because of the high oil prices in Hawaii the state is silently becoming ‘one of the world’s leading incubators of alternative energy.’ [2] About 80% of the energy supply for the main utility in Hawaii comes from petroleum imports, which causes a big problem for energy prices when the price of oil zooms sky high. The average residential electricity rate on the island of Oahu, Hawaii has more than doubled since 1999 to 25.5 cents per kilowatt hour, which is coincidentally the highest electricity rate in the United States. So as fuel prices rise, the island is turning more and more to alternative sources of energy.”<br><strong>Source</strong>: https://webberenergyblog.wordpress.com/2012/03/25/how-to-make-alternative-energy-affordable"],
                ["Subsidize", "img/subsidize.jpg", "“If high competitor prices, improved production, and cheap land have already been checked off the list, a fourth process for decreasing cost of alternative energy and hopefully production is subsidizing any and every level of the process. Luckily, the U.S. government has caught on very clearly to this train of thought. According to the Institute for Energy Research, “renewable energy subsidies increased by 186 percent from $5.1 billion to $14.7 billion in 2010. Of the $14.7 billion in fiscal year 2010, $6.2 billion (65 percent of the increase) was related to the Obama administration’s economic stimulus law” [7]. Subsidies for wind specifically led the pack with an increase from $476 million to $4,986 million while subsidies for solar increased from $179 million to $1,134 million and subsidies for biofuels increased by 66 percent, from $4 billion to $6.6 billion.” <br><strong>Source</strong>: https://webberenergyblog.wordpress.com/2012/03/25/how-to-make-alternative-energy-affordable"],
                ["Make your Home Green", "img/house.jpg", "“Between heating and cooling your home, gassing up your car and watering your lawn, energy costs are one of the most significant expenses that many of us face on a monthly and annual basis. Thankfully, there are numerous ways to reduce both your carbon footprint and your recurring energy costs. Many of them are simple and common sense techniques that do not require major changes, construction, installation, or upfront expenses. In fact, there are a number of ways to save energy at home and slash your home energy consumption and costs by up to $2,500 a year without much effort. You can even significantly cut the cost of commuting to work without purchasing a new fuel-efficient car.” See the following source for information on 10 ways to implement green technologies into your home. <br><strong>Source</strong>: http://www.moneycrashers.com/green-energy-technologies-solutions-home-improvement/"]];
var container = document.querySelector(".container");
var i = 0;
var k;
var p = document.querySelector(".p");
var sliderImage = document.querySelector(".slider-image");


// slideshow
function fadeOut() {
    masthead.style.opacity = "0";
} 

function runSlides() {
    sliderImage.src = slides[i][0];
    p.innerHTML = slides[i][1];
    masthead.style.opacity = "1";
    if (i > 2) {
        i = 0;
    } else {
        i += 1;
    }
    setTimeout(fadeOut, 5000);
}

runSlides();
setInterval(runSlides, 6000);
    

// reveal content buttons
var containerHeader = document.querySelector(".container-header");
var containerImage = document.querySelector(".container-image");
var containerP = document.querySelector(".container-p");

containerHeader.innerHTML = contents[0][0];
containerImage.src = contents[0][1];
containerP.innerHTML = contents[0][2];

function handleClick(ev) {
    for (k = 0; k < buttons.length; k++) {
        if (buttons[k].hasAttribute("id", "active")) {
            buttons[k].removeAttribute("id", "active");
        }
    }
    ev.target.setAttribute("id", "active");
    if (ev.target === buttons[0]) {
        containerHeader.innerHTML = contents[0][0];
        containerImage.src = contents[0][1];
        containerP.innerHTML = contents[0][2];
    }
    if (ev.target === buttons[1]) {
        containerHeader.innerHTML = contents[1][0];
        containerImage.src = contents[1][1];
        containerP.innerHTML = contents[1][2];
    }
    if (ev.target === buttons[2]) {
        containerHeader.innerHTML = contents[2][0];
        containerImage.src = contents[2][1];
        containerP.innerHTML = contents[2][2];
    }
}

for (k = 0; k < buttons.length; k++) {
    buttons[k].addEventListener("click", handleClick);
}
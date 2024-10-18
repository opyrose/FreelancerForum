//connect HTML to JS file
    //console.log(`Hello`)
    
  // define blank array for possible names and occupations

  // define the initial array of freelancers
    const currentFreelancers =[
      { name: "Alice", price: 30, occupation: "Writer" },
      { name: "Bob", price: 50, occupation: "Teacher" },
      { name: "Carol", price: 70, occupation: "Programmer" }
];
//console.log(currentFreelancers);

//create a function to render the intial freelancer information 


const appendFreelancers =(list) => {
  const nameList= document.querySelector(`#name`);
  const priceList = document.querySelector(`#price`);
  const occList = document.querySelector(`#occ`);

  for (let i=0; i< list.length; i++){
  //create an li in each ul to push the initial freelancer info
      const newName = document.createElement(`li`);
      const newPrice = document.createElement(`li`);
      const newOcc = document.createElement(`li`);
    
      
      //define the li value as the key value corresponding to it
      newName.innerText = `${list[i].name}`
      newPrice.innerText = `${list[i].price}`
      newOcc.innerText = `${list[i].occupation}`
        //append the li to the corresponding ul

      nameList.append(newName);
      priceList.append(newPrice);
      occList.append(newOcc);
      
  }
};

(appendFreelancers(currentFreelancers));


//add new freelancer values to corresponding uls
const potentialFreelancers =[
  { name: "Grace", price: 90, occupation: "Fiber Artist" },
  { name: "Theodore", price: 125, occupation: "Musician" },
  { name: "Rose", price: 100, occupation: "Chef" },
  { name: "Julie", price: 75, occupation: "Interior Decorator"},
  { name: "Frank", price: 85, occupation: "Architect"},
];


const newFreelancers = (list)=>{
  
  
  for (let i=0; i< list.length; i++){
    
    //create an interval for the new freelancers to be added
    //this function is called at an interval to periodiaclly update the page
   setTimeout(() =>{
      
      
  const nameList= document.querySelector(`#name`);
  const priceList = document.querySelector(`#price`);
  const occList = document.querySelector(`#occ`);
  
  
  
    const addNewName = document.createElement(`li`);
    const addNewPrice = document.createElement(`li`);
    const addNewOcc = document.createElement(`li`);
    
    
    addNewName.innerText = `${list[i].name}`
    addNewPrice.innerText = `${list[i].price}`
    addNewOcc.innerText = `${list[i].occupation}`
    
   
    nameList.append(addNewName);
    priceList.append(addNewPrice);
    occList.append(addNewOcc);
    
  }, i* 3000);
};
  
};
  (newFreelancers(potentialFreelancers));

  //write a function to calculate average starting price

  const freelancerPrices = potentialFreelancers.concat( currentFreelancers);
  
  const freelancersSum = (list) => {
    
    const priceList = document.querySelector(`#price`);
    
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
      sum += list[i].price;
    
    };
      let averagePrice = sum / list.length

    const alertPrice = document.querySelector(`p`) 

    alertPrice.innerText = (`The average starting price is ${averagePrice}.`)
  };
    (freelancersSum(freelancerPrices))




  
  
  






  
  




 

  //h1>p
    
  
    //when is the function called to update the message:
      // when a new freelancer is added to the array and displayed


const customName = document.getElementById('customName');
const generateBtn = document.getElementById('generateBtn');
const story = document.querySelector('.story');

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day'

const insertx = ["Willy the Goblin", "Big Daddy", "Father Christmass"];
const inserty = ["the soup kitchen", "Disneyland", "the White House"];
const insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];


randomValueFromArray =(array)=>{

    const random = Math.floor(Math.random()*array.length);
    return array[random];

}

result =()=>{

    console.log('working function')
    let newStory = storyText;

    if(customName !== ''){
        const name = customName.value;
        if (customName.value !== ''){
            newStory = newStory.replace("Bob", name);
        }
    }

 

    if(document.getElementById('uk').checked){
        const weight = Math.round(300);
        const temperature = Math.round(94);
        newStory = newStory.replace("94 fahrenheit", `${Math.round((temperature-32)*0.5556)} Celsius`);
        newStory = newStory.replace("300 pounds", `${Math.round(weight/2.2046) } kg`);
    }

    story.textContent = " " ;

 
    
    const xItem = randomValueFromArray(insertx);
    const yItem = randomValueFromArray(inserty);
    const zItem = randomValueFromArray(insertz);

    newStory = newStory.replace(/:insertx/gi, xItem);
    newStory = newStory.replace(":inserty", yItem);
    newStory = newStory.replace(":insertz", zItem);


    story.textContent = newStory;
}


generateBtn.addEventListener('click', result);
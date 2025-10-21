const container = document.querySelector("#container");

const content = document.createElement("div"); 
content.classList.add("content");
content.textContent ="This is the glorious text-content!";

container.appendChild(content);

// Okay so first step: You need to create a paragraph tag, and add the text to it, and then change the color.  One important thing...  Notice that at the end of each block, you call the 'appendChild' method.  When you are using Javascript to change the DOM, think of it this way: You are making something and holding it in your hand...  And when you're ready, then you put it into the DOM.  That's what appendChild does...  It 'appends' the thing that you made to the page.

const p = document.createElement("p");  // This line creates the paragraph, but it isn't in the page yet
p.style.color = "red"; // Even though it isn't in the DOM yet, you can still change things about it, like the color
p.textContent = "Hey I’m red!"; // Then you can add text to it
document.body.appendChild(p); // And now that it's ready, you put it into the DOM

// Now you need to do the same thing, but this time, with a different h3 tag.  You also want to change it to blue.

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I’m a blue h3!";
document.body.appendChild(h3);

// And now you're going to do the same thing, but change different properties, like the border and background

const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.backgroundColor = "pink";

// Same thing here...

const h1 = document.createElement("h1");
h1.textContent = "I’m in a div";

// And here...  But note that you didn't add them to the DOM yet.

const p2 = document.createElement("p");
p2.textContent = "ME TOO!";

// Now you're adding both of them to the DOM.  But notice that you're not just appending them to the whole page (document), you're adding them to a specific div that you created that isn't on the page yet either...

div.appendChild(h1);
div.appendChild(p2);

// So at this point, you have an imaginary div and you've added two other divs to it...  Now you're going to add the whole thing to the page.

document.body.appendChild(div);
// immediately invoked function expressions (iife)

(function chai()
{
    // named iife
    console.log('DB CONNECTED');
    
})();

( (name) => {
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
}) ('gurubas');
// Immediately Invoked Function Expressions (IIFE): the secret sauce 
// for encapsulating code and maintaining a clean global scope. 
// In this video, you'll uncover the power of IIFEs and how they can enhance code organization,
//  protect variables, and prevent naming collisions. Whether you're a seasoned developer or just starting out, understanding and
//   utilizing IIFEs will level up your JavaScript skills. Get ready to dive into this transformative concept and supercharge your coding prowess!

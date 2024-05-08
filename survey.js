const readline = require('readline');

const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${name}\n`);
    

    rl.question('What\'s an activity you like doing? ', (activity) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${activity}\n`);

        rl.question('What do you listen to while doing that? ', (music) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${music}\n`);

            rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (meal) => {
                // TODO: Log the answer in a database
                console.log(`Thank you for your valuable feedback: ${meal}\n`);

                rl.question('What\'s your favourite thing to eat for that meal? ', (food) => {
                    // TODO: Log the answer in a database
                    console.log(`Thank you for your valuable feedback: ${food}\n`);

                    rl.question('Which sport is your absolute Favourite? ', (sport) => {
                        // TODO: Log the answer in a database
                        console.log(`Thank you for your valuable feedback: ${sport}\n`);

                        rl.question('What is your superpower? ', (superPower) => {
                            // TODO: Log the answer in a database
                            console.log(`Thank you for your valuable feedback: ${superPower}\n`);

                            console.log(`${name} enjoys ${activity}, but it wouldn\'t be the same without some ${music} music! ${meal} is by far the\nbest time of the day, but only if there\'s ${food}. The best sport is clearly ${sport} so\ndon\'t even bother trying to change my mind. My true gift is ${superPower} :)`)

    rl.close();

                            
                        });
                    });
                });
            });
        });
    });

});





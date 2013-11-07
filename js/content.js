//=========================================================================================================================================
// Main Score
//   beginner = 0 - 20
//   intermediate = 21 - 40
//   expert = 41 - 60

var overallScore = 0;

var levelAccessNumber = 0;

//=========================================================================================================================================
// facebook API

// window.fbAsyncInit = function () {
//     FB.init({
//         appId: '491627374259881', // App ID
//         channelUrl: 'http://pamela.cognique.co.uk/channel.html', // Channel File
//         status: true,
//         cookie: true, // enable cookies to allow the server to access the session
//         xfbml: true  // parse XFBML
//     });
// };

// // Load the SDK Asynchronously
// (function (d) {
//     var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
//     if (d.getElementById(id)) { return; }
//     js = d.createElement('script'); js.id = id; js.async = true;
//     js.src = "//connect.facebook.net/en_US/all.js";
//     ref.parentNode.insertBefore(js, ref);
// } (document));

//=========================================================================================================================================
// array containing all the questions. optionA is always the correct answer (i.e. evaluates true)

var questions_answers_images = { "questions_answers" : [   // questions_answers is an array in questions_answers_images.

    // ==============================beginner=======================================

    { "optionA" : "Mulberry",             // Series of questions - #1
      "optionB" : "Valentino",
      "optionC" : "Asprey",
      "image"   : "beginner/Mulberry-1" },

    { "optionA" : "Missoni",              // Series of questions - #2
      "optionB" : "Frederick Fox",
      "optionC" : "Erickson Beamon",
      "image"   : "beginner/Missoni-1" },

    { "optionA" : "Marc Jacobs",            // Series of questions - #3
      "optionB" : "Jimmy Choo",
      "optionC" : "Iceberg",
      "image"   : "beginner/Marc-Jacobs-1" },

    { "optionA" : "Loewe",              // Series of questions - #4
      "optionB" : "Gianmarco Lorenzi",
      "optionC" : "Marni",
      "image"   : "beginner/Loewe-1" },

    { "optionA" : "Stella McCartney",        // Series of questions - #5
      "optionB" : "Windsmoor",
      "optionC" : "Ginka",
      "image"   : "beginner/Stella-McCartney-1" },

    { "optionA" : "Christian Louboutin",        // Series of questions - #6
      "optionB" : "Fratelli Rossetti",
      "optionC" : "Chanel",
      "image"   : "beginner/Christian-Louboutin-1" },

    { "optionA" : "Chanel",        // Series of questions - #7
      "optionB" : "D.K.N.Y",
      "optionC" : "Ghost",
      "image"   : "beginner/Chanel-1" },

    { "optionA" : "Herve Leger",        // Series of questions - #8
      "optionB" : "Katherine Hamnett",
      "optionC" : "Antik Batik",
      "image"   : "beginner/Herve-Leger-1" },

    { "optionA" : "Louis Vuitton",        // Series of questions - #9
      "optionB" : "Azagury",
      "optionC" : "Bvlgari",
      "image"   : "beginner/Louis-Vuitton-1" },

    { "optionA" : "Gucci",        // Series of questions - #10
      "optionB" : "Katherine Hamnett",
      "optionC" : "Alice & Olivia",
      "image"   : "beginner/Gucci-1" },

    { "optionA" : "Christian Louboutin",             // Series of questions - #11
      "optionB" : "Anne Klein",
      "optionC" : "Cachare",
      "image"   : "beginner/Christian-Louboutin-2" },

    { "optionA" : "Herve Leger",              // Series of questions - #12
      "optionB" : "Accessorize",
      "optionC" : "Daks",
      "image"   : "beginner/Herve-Leger-2" },

    { "optionA" : "Hermes",            // Series of questions - #13
      "optionB" : "Jean Paul Gaultier",
      "optionC" : "Joan & David",
      "image"   : "beginner/Hermes-2" },

    { "optionA" : "Balenciaga",              // Series of questions - #14
      "optionB" : "Liza Bruce",
      "optionC" : "Windsmoor",
      "image"   : "beginner/Balenciaga-1" },

    { "optionA" : "Ferragamo",        // Series of questions - #15
      "optionB" : "Jason Wu",
      "optionC" : "Kenzo",
      "image"   : "beginner/Ferragamo-2" },

    { "optionA" : "Hermes",        // Series of questions - #16
      "optionB" : "Voyage",
      "optionC" : "D.K.N.Y",
      "image"   : "beginner/Hermes-4" },

    { "optionA" : "Louis Vuitton",        // Series of questions - #17
      "optionB" : "Hermes",
      "optionC" : "Coach",
      "image"   : "beginner/Louis-Vuitton-3" },

    { "optionA" : "Chanel",        // Series of questions - #18
      "optionB" : "Lucienne Phillips",
      "optionC" : "Gripoix",
      "image"   : "beginner/Chanel-3" },

    { "optionA" : "Bottega Venetta",        // Series of questions - #19
      "optionB" : "Gina",
      "optionC" : "Cartier",
      "image"   : "beginner/Bottega-Venetta-1" },

    { "optionA" : "Louis Vuitton",        // Series of questions - #20
      "optionB" : "Betty Barclay",
      "optionC" : "Anya Hindmarch",
      "image"   : "beginner/Louis-Vuitton-4" },

    // ==============================intermediate=======================================

    { "optionA" : "Chanel",             // Series of questions - #21
      "optionB" : "Stella McCartney",
      "optionC" : "Hugo Boss",
      "image"   : "intermediate/Chanel-2" },

    { "optionA" : "Hermes",              // Series of questions - #22
      "optionB" : "Patrick Kelly",
      "optionC" : "Armani",
      "image"   : "intermediate/Hermes-2" },

    { "optionA" : "Zagliani",            // Series of questions - #23
      "optionB" : "Burberry",
      "optionC" : "Cardin",
      "image"   : "intermediate/Zagliani-1" },

    { "optionA" : "Prada",              // Series of questions - #24
      "optionB" : "Azagury",
      "optionC" : "Catherine Walker",
      "image"   : "intermediate/Prada-2" },

    { "optionA" : "YSL",        // Series of questions - #25
      "optionB" : "Adam Jones",
      "optionC" : "Longchamp",
      "image"   : "intermediate/YSL-1" },

    { "optionA" : "Hermes",        // Series of questions - #26
      "optionB" : "Lucienne Phillips",
      "optionC" : "Gripoix",
      "image"   : "intermediate/Hermes-1" },

    { "optionA" : "Lanvin",        // Series of questions - #27
      "optionB" : "Kasper",
      "optionC" : "Lange",
      "image"   : "intermediate/Lanvin-2" },

    { "optionA" : "Chanel",        // Series of questions - #28
      "optionB" : "Milly of New York",
      "optionC" : "Liza Bruce",
      "image"   : "intermediate/Chanel-1" },

    { "optionA" : "Louis Vuitton",        // Series of questions - #29
      "optionB" : "Miu Miu",
      "optionC" : "Karen Millen",
      "image"   : "intermediate/Louis-Vuitton-1" },

    { "optionA" : "Prada",        // Series of questions - #30
      "optionB" : "Maxmara",
      "optionC" : "Walter Steiger",
      "image"   : "intermediate/Prada-1" },

    { "optionA" : "Dolce and Gabbana",             // Series of questions - #31
      "optionB" : "Lulu Guinness",
      "optionC" : "Vera Wang",
      "image"   : "intermediate/Dolce-and-Gabbana-1" },

    { "optionA" : "Jimmy Choo",              // Series of questions - #32
      "optionB" : "Jenny packham",
      "optionC" : "Loewe",
      "image"   : "intermediate/Jimmy-Choo-1" },

    { "optionA" : "YSL",            // Series of questions - #33
      "optionB" : "Gina",
      "optionC" : "Fratelli Rossetti",
      "image"   : "intermediate/YSL-2" },

    { "optionA" : "Lanvin",              // Series of questions - #34
      "optionB" : "Karen Millen",
      "optionC" : "Moschino (cheap and chic)",
      "image"   : "intermediate/Lanvin-1" },

    { "optionA" : "Chanel",        // Series of questions - #35
      "optionB" : "Louis Vuitton",
      "optionC" : "Kooka",
      "image"   : "intermediate/Chanel-3" },

    { "optionA" : "Fendi",        // Series of questions - #36
      "optionB" : "Guy Laroche",
      "optionC" : "Paul & Joe",
      "image"   : "intermediate/Fendi-1" },

    { "optionA" : "Hermes",        // Series of questions - #37
      "optionB" : "Gianfranco Ferre",
      "optionC" : "Isabel Marant",
      "image"   : "intermediate/Hermes-3" },

    { "optionA" : "Isabel Marant",        // Series of questions - #38
      "optionB" : "L.K.Bennett",
      "optionC" : "Guy Laroche",
      "image"   : "intermediate/Isabel-Marant-1" },

    { "optionA" : "Dolce and Gabbana",        // Series of questions - #39
      "optionB" : "Loewe",
      "optionC" : "Lanvin",
      "image"   : "intermediate/Dolce-and-Gabbana-2" },

    { "optionA" : "Herve Leger",        // Series of questions - #40
      "optionB" : "Jil Sander",
      "optionC" : "Marni",
      "image"   : "intermediate/Herve-Leger-1" },

    // ==============================expert=======================================

    { "optionA" : "Christian Louboutin",             // Series of questions - #41
      "optionB" : "Comme des Garcons",
      "optionC" : "Casadei",
      "image"   : "expert/Christian-Louboutin-1" },

    { "optionA" : "Alexander McQueen",              // Series of questions - #42
      "optionB" : "Episode",
      "optionC" : "Voyage",
      "image"   : "expert/Alexander-McQueen-1" },

    { "optionA" : "Louis Vuitton",            // Series of questions - #43
      "optionB" : "Patrick Kelly",
      "optionC" : "Givenchy",
      "image"   : "expert/Louis-Vuitton-3" },

    { "optionA" : "Gianmarco Lorenzi",              // Series of questions - #44
      "optionB" : "Fratelli Rossetti",
      "optionC" : "Heidi Klein",
      "image"   : "expert/Gianmarco-Lorenzi-1" },

    { "optionA" : "Michael Kors",        // Series of questions - #45
      "optionB" : "Liza Bruce",
      "optionC" : "Bill Blass",
      "image"   : "expert/Michael-Kors-1" },

    { "optionA" : "Etro",        // Series of questions - #46
      "optionB" : "Emma Hope",
      "optionC" : "Frank Usher",
      "image"   : "expert/Etro-1" },

    { "optionA" : "Ferragamo",        // Series of questions - #47
      "optionB" : "Jean Paul Gaultier",
      "optionC" : "Loewe",
      "image"   : "expert/Ferragamo-1" },

    { "optionA" : "Anya Hindmarch",        // Series of questions - #48
      "optionB" : "Jil Sander",
      "optionC" : "Walter Steiger",
      "image"   : "expert/Anya-Hindmarch-1" },

    { "optionA" : "Alaia",        // Series of questions - #49
      "optionB" : "Margaret Howell",
      "optionC" : "Vivienne Westwood",
      "image"   : "expert/Alaia-1" },

    { "optionA" : "Dolce & Gabbana",        // Series of questions - #50
      "optionB" : "Apostrophe",
      "optionC" : "Kurt Geiger",
      "image"   : "expert/Dolce-and-Gabbana-1" },

    { "optionA" : "Giuseppe Zanotti",             // Series of questions - #51
      "optionB" : "Bianca",
      "optionC" : "Vera Wang",
      "image"   : "expert/Giuseppe-Zanotti-1" },

    { "optionA" : "Louis Vuitton",              // Series of questions - #52
      "optionB" : "Baccarat",
      "optionC" : "Ann-Louise Roswald",
      "image"   : "expert/Louis-Vuitton-2" },

    { "optionA" : "Nicholas Kirkwood",            // Series of questions - #53
      "optionB" : "Alexander Wang",
      "optionC" : "Chloe",
      "image"   : "expert/Nicholas-Kirkwood-1" },

    { "optionA" : "Celine",              // Series of questions - #54
      "optionB" : "Blumarine",
      "optionC" : "Austin Reed",
      "image"   : "expert/Celine-1" },

    { "optionA" : "Isharya",        // Series of questions - #55
      "optionB" : "Cerruti",
      "optionC" : "Comme des Garcons",
      "image"   : "expert/Isharya-1" },

    { "optionA" : "Dior",        // Series of questions - #56
      "optionB" : "Butler & Wilson",
      "optionC" : "Chanel",
      "image"   : "expert/Dior-1" },

    { "optionA" : "Philip Somerville",        // Series of questions - #57
      "optionB" : "Kurt Keiger",
      "optionC" : "Anthony Price",
      "image"   : "expert/Philip-Somerville-1" },

    { "optionA" : "Louis Vuitton",        // Series of questions - #58
      "optionB" : "Paul & Joe",
      "optionC" : "Casadei",
      "image"   : "expert/Louis-Vuitton-1" },

    { "optionA" : "Pucci Python",        // Series of questions - #59
      "optionB" : "Adrienne Vittadin",
      "optionC" : "Ballantyne",
      "image"   : "expert/Pucci-python-1" },

    { "optionA" : "Christian Lacroix",        // Series of questions - #60
      "optionB" : "Alexander Qang",
      "optionC" : "Anne Klein",
      "image"   : "expert/Christian-Lacroix-1" },
    ] // End "questions_answers_images" array.

} // End questions_answers_images
//=========================================================================================================================================
// Render content into Container

var renderHTML = {

    renderHomePage : function() {
        var html =
            '<section class="home-page">' +
            '<header>' +
            '<img src="img/pandora-logo.svg" alt="">' +
            '</header>' +
            '<div class="content homepage">' +
            '<div class="game-image"></div>' +
            '<a href="#" onclick="renderHTML.renderSkillLevelPage()" class="big-button">START</a>' +
            '</div>' +
            '</section>';
        $('.container').html(html);
    // resets the score if the score is above 20 i.e. playing one level after the other
    scoreCalculations.resetScore();
    },

    renderSkillLevelPage : function() {
        var html =
            '<section class="skill-level-page">' +
            '<div class="content skill-level">' +
            '<a href="#" onclick="renderHTML.renderLevelsPage(100)" class="big-button skill-level beginner">BEGINNER</a>' +
            '<a href="#" onclick="renderHTML.renderLevelsPage(200)" class="big-button skill-level intermediate">INTERMEDIATE</a>' +
            '<a href="#" onclick="renderHTML.renderLevelsPage(300)" class="big-button skill-level expert">EXPERT</a>' +
            '</div>' +
            '</section>';
        $('.container').html(html);
        showHideSkillLevels.skillLevelEnabled();
    },

    renderLevelsPage : function(skillLevel) {

        var html_Beginner =
            '<section class="levels-page">' +
            '<div class="content levels">' +
            '<a href="#" onclick="scoreCalculations.resetScore_BEGINNER(); renderHTML.renderQuestionPage_fromLevelsPage(0)" class="small-button levels 1">1</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(1)" class="small-button levels 2">2</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(2)" class="small-button levels 3">3</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(3)" class="small-button levels 4">4</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(4)" class="small-button levels 5">5</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(5)" class="small-button levels 6">6</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(6)" class="small-button levels 7">7</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(7)" class="small-button levels 8">8</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(8)" class="small-button levels 9">9</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(9)" class="small-button levels 10">10</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(10)" class="small-button levels 11">11</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(11)" class="small-button levels 12">12</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(12)" class="small-button levels 13">13</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(13)" class="small-button levels 14">14</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(14)" class="small-button levels 15">15</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(15)" class="small-button levels 16">16</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(16)" class="small-button levels 17">17</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(17)" class="small-button levels 18">18</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(18)" class="small-button levels 19">19</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(19)" class="small-button levels 20">20</a>' +
            '</div>' +
            '</section>';

        var html_Intermediate =
            '<section class="levels-page">' +
            '<div class="content levels">' +
            '<a href="#" onclick="scoreCalculations.resetScore_INTERMEDIATE(); renderHTML.renderQuestionPage_fromLevelsPage(20)" class="small-button levels 21">1</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(21)" class="small-button levels 22">2</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(22)" class="small-button levels 23">3</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(23)" class="small-button levels 24">4</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(24)" class="small-button levels 25">5</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(25)" class="small-button levels 26">6</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(26)" class="small-button levels 27">7</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(27)" class="small-button levels 28">8</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(28)" class="small-button levels 29">9</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(29)" class="small-button levels 30">10</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(30)" class="small-button levels 31">11</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(31)" class="small-button levels 32">12</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(32)" class="small-button levels 33">13</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(33)" class="small-button levels 34">14</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(34)" class="small-button levels 35">15</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(35)" class="small-button levels 36">16</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(36)" class="small-button levels 37">17</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(37)" class="small-button levels 38">18</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(38)" class="small-button levels 39">19</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(39)" class="small-button levels 40">20</a>' +
            '</div>' +
            '</section>';

        var html_Expert =
            '<section class="levels-page">' +
            '<div class="content levels">' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(40)" class="small-button levels 41">1</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(41)" class="small-button levels 42">2</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(42)" class="small-button levels 43">3</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(43)" class="small-button levels 44">4</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(44)" class="small-button levels 45">5</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(45)" class="small-button levels 46">6</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(46)" class="small-button levels 47">7</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(47)" class="small-button levels 48">8</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(48)" class="small-button levels 49">9</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(49)" class="small-button levels 50">10</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(50)" class="small-button levels 51">11</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(51)" class="small-button levels 52">12</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(52)" class="small-button levels 53">13</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(53)" class="small-button levels 54">14</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(54)" class="small-button levels 55">15</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(55)" class="small-button levels 56">16</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(56)" class="small-button levels 57">17</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(57)" class="small-button levels 58">18</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(58)" class="small-button levels 59">19</a>' +
            '<a href="#" onclick="renderHTML.renderQuestionPage_fromLevelsPage(59)" class="small-button levels 60">20</a>' +
            '</div>' +
            '</section>';

            if (skillLevel == 100) {
                var html = html_Beginner;
            } else if (skillLevel == 200) {
                var html = html_Intermediate;
            } else {
                var html = html_Expert;
            }

            $('.container').html(html);

        showHideLevels.levelsEnabled();
    },

    renderQuestionPage_fromLevelsPage : function(level) {

        scoreCalculations.stopPointCarrying()
        // resets the score if the score is above 20 i.e. playing one level after the other
        scoreCalculations.resetScore();

        // determine what number to present as current question number
        // takes in the argument 'level' from the link in renderLevelsPage and adjusts it
        switch (true) {
            case (level <= 19):
                var localQuestionNumber = (level+1);
                break;

            case ((level >= 20) && (level <= 39)):
                var localQuestionNumber = (level-19);
                break;

            case ((level >= 40) && (level <= 60)):
                var localQuestionNumber = (level-39);
                break;
        }

        var HTMLoptionA = '<a href="#" onclick="chooseAnswer.optionSelectedA()" class="option A">' + questions_answers_images.questions_answers[level].optionA + '</a>';
        var HTMLoptionB = '<a href="#" onclick="chooseAnswer.optionSelectedB()" class="option B">' + questions_answers_images.questions_answers[level].optionB + '</a>';
        var HTMLoptionC = '<a href="#" onclick="chooseAnswer.optionSelectedC()" class="option C">' + questions_answers_images.questions_answers[level].optionC + '</a>';

        var random = Math.random();

        if (random < 0.166) {
            var questionOrder = HTMLoptionA + HTMLoptionB + HTMLoptionC;
        } else if (random <= 0.333) {
            var questionOrder = HTMLoptionA + HTMLoptionC + HTMLoptionB;
        } else if (random <= 0.500) {
            var questionOrder = HTMLoptionB + HTMLoptionA + HTMLoptionC;
        } else if (random <= 0.666) {
            var questionOrder = HTMLoptionB + HTMLoptionC + HTMLoptionA;
        } else if (random <= 0.833) {
            var questionOrder = HTMLoptionC + HTMLoptionA + HTMLoptionB;
        } else {
            var questionOrder = HTMLoptionC + HTMLoptionB + HTMLoptionA;
        }

        var html =
            '<section class="question-page">' +
            '<div class="title">NAME THAT BRAND</div>' +
            '<div class="image question test"><img src="img/' + questions_answers_images.questions_answers[level].image + '.jpg" alt=""></div>' +
            questionOrder +
            '<div class="navigation-container">' +
            '<a href="#" onclick="chooseAnswer.previousQuestion()" class="back">BACK</a>' +
            '<div class="pagination">' + localQuestionNumber + ' of 20</div>' +
            '<a href="#" onclick="chooseAnswer.nextQuestion()" class="next">NEXT</a>' +
            '</div>' +
            '</section>';
        $('.container').html(html);
            console.log("The current score is " + overallScore);
            console.log("The level access number is index " + levelAccessNumber);
            console.log("===================================");

        $(".next").addClass("disable");

        // prevent player from navigating backwards to a previous level and altering scores
        if ((levelAccessNumber == 0) || (levelAccessNumber == 20) || (levelAccessNumber == 40) || (levelAccessNumber == 60)) {
            overallScore = 0;
            $(".back").addClass("disable");
        }

    },

    renderQuestionPage : function() {

        scoreCalculations.stopPointCarrying()
        // resets the score if the score is above 20 i.e. playing one level after the other
        scoreCalculations.resetScore();

        // determine what number to present as current question number
        switch (true) {
            case (levelAccessNumber <= 19):
                var localQuestionNumber = (levelAccessNumber+1);
                break;

            case ((levelAccessNumber >= 20) && (levelAccessNumber <= 39)):
                var localQuestionNumber = (levelAccessNumber+1-20);
                break;

            case ((levelAccessNumber >= 40) && (levelAccessNumber <= 60)):
                var localQuestionNumber = (levelAccessNumber+1-40);
                break;
        }

        var HTMLoptionA = '<a href="#" onclick="chooseAnswer.optionSelectedA()" class="option A">' + questions_answers_images.questions_answers[levelAccessNumber].optionA + '</a>';
        var HTMLoptionB = '<a href="#" onclick="chooseAnswer.optionSelectedB()" class="option B">' + questions_answers_images.questions_answers[levelAccessNumber].optionB + '</a>';
        var HTMLoptionC = '<a href="#" onclick="chooseAnswer.optionSelectedC()" class="option C">' + questions_answers_images.questions_answers[levelAccessNumber].optionC + '</a>';

        var random = Math.random();

        if (random < 0.166) {
            var questionOrder = HTMLoptionA + HTMLoptionB + HTMLoptionC;
        } else if (random <= 0.333) {
            var questionOrder = HTMLoptionA + HTMLoptionC + HTMLoptionB;
        } else if (random <= 0.500) {
            var questionOrder = HTMLoptionB + HTMLoptionA + HTMLoptionC;
        } else if (random <= 0.666) {
            var questionOrder = HTMLoptionB + HTMLoptionC + HTMLoptionA;
        } else if (random <= 0.833) {
            var questionOrder = HTMLoptionC + HTMLoptionA + HTMLoptionB;
        } else {
            var questionOrder = HTMLoptionC + HTMLoptionB + HTMLoptionA;
        }

        var html =
            '<section class="question-page">' +
            '<div class="title">NAME THAT BRAND</div>' +
            '<div class="image question"><img src="img/' + questions_answers_images.questions_answers[levelAccessNumber].image + '.jpg" alt=""></div>' +
            questionOrder +
            '<div class="navigation-container">' +
            '<a href="#" onclick="chooseAnswer.previousQuestion()" class="back">BACK</a>' +
            '<div class="pagination">' + localQuestionNumber + ' of 20</div>' +
            '<a href="#" onclick="chooseAnswer.nextQuestion()" class="next">NEXT</a>' +
            '</div>' +
            '</section>';
        $('.container').html(html);
            console.log("The current score is " + overallScore);
            console.log("The current local question number is " + localQuestionNumber);
            console.log("The level access number is index " + levelAccessNumber);
            console.log("===================================");

        $(".next").addClass("disable");

        // prevent player from navigating backwards to a previous level and altering scores
        if ((levelAccessNumber == 0) || (levelAccessNumber == 20) || (levelAccessNumber == 40) || (levelAccessNumber == 60)) {
            overallScore = 0;
            $(".back").addClass("disable");
        }

    },

    childBrowserFunctionFACEScore : function() {

        var percentage = scoreCalculations.percentageScore();
        var ranking = scoreCalculations.ranking();

        switch (true) {
            case (levelAccessNumber <= 20):
                var level = 'Beginner';
                break;

            case ((levelAccessNumber >= 21) && (levelAccessNumber <= 40)):
                var level = 'Intermediate';
                break;

            case ((levelAccessNumber >= 41) && (levelAccessNumber <= 60)):
                var level = 'Expert';
                break;
        }

        // var facebookInfo = {
        //     name: 'PandoraDressAgency',
        //     caption: 'TheGameApp',
        //     description: ranking + ':Iscored' + percentage + '%on' + level + 'Level',
        //     link: 'https%3A%2F%2Fwww.pandoradressagency.co.uk%2F'
        // };

        var facebookInfo = {
            name: 'Pandora%20Dress%20Agency',
            caption: 'The%20Designer%20Label%20Game',
            description: ranking + '%3A%20I%20scored%20'+ percentage + '%25%20on%20' + level + '%20level',
            link: 'https%3A%2F%2Fwww.pandoradressagency.co.uk%2F'
        };

        var facebook_url =
            "https://www.facebook.com/dialog/feed?" +
            "&name=" + facebookInfo.name +
            "&caption=" + facebookInfo.caption +
            "&description=" + facebookInfo.description +
            "&link=" + facebookInfo.link +
            "&app_id=491627374259881" +
            "&display=popup" +
            "&next=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D25%23cb%3Df1b39d2e98%26origin%3Dhttp%253A%252F%252Fpamela.cognique.co.uk%252Ffa0a82d7c%26domain%3Dpamela.cognique.co.uk%26relation%3Dopener%26frame%3Df2d2a921b%26result%3D%2522xxRESULTTOKENxx%2522";

      window.plugins.childBrowser.showWebPage(facebook_url, { showLocationBar: true });
    },

    renderScorePage : function() {

        var percentage = scoreCalculations.percentageScore();
        var ranking = scoreCalculations.ranking();

        switch (true) {
            case (levelAccessNumber <= 20):
                var level = 'Beginner';
                break;

            case ((levelAccessNumber >= 21) && (levelAccessNumber <= 40)):
                var level = 'Intermediate';
                break;

            case ((levelAccessNumber >= 41) && (levelAccessNumber <= 60)):
                var level = 'Expert';
                break;
        }

        // var facebookInfo = {
        //     name: 'Pandora Dress Agency',
        //     caption: 'The Game App',
        //     description: ranking + ': I scored ' + percentage + '% on ' + level + ' Level',
        //     link: 'http://www.pandoradressagency.co.uk/'
        // };

        // var facebook_url =
        //     "https://www.facebook.com/dialog/feed?" +
        //     "&name=" + facebookInfo.name +
        //     "&caption=" + facebookInfo.caption +
        //     "&description=" + facebookInfo.description +
        //     "&link=" + facebookInfo.link +
        //     "&app_id=491627374259881" +
        //     "&display=popup" +
        //     "&next=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D25%23cb%3Df1b39d2e98%26origin%3Dhttp%253A%252F%252Fpamela.cognique.co.uk%252Ffa0a82d7c%26domain%3Dpamela.cognique.co.uk%26relation%3Dopener%26frame%3Df2d2a921b%26result%3D%2522xxRESULTTOKENxx%2522";

        var html =
            '<section class="score-page">' +
            '<div class="score">' +
            '<p>YOU SCORED:</p>' +
            '<span>' +
            percentage +
            '%' +
            '</span>' +
            '</div>' +
            '<div class="ranking">' +
            '<p>YOUR RANKING:</p>' +
            '<span>' +
            ranking +
            '</span>' +
            '</div>' +
            '<div class="score-button-wrapper">' +
            '<a href="#" onclick="renderHTML.childBrowserGameAnswers()" class="click-answers">Click here for the answers</a>' +
            '<a onclick="renderHTML.renderSkillLevelPage()" class="big-button score-page next-round" href="#">NEXT ROUND</a>' +
            '<a onclick="renderHTML.renderHomePage(); scoreCalculations.resetEverything()" class="big-button score-page" href="#">START AGAIN</a>' +
            '<a class="big-button score-page" href="#" onclick="renderHTML.childBrowserFunctionFACEScore()">SHARE</a>' +
            // '<a class="big-button score-page" href="javascript:{}" onclick="renderHTML.setStatusWithFeedDialog();">SHARE</a>' +
            '</div>' +
            '</section>';
        $('.container').html(html);

        if (levelAccessNumber > 59) {
            $('a.big-button.score-page.next-round').addClass('disable');
        }
    },

    childBrowserGameAnswers : function() {
        switch (true) {
            case (levelAccessNumber <= 20):
                var level = 'beginner';
                break;

            case ((levelAccessNumber >= 21) && (levelAccessNumber <= 40)):
                var level = 'intermediate';
                break;

            case ((levelAccessNumber >= 41) && (levelAccessNumber <= 60)):
                var level = 'expert';
                break;
        }
      //window.open("http://www.pandoradressagency.com/the-designer-label-game-answers/" + level + "/");
      window.plugins.childBrowser.showWebPage("http://www.pandoradressagency.com/the-designer-label-game-answers/" + level + "/", { showLocationBar: true });
    },

    // setStatusWithFeedDialog : function() {

    //     var percentage = scoreCalculations.percentageScore();
    //     var ranking = scoreCalculations.ranking();

    //     FB.ui({
    //         percentage : scoreCalculations.percentageScore(),
    //         ranking : scoreCalculations.ranking(),
    //         method: 'feed',
    //         name: 'Pandora Dress Agency',
    //         link: 'http://www.pandoradressagency.com/',
    //         picture: 'http://www.pandoradressagency.com/wp-content/themes/pand01/images/logo.png',
    //         caption: 'Guess the brand app',
    //         description: ranking + ': I scored ' + percentage + '% on the Pandora Dress Agency App'
    //     });
    // },

    renderMapPage : function() {

        var html =
            '<section id="map" class="map">' +
            '<header>' +
            '<img src="img/logo.png" alt="">' +
            '</header>' +
            '<div style="width: 256px; height: 203px; margin-bottom: 5px;" id="map-canvas"></div>' +
            // '<iframe width="256" height="203" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.co.uk/maps?q=SW7+1ES&amp;ie=UTF8&amp;hq=&amp;hnear=London+SW7+1ES,+United+Kingdom&amp;gl=uk&amp;ll=51.498929,-0.166554&amp;spn=0.012276,0.033023&amp;t=m&amp;z=14&amp;output=embed"></iframe>' +
            '<a href="//www.pandoradressagency.com" target="_blank">www.pandoradressagency.com</a>' +
            '<ul>' +
            '<li>10.00am to 7.00pm - Monday to Saturday</li>' +
            '<li>12.00am to 6.00pm - Sunday</li>' +
            '<li>&nbsp;</li>' +
            '<li>Pandora Dress Agency</li>' +
            '<li>16-22, Cheval Place</li>' +
            '<li>Knightsbridge</li>' +
            '<li>London SW7 1ES</li>' +
            '<li>&nbsp;</li>' +
            '<li><span class="telephone">Tel:</span>0207 589 5289</li>' +
            '</ul>' +
            '</section>';
        $('.container').html(html);
        $("div.container").css("overflow-y", "auto");

        var map;
        var mapOptions = {
            zoom: 14,
            center: new google.maps.LatLng(51.498929,-0.166554),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
    },

    renderBuyingSellingPage : function() {
        var html =
            '<section class="buying-selling">' +
            '<header>' +
            '<img src="img/logo.png" alt="">' +
            '</header>' +
            '<span>Buying</span>' +
            '<p>' +
            'Look like a milion dollars without spending a fortune. Pandora is bulging with wonderful bargins. Designer fashion for far less than the orignial price. Experienced merchandisers hand-pick every item, assuring everything meets our very high standards.' +
            '</p>' +
            '<span>Selling</span>   ' +
            '<p>' +
            'Pandora accepts items for re-sale every day. Sellers leave their garments at agreed prices, collecting the money when the garments sell. Use our Dop Off List to specify your items and speed things up when leaving your garments for sale. Please note that we only accept designer label merchandiise that is "as good as new" and no more than two years old.' +
            '</p>' +
            '</section>';
        $('.container').html(html);
        $("div.container").css("overflow-y", "auto");
    },

    childBrowserFunctionFACE : function() {

        var facebookInfo = {
            name: 'Pandora%20Dress%20Agency',
            caption: 'The%20Designer%20Label%20Game',
            description: 'Available%20in%20the%20App%20Store%20and%20Google%20Play',
            link: 'https%3A%2F%2Fwww.pandoradressagency.co.uk%2F'
        };

        var facebook_url =
            "https://www.facebook.com/dialog/feed?" +
            "&name=" + facebookInfo.name +
            "&caption=" + facebookInfo.caption +
            "&description=" + facebookInfo.description +
            "&link=" + facebookInfo.link +
            "&app_id=491627374259881" +
            "&display=popup" +
            "&next=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D25%23cb%3Df1b39d2e98%26origin%3Dhttp%253A%252F%252Fpamela.cognique.co.uk%252Ffa0a82d7c%26domain%3Dpamela.cognique.co.uk%26relation%3Dopener%26frame%3Df2d2a921b%26result%3D%2522xxRESULTTOKENxx%2522";

      window.plugins.childBrowser.showWebPage(facebook_url, { showLocationBar: true });
    },

    childBrowserFunctionTWIT : function() {
      var twitter_url = "https://twitter.com/intent/tweet?text=I%27ve%20been%20playing%20the%20Designer%20Label%20Game";
      window.plugins.childBrowser.showWebPage(twitter_url, { showLocationBar: true });
    },

    renderScoreSharePage : function() {

        // var facebookInfo = {
        //     name: 'Pandora%20Dress%20Agency',
        //     caption: 'The%20Game%20App',
        //     description: 'Description%20goes%20here...',
        //     link: 'https%3A%2F%2Fwww.pandoradressagency.co.uk%2F'
        // };

        // var facebook_url =
        //     "https://www.facebook.com/dialog/feed?" +
        //     "&name=" + facebookInfo.name +
        //     "&caption=" + facebookInfo.caption +
        //     "&description=" + facebookInfo.description +
        //     "&link=" + facebookInfo.link +
        //     "&app_id=491627374259881" +
        //     "&display=popup" +
        //     "&next=http%3A%2F%2Fstatic.ak.facebook.com%2Fconnect%2Fxd_arbiter.php%3Fversion%3D25%23cb%3Df1b39d2e98%26origin%3Dhttp%253A%252F%252Fpamela.cognique.co.uk%252Ffa0a82d7c%26domain%3Dpamela.cognique.co.uk%26relation%3Dopener%26frame%3Df2d2a921b%26result%3D%2522xxRESULTTOKENxx%2522";

        // var facebook_standard = "https://www.facebook.com/dialog/feed?" +
        //     "app_id=145634995501895" +
        //     "&display=popup" +
        //     "&caption=An%20example%20caption" +
        //     "&link=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fdialogs%2F" +
        //     "&redirect_uri=https://developers.facebook.com/tools/explorer";

        // var twitter_url = "https://twitter.com/intent/tweet?text=I%27ve%20been%20playing%20the%20Pandora%20App%20Game";

        var string = "123123123123123",
            link = "http%3A%2F%2Fwww.google.com",
            picture = "https://www.google.nl/images/srpr/logo4w.png";

        var html =
            '<section class="skill-level-page">' +
            '<div class="content skill-level">' +
            '<a href="#" onclick="renderHTML.childBrowserFunctionFACE()" class="big-button skill-level">FACEBOOK</a>' +
            '<a href="#" onclick="renderHTML.childBrowserFunctionTWIT()" class="big-button skill-level">TWITTER</a>' +
            '<button onclick="window.plugins.socialsharing.share('+string+', null, null, '+link+')">message and link</button>' +
            // '<a href="' + facebook_url + '" class="big-button skill-level" target="_blank">FACEBOOK</a>' +
            // '<a href="' + twitter_url + '" class="big-button skill-level" target="_blank">TWITTER</a>' +
            "</div>" +
            "</section>";
        $('.container').html(html);
    }

};

//=========================================================================================================================================
// check scores and disable levels accordingly

var showHideSkillLevels = {

    // this function is called after loading the Skill Level Page HTML content
    skillLevelEnabled : function() {
        switch (true) {
            case (levelAccessNumber <= 19):
                $( ".big-button.skill-level").removeClass("disable");
                $( ".big-button.skill-level.expert, .big-button.skill-level.intermediate").addClass("disable");
                break;

            case ((levelAccessNumber >= 20) && (levelAccessNumber <= 39)):
                $( ".big-button.skill-level").removeClass("disable");
                $( ".big-button.skill-level.expert").addClass("disable");
                break;

            case ((levelAccessNumber >= 40) && (levelAccessNumber <= 60)):
                $( ".big-button.skill-level").removeClass("disable");
                break;
        }
    }

};

//=========================================================================================================================================
// check scores and disable levels accordingly

var showHideLevels = {

    // this function is called after loading the Levels Page HTML content
    levelsEnabled : function() {
        if (levelAccessNumber == 0) {
            $( ".small-button.levels").addClass("disable");
            $( ".small-button.levels.1").removeClass("disable");
        } else {
            $(
              ".small-button.levels." + (levelAccessNumber+2) +
            ", .small-button.levels." + (levelAccessNumber+3) +
            ", .small-button.levels." + (levelAccessNumber+4) +
            ", .small-button.levels." + (levelAccessNumber+5) +
            ", .small-button.levels." + (levelAccessNumber+6) +
            ", .small-button.levels." + (levelAccessNumber+7) +
            ", .small-button.levels." + (levelAccessNumber+8) +
            ", .small-button.levels." + (levelAccessNumber+9) +
            ", .small-button.levels." + (levelAccessNumber+10) +
            ", .small-button.levels." + (levelAccessNumber+11) +
            ", .small-button.levels." + (levelAccessNumber+12) +
            ", .small-button.levels." + (levelAccessNumber+13) +
            ", .small-button.levels." + (levelAccessNumber+14) +
            ", .small-button.levels." + (levelAccessNumber+15) +
            ", .small-button.levels." + (levelAccessNumber+16) +
            ", .small-button.levels." + (levelAccessNumber+17) +
            ", .small-button.levels." + (levelAccessNumber+18) +
            ", .small-button.levels." + (levelAccessNumber+19) +
            ", .small-button.levels." + (levelAccessNumber+20)
            ).addClass("disable");
        }
        if (levelAccessNumber >= 20) {
            $(".small-button.levels.2" +
            ", .small-button.levels.3" +
            ", .small-button.levels.4" +
            ", .small-button.levels.5" +
            ", .small-button.levels.6" +
            ", .small-button.levels.7" +
            ", .small-button.levels.8" +
            ", .small-button.levels.9" +
            ", .small-button.levels.10" +
            ", .small-button.levels.11" +
            ", .small-button.levels.12" +
            ", .small-button.levels.13" +
            ", .small-button.levels.14" +
            ", .small-button.levels.15" +
            ", .small-button.levels.16" +
            ", .small-button.levels.17" +
            ", .small-button.levels.18" +
            ", .small-button.levels.19" +
            ", .small-button.levels.20"
            ).addClass("disable");
        }
        if (levelAccessNumber >= 40) {
            $(".small-button.levels.22" +
            ", .small-button.levels.23" +
            ", .small-button.levels.24" +
            ", .small-button.levels.25" +
            ", .small-button.levels.26" +
            ", .small-button.levels.27" +
            ", .small-button.levels.28" +
            ", .small-button.levels.29" +
            ", .small-button.levels.30" +
            ", .small-button.levels.31" +
            ", .small-button.levels.32" +
            ", .small-button.levels.33" +
            ", .small-button.levels.34" +
            ", .small-button.levels.35" +
            ", .small-button.levels.36" +
            ", .small-button.levels.37" +
            ", .small-button.levels.38" +
            ", .small-button.levels.39" +
            ", .small-button.levels.40"
            ).addClass("disable");
        }
    }

};

//=========================================================================================================================================
// choose an answer to the question

var chooseAnswer = {

    optionSelectedA : function() {
        $(".next").removeClass("disable");
        $('a.option').removeClass('selected');
        $('a.option.A').addClass('selected');
        answer = true;
    },
    optionSelectedB : function() {
        $(".next").removeClass("disable");
        $('a.option').removeClass('selected');
        $('a.option.B').addClass('selected');
        answer = false;
    },
    optionSelectedC : function() {
        $(".next").removeClass("disable");
        $('a.option').removeClass('selected');
        $('a.option.C').addClass('selected');
        answer = false;
    },
    declare : function() {
        if (answer == true) {
            console.log('correct');
            overallScore += 1;
        } else {
            console.log('incorrect');
            // if a player returns to a question and reanswers incorrectly, points are deducted
            if (levelAccessNumber < overallScore) {
                overallScore -= 1;
            }
            // the score must drop below 0 or points are unfairly undeducted
            if (overallScore == 0) {
                overallScore = 0;
            }
        }
    },
    // Declare an answer to the question by clicking on the NEXT button
    nextQuestion : function () {
        chooseAnswer.declare();

        // the question number increases, giving access to higher levels
        levelAccessNumber += 1;

        // this prevents player going back and answering the same question correctly twice and gaining extra points
        if (overallScore > levelAccessNumber) {
            overallScore = levelAccessNumber;
        }

        // send players to the score page
        if ((levelAccessNumber == 20) || (levelAccessNumber == 40) || (levelAccessNumber == 60)) {
            renderHTML.renderScorePage();
        } else {
            renderHTML.renderQuestionPage();
        }
    },
    previousQuestion : function () {
        levelAccessNumber -= 1;

        renderHTML.renderQuestionPage();
    }
};

//=========================================================================================================================================

var scoreCalculations = {
    percentageScore : function() {
        var percentageScore = (overallScore / 20) * 100;
        var percentRounded = Math.floor(percentageScore);
        return percentRounded;
    },
    ranking : function() {
        switch (true) {
            case (overallScore <= 4):
                return "FASHIONABLY CHALLENGED";
                break;
            case ((overallScore >= 5) && (overallScore <= 8)):
                return "FASHIONISH";
                break;
            case ((overallScore >= 9) && (overallScore <= 12)):
                return "FASHIONSAVVY";
                break;
            case ((overallScore >= 11) && (overallScore <= 16)):
                return "FASHIONISTA";
                break;
            case ((overallScore >= 17) && (overallScore <= 20)):
                return "FASHIONADDICT";
                break;
        }
    },
    resetScore : function() {
        if (overallScore >= 20) {
            overallScore = 0;
        }
    },
    resetScore_BEGINNER : function() {
        overallScore = 0;
        levelAccessNumber = 0;
    },
    resetScore_INTERMEDIATE : function() {
        overallScore = 0;
        levelAccessNumber = 20;
    },
    // stop players from carrying points from one round to the next
    stopPointCarrying : function() {
        if ((levelAccessNumber == 20) || (levelAccessNumber == 40)) {
            overallScore = 0;
        }
    },
    resetEverything : function() {
        overallScore = 0;
        levelAccessNumber = 0;
    },
};
/*   STEP 1   */
export const leagueID = "1050870072245342208"; // your league ID
export const leagueName = "Cascadian Dynastic League of Legends"; // your league name
export const dues = 20; // (optional) used in template constitution page
export const dynasty = true; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>The Cascadian Dynastic League of Legends, born in 2024 out of the re-draft Cascadian League which was retired after 10 years of running. The league is our first venture for all managers into the world of Dynasty leagues. May your Fantasy Football Dynasty live long and prosper into a great Legend to be talked about for years.</p>
  <p>10 teams take on the challenge to be crowned Superb Owl champions year after year, win now, build for the future or compete for honours.</p>
  <p>The league can be split into various clans:</p>
  <p>The Old Firm: the original five teams from the very beginnings of the Cascadian League from 2014; Chris, Shawn, Eddie, James and Ryan.</p>
  <p>The New Kids: the five teams to join the league since it's inception replacing managers since retired; Mike, Shaun, Kawai (all since 2017), Alec (2019, 2022) and Jess (2022).</p>
  <p>or<p>
  <p>USA: the five managers born in the great lands that gave us this sport; Alec, Eddie, Jess, Ryan and Kawai.<p>
  <p>RotW: the five managers born in the Rest of the World; Chris, Shawn, James, Mike and Shaun.<p>
  <p>There was much success and as much sorrow to be had from the old Cascadian League. Five managers had won the Superb Owl in previous seasons, Chris, Eddie, Mike, Ryan and Alec. Chris was the most successful manager from the re-draft days, claiming four titles and a league best average points score of 106% of the league average. Mike claimed a 100% playoff track record. While Jess, although being the freshest member of the group, was the only manager to never make the playoffs. Kawai had the league worst 93% points scored compared to average and a league worst average finish position of 8th. Six managers had sunk to the bottom of the pile over the years gone by, Kawai, Ryan, Alec, Shaun, James and Shawn all finishing last at one point or another.<p>
  <p>The Cascadian Dynastic League of Legends will rewrite the history books. What went before no longer matters. Let your dynasty building commence!<p>
  `;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
     {
       "roster": 1,
       "managerID": "1050869741079949312",  // the user's manager ID
       "name": "Chris",
       "tookOver": 2014,
       "location": "Seattle", // (optional)
       "bio": "Member of the Old Firm and RotW clans. Ranked 3rd in the Post Starter Draft Ranks and 5th in the most likely to win Year 1. The most successful manager from the Cascadian League with four wins, including a three-win streak from 2015-2017. The only manager to make a trade in every season since they were introduced. Will that success carry over into the world of Dynasty?",
       "photo": "/managers/chris.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Mike", // Can be anything (usually your rival's name)
         link: 3, // manager array number within this array, or null to link back to all managers page
         image: "/managers/mike.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 745, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Trade Whisperer",
       "tradingScale": 10, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 2,
       "managerID": "1051348511771533312",  // the user's manager ID
       "name": "Shaun",
       "tookOver": 2017,
       "location": "Sydney, AUS", // (optional)
       "bio": "Member of the New Kids and RotW clans. Ranked 6th in the Post Starter Draft Ranks and 7th in the most likely to win Year 1. If Shaun didn’t have bad luck, he’d have no luck at all, holding the record for the worst upset losses to upset wins ratio in the league. Mr Optimistic himself, the week may be over after the first 10 seconds of game 1, but Dynasty is all about the long term, can Shaun translate the short-term panic into long term success?",
       "photo": "/managers/shaun.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Mike", // Can be anything (usually your rival's name)
         link: 3, // manager array number within this array, or null to link back to all managers page
         image: "/managers/mike.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 7547, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Don't Panic",
       "tradingScale": 4, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 3,
       "managerID": "1051452216072085504",  // the user's manager ID
       "name": "Mike",
       "tookOver": 2017,
       "location": "London, UK", // (optional)
       "bio": "Member of the New Kids and RotW clans. Ranked 4th in the Post Starter Draft Ranks and 1st in the most likely to win Year 1. The only other multi championship winning team from the Cascadian League era, tasting success in 2019 and 2021. Mike also held a 100% playoff record and boasted a league leading 65%-win record. Most likely to make a waiver move, averaging over 40 moves per season in the old redraft league, but will that philosophy translate to the world of Dynasty?",
       "photo": "/managers/mike.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Chris", // Can be anything (usually your rival's name)
         link: 1, // manager array number within this array, or null to link back to all managers page
         image: "/managers/chris.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 1233, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "TE", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Just keep winning",
       "tradingScale": 7, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 4,
       "managerID": "1053161203259797504",  // the user's manager ID
       "name": "Shawn",
       "tookOver": 2014,
       "location": "Seattle", // (optional)
       "bio": "Member of the Old Firm and RotW clans. Ranked 9th in the Post Starter Draft Ranks and 10th in the most likely to win Year 1. Shawn had held the longest playoff streak in a row, making the post season in every one of his first seven seasons. Unfortunately, victory was elusive, the Owl escaped him despite making the Championship game three years in a row 2017-2019, 2nd was the best he could do.",
       "photo": "/managers/shawn.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "den", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Everyone", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 871, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Auto drafting will be fine…",
       "tradingScale": 1, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 5,
       "managerID": "1053161904597782528",  // the user's manager ID
       "name": "James",
       "tookOver": 2014,
       "location": "Seattle", // (optional)
       "bio": "Member of the Old Firm and RotW clans. Ranked 1st in the Post Starter Draft Ranks and 4th in the most likely to win Year 1. The luck of the Irish is a thing in fantasy it seems as James held the record for most upset wins, almost twice as many as the league average. Despite not winning the Superb Owl, James has success in finishing 1st in the regular season in 2019.",
       "photo": "/managers/james.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Everyone", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 745, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "When do we get to see these touchdowns people keep talking about?",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },  
     {
       "roster": 6,
       "managerID": "1053384367487229952",  // the user's manager ID
       "name": "Alec",
       "tookOver": 2019,
       "location": "Patagonia", // (optional)
       "bio": "Member of the New Kids and Team USA. Ranked 2nd in the Post Starter Draft Ranks and 6th in the most likely to win Year 1. The last to be crowned Superb Owl Champion of the Cascadian League. Alec first joined the league in 2019 and flopped to last place and the worst points total ever seen in the league. After a short hiatus rejoined in 2022 and was a force, making the Championship game in both 2022 and 2023.",
       "photo": "/managers/alec.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2019, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Jess", // Can be anything (usually your rival's name)
         link: 8, // manager array number within this array, or null to link back to all managers page
         image: "/managers/jess.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 2309, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Where’s my spreadsheet?",
       "tradingScale": 1, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },  
     {
       "roster": 7,
       "managerID": "1053560862558003200",  // the user's manager ID
       "name": "Ryan",
       "tookOver": 2014,
       "location": "Seattle", // (optional)
       "bio": "Member of the Old Firm and Team USA. Ranked 7th in the Post Starter Draft Ranks and 3rd in the most likely to win Year 1. Ryan previously held the joint longest playoff drought having never made the playoffs in his first six seasons and then won the Superb Owl at the first time of making the playoffs in 2020. Ryan holds the record for least amount of points conceded.",
       "photo": "/managers/ryan.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "min", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Everyone", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 4046, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "QB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Defence is the best form of attack",
       "tradingScale": 2, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 8,
       "managerID": "1053846580492603392",  // the user's manager ID
       "name": "Jess",
       "tookOver": 2022,
       "location": "Patagonia", // (optional)
       "bio": "Member of the New Kids and Team USA. Ranked 5th in the Post Starter Draft Ranks and 2nd in the most likely to win Year 1. Jess is the newest member of the league, having only debuted in 2022, success has not come swiftly missing the playoffs in all seasons of the redraft league and losing all three editions of the Straski bowl. Dynasty is an opportunity to start fresh and build on solid foundations.",
       "photo": "/managers/jess.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2022, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "cle", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Dynasty", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Alec", // Can be anything (usually your rival's name)
         link: 6, // manager array number within this array, or null to link back to all managers page
         image: "/managers/alec.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 4988, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Did you play for The Ohio State?",
       "tradingScale": 2, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },
     {
       "roster": 9,
       "managerID": "1058132531708620800",  // the user's manager ID
       "name": "Kawai",
       "tookOver": 2017,
       "location": "Seattle", // (optional)
       "bio": "Member of the New Kids and Team USA. Ranked 10th in the Post Starter Draft Ranks and 9th in the most likely to win Year 1. Having joined the redraft league in 2017, it was a slow burner for Kawai, failing to make the playoffs until his 7th and final season in the redraft eventually finishing up 3rd. 8th was the best he could muster before that. Kawai held the record for lowest points average and joint longest playoff drought.",
       "photo": "/managers/kawai.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2017, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "sea", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Everyone", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 4034, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Things can only get better",
       "tradingScale": 3, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },  
     {
       "roster": 10,
       "managerID": "1059009478881939456",  // the user's manager ID
       "name": "Eddie",
       "tookOver": 2014,
       "location": "Seattle", // (optional)
       "bio": "Member of the Old Firm and Team USA. Ranked 8th in the Post Starter Draft Ranks and 8th in the most likely to win Year 1. Eddie has tasted success and sorrow, finishing both 1st and last and everything in between. Eddie held the record for the most average finisher in the Cascadian redraft league, finishing an average of 5th, with a 50% win record and average points for and against. Eddie does hold the record for most points scored in Championship week, unfortunately, he was not in the Superb Owl that year.",
       "photo": "/managers/eddie.jpg", // square ratio recommended (no larger than 500x500)
       "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
       "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
       "mode": "Rebuild", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
       "rival": {
         name: "Everyone", // Can be anything (usually your rival's name)
         link: null, // manager array number within this array, or null to link back to all managers page
         image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
       },
       "favoritePlayer": 8155, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
       "valuePosition": "RB", // (optional) Favorite position (QB, WR, RB, TE, etc.)
       "rookieOrVets": "Vets", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
       "philosophy": "Average can make the playoffs",
       "tradingScale": 2, // 1 - 10
       "preferredContact": "Sleeper", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
     },  
    // {
    //   "roster": 3,  // ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy",
    //   "tradingScale": 10, // 1 - 10
    //   "preferredContact": "Text", // 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
  ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    

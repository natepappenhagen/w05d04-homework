// 1. Require your node modules
const mongoose = require('mongoose');

// 2. Require your model (and possibly your extra data source);
const Vampires = require('./models/vampire.js');
const VampireCollection = require('./populateVampires')

// 3. Connect your database and collection name
const db = mongoose.connection;

// 4. Open your mongoose connection
mongoose.connect('mongodb://localhost:27017/vampires', { useNewUrlParser: true });

db.on("error", (err) => {
	console.log(err, "ERRORz")
});
db.on("connected", () => {
	console.log("mongoose is connected to mongodb!")
});

//-------------------------*                   *--------------------------------//
//Write your answers to add, query, update, remove, and Hungry for More below.
// Note: Remember to close your connection after you add, update, remove from your database
//-------------------------INSERT USING MONGOOSE--------------------------------//

// ### 				Add the vampire data that we gave you
/*
Vampires.collection.insertMany(VampireCollection,(err, data) => {
	console.log("added given VAMPS")
	mongoose.connection.close();
});
*/

//-------------------------*   Add New VAMP data   *--------------------------------//

/*
Vampires.create (
{
  name: 'snow leapord',
  hair_color: 'camo',
  eye_color: 'hungry',
  dob: new Date(2001, 9, 11, 9, 11),
  loves: ['observing', 'lasers'],
  location: 'catalonia, Espania',
  gender: 'f',
  victims: 300
}, (err, data) => {
  console.log("added one item");
  mongoose.connection.close();
});
*/

//-----------------------*        QUERYING         *-----------------------------//

//-------------------------*Select by comparison*--------------------------------//


// find the ladies!
// Vampires.find( {gender: { $eq: 'f' } },
// 	(err, response) => {
// 		console.log(response);
//    	      db.close();
// 	}
// );

// find super lethal vamps ( > 500 vics)
// Vampires.find( {victims: { $gt: 50 } },
// 	(err, response) => {
// 		console.log(response);
//    	      db.close();
// 	}
// );
// find victim range ( <= 150 victims)
// Vampires.find( {victims: { $lte: 150 } },
// 	 (err, response) => {
// 			console.log(response);
// 	   	      db.close();
//  });

// find victim count NOT EQUAL to 210234
// Vampires.find( {victims: { $ne: 210234 } },
// 	(err, response) => {
// 		console.log(response);
//    	      db.close();
// 	}
// );

//find victim range ( 150 - 500 victims )
// Vampires.find( {victims: { $gt: 150, $lt: 500 } },
// 	(err, response) => {
// 		console.log(response);
//    	      db.close();		
// 	}
// );



//-------------------*Select by exists or does not exist*------------------------//


// 								*Title Property?*
// Vampires.find( {
//	title: { $exists: true} },
// 		 (err, response) => {
// 			console.log(response);
//   	      db.close();
// })

//							  *No victims property*

// Vampires.find ({
//	victims: {$exists:false}},
// 		 (err, response) => {
// 	 		 console.log(response);
//   	      db.close();
// })

//							 *title but no victims*

// Vampires.find( {
// 	title    :   {$exists:true},
// 	 victims :   {$exists:false} },

// 		(err, response) => {
// 			console.log(response);
//    	      db.close();
// 	})

// 			*find any with victims AND the victims count greater than 1000*


// Vampires.find( {
// 	 victims :   {$exists:true},
// 	 victims :   {$gt:1000} },

// 		(err, response) => {
// 			console.log(response);
//        	  db.close();
// 	})



//----------------------------*Select with OR*----------------------------------//

//		 * Are from New York, New York, US or New Orleans, Louisiana, US*


//  Vampires.find(	{$or:
//  	 [{location: "New York, New York, US"},
// 	 {location: "New Orleans, Louisiana, US"} ]},

// 		  (err, response) => {
// 			console.log(response);
//        	 db.close();
// })


//   				*Love brooding or being tragic*
// Vampires.find( {
// 		 loves: { $in: ['brooding', 'being tragic'] } },

//   	 (err,response) => {
//         console.log(response);
//         db.close();
//     }
// );

// 			*Have more than 1000 victims or love marshmallows*

//  Vampires.find( { $or:
// 	[
// 	{loves: 	{$in: 	["marshmallows"]}},
// 	{victims:   {$gt:    1000           }},
// 	]},

// 	 (err, response) => {
// 		console.log(response);
//      	db.close();
// })

// 						*Have red hair or green eyes*

// Vampires.find(  { $or:
// 	 [
// 	 {hair_color:"red"},
// 	 {eyes_color:"green"}
// 	 ]},

// 	 (err, response) => {
// 	 	console.log(response);
//      	db.close();
// })


//--------------*Select objects that match one of several values*---------------//

//  			*love either frilly shirtsleeves or frilly collars*
// Vampires.find( 
//	{ loves:{ $in: 
//			['frilly shirtsleeves',
//			 'frilly collars'] } },

//     (err,response) => {
//         console.log(response);
//         db.close();
//     }
// );


// 							 *love brooding*
// Vampires.find( {
//			 loves: { $in:
//					 ['brooding'] } },

//    (err,response) => {
//        console.log(response);
//         db.close();
//     }
// );

//	 					*love at least one of the following:
//			 appearing innocent, trickery, lurking in rotting mansions, R&B music 

// Vampires.find( {
// 			 loves: { $in: 
//					['appearing innocent',
// 	 				'trickery',
//   				'lurking in rotting mansions',
//  				 'R&B music'] } },

//     (err,response) => {
//         console.log(response);
//         db.close();
//     }
// );
// 		*love fancy cloaks but not if they also love either top hats or virgin blood
// 						 * Hint-You will also have to use $nin

// Vampires.find( {
// 		 loves: { $in: // find vamps who love fancy cloaks
// 		 		['fancy cloaks'],

// 				 $nin: // but NOT if they also love top hats and virgin blood
//  				['top hats', 'virgin blood']}},

// 		 (err, response) => {
//  	   console.log(response);
//     		db.close();
// });


//							  DONE WITH DAY ONE  								//

//----------------------------*Negative Selection*------------------------------//
//				 *Love ribbons but do not have brown eyes*
// Vampires.find( { loves: { $in: ['ribbons']}, eye_color: {$not: {$eq: "brown"}}},
//	 (err, response) => {
//     console.log(response);
//     db.close();
// });

// 								*Are not from Rome*
// Vampires.find({location: {$not: {$eq: "Rome"}}},
//	 (err, response) => {
// 		console.log(response);
// 		db.close();
// })

// * Do not love any of the following: [fancy cloaks, frilly shirtsleeves, appearing innocent, being tragic, brooding]*
// Vampires.find( { loves: { $nin:
//				 ['fancy cloaks',
//				  'frilly shirtsleeves',
//				  'appearing innocent',
//				  'being tragic',
//				  'brooding' ]}},
//		 (err, response) => {
//    		 console.log(response);
//    		 db.close();
// });

//					 * Have not killed more than 200 people*
// Vampires.find({victims: {$not: {$gt: 200 }}},
//		 (err, response) => {
// 			console.log(response);
// 			db.close();
// })



//--------------------------------*REPLACE*-------------------------------------//

// * Replace the vampire called 'Claudia' with a vampire called 'Eve'.
// 'Eve' will have a key called 'portrayed_by' with the value 'Tilda Swinton'* 	//

// Vampires.findOneAndUpdate({name:"Claudia"}, {$set:{name:"Eve", portrayed_by:"Tilda Swinton"}}, {new:true},
//		 (err, response)=> {
// 			console.log(response);
// 			db.close();
// })

//		 *Replace the first male vampire with another whose name is 'Guy Man',
//			 and who has a key 'is_actually' with the value 'were-lizard' *

// Vampires.findOneAndUpdate({gender:"m"}, {$set:{name:"Guy Man", is_actually:"were-lizard"}}, {new:true},
//		 (err, response)=> {
// 			console.log(response);
// 			db.close();
// })


//--------------------------------*UPDATE*--------------------------------------//

// 					* Update 'Guy Man' to have a gender of 'f' **				//
// Vampires.findOneAndUpdate({name:"Guy Man"}, {$set:{gender:"f"}}, {new:true},
//		 (err, response) => {
// 			console.log(response);
// 				db.close()
// })
// 					* Update 'Eve' to have a gender of 'm' *
// Vampires.findOneAndUpdate({name:"Eve"}, {$set:{gender:"m"}}, {new:true},
//			 (err, response) => {
// 			console.log(response);
// 			db.close()
// })

// * Update 'Guy Man' to have an array called 'hates' that includes 'clothes' and 'jobs'*
// Vampires.findOneAndUpdate({name:"Guy Man"}, {$set:{hates:["clothes","jobs"]}}, {new:true},
//			 (err, response) => {
// 				console.log(response);
// 				db.close()
// })

// * Update 'Guy Man's' hates array also to include 'alarm clocks' and 'jackalopes'*
// Vampires.findOneAndUpdate({name:"Guy Man"}, {$push:{hates:["clothes","jobs"]}}, {new:true},
//		 (err, response) => {
// 			console.log(response);
// 				db.close()
// })

// 						* Rename 'Eve's' name field to 'moniker'*
// Vampires.findOneAndUpdate({name:"Eve"}, {$rename:{"name" : "moniker"}}, {new:true},
//		 (err, response) => {
// 			console.log(response);
// 				db.close()
// })
		 // * We now no longer want to categorize female gender as "f", but rather as fems.
			//  Update all females so that the they are of gender "fems". *
// Vampires.updateMany({gender:"f"}, {$set:{gender: "fems"}}, {new:true},
//		 (err, response) => {
// 			console.log(response);
// 				db.close()
// })



//--------------------------------*REMOVE*--------------------------------------//

//				 *Remove a single document wherein the hair_color is 'brown' *   //

// Vampires.findOneAndRemove(	{hair_color:"brown"},
//			 (err, response) => {
// 				console.log(response);
// 			app.close()
//	 })

// 		*We found out that the vampires with the blue eyes were just fakes!		//
// 		Let's remove all the vampires who have blue eyes from our database. *	//

// Vampires.deleteMany(	{eye_color:"blue"},
//		 (err, response) => {
// 		console.log(response);
// 		app.close()
// 	});




//-----------------------------*HUNGRY FOR MORE*---------------------------------//

//--------------*Select objects that match one of several values*----------------//

//-----------------------------*HNegative Selection*-----------------------------//


//module.exports = vampiresList;

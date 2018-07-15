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

//--------------------------------*REPLACE*-------------------------------------//

//--------------------------------*UPDATE*--------------------------------------//

//--------------------------------*REMOVE*--------------------------------------//





//-----------------------------*HUNGRY FOR MORE*---------------------------------//

//--------------*Select objects that match one of several values*----------------//

//-----------------------------*HNegative Selection*-----------------------------//


//module.exports = vampiresList;

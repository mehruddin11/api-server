//dependencies
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json())

const Products =[
	{
		id:'1',
		"description": "Two friends who escaped from a juvenile work farm take Emmett Watson on an unexpected journey to New York City in",
		"price": "0.00",
        "title": "THE LINCOLN HIGHWAY",
        "author": "Amor Towles",
        "contributor": "by Amor Towles",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9780735222359.jpg",
        "book_image_width": 331,
        "book_image_height": 500,
       "amazon_product_url": "https://www.amazon.com/dp/0735222355?tag=NYTBSREV-20",
       "featured":true
	},
	{
		id:'2',
		"description": "Maggie Dawes, a renowned travel photographer, struggles with a medical diagnosis over Christmas.",
		"price": "0.00",
        "title": "CLOUD CUCKOO LAND",
        "author": "Anthony Doerr",
        "contributor": "by Anthony Doerr",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982168438.jpg",
        "book_image_width": 331,
        "book_image_height": 500,
		"amazon_product_url": "https://www.amazon.com/dp/1538728621?tag=NYTBSREV-20",	
        "featured":true
	},
	{
		id:"3",
		"description": "An interconnected cast of dreamers and outsiders are in dangerous and disparate settings past, present and future.",
		"price": "0.00",
        "title": "CLOUD CUCKOO LAND",
        "author": "Anthony Doerr",
        "contributor": "by Anthony Doerr",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982168438.jpg",
        "book_image_width": 331,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/1982168439?tag=NYTBSREV-20",
        "featured":true


	},

	{
		id:'4',
		"description": "Members of a Midwestern family find themselves at a pivotal moment of moral crisis in 1971.",
		"price": "0.00",
        "title": "APPLES NEVER FALL",
        "author": "Liane Moriarty",
        "contributor": "by Liane Moriarty",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250220257.jpg",
        "book_image_width": 329,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/1250220254?tag=NYTBSREV-20",

	},
	{
		id:'5',
		"description": "The Delaney siblings suspect their father of causing the disappearance of their mother.",
		"price": "0.00",
        "title": "HARLEM SHUFFLE",
        "author": "Colson Whitehead",
        "contributor": "by Colson Whitehead",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385545136.jpg",
        "book_image_width": 329,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/0385545134?tag=NYTBSREV-20",

	},
	{
		id:"6",
		"description": "Ray Carney, a family man who sells furniture on 125th Street, gets a new clientele made up of vicious and unsavory characters.",
		"price": "0.00",
        "title": "THE BUTLER",
        "author": "Danielle Steel",
        "contributor": "by Danielle Steel",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781984821522.jpg",
        "book_image_width": 328,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/1984821520?tag=NYTBSREV-20",
        "age_group": "",
        "featured":true
	},
	{
		id:"7",
		"description": "The working relationship between a man and woman from different worlds develops into something new for them.",
		"price": "0.00",
        "title": "THE LAST THING HE TOLD ME",
        "author": "Laura Dave",
        "contributor": "by Laura Dave",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781501171345.jpg",
        "book_image_width": 331,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/1501171348?tag=NYTBSREV-20",
	},
	{
		id:'8',
		"description": "Hannah Hall discovers truths about her missing husband and bonds with his daughter from a previous relationship.",
		"price": "0.00",
        "title": "BILLY SUMMERS",
        "author": "Stephen King",
        "contributor": "by Stephen King",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982173616.jpg",
        "book_image_width": 327,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/1982173610?tag=NYTBSREV-20",
	},
	{
		id:'9',
		"description": "A killer for hire who only takes out bad guys seeks redemption as he does one final job.",
		"price": "0.00",
        "title": "THE JAILHOUSE LAWYER",
        "author": "James Patterson and Nancy Allen",
        "contributor": "by James Patterson and Nancy Allen",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9780316276627.jpg",
        "book_image_width": 322,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/0316276626?tag=NYTBSREV-20",
	},
	{
		id:9,
		"description": "A young lawyer winds up in an Alabama jail that remains mysteriously crowded.",
		"price": "0.00",
        "title": "BEWILDERMENT",
        "author": "Richard Powers",
        "contributor": "by Richard Powers",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9780393881141.jpg",
        "book_image_width": 330,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/0393881148?tag=NYTBSREV-20",
	},
	{
		id:'10',
		 "description": "The third book in the Tattooist of Auschwitz series. As the allies close in, Livia, Magda and Cibi face problems and secrets from their past.",
        "price": "0.00",
        "title": "THREE SISTERS",
        "author": "Heather Morris",
        "contributor": "by Heather Morris",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781250276896.jpg",
        "book_image_width": 329,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/1250276896?tag=NYTBSREV-20",
	},
	{
		id:'11',
		"description": "A novelist, a warehouse worker, an editorial assistant and a political adviser deal with changes.",
        "price": "0.00",
        "title": "BEAUTIFUL WORLD, WHERE ARE YOU",
        "author": "Sally Rooney",
        "contributor": "by Sally Rooney",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9780374602604.jpg",
        "book_image_width": 327,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/0374602603?tag=NYTBSREV-20",
	},
	{
		id:'12',
		"description": "A Faustian bargain comes with a curse that affects the adventure Addie LaRue has across centuries.",
        "price": "0.00",
        "title": "THE INVISIBLE LIFE OF ADDIE LARUE",
        "author": "V.E. Schwab",
        "contributor": "by V.E. Schwab",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9780765387561.jpg",
        "book_image_width": 331,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/0765387565?tag=NYTBSREV-20",
        "featured":true
	},
	{
		id:'13',
		"description": "Anthony Cook, an autocratic president, distrusts Mitch Rapp, who is working to uncover a traitor.",
        "price": "0.00",
        "title": "VINCE FLYNN: ENEMY AT THE GATES",
        "author": "Kyle Mills",
        "contributor": "by Kyle Mills",
        "contributor_note": "",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781982164881.jpg",
        "book_image_width": 327,
        "book_image_height": 500,
        "amazon_product_url": "https://www.amazon.com/dp/1982164883?tag=NYTBSREV-20",

	}

]
app.get('/product/:id' , (req, res)=>{
	const {id} = req.params;
	Products.map((product)=>{
		if(product.id === id){

			res.json(product);
		}
		
	})
	res.status(404).json("Not Found");
});
app.use('/',  (req, res, next)=>{
	const filters = req.query;
	const filterproducts = Products.filter((product)=>{
		let isvalid= true;
		for( key in filters){
			// console.log(key, product[key], filters[key]);
			isvalid =isvalid && product[key] == filters[key];
		}
		return isvalid;
	});
	res.send(filterproducts);
	

});


app.listen(3000 , ()=>{
	console.log("app is litening to port 3000")
} )
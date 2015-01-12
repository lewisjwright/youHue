# youHue
A JQuery plug-in which creates random colours for elements on each page load

##Your First Step

For this plug-in you will need JQuery linked to your file as well as youHue's own js file. 

###JQuery

To get started with JQuery, copy and paste the link below before the closing `</body>` tag **all** other javascript files must be linked to after your JQuery link in the file. If this is not done you may run into issues further along the way.

See link below:

```HTML
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```

###Install youHue

To get started with youHue you must first download the `youHue.js` file and link it to your project, the file you use should be named youHue.js

Then following the advice above place it underneath your JQuery link before the closing `</body>` tag. The link should look like the one below:

```HTML
<script type="text/javascript" src="youHue.js"></script>
```
Unless you have a seperate folder for your js files in which case do not forget to add the folder name before the file name, for example:

```HTML
<script type="text/javascript" src="js/youHue.js"></script>
```

##Getting to use youHue

Now we have all of our files downloaded and linked we are ready to get started with using the plug-in! Let us say you wanted to use this on a blog or website that had a lot of titles. youHue can take those titles and have them change colour on every page load in two ways but to see a full explanation and demonstration please refer to the demo.

See Below for an example of what I mean:

```HTML
<div class="post">
  <div class="post-title"><h2>Just Another Post</h2>
    <div class="post-content">
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Aliquam pellentesque neque odio, et posuere quam egestas a. 
				Nam euismod sed dui eu mattis. Fusce mollis elit euismod magna pharetra blandit.
				Duis semper leo turpis, vel sollicitudin purus sollicitudin id. Ut in interdum dolor...</p>
		</div>
</div>

```
To target the element you wanted (in this case the title) you would simply do this in you script file:
```JAVASCRIPT
$(".post-title").youHue({
//This is where you would put your chosen options and colour arrays
});
```

##Have some Fun!

There are a number of options you can use to change the way your chosen elements react to youHue and a full demonstration of those can be seen on the demo site, so please take a look! 

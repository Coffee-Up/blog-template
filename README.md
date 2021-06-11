<h1>🚧 This site is still in his early form & still under active constuction</h1>
<h1>Front-end repository of my Blog's website.</h1>
<p>This is the entire front-end repository of my website for educational purpose. It contains my own philosophy to organize a project, it has no pretention to give guidelines, in fact many web developers could tell you that it is pretty bad !</p>
<p>
<h2>Project's structure explained</h2>
	<ul>
	<li> I have used a desktop first philosophy for my css, because it was more convenient for me. Smartphone first is good too thought, but being able to preview it on pc is convenient when you start coding. Browsers are good to emulate mobiles BUT not infallible.
	</li>
	<p>Components should have a clickable property then use a class inside the component itself to define if it is < Component clickable /></p>
		<li>I prefer use the file extension in the imports</li>
		<li>
			This website has a folder plugins to create a gatsby-plugin that fetch data from back-end during the building. For things like comments (self-made).
		</li>
	</ul>
	<p>I hardly handle multiple files and folders in a project, but can easily handle long files, multiple files n a folder because I prefer having the global view quickly to understand it, that's the reason why everything is 	compacted, like only one folder for components, unstead having multiple folder inside it. <br/>
	I use a prefix in file's names to being able to search them quickly with <code>SHIFT + F</code> in a code editor. For example for any form related component I use <code>FormComponentName</code>
</p>
<h2>CSS</h2>
<p>All container (generaly div) have an id, it allows you to modify your html structure without the need to rewrite most of your CSS selectors, unless you remove an element inside a id's selector container. You divide the selectors in your CSS, this is the only way (as I'm aware) to do it in pure CSS.</p>
<p>I really dislike react's inline style for readability so I try as much as I can to avoid it. I have some strategies to avoid it. I prefer give my CSS the power to decide for my style because it is the tool created for this : 
<ul>
<li>
JSX give the name of the id or class like <code>id=`footer-container-${name}`</code> then in the CSS I specify the id selector in question to style it. In that way CSS when you need to make a change it's always in the CSS files and not between JSX & CSS. Quick & easy.
</li>
</ul>
<p>last child component are usually neutral. I prefer giving the power of data manipulation from the parent. For Example Postcard must just need title, date & other retrieve from parent PostList. PostList then make the call with graphql query and pass the properties needed. It allows me to have customizable "generic" component.
<p>
Of course to avoid any security issues, I use environments variables in my project. There is one in the plugin that fetch all the comments of my back end server, and one in the root. If you want make working the project you will need to build your own back end server, and change a little bit of code for that. In the future I will make a fork of this source code and you will be easily able to build it without tweaking. If you have any questions regarding this aspect you can contact me.
</p>
<p> 
The main tag of a post comes from the diretory it's contained bacause I like to think in few years I want to be able to see my post and will have the power to just use the folders of my post in my computer for archive it, in that way I have folders with the name of the main subject, then I have inside it folders with a date (YYYY-MM-DD). With this structure it's easy to sort it & search it. The way I achieve this sorting in the website is throught Graphql Queries, on each posts you can determine what is it's relative path internally then extract the root folder from it. As I like simple & quick representation it's the perfect structure for me.</p>

<h1>Front-end repository of my Blog's website.</h1>
<p>This is the entire front-end repository of my website for educational purpose. It contains my own philosophy to organize a project, it has no pretention to give guidelines, in fact many web developers could tell you that it is pretty bad !</p>
<p>
<h2>Project's structure explained</h2>
	<ul>
	<li> I have used a desktop first philosophy for my css, because it was more convenient for me
	</li>
	<p>
			Components should have a clickable property then use a class inside the component itself to define if it is 
     < Component clickable />
		</p>
		<li>I prefer use the file extension in the imports</li>
		<li>
			This website has a folder plugins to create a gatsby-plugin that fetch data from back-end during the building. For things like comments (self-made).
		</li>
	</ul>
	<ul>
		<h2>Global classes for :</h2>
		<li></li>
		<li></li>
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

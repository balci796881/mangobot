class ground
{
	constructor()
	{
		var options={
			isStatic:true,
			friction:0.4			
			}
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
		rectMode(CENTER)
		fill(255)
		rect(500,625,1200,20);
			
	}

}
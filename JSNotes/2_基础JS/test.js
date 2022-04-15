class Chameleon {
   static colorChange(newColor) {
      this.newColor = newColor;
      return this.newColor;
   }

   constructor({ newColor = "green" } = {}) {
      this.newColor = newColor;
   }
}

const freddie = new Chameleon({ newColor: "purple" });
freddie.__proto__.constructor.colorChange("orange");
console.log(freddie);

function sx(){

}
         
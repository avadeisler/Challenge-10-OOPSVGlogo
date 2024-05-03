
class Shape{
  // Defines Shape which intializes 'color' and sets the 'color' value.
  
      constructor(){
          this.color=''
      }
      setColor(color){
          this.color=(color);
      }
  }
  // Defines Circle that extends Shape and renders SVG Circle with position, size, and color based on the current properties.
  class Circle extends Shape{
      render(){
          return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
      }
  }
  // Defines Square that extends Shape and renders SVG Square with position, size, and color based on the current properties.
  class Square extends Shape{
      render(){
          return `<rect x="50" height="200" width="200" fill="${this.color}">`
      }
  }
  // Defines Triangle that extends Shape and renders SVG Triangle with position, size, and color based on the current properties.
  class Triangle extends Shape{
      render(){
          return `<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`
      }
  };
  
  module.exports = {Circle, Square, Triangle}
  
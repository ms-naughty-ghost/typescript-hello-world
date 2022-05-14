let foo = "A";
(function(){
  let bar = () => foo;
  let foo = "B";
  // Bが表示される
  console.log(bar());
}());
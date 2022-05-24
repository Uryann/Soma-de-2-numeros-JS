    
    //Soma 2 de Números 
    document.querySelector( 'button' )
      .addEventListener( 'click', handleClick, false );
    
    function handleClick() {
      var numero1 = document.querySelector( '[data-sum="numero1"]').value;
      var numero2 = document.querySelector( '[data-sum="numero2"]').value;
     
      
      document.querySelector( '[data-sum="result"]' ).innerHTML = sum( numero1, numero2 );
    }
    
    function sum( numero1, numero2 ) {
      var DECIMAL = 10;
    return parseInt( numero1, DECIMAL ) + parseInt( numero2, DECIMAL );
}
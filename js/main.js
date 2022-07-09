$(document).ready(function() {
  const loadPage = () => {
    $('#main').empty();
    const noOfCol = Math.floor((window.innerWidth - 10)/70);
    const noOfRows = Math.floor((window.innerHeight - 10)/70);
    const colgap = (window.innerWidth - (noOfCol * 60) - 10)/noOfCol;
    const rowgap = (window.innerHeight - (noOfRows * 60) - 10)/noOfRows;

    const totalSquare = noOfCol * noOfRows;

    $('#main').css('grid-template-columns',`repeat(${noOfCol}, 60px)`)
    $('#main').css('grid-template-rows', `repeat(${noOfRows}, 60px)`);
    $('#main').css('grid-column-gap', `${colgap}px`);
    $('#main').css('grid-row-gap', `${rowgap}px`);

    for(let i=0; i< totalSquare;i++){
      const randNumber = Math.floor(Math.random() * 101);
      const divNumber = `<div id="number-container"><p id="number">${randNumber}</p></div>`
      $('#main').append(divNumber);
    };
  };

  loadPage();

  $(window).resize(() => {
      loadPage();
  });
});

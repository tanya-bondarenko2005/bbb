let jsonContent = '{"items": ["Элемент 1", "Элемент 2", "Элемент 3"]}';
let listData = JSON.parse(jsonContent);
let ulElement = document.createElement('ul');

listData.items.forEach(function(item) {
    let liElement = document.createElement('li');
    liElement.textContent = item;
    ulElement.appendChild(liElement);
});

document.body.appendChild(ulElement);

$(document).ready(function() {
    console.log($('body').children());
});





let tableData = [
  ["", "Present", "Past", "Future"],
  ["+", "i am", "i was", "i will"],
  ["-", "i am not", "i wasnt", "ill not"],
  ["?", "do i?", "did i", "will i"]
];


let timeDescriptions = {
  "Present": "Текущее время",
  "Past": "Прошедшее время",
  "Future": "Будущее время"
};


$(document).ready(function() {

  let table = $('<table>').addClass('my-table');


  tableData.forEach(function(rowData, rowIndex) {
      let row = $('<tr>').appendTo(table);

      rowData.forEach(function(cellData, columnIndex) {
          let cell = $('<td>').text(cellData).appendTo(row);

          
          if (rowIndex === 0 || columnIndex === 0) {
              cell.addClass('salad-color');

             
              cell.hover(function() {
                
                  let tooltip = $('#tooltip');
                  if (!tooltip.length) {
                      tooltip = $('<div>').attr('id', 'tooltip').appendTo('body');
                  }

             
                  tooltip.text(timeDescriptions[cell.text()]);

                  
                  let offset = cell.offset();
                //   свойство получения координат относительно отступов родительского элемента

                  tooltip.css({
                      top: offset.top + cell.outerHeight(),
                    //   изменение высоты элемента
                      left: offset.left
                  });
              }, function() {
                  
                  $('#tooltip').remove();
              });
          } else {
              cell.addClass('turquoise-color');
          }
      });
  });

  $('body').append(table);
  table.addClass('my-table');
});

//8
$(document).ready(function() {
 
  $('#submitButton').click(function() {
     
      let formIsValid = true;

      $('form input').each(function() {
          if ($(this).val() === '') {
              formIsValid = false;
              return false;
            //    если пустое то ложь
          }
      });

      // Вывод предупреждения, если не все поля заполнены
      if (!formIsValid) {
          $('#warningMessage').show();
      } else {
          $('#warningMessage').hide();
          // Здесь можно добавить код для отправки данных формы
      }
  });
});

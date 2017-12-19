
$('#goodGood').click(function () {

    $('#containerGood').append('<input type="text" placeholder="Value"> &nbsp;');
    $('#containerGood').append('<input type="text" placeholder="Price"> <br>');

});

$('#sub-img-1').click(function () {
    var imgValOne = $('#sub-img-1').attr('src');

    $('#main-img').attr('src',imgValOne);
});

$('#sub-img-2').click(function () {
    var imgValTwo = $(this).attr('src');

    $('#main-img').attr('src',imgValTwo);
});
$('#sub-img-3').click(function () {
    var imgValThree = $(this).attr('src');
    $('#main-img').attr('src', imgValThree);
});
$('#sub-img-4').click(function () {
    var imgValFour = $(this).attr('src');
    $('#main-img').attr('src',imgValFour);
});



document.getElementById('buttonBtn').onclick = function () {
    var heading = document.createElement('h2');
    var paragraph = document.createElement('p');

    heading.innerHTML = 'This is Heading tag second practice';
    paragraph.innerHTML = 'This is paragraph tag second practice';

    document.getElementById('div11').appendChild(heading);
    document.getElementById('div11').appendChild(paragraph);

}



$('#fName').keyup(function () {
   var fNameValue = $('#fName').val();
   $('#fNameVal').val(fNameValue);
})

$('#lName').keyup(function () {
    var lNameValue = $('#lName').val();
    $('#lNameVal').val(lNameValue);
})
$('#lName').blur(function () {
    var fNameValue = $('#fName').val();
    var lNameValue = $('#lName').val();

    var fullNameVal = fNameValue +' '+ lNameValue;
    $('#fullNameVal').val(fullNameVal);
})

$('#btn').click(function () {
    var firstVal = Number( $('#firsValue').val() ) ;
    var lastVal = Number( $('#lastValue').val() );
    var fullVal = firstVal + lastVal;

    $('#fullValue').val(fullVal);
})
$('#sub').click(function () {
    var firstVal =$('#firsValue').val()  ;
    var lastVal = $('#lastValue').val() ;
    var fullVal = firstVal - lastVal;

    $('#fullValue').val(fullVal);
})
$('#mul').click(function () {
    var firstVal =$('#firsValue').val()  ;
    var lastVal = $('#lastValue').val() ;
    var fullVal = firstVal * lastVal;

    $('#fullValue').val(fullVal);
})

 $('#div').click(function () {
    var firstVal =$('#firsValue').val()  ;
    var lastVal = $('#lastValue').val() ;
    var fullVal = firstVal / lastVal;

    $('#fullValue').val(fullVal);
})


$('#Button').click(function () {
    var firstNameValue = $('#firstName').val();
    var lastNameValue = $('#lastName').val();

    var fullName = firstNameValue+ " "+lastNameValue;

    $('#fullName').val(fullName);
})





//
// var addition = document.getElementById('add');
//
// addition.onclick  = function () {
//     var firstval = Number( document.getElementById('firstValue').value);
//     var secondval = Number(document.getElementById('secondValue').value);
//
//     var result = firstval + secondval;
//     document.getElementById('result').value=result;
// };
//
// var subtraction = document.getElementById('sub');
// subtraction.onclick = function () {
//     var firstval = document.getElementById('firstValue').value;
//     var secondval = document.getElementById('secondValue').value;
//
//     var result = firstval - secondval;
//     document.getElementById('result').value=result;
// };
//
// var multiplication = document.getElementById('mul');
// multiplication.onclick = function () {
//     var firstval = document.getElementById('firstValue').value;
//     var secondval = document.getElementById('secondValue').value;
//
//     var result = firstval * secondval;
//     document.getElementById('result').value=result;
// };
// var division = document.getElementById('div');
// division.onclick = function () {
//     var firstval = document.getElementById('firstValue').value;
//     var secondval = document.getElementById('secondValue').value;
//
//     var result = firstval / secondval;
//     document.getElementById('result').value=result;
// };
//
// var modulus = document.getElementById('modulus');
//
// modulus.onclick = function () {
//   var firstval = document.getElementById('firstValue').value;
//   var secondval = document.getElementById('secondValue').value;
//
//   var result = firstval%secondval;
//   document.getElementById('result').value=result;
// };
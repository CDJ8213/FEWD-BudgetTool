var nameInput = document.getElementById('name');
var amountInput = document.getElementById('amount');
var selector_options = document.getElementById('selector_options');
var data_entry_saves = document.getElementById('save');
var data_entry_clear = document.getElementById('clear');
var balance = 0;
var balancegrid = document.getElementById('balance_grid');


function clearFn(){
   nameInput.value=null;
   amountInput.value=null;

}

function aggregate(){
   var debitOrCredit=1;
   if (selector_options.selectedIndex==0){
      debitOrCredit = -1;
   }

   balance=balance+(debitOrCredit*amountInput.value);
   var newrow = document.createElement('div');
   newrow.className='grid-item';
   newrow.innerHTML=nameInput.value;
   balancegrid.appendChild(newrow);

   newrow = document.createElement('div');
   newrow.className='grid-item';
   newrow.innerHTML=balance;
   balancegrid.appendChild(newrow);


}












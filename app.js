function calcTip(){
    let billamount=document.getElementById('Amount').value;
    let percentage=document.getElementById('percentage').value;
    let numberof_persons=document.getElementById('persons').value;

    let tip=(billamount * percentage)/100;
    //console.log(tip);
    document.getElementById('tip').value=tip;
    let total=parseFloat(tip)+parseFloat(billamount);
    document.getElementById('totalamount').value=total;
    //console.log(total);
     let personamount=(total/numberof_persons);
     document.getElementById('perpersonamount').value=personamount;
}

function rewriteInnerTexts(elements,newTexts){
    elements.forEach((elem,index)=>{
    elem.innerText=newTexts[index]
});
}

function blinkRed(){
    redRows=document.querySelectorAll(".red");
    redRows.forEach((elem)=>{elem.classList.toggle("transparentRed")})
}

function toggleCursive(){
    mutatingRows=document.querySelectorAll(".red");
    mutatingRows.forEach((elem)=>{elem.classList.toggle("italicized")})

    setTimeout(()=>{
        mutatingRows.forEach((elem)=>{elem.classList.toggle("italicized")})
    },5000)

}

function mainFunction(){

//create markup
    const main=document.createElement("main"),
          table=document.createElement("table"),
          thead=document.createElement("thead"),
          tbody=document.createElement("tbody"),
          headerRow=document.createElement("tr"),
          tableRow=document.createElement("tr");


    table.appendChild(thead);
    table.appendChild(tbody);

    let headerString="Array method";
    for(let i=0;i<2;i++){
        th=document.createElement("th"),
        th.innerText=headerString;
        headerRow.appendChild(th);
        headerString="Mutating";
    }
          
    for(let i=0;i<2;i++){
         td=document.createElement("td")
         tableRow.appendChild(td);
    }

    thead.appendChild(headerRow);

    for(let i=0;i<10;i++) {
        let row=tableRow.cloneNode(true);
        tbody.appendChild(row)
    };

    main.appendChild(table);
    document.querySelector("body").appendChild(main);

//fill table with text
    const arrayMethods={
        slice:false,
        splice:true,
        sort:true,
        filter:false,
        flat:false,
        reverse:true,
        toString:false,
        map:false,
        join:false,
        fill:true
    }
    const methodNames=Object.keys(arrayMethods),
          mutating=Object.values(arrayMethods),
          cellsOdd=document.querySelectorAll("td:nth-child(odd)"),
          cellsEven=document.querySelectorAll("td:nth-child(even)"),
          rows=document.querySelectorAll("tbody>tr");

    rewriteInnerTexts(cellsOdd,methodNames)
    rewriteInnerTexts(cellsEven,mutating)


    //change color/style
    rows.forEach((elem,index)=>{
            elem.classList.add(mutating[index]?"red":"green")
            
    })

    setInterval(blinkRed,3000);
    setTimeout(toggleCursive,5000);
    setTimeout(()=>{main.removeChild(table)},90000)

}

mainFunction();
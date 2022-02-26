import IGlist from './IGlist.js'
import SClist from './SClist.js'


export default function CandC(comparecontrast){
    return `   
    <section class="sectioncc container">
    <div class="ccbg" id="comparecontrast">
        <h1 class="ccheader text">Compare and Contrast</h1>
        <div class="search">
            <input type="search" name='comparecontrast' placeholder="Search Features...">
        </div><br>
        <div class="row">
        <div class="col-6">
            <h1 class="iglistheader text"> ${comparecontrast[0].title}</h1>
        </div>
        <div class="col-6">
            <h1 class="sclistheader text">${comparecontrast[1].title}</h1>
        </div>
        </div>
        <div class="row comparecontrastlist">
        <div class="list col-6 iglist">
            ${IGlist(comparecontrast[0].items)}
        </div>
        <div class="list col-6 sclist">
            ${SClist(comparecontrast[1].items)}
        </div>
            </div>
            <br><br>
        </div>
    </div>
</section>`
}
// export function CandCItems(comparecontrast){
//     return comparecontrast.map(d=>
//         d.items.map(item=>`
//         <div class="list col-6"><div class=smalltext>${item}</div>
//         `));


    // for (let i = 0; i < comparecontrast.length; i++){
    //     console.log(comparecontrast[i].items.length)
    //     for (let j = 0; j < comparecontrast[i].items.length; j++){
    //         console.log(j)
    //         return `
    //         <div class="list col-6"><div class=smalltext>${comparecontrast[i].items[j]}</div>
    //         `
    //     }
    // }
//}
    
        

    // return comparecontrast.map(d=>`
    // <div class="list col-6">
    //         <div class=smalltext>${d.items[0]}</div>
    //         <div class="smalltext">${d.items[1]}</div>
    //         <div class="smalltext">${d.items[2]}</div>
    //         <div class="smalltext">${d.items[3]}</div>
    //         <div class="smalltext">${d.items[4]}</div>
    //         <div class="smalltext">${d.items[5]}</div>
    //         <div class="smalltext">${d.items[6]}</div>
    //         <div class="smalltext">${d.items[7]}</div>
    //         <div class="smalltext">${d.items[8]}</div>
    //         <div class="smalltext">${d.items[9]}</div>
    //     </div>     
    // `).join('');
//}

    // export function CandCFilter(data){
    //     document.querySelector('.search input[name="comparecontrast').addEventListener('input', (event)=>{
    //         console.log(event.target.value);
    //         const keyword = event.target.value;
    //         const ccfiltered = data.comparecontrast.filter(d=>{
    //             console.log(d.items.length) //10 = length of each item in d (d=> is iteration for each object in d (2 arrays))
    //             for (let i = 0; i < d.items.length; i++) {
    //                 console.log(d.items);
    //                 console.log(d.items[i])
    //                 return d.items[i].toLowerCase().includes(keyword.toLowerCase());
    //             }
    //         })
    //         console.log(ccfiltered);
    //         document.querySelector('.comparecontrastlist').innerHTML = CandCItems(ccfiltered);
        
    //     })
    // }
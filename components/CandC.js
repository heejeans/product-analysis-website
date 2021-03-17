export default function CandC(comparecontrast){
    return `   
    <section class="sectioncc container">
    <div class="ccbg">
        <h1 class="ccheader text" id="comparecontrast">Compare and Contrast</h1>
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
            ${CandCItems(comparecontrast)}
            </div>
            <br><br>
        </div>
    </div>
</section>`
}
export function CandCItems(comparecontrast){
    return comparecontrast.map(d=>`
    <div class="list col-6">
            <div class=smalltext>${d.items[0]}</div>
            <div class="smalltext">${d.items[1]}</div>
            <div class="smalltext">${d.items[2]}</div>
            <div class="smalltext">${d.items[3]}</div>
            <div class="smalltext">${d.items[4]}</div>
            <div class="smalltext">${d.items[5]}</div>
            <div class="smalltext">${d.items[6]}</div>
            <div class="smalltext">${d.items[7]}</div>
            <div class="smalltext">${d.items[8]}</div>
            <div class="smalltext">${d.items[9]}</div>
        </div>     
    `).join('');
}

    export function CandCFilter(data){
        document.querySelector('.search input[name="comparecontrast').addEventListener('input', (event)=>{
            console.log(event.target.value);
            const keyword = event.target.value;
            const ccfiltered = data.comparecontrast.filter(d=>{
                for (let i = 0; i < d.items.length; i++) {
                return d.items[i].toLowerCase().includes(keyword.toLowerCase());
                }
            })
            console.log(ccfiltered);
            document.querySelector('.comparecontrastlist').innerHTML = CandCItems(ccfiltered);
        
        })
    }
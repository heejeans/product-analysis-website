export default function SClist(scitems){
    //parameters = comparecontrast[1].items
    return scitems.map(item=> `
    <div class=smalltext>${item}</div>
    `).join('');
}

export function SCfilter(scitems){
    document.querySelector('.search input[name="comparecontrast').addEventListener('input', (event)=>{
    console.log(event.target.value);
    const keyword = event.target.value;
    const scfiltered = scitems.filter(d=>{
        return d.toLowerCase().includes(keyword.toLowerCase());
    })
    console.log(scfiltered);
    document.querySelector('.sclist').innerHTML = SClist(scfiltered);

})
}